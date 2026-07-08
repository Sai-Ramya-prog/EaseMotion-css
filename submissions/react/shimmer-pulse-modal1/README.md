# ShimmerPulseModal

A React modal component with a Shimmer Pulse entrance animation, built using EaseMotion CSS utility classes. Designed for modern corporate layouts.

## Props

| Prop                  | Type       | Default         | Description                                   |
|-----------------------|------------|-----------------|------------------------------------------------|
| `isOpen`               | `boolean`  | —               | Controls whether the modal is visible          |
| `onClose`              | `function` | —               | Callback fired when the modal should close     |
| `title`                | `string`   | `"Modal Title"` | Header text shown at the top of the modal      |
| `children`             | `node`     | —               | Content rendered inside the modal body         |
| `closeOnOverlayClick`  | `boolean`  | `true`          | Whether clicking the overlay closes the modal  |

## Usage

\`\`\`jsx
import React, { useState } from "react";
import ShimmerPulseModal from "./ShimmerPulseModal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <ShimmerPulseModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Welcome"
      >
        <p>This modal uses a shimmer pulse animation on open.</p>
      </ShimmerPulseModal>
    </>
  );
}

export default App;
\`\`\`

## EaseMotion Classes Used

- `ease-fade-in` — fades in the overlay
- `ease-shimmer-pulse` — animated shimmer sweep across the modal
- `ease-hover-lift` — subtle lift on hover

## Notes

- Closes on `Escape` key press.
- Accessible via `role="dialog"` and `aria-modal`.