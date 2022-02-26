# Performance comparison: styled-components vs pure component

This repo compared how long styled-components and pure component take time to render div 10,000 times.

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
- styled-components v5.5.5

## Result

|         | styled-components | Pure component |
| ------- | ----------------- | -------------- |
| 1st     | 0s                | 0s             |
| 2nd     | 0s                | 0s             |
| 3rd     | 0s                | 0s             |
| 4th     | 0s                | 0s             |
| 5th     | 0s                | 0s             |
| average | 0s                | 0s             |
