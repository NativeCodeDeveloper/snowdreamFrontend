"use client"

import {useState, useEffect, Suspense} from 'react';
import Link from "next/link";
import{useSearchParams} from "next/navigation";
import { toast } from 'react-hot-toast';
import MediaCardImage from "@/Componentes/MediaCardImage";
import { motion } from "motion/react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function Catalogo() {
    return (
        <Suspense fallback={<div className="p-8 text-gray-500">Cargando catálogo…</div>}>
            <CatalogoInner />
        </Suspense>
    );
}


function CatalogoInner() {
    const searchParams = useSearchParams();
    const API = process.env.NEXT_PUBLIC_API_URL;

    // Estados
    const [listaProductos, setListaProductos] = useState([]);
    const [publicaciones, setPublicaciones] = useState([]);
    const [listaCategorias, setListaCategorias] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Obtener parámetros de búsqueda
    const id_CategoriaNavBar = searchParams.get("id_categoriaProducto");
    const buscarOfertas = searchParams.get("ofertas");
    const buscarRecientes = searchParams.get("recientes");


    // Cargar productos según parámetros
    useEffect(() => {
        const cargarProductos = async () => {
            setIsLoading(true);
            try {
                if (buscarRecientes) {
                    await listarRecientes();
                } else if (buscarOfertas) {
                    await listarOfertas();
                } else if (id_CategoriaNavBar) {
                    await filtrarPorCategoria(id_CategoriaNavBar);
                } else {
                    await listarRecientes();
                }
            } catch (error) {
                console.error("Error cargando productos:", error);
                toast.error("Error al cargar productos");
            } finally {
                setIsLoading(false);
            }
        };

        cargarProductos();
    }, [buscarRecientes, buscarOfertas, id_CategoriaNavBar]);






    //FUNCION PARA LISTAR TODOS LOS PRODUCTOS RECIENTES QUE NO TENGAN ELIMINACION LOGICA
    async function listarRecientes(){
        try {
            const res = await fetch(`${API}/producto/seleccionarProductoReciente`,{
                method: 'GET',
                headers: {Accept: 'application/json'},
                mode: 'cors'
            });
            if (!res.ok) {
                console.error('No fue posible cargar los productos recientes');
                setListaProductos([]);
                return;
            }
            const dataProductos = await res.json();
            const productosArray = Array.isArray(dataProductos)
                ? dataProductos
                : Array.isArray(dataProductos?.productos)
                    ? dataProductos.productos
                    : Array.isArray(dataProductos?.data)
                        ? dataProductos.data
                        : [];
            setListaProductos(productosArray);

        }catch(err){
            console.error('Error en listarRecientes:', err);
            setListaProductos([]);
        }
    }


    //FUNCION PARA FILTRAR PRODUCTOS SEGUN CATEGORIA
    async function filtrarPorCategoria(categoriaProducto){
        try {
            if(!categoriaProducto){
                return;
            }
            const res = await fetch(`${API}/producto/categoriaProducto`, {
                method: "POST",
                headers: {Accept: "application/json",
                    "Content-Type": "application/json"},
                mode: "cors",
                body: JSON.stringify({categoriaProducto})
            })
            if (!res.ok){
                toast.error("Problema al filtrar categorías, contacte a Soporte de NativeCode.cl");
                return;
            }
            const dataFiltrada = await res.json();
            setListaProductos(dataFiltrada);

        }catch (error) {
            console.log(error);
        }
    }


    // FUNCION PARA SELECCIONAR LA LISTA COMPLETA DE CATEGORIAS DE PRODUCTOS
    async function seleccionarCategoriasCatalogo() {
        try {
            const res = await fetch(`${API}/categorias/seleccionarCategoria`, {
                method: "GET",
                headers: {Accept: "application/json"},
                cache: "no-store",
            })
            if(!res.ok) {
                console.error('No fue posible cargar la lista de categorias');
                setListaCategorias([]);
                return [];
            }
            const dataCategorias = await res.json();
            const listaCategorias = Array.isArray(dataCategorias) ? dataCategorias : [];
            setListaCategorias(listaCategorias);
            return listaCategorias;
        }catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        seleccionarCategoriasCatalogo();
    }, []);



    // FUNCION PARA LLAMAR A LOS PRODUCTOS EN OFERTA ESTADO NUMERO 3 estadoProducto en base de datos
    async function listarOfertas(){
        try {
            const res = await fetch(`${API}/producto/seleccionarOfertas`,{
                method: 'GET',
                headers: {Accept: 'application/json'},
                mode: 'cors'
            });
            if (!res.ok) {
                console.error('No fue posible cargar las ofertas');
                setListaProductos([]);
                return;
            }
            const dataProductos = await res.json();
            const productosArray = Array.isArray(dataProductos)
                ? dataProductos
                : Array.isArray(dataProductos?.productos)
                    ? dataProductos.productos
                    : Array.isArray(dataProductos?.data)
                        ? dataProductos.data
                        : [];
            setListaProductos(productosArray);

        }catch(err){
            console.error('Error en listarOfertas:', err);
            setListaProductos([]);
        }
    }

    //FUNCION PARA LISTAR TODOS LOS PRODUCTOS QUE NO TENGAN ELIMINACION LOGICA
    async function listarProductos(){
        try {
            const res = await fetch(`${API}/producto/seleccionarProducto`,{
                method: 'GET',
                headers: {Accept: 'application/json'},
                mode: 'cors'
            });
            if (!res.ok) {
                console.error('No fue posible cargar todos los productos');
                setListaProductos([]);
                return;
            }
            const dataProductos = await res.json();
            const productosArray = Array.isArray(dataProductos)
                ? dataProductos
                : Array.isArray(dataProductos?.productos)
                    ? dataProductos.productos
                    : Array.isArray(dataProductos?.data)
                        ? dataProductos.data
                        : [];
            setListaProductos(productosArray);

        }catch(err){
            console.error('Error en listarProductos:', err);
            setListaProductos([]);
        }
    }


    async function publicacionesLaterales() {
        try {
            const res = await fetch(`${API}/publicaciones/seleccionarPublicaciones`, {
                method: "GET",
                headers: {Accept: "application/json"},
                mode: "cors"
            })

            if(!res.ok) {
                console.error("No se han podido Listar Publicaciones / Falla en el fetch desde el frontEnd");
                setPublicaciones([])
                return[]
            }else {
                const publicaciones = await res.json();
                setPublicaciones(publicaciones);
                return publicaciones;
            }
        }catch(err) {
            console.error("Problema al consultar Backen desde la vista fronend:"+err);
        }
    }
    useEffect(() => {
        publicacionesLaterales();
    }, []);

    async function ordenarMayorPrecio(){
        try {
            const res = await fetch(`${API}/producto/ordenarMayor`, {
                method: "GET",
                headers: {Accept: "application/json"},
                mode: "cors"
            })

            if(!res.ok) {
                return toast.error("Ha habido un problema con el filtro de precios; contacte soporte TI de NativeCode.")
            } else {
                const dataProductosMayorPrecio = await res.json();
                setListaProductos(dataProductosMayorPrecio);
            }
        }catch(err){
            console.log(err);
        }
    }
    async function ordenarMenorPrecio(){
        try {
            const res = await fetch(`${API}/producto/ordenarMenor`, {
                method: "GET",
                headers: {Accept: "application/json"},
                mode: "cors"
            })
            if(!res.ok) {
                return toast.error("Ha habido un problema con el filtro de precios; contacte soporte TI de NativeCode.");
            } else{
                const dataProductosMenorPrecio = await res.json();
                setListaProductos(dataProductosMenorPrecio);
            }
        }catch(err){
            console.log(err);
        }
    }












    return (
        <>
            {/* Contenedor principal del catálogo: ancho máximo, centrado y espaciado vertical */}
            <div className="w-full bg-gradient-to-b from-white via-cyan-50/20 to-white min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Encabezado del catálogo: título, subtítulo, breadcrumb y acciones visuales */}
                <header className="mb-12">

                    {/* Título principal deportivo y moderno */}
                    <div className="text-center mb-8 md:mb-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black lowercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-400 mb-4 md:mb-6 drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]" style={{fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.03em'}}>
                            snowdreams
                        </h1>
                        <div className="flex justify-center mb-4 md:mb-6">
                            <div className="h-0.5 w-32 md:w-40 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.4)]"></div>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 font-light tracking-widest uppercase max-w-2xl mx-auto px-4">
                            Equipamiento Premium para Snowboard & Montaña
                        </p>
                    </div>

                    {/* Barra de acciones con diseño minimalista cyan */}
                    <div className="mt-6 md:mt-8 flex flex-col lg:flex-row lg:items-center gap-4">
                        <div className="flex w-full lg:w-auto overflow-x-auto">
                            <span className="sr-only">Filtrar por categoría</span>

                            {/* Cinta de categorías con diseño minimalista */}
                            <div className="flex gap-2 md:gap-2.5 py-2 md:py-3 scrollbar-hide">
                                <button
                                    key={"key"}
                                    type="button"
                                    onClick={() => listarProductos()}
                                    className="group relative whitespace-nowrap rounded-full bg-cyan-50/50 px-4 md:px-6 py-2 md:py-2.5 text-xs font-medium text-cyan-800 tracking-wider uppercase transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-600 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
                                >
                                    <span className="relative z-10">Todos</span>
                                </button>

                                {listaCategorias.map((categoria) => (
                                    <button
                                        key={categoria.id_categoriaProducto}
                                        type="button"
                                        onClick={() => filtrarPorCategoria(categoria.id_categoriaProducto)}
                                        className="group relative whitespace-nowrap rounded-full bg-cyan-50/50 px-4 md:px-6 py-2 md:py-2.5 text-xs font-medium text-cyan-800 tracking-wider uppercase transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-600 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
                                    >
                                        <span className="relative z-10">{categoria.descripcionCategoria}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Selector de ordenamiento minimalista */}
                        <div className="w-full lg:w-auto lg:ml-auto">
                            <Select onValueChange={(value) =>{
                                if(value === "menor"){
                                    ordenarMenorPrecio()
                                }else if(value === "mayor"){
                                    ordenarMayorPrecio()
                                }else if(value === "reciente"){
                                    listarRecientes()
                                }else if(value === "antiguo"){
                                    listarProductos()
                                }
                            }}>
                                <SelectTrigger className="w-full lg:w-64 border-cyan-200/50 bg-white text-cyan-800 font-light tracking-wide hover:border-cyan-400 focus:ring-cyan-400 rounded-full">
                                    <SelectValue placeholder="Ordenar por" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border-cyan-200/50 rounded-2xl">
                                    <SelectItem value="menor" className="font-light text-cyan-800 hover:bg-cyan-50 focus:bg-cyan-500 focus:text-white rounded-lg">Precio: menor a mayor</SelectItem>
                                    <SelectItem value="mayor" className="font-light text-cyan-800 hover:bg-cyan-50 focus:bg-cyan-500 focus:text-white rounded-lg">Precio: mayor a menor</SelectItem>
                                    <SelectItem value="reciente" className="font-light text-cyan-800 hover:bg-cyan-50 focus:bg-cyan-500 focus:text-white rounded-lg">Más recientes</SelectItem>
                                    <SelectItem value="antiguo" className="font-light text-cyan-800 hover:bg-cyan-50 focus:bg-cyan-500 focus:text-white rounded-lg">Más antiguos</SelectItem>
                                </SelectContent>
                            </Select>

                        </div>
                    </div>
                </header>

                {/* Separador sutil entre encabezado y contenido */}
                <div className="my-8 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"></div>

                {/* Layout responsivo con separación: 1 columna en móviles, 5 en escritorio (sidebar + grilla) */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                    {/* Sidebar de publicaciones/banners: se mantiene fijo en viewport alto, sin alterar la lógica */}
                    <aside className="order-first hidden lg:block lg:col-span-1 space-y-6 sticky top-24 self-start">
                        {/* Título del sidebar para dar contexto visual */}
                        <h3 className="text-sm font-bold text-cyan-700 tracking-widest uppercase mb-1">Destacados</h3>
                        <p className="text-xs text-cyan-600/70 font-light mb-4">Lo mejor de la temporada</p>

                        {/* Tarjetas minimalistas sin bordes */}
                        {publicaciones
                            .filter(publicacion => Number(publicacion.id_publicaciones) !== 10)
                            .map(publicacion => (
                                <div key={publicacion.id_publicaciones} className="group rounded-2xl overflow-hidden bg-white shadow-lg shadow-cyan-200/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/40 hover:-translate-y-1">
                                    <img
                                        src={publicacion.imagenPublicaciones_primera}
                                        className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                                        alt="Publicación"
                                    />
                                </div>
                            ))}

                    </aside>

                    {/* Sección principal con la grilla de productos */}
                    <section className="order-1 lg:order-2 lg:col-span-4">
                        {/* Encabezado de la sección de productos con contador visual (sin alterar lógica) */}
                        <div className="flex items-baseline justify-between mb-6">
                            <h2 className="text-lg font-bold text-cyan-700 tracking-widest uppercase">Colección</h2>
                            <span className="text-sm text-cyan-600/70 font-light">{listaProductos?.length ?? 0} productos</span>
                        </div>

                        {/* Indicador de carga */}
                        {isLoading ? (
                            <div className="flex justify-center items-center py-20">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
                            </div>
                        ) : (
                            /* Grilla ultra minimalista y responsiva */
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                                {
                                    listaProductos.map((producto, index) => {

                                        const id = producto.id_producto ?? index;
                                        return (

                                            <motion.div
                                                key={id}
                                                layout
                                                layoutId={`producto-${id}`}
                                                transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                whileHover={{ y: -6 }}
                                                className="group flex flex-col w-full"
                                            >
                                                {/* Imagen minimalista - solo la imagen sin contenedor visible */}
                                                <Link
                                                    href={`/producto/${id}`}
                                                    className="relative block mb-2 md:mb-3 overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-50/30 to-white transition-all duration-500 group-hover:shadow-xl group-hover:shadow-cyan-300/20"
                                                >
                                                    <div className="relative aspect-[3/4] overflow-hidden">
                                                        <MediaCardImage
                                                            imagenProducto={producto.imagenProducto}
                                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                        />
                                                    </div>
                                                </Link>

                                                {/* Información estética y minimalista */}
                                                <div className="flex flex-col space-y-0.5 md:space-y-1 px-1">
                                                    {/* Precio estético con gradiente cyan - PRIMERO */}
                                                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-500 leading-tight">
                                                        ${producto.valorProducto?.toLocaleString('es-CL')}
                                                    </p>

                                                    {/* Título elegante - SEGUNDO */}
                                                    <h3 className="text-xs sm:text-sm md:text-base font-light text-gray-700 tracking-wide line-clamp-2 leading-tight">
                                                        {producto.tituloProducto}
                                                    </h3>
                                                </div>

                                            </motion.div>



                                        )
                                    })
                                }
                            </div>
                        )}
                    </section>

                </div>
                </div>
            </div>
        </>
    )

}