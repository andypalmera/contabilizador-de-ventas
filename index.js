var local = {
    vendedoras: ['Ada', 'Grace', 'Hedy', 'Sheryl'],

    ventas: [
        // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
        { id: 1, fecha: new Date(2019, 1, 4), nombreVendedora: 'Grace', sucursal: 'Centro', componentes: ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] },
        { id: 2, fecha: new Date(2019, 0, 1), nombreVendedora: 'Ada', sucursal: 'Centro', componentes: ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] },
        { id: 3, fecha: new Date(2019, 0, 2), nombreVendedora: 'Grace', sucursal: 'Centro', componentes: ['Monitor ASC 543', 'Motherboard MZI'] },
        { id: 4, fecha: new Date(2019, 0, 10), nombreVendedora: 'Ada', sucursal: 'Centro', componentes: ['Monitor ASC 543', 'Motherboard ASUS 1200'] },
        { id: 5, fecha: new Date(2019, 0, 12), nombreVendedora: 'Grace', sucursal: 'Centro', componentes: ['Monitor GPRS 3000', 'Motherboard ASUS 1200'] },
        { id: 6, fecha: new Date(2019, 1, 12), nombreVendedora: 'Hedy', sucursal: 'Centro', componentes: ['Monitor GPRS 3000', 'HDD Toyiva'] },
        {
            id: 7,
            fecha: new Date(2019, 1, 24),
            nombreVendedora: 'Sheryl',
            sucursal: 'Caballito',
            componentes: ['Motherboard ASUS 1500', 'HDD Wezter Dishital'],
        },
        { id: 8, fecha: new Date(2019, 1, 1), nombreVendedora: 'Ada', sucursal: 'Centro', componentes: ['Motherboard MZI', 'RAM Quinston Fury'] },
        { id: 9, fecha: new Date(2019, 1, 11), nombreVendedora: 'Grace', sucursal: 'Caballito', componentes: ['Monitor ASC 543', 'RAM Quinston'] },
        { id: 10, fecha: new Date(2019, 1, 15), nombreVendedora: 'Ada', sucursal: 'Centro', componentes: ['Motherboard ASUS 1200', 'RAM Quinston Fury'] },
        { id: 11, fecha: new Date(2019, 1, 12), nombreVendedora: 'Hedy', sucursal: 'Caballito', componentes: ['Motherboard ASUS 1500', 'HDD Toyiva'] },
        { id: 12, fecha: new Date(2019, 1, 21), nombreVendedora: 'Grace', sucursal: 'Centro', componentes: ['Motherboard MZI', 'RAM Quinston'] },
        { id: 13, fecha: new Date(2019, 1, 8), nombreVendedora: 'Sheryl', sucursal: 'Centro', componentes: ['Monitor ASC 543', 'HDD Wezter Dishital'] },
        { id: 14, fecha: new Date(2019, 1, 16), nombreVendedora: 'Sheryl', sucursal: 'Centro', componentes: ['Monitor GPRS 3000', 'RAM Quinston Fury'] },
        { id: 15, fecha: new Date(2019, 1, 27), nombreVendedora: 'Hedy', sucursal: 'Caballito', componentes: ['Motherboard ASUS 1200', 'HDD Toyiva'] },
        { id: 16, fecha: new Date(2019, 1, 22), nombreVendedora: 'Grace', sucursal: 'Centro', componentes: ['Monitor ASC 543', 'HDD Wezter Dishital'] },
        { id: 17, fecha: new Date(2019, 1, 5), nombreVendedora: 'Ada', sucursal: 'Centro', componentes: ['Motherboard ASUS 1500', 'RAM Quinston'] },
        { id: 18, fecha: new Date(2019, 1, 1), nombreVendedora: 'Grace', sucursal: 'Centro', componentes: ['Motherboard MZI', 'HDD Wezter Dishital'] },
        { id: 19, fecha: new Date(2019, 1, 7), nombreVendedora: 'Sheryl', sucursal: 'Caballito', componentes: ['Monitor GPRS 3000', 'RAM Quinston'] },
        { id: 20, fecha: new Date(2019, 1, 14), nombreVendedora: 'Ada', sucursal: 'Centro', componentes: ['Motherboard ASUS 1200', 'HDD Toyiva'] },
    ],

    precios: [
        { componente: 'Monitor GPRS 3000', precio: 200 },
        { componente: 'Motherboard ASUS 1500', precio: 120 },
        { componente: 'Monitor ASC 543', precio: 250 },
        { componente: 'Motherboard ASUS 1200', precio: 100 },
        { componente: 'Motherboard MZI', precio: 30 },
        { componente: 'HDD Toyiva', precio: 90 },
        { componente: 'HDD Wezter Dishital', precio: 75 },
        { componente: 'RAM Quinston', precio: 110 },
        { componente: 'RAM Quinston Fury', precio: 230 },
    ],

    sucursales: ['Centro', 'Caballito'],
};

// ======= SWITCH PARA NOMBRES DE LOS MESES=====
const nombreMes = (mes) => {
    switch (mes) {
        case 0:
            return 'Enero';
            break;
        case 1:
            return 'Febrero';
            break;
        case 2:
            return 'Marzo';
            break;
        case 3:
            return 'Abril';
            break;
        case 4:
            return 'Mayo';
            break;
        case 5:
            return 'Junio';
            break;
        case 6:
            return 'Julio';
            break;
        case 7:
            return 'Agosto';
            break;
        case 8:
            return 'Septiembre';
            break;
        case 9:
            return 'Octubre';
            break;
        case 10:
            return 'Noviembre';
            break;
        case 11:
            return 'Diciembre';
            break;

        default:
            break;
    }
};

// ============== funciones solicitadas=====================
const obtenerPrecio = (componente) => {
    let precio = 0;

    local.precios.forEach((p) => {
        if (p.componente === componente) {
            precio = p.precio;
        }
    });
    return precio;
};

const precioMaquina = (componentes) => {
    let total = 0;
    componentes.forEach((componente) => {
        total += obtenerPrecio(componente);
    });
    return total;
};

const cantidadVentasComponente = (componente) => {
    const ventasComponente = local.ventas.filter((venta) => {
        return venta.componentes.indexOf(componente) > -1;
    }).length;
    return ventasComponente;
};

const componentesVendidosId = document.getElementById('componentes-vendidos');
componentesVendidosId.addEventListener('change', () => {
    const componentesVendidosContainer = document.getElementById('componentes-vendidos-container');
    componentesVendidosContainer.innerText = 'Total vendidos = ' + cantidadVentasComponente(componentesVendidosId.value);
});

const vendedoraDelMes = (mes, anio) => {
    let vendedoraDelMes;
    let mayorVenta = 0;
    local.vendedoras.forEach((vendedora) => {
        let ventaVendedora = [];
        let montoVentaVendedora = 0;
        local.ventas.forEach((venta) => {
            if (venta.nombreVendedora === vendedora && venta.fecha.getMonth() + 1 === mes && venta.fecha.getFullYear() === anio) {
                ventaVendedora.push(venta.componentes);
            }
        });
        ventaVendedora.forEach((v) => {
            montoVentaVendedora += precioMaquina(v);
        });
        if (montoVentaVendedora > mayorVenta) {
            mayorVenta = montoVentaVendedora;
            vendedoraDelMes = vendedora;
        }
    });
    if (vendedoraDelMes === undefined) {
        return 'No hubo ventas este mes';
    } else {
        return ' La vendedora del mes es ' + vendedoraDelMes + ' y vendio $ ' + mayorVenta;
    }
};

const mesesVendedoraDelMes = document.getElementById('meses-vendedora-mes');
const anioVendedoraDelMes = document.getElementById('anio-vendedora-mes');
mesesVendedoraDelMes.addEventListener('change', () => {
    const vededoraMesContainer = document.getElementById('vendedora-del-mes-container');

    vededoraMesContainer.innerText = vendedoraDelMes(parseInt(mesesVendedoraDelMes.value), parseInt(anioVendedoraDelMes.value));
});
anioVendedoraDelMes.addEventListener('change', () => {
    const vededoraMesContainer = document.getElementById('vendedora-del-mes-container');
    vededoraMesContainer.innerText = vendedoraDelMes(parseInt(mesesVendedoraDelMes.value), parseInt(anioVendedoraDelMes.value));
});

const ventasMes = (mes, anio) => {
    let totalVentasMes = 0;
    const ventasMesAnio = local.ventas.filter((venta) => venta.fecha.getMonth() + 1 === mes && venta.fecha.getFullYear() === anio);

    ventasMesAnio.forEach((venta) => {
        totalVentasMes += precioMaquina(venta.componentes);
    });
    return totalVentasMes;
};
const ventasMesId = document.getElementById('ventas-mes');
const ventasAnioId = document.getElementById('ventas-anio');

ventasMesId.addEventListener('change', () => {
    const VentasMesContainer = document.getElementById('ventas-mes-container');

    VentasMesContainer.innerText = 'Total= $ ' + ventasMes(parseInt(ventasMesId.value), parseInt(ventasAnioId.value));
});
ventasAnioId.addEventListener('change', () => {
    const VentasMesContainer = document.getElementById('ventas-mes-container');

    VentasMesContainer.innerText = 'Total= $ ' + ventasMes(parseInt(ventasMesId.value), parseInt(ventasAnioId.value));
});

const ventasVendedora = (nombre) => {
    let totalVenta = 0;
    const ventasVendedora = local.ventas.filter((venta) => venta.nombreVendedora === nombre);
    ventasVendedora.forEach((venta) => {
        totalVenta += precioMaquina(venta.componentes);
    });
    return totalVenta;
};

// const componenteMasVendido = () => {
//     let componenteMasVendido;
//     let cantidadVendidos = 0;

//     local.precios.forEach((componente) => {
//         let ventaComponente = local.ventas.filter((venta) => venta.componentes.indexOf(componente.componente) > -1);
//         if (ventaComponente.length > cantidadVendidos) {
//             cantidadVendidos = ventaComponente.length;
//             componenteMasVendido = componente.componente;
//         }
//     });
//     return componenteMasVendido;
// };

// const masVendidoContainer = document.getElementById('mas-vendido-container');
// masVendidoContainer.innerText = componenteMasVendido();

const huboVentas = (mes, anio) => {
    const ventaMesAnio = local.ventas.filter((venta) => venta.fecha.getMonth() + 1 === mes && venta.fecha.getFullYear() === anio);
    return ventaMesAnio.length > 0 ? true : false;
};

const ventasSucursal = (sucursal) => {
    let totalSucursal = 0;

    const ventasSucursal = local.ventas.filter((venta) => venta.sucursal === sucursal);
    ventasSucursal.forEach((venta) => {
        totalSucursal += precioMaquina(venta.componentes);
    });
    return totalSucursal;
};

const ventasSucursalId = document.getElementById('ventas-sucursal');
ventasSucursalId.addEventListener('change', () => {
    const ventasSucursalContainer = document.getElementById('ventas-sucursal-container');
    ventasSucursalContainer.innerText = ventasSucursal(ventasSucursalId.value);
});

const sucursalDelMes = (mes, anio) => {
    let ventaMasAlta = 0;
    let sucursalMasVenta;
    local.sucursales.forEach((sucursal) => {
        let ventasSucursal = 0;
        let ventasMesSucursal = local.ventas.filter(
            (venta) => venta.fecha.getMonth() + 1 === mes && venta.fecha.getFullYear() === anio && venta.sucursal === sucursal
        );
        ventasMesSucursal.forEach((venta) => {
            ventasSucursal += precioMaquina(venta.componentes);
        });
        if (ventasSucursal > ventaMasAlta) {
            ventaMasAlta = ventasSucursal;
            sucursalMasVenta = sucursal;
        }
    });
    return sucursalMasVenta;
};

// funciones que muestran resultados... verificar si son necesarias!!!!
const renderPorMes = () => {
    const ventasEnero = ventasMes(1, 2019);
    const ventasFebrero = ventasMes(2, 2019);
    // ==
    return `ventas de Enero: ${ventasEnero} 
    Ventas de Febrero: ${ventasFebrero}`;
};

const renderPorSucursal = () => {
    const ventasCentro = ventasSucursal('Centro');
    const ventasCaballito = ventasSucursal('Caballito');
    document.write(`Ventas por Sucursal:<br />

    Total Centro: ${ventasCentro}<br />
    
    Total Caballito: ${ventasCaballito}</br></br>`);
};

const render = () => {
    renderPorMes();
    renderPorSucursal();
    const productoMasVendido = componenteMasVendido();
    let vendedoraMasIngresos;
    let mayorIngresosVendedora = 0;
    local.vendedoras.forEach((vendedora) => {
        let ingresosVendedora = ventasVendedora(vendedora);
        if (ingresosVendedora > mayorIngresosVendedora) {
            mayorIngresosVendedora = ingresosVendedora;
            vendedoraMasIngresos = vendedora;
        }
    });
    const ventasMes = document.getElementById('ventas-mes');
    const parrafo = document.createElement('p');
    const nodo = renderPorMes();
    parrafo.innerText = nodo;
    ventasMes.appendChild(parrafo);
};

// render();

// ====== AHORA QUE TENEMOS LAS FUNCIONES Y SUS RESULTADOS, ITERAMOS Y MOSTRAMOS EL LISTADO DE VENTAS EN EL BROWSER====
const lista = document.getElementById('ventas');
const crearElementoLista = local.ventas.map((venta) => {
    const nuevoElementoLista = document.createElement('li');
    nuevoElementoLista.setAttribute('class', 'row');
    let nuevoNodo = `
    <div class="col-md-4">${venta.fecha.getDate()} / ${nombreMes(venta.fecha.getMonth())} / ${venta.fecha.getFullYear()}</div>
    <div class="col-md-2">${venta.nombreVendedora}</div>
    <div class="col-md-6">${venta.componentes}</div>
`;
    nuevoElementoLista.innerHTML = nuevoNodo;
    lista.appendChild(nuevoElementoLista);
});

// ====== QUEREMOS AGREGAR NUEVAS Y REALES VENTAS=====

const agregarVentasNuevas = (e) => {
    // ===== FORM VENDEDORA ====
    let nombreVendedora;
    const vendedorasSelect = document.getElementById('Vendedoras');
    // ==== MENSAJE COMPROBACION ====
    const mensajecontainer = document.getElementById('mesage');
    // ==== COMPROBACION ====
    if (vendedorasSelect.value === '') {
        mensajecontainer.innerText = 'Seleccione una vendedora';
        return false;
    } else {
        mensajecontainer.innerText = '';
        nombreVendedora = vendedorasSelect.value;
    }

    // ===== FORM COMPONENTES ====

    let componentes = [];
    const compSelect1 = document.getElementById('Componentes1');
    const compSelect2 = document.getElementById('Componentes2');
    if (compSelect1.value === '' && compSelect2.value === '') {
        mensajecontainer.innerText = 'Seleccione al menos un componente';
        return false;
    } else {
        componentes.push(compSelect1.value);
        componentes.push(compSelect2.value);
    }

    // ==== FORM SUCURSAL =====

    let sucursal;
    const sucursalSelect = document.getElementById('Sucursal');
    if (sucursalSelect.value === '') {
        mensajecontainer.innerText = 'Seleccione una sucursal';
        return false;
    } else {
        mensajecontainer.innerText = '';
        sucursal = sucursalSelect.value;
    }

    let nuevoObj = {
        id: local.ventas.length + 1,
        fecha: new Date(),
        nombreVendedora: nombreVendedora,
        sucursal: sucursal,
        componentes: componentes,
    };
    // local.ventas.push(nuevoObj);

    local.ventas.push(nuevoObj);
    console.log(local.ventas);

    const nuevoElementoLista = document.createElement('li');
    nuevoElementoLista.setAttribute('class', 'row');
    let nuevoNodo = `
    <div class="col-md-4">${new Date().getDate()}/ ${nombreMes(new Date().getMonth())}/ ${new Date().getFullYear()}</div>
    <div class="col-md-2">${nombreVendedora}</div>
    <div class="col-md-6">${componentes}</div>
`;
    nuevoElementoLista.innerHTML = nuevoNodo;
    lista.appendChild(nuevoElementoLista);

    // ==== seteamos en vacion nuestroas Selects ===
    compSelect1.value = '';
    compSelect2.value = '';

    vendedorasSelect.value = '';
    sucursalSelect.value = '';
};

const boton = document.getElementById('agregar-venta');
boton.onclick = agregarVentasNuevas;
