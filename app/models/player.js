export class Player{
    name
    points
    color


    constructor(setName){
        this.name = setName
        this.points = 0

    }
        playerTemplate(){

            const newPlayerELM = document.createElement('div')
            newPlayerELM.id = this.name
            newPlayerELM.classList.add('col-6 flex-column')

            const newPlayerNameELM = document.createElement('h3')
            newPlayerNameELM.innerText = this.name

            const newPlayerPointsELM = document.createElement('div')

            const pointsPlusELM = document.createElement('button')
            classList.add('btn btn-success m-1')

            const pointsMinusELM = document.createElement('button')
            classList.add('btn btn-danger m-1')

            const totalPointsELM = document.createElement('h4')
            totalPointsELM.innerText = this.points
            totalPointsELM.classList.add('m-1')

            newPlayerPointsELM.push(pointsMinusELM, totalPointsELM, pointsPlusELM)



            newPlayerELM.push(newPlayerNameELM, newPlayerPointsELM)
            return newPlayerELM
        }
}