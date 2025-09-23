import React from "react";

export default class MuslisPage extends Component{
    state = {
        musliData: {
        result: []
        }
    }
    
    render(){
        return(
            <div>
            <main id="content-area">
              <h1>My mueslis</h1>
              <table>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                  </tr>
                </thead>
                <tbody>
                  {/*JSON.stringify(this.state.musliData)*/}
                  {this.state.musliData.result.map(musli => <tr key={musli.id}>
                    <td>{musli.id}</td>
                    <td>{musli.name}</td>
                    <td>{musli.price}</td>
                  </tr>)}
                </tbody>
              </table>
            </main>
            </div>
        )
    }
    async componentDidMount(){
    try{
      let musliData = await fetch("http://localhost:3333/musli")
      console.log('musliData', musliData)
      musliData = await musliData.json()
      console.log('musliData', musliData)

      this.setState({musliData})
    } catch (e){
      console.warn('Error', e)
    }

  }
}