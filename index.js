const {informationGain} = require('./decision-tree');
const liveData = require('./liveData');

const main = () => {
    if (liveData.data !== undefined){
        informationGain(liveData.data, liveData.possibleChoices);
    } else {
        const dummyDecisions = [{
            answers: ['asd',1,true],
            choice: true
        },{
            answers: ['qwe',1,false],
            choice: true
        },{
            answers: ['asd',3,false],
            choice: false
        }];
        const possibleChoices = dummyDecisions.reduce((possibleChoices, row) => {
            if (possibleChoices.indexOf(row.choice) === -1){
                possibleChoices.push(row.choice);
            }
            return possibleChoices;
        },[]);

        console.log(informationGain(dummyDecisions,possibleChoices));
    }
}

main();