# Button Component Tests

This file contains comprehensive tests for the Button component.

## Test Coverage

### ✅ Rendering (3 tests)

- Renders with children
- Renders as button element
- Applies custom className

### ✅ Variants (5 tests)

- Primary (default)
- Secondary
- Success
- Danger
- Outline

### ✅ Sizes (3 tests)

- Small (sm)
- Medium (md - default)
- Large (lg)

### ✅ Pixelated (2 tests)

- Pixelated font (true - default)
- Normal font (false)

### ✅ Interactions (2 tests)

- Calls onClick when clicked
- Does not call onClick when disabled

### ✅ Disabled State (2 tests)

- Button is disabled
- Applies disabled styles

### ✅ Ref Forwarding (1 test)

- Forwards ref to button element

### ✅ HTML Attributes (2 tests)

- Accepts type attribute
- Accepts aria-label attribute

### ✅ Combined Props (1 test)

- Multiple props work together

## Running Tests

```bash
# Run tests in watch mode
pnpm test

# Run tests with UI
pnpm test:ui

# Run tests once (CI mode)
pnpm test:run

# Generate coverage report
pnpm test:coverage
```

## Total Coverage

**21/21 tests passing** ✅
