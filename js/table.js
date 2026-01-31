document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#data-table tbody");
  const filterInput = document.getElementById("filter-input");

  // Función para renderizar la tabla
  function renderTable(data) {
    tbody.innerHTML = ""; // limpiar

    data.forEach((row, index) => {
      const tr = document.createElement("tr");
      tr.classList.add("clickable-row");

      // Secuencia
      const seqTd = document.createElement("td");
      seqTd.textContent = index + 1;
      seqTd.classList.add("text-muted");
      tr.appendChild(seqTd);

      // Columna Periodo
      const periodoTd = document.createElement("td");
      periodoTd.textContent = row.periodo;
      tr.appendChild(periodoTd);

      // Columna Descripción
      const descTd = document.createElement("td");
      descTd.textContent = row.descripcion;
      applyTypeColor(descTd, row.tipo);
      tr.appendChild(descTd);

      // Columna Tipo
      const tipoTd = document.createElement("td");
      tipoTd.textContent = row.tipo;
      applyTypeColor(tipoTd, row.tipo);
      tr.appendChild(tipoTd);

      // Imagenes
      const imgTd = document.createElement("td");
      imgTd.textContent = row.imagenes;
      tr.appendChild(imgTd);

      // Lugar
      const lugarTd = document.createElement("td");
      lugarTd.textContent = row.lugar;
      tr.appendChild(lugarTd);

      // Click en fila
      tr.addEventListener("click", () => {
        window.location.href = row.href;
      });

      tbody.appendChild(tr);
    });
  }

  // Función para aplicar color por tipo
  function applyTypeColor(td, tipo) {
    const t = tipo.toLowerCase();
    if (t === "bautismos") td.classList.add("table-success");
    else if (t === "matrimonios") td.classList.add("table-warning");
    else if (t === "defunciones") td.classList.add("table-danger");
    // Confirmaciones → sin color
  }

  // Filtrado en tiempo real
  filterInput.addEventListener("input", () => {
    const val = filterInput.value.toLowerCase();
    const filtered = TABLE_DATA.filter(row => 
      row.descripcion.toLowerCase().includes(val) ||
      row.tipo.toLowerCase().includes(val)
    );
    renderTable(filtered);
  });

  // Render inicial
  renderTable(TABLE_DATA);
});
