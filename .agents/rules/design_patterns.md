# Zipmi Design System Rule

- **Global App Background**: Enforce `#F5F5F5` (`bg-[#f5f5f5]`) as the background color for the entire application and all screens.
- **Parent Container Padding**: Always enforce `px-[24px]` (24px side padding) and `py-[32px]` (32px top/bottom padding) on parent screen containers.
- **Header Spacing**: Maintain 32px vertical separation (`mb-[32px]`) below back button / header bar containers.
- **Full Width**: Screen content elements must extend full width (`w-full`), bounded strictly by the 24px lateral padding and 32px top/bottom padding.
- **Material Symbols**: Use Google Material Design Icons (`material-symbols-outlined`) exclusively. Do not use Lucide icons.
- **Input Specs**: Height 44px (`min-h-[44px]`), radius 8px (`rounded-[8px]`), padding `px-[12px] py-[10px]`, labels 14px Inter medium.
- **Checkboxes**: Filled blue background (`bg-[#0038d0] border-[#0038d0]`) with white check icon when checked.
- **No Hover**: Mobile PWA touch interactions only. Do not use `hover:` classes. Use `active:scale-[0.98]` active touch feedback.

