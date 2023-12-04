export class Player{
    name
    points
    color


    constructor(setName){
        this.name = setName
        this.points = 0

    }
        playerTemplate(){

            return`
            <div id='${this.name}' class="col-4 w-10 text-center justify-content-center">

            <h3>${this.name}</h3>

            <div class="d-flex align-items-center justify-content-center">

              <button onclick='app.PlayerController.adjustPoints("${this.name}", -1)' class="btn btn-danger m-1 p-0">
                <i class="fs-5 mdi mdi-minus text-dark p-1 m-0"></i>
              </button>

              <h4 class="fs-1 m-0">${this.points}</h4>
              <button onclick='app.PlayerController.adjustPoints("${this.name}", 1)' class="btn btn-success m-1 p-0">

                <i class="fs-5 mdi mdi-plus text-dark p-1 m-0"></i>
              </button>

            </div>

          </div>`
        }
        //     const newPlayerELM = document.createElement('div')
        //     newPlayerELM.id = this.name
        //     newPlayerELM.classList.add('col-6','flex-column')

        //     const newPlayerNameELM = document.createElement('h3')
        //     newPlayerNameELM.innerText = this.name

        //     const newPlayerPointsELM = document.createElement('div')
        //     newPlayerPointsELM.classList.add('d-flex')

        //     const pointsPlusELM = document.createElement('button')
        //     pointsPlusELM.classList.add('btn','btn-success','m-1')

        //     const pointsMinusELM = document.createElement('button')
        //     pointsMinusELM.classList.add('btn','btn-danger','m-1')

        //     const totalPointsELM = document.createElement('h4')
        //     totalPointsELM.innerText = this.points
        //     totalPointsELM.classList.add('m-1')


        //     div

        //     newPlayerPointsELM.append(pointsMinusELM, totalPointsELM, pointsPlusELM)



        //     newPlayerELM.append(newPlayerNameELM, newPlayerPointsELM)
        //     return newPlayerELM
}