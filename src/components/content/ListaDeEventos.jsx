import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap';

const ListaDeEventos = () => {
  return (
    <div className="row mb-2">
    <div className="col-md-6">
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bgPosts">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-white">Isidro</strong>
          <h3 className="mb-0 text-white">Los Agüeros</h3>
          <div className="mb-1 text-muted">Abril 09</div>
          <p className="card-text mb-auto text-white">Esto es un poco de lo que fue el 9 de Abril en Isidro!</p>
          <a href="#EventoAbril09" className="stretched-link">Ver post.</a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bgPosts   ">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-white">Design</strong>
          <h3 className="mb-0 text-white">Post title</h3>
          <div className="mb-1 text-muted">Nov 11</div>
          <p className="mb-auto text-white">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#EventoNoviembre22" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ListaDeEventos