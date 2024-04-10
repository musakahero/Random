// Input:
// N (sheepCount) K (maxCourse)
// A1, A2... AN (sheepWeight)
//Output:
//minRaftCapacity

/*Example input
6 2
4 8 15 16 23 42
*/
/*Example output 
54
*/

function calculateRaftCapacity(N, K, sheeps) {
    const sheepCount = N;
    const maxCourse = K;

    const sheepArray = sheeps.sort((a, b) => b - a);
    const raft = [];
    let minCapacity = 0;

    // for (let i = 0; i < maxCourse; i++) {
    //     raft.splice(0, sheepCount);
    //     for (let j = 0; j < sheepCount/2; j++) { //TODO
    //         raft.push(sheepArray.pop());
    //     };
    //     if(i == 0) {
    //         minCapacity = sum(raft);
    //         console.log('minCapacity is ', minCapacity);
    //     }
    //     console.log('raft is ', raft);
    // }
    // console.log('sheep array is ', sheepArray);

    //sheepWeightTotal = sum(sheeps);
    //approxCapacity = sheepWeightTotal / maxCourse 
    //partialSheepsTotal = sum(sheepArray.slice(0, maxCourse))

    let sheepWeightTotal = sum(sheepArray);
    let approxCapacity = sheepWeightTotal / maxCourse;
    console.log('ApproxCap is ', approxCapacity);
    let partialSheepsTotal = sum(sheepArray.slice(0, maxCourse));
    console.log('partialSheepsTotal is ', partialSheepsTotal);


    function sum(arr) {
        let result = 0;
        for (const num of arr) {
            result += num;
        }
        return result;
    }

    return minCapacity;
}

calculateRaftCapacity(20, 3, [52, 17946, 27160, 387, 17346, 27505, 20816, 20577, 10961, 6021, 5262, 28278, 24163, 931, 11003, 19738, 17914, 1683, 10320, 10475]);