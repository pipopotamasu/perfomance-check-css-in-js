# Performance comparison: styled-components vs pure jsx

This repo compared how long styled-components and pure jsx take time to render 10,000 divs.

## Precondition

### Machine

- MacBook Pro (13-inch, 2017, Two Thunderbolt 3 ports)
- 2.5 GHz Dual-Core Intel Core i7
- 16 GB 2133 MHz LPDDR3
- macOS Monterey v12.2

### Browser

- Google Chrome v98
- CPU: 4x slowdown

### Libraries

- react v17.0.2(production build)
- styled-components v5.3.3

## Result

compared scripting time to render 10,000 divs:

|         | styled-components | pure jsx |
| ------- | ----------------- | -------- |
| 1st     | 520ms             | 297ms    |
| 2nd     | 378ms             | 266ms    |
| 3rd     | 421ms             | 260ms    |
| 4th     | 424ms             | 235ms    |
| 5th     | 413ms             | 246ms    |
| average | 431.2ms           | 260.8ms  |
