# Animation Speed Control Slider

An interactive slider that controls the playback speed of all
animations in real time using a CSS custom property `--ease-speed`.

## Structure
animation-speed-slider/

├── demo.html

├── style.css

└── README.md
## Usage

```html
<div class="speed-control">
  <label for="speedSlider">Speed</label>
  <span class="speed-hint">Slow</span>
  <input type="range" id="speedSlider" min="0.25" max="3" step="0.25" value="1" />
  <span class="speed-hint">Fast</span>
  <span class="speed-badge" id="speedLabel">1x</span>
</div>

<div class="anim-box ease-fade-in-box">Fade In</div>

<script>
  const slider = document.getElementById('speedSlider');
  const label  = document.getElementById('speedLabel');

  slider.addEventListener('input', () => {
    const speed = parseFloat(slider.value);
    document.documentElement.style.setProperty('--ease-speed', `${speed}s`);
    label.textContent = `${speed}x`;
  });
</script>
```

## How It Works
The slider updates `--ease-speed` on `:root`. All animation boxes
use `var(--ease-speed)` as their `animation-duration`, so changing
the CSS variable instantly affects every animation on the page.

## Animations Included

| Class | Effect |
|---|---|
| `ease-fade-in-box` | Fade in |
| `ease-slide-up-box` | Slide up |
| `ease-zoom-in-box` | Zoom in |
| `ease-bounce-box` | Bounce loop |
| `ease-spin-box` | Spin loop |
| `ease-pulse-box` | Pulse loop |

## Features
- CSS custom property `--ease-speed` drives all animation durations
- Replay button to restart animations
- Speed badge updates live (0.25x → 3x)
- Minimal JS (~10 lines) for slider + replay only
- Fully responsive
- Respects `prefers-reduced-motion`

## Use Cases
- Animation inspection tool
- Developer playground
- EaseMotion CSS visual class gallery
- Motion design education