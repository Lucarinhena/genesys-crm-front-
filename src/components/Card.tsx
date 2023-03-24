export function Card (props: any) {
  return(
    <div className="pricing-card">
      <h3>{props.flat}</h3>
      <p>{props.for}</p>
      <h4>{props.price}</h4>
        <ul>
          <li>{props.advantage1}</li>
          <li>{props.advantage2}</li>
          <li>{props.advantage3}</li>
          <li>{props.advantage4}</li>
          <li>{props.advantage5}</li>
          <li>{props.advantage6}</li>
        </ul>
        <div className="testeBtn">
              <a href="freeTrial.html" className="btn-secondary">Experimente agora</a>
        </div>
    </div>
  )
}