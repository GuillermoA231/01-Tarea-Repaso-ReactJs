
import './styles/index.css';
import './styles/features.css';

const App = () => {
 

  return (
    <>
      <box>
        <div className='bg-white p-5 text-center'>
          <div style={{fontSize: '80px', fontWeight: 'bold'}}>HEY DEVELOPERS ..!</div>
          <div style={{fontSize: '30px'}}>Conoce los nuevos curso RollingCode!</div>
          <div style={{ marginTop: '20px'}}>
            <button className='btn btn-primary'>Comprar Ahora!</button>
          </div>
        </div>
      </box>

      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom text-white">NOVEDADES</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col text-white">
            <h3 className="fs-2">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="text-warning">
              Call to action
            </a>
          </div>
          <div className="feature col text-white">
            <h3 className="fs-2">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="text-warning">
              Call to action
            </a>
          </div>
          <div className="feature col text-white">
            <h3 className="fs-2">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="text-warning">
              Call to action

            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
