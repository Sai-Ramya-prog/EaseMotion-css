# Progress Steps Ribbon Selector

A CSS-only interactive multi-step progress ribbon using radio inputs
and sibling combinators — no JavaScript required.

## Structure
progress-steps-ribbon/

├── demo.html

├── style.css

└── README.md
## Usage

```html
<div class="ribbon-stepper">

  <input type="radio" name="step" id="step1" class="step-input" checked />
  <input type="radio" name="step" id="step2" class="step-input" />
  <input type="radio" name="step" id="step3" class="step-input" />

  <div class="ribbon-track">
    <label for="step1" class="step-node" data-step="1">
      <span class="node-circle">1</span>
      <span class="node-label">Account</span>
    </label>
    <div class="connector"></div>
    <label for="step2" class="step-node" data-step="2">
      <span class="node-circle">2</span>
      <span class="node-label">Profile</span>
    </label>
    <div class="connector"></div>
    <label for="step3" class="step-node" data-step="3">
      <span class="node-circle">3</span>
      <span class="node-label">Launch</span>
    </label>
  </div>

  <div class="step-panels">
    <div class="step-panel" id="panel1"><h2>Account</h2></div>
    <div class="step-panel" id="panel2"><h2>Profile</h2></div>
    <div class="step-panel" id="panel3"><h2>Launch</h2></div>
  </div>

</div>
```

## How It Works

Uses hidden `radio` inputs + CSS sibling combinators
(`#step2:checked ~ .ribbon-track .step-node`) to highlight past
and current steps and show the matching content panel — zero JS.

## Features
- Pure HTML & CSS — no JavaScript
- Click any step to jump directly to it
- Past steps stay highlighted
- Animated connector lines fill on progress
- Content panel slides in on step change
- Responsive — labels hidden on mobile
- Respects `prefers-reduced-motion`

## Use Cases
- Onboarding wizards
- Checkout flows
- Multi-step forms
- Learning platform progress