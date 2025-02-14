// function smashBricks(newtons: number[], bigHits: number): [number[], number[], number[]] {
//     const n = newtons.length;

//     const bricks: [number, number][] = newtons.map((newton, index) => [newton, index + 1]);

//     bricks.sort((a, b) => b[0] - a[0]);

//     const bigHammerHits: number[] = [];
//     const smallHammerHits: number[] = [];

//     let totalHits = 0;

//     for (let i = 0; i < n; i++) {
//         if (i < bigHits) {
//             bigHammerHits.push(bricks[i][1]);
//         } else {
//             smallHammerHits.push(bricks[i][1]);
//             totalHits += bricks[i][0];
//         }
//     }

//     bigHammerHits.sort((a, b) => a - b);
//     smallHammerHits.sort((a, b) => a - b);

//     if (bigHammerHits.length === 0) {
//         bigHammerHits.push(-1);
//     }
//     if (smallHammerHits.length === 0) {
//         smallHammerHits.push(-1);
//     }

//     return [[totalHits], bigHammerHits, smallHammerHits];
// }