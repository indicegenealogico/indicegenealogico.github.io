// 🔹 Generar columnas automáticamente
function generateColumns(data) {
  return Object.keys(data[0]).map(key => {
    return {
      title: key,
      field: key,
      headerFilter: true,
      formatter: key === "href" ? "link" : undefined,
      formatterParams: key === "href"
        ? { label: "View", target: "_blank" }
        : undefined,
    };
  });
}

// 🔹 Crear la tabla
new Tabulator("#table", {
  height: "70vh",
  data: TABLE_DATA,
  columns: generateColumns(TABLE_DATA),
  layout: "fitDataStretch",
  pagination: "local",
  paginationSize: 100,
  paginationSizeSelector: [50, 100, 500, 1000, true],
  movableColumns: true,
  esponsiveLayout: "collapse",
  headerSortTristate: true,



  rowContext: function (e, row) {
    seeImage(row);
    e.preventDefault();
  }, //rowContext

  //Al tocar dos veces la fila. abre la imagen en familisearch
  rowDblTap: function (e, row) {
    seeImage(row);
    e.preventDefault();
  }, //rowTapHold

  rowFormatter: function (row) {
    const { Tipo } = row.getData();
    const el = row.getElement();

    el.classList.remove(
      "table-success",
      "table-primary",
      "table-warning",
      "table-danger"
    );

    switch (Tipo) {
      case "Bautismos":
        el.classList.add("table-success");
        break;

      case "Matrimonios":
        el.classList.add("table-warning");
        break;

      case "Defunciones":
        el.classList.add("table-danger");
        break;

      case "Confirmaciones":
        el.classList.add("table-info");
        break;

      default:
        el.classList.add("table-primary");
    }
  }


});

function seeImage(row) {
  var datos = row.getData();
  var url = datos.href;
  window.open(url);
  $("#btn_image").click(function () {
    window.open(url);
  });
}

function generateColumns(data) {
  return Object.keys(data[0]).map((key, index) => {
    const col = {
      title: key,
      field: key,
      headerFilter: true,
      formatter: key === "href" ? "link" : undefined,
      formatterParams:
        key === "href" ? { label: "View", target: "_blank" } : undefined,
    };

    // 👉 Agregar bottomCalc SOLO a una columna
    if (index === 2) {
      col.bottomCalc = "count";
      col.bottomCalcFormatter = function (cell) {
        return `${cell.getValue()} libros`;
      };
    }

    return col;
  });
}
