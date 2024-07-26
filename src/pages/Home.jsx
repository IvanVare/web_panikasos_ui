import CarouselBody from "../components/CarouselBody";
import "../components/styles/styleHome.css";
export default function Home() {
  return (
    <>
      <div className="content">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Titulo de la carta</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural sadas
              lead-in to additional content. This content is a little bit as dsa
              d longer.asddddddddddddddddddddddddddddddddddddddd asdasd asd asd
              sad asd asdasd as
            </p>

            <ul class="list-group">
              <li class="list-group-item disabled" aria-disabled="true">
                A disabled item
              </li>
              <li class="list-group-item">A second item</li>
            </ul>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>

        <h1 className="home__title">
          <span>Para qué pagarlo completo....</span> Transferencia!!!
        </h1>

        <div class="card">
          <div class="card-body">Pos una app bonita</div>
        </div>
        <br />

        <br />
        <div>
          <ul class="list-group">
            <li class="list-group-item disabled" aria-disabled="true">
              A disabled item
            </li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
        </div>
      </div>
    </>
  );
}
