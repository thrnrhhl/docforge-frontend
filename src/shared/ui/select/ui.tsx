"use client";

import * as Headless from "@headlessui/react";
import { cn } from "@/shared/lib";
import React, {
  Children,
  forwardRef,
  Fragment,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { Input } from "..";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Virtuoso } from "react-virtuoso";
import { useThrottle } from "@uidotdev/usehooks";

export type SelectProps = {
  className?: string;
  placeholder?: React.ReactNode;
  autoFocus?: boolean;
  hideSearch?: boolean;
  "aria-label"?: string;
  virtualized?: boolean;
  children: React.ReactElement | Array<React.ReactElement>;
} & Headless.ListboxProps<typeof Fragment, SelectValue[] | SelectValue | null>;

export type SelectValue = {
  id: string;
  name: string;
};

export type SelectOptionProps = {
  children: React.ReactNode;
  className?: string;
} & Omit<Headless.ListboxOptionProps<"div", unknown>, "className">;

const Select: React.FC<SelectProps> = forwardRef(function Select(
  props,
  ref: React.ForwardedRef<HTMLSpanElement>
) {
  const { value, defaultValue, children: options } = props;

  // Parse passed value from above component to convert it to array ofComboboxValue
  const [selected, setSelected] = useState<SelectValue[]>(() => {
    if (value) {
      if (Array.isArray(value)) {
        return value;
      } else {
        return [value];
      }
    }

    if (defaultValue) {
      if (Array.isArray(defaultValue)) {
        return defaultValue;
      } else {
        return [defaultValue];
      }
    }

    return [];
  });

  // Query used to find needed object in list
  const [query, setQuery] = useState("");

  // Found objects by search query
  const [filteredOptions, setFilteredOptions] = useState<React.ReactElement[]>(
    () => {
      if (props.virtualized) {
        return [];
      }

      if (Array.isArray(options)) {
        return options;
      } else {
        return [options];
      }
    }
  );

  // Handle select of the item in the list
  const handleChange = (value: SelectValue | SelectValue[]) => {
    if (Array.isArray(value)) {
      setSelected(value.filter((el) => el.id));
    } else {
      if (value.id) {
        setSelected([value]);
      }
    }
    props.onChange?.(value);
    setQuery("");
  };

  // Handle search on query change
  useEffect(() => {
    if (props.virtualized) {
      return;
    }

    const arrayOfChildren = Children.toArray(options).filter(isValidElement);
    setFilteredOptions(
      arrayOfChildren.filter((el) => {
        const props = el.props as SelectOptionProps;
        const value = props.value as SelectValue;
        return value.name.toLowerCase().includes(query.toLowerCase());
      })
    );
  }, [options, query]);

  useEffect(() => {
    if (value) {
      if (Array.isArray(value)) {
        setSelected(value);
      } else {
        setSelected([value]);
      }
    } else {
      setSelected([]);
    }
  }, [value]);

  return (
    <SelectList
      {...ref}
      {...props}
      selected={selected}
      filteredOptions={filteredOptions}
      children={options}
      onChange={handleChange}
      onQueryChange={setQuery}
    />
  );
});

const SelectOption: React.FC<
  {
    children: React.ReactNode;
    className?: string;
  } & Omit<Headless.ListboxOptionProps<"div", unknown>, "className">
> = ({ children, className, ...props }) => {
  return (
    <Headless.ListboxOption as={Fragment} {...props}>
      {({ selectedOption }) => {
        if (selectedOption) {
          return (
            <div className={cn(className, "flex min-w-0 items-center")}>
              {children}
            </div>
          );
        }

        return (
          <div
            className={cn(
              "group/option grid cursor-default grid-cols-[1fr,theme(spacing.5)] items-baseline gap-x-2 rounded-md py-2.5 pl-2 pr-3.5 sm:grid-cols-[1fr,theme(spacing.4)] sm:py-1.5 sm:pl-1.5 sm:pr-3 text-sm",
              "outline-none data-[focus]:bg-violet-100",
              "forced-color-adjust-none forced-colors:data-[focus]:bg-[Highlight] forced-colors:data-[focus]:text-[HighlightText]",
              "data-[disabled]:opacity-50"
            )}
          >
            <span className={cn(className, "flex min-w-0 items-center")}>
              {children}
            </span>

            <CheckIcon className="w-4 h-4 text-black relative hidden self-center stroke-current group-data-[selected]/option:inline" />
          </div>
        );
      }}
    </Headless.ListboxOption>
  );
};

const SelectLabel: React.FC<React.ComponentPropsWithoutRef<"span">> = ({
  className,
  ...props
}) => (
  <span
    {...props}
    className={cn(
      className,
      "truncate first:ml-0 sm:ml-2 sm:first:ml-0 text-sm"
    )}
  />
);

const SelectDescription: React.FC<React.ComponentPropsWithoutRef<"span">> = ({
  className,
  children,
  ...props
}) => (
  <span
    {...props}
    className={cn(
      className,
      "flex flex-1 overflow-hidden text-zinc-500 before:w-2 before:min-w-0 before:shrink group-data-[focus]/option:text-white"
    )}
  >
    <span className="flex-1 truncate">{children}</span>
  </span>
);

export const SelectList: React.FC<
  SelectProps & {
    selected: SelectValue[];
    filteredOptions: React.ReactElement[];
    onQueryChange: (str: string) => void;
  }
> = forwardRef(function Combobox(
  {
    selected,
    filteredOptions,
    className,
    placeholder,
    autoFocus,
    virtualized,
    hideSearch = false,
    "aria-label": ariaLabel,
    multiple,
    children,
    onChange,
    onQueryChange,
    ...props
  },
  _
) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const isShowInput = !hideSearch && !virtualized;

  return (
    <Headless.Listbox
      {...props}
      ref={rootRef}
      value={multiple ? selected : selected[0] ?? ""}
      multiple={multiple}
      as="div"
      data-slot="control"
      onChange={onChange}
    >
      <Headless.ListboxButton
        autoFocus={autoFocus}
        aria-label={ariaLabel}
        className={cn([
          "group relative flex items-center w-full border border-neutral-300 border-solid bg-white rounded-md h-8 shadow-sm appearance-none",
          className,
        ])}
      >
        {selected.length > 0 && selected[0].id ? (
          <span className="relative block w-full appearance-none truncate rounded-md py-[calc(theme(spacing[1.5]))] text-black text-left text-sm px-2 bg-transparent">
            {selected[0].name}
          </span>
        ) : (
          <p className="relative block w-full appearance-none truncate rounded-md px-2 text-left text-sm text-neutral-500">
            {placeholder ?? "123"}
          </p>
        )}

        {selected.length > 1 && (
          <div className="absolute inset-y-0 right-6 my-auto h-fit bg-violet-500 text-[0.625rem] text-white py-px px-1.5 rounded-md">
            + {selected.length - 1}
          </div>
        )}

        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon className="size-5 stroke-zinc-500 group-data-[disabled]:stroke-zinc-600 sm:size-4" />
        </span>
      </Headless.ListboxButton>

      <Headless.ListboxOptions
        as="div"
        transition
        anchor="bottom start"
        style={{ width: rootRef.current?.clientWidth }}
        className={cn(
          "mt-1 h-[230px] z-[9999] overflow-hidden",
          "isolate select-none scroll-py-1 rounded-md w-full",
          "outline outline-1 outline-transparent focus:outline-none",
          "overflow-y-scroll overscroll-contain",
          "bg-white backdrop-blur-xl",
          "shadow-lg ring-1 ring-zinc-950/10",
          "transition-opacity duration-100 ease-in data-[transition]:pointer-events-none data-[closed]:data-[leave]:opacity-0"
        )}
      >
        {isShowInput && (
          <Input
            className="rounded-none rounded-t-lg border-l-0 border-r-0 border-t-0 shadow-none outline-0 ring-0 focus:border-primary-300 focus:outline-none focus:ring-0"
            onChange={(e) => onQueryChange(e.target.value)}
          />
        )}

        {virtualized && children}

        {!virtualized && (
          <div className="p-1">
            {filteredOptions.length > 0 ? (
              filteredOptions
            ) : (
              <p className="flex h-9 items-center justify-center text-sm">
                Ничего не найдено
              </p>
            )}
          </div>
        )}
      </Headless.ListboxOptions>
    </Headless.Listbox>
  );
});

interface SelectVirtualizedProps<T> {
  totalCount: number;
  list: ({id: string; name: string}&T)[]
  onInputChange?: (value: string) => void;
  children: (data: { index: number, data: T }) => React.ReactNode;
};

const SelectVirtualized = <T extends {}>({
  list,
  totalCount,
  children,
}: SelectVirtualizedProps<T>) => {
  const [query, setQuery] = useState<string>("");
  const [displayedList, setDisplayedList] = useState(list);

  const throttledValue = useThrottle(query, 200);


  useEffect(() => {
    setDisplayedList(list.filter(item => item.name.toLowerCase().includes(throttledValue.toLowerCase())));
  }, [throttledValue])

  return (
    <div data-aria-label="select-virtualized">
        <Input
          className="rounded-none rounded-t-lg border-l-0 border-r-0 border-t-0 shadow-none outline-0 ring-0 focus:border-primary-300 focus:outline-none focus:ring-0"
          onChange={(e) => setQuery(e.currentTarget.value)}
        />

      <div className="p-1">
        <Virtuoso
          style={{height: "11.875rem"}}
          data={displayedList}
          totalCount={totalCount}
          itemContent={(index, data) => children({ index, data })}
        />
      </div>
    </div>
  );
};

export {
  Select,
  SelectDescription,
  SelectLabel,
  SelectOption,
  SelectVirtualized,
};
