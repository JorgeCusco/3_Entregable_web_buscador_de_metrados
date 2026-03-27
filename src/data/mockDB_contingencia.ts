// @ts-nocheck
import type { Partida } from "../types";

export const mockPartidasContingencia: Partida[] = [
    {
        "id": "cf4a6613-1791-45ee-8d9d-2bd927218090",
        "codigo": "OE.1",
        "descripcion": "OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 2,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1dae50ec-7c0b-48d5-b0e5-ffb702df60b1",
        "codigo": "OE.1.1",
        "descripcion": "OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "cf4a6613-1791-45ee-8d9d-2bd927218090",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD."
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "e77e64f3-ae45-41fd-87f7-7ce1658f5b77",
        "codigo": "OE.1.1.1",
        "descripcion": "CONSTRUCCIONES PROVISIONALES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "1dae50ec-7c0b-48d5-b0e5-ffb702df60b1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "34130fef-d81c-4a2b-9845-46469a08f7d1",
        "codigo": "OE.1.1.1.1",
        "descripcion": "Almacén Oficina y Caseta de Guardiania",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "e77e64f3-ae45-41fd-87f7-7ce1658f5b77",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.1 CONSTRUCCIONES PROVISIONALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM1",
        "apu": null
    },
    {
        "id": "316636c9-24b0-4542-9fff-0a4a90a5f817",
        "codigo": "OE.1.1.1.6",
        "descripcion": "Servicios higienicos",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "e77e64f3-ae45-41fd-87f7-7ce1658f5b77",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.1 CONSTRUCCIONES PROVISIONALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM1",
        "apu": null
    },
    {
        "id": "370d604e-959b-43f0-aa22-629aeef882b9",
        "codigo": "OE.1.1.1.8",
        "descripcion": "Cartel de Obra de 2.40X3.60",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e77e64f3-ae45-41fd-87f7-7ce1658f5b77",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.1 CONSTRUCCIONES PROVISIONALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM1",
        "apu": null
    },
    {
        "id": "faf6a3ce-6794-411c-847e-c3b9128b2305",
        "codigo": "OE.1.1.2",
        "descripcion": "INSTALACIONES PROVISIONALES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "1dae50ec-7c0b-48d5-b0e5-ffb702df60b1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "c7041f50-dd8f-4438-8f85-b9ba74b2ed35",
        "codigo": "OE.1.1.2.3",
        "descripcion": "Energia Electrica Provisional",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "faf6a3ce-6794-411c-847e-c3b9128b2305",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.2 INSTALACIONES PROVISIONALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "72a67c40-9a5b-4c16-83e7-1a29ea724211",
        "codigo": "OE.1.1.2.4",
        "descripcion": "Abastecimiento Provisional de agua",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "faf6a3ce-6794-411c-847e-c3b9128b2305",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.2 INSTALACIONES PROVISIONALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "4f3f4d72-cc41-4010-9a8f-d6f5b684fc43",
        "codigo": "OE.1.1.3",
        "descripcion": "TRABAJOS PRELIMINARES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "1dae50ec-7c0b-48d5-b0e5-ffb702df60b1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "5dc521af-b8ba-4980-934b-645e177cabb9",
        "codigo": "OE.1.1.3.1",
        "descripcion": "LIMPIEZA DE TERRENO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "4f3f4d72-cc41-4010-9a8f-d6f5b684fc43",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.3 TRABAJOS PRELIMINARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "ab38f1cc-4c62-4b0c-a35b-a44996fd3aa9",
        "codigo": "OE.1.1.3.1.1",
        "descripcion": "Eliminación de maleza y arbustos de fácil extracción",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "5dc521af-b8ba-4980-934b-645e177cabb9",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.3 TRABAJOS PRELIMINARES",
            "OE.1.1.3.1 LIMPIEZA DE TERRENO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "8d3770d1-7598-4e57-9881-ccc3ea20ab9c",
        "codigo": "OE.1.1.3.1.2",
        "descripcion": "Traslado de material en desuso d=100 m",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "5dc521af-b8ba-4980-934b-645e177cabb9",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.3 TRABAJOS PRELIMINARES",
            "OE.1.1.3.1 LIMPIEZA DE TERRENO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "901cf7e5-3508-4a48-9935-788dd07b3bb9",
        "codigo": "OE.1.1.3.1.3",
        "descripcion": "Limpieza de terreno",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "5dc521af-b8ba-4980-934b-645e177cabb9",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.3 TRABAJOS PRELIMINARES",
            "OE.1.1.3.1 LIMPIEZA DE TERRENO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "f9e12ac0-d3a5-4db5-af23-57259a4a4487",
        "codigo": "OE.1.1.3.1.4",
        "descripcion": "Acarreo manual de material de desmonte",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "5dc521af-b8ba-4980-934b-645e177cabb9",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.3 TRABAJOS PRELIMINARES",
            "OE.1.1.3.1 LIMPIEZA DE TERRENO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "6f923dc1-21d1-49f1-ba23-aea3a8b4ee5c",
        "codigo": "OE.1.1.3.1.5",
        "descripcion": "Eliminacion de desmonte con maquinaria",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "5dc521af-b8ba-4980-934b-645e177cabb9",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.3 TRABAJOS PRELIMINARES",
            "OE.1.1.3.1 LIMPIEZA DE TERRENO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "47f0d15b-ede0-4e89-8a9a-ebdabb22a7dd",
        "codigo": "OE.1.1.7",
        "descripcion": "MOVILIZACIÓN DE CAMPAMENTO, MAQUINARIA Y HERRAMIENTAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "1dae50ec-7c0b-48d5-b0e5-ffb702df60b1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "140d634d-68c6-4383-9cff-3da95b45e3d7",
        "codigo": "OE.1.1.7.1",
        "descripcion": "Movilización y desmovilización de equipos",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "47f0d15b-ede0-4e89-8a9a-ebdabb22a7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.7 MOVILIZACIÓN DE CAMPAMENTO, MAQUINARIA Y HERRAMIENTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "031ff370-04e5-45a2-89f1-bee3af901890",
        "codigo": "OE.1.1.7.2",
        "descripcion": "Flete Terrestre",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "47f0d15b-ede0-4e89-8a9a-ebdabb22a7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.7 MOVILIZACIÓN DE CAMPAMENTO, MAQUINARIA Y HERRAMIENTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "05457624-440d-48ef-8158-48a879048729",
        "codigo": "OE.1.1.9",
        "descripcion": "TRAZOS, NIVELES Y REPLANTEO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "1dae50ec-7c0b-48d5-b0e5-ffb702df60b1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "f96cae45-8461-447b-841e-9d0c379cb468",
        "codigo": "OE.1.1.9.1",
        "descripcion": "Trazo, niveles y replanteo preliminar",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "05457624-440d-48ef-8158-48a879048729",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.9 TRAZOS, NIVELES Y REPLANTEO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "c4ecb5f9-c666-4fc2-a2ca-a5b90d0c38b6",
        "codigo": "OE.1.1.9.2",
        "descripcion": "Trazo y Replanteo durante el proceso",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "05457624-440d-48ef-8158-48a879048729",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.9 TRAZOS, NIVELES Y REPLANTEO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "20500d91-92a8-4cdf-99a0-150401f570c2",
        "codigo": "OE.1.2",
        "descripcion": "SEGURIDAD Y SALUD",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "cf4a6613-1791-45ee-8d9d-2bd927218090",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD."
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "7e83e4ef-9358-40ff-982b-72f34bda4ae1",
        "codigo": "OE.1.2.1",
        "descripcion": "ELABORACIÓN, IMPLEMENTACIÓN Y ADMINISTRACIÓN DEL PLAN DE SEGURIDAD Y SALUD EN EL TRABAJO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "20500d91-92a8-4cdf-99a0-150401f570c2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "b711047d-d327-4b4a-a32f-62f494c3214e",
        "codigo": "OE.1.2.1.1",
        "descripcion": "Elaboracion, Implementacion y administracion del Plan de Seguridad y Salud en el Trabajo",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "7e83e4ef-9358-40ff-982b-72f34bda4ae1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.1 ELABORACIÓN, IMPLEMENTACIÓN Y ADMINISTRACIÓN DEL PLAN DE SEGURIDAD Y SALUD EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "74f88fdd-cd12-4250-8ce8-e6cb384e8acd",
        "codigo": "OE.1.2.1.2",
        "descripcion": "Equipos de Proteccion Individual",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7e83e4ef-9358-40ff-982b-72f34bda4ae1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.1 ELABORACIÓN, IMPLEMENTACIÓN Y ADMINISTRACIÓN DEL PLAN DE SEGURIDAD Y SALUD EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "99139263-ba8b-4699-9e87-6a44e1d926b9",
        "codigo": "OE.1.2.1.3",
        "descripcion": "Equipos de Proteccion Colectiva",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "7e83e4ef-9358-40ff-982b-72f34bda4ae1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.1 ELABORACIÓN, IMPLEMENTACIÓN Y ADMINISTRACIÓN DEL PLAN DE SEGURIDAD Y SALUD EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "99b41aba-6550-4e26-8fea-3cf81247b2eb",
        "codigo": "OE.1.2.1.4",
        "descripcion": "Señalizacion Temporal de Seguridad",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "7e83e4ef-9358-40ff-982b-72f34bda4ae1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.1 ELABORACIÓN, IMPLEMENTACIÓN Y ADMINISTRACIÓN DEL PLAN DE SEGURIDAD Y SALUD EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "9dc0c293-635c-468b-9112-4dfe844a9df6",
        "codigo": "OE.1.2.1.5",
        "descripcion": "Capacitacion en Seguridad y Salud",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "7e83e4ef-9358-40ff-982b-72f34bda4ae1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.1 ELABORACIÓN, IMPLEMENTACIÓN Y ADMINISTRACIÓN DEL PLAN DE SEGURIDAD Y SALUD EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "074ab02b-b3bd-4bdb-bb2e-5d999902d76c",
        "codigo": "OE.1.2.2",
        "descripcion": "RECURSOS PARA RESPUESTAS ANTE EMERGENCIAS EN SEGURIDAD Y SALUD DURANTE EL TRABAJO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "20500d91-92a8-4cdf-99a0-150401f570c2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "06cf108c-4abd-4603-a67a-cd8ff607a285",
        "codigo": "OE.1.2.2.1",
        "descripcion": "Equipos de Primeros Auxilios y de Socorro",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "074ab02b-b3bd-4bdb-bb2e-5d999902d76c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.2 RECURSOS PARA RESPUESTAS ANTE EMERGENCIAS EN SEGURIDAD Y SALUD DURANTE EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "2770e82b-6035-4fd8-aa55-8b4a873d019c",
        "codigo": "OE.1.2.2.2",
        "descripcion": "Equipos contra incendios",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "074ab02b-b3bd-4bdb-bb2e-5d999902d76c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.2 RECURSOS PARA RESPUESTAS ANTE EMERGENCIAS EN SEGURIDAD Y SALUD DURANTE EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "9b264363-ebbb-45e0-8bbc-76b43e955d1e",
        "codigo": "OE.1.2.3",
        "descripcion": "PLAN PARA LA VIGILANCIA PREVENCION Y CONTROL DE COVID EN EL TRABAJO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "20500d91-92a8-4cdf-99a0-150401f570c2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "9c6d42bc-3c6e-49a7-b0bf-a961e57c256f",
        "codigo": "OE.1.2.3.1",
        "descripcion": "Plan para la vigilancia prevención y control de COVID en el trabajo",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "9b264363-ebbb-45e0-8bbc-76b43e955d1e",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.3 PLAN PARA LA VIGILANCIA PREVENCION Y CONTROL DE COVID EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "7c850c81-0328-4c85-a079-c99620486cf4",
        "codigo": "OE.1.2.3.2",
        "descripcion": "Equipos de Proteccion Individual -Covid19",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "9b264363-ebbb-45e0-8bbc-76b43e955d1e",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.3 PLAN PARA LA VIGILANCIA PREVENCION Y CONTROL DE COVID EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "9b65a8a4-adce-485b-8991-4697ce986c74",
        "codigo": "OE.1.2.3.3",
        "descripcion": "Equipos de Proteccion Colectivo ante el COVID-19",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "9b264363-ebbb-45e0-8bbc-76b43e955d1e",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.3 PLAN PARA LA VIGILANCIA PREVENCION Y CONTROL DE COVID EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "424dd253-c2ed-4cd6-bc56-5d804191860a",
        "codigo": "OE.1.2.3.4",
        "descripcion": "Señalización temporal de seguridad ante el COVID-19",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "9b264363-ebbb-45e0-8bbc-76b43e955d1e",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.3 PLAN PARA LA VIGILANCIA PREVENCION Y CONTROL DE COVID EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "153173d6-c03a-4228-b57f-8a27033bfa01",
        "codigo": "OE.1.2.3.5",
        "descripcion": "Servicio de Pruebas COVID - 19",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "9b264363-ebbb-45e0-8bbc-76b43e955d1e",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.3 PLAN PARA LA VIGILANCIA PREVENCION Y CONTROL DE COVID EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "7609cc67-bed8-4911-9ef4-0bbc23ebe336",
        "codigo": "OE.2",
        "descripcion": "ESTRUCTURAS.",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 2,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "b844965c-396c-4534-9645-1a488cd3f2c4",
        "codigo": "OE.2.1",
        "descripcion": "MOVIMIENTO DE TIERRAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "7609cc67-bed8-4911-9ef4-0bbc23ebe336",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.2 ESTRUCTURAS."
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "6fb82521-2790-47d5-8472-5fffc83b4bd7",
        "codigo": "OE.2.1.1",
        "descripcion": "EXCAVACIONES MASIVA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "b844965c-396c-4534-9645-1a488cd3f2c4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "ede97415-7cf4-4e60-a8b4-61a538222658",
        "codigo": "OE.2.1.1.1",
        "descripcion": "Excavacion con maquinaria",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "6fb82521-2790-47d5-8472-5fffc83b4bd7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS",
            "OE.2.1.1 EXCAVACIONES MASIVA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "6018d815-61c6-4dec-a298-9233fb174b6d",
        "codigo": "OE.2.1.2",
        "descripcion": "EXCAVACIONES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "b844965c-396c-4534-9645-1a488cd3f2c4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "af4f6b51-395e-4eb4-9d00-1da8df8a8f80",
        "codigo": "OE.2.1.2.1",
        "descripcion": "EXCAVACIONES SIMPLES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "6018d815-61c6-4dec-a298-9233fb174b6d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS",
            "OE.2.1.2 EXCAVACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "b93c1ff8-96d3-41af-bd9e-7d009855156c",
        "codigo": "OE.2.1.2.1.1",
        "descripcion": "Excavacion manual de zanjas para Zapatas",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "af4f6b51-395e-4eb4-9d00-1da8df8a8f80",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS",
            "OE.2.1.2 EXCAVACIONES",
            "OE.2.1.2.1 EXCAVACIONES SIMPLES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "6bf519cc-693d-4e39-8092-f0dbbe9bd7a2",
        "codigo": "OE.2.1.2.1.2",
        "descripcion": "Excavacion manual de zanjas para Vigas de Cimentación",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "af4f6b51-395e-4eb4-9d00-1da8df8a8f80",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS",
            "OE.2.1.2 EXCAVACIONES",
            "OE.2.1.2.1 EXCAVACIONES SIMPLES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "857fec4c-ec1f-4337-8df5-9bafcb9ad5f7",
        "codigo": "OE.2.1.4",
        "descripcion": "RELLENOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "b844965c-396c-4534-9645-1a488cd3f2c4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "863f67a3-d48c-41a2-8c68-879125b09797",
        "codigo": "OE.2.1.4.1",
        "descripcion": "Relleno compactado con material de prestamo",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "857fec4c-ec1f-4337-8df5-9bafcb9ad5f7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS",
            "OE.2.1.4 RELLENOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "b81c9514-1d3b-4594-804d-c021d6e5dc5e",
        "codigo": "OE.2.1.4.2",
        "descripcion": "Relleno compactado c/equipo con material de afirmado e=0.15m",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "857fec4c-ec1f-4337-8df5-9bafcb9ad5f7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS",
            "OE.2.1.4 RELLENOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "6495083e-1221-4a0d-9344-69ca5cab348a",
        "codigo": "OE.2.1.5.",
        "descripcion": "NIVELACION INTERIOR Y APISONADO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "2bc1c45b-d5a2-4418-97d9-361eaf68af84",
        "codigo": "OE.2.1.5.1",
        "descripcion": "Nivelacion interior y apisonado para f.piso,patio y veredas",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM1",
        "apu": null
    },
    {
        "id": "4b43b37d-e798-4e5c-901d-cffc83d53857",
        "codigo": "OE.2.1.5.2",
        "descripcion": "Nivelación y compactación en área(fondo) de cimentación",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "79eda053-a3a6-4e5f-9524-e3294e76c955",
        "codigo": "OE.2.1.6",
        "descripcion": "ELIMINACION DE MATERIAL EXCEDENTE",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "b844965c-396c-4534-9645-1a488cd3f2c4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "c278e1ec-3ab9-4e93-b6ab-8652eb7eebdf",
        "codigo": "OE.2.1.6.1",
        "descripcion": "Acarreo de material excavado a punto de carguio",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "79eda053-a3a6-4e5f-9524-e3294e76c955",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS",
            "OE.2.1.6 ELIMINACION DE MATERIAL EXCEDENTE"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "90e4edd8-8e7f-4d5b-9321-9b619b7aeed5",
        "codigo": "OE.2.1.6.2",
        "descripcion": "Eliminacion de material excedente con maquinaria",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "79eda053-a3a6-4e5f-9524-e3294e76c955",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS",
            "OE.2.1.6 ELIMINACION DE MATERIAL EXCEDENTE"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "0b0d0541-fa13-4259-90dd-06f6c81bae66",
        "codigo": "OE.2.2",
        "descripcion": "OBRAS DE CONCRETO SIMPLE",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "7609cc67-bed8-4911-9ef4-0bbc23ebe336",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.2 ESTRUCTURAS."
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "4e3d1d29-d998-4491-a895-52e1a1126b6a",
        "codigo": "OE.2.2.2",
        "descripcion": "FALSA ZAPATA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "0b0d0541-fa13-4259-90dd-06f6c81bae66",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.2 OBRAS DE CONCRETO SIMPLE"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "0478a728-6d2f-477b-93d9-7fe2543b870b",
        "codigo": "OE.2.2.2.1",
        "descripcion": "Falsa zapata, concreto=100kg/cm2 + 50% P.G",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "4e3d1d29-d998-4491-a895-52e1a1126b6a",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.2 OBRAS DE CONCRETO SIMPLE",
            "OE.2.2.2 FALSA ZAPATA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "66297c06-bef2-44b2-b935-fd79e9d97c6b",
        "codigo": "OE.2.2.3",
        "descripcion": "SOLADOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "0b0d0541-fa13-4259-90dd-06f6c81bae66",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.2 OBRAS DE CONCRETO SIMPLE"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "add1585f-3f0b-4e78-91d7-8d1402c0ebd9",
        "codigo": "OE.2.2.3.1",
        "descripcion": "Solado para zapata e=0.10m, f'c=100kg/cm2",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "66297c06-bef2-44b2-b935-fd79e9d97c6b",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.2 OBRAS DE CONCRETO SIMPLE",
            "OE.2.2.3 SOLADOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "faab516d-8434-4db5-9ab0-30581bb56a11",
        "codigo": "OE.2.2.4",
        "descripcion": "DADOS DE ANCLAJE",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "0b0d0541-fa13-4259-90dd-06f6c81bae66",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.2 OBRAS DE CONCRETO SIMPLE"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1a060502-8541-47a9-a0b4-63ba731bdd85",
        "codigo": "OE.2.2.4.1",
        "descripcion": "Dado de anclaje f'c= 210 kg/cm2",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "faab516d-8434-4db5-9ab0-30581bb56a11",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.2 OBRAS DE CONCRETO SIMPLE",
            "OE.2.2.4 DADOS DE ANCLAJE"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "be47f72e-294b-4a48-b25c-5c8fae909aa7",
        "codigo": "OE.2.2.4.2",
        "descripcion": "Acero en dado de anclaje para cimientos de columna",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "faab516d-8434-4db5-9ab0-30581bb56a11",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.2 OBRAS DE CONCRETO SIMPLE",
            "OE.2.2.4 DADOS DE ANCLAJE"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "9075879e-d852-4c73-b7b0-02af6cccc562",
        "codigo": "OE.2.3",
        "descripcion": "OBRAS DE CONCRETO ARMADO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "7609cc67-bed8-4911-9ef4-0bbc23ebe336",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.2 ESTRUCTURAS."
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "223993a5-c10d-4229-89b8-157f2d841827",
        "codigo": "OE.2.3.2",
        "descripcion": "ZAPATAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "9075879e-d852-4c73-b7b0-02af6cccc562",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "63cb54ea-628b-473d-8bab-620251cc1883",
        "codigo": "OE.2.3.2.1",
        "descripcion": "Zapatas - Concreto f'c=210 kg/cm2",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "223993a5-c10d-4229-89b8-157f2d841827",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.2 ZAPATAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "1be32a86-3f70-4b8b-8f59-424b574fe8a7",
        "codigo": "OE.2.3.2.3",
        "descripcion": "Zapatas - Acero f'y=4200 kg/cm2",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "223993a5-c10d-4229-89b8-157f2d841827",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.2 ZAPATAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "90178081-56f9-4200-a3dd-004d7807d943",
        "codigo": "OE.2.3.3",
        "descripcion": "VIGAS DE CIMENTACIÓN",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "9075879e-d852-4c73-b7b0-02af6cccc562",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "62ff2402-409e-4f3a-a5db-69aa9bd09695",
        "codigo": "OE.2.3.3.1",
        "descripcion": "Vigas de Conexión - Concreto f'c= 210 kg/cm2",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "90178081-56f9-4200-a3dd-004d7807d943",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.3 VIGAS DE CIMENTACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "a1e3e46b-0031-4d76-ada4-32f89e58919d",
        "codigo": "OE.2.3.3.2",
        "descripcion": "Vigas de Conexión - Encofrado y desencofrado",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "90178081-56f9-4200-a3dd-004d7807d943",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.3 VIGAS DE CIMENTACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "619c2ce5-ec2f-44a1-a316-f1766eebcb4a",
        "codigo": "OE.2.3.3.3",
        "descripcion": "Vigas de Conexión - Acero f'y=4200 kg/cm2",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "90178081-56f9-4200-a3dd-004d7807d943",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.3 VIGAS DE CIMENTACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "51d47bd8-07f3-4d9e-87c6-9b0d8a231281",
        "codigo": "OE.2.3.7",
        "descripcion": "PEDESTALES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "9075879e-d852-4c73-b7b0-02af6cccc562",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "9d245a20-a3b8-4146-a862-49e47334919d",
        "codigo": "OE.2.3.7.1",
        "descripcion": "Pedestales - Concreto f'c=210 kg/cm2",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "51d47bd8-07f3-4d9e-87c6-9b0d8a231281",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.7 PEDESTALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "dd6f3f2d-f63c-441f-9b57-f8832d8e4db3",
        "codigo": "OE.2.3.7.2",
        "descripcion": "Pedestales - Encofrado y desencofrado",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "51d47bd8-07f3-4d9e-87c6-9b0d8a231281",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.7 PEDESTALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "1b7f6d6c-9689-4ae0-89c4-4c5d6571d1fe",
        "codigo": "OE.2.3.7.3",
        "descripcion": "Pedestales - Acero f'y=4200 kg/cm2",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "51d47bd8-07f3-4d9e-87c6-9b0d8a231281",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.7 PEDESTALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "bfdbb90c-13b8-4fca-afeb-0130b48fecc4",
        "codigo": "OE.2.3.9",
        "descripcion": "LOSAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "9075879e-d852-4c73-b7b0-02af6cccc562",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1f8965d3-4d98-4218-ad40-29003b8c8723",
        "codigo": "OE.2.3.9.7",
        "descripcion": "LOSAS COLABORANTE",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "bfdbb90c-13b8-4fca-afeb-0130b48fecc4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.9 LOSAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "45b7bf43-fbc4-4d37-bcb8-7364179e5506",
        "codigo": "OE.2.3.9.7.1",
        "descripcion": "Losa Colaborante - Concreto f'c=210 kg/cm2",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "1f8965d3-4d98-4218-ad40-29003b8c8723",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.9 LOSAS",
            "OE.2.3.9.7 LOSAS COLABORANTE"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "2cfa6db9-3edb-4950-8cba-45c0579bf993",
        "codigo": "OE.2.3.9.7.2",
        "descripcion": "Losa colaborante.- PLANCHA AD-900 calibre 22 ó equivalente",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "1f8965d3-4d98-4218-ad40-29003b8c8723",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.9 LOSAS",
            "OE.2.3.9.7 LOSAS COLABORANTE"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "d1dadc45-39b9-46e4-bd04-e567d7d8bb8e",
        "codigo": "OE.2.3.9.7.3",
        "descripcion": "Losa Colaborante - Acero Fy=4,200 kg/cm2",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "1f8965d3-4d98-4218-ad40-29003b8c8723",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.9 LOSAS",
            "OE.2.3.9.7 LOSAS COLABORANTE"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "e1b2bd82-6119-4690-bf46-b753f4579903",
        "codigo": "OE.2.3.9.8",
        "descripcion": "LOSAS DE CONCRETO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "bfdbb90c-13b8-4fca-afeb-0130b48fecc4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.9 LOSAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "b62a898a-c6f2-4ecc-bcf3-487646ccbcc3",
        "codigo": "OE.2.3.9.8.1",
        "descripcion": "Concreto f'c=210 kg/cm2 en losa",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "e1b2bd82-6119-4690-bf46-b753f4579903",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.9 LOSAS",
            "OE.2.3.9.8 LOSAS DE CONCRETO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "e85f5e4e-5b2e-4308-828a-3d1e2d41e9ca",
        "codigo": "OE.2.3.9.8.2",
        "descripcion": "Encofrado y desencofrado en losa de concreto",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "e1b2bd82-6119-4690-bf46-b753f4579903",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.9 LOSAS",
            "OE.2.3.9.8 LOSAS DE CONCRETO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "669603fa-2ee4-467b-b686-d2a32a542357",
        "codigo": "OE.2.3.9.8.3",
        "descripcion": "Acero f'y=4200 kg/cm2 en losa de concreto",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "e1b2bd82-6119-4690-bf46-b753f4579903",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.9 LOSAS",
            "OE.2.3.9.8 LOSAS DE CONCRETO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "abb652c8-9463-4cee-a681-058a0e2905da",
        "codigo": "OE.2.3.12",
        "descripcion": "CISTERNA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "9075879e-d852-4c73-b7b0-02af6cccc562",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "d7936d4c-caca-41f3-80e6-dcadd7bc6f49",
        "codigo": "OE.2.3.12.1",
        "descripcion": "Cisternas -Concreto f´c=280kg/cm2",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "abb652c8-9463-4cee-a681-058a0e2905da",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.12 CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "9dc46c3d-b0cc-4955-a997-0e64d73d04ba",
        "codigo": "OE.2.3.12.2",
        "descripcion": "Cisternas -encofrado y desencofrado",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "abb652c8-9463-4cee-a681-058a0e2905da",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.12 CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "86ec0f6e-e462-48b3-9730-3741f4337fa0",
        "codigo": "OE.2.3.12.3",
        "descripcion": "Cisternas -Acero fy=4200 kg/cm2",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "abb652c8-9463-4cee-a681-058a0e2905da",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.12 CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "c9dc4b06-fda0-4b29-ab1a-0522fa52f428",
        "codigo": "OE.2.3.13",
        "descripcion": "SOBRECIMIENTO ARMADO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "9075879e-d852-4c73-b7b0-02af6cccc562",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "927e63a8-013a-49cb-9cb2-ab5c9969f9f0",
        "codigo": "OE.2.3.13.1",
        "descripcion": "Sobrecimiento concreto 1:8+25%PM",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "c9dc4b06-fda0-4b29-ab1a-0522fa52f428",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.13 SOBRECIMIENTO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "6ab58d61-beb8-446d-9354-aa32f1cb73c4",
        "codigo": "OE.2.3.13.2",
        "descripcion": "Encofrado y desencofrado en sobrecimiento",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "c9dc4b06-fda0-4b29-ab1a-0522fa52f428",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.13 SOBRECIMIENTO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "66395aa8-e937-4597-a34b-8c031150ff7a",
        "codigo": "OE.2.3.13.3",
        "descripcion": "Acero f'y=4200 kg/cm2 en sobrecimiento",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "c9dc4b06-fda0-4b29-ab1a-0522fa52f428",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.13 SOBRECIMIENTO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "0a53dfbf-4b35-49bf-a48a-a8ef3fb92e30",
        "codigo": "OE.2.3.14",
        "descripcion": "CIMIENTO CORRIDO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "9075879e-d852-4c73-b7b0-02af6cccc562",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "f9bc1562-05c5-452b-9846-154035022e20",
        "codigo": "OE.2.3.14.1",
        "descripcion": "Concreto f'c= 175 kg/cm2 en cimiento",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "0a53dfbf-4b35-49bf-a48a-a8ef3fb92e30",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.14 CIMIENTO CORRIDO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "042776f5-cf6f-418f-8e6d-0007fed4f4b5",
        "codigo": "OE.2.3.14.2",
        "descripcion": "Encofrado y desencofrado en cimiento",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "0a53dfbf-4b35-49bf-a48a-a8ef3fb92e30",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.14 CIMIENTO CORRIDO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "5c866990-f57e-471c-ab2c-72656d65645e",
        "codigo": "OE.2.4",
        "descripcion": "ESTRUCTURAS METÁLICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "7609cc67-bed8-4911-9ef4-0bbc23ebe336",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.2 ESTRUCTURAS."
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "236167a6-a577-47d1-97cd-efca3727f2d8",
        "codigo": "OE.2.4.1",
        "descripcion": "COLUMNAS METALICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "5c866990-f57e-471c-ab2c-72656d65645e",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "b66a289f-704d-4060-aadb-0bd36cb05f09",
        "codigo": "OE.2.4.1.1.1",
        "descripcion": "Columnas metalicas",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "6da762cd-f49a-4907-991f-e56a08be86ce",
        "codigo": "OE.2.4.1.1.2",
        "descripcion": "Placa Base",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "514830dc-7248-461a-b121-17e33e10fb38",
        "codigo": "OE.2.4.1.1.3",
        "descripcion": "Pernos 1\" (L=450mm) en placa base columnas",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "bad32a57-1ec4-4fc9-a8c1-48f66482414a",
        "codigo": "OE.2.4.1.1.4",
        "descripcion": "Pernos 3/4\" (L=450mm) en placa base columnas",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "64b49408-e9ae-496c-a21c-da14b6173316",
        "codigo": "OE.2.4.1.1.5",
        "descripcion": "Pernos 5/8\" (L=450mm) en placa base columnas",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "58b42556-dfa2-4da6-b9ec-2af1244e0954",
        "codigo": "OE.2.4.1.1.6",
        "descripcion": "Pernos ØM16 A490 (L=400mm) en placa base columnas",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "76937137-11f1-49da-9302-0dc7f444fbf3",
        "codigo": "OE.2.4.1.1.7",
        "descripcion": "Placa Base Inc. Pernos de anclaje",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "f08e0141-8a8e-49e1-a2dd-8363afa06bcf",
        "codigo": "OE.2.4.1.1.8",
        "descripcion": "Armado Columnas metálicas 3mm (L=6m)",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1c7828af-0e01-41c2-8d5e-2e6efd4f5652",
        "codigo": "OE.2.4.1.1.9",
        "descripcion": "Montaje Columnas metálicas 3mm (L=6m)",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "7ab3d4ec-e864-4236-b07b-43b7d11d1972",
        "codigo": "OE.2.4.2",
        "descripcion": "VIGAS METALICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "5c866990-f57e-471c-ab2c-72656d65645e",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "01f2bef3-0088-4b9e-af33-c7fa2befa2bf",
        "codigo": "OE.2.4.2.1.1",
        "descripcion": "Vigas Metalicas",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "4517e1ef-d3e8-4652-84d3-874228634a05",
        "codigo": "OE.2.4.2.2.1",
        "descripcion": "Plancha Metalica",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "e5bbc911-b522-4e06-a6d1-7497c155430f",
        "codigo": "OE.2.4.2.2.2",
        "descripcion": "PERNOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "35591eb8-a19e-4a3e-bfef-402de204f95e",
        "codigo": "OE.2.4.2.2.2.1",
        "descripcion": "Pernos 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e5bbc911-b522-4e06-a6d1-7497c155430f",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS",
            "OE.2.4.2.2.2 PERNOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "6b8082f0-841a-4bde-9584-446d11f8212e",
        "codigo": "OE.2.4.2.2.2.2",
        "descripcion": "Pernos 5/8\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e5bbc911-b522-4e06-a6d1-7497c155430f",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS",
            "OE.2.4.2.2.2 PERNOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "8f79a6e2-89cc-465e-b35b-46e3ff6aa1b2",
        "codigo": "OE.2.4.2.2.2.3",
        "descripcion": "Pernos 3/4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e5bbc911-b522-4e06-a6d1-7497c155430f",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS",
            "OE.2.4.2.2.2 PERNOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "a9d77c70-7e1f-4428-9c21-89832aa464e7",
        "codigo": "OE.2.4.2.2.2.4",
        "descripcion": "Pernos 7/8\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e5bbc911-b522-4e06-a6d1-7497c155430f",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS",
            "OE.2.4.2.2.2 PERNOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "e7a57a06-ab42-488f-8716-679305e2c69a",
        "codigo": "OE.2.4.2.2.2.5",
        "descripcion": "Plancha Metalica Inc.Pernos de sujeción",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e5bbc911-b522-4e06-a6d1-7497c155430f",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS",
            "OE.2.4.2.2.2 PERNOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "8fd52f15-4aa9-42b8-964b-66b45f7a0a90",
        "codigo": "OE.2.4.2.2.2.6",
        "descripcion": "Armado vigas metálicas 150x100mm e= 3mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "e5bbc911-b522-4e06-a6d1-7497c155430f",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS",
            "OE.2.4.2.2.2 PERNOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "2ad16113-8794-4dd3-80f9-db4c1a32f9a9",
        "codigo": "OE.2.4.2.2.2.7",
        "descripcion": "Montaje vigas metálicas 150x100 mm e=3mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "e5bbc911-b522-4e06-a6d1-7497c155430f",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS",
            "OE.2.4.2.2.2 PERNOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "ef1f0aa4-879d-45fd-9a04-ccd2cb4f1a0f",
        "codigo": "OE.2.4.3",
        "descripcion": "TIJERALES METALICO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "5c866990-f57e-471c-ab2c-72656d65645e",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "bf95dee1-e3c6-488b-a6e8-ba19424209b9",
        "codigo": "OE.2.4.3.1",
        "descripcion": "Tijeral Metalico - caseta TM-Ca",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "ef1f0aa4-879d-45fd-9a04-ccd2cb4f1a0f",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "7be8c816-f270-4c01-815c-bd010f84cca6",
        "codigo": "OE.2.4.3.1.1",
        "descripcion": "PLANCHAS METALICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "bf95dee1-e3c6-488b-a6e8-ba19424209b9",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.1 Tijeral Metalico - caseta TM-Ca"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "d4e0a977-77d0-4eab-b5fc-7e1d7e4eab5e",
        "codigo": "OE.2.4.3.1.1.1",
        "descripcion": "Plancha Metalica-Espesor de 6mm",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "7be8c816-f270-4c01-815c-bd010f84cca6",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.1 Tijeral Metalico - caseta TM-Ca",
            "OE.2.4.3.1.1 PLANCHAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "b53290e8-9c43-4e75-8f4b-e7318136e62a",
        "codigo": "OE.2.4.3.2",
        "descripcion": "Armado de Tijeral Metalico",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "ef1f0aa4-879d-45fd-9a04-ccd2cb4f1a0f",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "77bbc2ad-af7e-4ce6-8dd5-ef08ead0d58e",
        "codigo": "OE.2.4.3.2.1",
        "descripcion": "Armado de Tijeral metalico Tipo 01 L=7.00 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b53290e8-9c43-4e75-8f4b-e7318136e62a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "2a2ee569-d1ba-430e-936c-8a4045f006d8",
        "codigo": "OE.2.4.3.2.2",
        "descripcion": "Armado de Tijeral metalico Tipo 02 L=6.00 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b53290e8-9c43-4e75-8f4b-e7318136e62a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "71e8d027-dd38-42a9-8074-64ff98838165",
        "codigo": "OE.2.4.3.2.3",
        "descripcion": "Armado de Tijeral metalico Tipo 03 L=3.50 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b53290e8-9c43-4e75-8f4b-e7318136e62a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "1af4f823-68f7-414d-8c6c-f145ef135af6",
        "codigo": "OE.2.4.3.2.4",
        "descripcion": "Armado de Tijeral metalico Tipo 04 L=3.10 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b53290e8-9c43-4e75-8f4b-e7318136e62a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "bda0a45b-0b93-4641-9d6a-aec0d47c5c06",
        "codigo": "OE.2.4.3.2.5",
        "descripcion": "Armado de Tijeral metalico Tipo 05 L=3.00 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b53290e8-9c43-4e75-8f4b-e7318136e62a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "86bcfdc2-567e-4a39-bf5c-bf76c44512b1",
        "codigo": "OE.2.4.3.2.6",
        "descripcion": "Armado de Tijeral metalico Tipo 06 L=2.60 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b53290e8-9c43-4e75-8f4b-e7318136e62a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "3c8f7ff5-1135-4269-8e35-91ec50940980",
        "codigo": "OE.2.4.3.2.7",
        "descripcion": "Armado de Tijeral metalico Tipo 07 L=1.90 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b53290e8-9c43-4e75-8f4b-e7318136e62a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "41914c03-46cb-4eec-b7eb-3e8290cf775d",
        "codigo": "OE.2.4.3.2.8",
        "descripcion": "Armado de Tijeral metalico Tipo 08 L=1.30 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b53290e8-9c43-4e75-8f4b-e7318136e62a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "16d891d0-c60b-4c8a-8e53-f4fabf81a5ba",
        "codigo": "OE.2.4.3.2.9",
        "descripcion": "Armado de Tijeral metálico Tipo 09 L=3.70 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b53290e8-9c43-4e75-8f4b-e7318136e62a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "f4d3d30f-9fbb-4db4-9107-3a33c11a0002",
        "codigo": "OE.2.4.3.3",
        "descripcion": "Montaje de Tijeral Metalico",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "ef1f0aa4-879d-45fd-9a04-ccd2cb4f1a0f",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "96e24a43-0f65-4557-ab1e-9632f8b516f5",
        "codigo": "OE.2.4.3.3.1",
        "descripcion": "Montaje de Tijeral metalico Tipo 01 L=7.00 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f4d3d30f-9fbb-4db4-9107-3a33c11a0002",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "d69677e6-5972-43f0-af14-25507d13d794",
        "codigo": "OE.2.4.3.3.2",
        "descripcion": "Montaje de Tijeral metalico Tipo 02 L=6.00 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f4d3d30f-9fbb-4db4-9107-3a33c11a0002",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "418ee85b-92d1-4ce7-b9ad-2989546759b7",
        "codigo": "OE.2.4.3.3.3",
        "descripcion": "Montaje de Tijeral metalico Tipo 03 L=3.50 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f4d3d30f-9fbb-4db4-9107-3a33c11a0002",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "18d77e6b-0b7e-4520-b9f2-7dd7917b3182",
        "codigo": "OE.2.4.3.3.4",
        "descripcion": "Montaje de Tijeral metalico Tipo 04 L=3.10 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f4d3d30f-9fbb-4db4-9107-3a33c11a0002",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "6a6a35d2-f835-4d09-91ab-8c01210fa9c8",
        "codigo": "OE.2.4.3.3.5",
        "descripcion": "Montaje de Tijeral metalico Tipo 05 L=3.00 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f4d3d30f-9fbb-4db4-9107-3a33c11a0002",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "a92b3815-8272-4091-a3de-d03ce895f346",
        "codigo": "OE.2.4.3.3.6",
        "descripcion": "Montaje de Tijeral metalico Tipo 06 L=2.60 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f4d3d30f-9fbb-4db4-9107-3a33c11a0002",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "b662f4c4-e21f-4428-85f6-5db00f9f54c7",
        "codigo": "OE.2.4.3.3.7",
        "descripcion": "Montaje de Tijeral metalico Tipo 07 L=1.90 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f4d3d30f-9fbb-4db4-9107-3a33c11a0002",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "8242df7f-c533-4f9a-93bf-ec433a328dcd",
        "codigo": "OE.2.4.3.3.8",
        "descripcion": "Montaje de Tijeral metalico Tipo 08 L=1.30 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f4d3d30f-9fbb-4db4-9107-3a33c11a0002",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "50b037f2-e26f-4772-b881-7d6c8a4042d4",
        "codigo": "OE.2.4.3.3.9",
        "descripcion": "Montaje de Tijeral metálico Tipo 09 L=3.70 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f4d3d30f-9fbb-4db4-9107-3a33c11a0002",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "096997b1-6f70-45e0-9897-050a0723cf16",
        "codigo": "OE.2.4.4",
        "descripcion": "CORREAS METALICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "5c866990-f57e-471c-ab2c-72656d65645e",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "5646c77c-18e5-4cf4-a482-8c41854bf87a",
        "codigo": "OE.2.4.4.1",
        "descripcion": "Correas metalicas de 75x75x3mm",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "096997b1-6f70-45e0-9897-050a0723cf16",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.4 CORREAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "0c236d85-719d-4aaf-805f-f2f972e0006f",
        "codigo": "OE.2.4.4.2",
        "descripcion": "Correas metalicas de 50x50x3mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "096997b1-6f70-45e0-9897-050a0723cf16",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.4 CORREAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "c1dd8add-1aa8-475d-a863-3d7e236c6fb1",
        "codigo": "OE.2.6",
        "descripcion": "VARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "7609cc67-bed8-4911-9ef4-0bbc23ebe336",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.2 ESTRUCTURAS."
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "49c51cca-651e-4caa-a45d-99518303f9bf",
        "codigo": "OE.2.6.1",
        "descripcion": "ARRIOSTRAMIENTO METALICO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "c1dd8add-1aa8-475d-a863-3d7e236c6fb1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "af2c582c-545e-46fb-b1c5-9abea7da9616",
        "codigo": "OE.2.6.1.1",
        "descripcion": "Arriostramiento metalico",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "49c51cca-651e-4caa-a45d-99518303f9bf",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.1 ARRIOSTRAMIENTO METALICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "32e1b5de-376b-400b-bcce-76484f7c4f33",
        "codigo": "OE.2.6.1.2",
        "descripcion": "Plancha estriada de 1.20x2.40, e=1/8\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "49c51cca-651e-4caa-a45d-99518303f9bf",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.1 ARRIOSTRAMIENTO METALICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "365f873b-6227-4671-89b9-4262f702dbee",
        "codigo": "OE.2.6.1.3",
        "descripcion": "Parantes metalicos para contramarcos perfil 50x50x3.00mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "49c51cca-651e-4caa-a45d-99518303f9bf",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.1 ARRIOSTRAMIENTO METALICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "774a80de-4fab-45fd-9307-df9384494ce1",
        "codigo": "OE.2.6.2",
        "descripcion": "ESCALERA METALICA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "c1dd8add-1aa8-475d-a863-3d7e236c6fb1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "2b1e26e7-3ff4-42b7-ac35-0a8f15f2a41f",
        "codigo": "OE.2.6.2.1",
        "descripcion": "Perfiles",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "774a80de-4fab-45fd-9307-df9384494ce1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.2 ESCALERA METALICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "49abd2a5-aac1-439a-92c6-4b104448436e",
        "codigo": "OE.2.6.2.2",
        "descripcion": "Placa Base e=16mm",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "774a80de-4fab-45fd-9307-df9384494ce1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.2 ESCALERA METALICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "3062d3fe-17d8-469a-bbac-86423d4f489e",
        "codigo": "OE.2.6.2.3",
        "descripcion": "Refuerzo en la base e=6mm",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "774a80de-4fab-45fd-9307-df9384494ce1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.2 ESCALERA METALICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "810bef44-66d6-4232-8105-f9e31c798b37",
        "codigo": "OE.2.6.3",
        "descripcion": "ARRIOSTRES DEL TECHO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "c1dd8add-1aa8-475d-a863-3d7e236c6fb1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "7960c9e0-e446-44ba-95bc-0ecdadc5d544",
        "codigo": "OE.2.6.3.1",
        "descripcion": "Acero Ø 1/2\" LISO",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "810bef44-66d6-4232-8105-f9e31c798b37",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.3 ARRIOSTRES DEL TECHO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "678a38cc-6238-4ae5-bdea-7ec7eabc637a",
        "codigo": "OE.2.6.3.2",
        "descripcion": "Conexión de tirantes L64x64x7.9",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "810bef44-66d6-4232-8105-f9e31c798b37",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.3 ARRIOSTRES DEL TECHO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "4f9ff4c5-7027-4446-ba37-14fdd4518e3d",
        "codigo": "OE.2.6.3.3",
        "descripcion": "Angulo 2.5X2.5X3/16\"",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "810bef44-66d6-4232-8105-f9e31c798b37",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.3 ARRIOSTRES DEL TECHO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "84a80f63-04a2-4c36-964b-3e6b5685b3f3",
        "codigo": "OE.2.6.4",
        "descripcion": "PINTURA DE PROTECCION ANTICORROSIVA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "c1dd8add-1aa8-475d-a863-3d7e236c6fb1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1c8aca6c-57c0-45e5-9ee7-aa2493759ca1",
        "codigo": "OE.2.6.4.1",
        "descripcion": "Pintura a base de resinas epoxi para protección anticorrosión",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "84a80f63-04a2-4c36-964b-3e6b5685b3f3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.4 PINTURA DE PROTECCION ANTICORROSIVA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "8eeada1b-9eb0-435e-8a69-63b95698b8e3",
        "codigo": "OE.2.6.5",
        "descripcion": "CONTROL DE CALIDAD",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "c1dd8add-1aa8-475d-a863-3d7e236c6fb1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "b5aaad9b-128b-480a-b98a-7994cc1c45f4",
        "codigo": "OE.2.6.5.1",
        "descripcion": "Verificación de Capacidad Portante",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8eeada1b-9eb0-435e-8a69-63b95698b8e3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.5 CONTROL DE CALIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "f81b218f-4891-48dc-aeed-5ace711650ad",
        "codigo": "OE.2.6.5.2",
        "descripcion": "Diseño de Mezclas",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8eeada1b-9eb0-435e-8a69-63b95698b8e3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.5 CONTROL DE CALIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "18c10c0f-d4e9-46b0-997a-87af0611780a",
        "codigo": "OE.2.6.5.3",
        "descripcion": "Ensayos de Compactación de Suelos",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8eeada1b-9eb0-435e-8a69-63b95698b8e3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.5 CONTROL DE CALIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "a5429534-3c4c-4943-8670-4232a3326740",
        "codigo": "OE.2.6.5.4",
        "descripcion": "Rotura de Briquetas de concreto",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8eeada1b-9eb0-435e-8a69-63b95698b8e3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.5 CONTROL DE CALIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM1",
        "apu": null
    },
    {
        "id": "639474be-f7f8-48eb-9eed-c689a809e0cf",
        "codigo": "OE.2.6.5.5",
        "descripcion": "Pruebas de soldadura",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8eeada1b-9eb0-435e-8a69-63b95698b8e3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.5 CONTROL DE CALIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM1",
        "apu": null
    },
    {
        "id": "3ad41e1b-074e-43d2-90b4-4cb1468ff36b",
        "codigo": "OE.2.6.6",
        "descripcion": "CURADO Y PROTECCION DEL CONCRETO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "c1dd8add-1aa8-475d-a863-3d7e236c6fb1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "b4e81089-2ff2-4401-9ddf-1328ba625bfc",
        "codigo": "OE.2.6.6.1",
        "descripcion": "Curado y Protección de Concreto en Obra con Plástico",
        "unidad": "mes",
        "es_titulo": false,
        "parent_id": "3ad41e1b-074e-43d2-90b4-4cb1468ff36b",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.6 CURADO Y PROTECCION DEL CONCRETO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "0d09ce5f-74e1-45e2-a44a-7efc13ea4ba8",
        "codigo": "OE.2.6.6.2",
        "descripcion": "Curado y Proteccion de Concreto",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "3ad41e1b-074e-43d2-90b4-4cb1468ff36b",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.6 CURADO Y PROTECCION DEL CONCRETO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "560e40a5-7351-48e5-812a-de443601a2cd",
        "codigo": "OE.2.6.7",
        "descripcion": "CERCO METÁLICO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "c1dd8add-1aa8-475d-a863-3d7e236c6fb1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "d89df822-75d3-477e-a12e-87a354b5eba2",
        "codigo": "OE.2.6.7.1",
        "descripcion": "Cerco perimetrico de rejas metalicas",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "560e40a5-7351-48e5-812a-de443601a2cd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.7 CERCO METÁLICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "e3045373-7785-449b-b029-118194ac1ee5",
        "codigo": "OE.3",
        "descripcion": "ARQUITECTURA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 2,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "a246e231-beaf-4c17-bb82-1a402fc4b9c6",
        "codigo": "OE.3.1",
        "descripcion": "MUROS Y TABIQUES DE ALBAÑILERIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "e3045373-7785-449b-b029-118194ac1ee5",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.3 ARQUITECTURA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "df0deaac-3082-4495-b03a-246e4a5c2573",
        "codigo": "OE.3.1.10",
        "descripcion": "MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "a246e231-beaf-4c17-bb82-1a402fc4b9c6",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "6a7e4e9a-2ae8-4173-8631-d5d4df1fb1b0",
        "codigo": "OE.3.1.10.1",
        "descripcion": "MURO CON EL SISTEMA DRYWALL DOS CARAS",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "df0deaac-3082-4495-b03a-246e4a5c2573",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.10 MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "f5046131-401b-4df2-85a1-81fcd8b17ff8",
        "codigo": "OE.3.1.10.2",
        "descripcion": "CERCO PREFABRICADO DE CONCRETO TIPO PLACA H=3.00M.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "df0deaac-3082-4495-b03a-246e4a5c2573",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.10 MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "1c406e56-21ed-468d-85f6-edd6da43d44f",
        "codigo": "OE.3.1.10.3",
        "descripcion": "MURO SISTEMA DRYWALL CON LAMINA DE PLOMO e=2mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "df0deaac-3082-4495-b03a-246e4a5c2573",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.10 MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "8f483ed0-c4f1-4e44-8071-4f2b051bf1e7",
        "codigo": "OE.3.1.10.4",
        "descripcion": "TABIQUE DE DOS CARAS CON UNA PLANCHA DE FIBROCEMENTO SUPERBOARD PRO 12.7 mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "df0deaac-3082-4495-b03a-246e4a5c2573",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.10 MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "f7b38d0b-90a0-4bbc-995a-40e000eb242c",
        "codigo": "OE.3.1.10.5",
        "descripcion": "Tabique de Fibrocemento de 6 mm(interiores) y Fibrocemento de 12mm (Exterior) perfil 65 mm e=9.04",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "df0deaac-3082-4495-b03a-246e4a5c2573",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.10 MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "44ff422d-d42d-4c53-9fe1-d206a4ade0d8",
        "codigo": "OE.3.1.10.6",
        "descripcion": "Tabique de Fibrocemento dos caras de 6 mm (interiores)",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "df0deaac-3082-4495-b03a-246e4a5c2573",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.10 MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "8370664a-91e6-44a7-9d39-8945e0231804",
        "codigo": "OE.3.1.10.7",
        "descripcion": "Recubrimiento de elementos estructurales con fibrocemento de 6mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "df0deaac-3082-4495-b03a-246e4a5c2573",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.10 MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "87f49411-a554-4644-8e01-bafd9f806a7c",
        "codigo": "OE.3.1.10.8",
        "descripcion": "Muro sistema de fibrocemento con lamina de plomo e=3mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "df0deaac-3082-4495-b03a-246e4a5c2573",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.10 MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "7b383bd3-545f-44a2-8107-152a0d06488d",
        "codigo": "OE.3.1.11",
        "descripcion": "MUROS DE PIEDRA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "a246e231-beaf-4c17-bb82-1a402fc4b9c6",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "50423d3c-8a30-42e6-814e-afc29009351b",
        "codigo": "OE.3.1.11.1",
        "descripcion": "Mamposteria en piedra",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "7b383bd3-545f-44a2-8107-152a0d06488d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.11 MUROS DE PIEDRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "97a3a0a1-3976-487d-8efa-c9c97e899add",
        "codigo": "OE.3.3",
        "descripcion": "CIELORRASOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "e3045373-7785-449b-b029-118194ac1ee5",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.3 ARQUITECTURA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "aab7a745-5bb3-41e4-afb7-d3a3aa1ade4d",
        "codigo": "OE.3.3.6",
        "descripcion": "FALSO CIELO RASO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "97a3a0a1-3976-487d-8efa-c9c97e899add",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.3 CIELORRASOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "137f5960-d17c-4a35-af49-84cb02b7eca9",
        "codigo": "OE.3.3.6.1",
        "descripcion": "FALSO CIELORRASO (BALDOSA DE FIBRA MINERAL BIOSOLUBLE 0.61 x 0.61m, E=14mm.)",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "aab7a745-5bb3-41e4-afb7-d3a3aa1ade4d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.3 CIELORRASOS",
            "OE.3.3.6 FALSO CIELO RASO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "12eea2ed-4a27-4ffb-a4e9-19385554f00b",
        "codigo": "OE.3.3.6.2",
        "descripcion": "FALSO CIELO RASO CON PLACA DE SUPERBOARD (6mm.)",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "aab7a745-5bb3-41e4-afb7-d3a3aa1ade4d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.3 CIELORRASOS",
            "OE.3.3.6 FALSO CIELO RASO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "da2a0fb1-6aa5-4b7e-acc5-e18dedf4e972",
        "codigo": "OE.3.3.6.3",
        "descripcion": "FALSO CIELO RASO CON PLACA DE SUPERBOARD CON LAMINA DE PLOMO e=2mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "aab7a745-5bb3-41e4-afb7-d3a3aa1ade4d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.3 CIELORRASOS",
            "OE.3.3.6 FALSO CIELO RASO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "c2174d7b-b1d6-4ad7-91c2-175ef0c58ae2",
        "codigo": "OE.3.3.6.4",
        "descripcion": "Falso Cielorraso (Baldosa Translucida 0.61 x 0.61m)",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "aab7a745-5bb3-41e4-afb7-d3a3aa1ade4d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.3 CIELORRASOS",
            "OE.3.3.6 FALSO CIELO RASO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD2",
        "apu": null
    },
    {
        "id": "160359eb-7d55-44d1-ae7a-d7b8ed55334d",
        "codigo": "OE.3.3.6.5",
        "descripcion": "Falso cielo raso con placa superboard 6mm incluye estructuras",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "aab7a745-5bb3-41e4-afb7-d3a3aa1ade4d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.3 CIELORRASOS",
            "OE.3.3.6 FALSO CIELO RASO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "3fc89a65-ba40-44c9-86b2-4f72ccbdf6ee",
        "codigo": "OE.3.4",
        "descripcion": "PISOS Y PAVIMENTOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "e3045373-7785-449b-b029-118194ac1ee5",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.3 ARQUITECTURA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "fbc672f6-633c-480c-b185-badb0a2f1b1e",
        "codigo": "OE.3.4.1",
        "descripcion": "CONTRAPISOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "3fc89a65-ba40-44c9-86b2-4f72ccbdf6ee",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "f3dcf824-fad8-4dfc-8bcb-f5c1c25529ed",
        "codigo": "OE.3.4.1.1",
        "descripcion": "Contrapiso de concreto f'c=175 kg/cm2 e =4 cm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "fbc672f6-633c-480c-b185-badb0a2f1b1e",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.1 CONTRAPISOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM1",
        "apu": null
    },
    {
        "id": "862e6924-471f-48ff-bd4f-2bdbf26ff399",
        "codigo": "OE.3.4.2",
        "descripcion": "PISOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "3fc89a65-ba40-44c9-86b2-4f72ccbdf6ee",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "433af7da-de45-4e3f-b6db-5f715be7548c",
        "codigo": "OE.3.4.2.20",
        "descripcion": "Piso Porcelanato de 60x60 antideslizante de alto transito",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "862e6924-471f-48ff-bd4f-2bdbf26ff399",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.2 PISOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "e0dd2389-0efb-438f-b147-e5fcb038519c",
        "codigo": "OE.3.4.2.21",
        "descripcion": "Piso Ceramico de 45x45 antideslizante de alto transito",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "862e6924-471f-48ff-bd4f-2bdbf26ff399",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.2 PISOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "2448aa15-f95b-4804-b843-90425da026ff",
        "codigo": "OE.3.4.2.23",
        "descripcion": "OTROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "862e6924-471f-48ff-bd4f-2bdbf26ff399",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.2 PISOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "d5567499-1b67-48a8-9737-ef7f3e78dc61",
        "codigo": "OE.3.4.2.23.2",
        "descripcion": "EXTERIORES- AGREGADO ESTABILIZADO",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "2448aa15-f95b-4804-b843-90425da026ff",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.2 PISOS",
            "OE.3.4.2.23 OTROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "474550b7-5b11-4dbf-8c58-4711498c95b3",
        "codigo": "OE.3.4.2.25",
        "descripcion": "Piso de Cemento Pulido",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "862e6924-471f-48ff-bd4f-2bdbf26ff399",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.2 PISOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "3a134dc4-6da7-450e-b126-9443bd5ef6b1",
        "codigo": "OE.3.4.2.26",
        "descripcion": "Piso Vinilico Conductivo",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "862e6924-471f-48ff-bd4f-2bdbf26ff399",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.2 PISOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "ff13ed19-4fdc-44cc-a49a-73c7350122f6",
        "codigo": "OE.3.4.2.27",
        "descripcion": "Piso de terrazo",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "862e6924-471f-48ff-bd4f-2bdbf26ff399",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.2 PISOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "c9d602ae-1c02-41fd-91a9-7264d6975e84",
        "codigo": "OE.3.4.2.28",
        "descripcion": "Base de concreto para muebles fijos H=10cm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "862e6924-471f-48ff-bd4f-2bdbf26ff399",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.2 PISOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "4eb20dd3-7aae-49b4-975c-a9e0065c36c2",
        "codigo": "OE.3.4.3",
        "descripcion": "PISOS DE CONCRETO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "3fc89a65-ba40-44c9-86b2-4f72ccbdf6ee",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "228b0f99-e412-4c37-be7b-9880e93248f7",
        "codigo": "OE.3.4.3.1",
        "descripcion": "CIRCULACION INTERIOR",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "4eb20dd3-7aae-49b4-975c-a9e0065c36c2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "34e407bf-4f74-4ca3-ae1d-1cdae51f2e71",
        "codigo": "OE.3.4.3.1.1",
        "descripcion": "Afirmado y Compactado de 4\" con Material Propio",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "228b0f99-e412-4c37-be7b-9880e93248f7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.1 CIRCULACION INTERIOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "9dfb4e3c-1c76-4230-b366-4499ac7c0d70",
        "codigo": "OE.3.4.3.1.2",
        "descripcion": "Encofrado y desencofrado",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "228b0f99-e412-4c37-be7b-9880e93248f7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.1 CIRCULACION INTERIOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "149e320e-ba98-4cd0-89fb-f7445a3bc18e",
        "codigo": "OE.3.4.3.1.3",
        "descripcion": "Concreto f'c=175 kg/cm², e=0.15m",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "228b0f99-e412-4c37-be7b-9880e93248f7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.1 CIRCULACION INTERIOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "d92bd0c7-0802-4f62-ad24-2bb6f771d0b0",
        "codigo": "OE.3.4.3.1.4",
        "descripcion": "Junta Flexible en concreto",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "228b0f99-e412-4c37-be7b-9880e93248f7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.1 CIRCULACION INTERIOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "0903127a-2a80-4a28-b0cb-6f062c505e19",
        "codigo": "OE.3.4.3.2",
        "descripcion": "VEREDAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "4eb20dd3-7aae-49b4-975c-a9e0065c36c2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "7e5157dd-66d9-48c8-9e86-83acacffb8f2",
        "codigo": "OE.3.4.3.2.1",
        "descripcion": "Afirmado y Compactado de 4\" con Material Propio",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "0903127a-2a80-4a28-b0cb-6f062c505e19",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.2 VEREDAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "f333a961-ce53-48ec-9e80-a9bad1ecb341",
        "codigo": "OE.3.4.3.2.2",
        "descripcion": "Encofrado y desencofrado",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "0903127a-2a80-4a28-b0cb-6f062c505e19",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.2 VEREDAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "57e97a70-a511-4845-aac4-9c629699b7ea",
        "codigo": "OE.3.4.3.2.3",
        "descripcion": "Concreto f'c=175 kg/cm², e=0.15m",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "0903127a-2a80-4a28-b0cb-6f062c505e19",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.2 VEREDAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "8dfdf757-4fbe-43a2-aade-a8182863f1ce",
        "codigo": "OE.3.4.3.2.4",
        "descripcion": "Bruñas en veredas",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "0903127a-2a80-4a28-b0cb-6f062c505e19",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.2 VEREDAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "08c1d9af-2520-47e3-aba4-6940a3205890",
        "codigo": "OE.3.4.3.2.5",
        "descripcion": "Junta Flexible en concreto",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "0903127a-2a80-4a28-b0cb-6f062c505e19",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.2 VEREDAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "231b8f66-cf43-4787-a349-e95d4f2f12aa",
        "codigo": "OE.3.4.3.3",
        "descripcion": "CIRCULACION EN PATIO DE MANIOBRAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "4eb20dd3-7aae-49b4-975c-a9e0065c36c2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "9b5a827c-6ed9-4e5d-960b-089b17e8c872",
        "codigo": "OE.3.4.3.3.1",
        "descripcion": "Empedrado e= 10 cm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "231b8f66-cf43-4787-a349-e95d4f2f12aa",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.3 CIRCULACION EN PATIO DE MANIOBRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "9a484930-9590-484a-b491-4e4824dce30a",
        "codigo": "OE.3.4.3.3.2",
        "descripcion": "Falso Piso - Concreto f'c=175 kg/cm², e=0.07 m",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "231b8f66-cf43-4787-a349-e95d4f2f12aa",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.3 CIRCULACION EN PATIO DE MANIOBRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "c4c40542-1fcd-4abe-ad84-87a40e67b673",
        "codigo": "OE.3.5",
        "descripcion": "ZOCALOS Y CONTRAZOCALOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "e3045373-7785-449b-b029-118194ac1ee5",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.3 ARQUITECTURA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "bb0cb67f-bb46-4fe0-9ee9-57bded2ae37a",
        "codigo": "OE.3.5.1",
        "descripcion": "ZOCALOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "c4c40542-1fcd-4abe-ad84-87a40e67b673",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "a9d91fc9-35df-4460-a35d-1de6b5082fbb",
        "codigo": "OE.3.5.1.11",
        "descripcion": "Zocalo de cerámico de 45 X 45 cm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "bb0cb67f-bb46-4fe0-9ee9-57bded2ae37a",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.1 ZOCALOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "79c4cf4a-1e72-47f5-9a06-60679fba6734",
        "codigo": "OE.3.5.1.12",
        "descripcion": "Zocalo de porcelanato de 60X 60 cm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "bb0cb67f-bb46-4fe0-9ee9-57bded2ae37a",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.1 ZOCALOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "e165ec2b-3a9a-4a78-b25a-3239208f1e3f",
        "codigo": "OE.3.5.1.13",
        "descripcion": "Revestimiento Vinilico Conductivo",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "bb0cb67f-bb46-4fe0-9ee9-57bded2ae37a",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.1 ZOCALOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "a3a9d88d-ffdd-4f9f-b80a-36ce811537c8",
        "codigo": "OE.3.5.2",
        "descripcion": "CONTRAZOCALOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "c4c40542-1fcd-4abe-ad84-87a40e67b673",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "04936634-1b83-4bc8-9d33-815b96cb7e90",
        "codigo": "OE.3.5.2.3",
        "descripcion": "CONTRAZOCALOS DE CERAMICO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "a3a9d88d-ffdd-4f9f-b80a-36ce811537c8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.2 CONTRAZOCALOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "bcdf1cde-f6f6-4e88-b215-3c9adfc2f2a4",
        "codigo": "OE.3.5.2.3.2",
        "descripcion": "Contrazocalo de cerámico de 45x10 cm (H=10cm)",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "04936634-1b83-4bc8-9d33-815b96cb7e90",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.2 CONTRAZOCALOS",
            "OE.3.5.2.3 CONTRAZOCALOS DE CERAMICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "3ad2cc59-c0c7-42fb-924d-4166591ed9a1",
        "codigo": "OE.3.5.2.3.3",
        "descripcion": "Contrazocalo de ceramico (H=10cm)",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "04936634-1b83-4bc8-9d33-815b96cb7e90",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.2 CONTRAZOCALOS",
            "OE.3.5.2.3 CONTRAZOCALOS DE CERAMICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "2cda489c-0809-4f3a-9893-e6d154e7633b",
        "codigo": "OE.3.5.2.3.4",
        "descripcion": "Contrazocalo de Terrazo (H=10cm)",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "04936634-1b83-4bc8-9d33-815b96cb7e90",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.2 CONTRAZOCALOS",
            "OE.3.5.2.3 CONTRAZOCALOS DE CERAMICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "fb78d8d8-f6c1-4b3a-8b32-cb6f93c49ced",
        "codigo": "OE.3.5.2.3.5",
        "descripcion": "Contrazocalo de Cemento pulido (H=10cm)",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "04936634-1b83-4bc8-9d33-815b96cb7e90",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.2 CONTRAZOCALOS",
            "OE.3.5.2.3 CONTRAZOCALOS DE CERAMICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "26190fe1-5899-46ca-bfe4-1199096520f6",
        "codigo": "OE.3.5.2.3.6",
        "descripcion": "Contrazocalo de porcelanato H=10cm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "04936634-1b83-4bc8-9d33-815b96cb7e90",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.2 CONTRAZOCALOS",
            "OE.3.5.2.3 CONTRAZOCALOS DE CERAMICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "f3734229-6bf7-47e4-a703-037d25ebf5c1",
        "codigo": "OE.3.5.2.11",
        "descripcion": "OTROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "a3a9d88d-ffdd-4f9f-b80a-36ce811537c8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.2 CONTRAZOCALOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "0677ec23-ac88-4ab5-87a1-88460a7d30da",
        "codigo": "OE.3.5.2.11.1",
        "descripcion": "CONTRAZOCALO SANITARIO COVER FORMER H=0.10 M.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "f3734229-6bf7-47e4-a703-037d25ebf5c1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.2 CONTRAZOCALOS",
            "OE.3.5.2.11 OTROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "9a5996fb-d116-4d8b-845c-c55f949c75ee",
        "codigo": "OE.3.6",
        "descripcion": "COBERTURAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "e3045373-7785-449b-b029-118194ac1ee5",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.3 ARQUITECTURA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "c077a88c-d5e8-4cbd-bc40-2aa507a489b5",
        "codigo": "OE.3.6.7",
        "descripcion": "RECUBRIMIENTOS SOBRE ESTRUCTURAS DE MADERA, METAL, ETC.",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "9a5996fb-d116-4d8b-845c-c55f949c75ee",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "f33355e0-dac6-4c6f-a78a-031784809553",
        "codigo": "OE.3.6.7.1",
        "descripcion": "COBERTURA. PANEL COMPUESTA POR 5 CAPAS, PREPINTADO ESTANDAR E=2.25 mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "c077a88c-d5e8-4cbd-bc40-2aa507a489b5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.7 RECUBRIMIENTOS SOBRE ESTRUCTURAS DE MADERA, METAL, ETC."
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "7e63f01a-8b7c-4047-bcd0-4c4b540b2342",
        "codigo": "OE.3.6.7.2",
        "descripcion": "COBERTURA. TEJA POLICARBONATO E=1.0 mm.",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "c077a88c-d5e8-4cbd-bc40-2aa507a489b5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.7 RECUBRIMIENTOS SOBRE ESTRUCTURAS DE MADERA, METAL, ETC."
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "57a1e328-0e0a-4485-a8cb-18c6b88fc884",
        "codigo": "OE.3.6.7.3",
        "descripcion": "CUMBRERA LISA, E= 0.5mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "c077a88c-d5e8-4cbd-bc40-2aa507a489b5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.7 RECUBRIMIENTOS SOBRE ESTRUCTURAS DE MADERA, METAL, ETC."
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "6235f747-282b-452c-9420-e3cdc08388b0",
        "codigo": "OE.3.6.7.4",
        "descripcion": "Cobertura con panel termoacústico relleno de poliuretano",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "c077a88c-d5e8-4cbd-bc40-2aa507a489b5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.7 RECUBRIMIENTOS SOBRE ESTRUCTURAS DE MADERA, METAL, ETC."
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "3f62cc46-84fa-41be-b76d-eb9ce087090b",
        "codigo": "OE.3.6.7.5",
        "descripcion": "Cumbrera para panel termoacústico",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "c077a88c-d5e8-4cbd-bc40-2aa507a489b5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.7 RECUBRIMIENTOS SOBRE ESTRUCTURAS DE MADERA, METAL, ETC."
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "800b6b2f-f87e-45b2-8e35-8751008be09d",
        "codigo": "OE.3.6.7.6",
        "descripcion": "Cobertura con policarbonato e=10 mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "c077a88c-d5e8-4cbd-bc40-2aa507a489b5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.7 RECUBRIMIENTOS SOBRE ESTRUCTURAS DE MADERA, METAL, ETC."
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "b2f4f965-7704-49fa-ac7e-6aa7132f3009",
        "codigo": "OE.3.6.7.7",
        "descripcion": "Cobertura con termopaneles acusticos",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "c077a88c-d5e8-4cbd-bc40-2aa507a489b5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.7 RECUBRIMIENTOS SOBRE ESTRUCTURAS DE MADERA, METAL, ETC."
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "7c5f3d8e-3230-4ace-8b70-ea4c699615d5",
        "codigo": "OE.3.6.9",
        "descripcion": "OTROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "9a5996fb-d116-4d8b-845c-c55f949c75ee",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "d64861b3-8c21-4e8a-95a3-5bb99aab65a7",
        "codigo": "OE.3.6.9.1",
        "descripcion": "CERRAMIENTO CON POLICARBONATO SOLIDO E=6 mm.",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "7c5f3d8e-3230-4ace-8b70-ea4c699615d5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.9 OTROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "36a4e232-ec11-4f2d-a479-6d79a18265ab",
        "codigo": "OE.3.6.9.2",
        "descripcion": "Cerramiento con policarbonato e=10 mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "7c5f3d8e-3230-4ace-8b70-ea4c699615d5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.9 OTROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "51d7e528-855b-482f-9603-3015ff6f34db",
        "codigo": "OE.3.7",
        "descripcion": "CARPINTERIA DE MADERA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "e3045373-7785-449b-b029-118194ac1ee5",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.3 ARQUITECTURA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1e3d896d-bc04-49d6-b479-dcb66db764bb",
        "codigo": "OE.3.7.1",
        "descripcion": "PUERTAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "51d7e528-855b-482f-9603-3015ff6f34db",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "b86dd52d-9476-4155-ad09-d42e22a566c3",
        "codigo": "OE.3.7.1.1",
        "descripcion": "PUERTA DE MDF CONTRAPLACADA DE 6 mm. DE 01 HOJA RECUBIERTA CON",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "e499ccaf-8282-487f-9922-3838d9233a14",
        "codigo": "OE.3.7.1.2",
        "descripcion": "FORMICA BLANCA, MARCOS CON BARNIZ INCOLORO; PLANCHAS DE METAL Y REJILLA DE VENTILACION EN LA PARTE INFERIOR. TIPO P-7 (1.00 x 2.20) CORREDIZAPUERTA DE MDF CONTRAPLACADA DE 6 mm. DE 01 HOJA RECUBIERTA CON FORMICA BLANCA, MARCOS CON BARNIZ INCOLORO; PLANCHAS DE METAL Y REJILLA DE VENTILACION EN LA PARTE INFERIORA TIPO P-8 (1.05 x 2.20) DOBLE CORREDIZA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "f4382bb2-9e45-4df4-8d77-73c931d226ad",
        "codigo": "OE.3.7.1.3",
        "descripcion": "PUERTA DE MDF CONTRAPLACADA DE 6 mm. DE 01 HOJA RECUBIERTA CONFORMICA BLANCA, MARCOS CON BARNIZ INCOLORO. TIPO P-11 (1.05 x 2.20)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "0853fa5d-7d6c-488d-a0d2-bf2226a46a77",
        "codigo": "OE.3.7.1.4",
        "descripcion": "PUERTA DE MDF CONTRAPLACADA DE 6 mm. DE 01 HOJA RECUBIERTA CON FORMICA BLANCA, MARCOS CON BARNIZ INCOLORO. TIPO P-12 (0.85 x 2.20)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "3fc0fb0d-6431-4db7-9934-a06b7bba2dc7",
        "codigo": "OE.3.7.1.5",
        "descripcion": "PUERTA DE MADERA CONTRAPLACADA CON PROTECCION DE LAMINAS DE PLOMO DE 01 HOJA RECUBIERTA CON FORMICA BLANCA. TIPO P-14 (1.05 x 2.20)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "8e2a16f1-c49a-4d5b-a422-5848319077a9",
        "codigo": "OE.3.7.1.6",
        "descripcion": "PUERTA DE MADERA CONTRAPLACADA CON PROTECCION DE LAMINAS DE PLOMO DE 01 HOJA RECUBIERTA CON FORMICA BLANCA. TIPO P-15 (0.85 x 2.20)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "35392916-36e1-4106-a9c0-0a21444ac902",
        "codigo": "OE.3.7.1.7",
        "descripcion": "Puerta de 2 hojas vaiven contraplacada con plancha de acero (P-02) 1.40X2.70 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "9d1dba5e-405e-4af2-b893-34b1df78744b",
        "codigo": "OE.3.7.1.8",
        "descripcion": "Puerta de 2 hojas contraplacada (P-03) 1.80X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "6691f7c7-661d-4814-a5e4-d1685bcd0ea5",
        "codigo": "OE.3.7.1.9",
        "descripcion": "Puerta de 1 hoja contraplacada (P-05) 1.20X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "dc676ed3-9837-4158-9dca-2c61ee1aeca1",
        "codigo": "OE.3.7.1.10",
        "descripcion": "Puerta de 1 hoja contraplacada (P-06) 1.20X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "8ac96db1-416d-48aa-831e-001d79f5ef26",
        "codigo": "OE.3.7.1.11",
        "descripcion": "Puerta de 2 hojas vaiven contraplacada con plancha de acero (P-07) 1.80X2.70 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "ecea7f27-74f6-40a4-a0fa-a3edd7e75780",
        "codigo": "OE.3.7.1.12",
        "descripcion": "Puerta de 1 hoja contraplacada (P-08) 0.90X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "6137f7a1-4313-4512-a689-f7626e3af3ca",
        "codigo": "OE.3.7.1.13",
        "descripcion": "Puerta de 1 hoja contraplacada (P-09) 0.90X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "47ec5e67-4a84-4c41-b455-b3a8c1a7603b",
        "codigo": "OE.3.7.1.14",
        "descripcion": "Puerta de 1 hoja contraplacada con plancha de acero (P-10) 1.20X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "66691524-2ef8-45f1-8983-4ad65f498419",
        "codigo": "OE.3.7.1.15",
        "descripcion": "Puerta de 1 hoja contraplacada (P-11) 0.80X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "33649bfd-bebb-469f-9762-cdecc664482a",
        "codigo": "OE.3.7.1.16",
        "descripcion": "Puerta de 1 hoja contraplacada (P-12) 1.00X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "23759c10-562b-4ee1-96e2-2fa5f7f4bcda",
        "codigo": "OE.3.7.1.17",
        "descripcion": "Puerta de 1 hoja contraplacada (P-13) 1.00X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "08497314-fec9-4a1e-8ecc-82944f68ac74",
        "codigo": "OE.3.7.1.18",
        "descripcion": "Puerta de 1 hoja contraplacada (P-14) 0.90X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "ba0f0ae9-444f-46d8-8013-4cb4e78ed980",
        "codigo": "OE.3.7.1.19",
        "descripcion": "Puerta de 1 hoja contraplacada (P-15) 1.00X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "f45879bd-5798-4988-8072-f745e4275120",
        "codigo": "OE.3.7.1.20",
        "descripcion": "Puerta de melamine (PM-01) 0.70X1.60 m, incluye accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "55f8b9f6-71ce-4ee7-b950-818695413482",
        "codigo": "OE.3.7.1.21",
        "descripcion": "Puerta de 1 hoja contraplacada con alma de plomo (P-01) 1.20X2.15m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "0bdf15cc-28d4-4236-a6cf-42207ff744b0",
        "codigo": "OE.3.7.1.22",
        "descripcion": "Puerta de 1 hoja contraplacada con alma de plomo (P-04) 1.00X2.15m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "3e3bbe8a-2c3e-4550-b416-23fd1b1eaff3",
        "codigo": "OE.3.7.1.23",
        "descripcion": "Acondicionamiento de puertas y cerraduras e instalacion",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "e91b2b27-8245-4f51-bfb4-f5b27b74d89d",
        "codigo": "OE.3.7.2",
        "descripcion": "MUEBLES DE LABORATORIO Y SIMILARES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "51d7e528-855b-482f-9603-3015ff6f34db",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "c0ee5681-07a8-464a-a6ec-769aedb8a257",
        "codigo": "OE.3.7.2.1",
        "descripcion": "MUEBLE TIPO 01 ADMISION - CITAS - INFORMES",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "e51e4a0e-cf27-43fb-8795-e7987a9479cc",
        "codigo": "OE.3.7.2.2",
        "descripcion": "MUEBLE TIPO 02 ENTREGA Y RECEPCION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "8d752f2e-7ecd-495c-b68b-9573be73ab44",
        "codigo": "OE.3.7.2.3",
        "descripcion": "MUEBLE TIPO 03 ESTACION DE ENFERMERAS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "30966439-2b4f-4251-bc2f-d7aabd786bac",
        "codigo": "OE.3.7.2.4",
        "descripcion": "MUEBLE TIPO 04 TOMA DE MUESTRAS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "b301549d-ecb7-4dd8-89c8-6fb124249d12",
        "codigo": "OE.3.7.2.5",
        "descripcion": "MUEBLE TIPO 05 TRABAJOS LIMPIO - SUCIO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "02e4e1c4-9de9-4e14-b8f2-37a2e35a64cd",
        "codigo": "OE.3.7.2.6",
        "descripcion": "MUEBLE TIPO 06 ESTAR DE PERSONAL",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "266cbbe0-9f47-4c25-b2df-27c77e24af48",
        "codigo": "OE.3.7.2.7",
        "descripcion": "MUEBLE TIPO 07 ESTERILIZACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "9ca11ea8-4576-44fb-bb13-c07b8501c25f",
        "codigo": "OE.3.7.2.8",
        "descripcion": "MUEBLE TIPO 08 LIMPIEZA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "f0dee5ba-ec8a-4683-a066-d2011883dc43",
        "codigo": "OE.3.7.2.9",
        "descripcion": "MUEBLE TIPO 09 LABORATORIO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "761bb556-a13d-49ea-b408-fbe4413e76a6",
        "codigo": "OE.3.7.2.10",
        "descripcion": "MUEBLE TIPO 10 CONSULTORIOS Y TOPICO ATENCION RECIEN NACIDO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "83fa0006-d3eb-4541-ac9a-21049f4df426",
        "codigo": "OE.3.7.2.11",
        "descripcion": "MUEBLE TIPO 11 LAVADO DE PERSONAL ASISTENCIAL",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "fa979e43-ca8a-418b-9edc-c26550a53a40",
        "codigo": "OE.3.7.2.12",
        "descripcion": "Muebles Bajos de Melamina de 18mm inc. Accesorios",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "ca9f60bd-6ec7-434b-9699-3b903ec78b56",
        "codigo": "OE.3.7.2.13",
        "descripcion": "Muebles altos de  Melamina de 18mm inc. Accesorios",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "540b9796-2f78-419e-b9cf-c9e640db6ef1",
        "codigo": "OE.3.7.2.14",
        "descripcion": "Repisa de Melamina de 18mm para ventanas de atencion",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "382ec15f-6c70-4003-894b-1b188ee54efd",
        "codigo": "OE.3.7.2.15",
        "descripcion": "Estante de Melamina de 18mm ( 1.50 X 1.65)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1768fb1c-4233-4532-a626-431332a38072",
        "codigo": "OE.3.7.2.16",
        "descripcion": "Estante de Melamina de 18mm ( 0.60 X 1.50)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "917213e7-6416-4bdd-bea6-ba242ec55c43",
        "codigo": "OE.3.8",
        "descripcion": "CARPINTERÍA METÁLICA Y HERRERÍA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "e3045373-7785-449b-b029-118194ac1ee5",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.3 ARQUITECTURA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "372243c7-66e4-462a-936c-e0f544f6fdfa",
        "codigo": "OE.3.8.1",
        "descripcion": "VENTANAS DE FIERRO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "917213e7-6416-4bdd-bea6-ba242ec55c43",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1d088a17-0f64-45dd-977e-840fff7e668d",
        "codigo": "OE.3.8.1.1",
        "descripcion": "VENTANA ALTA FIJA PERFILES DE Fe 2\" x 1 1/2 y/o MALLA DE ACERO GALVANIZADO. V-2 (2.45 X 1.23)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "372243c7-66e4-462a-936c-e0f544f6fdfa",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "ec2b7525-42ee-47c5-97d8-51d6159b033d",
        "codigo": "OE.3.8.1.2",
        "descripcion": "VENTANA ALTA FIJA PERFILES DE Fe 2\" x 1 1/2 y/o MALLA DE ACERO GALVANIZADO. V-3 (2.15 X 1.23)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "372243c7-66e4-462a-936c-e0f544f6fdfa",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "f7b28ee5-e874-4a2a-95fa-74d77edd338d",
        "codigo": "OE.3.8.1.3",
        "descripcion": "VENTANA ALTA FIJA PERFILES DE Fe 2\" x 1 1/2 y/o MALLA DE ACERO GALVANIZADO. V-4 (5.40 X 1.23)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "372243c7-66e4-462a-936c-e0f544f6fdfa",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "f4230360-0501-4c82-8438-0b403e348e0a",
        "codigo": "OE.3.8.1.4",
        "descripcion": "VENTANA METALICA DE Fe CON MALLA DE ACERO GALVANIZADO. VM-1 (2.84 X 1.00)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "372243c7-66e4-462a-936c-e0f544f6fdfa",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "32578bb0-c184-420a-8e9c-3d3ad679e291",
        "codigo": "OE.3.8.1.5",
        "descripcion": "VENTANA METALICA DE Fe CON MALLA DE ACERO GALVANIZADO. VM-2 (3.09 X 1.00)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "372243c7-66e4-462a-936c-e0f544f6fdfa",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "07f841d4-e514-4a75-8c28-d14e8f9d416b",
        "codigo": "OE.3.8.1.6",
        "descripcion": "VENTANA METALICA DE Fe CON MALLA DE ACERO GALVANIZADO. VM-3 (2.50 X 1.00)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "372243c7-66e4-462a-936c-e0f544f6fdfa",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "8c06809d-7488-46ef-aa15-69bed5ff4413",
        "codigo": "OE.3.8.1.7",
        "descripcion": "VENTANA METALICA DE Fe CON MALLA DE ACERO GALVANIZADO. VM-4 (2.60 X 1.00)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "372243c7-66e4-462a-936c-e0f544f6fdfa",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "d9788544-7f9b-4a9e-aa76-32036841b10f",
        "codigo": "OE.3.8.1.8",
        "descripcion": "VENTANA METALICA DE Fe CON MALLA DE ACERO GALVANIZADO. VM-5 (1.30 X 1.00)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "372243c7-66e4-462a-936c-e0f544f6fdfa",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "49d3533c-2cfb-4c0c-9da3-c509acc60a10",
        "codigo": "OE.3.8.1.9",
        "descripcion": "VENTANA METALICA DE Fe CON MALLA DE ACERO GALVANIZADO. VM-6 (4.40 X 1.50)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "372243c7-66e4-462a-936c-e0f544f6fdfa",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "ae93acb1-c88a-4923-8f1a-d1cf94b7ad5d",
        "codigo": "OE.3.8.2",
        "descripcion": "PUERTA DE FIERRO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "917213e7-6416-4bdd-bea6-ba242ec55c43",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "2bc23c5f-f671-4239-ab27-6adaee36745b",
        "codigo": "OE.3.8.2.1",
        "descripcion": "PUERTA METALICA TIPO PJ-01 (3.20 X 2.80M) DOBLE HOJA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ae93acb1-c88a-4923-8f1a-d1cf94b7ad5d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "c92ee11e-2f49-453a-83ce-9a8a5a02b9a1",
        "codigo": "OE.3.8.2.2",
        "descripcion": "PUERTA METALICA TIPO PJ-02 (1.30 X 2.80M) UNA HOJA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ae93acb1-c88a-4923-8f1a-d1cf94b7ad5d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "89f86afd-9818-41aa-96e1-5d0e585c9416",
        "codigo": "OE.3.8.2.3",
        "descripcion": "PUERTA METALICA TIPO REJA DE DOBLE HOJA CON TUBO CUADRADO DE 2\" x 2\" e= 1 mm. P-9 ( 2.40 X 2.80)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ae93acb1-c88a-4923-8f1a-d1cf94b7ad5d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "061db7a4-5733-4e12-90e8-82fe90a0ad1a",
        "codigo": "OE.3.8.2.4",
        "descripcion": "PUERTA METALICA TIPO REJA DE DOBLE HOJA CON TUBO CUADRADO DE 2\" x 2\" e= 1 mm. P-10 ( 1.40 X 2.80)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ae93acb1-c88a-4923-8f1a-d1cf94b7ad5d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "87968beb-9ce0-40f6-96b5-9acea17d4a4a",
        "codigo": "OE.3.8.2.5",
        "descripcion": "PUERTA METALICA DE Fe CON PLANCHA METALICA Y MALLA ELECTROSOLDADA PJ-01 ( 1.00 X 2.70)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ae93acb1-c88a-4923-8f1a-d1cf94b7ad5d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "a9b0a7ca-ecf9-41e7-b38a-74aebca555b3",
        "codigo": "OE.3.8.2.6",
        "descripcion": "PUERTA METALICA DE TUBO CUADRADO DE 2\" CON PLANCHA METALICA PJ-02 ( 1.45 X 2.70)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ae93acb1-c88a-4923-8f1a-d1cf94b7ad5d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "c09b84cb-019f-4d5c-b55b-21c28d810cf0",
        "codigo": "OE.3.8.2.7",
        "descripcion": "PUERTA METALICA CON PLANCHA METALICA PJ-03 ( 2.85 X 2.70)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ae93acb1-c88a-4923-8f1a-d1cf94b7ad5d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "40b0288f-c685-40c9-b925-4e52a69c7e96",
        "codigo": "OE.3.8.2.8",
        "descripcion": "PUERTA METALICA CON PLANCHA METALICA PJ-04 ( 3.06 X 2.90)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ae93acb1-c88a-4923-8f1a-d1cf94b7ad5d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "45a1102d-514d-4358-bd1e-cd7fa89ed576",
        "codigo": "OE.3.8.2.9",
        "descripcion": "PUERTA METALICA CON PLANCHA METALICA PJ-05 ( 4.90 X 3.30)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ae93acb1-c88a-4923-8f1a-d1cf94b7ad5d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "24164c7d-b01a-4053-92f8-fa82919ad0d1",
        "codigo": "OE.3.8.2.10",
        "descripcion": "PUERTA METALICA CORREDIZA CON MALLA ELECTROSOLDADA PJ-06 ( 1.25 X 2.70)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ae93acb1-c88a-4923-8f1a-d1cf94b7ad5d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "7a508a54-93dd-45ed-ae4b-7d4529fffba4",
        "codigo": "OE.3.8.2.11",
        "descripcion": "PUERTA METALICA CON MALLA ELECTROSOLDADA Y PLANCHA METALICA PJ-07 ( 1.00 X 1.80)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ae93acb1-c88a-4923-8f1a-d1cf94b7ad5d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "b3d4d238-83d1-47df-9b53-581e27b1c462",
        "codigo": "OE.3.8.2.12",
        "descripcion": "PUERTA METALICA PJ-08 ( 1.40 X 2.90)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ae93acb1-c88a-4923-8f1a-d1cf94b7ad5d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "fcea80cd-45eb-4df0-9bf5-d6f0e8fd997c",
        "codigo": "OE.3.8.2.13",
        "descripcion": "PUERTA METALICA PJ-09 ( 1.94 X 2.90)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ae93acb1-c88a-4923-8f1a-d1cf94b7ad5d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "edd7cf27-a051-4892-83d5-9711bd01269b",
        "codigo": "OE.3.8.2.14",
        "descripcion": "PUERTA METALICA PJ-10 ( 1.30 X 2.40)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ae93acb1-c88a-4923-8f1a-d1cf94b7ad5d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "2b8a681b-c156-41fe-8f28-57d40ee4cf8e",
        "codigo": "OE.3.8.2.15",
        "descripcion": "PUERTA METALICA PJ-11 ( 1.68 X 2.40)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ae93acb1-c88a-4923-8f1a-d1cf94b7ad5d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "e7329d21-def5-4f8d-aa9a-9f6f7445032c",
        "codigo": "OE.3.8.4",
        "descripcion": "VENTANA DE ALUMINIO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "917213e7-6416-4bdd-bea6-ba242ec55c43",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "fadea7df-a996-4aca-9dff-fa11f6e9b499",
        "codigo": "OE.3.8.4.1",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO TEMPLADO DE 6MM. INCOLORO V-5 (1.00 X 1.00)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e7329d21-def5-4f8d-aa9a-9f6f7445032c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "9742f332-4b0c-44b0-90af-f274c67e83fb",
        "codigo": "OE.3.8.4.2",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA PROYECTANTE CON VIDRIO LAMINADO DE 6MM. V-1 (0.50 X 0.70) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e7329d21-def5-4f8d-aa9a-9f6f7445032c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "36f645a2-1c4a-475d-bd21-7b839787ebf6",
        "codigo": "OE.3.8.4.3",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA PROYECTANTE CON VIDRIO LAMINADO DE 6MM. V-2 (0.45 X 0.70) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e7329d21-def5-4f8d-aa9a-9f6f7445032c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "3863cdab-ff22-48f6-bf39-7c58f352ef06",
        "codigo": "OE.3.8.4.4",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA PROYECTANTE CON VIDRIO LAMINADO DE 6MM. V-3 (0.70 X 0.70) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e7329d21-def5-4f8d-aa9a-9f6f7445032c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "e3757efb-a672-497d-b8fa-d98c2e3b8a79",
        "codigo": "OE.3.8.4.5",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA PROYECTANTE CON VIDRIO LAMINADO DE 6MM PAVONADO. V-3b (0.70 X 0.70) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e7329d21-def5-4f8d-aa9a-9f6f7445032c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "23eb431a-559b-44b7-a03e-888d2fbff965",
        "codigo": "OE.3.8.4.6",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM. V-4 (0.60 X 1.80) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e7329d21-def5-4f8d-aa9a-9f6f7445032c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "64325cbb-228d-479e-b391-23f41a22634f",
        "codigo": "OE.3.8.4.7",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM. V-5 (1.00 X 1.80) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e7329d21-def5-4f8d-aa9a-9f6f7445032c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "0801b903-6aa9-4bd0-8303-50185147450d",
        "codigo": "OE.3.8.4.8",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM. V-6 (1.20 X 1.80) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e7329d21-def5-4f8d-aa9a-9f6f7445032c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "06b15082-1337-440b-9e17-4bf715981cbe",
        "codigo": "OE.3.8.4.9",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM. V-8 (0.70 X 1.80) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e7329d21-def5-4f8d-aa9a-9f6f7445032c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "78e8c9e3-135d-4804-acea-35c9e1bfe857",
        "codigo": "OE.3.8.4.10",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM. V-9 (1.00 X 1.80) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e7329d21-def5-4f8d-aa9a-9f6f7445032c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "2b3e56c3-6452-42f4-8513-311913c71aa6",
        "codigo": "OE.3.8.4.11",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM.  V-10 (2.25 X 0.75) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e7329d21-def5-4f8d-aa9a-9f6f7445032c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "cc22fa48-fc9f-4f3e-a1dc-804185548e67",
        "codigo": "OE.3.8.4.12",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM.  V-11 (2.40 X 0.75) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e7329d21-def5-4f8d-aa9a-9f6f7445032c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "de8c39e0-4c4b-4682-a3f5-d1e1f8e5782a",
        "codigo": "OE.3.8.4.13",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM.  V-12 (3.10 X 0.75) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e7329d21-def5-4f8d-aa9a-9f6f7445032c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1820092a-ab28-4b67-81ca-b6addacfda51",
        "codigo": "OE.3.8.4.14",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM.  V-13 (2.00 X 0.70) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e7329d21-def5-4f8d-aa9a-9f6f7445032c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "d0727887-a6c7-4610-881c-c9a9f3febbcb",
        "codigo": "OE.3.8.4.15",
        "descripcion": "VENTANA DE ALUMINIO  CON VIDRIO LAMINADO FIJO DE 6MM.  V-14 (1.90 X 1.50) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e7329d21-def5-4f8d-aa9a-9f6f7445032c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "3afc9641-9dd9-4007-8371-b2922546f7ab",
        "codigo": "OE.3.8.4.16",
        "descripcion": "VENTANA DE ALUMINIO  CON VIDRIO LAMINADO FIJO DE 6MM.  V-15 (1.00 X 1.50) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e7329d21-def5-4f8d-aa9a-9f6f7445032c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "6fbe3e35-600b-4853-ae73-db2b5738255e",
        "codigo": "OE.3.8.5",
        "descripcion": "PUERTAS DE ALUMINIO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "917213e7-6416-4bdd-bea6-ba242ec55c43",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "e0dcf68d-e8af-4f74-bc1e-a817c7135f61",
        "codigo": "OE.3.8.5.1",
        "descripcion": "PUERTA DE MELAMINE CON MARCOS DE ALUMINIO DE 01 HOJA,COLOR CLARO.P-6 (0.65 x 2.00)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "6fbe3e35-600b-4853-ae73-db2b5738255e",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.5 PUERTAS DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "9c100fa3-ee49-41b9-a8bd-048973bf4376",
        "codigo": "OE.3.8.13",
        "descripcion": "DIVISION DE ALUMINIO PARA SERVICIOS HIGIENICOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "917213e7-6416-4bdd-bea6-ba242ec55c43",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "796ff87f-bc22-41ef-a12a-fc56164cdde3",
        "codigo": "OE.3.8.13.1",
        "descripcion": "SEPARADOR CON PERFILES DE ALUMINIO Y TABLEROS DE MELAMINA PARABAÑOS",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "9c100fa3-ee49-41b9-a8bd-048973bf4376",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.13 DIVISION DE ALUMINIO PARA SERVICIOS HIGIENICOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "be60d1a6-49ce-433d-bff5-028d3d59d513",
        "codigo": "OE.3.8.14",
        "descripcion": "BARANDA METALICA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "917213e7-6416-4bdd-bea6-ba242ec55c43",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "d5f84a54-9db7-4b6e-9a4d-a2f996fddab6",
        "codigo": "OE.3.8.14.1",
        "descripcion": "BARANDAS METALICA EN ESCALERA PRINCIPAL H=1.17 m",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "be60d1a6-49ce-433d-bff5-028d3d59d513",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.14 BARANDA METALICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD2",
        "apu": null
    },
    {
        "id": "bba34ef2-f827-4a75-a19e-6465702e91c2",
        "codigo": "OE.3.8.14.2",
        "descripcion": "Baranda metalica, H=1.00m. según diseño",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "be60d1a6-49ce-433d-bff5-028d3d59d513",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.14 BARANDA METALICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "8e15cb6f-8b2e-4bc5-ae0b-0b9858bb0e47",
        "codigo": "OE.3.8.14.3",
        "descripcion": "Colocacion de barandas (incluye pintura), H=1.00m.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "be60d1a6-49ce-433d-bff5-028d3d59d513",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.14 BARANDA METALICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "bc98edb6-e959-4e24-b7c1-c34bcea19ab1",
        "codigo": "OE.3.8.14.4",
        "descripcion": "Colocacion de barandas (incluye pintura), H=0.90m.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "be60d1a6-49ce-433d-bff5-028d3d59d513",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.14 BARANDA METALICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "a4f9e46d-849c-4d14-884b-ebb7ddd5a485",
        "codigo": "OE.3.8.15",
        "descripcion": "PASAMANOS AISLADOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "917213e7-6416-4bdd-bea6-ba242ec55c43",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "de21e4c3-1c7d-4244-9502-f5583e0aee04",
        "codigo": "OE.3.8.15.1",
        "descripcion": "AGARRADERA PARA MINUSVALIDOS EN SSHH; Ø 2\" L=0.60M.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "a4f9e46d-849c-4d14-884b-ebb7ddd5a485",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.15 PASAMANOS AISLADOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "271b8953-9d83-469b-beed-5eb430ddf344",
        "codigo": "OE.3.8.15.2",
        "descripcion": "AGARRADERA PARA MINUSVALIDOS EN SSHH; Ø 2\" L=0.90M.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "a4f9e46d-849c-4d14-884b-ebb7ddd5a485",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.15 PASAMANOS AISLADOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "8d437043-4b27-4196-adf0-bad5979e9f08",
        "codigo": "OE.3.8.15.3",
        "descripcion": "Pasamano metalico; Ø 2\"",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "a4f9e46d-849c-4d14-884b-ebb7ddd5a485",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.15 PASAMANOS AISLADOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "f800ecca-57b2-4fa9-8068-7dbeebeffeed",
        "codigo": "OE.3.8.18",
        "descripcion": "ELEMENTOS METALICOS ESPECIALES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "917213e7-6416-4bdd-bea6-ba242ec55c43",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "6f90c49e-8b0c-4bc0-8c78-2eeed6610928",
        "codigo": "OE.3.8.18.1",
        "descripcion": "TOPE DE ACERO CROMADO PARA PUERTAS.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f800ecca-57b2-4fa9-8068-7dbeebeffeed",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.18 ELEMENTOS METALICOS ESPECIALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "13437fb6-a19c-4cca-9b6f-b523ddf371ce",
        "codigo": "OE.3.8.18.2",
        "descripcion": "Protector de camillas",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "f800ecca-57b2-4fa9-8068-7dbeebeffeed",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.18 ELEMENTOS METALICOS ESPECIALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "80feb7de-bc83-422d-8e61-58cd62068a8e",
        "codigo": "OE.3.8.18.3",
        "descripcion": "Burlete adhesivo para puertas",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "f800ecca-57b2-4fa9-8068-7dbeebeffeed",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.18 ELEMENTOS METALICOS ESPECIALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "d66a572a-7bfb-4876-9e80-b4ca604634ef",
        "codigo": "OE.3.8.18.4",
        "descripcion": "Escalera de gato de fierro, según diseño",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f800ecca-57b2-4fa9-8068-7dbeebeffeed",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.18 ELEMENTOS METALICOS ESPECIALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "e7b3f047-9d91-40e1-86a1-2c3e93b64126",
        "codigo": "OE.3.8.18.5",
        "descripcion": "Tapajunta de acero galvanizado en pisos y muros",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "f800ecca-57b2-4fa9-8068-7dbeebeffeed",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.18 ELEMENTOS METALICOS ESPECIALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "c639bbfd-76ae-4813-b82e-1f9cedb71196",
        "codigo": "OE.3.9",
        "descripcion": "CERRAJERIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "e3045373-7785-449b-b029-118194ac1ee5",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.3 ARQUITECTURA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "380c5773-6c2e-4487-8799-1057714ff626",
        "codigo": "OE.3.9.1",
        "descripcion": "BISAGRAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "c639bbfd-76ae-4813-b82e-1f9cedb71196",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "dd1fdd48-8071-4a20-b185-3a56e5ff3bf1",
        "codigo": "OE.3.9.1.2",
        "descripcion": "BISAGRA ALUMINIZADA CAPUCHINA PESADA 4\"x4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "380c5773-6c2e-4487-8799-1057714ff626",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.1 BISAGRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "860631d4-0df7-451a-9e63-3f1b9e5fca54",
        "codigo": "OE.3.9.1.3",
        "descripcion": "Bisagra vaiven de acero grado 2 satinadas",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "380c5773-6c2e-4487-8799-1057714ff626",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.1 BISAGRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "ec8f96e9-0451-4093-84f0-3c7a0ce2840d",
        "codigo": "OE.3.9.2",
        "descripcion": "CERRADURAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "c639bbfd-76ae-4813-b82e-1f9cedb71196",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "ebbf397a-e631-4661-8bd7-5d7467ab3f68",
        "codigo": "OE.3.9.2.1",
        "descripcion": "CERRADURA TIPO A",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ec8f96e9-0451-4093-84f0-3c7a0ce2840d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.2 CERRADURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "5bac7dd3-57af-4b87-ab50-fb1119a85d00",
        "codigo": "OE.3.9.2.2",
        "descripcion": "CERRADURA TIPO G",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ec8f96e9-0451-4093-84f0-3c7a0ce2840d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.2 CERRADURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "50f5de8b-ec59-4459-a504-5483108e0df7",
        "codigo": "OE.3.9.2.3",
        "descripcion": "CERRADURA TIPO H",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ec8f96e9-0451-4093-84f0-3c7a0ce2840d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.2 CERRADURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "29d8e43f-c2bc-4143-96f0-148adac4c985",
        "codigo": "OE.3.9.2.4",
        "descripcion": "CERRADURA TIPO I",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ec8f96e9-0451-4093-84f0-3c7a0ce2840d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.2 CERRADURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "32f6d9c8-73e5-4394-8207-0c0137751318",
        "codigo": "OE.3.9.2.5",
        "descripcion": "CERRADURA TIPO J",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ec8f96e9-0451-4093-84f0-3c7a0ce2840d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.2 CERRADURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "8cfe4819-b7b3-40f3-ae8f-e7f97d10cc84",
        "codigo": "OE.3.9.2.6",
        "descripcion": "Cerradura embutida tipo palanca",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ec8f96e9-0451-4093-84f0-3c7a0ce2840d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.2 CERRADURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "e4f00264-2fbb-44dc-8e2e-1d7052bb1c45",
        "codigo": "OE.3.9.2.7",
        "descripcion": "Cerradura embutida tipo pomo",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ec8f96e9-0451-4093-84f0-3c7a0ce2840d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.2 CERRADURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "666f5ef7-1b5b-4434-9ab5-b689e067db4c",
        "codigo": "OE.3.9.2.8",
        "descripcion": "Cerradura de tres golpes",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ec8f96e9-0451-4093-84f0-3c7a0ce2840d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.2 CERRADURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "b1537497-91f7-4064-9135-f7a48de76e21",
        "codigo": "OE.3.9.4",
        "descripcion": "ACCESORIOS DE CIERRE",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "c639bbfd-76ae-4813-b82e-1f9cedb71196",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "62ecad01-1828-4c0b-91cc-0c8bacc3fa61",
        "codigo": "OE.3.9.4.1",
        "descripcion": "TIRADOR DE ACERO INOX. PARA PUERTA DE VIDRIO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b1537497-91f7-4064-9135-f7a48de76e21",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.4 ACCESORIOS DE CIERRE"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "dea4324a-cb76-4711-84b4-682a3b64c096",
        "codigo": "OE.3.10",
        "descripcion": "VIDRIOS, CRISTALES Y SIMILARES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "e3045373-7785-449b-b029-118194ac1ee5",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.3 ARQUITECTURA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "2b544767-1815-4336-b793-58d9f5739458",
        "codigo": "OE.3.10.1",
        "descripcion": "ESPEJOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "dea4324a-cb76-4711-84b4-682a3b64c096",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.10 VIDRIOS, CRISTALES Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "5b493f7e-eb00-4257-a1d7-eaddf3248275",
        "codigo": "OE.3.10.1.1",
        "descripcion": "ESPEJO INCOLORO e=6mm BISELADO (EMPOTRADO) (0.60 x 0.90) SOBRE LAVATORIO EN TODOS LOS SSHH",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "2b544767-1815-4336-b793-58d9f5739458",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.10 VIDRIOS, CRISTALES Y SIMILARES",
            "OE.3.10.1 ESPEJOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "4689f9f6-0c49-4d60-8927-83defc5e83b9",
        "codigo": "OE.3.7.1",
        "descripcion": "PUERTAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "51d7e528-855b-482f-9603-3015ff6f34db",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "746b116f-fb37-47c4-820e-0f1bc19d751c",
        "codigo": "OE.3.10.4.1",
        "descripcion": "(P-13) PUERTA AUTOPORTANTE DE CRISTAL TEMPLADO 10mm, PUERTA BATIENTE CON CINTA DE SEGURIDAD DE 10 cm DE ANCHO A 1.00 m DE ALTURA (1.95 X 2.20)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.10 VIDRIOS, CRISTALES Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "codigo": "OE.3.7.2",
        "descripcion": "VENTANAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "51d7e528-855b-482f-9603-3015ff6f34db",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "27c0b68d-3ab5-44da-ae5e-93de9c8be804",
        "codigo": "OE.3.7.2.2",
        "descripcion": "VIDRIO EMPLOMADO (0.40 x 0.40)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "074f7627-29d8-48d9-87c3-31a5065fd6dc",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "55ab0b33-62c6-44e2-88bb-3b0e42be3a7b",
        "codigo": "OE.3.10.2",
        "descripcion": "VIDRIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "dea4324a-cb76-4711-84b4-682a3b64c096",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.10 VIDRIOS, CRISTALES Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "46495d78-bc23-4a38-80a5-a5e6e1eecc8b",
        "codigo": "OE.3.10.2.1",
        "descripcion": "Vidrio laminado fijo de 6mm en mirillas y sobreluz de puertas",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "55ab0b33-62c6-44e2-88bb-3b0e42be3a7b",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.10 VIDRIOS, CRISTALES Y SIMILARES",
            "OE.3.10.2 VIDRIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "a1dec3df-ec7e-4e66-b244-cf7b912f74a8",
        "codigo": "OE.3.11",
        "descripcion": "PINTURA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "e3045373-7785-449b-b029-118194ac1ee5",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.3 ARQUITECTURA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "9d81e9fc-e317-4ccd-b87d-a5589b9592ce",
        "codigo": "OE.3.11.1",
        "descripcion": "PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "a1dec3df-ec7e-4e66-b244-cf7b912f74a8",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "911edfee-c88f-4b0c-920c-0d1a849f4dbb",
        "codigo": "OE.3.11.1.1",
        "descripcion": "PINTURA CIELORASO C/LATEX SATINADO (2MANOS), C/IMPRIMANTE",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "9d81e9fc-e317-4ccd-b87d-a5589b9592ce",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "5dd2f7dd-9b18-4940-9f5a-e50b1c5bbe7a",
        "codigo": "OE.3.11.1.2",
        "descripcion": "PINTURA MUROS INTERIORES C/ LATEX (2 MANOS). C/ IMPRIMANTE",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "9d81e9fc-e317-4ccd-b87d-a5589b9592ce",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "52b7fd6d-7f69-4c2d-a43d-452791cd0d2f",
        "codigo": "OE.3.11.1.3",
        "descripcion": "PINTURA MUROS EXTERIORES C/ LATEX (2 MANOS). C/ IMPRIMANTE",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "9d81e9fc-e317-4ccd-b87d-a5589b9592ce",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "2d55bad3-e8b2-4784-9d15-c8d8cabcd5cb",
        "codigo": "OE.3.11.1.4",
        "descripcion": "Pintura muros interiores c/ latex antibacterial (2 MANOS). C/ IMPRIMANTE",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "9d81e9fc-e317-4ccd-b87d-a5589b9592ce",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "464c32fc-1def-4123-8d34-46be271760a0",
        "codigo": "OE.3.11.1.5",
        "descripcion": "Pintura muros exteriores c/ latex satinado (2 manos). c/ imprimante",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "9d81e9fc-e317-4ccd-b87d-a5589b9592ce",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "2d69589f-732e-4a37-a1da-103a46e0e8d8",
        "codigo": "OE.3.11.1.6",
        "descripcion": "Empastado y lijado de muros interiores",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "9d81e9fc-e317-4ccd-b87d-a5589b9592ce",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "a2c7a2e9-6c23-4dd4-bb8f-ff40b244e2c1",
        "codigo": "OE.3.11.1.7",
        "descripcion": "Empastado y lijado de muros exteriores",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "9d81e9fc-e317-4ccd-b87d-a5589b9592ce",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "4152121d-8b2e-4080-a9fd-96f6483ac20a",
        "codigo": "OE.3.11.1.8",
        "descripcion": "Pintura en marcos de madera, 02 manos",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "9d81e9fc-e317-4ccd-b87d-a5589b9592ce",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "64aae056-ff9b-41f1-a4f5-4d4c38528368",
        "codigo": "OE.3.11.1.9",
        "descripcion": "Pintura en puertas de madera, 02 manos",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "9d81e9fc-e317-4ccd-b87d-a5589b9592ce",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "3d9b0acb-af9d-49d7-8301-b178015635ce",
        "codigo": "OE.3.11.1.10",
        "descripcion": "Pintura en sardineles 02 manos",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "9d81e9fc-e317-4ccd-b87d-a5589b9592ce",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "eda6b1b1-f6b6-44f7-8a07-f8829d5f4307",
        "codigo": "OE.3.11.1.11",
        "descripcion": "Diseño y pintado de murales",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "9d81e9fc-e317-4ccd-b87d-a5589b9592ce",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "d03c2927-e403-454e-b208-763c1a9ef784",
        "codigo": "OE.3.12",
        "descripcion": "VARIOS, LIMPIEZA, JARDINERIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "e3045373-7785-449b-b029-118194ac1ee5",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.3 ARQUITECTURA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "afd62974-7969-45f9-b404-a3a4ae79d18f",
        "codigo": "OE.3.12.1",
        "descripcion": "LIMPIEZA PERMANENTE DE OBRA",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "d03c2927-e403-454e-b208-763c1a9ef784",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.12 VARIOS, LIMPIEZA, JARDINERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "796c142e-25e0-476f-9d64-879c2d2c7e70",
        "codigo": "OE.3.12.2",
        "descripcion": "LIMPIEZA FINAL DE OBRA",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "d03c2927-e403-454e-b208-763c1a9ef784",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.12 VARIOS, LIMPIEZA, JARDINERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "4a472821-d3ce-43e7-821a-8835d8bc938c",
        "codigo": "OE.3.12.5",
        "descripcion": "SEMBRIO DE GRASS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "d03c2927-e403-454e-b208-763c1a9ef784",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.12 VARIOS, LIMPIEZA, JARDINERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "655787d9-4391-43b0-aac8-cb34cb11092e",
        "codigo": "OE.3.12.5.1",
        "descripcion": "SEMBRIO DE GRASS",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "4a472821-d3ce-43e7-821a-8835d8bc938c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.12 VARIOS, LIMPIEZA, JARDINERIA",
            "OE.3.12.5 SEMBRIO DE GRASS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "c85e91c5-71ff-4195-925c-b19a22fcca96",
        "codigo": "OE.3.12.5.2",
        "descripcion": "PLANTACION DE ARBUSTOS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4a472821-d3ce-43e7-821a-8835d8bc938c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.12 VARIOS, LIMPIEZA, JARDINERIA",
            "OE.3.12.5 SEMBRIO DE GRASS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "5b82c8f3-d544-47cb-a601-8aee3465e4db",
        "codigo": "OE.3.13",
        "descripcion": "OTROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "e3045373-7785-449b-b029-118194ac1ee5",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.3 ARQUITECTURA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "96b23d10-5125-4c1c-a371-334a532354eb",
        "codigo": "OE.3.13.1",
        "descripcion": "MODULO DE CONTINGENCIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "5b82c8f3-d544-47cb-a601-8aee3465e4db",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "c0bdc0f8-03bc-47b8-8651-4e1862419974",
        "codigo": "OE.3.13.1.1",
        "descripcion": "MODULO TIPO A, B, C",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "96b23d10-5125-4c1c-a371-334a532354eb",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.1 MODULO DE CONTINGENCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "b08183d8-aef9-4913-9584-30f95603eae7",
        "codigo": "OE.3.13.2",
        "descripcion": "LETREROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "5b82c8f3-d544-47cb-a601-8aee3465e4db",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "a9523230-3d77-4308-8fef-70b4e9edf2f3",
        "codigo": "OE.3.13.2.1",
        "descripcion": "LOGOTIPO DE \"CENTRO DE SALUD DE BELENPAMPA - CONTINGENCIA 0.40X0.40M. 37 LETRAS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b08183d8-aef9-4913-9584-30f95603eae7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.2 LETREROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "2ce32f96-f5f8-46fa-aa4f-e8d3135cd605",
        "codigo": "OE.3.13.3",
        "descripcion": "SEÑALETICA DE ORIENTACION",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "5b82c8f3-d544-47cb-a601-8aee3465e4db",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "0fd4ac2f-b6b0-48c5-b162-6f94d43acaef",
        "codigo": "OE.3.13.3.1",
        "descripcion": "MTB SEÑALES MODULO TIPO BANDERA 0.30 X 0.40M",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "2ce32f96-f5f8-46fa-aa4f-e8d3135cd605",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "dd90d28c-cee1-4af6-ac14-9ec1ba455a43",
        "codigo": "OE.3.13.3.2",
        "descripcion": "MTP SEÑALES MODULO TIPO PARED 0.30 X 0.40M",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "2ce32f96-f5f8-46fa-aa4f-e8d3135cd605",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "53dec63b-14c7-4ea7-9a6e-8aa67ea87e05",
        "codigo": "OE.3.13.3.3",
        "descripcion": "SEÑALES P/NUMERACION DE AMBIENTES 0.06 X 0.12M. LAMINA ACRILICA 4MM.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "2ce32f96-f5f8-46fa-aa4f-e8d3135cd605",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "eb3ecf48-4a23-4796-9df9-8b1e342b6a49",
        "codigo": "OE.3.13.3.4",
        "descripcion": "señalizacion de advertencia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "2ce32f96-f5f8-46fa-aa4f-e8d3135cd605",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "72a7da03-dd3d-41e6-8878-e3e521861b39",
        "codigo": "OE.3.13.3.5",
        "descripcion": "señalizacion de evacuacion y emergencia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "2ce32f96-f5f8-46fa-aa4f-e8d3135cd605",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "84ffd915-879e-479d-bb53-5e9e3bd12b18",
        "codigo": "OE.3.13.3.6",
        "descripcion": "señales indicativas de servicio tipo colgante de 1.20x30 cm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "2ce32f96-f5f8-46fa-aa4f-e8d3135cd605",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "9207dc62-7bef-4751-b5fd-6518f0c59ba0",
        "codigo": "OE.3.13.3.7",
        "descripcion": "señales identificativas de servicio tipo adosado de 30x30 cm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "2ce32f96-f5f8-46fa-aa4f-e8d3135cd605",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "3160b311-f69c-4b4d-bc0c-bad5a0f4cab5",
        "codigo": "OE.3.13.3.8",
        "descripcion": "señales identificativas de servicio tipo bandera de 30x30 cm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "2ce32f96-f5f8-46fa-aa4f-e8d3135cd605",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "49358b13-3740-44f5-84f1-ad18f5ff52f1",
        "codigo": "OE.3.13.3.9",
        "descripcion": "cartel principal tipo directorio",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "2ce32f96-f5f8-46fa-aa4f-e8d3135cd605",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "6d6a60ae-c82a-44eb-a478-34119b6bd117",
        "codigo": "OE.3.13.4",
        "descripcion": "SEÑALETICA DE SEGURIDAD",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "5b82c8f3-d544-47cb-a601-8aee3465e4db",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "16799c2e-7cd8-49f0-80e0-e497802123b9",
        "codigo": "OE.3.13.4.1",
        "descripcion": "INDICA UBICACIÓN DE PELIGRO ALTO VOLTAJE 0.30 X 0.30 PLASTICO 500 MICRAS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "6d6a60ae-c82a-44eb-a478-34119b6bd117",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.4 SEÑALETICA DE SEGURIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "86b5f1a6-b888-4e5e-b5fc-d231f9463683",
        "codigo": "OE.3.13.4.2",
        "descripcion": "INDICA UBICACIÓN ACCESO PARA DISCAPACITADOS 0.20 X 0.30 PLASTICO 500 MICRAS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "6d6a60ae-c82a-44eb-a478-34119b6bd117",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.4 SEÑALETICA DE SEGURIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "02d6d1e2-401e-47b8-afe6-50953438fa1a",
        "codigo": "OE.3.13.4.3",
        "descripcion": "INDICA UBICACIÓN PUESTA A TIERRA 0.30 X 0.30 PLASTICO 500 MICRAS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "6d6a60ae-c82a-44eb-a478-34119b6bd117",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.4 SEÑALETICA DE SEGURIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "4117a209-a865-467c-a379-e7832757afc8",
        "codigo": "OE.3.13.4.4",
        "descripcion": "UBICACIÓN DE EXTINTOR 0.20 X 0.20 PVC AUTOADHESIVO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "6d6a60ae-c82a-44eb-a478-34119b6bd117",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.4 SEÑALETICA DE SEGURIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "c286f9a0-2736-44a3-8d76-ca631bd70755",
        "codigo": "OE.3.13.4.5",
        "descripcion": "ZONA DE EVACUACIÓN CÍRCULO PINTADO EN PISO COLOR BLANCO (LINEA=0.10 M, RADIO= VARIABLE)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "6d6a60ae-c82a-44eb-a478-34119b6bd117",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.4 SEÑALETICA DE SEGURIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "671b6d6f-9027-4111-ba04-8e8b11963642",
        "codigo": "OE.3.13.5",
        "descripcion": "EXTINTORES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "5b82c8f3-d544-47cb-a601-8aee3465e4db",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "8e812476-0060-4a14-b564-4e0fb71638f2",
        "codigo": "OE.3.13.5.1",
        "descripcion": "EXTINTOR DE CO2-ABC X 5 KG",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "671b6d6f-9027-4111-ba04-8e8b11963642",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.5 EXTINTORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "85dc9a4b-a894-467b-89f8-5c4f7dbc01f3",
        "codigo": "OE.3.13.5.2",
        "descripcion": "Extintor CO2-ABC X 6 kg",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "671b6d6f-9027-4111-ba04-8e8b11963642",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.5 EXTINTORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "da22249e-f830-420d-a541-fbd0ce9dae16",
        "codigo": "OE.3.13.5.3",
        "descripcion": "Extintor PQS-ABC x 6 kg",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "671b6d6f-9027-4111-ba04-8e8b11963642",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.5 EXTINTORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "108ebb2d-0451-4748-af36-56899a72d58d",
        "codigo": "OE.3.13.6",
        "descripcion": "MESAS DE CONCRETO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "5b82c8f3-d544-47cb-a601-8aee3465e4db",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "da630f4d-b59c-48cb-bebc-63575dc96122",
        "codigo": "OE.3.13.6.1",
        "descripcion": "Mesa de concreto e=0.10",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "108ebb2d-0451-4748-af36-56899a72d58d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.6 MESAS DE CONCRETO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "9df342a2-a315-407b-909e-7892627d0dd7",
        "codigo": "OE.3.13.6.2",
        "descripcion": "Enchape de porcelanato de 60x60 en mesas de concreto",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "108ebb2d-0451-4748-af36-56899a72d58d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.6 MESAS DE CONCRETO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "af26fa3c-7d10-4ada-ad6b-4259edf9d6d5",
        "codigo": "OE.3.13.7",
        "descripcion": "MOBILIARIO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "5b82c8f3-d544-47cb-a601-8aee3465e4db",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "79d3df33-1c0a-4009-88f7-18f2302aeb27",
        "codigo": "OE.3.13.7.1",
        "descripcion": "BANCA DE ASIENTOS MULTIPLES  2 CUERPOS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "af26fa3c-7d10-4ada-ad6b-4259edf9d6d5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.7 MOBILIARIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "050edbee-2409-419b-90b4-6952d739fa05",
        "codigo": "OE.3.13.7.2",
        "descripcion": "BANCA DE ASIENTOS MULTIPLES  3 CUERPOS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "af26fa3c-7d10-4ada-ad6b-4259edf9d6d5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.7 MOBILIARIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "e4ab4d91-3729-4778-9b5e-3d6f229964e4",
        "codigo": "OE.3.13.7.3",
        "descripcion": "BANCA DE ASIENTOS MULTIPLES  4 CUERPOS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "af26fa3c-7d10-4ada-ad6b-4259edf9d6d5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.7 MOBILIARIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "e209833f-5132-47b4-892e-d90311335aa9",
        "codigo": "OE.3.14",
        "descripcion": "RESERVORIO APOYADO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "e3045373-7785-449b-b029-118194ac1ee5",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.3 ARQUITECTURA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "048e19b2-7522-49d4-976c-ec18233e1b9e",
        "codigo": "OE.3.14.1",
        "descripcion": "Tarrajeo primario (rayado) con mezcla C:A - 1:5",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "e209833f-5132-47b4-892e-d90311335aa9",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.14 RESERVORIO APOYADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "870a3740-758f-4802-b508-7e4c59ea0ad7",
        "codigo": "OE.3.14.2",
        "descripcion": "Tarrajeo en interiores con impermeabilizante mezcla C:A - 1:5",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "e209833f-5132-47b4-892e-d90311335aa9",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.14 RESERVORIO APOYADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1dd2d362-ef60-4e99-9bfb-665768e8b1f7",
        "codigo": "OE.3.14.3",
        "descripcion": "Tarrajeo en muros exteriores mezcla C:A - 1:5",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "e209833f-5132-47b4-892e-d90311335aa9",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.14 RESERVORIO APOYADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "f7d6d46b-9245-481b-b29a-5aee70ffc4d3",
        "codigo": "OE.3.14.4",
        "descripcion": "Bruñas en reservorio",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "e209833f-5132-47b4-892e-d90311335aa9",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.14 RESERVORIO APOYADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "e4b52e0a-39e4-4331-b3b1-0a0fa8c17be7",
        "codigo": "OE.3.14.5",
        "descripcion": "Concreto f'c=210 kg/cm², en piso cuarto de bombas",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "e209833f-5132-47b4-892e-d90311335aa9",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.14 RESERVORIO APOYADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "aea2f7d4-695c-4b35-95d1-f725b8eb15fc",
        "codigo": "OE.3.14.6",
        "descripcion": "Encofrado y desencofrado en pisos",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "e209833f-5132-47b4-892e-d90311335aa9",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.14 RESERVORIO APOYADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "024fe982-8c9f-4831-8b6c-1a58d130c68e",
        "codigo": "OE.4",
        "descripcion": "INSTALACIONES SANITARIAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 2,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "37188d12-4554-4db2-acb6-34fb41d5dc8b",
        "codigo": "OE4.1",
        "descripcion": "APARATOS SANITARIOS Y ACCESORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 2,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1ce1d93a-af29-4424-8011-c2139e289015",
        "codigo": "OE.4.1.1",
        "descripcion": "SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "60118dd4-a6ff-4280-8a69-833309e82988",
        "codigo": "OE.4.1.1.1",
        "descripcion": "SUMINISTRO DE URINARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "1ce1d93a-af29-4424-8011-c2139e289015",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "a7baffa8-864c-49c2-9500-3218c11f7e93",
        "codigo": "OE.4.1.1.1.1",
        "descripcion": "Urinario de loza tipo C-9",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "60118dd4-a6ff-4280-8a69-833309e82988",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.1 SUMINISTRO DE URINARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "b45a7645-adda-4754-b8bd-f0c46843fa4b",
        "codigo": "OE.4.1.1.1.2",
        "descripcion": "URINARIO DE LOZA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "60118dd4-a6ff-4280-8a69-833309e82988",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.1 SUMINISTRO DE URINARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "d629177c-a517-4f9f-9082-65ed1aae2aab",
        "codigo": "OE.4.1.1.2",
        "descripcion": "SUMINISTRO DE INODOROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "1ce1d93a-af29-4424-8011-c2139e289015",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "4a470734-2ff3-4d8f-a366-1695d1415157",
        "codigo": "OE.4.1.1.2.1",
        "descripcion": "Inodoro estandar de loza",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "d629177c-a517-4f9f-9082-65ed1aae2aab",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.2 SUMINISTRO DE INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "4e027ebe-ef37-4f2e-b839-bc21dc2e24b1",
        "codigo": "OE.4.1.1.2.2",
        "descripcion": "Inodoro tipo C-1",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "d629177c-a517-4f9f-9082-65ed1aae2aab",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.2 SUMINISTRO DE INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "ee791b04-db52-4d67-ab18-b9152127ac1e",
        "codigo": "OE.4.1.1.2.3",
        "descripcion": "INODORO TIPO C-1 DE LOZA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "d629177c-a517-4f9f-9082-65ed1aae2aab",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.2 SUMINISTRO DE INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "e6413baf-3703-41f5-93b8-0cae3534019b",
        "codigo": "OE.4.1.1.3",
        "descripcion": "SUMINISTRO DE LAVATORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "1ce1d93a-af29-4424-8011-c2139e289015",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "eaa1b6ba-204e-488b-a846-1cd9a8038c81",
        "codigo": "OE.4.1.1.3.1",
        "descripcion": "Lavatorio de Loza Tipo Ovalin 60x50",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e6413baf-3703-41f5-93b8-0cae3534019b",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.3 SUMINISTRO DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "44280a19-323a-4ef8-991c-a1d584d21602",
        "codigo": "OE.4.1.1.3.2",
        "descripcion": "Lavatorio de Loza Tipo Ovalin 45x40",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e6413baf-3703-41f5-93b8-0cae3534019b",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.3 SUMINISTRO DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "a44c4037-868c-4f1c-b0f3-77f0f546e1b4",
        "codigo": "OE.4.1.1.3.3",
        "descripcion": "Lavadero de acero Inox. de 1 poza de 50x50",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e6413baf-3703-41f5-93b8-0cae3534019b",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.3 SUMINISTRO DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "f8877598-b8f4-403e-bfb4-47cb70f0f6a0",
        "codigo": "OE.4.1.1.3.4",
        "descripcion": "Lavadero de acero Inox. de 80 x 50 CM de una poza con escurridor",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e6413baf-3703-41f5-93b8-0cae3534019b",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.3 SUMINISTRO DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "77a76e53-0a03-48f2-9268-496a07b4a3b0",
        "codigo": "OE.4.1.1.3.5",
        "descripcion": "LAVATORIO DE LOZA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e6413baf-3703-41f5-93b8-0cae3534019b",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.3 SUMINISTRO DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "c66d03bf-aad2-496e-b34d-6f929619c80c",
        "codigo": "OE.4.1.1.3.6",
        "descripcion": "LAVATORIO DE LOZA TIPO OVALIN CON PEDESTAL",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e6413baf-3703-41f5-93b8-0cae3534019b",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.3 SUMINISTRO DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "7c946f54-ff9b-412a-ada5-e46b74844b0c",
        "codigo": "OE.4.1.2",
        "descripcion": "SUMINISTRO DE ACCESORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "3c147a97-77d8-4a44-9602-e0ce2dafaf20",
        "codigo": "OE.4.1.2.1",
        "descripcion": "SUMINISTRO DE ACCESORIOS PARA URINARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "7c946f54-ff9b-412a-ada5-e46b74844b0c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "5f7086e4-b520-4915-a430-5961f909f1a1",
        "codigo": "OE.4.1.2.1.1",
        "descripcion": "Accesorios para urinario de loza",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "3c147a97-77d8-4a44-9602-e0ce2dafaf20",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.1 SUMINISTRO DE ACCESORIOS PARA URINARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "2665219c-4d3c-420f-a60c-10601fad5ee1",
        "codigo": "OE.4.1.2.2",
        "descripcion": "SUMINISTRO DE ACCESORIOS PARA INODOROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "7c946f54-ff9b-412a-ada5-e46b74844b0c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "472864cf-afd4-4ea9-8073-d1510336048e",
        "codigo": "OE.4.1.2.2.1",
        "descripcion": "Accesorios para inodoro estandar de loza",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "2665219c-4d3c-420f-a60c-10601fad5ee1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.2 SUMINISTRO DE ACCESORIOS PARA INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "185b9d27-aba2-4b7d-befb-f49b90202d30",
        "codigo": "OE.4.1.2.2.2",
        "descripcion": "Accesorios para inodoro tipo C -1",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "2665219c-4d3c-420f-a60c-10601fad5ee1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.2 SUMINISTRO DE ACCESORIOS PARA INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "a44fba07-5d2d-4cf7-b099-17423af41c8c",
        "codigo": "OE.4.1.2.3",
        "descripcion": "SUMINISTRO DE ACCESORIOS PARA LAVATORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "7c946f54-ff9b-412a-ada5-e46b74844b0c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "5465bba3-20e1-4f8c-928d-0d2b7aef85fd",
        "codigo": "OE.4.1.2.3.1",
        "descripcion": "Accesorios para lavatorio de loza",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "a44fba07-5d2d-4cf7-b099-17423af41c8c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.3 SUMINISTRO DE ACCESORIOS PARA LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "628d7bd2-49f4-4167-85ec-56d80c9340de",
        "codigo": "OE.4.1.2.3.2",
        "descripcion": "Accesorios para lavadero de acero inoxidable",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "a44fba07-5d2d-4cf7-b099-17423af41c8c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.3 SUMINISTRO DE ACCESORIOS PARA LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "91aefee0-1563-4b2e-ac7f-a98086e5e1d4",
        "codigo": "OE.4.1.2.4",
        "descripcion": "SUMINISTRO DE GRIFERIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "7c946f54-ff9b-412a-ada5-e46b74844b0c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "53d4a56c-e4d3-4a6a-b8a3-7fbfb1cc9ca8",
        "codigo": "OE.4.1.2.4.1",
        "descripcion": "Grifo para lavatorio de una llave",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "91aefee0-1563-4b2e-ac7f-a98086e5e1d4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.4 SUMINISTRO DE GRIFERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "7f2ab590-97e3-47ce-aeb4-91767002a31c",
        "codigo": "OE.4.1.2.4.2",
        "descripcion": "Grifo cromado tipo cuello de ganso de una llave",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "91aefee0-1563-4b2e-ac7f-a98086e5e1d4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.4 SUMINISTRO DE GRIFERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "6561609a-4970-4e67-b106-8b3b8251c769",
        "codigo": "OE.4.1.2.4.3",
        "descripcion": "Ducha electrica de una llave",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "91aefee0-1563-4b2e-ac7f-a98086e5e1d4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.4 SUMINISTRO DE GRIFERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "b8585ef6-f0b2-41cd-b100-d64a0eef5475",
        "codigo": "OE.4.1.2.5",
        "descripcion": "SUMINISTRO DE ACCESORIOS COMPLEMENTARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "7c946f54-ff9b-412a-ada5-e46b74844b0c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "ee911149-c12f-4cfe-8ee9-5311db79cdfc",
        "codigo": "OE.4.1.2.5.1",
        "descripcion": "Porta rollo de loza blanca",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b8585ef6-f0b2-41cd-b100-d64a0eef5475",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.5 SUMINISTRO DE ACCESORIOS COMPLEMENTARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "d757ecb2-9365-4f73-907d-1a2d17774de7",
        "codigo": "OE.4.1.2.5.2",
        "descripcion": "Toallero de gancho",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b8585ef6-f0b2-41cd-b100-d64a0eef5475",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.5 SUMINISTRO DE ACCESORIOS COMPLEMENTARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "4d3bbf38-bdf8-4452-b515-03b9f8352fd4",
        "codigo": "OE.4.1.2.5.3",
        "descripcion": "Jabonera de loza blanca",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b8585ef6-f0b2-41cd-b100-d64a0eef5475",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.5 SUMINISTRO DE ACCESORIOS COMPLEMENTARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "01a4b773-e2f0-4201-a90d-140e28485235",
        "codigo": "OE.4.1.3",
        "descripcion": "INSTALACIÓN DE APARATOS SANITARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "e81b6ab6-a49e-4673-aed7-4905044c5aa3",
        "codigo": "OE.4.1.3.1",
        "descripcion": "INSTALACIÓN DE URINARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "01a4b773-e2f0-4201-a90d-140e28485235",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.3 INSTALACIÓN DE APARATOS SANITARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "bd67dc2b-e10f-42aa-b6d3-65dd99a3e590",
        "codigo": "OE.4.1.3.1.1",
        "descripcion": "Instalación de Urinario de loza",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e81b6ab6-a49e-4673-aed7-4905044c5aa3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.3 INSTALACIÓN DE APARATOS SANITARIOS",
            "OE.4.1.3.1 INSTALACIÓN DE URINARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "166185c0-f3ee-485b-abf4-2a73d59f0a95",
        "codigo": "OE.4.1.3.2",
        "descripcion": "INSTALACIÓN DE INODOROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "01a4b773-e2f0-4201-a90d-140e28485235",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.3 INSTALACIÓN DE APARATOS SANITARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "d5f5fa85-c6d8-498f-9264-99b9453c5ca7",
        "codigo": "OE.4.1.3.2.1",
        "descripcion": "Instalación de Inodoro estandar de loza",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "166185c0-f3ee-485b-abf4-2a73d59f0a95",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.3 INSTALACIÓN DE APARATOS SANITARIOS",
            "OE.4.1.3.2 INSTALACIÓN DE INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "7e016e43-7031-4040-80df-2b5c8f6c4fcf",
        "codigo": "OE.4.1.3.2.2",
        "descripcion": "Instalacion de Inodoro tipo C-1",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "166185c0-f3ee-485b-abf4-2a73d59f0a95",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.3 INSTALACIÓN DE APARATOS SANITARIOS",
            "OE.4.1.3.2 INSTALACIÓN DE INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "bab63e36-ecfe-4aac-a8f4-067410910b34",
        "codigo": "OE.4.1.3.3",
        "descripcion": "INSTALACIÓN DE LAVATORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "01a4b773-e2f0-4201-a90d-140e28485235",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.3 INSTALACIÓN DE APARATOS SANITARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "17d58b24-0a70-4d8c-83fd-6717b4755940",
        "codigo": "OE.4.1.3.3.1",
        "descripcion": "Instalacion de lavatorio de loza tipo ovalin 60x50",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "bab63e36-ecfe-4aac-a8f4-067410910b34",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.3 INSTALACIÓN DE APARATOS SANITARIOS",
            "OE.4.1.3.3 INSTALACIÓN DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "d792c22f-d2ef-4ba8-9cc6-e57da7379282",
        "codigo": "OE.4.1.3.3.2",
        "descripcion": "Instalacion de lavatorio de loza tipo ovalin 45x40",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "bab63e36-ecfe-4aac-a8f4-067410910b34",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.3 INSTALACIÓN DE APARATOS SANITARIOS",
            "OE.4.1.3.3 INSTALACIÓN DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "bb090b6a-230f-4d4a-b4ef-a4793b5e1428",
        "codigo": "OE.4.1.3.3.3",
        "descripcion": "Instalacion de lavadero de acero inos. de 01 poza de 50x50cm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "bab63e36-ecfe-4aac-a8f4-067410910b34",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.3 INSTALACIÓN DE APARATOS SANITARIOS",
            "OE.4.1.3.3 INSTALACIÓN DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "df04add8-32a9-4d9c-b952-b33c1ff2b3f7",
        "codigo": "OE.4.1.3.3.4",
        "descripcion": "Instalacion de lavadero de acero inos. de 80x50cm de 01 poza con escurridor",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "bab63e36-ecfe-4aac-a8f4-067410910b34",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.3 INSTALACIÓN DE APARATOS SANITARIOS",
            "OE.4.1.3.3 INSTALACIÓN DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "1017b7f6-12bc-4a9d-9987-1edf0c4a8bff",
        "codigo": "OE.4.1.4",
        "descripcion": "INSTALACIÓN DE ACCESORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "079a274a-6efa-4c9d-8552-55aa3008c3b6",
        "codigo": "OE.4.1.4.1",
        "descripcion": "INSTALACIÓN DE ACCESORIOS PARA URINARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "1017b7f6-12bc-4a9d-9987-1edf0c4a8bff",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "739bf3c5-d2d8-4ebf-a4e2-f26ee3f37793",
        "codigo": "OE.4.1.4.1.1",
        "descripcion": "Instalacion de accesorios para urinario de loza",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "079a274a-6efa-4c9d-8552-55aa3008c3b6",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.1 INSTALACIÓN DE ACCESORIOS PARA URINARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "4145c3d1-f050-4baa-befc-6c3a06927db3",
        "codigo": "OE.4.1.4.2",
        "descripcion": "INSTALACIÓN DE ACCESORIOS PARA INODOROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "1017b7f6-12bc-4a9d-9987-1edf0c4a8bff",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "e4448528-81b0-4ee2-a23b-2604d624a9ee",
        "codigo": "OE.4.1.4.2.1",
        "descripcion": "Instalacion de accesorios para inodoro",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4145c3d1-f050-4baa-befc-6c3a06927db3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.2 INSTALACIÓN DE ACCESORIOS PARA INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "f38ff232-d430-4442-bc09-22c5ae782a9a",
        "codigo": "OE.4.1.4.2.2",
        "descripcion": "Instalacion de accesorios para inodoro tipo C-1",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "4145c3d1-f050-4baa-befc-6c3a06927db3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.2 INSTALACIÓN DE ACCESORIOS PARA INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "7fc0fbcd-c24c-4855-aedf-99d14000cb3f",
        "codigo": "OE.4.1.4.3",
        "descripcion": "INSTALACIÓN DE ACCESORIOS PARA LAVATORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "1017b7f6-12bc-4a9d-9987-1edf0c4a8bff",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "c8fc01fc-2d06-4b8e-8447-1b1e1b7faed6",
        "codigo": "OE.4.1.4.3.1",
        "descripcion": "Instalacion de accesorios para lavatorios de loza",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7fc0fbcd-c24c-4855-aedf-99d14000cb3f",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.3 INSTALACIÓN DE ACCESORIOS PARA LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "8630a400-4e4e-4303-9734-e6037b8dfc85",
        "codigo": "OE.4.1.4.3.2",
        "descripcion": "Instalacion de accesorios para lavadero de acero inoxidable",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7fc0fbcd-c24c-4855-aedf-99d14000cb3f",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.3 INSTALACIÓN DE ACCESORIOS PARA LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "5e9ca31a-38fa-4c39-ae10-f09b67578714",
        "codigo": "OE.4.1.4.4",
        "descripcion": "INSTALACIÓN DE GRIFERIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "1017b7f6-12bc-4a9d-9987-1edf0c4a8bff",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "9fdd2025-3262-4fcb-ab74-d5aaf34cea3d",
        "codigo": "OE.4.1.4.4.1",
        "descripcion": "Instalacion de Grifo para lavatorio de una llave",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5e9ca31a-38fa-4c39-ae10-f09b67578714",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.4 INSTALACIÓN DE GRIFERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "a4f34602-9b38-499f-9918-d5875a88efa0",
        "codigo": "OE.4.1.4.4.2",
        "descripcion": "Instalacion de Grifo cromado tipo cuello de ganso de una llave",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5e9ca31a-38fa-4c39-ae10-f09b67578714",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.4 INSTALACIÓN DE GRIFERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "fc8720ed-0a60-41f1-8e73-44ad1c9bb22a",
        "codigo": "OE.4.1.4.4.3",
        "descripcion": "Instalacion de ducha electrica de una llave",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5e9ca31a-38fa-4c39-ae10-f09b67578714",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.4 INSTALACIÓN DE GRIFERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "eb4250a6-d8a2-409e-adf0-bcc09874f131",
        "codigo": "OE.4.1.4.5",
        "descripcion": "INSTALACIÓN DE ACCESORIOS COMPLEMENTARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "1017b7f6-12bc-4a9d-9987-1edf0c4a8bff",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "650994de-be11-424a-97f9-7145bdfd9234",
        "codigo": "OE.4.1.4.5.1",
        "descripcion": "Instalacion de Porta rollo de loza blanca",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "eb4250a6-d8a2-409e-adf0-bcc09874f131",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.5 INSTALACIÓN DE ACCESORIOS COMPLEMENTARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "91b86d92-a444-4209-b21b-6c89d66a406d",
        "codigo": "OE.4.1.4.5.2",
        "descripcion": "Instalacion de toallero de gancho",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "eb4250a6-d8a2-409e-adf0-bcc09874f131",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.5 INSTALACIÓN DE ACCESORIOS COMPLEMENTARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "c11cae17-6651-4fc1-b51b-ed364f8c14ee",
        "codigo": "OE.4.1.4.5.3",
        "descripcion": "Instalacion de jabonera de loza blanca",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "eb4250a6-d8a2-409e-adf0-bcc09874f131",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.5 INSTALACIÓN DE ACCESORIOS COMPLEMENTARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "d64eed6a-3d87-45fa-9805-67b299b6901e",
        "codigo": "OE.4.2",
        "descripcion": "SISTEMA DE AGUA FRIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "024fe982-8c9f-4831-8b6c-1a58d130c68e",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "505feb33-7508-4728-9dcd-9cb554b041ce",
        "codigo": "OE.4.2.1",
        "descripcion": "SALIDA DE AGUA FRIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "d64eed6a-3d87-45fa-9805-67b299b6901e",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "7942f420-e171-4155-b636-e28150820743",
        "codigo": "OE.4.2.1.2",
        "descripcion": "SALIDA DE AGUA FRIA-PVC SAP 1/2\"",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "505feb33-7508-4728-9dcd-9cb554b041ce",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.1 SALIDA DE AGUA FRIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "968b55a6-3cdb-439d-a9e1-b3cc335787ef",
        "codigo": "OE.4.2.1.3",
        "descripcion": "EMPALME A RED INTERIOR DE AGUA FRIA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "505feb33-7508-4728-9dcd-9cb554b041ce",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.1 SALIDA DE AGUA FRIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "1934e0ca-3571-4c77-9da7-df057c1a003b",
        "codigo": "OE.4.2.1.4",
        "descripcion": "SALIDA DE AGUA FRIA PVC SAP 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "505feb33-7508-4728-9dcd-9cb554b041ce",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.1 SALIDA DE AGUA FRIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "81f75cdf-82d5-410d-bf17-3cad4c2b2ed7",
        "codigo": "OE.4.2.2",
        "descripcion": "REDES DE DISTRIBUCIÓN",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "d64eed6a-3d87-45fa-9805-67b299b6901e",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "bbc49297-9fe8-422b-9685-d96772f24b03",
        "codigo": "OE.4.2.2.1",
        "descripcion": "CONEXION DOMICIARIA DE AGUA FRIA DE 3/4\"",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "81f75cdf-82d5-410d-bf17-3cad4c2b2ed7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.2 REDES DE DISTRIBUCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "a6a228f0-ae78-42b0-8d9f-cf8c368183a0",
        "codigo": "OE.4.2.2.2",
        "descripcion": "RED DE DISTRIBUCIÓN TUBERÍA PVC CLASE 10 C/R DE 1\"",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "81f75cdf-82d5-410d-bf17-3cad4c2b2ed7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.2 REDES DE DISTRIBUCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "f2db3dee-0947-4a96-b2f9-b8878ab9be83",
        "codigo": "OE.4.2.2.3",
        "descripcion": "RED DE DISTRIBUCIÓN TUBERÍA PVC CLASE 10 C/R DE 1 1/2\"",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "81f75cdf-82d5-410d-bf17-3cad4c2b2ed7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.2 REDES DE DISTRIBUCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "2995b60b-1301-4335-b441-a51596496196",
        "codigo": "OE.4.2.3",
        "descripcion": "REDES DE ALIMENTACIÓN EXTERIORES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "d64eed6a-3d87-45fa-9805-67b299b6901e",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "638b462b-31c6-4640-81e3-16b768f4ba12",
        "codigo": "OE.4.2.3.1",
        "descripcion": "MOVIMIENTO DE TIERRAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "2995b60b-1301-4335-b441-a51596496196",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "467d5255-25ba-4dd7-9fef-46f4873efe92",
        "codigo": "OE.4.2.3.1.1",
        "descripcion": "TRAZO Y REPLANTEO",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "638b462b-31c6-4640-81e3-16b768f4ba12",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "16c64a27-488d-4b73-b2e5-c046a1b56361",
        "codigo": "OE.4.2.3.1.2",
        "descripcion": "EXCAVACIÓN Y PICADO DE ZANJA PARA TUBERÍA SECCIÓN A",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "638b462b-31c6-4640-81e3-16b768f4ba12",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "76a26abd-3aa9-4313-936f-8f3210865202",
        "codigo": "OE.4.2.3.1.3",
        "descripcion": "REFINE Y NIVELACION DE ZANJA PARA TUBERIA SECCIÓN A",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "638b462b-31c6-4640-81e3-16b768f4ba12",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "99d72843-2622-4fe6-80be-0c5488f400df",
        "codigo": "OE.4.2.3.1.4",
        "descripcion": "CAMA DE ARENA EN ZANJA P/TUB SECCIÓN A",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "638b462b-31c6-4640-81e3-16b768f4ba12",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "f26f498e-5f21-40f6-b1a9-4487d443f5e5",
        "codigo": "OE.4.2.3.1.5",
        "descripcion": "RELLENO Y COMPACTACION CON EQUIPO Y MAT. SEGÚN SECCIÓN A",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "638b462b-31c6-4640-81e3-16b768f4ba12",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "05aeeb82-6c79-4a38-9db5-52a4054022b3",
        "codigo": "OE.4.2.3.1.6",
        "descripcion": "EXCAVACIÓN Y PICADO DE ZANJA PARA TUBERÍA SECCIÓN C",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "638b462b-31c6-4640-81e3-16b768f4ba12",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "f5ae1798-f39d-4e0a-a35a-416b26f378b5",
        "codigo": "OE.4.2.3.1.7",
        "descripcion": "REFINE Y NIVELACION DE ZANJA PARA TUBERIA SECCIÓN C",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "638b462b-31c6-4640-81e3-16b768f4ba12",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "a5963ac9-2b8b-4968-b70f-1bb593a158e2",
        "codigo": "OE.4.2.3.1.8",
        "descripcion": "CAMA DE ARENA EN ZANJA P/TUB SECCIÓN C",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "638b462b-31c6-4640-81e3-16b768f4ba12",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "9f883fea-b966-437b-883d-3861744ed788",
        "codigo": "OE.4.2.3.1.9",
        "descripcion": "RELLENO Y COMPACTACION CON EQUIPO Y MAT. SEGÚN SECCIÓN C",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "638b462b-31c6-4640-81e3-16b768f4ba12",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "76574fc3-913b-4ae5-a525-113427547ac7",
        "codigo": "OE.4.2.3.1.10",
        "descripcion": "EXCAVACIÓN Y PICADO DE ZANJA PARA TUBERÍA SECCIÓN D",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "638b462b-31c6-4640-81e3-16b768f4ba12",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "d33bc146-865c-4f88-a62e-ca07114acf6a",
        "codigo": "OE.4.2.3.1.11",
        "descripcion": "REFINE Y NIVELACION DE ZANJA PARA TUBERIA SECCIÓN D",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "638b462b-31c6-4640-81e3-16b768f4ba12",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1d589ca6-94fb-4cfb-acfd-d1e714674daf",
        "codigo": "OE.4.2.3.1.12",
        "descripcion": "CAMA DE ARENA EN ZANJA P/TUB SECCIÓN D",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "638b462b-31c6-4640-81e3-16b768f4ba12",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "70892e7f-759d-4aba-a43d-22d1c5e70e15",
        "codigo": "OE.4.2.3.1.13",
        "descripcion": "RELLENO Y COMPACTACION CON EQUIPO Y MAT. SEGÚN SECCIÓN D",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "638b462b-31c6-4640-81e3-16b768f4ba12",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "18f5c051-73dd-4ca8-8e01-7942f7dcfde9",
        "codigo": "OE.4.2.3.1.14",
        "descripcion": "ELIMINACION MATERIAL EXCEDENTE C/MAQUINA SECCIÓN A + C + D",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "638b462b-31c6-4640-81e3-16b768f4ba12",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "d703d9b2-a28d-427c-a528-089ff78fb629",
        "codigo": "OE.4.2.3.2",
        "descripcion": "REDES DE ALIMENTACIÓN EXTERIORES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "2995b60b-1301-4335-b441-a51596496196",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "cd56c67d-3b23-4c48-adc3-1cc0c4d17c73",
        "codigo": "OE.4.2.3.2.1",
        "descripcion": "RED DE ALIMENTACION TUBERIA PVC CLASE 10 C/R DE 1/2\" NTP 399.166",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "d703d9b2-a28d-427c-a528-089ff78fb629",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.2 REDES DE ALIMENTACIÓN EXTERIORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "19362ef4-f665-45e9-be1b-4fcd49e2d0ab",
        "codigo": "OE.4.2.3.2.2",
        "descripcion": "RED DE ALIMENTACION TUBERIA PVC CLASE 10 C/R DE 1\" NTP 399.166",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "d703d9b2-a28d-427c-a528-089ff78fb629",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.2 REDES DE ALIMENTACIÓN EXTERIORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "3d8673c2-0a35-442c-9915-fa05e8652cb8",
        "codigo": "OE.4.2.3.2.3",
        "descripcion": "RED DE ALIMENTACION TUBERIA PVC CLASE 10 C/R DE 1 1/2\" NTP 399.166",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "d703d9b2-a28d-427c-a528-089ff78fb629",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.2 REDES DE ALIMENTACIÓN EXTERIORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "0d53b526-d2b9-4ef1-893d-8bbe157c8054",
        "codigo": "OE.4.2.3.2.4",
        "descripcion": "RED DE ALIMENTACION TUBERIA PVC CLASE 10 CON ROSCA DE 2\" NTP 399.166",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "d703d9b2-a28d-427c-a528-089ff78fb629",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.2 REDES DE ALIMENTACIÓN EXTERIORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "9129772e-f613-47ab-98f0-8151d8a8665e",
        "codigo": "OE.4.2.3.2.5",
        "descripcion": "RED DE ALIMENTACION TUBERIA PVC CLASE 10 CON EMBONE DE 2 1/2\" NTP 399.002",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "d703d9b2-a28d-427c-a528-089ff78fb629",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.2 REDES DE ALIMENTACIÓN EXTERIORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "eb07fcff-299b-4c40-adef-17749cba75b5",
        "codigo": "OE.4.2.3.2.6",
        "descripcion": "MONTANTE CON TUBERÍA PVC CLASE 10 CON ROSCA DE 1 1/2\" NTP 399.166 INC ABRAZADERAS DE 2\"",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "d703d9b2-a28d-427c-a528-089ff78fb629",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.2 REDES DE ALIMENTACIÓN EXTERIORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "8bdd61bb-2726-4265-9cdc-99b3583e18f5",
        "codigo": "OE.4.2.3.2.7",
        "descripcion": "RED DE ALIMENTACION TUBERIA PVC CLASE 10 CON ROSCA DE 3/4\" NTP 399.166",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "d703d9b2-a28d-427c-a528-089ff78fb629",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.2 REDES DE ALIMENTACIÓN EXTERIORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "codigo": "OE.4.2.4",
        "descripcion": "ACCESORIOS DE REDES DE AGUA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "d64eed6a-3d87-45fa-9805-67b299b6901e",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "948d3c61-2d67-4950-baaa-0408988c7d21",
        "codigo": "OE.4.2.4.1",
        "descripcion": "CODO PVC SAP C-10 DE 1/2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "b5f50089-7aeb-43b7-9098-eeaa5534ca00",
        "codigo": "OE.4.2.4.2",
        "descripcion": "CODO PVC SAP C-10 DE 1 1/2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "839cd9ba-b6a6-4387-9976-0276cf2ac469",
        "codigo": "OE.4.2.4.3",
        "descripcion": "CODO PVC SAP C-10 DE 2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "10ca123f-a274-4446-a26e-d7ca7519f2a9",
        "codigo": "OE.4.2.4.4",
        "descripcion": "CODO PVC SAP C-10 DE 2 1/2\" CON EMBONE",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "843d2a70-b5c7-401f-98ab-abf57568c564",
        "codigo": "OE.4.2.4.5",
        "descripcion": "TEE PVC-SAP C-10 DE Ø 1/2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "76541225-e41a-4f27-926c-27ca4b8a8a20",
        "codigo": "OE.4.2.4.6",
        "descripcion": "TEE PVC-SAP C-10 DE Ø 2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "c1a11167-b168-4e4c-954c-ac2d38a409e9",
        "codigo": "OE.4.2.4.7",
        "descripcion": "TEE PVC SAP C-10 DE 2\" CON REDUCCIÓN A 1/2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "32774c5f-727c-496a-802b-af6ceb74f8f2",
        "codigo": "OE.4.2.4.8",
        "descripcion": "TEE PVC SAP C-10 DE 2\" CON REDUCCIÓN A 1 1/2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "536d6089-a958-4897-bffe-e4b6a0cac74f",
        "codigo": "OE.4.2.4.9",
        "descripcion": "TEE PVC SAP C-10 DE 2 1/2\" CON REDUCCIÓN A 1/2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "36ae6971-a132-44c2-99b8-0c99e9645538",
        "codigo": "OE.4.2.4.10",
        "descripcion": "TEE PVC SAP C-10 DE 2 1/2\" CON REDUCCIÓN A 2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "585878b6-1087-410b-8ff0-beb9e1f62f6d",
        "codigo": "OE.4.2.4.11",
        "descripcion": "TAPÓN DE 1/2\" Ø",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "ba1f4030-5c6c-4738-9147-3746eb85a520",
        "codigo": "OE.4.2.4.12",
        "descripcion": "TAPÓN DE 1-1/4\" Ø",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "41a5bcf5-1d52-46bc-a9ee-b95f9eb6992c",
        "codigo": "OE.4.2.4.13",
        "descripcion": "TAPÓN DE 1-1/2\" Ø",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "e4c87921-e131-44ea-a7fa-db5559c1ff18",
        "codigo": "OE.4.2.4.14",
        "descripcion": "TAPÓN DE 2\" Ø",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "7f48ebbd-3c58-42c7-91e2-2d0ad384f85c",
        "codigo": "OE.4.2.4.15",
        "descripcion": "COLGADORES TIPO GOTA PARA TUBERIA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "e75d82e1-3de7-4877-8f89-0a6cc2db97c3",
        "codigo": "OE.4.2.4.16",
        "descripcion": "CODO PVC SAP C-10 DE 1\" X 90° CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "7a6dfecb-de75-437b-97a6-568eb2d65142",
        "codigo": "OE.4.2.4.17",
        "descripcion": "CODO CON ROSCA PVC 1/2\" X 90° CON INSERTO METALICO HEMBRA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "94d79387-c35c-4334-9ebb-1ce98174772d",
        "codigo": "OE.4.2.4.18",
        "descripcion": "CODO PVC SAP C-10 DE 3/4\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "59fadcd1-95cf-4cb0-93f1-23b20e1c040d",
        "codigo": "OE.4.2.4.19",
        "descripcion": "NIPLE DE PVC 1 1/2\" X 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "2d1035ba-cb6d-4e1b-aa30-ac67529daa47",
        "codigo": "OE.4.2.4.20",
        "descripcion": "NIPLE DE PVC 1\" X 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "abf6a628-fb87-4c0e-b5d6-4b490cd22ea7",
        "codigo": "OE.4.2.4.21",
        "descripcion": "NIPLE DE PVC 1/2\" X 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "3c3752db-349c-4943-a07a-67a58dfad6f0",
        "codigo": "OE.4.2.4.22",
        "descripcion": "NIPLE DE PVC 2\" X 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "9160dc1a-99ec-4295-a486-04d01d35281d",
        "codigo": "OE.4.2.4.23",
        "descripcion": "NIPLE DE PVC 3/4\" X 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "32c43260-1ae1-49e5-b721-e46164b7eba0",
        "codigo": "OE.4.2.4.24",
        "descripcion": "REDUCCION BUSHING PVC C/R DE 3/4\" A 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "76160bb8-d4cd-4a3b-856e-e18481357786",
        "codigo": "OE.4.2.4.25",
        "descripcion": "REDUCCION BUSHING PVC C/R DE 1 1/2\" A 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "7ddace2a-9583-4db7-b0aa-70ff4366b317",
        "codigo": "OE.4.2.4.26",
        "descripcion": "REDUCCION BUSHING PVC C/R DE 1 1/2\" A 3/4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "b7c8fc62-dc24-4a66-a087-40fc9dc30dd3",
        "codigo": "OE.4.2.4.27",
        "descripcion": "REDUCCION BUSHING PVC C/R DE 1\" A 3/4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "bac0f2a3-898c-43e3-9ea0-6012c0700d48",
        "codigo": "OE.4.2.4.28",
        "descripcion": "REDUCCION BUSHING F° G° C/R DE 1 1/2\" A 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "52b1fc6a-d479-4a62-bfa1-082d59751738",
        "codigo": "OE.4.2.4.29",
        "descripcion": "REDUCCION BUSHING PVC C/R DE 2\" A 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "6d4d486a-a7b6-4440-9b9b-135b19f1581a",
        "codigo": "OE.4.2.4.30",
        "descripcion": "REDUCCION BUSHING PVC C/R DE 2\" A 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "9a27f053-c797-4c87-af5a-24a1ebbed3a1",
        "codigo": "OE.4.2.4.31",
        "descripcion": "REDUCCION BUSHING PVC C/R DE 1 1/2\" A 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "ab0636db-eccb-4227-8a49-4e13b53d4eeb",
        "codigo": "OE.4.2.4.32",
        "descripcion": "REDUCCION BUSHING PVC C/R DE 1\" A 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "0f00a32f-cdac-4e3d-ae7c-b8e535fa29c9",
        "codigo": "OE.4.2.4.33",
        "descripcion": "TAPON HEMBRA DE F°G° C/R DE 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "74dea9e1-a091-47e3-8ebf-01737612a906",
        "codigo": "OE.4.2.4.34",
        "descripcion": "TAPON MACHO DE F°G° C/R DE 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "a28a4f51-0969-4dfb-afba-0a4d63bc886f",
        "codigo": "OE.4.2.4.35",
        "descripcion": "TAPON MACHO DE F°G° C/R DE 3/4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "47cac841-7af1-49d4-8d60-2e5d5a52f461",
        "codigo": "OE.4.2.4.36",
        "descripcion": "TAPON MACHO DE F°G° C/R DE 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "a674d6d5-d763-4e9b-9815-897b08b7d781",
        "codigo": "OE.4.2.4.37",
        "descripcion": "TEE PVC-SAP C-10 DE Ø 1\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "46056997-0c97-468e-856e-2b3d1dc744c7",
        "codigo": "OE.4.2.4.38",
        "descripcion": "TEE PVC-SAP C-10 DE Ø 3/4\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "0a6258a6-8982-43c2-b554-e07e6d181c42",
        "codigo": "OE.4.2.4.39",
        "descripcion": "TEE PVC C/R, INSERTO METALICO DE 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "464363ef-86e1-43ac-93ad-f60cd38ddf7d",
        "codigo": "OE.4.2.4.40",
        "descripcion": "UNION SIMPLE PVC C/R 1\", C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1aba878d-dae1-4ae3-9a1e-479559bb5923",
        "codigo": "OE.4.2.4.41",
        "descripcion": "UNION UNIVERSAL F°G° C/R, 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "546e9ba6-e340-4b29-9133-67a733f3266f",
        "codigo": "OE.4.2.4.42",
        "descripcion": "UNION UNIVERSAL F°G° C/R, 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "4feb5623-a57b-4ad1-9e4f-a63dd0c82de1",
        "codigo": "OE.4.2.4.43",
        "descripcion": "UNION UNIVERSAL F°G° C/R, 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "e8275ce5-a0ab-4d51-a233-035e53f83c21",
        "codigo": "OE.4.2.4.44",
        "descripcion": "UNION UNIVERSAL F°G° C/R, 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "2cb263a2-5cc6-4e5d-a172-7d0532f9f4b5",
        "codigo": "OE.4.2.4.45",
        "descripcion": "UNION UNIVERSAL F°G° C/R, 3/4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "957f7677-d41f-4a3e-93b5-e9e9631932ac",
        "codigo": "OE.4.2.4.46",
        "descripcion": "UNION SIMPLE PVC C/R 1 1/2\", C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "6d24e50f-b10c-4917-bc1a-9afc1e9834df",
        "codigo": "OE.4.2.4.47",
        "descripcion": "UNION SIMPLE PVC C/R 1/2\", C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "4f235377-9ca4-42a6-bede-023d4ea4e52c",
        "codigo": "OE.4.2.4.48",
        "descripcion": "UNION SIMPLE PVC C/R, 3/4\", C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "b16c820b-a07d-4685-a27a-64432978649e",
        "codigo": "OE.4.2.4.49",
        "descripcion": "UNION SIMPLE PVC C/R, 2\", C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "2a694c99-d16c-496b-a03e-00b5bb359e80",
        "codigo": "OE.4.2.4.50",
        "descripcion": "CODO F°G° C/R, 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "47573581-544f-4a47-b347-833eb28a7d50",
        "codigo": "OE.4.2.4.51",
        "descripcion": "TEE PVC-SAP C-10, Ø 1 1/2\", C/R",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "ca935316-dc5b-4146-8766-4226752c7f07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "96c2d1c0-fcc9-487a-97f5-3dcbf4825625",
        "codigo": "OE.4.2.5",
        "descripcion": "VALVULAS Y LLAVES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "d64eed6a-3d87-45fa-9805-67b299b6901e",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "75418795-73cd-4155-9fb8-ff3d0f603219",
        "codigo": "OE.4.2.5.1",
        "descripcion": "VÁLVULA ESFÉRICA 2\" Ø BRONCE C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "96c2d1c0-fcc9-487a-97f5-3dcbf4825625",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.5 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "f738e617-b0cc-4800-ae0f-ec413d88878c",
        "codigo": "OE.4.2.5.2",
        "descripcion": "LLAVE D/RIEGO C/GRIFO DE 1/2\" A 0.60m S.N.P. INC. VALVULA 1/2\" Y MURO CONCRETO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "96c2d1c0-fcc9-487a-97f5-3dcbf4825625",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.5 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "70a0f3cf-ca6d-4742-993d-833b69905905",
        "codigo": "OE.4.2.5.3",
        "descripcion": "VÁLVULA ESFÉRICA 3/4\" Ø BRONCE C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "96c2d1c0-fcc9-487a-97f5-3dcbf4825625",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.5 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "3822386c-b5f7-4717-a2a3-4e07a150ed72",
        "codigo": "OE.4.2.5.4",
        "descripcion": "VALVULA ESFERICA DE 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "96c2d1c0-fcc9-487a-97f5-3dcbf4825625",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.5 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "efbd33b0-e58c-4bbb-a04d-2f2787e7c0b3",
        "codigo": "OE.4.2.5.5",
        "descripcion": "VALVULA ESFERICA DE 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "96c2d1c0-fcc9-487a-97f5-3dcbf4825625",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.5 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "1f8b3010-1e9c-4d0e-b374-74302ab10fa8",
        "codigo": "OE.4.2.5.6",
        "descripcion": "VALVULA ESFERICA DE 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "96c2d1c0-fcc9-487a-97f5-3dcbf4825625",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.5 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "5320a56a-de88-478c-9c61-7a381388f9cb",
        "codigo": "OE.4.2.5.8",
        "descripcion": "NICHO DE VALVULAS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "96c2d1c0-fcc9-487a-97f5-3dcbf4825625",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.5 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "c0640d7b-8556-47d2-9319-5c9537a0b93c",
        "codigo": "OE.4.2.6",
        "descripcion": "SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "d64eed6a-3d87-45fa-9805-67b299b6901e",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "52b6733e-a21d-4d2f-b502-02f7588ea2a7",
        "codigo": "OE.4.2.6.1",
        "descripcion": "RED DE CISTERNA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "c0640d7b-8556-47d2-9319-5c9537a0b93c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "08e59703-4a9e-407a-a698-2d1b0a423906",
        "codigo": "OE.4.2.6.1.1",
        "descripcion": "TUBO DE FIERRO GALVANIZADO DE Ø 1\" ROSCADA INC SOPORTERÍA Y COLGADORES",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "52b6733e-a21d-4d2f-b502-02f7588ea2a7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "9ac7dacf-b76d-48d3-9036-9ad4a2ba057d",
        "codigo": "OE.4.2.6.1.2",
        "descripcion": "TUBO DE FIERRO GALVANIZADO DE Ø 1 1/2\" ROSCADA INC SOPORTERÍA Y COLGADORES",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "52b6733e-a21d-4d2f-b502-02f7588ea2a7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "855b8076-940c-4f72-b162-dd532f65b37f",
        "codigo": "OE.4.2.6.1.3",
        "descripcion": "TUBO DE FIERRO GALVANIZADO DE Ø 2\" ROSCADA INC SOPORTERÍA Y COLGADORES",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "52b6733e-a21d-4d2f-b502-02f7588ea2a7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "3c8123ab-83b2-4200-af17-aaaac264d377",
        "codigo": "OE.4.2.6.1.4",
        "descripcion": "TUBO DE FIERRO GALVANIZADO DE Ø 2 1/2\" ROSCADA INC SOPORTERÍA Y COLGADORES",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "52b6733e-a21d-4d2f-b502-02f7588ea2a7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "0694d150-49b3-497b-887e-4f7679e6d8a2",
        "codigo": "OE.4.2.6.1.5",
        "descripcion": "TUBO DE FIERRO GALVANIZADO DE Ø 4\" ROSCADA INC SOPORTERÍA Y COLGADORES",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "52b6733e-a21d-4d2f-b502-02f7588ea2a7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "bb21f9a8-cc1f-46e4-ac02-bc2829a2a2f9",
        "codigo": "OE.4.2.6.1.6",
        "descripcion": "CODO DE FIERRO GALVANIZADO Ø 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "52b6733e-a21d-4d2f-b502-02f7588ea2a7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "faddc08f-5f75-494a-ba26-d7e46a984f27",
        "codigo": "OE.4.2.6.1.7",
        "descripcion": "CODO DE FIERRO GALVANIZADO Ø 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "52b6733e-a21d-4d2f-b502-02f7588ea2a7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "534cf9d2-3a41-4f31-b958-b7cf3348b6cb",
        "codigo": "OE.4.2.6.1.8",
        "descripcion": "CODO DE FIERRO GALVANIZADO Ø 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "52b6733e-a21d-4d2f-b502-02f7588ea2a7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "40ad2d6d-c429-44f9-a849-6475fc034803",
        "codigo": "OE.4.2.6.1.9",
        "descripcion": "CODO DE FIERRO GALVANIZADO Ø 2 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "52b6733e-a21d-4d2f-b502-02f7588ea2a7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "610af248-5c0f-481e-a034-356d742b37df",
        "codigo": "OE.4.2.6.1.10",
        "descripcion": "CODO DE FIERRO GALVANIZADO Ø 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "52b6733e-a21d-4d2f-b502-02f7588ea2a7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "e3b2900f-f78d-47d1-a2db-c46974a43ed5",
        "codigo": "OE.4.2.6.1.11",
        "descripcion": "TEE DE FIERRO GALVANIZADO Ø 2 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "52b6733e-a21d-4d2f-b502-02f7588ea2a7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "376539a8-236c-4e1c-b9dc-edbd224ee405",
        "codigo": "OE.4.2.6.1.12",
        "descripcion": "TRAMPA DE PVC DE Ø 4\" NTP 399.003",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "52b6733e-a21d-4d2f-b502-02f7588ea2a7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "f8221c4c-1487-4b1b-9ddd-219a346c7d9c",
        "codigo": "OE.4.2.6.1.13",
        "descripcion": "TEE DE FIERRO GALVANIZADO Ø 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "52b6733e-a21d-4d2f-b502-02f7588ea2a7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "3e16faf8-df4c-4fcd-839f-def841f38b6c",
        "codigo": "OE.4.2.6.2",
        "descripcion": "VALVULAS Y LLAVES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "c0640d7b-8556-47d2-9319-5c9537a0b93c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "8306e4a8-2e7e-4400-860f-b284b269a747",
        "codigo": "OE.4.2.6.2.1",
        "descripcion": "VALVULA CHECK DE BRONCE Ø 1 1/2 C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "3e16faf8-df4c-4fcd-839f-def841f38b6c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.2 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "2d530e8d-8024-420e-b8d3-ab58bbca1f4a",
        "codigo": "OE.4.2.6.2.2",
        "descripcion": "VALVULA TIPO BOLA Ø 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "3e16faf8-df4c-4fcd-839f-def841f38b6c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.2 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "01df9941-9e12-43c7-bbdd-6c2390c1fde9",
        "codigo": "OE.4.2.6.2.3",
        "descripcion": "VALVULA TIPO BOLA Ø 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "3e16faf8-df4c-4fcd-839f-def841f38b6c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.2 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "c1819049-7f1c-486c-a520-b8b789a86192",
        "codigo": "OE.4.2.6.2.4",
        "descripcion": "VALVULA TIPO BOLA Ø 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "3e16faf8-df4c-4fcd-839f-def841f38b6c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.2 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "86f26ac1-d4d2-4ba0-8ad1-4e04098f8ed5",
        "codigo": "OE.4.2.6.2.5",
        "descripcion": "VALVULA FLOTADORA Ø 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "3e16faf8-df4c-4fcd-839f-def841f38b6c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.2 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "4b152342-ecd8-49d9-9718-9a9653fc8ba7",
        "codigo": "OE.4.2.6.2.6",
        "descripcion": "VÁLVULA PIE DE SUCCIÓN Ø 2\" CON REGILLA C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "3e16faf8-df4c-4fcd-839f-def841f38b6c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.2 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "662b5c99-2983-42f4-befe-44faa62b7a1c",
        "codigo": "OE.4.2.6.3",
        "descripcion": "ADITAMENTOS VARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "c0640d7b-8556-47d2-9319-5c9537a0b93c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "ee62d80b-6c06-4e24-9bf9-d21bb58afba0",
        "codigo": "OE.4.2.6.3.1",
        "descripcion": "BRIDA DE ACERO PARA SOLDAR ROMPE AGUA DE 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "662b5c99-2983-42f4-befe-44faa62b7a1c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "18f4f9a2-40bb-41de-9c30-e39cadd50c0a",
        "codigo": "OE.4.2.6.3.2",
        "descripcion": "UNIÓN UNIVERSAL 2\" (FIERRO GALVANIZADO)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "662b5c99-2983-42f4-befe-44faa62b7a1c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "86cbd730-299b-4009-bdad-39e0f94d612f",
        "codigo": "OE.4.2.6.3.3",
        "descripcion": "UNIÓN UNIVERSAL 1 1/2\" (FIERRO GALVANIZADO)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "662b5c99-2983-42f4-befe-44faa62b7a1c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "2361a92d-f6d7-4313-a1b5-44fcd2455b76",
        "codigo": "OE.4.2.6.3.4",
        "descripcion": "UNIÓN UNIVERSAL 1\" (FIERRO GALVANIZADO)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "662b5c99-2983-42f4-befe-44faa62b7a1c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "ee64c41c-5214-4af7-abea-bdaa7f980b5f",
        "codigo": "OE.4.2.6.3.5",
        "descripcion": "TAPÓN DE 1\" C/R C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "662b5c99-2983-42f4-befe-44faa62b7a1c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "164ed5be-0e04-486d-a8af-b82258c9b644",
        "codigo": "OE.4.2.6.3.6",
        "descripcion": "TAPÓN DE 2 1/2\" EMBONE C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "662b5c99-2983-42f4-befe-44faa62b7a1c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "5b210de4-c017-44c1-885c-bd67f64b27ca",
        "codigo": "OE.4.2.6.3.7",
        "descripcion": "REJILLA METÁLICA CON PLATINAS DE F° DE 1\" x 1/8\"",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "662b5c99-2983-42f4-befe-44faa62b7a1c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "63108a52-dde1-4035-9e12-aa6c5a08d564",
        "codigo": "OE.4.2.6.3.8",
        "descripcion": "TAPA DE REGISTRO DE CUARTO DE BOMBAS",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "662b5c99-2983-42f4-befe-44faa62b7a1c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "91f3f72f-b7fa-4d5d-a578-cc498edec84c",
        "codigo": "OE.4.2.6.3.9",
        "descripcion": "ESCALERA METÁLICA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "662b5c99-2983-42f4-befe-44faa62b7a1c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "3ec8f737-5f7e-4b0a-908e-938e40b4607c",
        "codigo": "OE.4.2.6.3.10",
        "descripcion": "BRIDA DE ACERO ROMPE AGUA DE 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "662b5c99-2983-42f4-befe-44faa62b7a1c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "3a82ea75-87ef-446f-922d-2ae6d2844b2e",
        "codigo": "OE.4.2.6.3.11",
        "descripcion": "BRIDA DE ACERO ROMPE AGUA DE 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "662b5c99-2983-42f4-befe-44faa62b7a1c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "3144f8ae-9215-47de-890b-0a2d1f98812d",
        "codigo": "OE.4.2.6.4",
        "descripcion": "EMPALME Y PRUEBAS HIDRAULICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "c0640d7b-8556-47d2-9319-5c9537a0b93c",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "48b56af7-79cf-4ef6-a3e2-9fb0c326df10",
        "codigo": "OE.4.2.6.4.1",
        "descripcion": "PRUEBA HIDRÁULICA Y DESINFECCIÓN A ZANJA TAPADA PARA CISTERNA",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "3144f8ae-9215-47de-890b-0a2d1f98812d",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.4 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "762cb6eb-053d-44ed-93e3-148d361b7fcf",
        "codigo": "OE.4.2.7",
        "descripcion": "EMPALME Y PRUEBAS HIDRAULICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "d64eed6a-3d87-45fa-9805-67b299b6901e",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "17723617-78d7-44b2-8846-c996340ec2cb",
        "codigo": "OE.4.2.7.2",
        "descripcion": "PRUEBA HIDRAULICA Y DESINFECCION A ZANJA TAPADA",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "762cb6eb-053d-44ed-93e3-148d361b7fcf",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.7 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "e64d5269-3d7d-4921-86c1-6ac7d20ecfb0",
        "codigo": "OE.4.2.7.3",
        "descripcion": "PRUEBA HIDRAULICA Y DESINFECCION A ZANJA ABIERTA",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "762cb6eb-053d-44ed-93e3-148d361b7fcf",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.7 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "0b0e6413-d44d-420d-880d-1d8abf02fb81",
        "codigo": "OE.4.5",
        "descripcion": "SISTEMA DE DRENAJE PLUVIAL",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "024fe982-8c9f-4831-8b6c-1a58d130c68e",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "b49734c0-613e-46c8-91b7-ffc5111b2f41",
        "codigo": "OE.4.5.1",
        "descripcion": "TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "0b0e6413-d44d-420d-880d-1d8abf02fb81",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "38b0fd65-1a25-4907-b86a-26d343c6aec1",
        "codigo": "OE.4.5.1.1",
        "descripcion": "MONTANTES Y/O BAJADAS PLUVIALES CON TUB. PVC -SAP DE Ø 4\" INC ACCESORIOS DE PVC, PINTURA Y REJILLAS",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "b49734c0-613e-46c8-91b7-ffc5111b2f41",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "2e418a19-82c2-482a-b2d2-c3d111a27f24",
        "codigo": "OE.4.5.1.2",
        "descripcion": "CANALETA EVAC AGUAS PLUVIALES DE ALUZINC e=1mm, SECCIÓN RECTANGULAR BASE 200mm CON SOPORTERIA CADA 1.50m",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "b49734c0-613e-46c8-91b7-ffc5111b2f41",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "97b071ec-7e35-4bf4-b64d-aa7e78847de3",
        "codigo": "OE.4.5.1.3",
        "descripcion": "MONTANTES Y/O BAJADAS PLUVIALES CON TUB, PVC SAL PESADA Ø 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b49734c0-613e-46c8-91b7-ffc5111b2f41",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "7ecbec53-34f5-4060-b6b1-716651085e05",
        "codigo": "OE.4.5.1.4",
        "descripcion": "CODO PVC SAL PESADA Ø 4\" X 45°",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b49734c0-613e-46c8-91b7-ffc5111b2f41",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "c6e96845-bffd-42d4-9428-ba5c45188693",
        "codigo": "OE.4.5.1.5",
        "descripcion": "CODO PVC SAL PESADA Ø 4\" X 90°",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b49734c0-613e-46c8-91b7-ffc5111b2f41",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "6516eddb-b85a-41b1-b6a6-16af5f595312",
        "codigo": "OE.4.5.1.6",
        "descripcion": "SOPORTE METALICO PARA MONTANTE Ø 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b49734c0-613e-46c8-91b7-ffc5111b2f41",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "bd1b79a7-920b-4218-ba3c-8510f98aa49e",
        "codigo": "OE.4.5.1.7",
        "descripcion": "CANALETA F° G° E=0.85 mm, 0.35X0.20X0.20, CON SOPORTES CADA 1.00 m.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "b49734c0-613e-46c8-91b7-ffc5111b2f41",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "5840b2cc-7f8f-4143-b264-d77bf45f7991",
        "codigo": "OE.4.5.1.8",
        "descripcion": "TUBERIA PVC TIPO U, DESAGUE Ø6\" X 5 MTS, EMPALME SIMPLE.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "b49734c0-613e-46c8-91b7-ffc5111b2f41",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "8fd8ff24-a2c1-4646-95d1-04835526dd2e",
        "codigo": "OE.4.5.1.9",
        "descripcion": "COLGADORES TIPO GOTA O SIMILAR PARA TUBERIA DE Ø4\"",
        "unidad": "pza",
        "es_titulo": false,
        "parent_id": "b49734c0-613e-46c8-91b7-ffc5111b2f41",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1e2e1ce8-26b2-484d-9064-c71942584894",
        "codigo": "OE.4.5.1.10",
        "descripcion": "TABIQUE DE DOS CARAS CON UNA PLANCHA DE FIBROCEMENTO SUPERBOARD PRO 12.7 mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "b49734c0-613e-46c8-91b7-ffc5111b2f41",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "79a4d97b-0820-46dc-91c9-7b43f6b4a948",
        "codigo": "OE.4.5.2",
        "descripcion": "EMPALME Y PRUEBAS HIDRAULICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "0b0e6413-d44d-420d-880d-1d8abf02fb81",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "ec02975e-3b43-49f4-8ccd-525946ffcda9",
        "codigo": "OE.4.5.2.1",
        "descripcion": "PRUEBA HIDRÁULICA DE RED PLUVIAL",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "79a4d97b-0820-46dc-91c9-7b43f6b4a948",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.2 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "0fe0877d-cdff-4cfc-ba6b-288f3acfa275",
        "codigo": "OE.4.5.2.2",
        "descripcion": "TRAZO Y REPLANTEO",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "79a4d97b-0820-46dc-91c9-7b43f6b4a948",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.2 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "5b0eaf53-ae7c-4d93-a231-9f82ac513a6d",
        "codigo": "OE.4.5.2.3",
        "descripcion": "EXCAVACION EN CANALES",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "79a4d97b-0820-46dc-91c9-7b43f6b4a948",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.2 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "c983f1f3-9e39-47f9-85a8-4474482439b3",
        "codigo": "OE.4.5.2.4",
        "descripcion": "REFINE Y NIVELACION DE ZANJAS",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "79a4d97b-0820-46dc-91c9-7b43f6b4a948",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.2 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "a105bffd-f825-4cdf-aa6b-dd35f29efab0",
        "codigo": "OE.4.5.2.5",
        "descripcion": "ENCOFRADO Y DESENCOFRADO EN CANALES",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "79a4d97b-0820-46dc-91c9-7b43f6b4a948",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.2 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "93036be8-c924-4d63-8a10-10aa9138947e",
        "codigo": "OE.4.5.2.6",
        "descripcion": "CONCRETO f'c= 175 KG/CM2 EN CANALES",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "79a4d97b-0820-46dc-91c9-7b43f6b4a948",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.2 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "ca79460f-fe6c-4ce2-ba43-b9dd91731514",
        "codigo": "OE.4.5.2.7",
        "descripcion": "EMPEDRADO DE 0.1m A 0.2 m",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "79a4d97b-0820-46dc-91c9-7b43f6b4a948",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.2 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "7befd73d-11de-4d54-9f59-a575f4667f03",
        "codigo": "OE.4.5.2.8",
        "descripcion": "REJILLA METALICA",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "79a4d97b-0820-46dc-91c9-7b43f6b4a948",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.2 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "995b0040-67ec-4ff1-afa6-eaa78e2e20a7",
        "codigo": "OE.4.6",
        "descripcion": "DESAGÜE Y VENTILACIÓN",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "024fe982-8c9f-4831-8b6c-1a58d130c68e",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "cbe6a1de-f27a-4a48-ab16-ad4db28635c6",
        "codigo": "OE.4.6.1",
        "descripcion": "SALIDAS DE DESAGÜE",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "995b0040-67ec-4ff1-afa6-eaa78e2e20a7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "b489581f-8e0c-42d8-a9f0-e35e6b2c7e80",
        "codigo": "OE.4.6.1.1",
        "descripcion": "SALIDA DE DESAGÜE - PVC CP 2\"",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "cbe6a1de-f27a-4a48-ab16-ad4db28635c6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.1 SALIDAS DE DESAGÜE"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "94688394-993d-4e35-ba22-7bb6fcf9032d",
        "codigo": "OE.4.6.1.2",
        "descripcion": "SALIDA DE DESAGÜE - PVC CP 4\"",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "cbe6a1de-f27a-4a48-ab16-ad4db28635c6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.1 SALIDAS DE DESAGÜE"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "5e07516c-81dc-4e5d-ab83-1d8408e23c0f",
        "codigo": "OE.4.6.2",
        "descripcion": "REDES DE DERIVACIÓN",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "995b0040-67ec-4ff1-afa6-eaa78e2e20a7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "74a8368c-6277-4554-a80e-40dc7ca5c72d",
        "codigo": "OE.4.6.2.1",
        "descripcion": "CONEXIÓN A REDES DE DERIVACIÓN DE DESAGÜE",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "5e07516c-81dc-4e5d-ab83-1d8408e23c0f",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.2 REDES DE DERIVACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "67a772a4-ccd5-4d48-b6e3-248812f1beb5",
        "codigo": "OE.4.6.2.2",
        "descripcion": "RED VENTILACION CON TUBERIA DE PVC SAP Ø DE 2\" NTP 399.033",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "5e07516c-81dc-4e5d-ab83-1d8408e23c0f",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.2 REDES DE DERIVACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "70be8f6b-21f1-477e-b842-1033b6b38d89",
        "codigo": "OE.4.6.2.3",
        "descripcion": "SALIDA TUBERIA DE VENTILACION PVC Ø 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5e07516c-81dc-4e5d-ab83-1d8408e23c0f",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.2 REDES DE DERIVACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "56720d98-8da2-42a7-9d44-8132a9da4a73",
        "codigo": "OE.4.6.2.4",
        "descripcion": "SOMBRERO EN SALIDA TUBERIA VENTILACION Ø 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5e07516c-81dc-4e5d-ab83-1d8408e23c0f",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.2 REDES DE DERIVACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "56e79131-ae8a-4360-b5b2-8caafbd346a1",
        "codigo": "OE.4.6.2.5",
        "descripcion": "SUMIDERO DE VENTILACION INCLUYE CODO PVC Ø 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5e07516c-81dc-4e5d-ab83-1d8408e23c0f",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.2 REDES DE DERIVACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "e1ccadf3-25a2-4a88-b394-553a9ae0b699",
        "codigo": "OE.4.6.3",
        "descripcion": "REDES COLECTORAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "995b0040-67ec-4ff1-afa6-eaa78e2e20a7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "095ba10b-4e51-4bc4-884f-1f84463876c5",
        "codigo": "OE.4.6.3.1",
        "descripcion": "MOVIMIENTO DE TIERRAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "e1ccadf3-25a2-4a88-b394-553a9ae0b699",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "6e7f608d-d862-4f79-8d49-847adcc9c17e",
        "codigo": "OE.4.6.3.1.1",
        "descripcion": "TRAZO Y REPLANTEO",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "095ba10b-4e51-4bc4-884f-1f84463876c5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "82a3e56e-8b25-4fde-9a51-5215ab93a5e3",
        "codigo": "OE.4.6.3.1.2",
        "descripcion": "EXCAVACION DE ZANJA PARA TUBERIA SECCIÓN B",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "095ba10b-4e51-4bc4-884f-1f84463876c5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "29bd3b26-ff9a-4854-a8fd-c5432c37905b",
        "codigo": "OE.4.6.3.1.3",
        "descripcion": "REFINE Y NIVELACION DE ZANJA PARA TUBERIA SECCIÓN B",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "095ba10b-4e51-4bc4-884f-1f84463876c5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "8ab2de8b-cf6b-4949-8431-e5e1be09b321",
        "codigo": "OE.4.6.3.1.4",
        "descripcion": "CAMA DE ARENA EN ZANJA P/TUB SECCIÓN B",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "095ba10b-4e51-4bc4-884f-1f84463876c5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "87c1074e-1613-41c3-b7c7-929a087ce7cf",
        "codigo": "OE.4.6.3.1.5",
        "descripcion": "RELLENO Y COMPACTACION CON EQUIPO Y MAT. SEGÚN SECCIÓN B",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "095ba10b-4e51-4bc4-884f-1f84463876c5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1dfbafa0-d035-4d8d-a721-2c1a2137bbbe",
        "codigo": "OE.4.6.3.1.6",
        "descripcion": "ELIMINACION MATERIAL EXCEDENTE C/MAQUINA SECCIÓN B",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "095ba10b-4e51-4bc4-884f-1f84463876c5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "0a178ca4-df74-43ce-8c27-ec830c629afa",
        "codigo": "OE.4.6.3.2",
        "descripcion": "INSTALACION DE TUBERIA COLECTORA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "e1ccadf3-25a2-4a88-b394-553a9ae0b699",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "df53e9fc-292b-4b91-ad02-46d49421f2bc",
        "codigo": "OE.4.6.3.2.1",
        "descripcion": "RED COLECTORA CON TUBERÍA DE PVC SAP Ø DE 3\" NTP 399.003.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "0a178ca4-df74-43ce-8c27-ec830c629afa",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.2 INSTALACION DE TUBERIA COLECTORA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "55382e27-2e54-4c97-8d97-36a84e276e6a",
        "codigo": "OE.4.6.3.2.2",
        "descripcion": "RED COLECTORA CON TUBERÍA DE PVC SAP Ø DE 4\" NTP 399.003.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "0a178ca4-df74-43ce-8c27-ec830c629afa",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.2 INSTALACION DE TUBERIA COLECTORA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "a9d23a6e-7666-4efb-9b8a-6d3e47bc6b57",
        "codigo": "OE.4.6.3.2.3",
        "descripcion": "RED COLECTORA CON TUBERÍA DE PVC SAP Ø DE 6\" NTP 399.003.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "0a178ca4-df74-43ce-8c27-ec830c629afa",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.2 INSTALACION DE TUBERIA COLECTORA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "d88501d1-f910-44cf-8b90-41612a5250fb",
        "codigo": "OE.4.6.3.2.4",
        "descripcion": "MONTANTE Y/O VENTILACION CON TUBERIA PVC - SAP Ø DE 4\" NTP 399.003.INC ABRAZADERAS",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "0a178ca4-df74-43ce-8c27-ec830c629afa",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.2 INSTALACION DE TUBERIA COLECTORA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "d6fe5a35-2e5e-4e5b-a5b9-56acab68f45c",
        "codigo": "OE.4.6.3.2.5",
        "descripcion": "RED COLECTORA CON TUBERIA DE PVC SAP Ø DE 2\" NTP 399.003",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "0a178ca4-df74-43ce-8c27-ec830c629afa",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.2 INSTALACION DE TUBERIA COLECTORA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "7aab6078-6bd9-42e9-a7bf-dfbb3ad31a62",
        "codigo": "OE.4.6.4",
        "descripcion": "ACCESORIOS DE REDES COLECTORAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "995b0040-67ec-4ff1-afa6-eaa78e2e20a7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "7f4ca824-8706-4bb6-9a18-a158ebb6541b",
        "codigo": "OE.4.6.4.1",
        "descripcion": "YEE PVC SAP DE 4\" X 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7aab6078-6bd9-42e9-a7bf-dfbb3ad31a62",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "f6479e30-ba96-46c9-b22d-f537a82077e6",
        "codigo": "OE.4.6.4.2",
        "descripcion": "CODO PVC SAP DE 45° X 2 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7aab6078-6bd9-42e9-a7bf-dfbb3ad31a62",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "bf716b25-30ab-44ef-8dc9-023715766c85",
        "codigo": "OE.4.6.4.3",
        "descripcion": "CODO PVC SAP DE 90° X 2 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7aab6078-6bd9-42e9-a7bf-dfbb3ad31a62",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "fe031b95-547c-40a2-b047-4323397a9ab1",
        "codigo": "OE.4.6.4.4",
        "descripcion": "ADITAMENTOS VARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "7aab6078-6bd9-42e9-a7bf-dfbb3ad31a62",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "52272666-037d-4254-ad17-e11f8b774fe6",
        "codigo": "OE.4.6.4.4.1",
        "descripcion": "SUMIDERO DE BRONCE DE 3\" PROVISIÓN Y COLOCACIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "fe031b95-547c-40a2-b047-4323397a9ab1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS",
            "OE.4.6.4.4 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "6ac09b7a-b9e5-4712-9d41-6b41cdb54f4c",
        "codigo": "OE.4.6.4.4.2",
        "descripcion": "REGISTRO ROSCADO DE BRONCE DE 4\" PROVISIÓN Y COLOCACIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "fe031b95-547c-40a2-b047-4323397a9ab1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS",
            "OE.4.6.4.4 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "39eb137d-ef89-4f0f-9077-06cedac708fb",
        "codigo": "OE.4.6.4.4.3",
        "descripcion": "REGISTRO ROSCADO DE BRONCE DE 4\" TIPO DADO, SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "fe031b95-547c-40a2-b047-4323397a9ab1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS",
            "OE.4.6.4.4 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "814d6597-26bf-49b0-9ec9-29a7678ca181",
        "codigo": "OE.4.6.4.4.4",
        "descripcion": "SUMIDERO DE BRONCE DE 2\" PROVISION Y COLOCACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "fe031b95-547c-40a2-b047-4323397a9ab1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS",
            "OE.4.6.4.4 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "4fe73c74-a0fd-4d99-ba1e-ad711bde3d66",
        "codigo": "OE.4.6.4.4.5",
        "descripcion": "COLGADORES TIPO GOTA PARA TUBERIA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "fe031b95-547c-40a2-b047-4323397a9ab1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS",
            "OE.4.6.4.4 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "9d463357-22bd-4b67-89c9-2fb684c5aa61",
        "codigo": "OE.4.6.4.5",
        "descripcion": "YEE PVC DESAGUE DE 4\" X 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7aab6078-6bd9-42e9-a7bf-dfbb3ad31a62",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "cf1c075e-4d7d-4071-90c6-c6982ae81363",
        "codigo": "OE.4.6.4.6",
        "descripcion": "YEE PVC DESAGUE DE 2\" X 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7aab6078-6bd9-42e9-a7bf-dfbb3ad31a62",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "4760b511-913a-4afe-a04b-60d4d524405a",
        "codigo": "OE.4.6.4.7",
        "descripcion": "CODO PVC DESAGUE DE 45° X 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7aab6078-6bd9-42e9-a7bf-dfbb3ad31a62",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "43d17db9-6b80-4a50-b76b-83eacfa70800",
        "codigo": "OE.4.6.4.8",
        "descripcion": "CODO PVC DESAGUE DE 45° X 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7aab6078-6bd9-42e9-a7bf-dfbb3ad31a62",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "915435f2-1a7b-4f3c-9bf4-54e014531470",
        "codigo": "OE.4.6.4.9",
        "descripcion": "CODO PVC DESAGUE DE 90° X 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7aab6078-6bd9-42e9-a7bf-dfbb3ad31a62",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "778204d4-80b2-43e4-a4c0-a6f32a020c24",
        "codigo": "OE.4.6.4.10",
        "descripcion": "CODO PVC DESAGUE DE 90° X 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7aab6078-6bd9-42e9-a7bf-dfbb3ad31a62",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "485e9133-b1fc-49b9-8e26-1b15773bee27",
        "codigo": "OE.4.6.4.11",
        "descripcion": "TEE DESAGUE PVC 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7aab6078-6bd9-42e9-a7bf-dfbb3ad31a62",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "3b2c62c8-4118-4a26-bc74-3c192ccbc75b",
        "codigo": "OE.4.6.4.12",
        "descripcion": "TEE DESAGUE PVC 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7aab6078-6bd9-42e9-a7bf-dfbb3ad31a62",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "c620a146-8c9f-4365-86d9-ac234ef24831",
        "codigo": "OE.4.6.5",
        "descripcion": "CÁMARAS DE INSPECCIÓN",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "995b0040-67ec-4ff1-afa6-eaa78e2e20a7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "00298642-bafc-4af8-b8e0-af66bb107db0",
        "codigo": "OE.4.6.5.1",
        "descripcion": "CAJAS DE REGISTRO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "c620a146-8c9f-4365-86d9-ac234ef24831",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "2c952882-0bb0-4299-a101-ab0a9cf7952e",
        "codigo": "OE.4.6.5.1.1",
        "descripcion": "CAJA DE REG.PREFAB. 0.30x0.60m C/TAPA CONC., Incl R-6\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "00298642-bafc-4af8-b8e0-af66bb107db0",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN",
            "OE.4.6.5.1 CAJAS DE REGISTRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "4c69e8a8-0a9d-4023-8b33-0a44e104d94c",
        "codigo": "OE.4.6.5.1.2",
        "descripcion": "CAJA DE REG.PREFAB. 0.60x0.60m C/TAPA CONC.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "00298642-bafc-4af8-b8e0-af66bb107db0",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN",
            "OE.4.6.5.1 CAJAS DE REGISTRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "eb47abf5-ee62-4199-b9a2-be1c10240cbb",
        "codigo": "OE.4.6.5.1.3",
        "descripcion": "BUZÓN D=1.20m, PORF. PROM. 1.35m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "00298642-bafc-4af8-b8e0-af66bb107db0",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN",
            "OE.4.6.5.1 CAJAS DE REGISTRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "7938561d-a110-480c-b2a5-59382eb2b1a5",
        "codigo": "OE.4.6.5.1.4",
        "descripcion": "CAJUELA DE CONCRETO DE 0.30X0.30m CON REJILLA METÁLICA - IN SITU",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "00298642-bafc-4af8-b8e0-af66bb107db0",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN",
            "OE.4.6.5.1 CAJAS DE REGISTRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "e6358638-fd74-45d3-905f-3ea4c2dc5937",
        "codigo": "OE.4.6.5.1.5",
        "descripcion": "CONCRETO F'c=175 kg/cm² PARA CAJAS DE REGISTRO",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "00298642-bafc-4af8-b8e0-af66bb107db0",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN",
            "OE.4.6.5.1 CAJAS DE REGISTRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "6d316b1c-d722-45de-9940-c179f7454ff0",
        "codigo": "OE.4.6.5.1.6",
        "descripcion": "ENCOFRADO Y DESENCOFRADO",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "00298642-bafc-4af8-b8e0-af66bb107db0",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN",
            "OE.4.6.5.1 CAJAS DE REGISTRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "c026a401-6fae-42f3-9e78-eec1f4455e86",
        "codigo": "OE.4.6.5.1.7",
        "descripcion": "ACERO CORRUGADO Fý=4200 Kg/cm2 grado 60",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "00298642-bafc-4af8-b8e0-af66bb107db0",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN",
            "OE.4.6.5.1 CAJAS DE REGISTRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "cf7980ad-ade9-4949-8f5a-3acff1055f14",
        "codigo": "OE.4.6.5.1.5",
        "descripcion": "EMPALME Y PRUEBAS HIDRAULICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "00298642-bafc-4af8-b8e0-af66bb107db0",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN",
            "OE.4.6.5.1 CAJAS DE REGISTRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "8dc18154-f8b7-4300-b3d0-7dbc6ee30e95",
        "codigo": "OE.4.6.5.1.5.2",
        "descripcion": "PRUEBA HIDRÁULICA DE ESCORRENTÍA DE TUB. DESAGÜE",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "cf7980ad-ade9-4949-8f5a-3acff1055f14",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN",
            "OE.4.6.5.1 CAJAS DE REGISTRO",
            "OE.4.6.5.1.5 CONCRETO F'c=175 kg/cm² PARA CAJAS DE REGISTRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "834fca42-1a70-4e05-8f39-45f8a765ac07",
        "codigo": "OE.4.6.7",
        "descripcion": "EQUIPAMIENTO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "995b0040-67ec-4ff1-afa6-eaa78e2e20a7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "35d630f9-7639-46ed-92ab-2dcbbd511561",
        "codigo": "OE.4.6.7.1",
        "descripcion": "ELECTROBOMBAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "834fca42-1a70-4e05-8f39-45f8a765ac07",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.7 EQUIPAMIENTO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "91641d36-a119-48cd-b1b8-0d8a7d4d166f",
        "codigo": "OE.4.6.7.1.1",
        "descripcion": "SUMINISTRO E INSTALACIÓN DE EQUIPO DE BOMBEO DE AGUA FRIA DURA, VELOCIDAD VARIABLE, PRESION CONSTANTE Q= 4 LPS, ADT=38 M, MULTIETAPICA P=2.5 HP, INCL, TABLEROS Y CABLEADO ELECTRICO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "35d630f9-7639-46ed-92ab-2dcbbd511561",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.7 EQUIPAMIENTO",
            "OE.4.6.7.1 ELECTROBOMBAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "32b03a1e-4f45-4ad4-91e8-584ce1f0687b",
        "codigo": "OE.4.6.7.1.2",
        "descripcion": "SUMINISTRO,INSTALACION,PRUEBAS Y PUESTA EN FUNCIONAMIENTO DEL SISTEMA DE PRESION CONSTANTE",
        "unidad": "ser",
        "es_titulo": false,
        "parent_id": "35d630f9-7639-46ed-92ab-2dcbbd511561",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.7 EQUIPAMIENTO",
            "OE.4.6.7.1 ELECTROBOMBAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "3c091c5b-fec6-4b7b-aa5f-e3cb69532ef1",
        "codigo": "OE.4.6.8",
        "descripcion": "INSTALACION DE BIODIGESTOR",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "995b0040-67ec-4ff1-afa6-eaa78e2e20a7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "c25c3a03-eada-4c8c-b462-56a4b5d4e90f",
        "codigo": "OE.4.6.8.1",
        "descripcion": "LIMPIEZA DEL TERRENO MANUAL",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "3c091c5b-fec6-4b7b-aa5f-e3cb69532ef1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "adc4b2d0-6007-4176-b912-939387a59640",
        "codigo": "OE.4.6.8.2",
        "descripcion": "TRAZO, NIVELES Y REPLANTEO",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "3c091c5b-fec6-4b7b-aa5f-e3cb69532ef1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "94a8b5ee-94c9-4b33-b52a-829940d9df32",
        "codigo": "OE.4.6.8.3",
        "descripcion": "NIVELACION DE TERRENO",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "3c091c5b-fec6-4b7b-aa5f-e3cb69532ef1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "849b0196-1e93-47a2-a429-f4f787a51a83",
        "codigo": "OE.4.6.8.4",
        "descripcion": "EXCAVACION MANUAL EN TERRENO NATURAL",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "3c091c5b-fec6-4b7b-aa5f-e3cb69532ef1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "05fe4e1b-bc93-4064-b1a3-6467f7ec3007",
        "codigo": "OE.4.6.8.5",
        "descripcion": "ELIMINACION DE MATERIAL EXCEDENTE MANUAL",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "3c091c5b-fec6-4b7b-aa5f-e3cb69532ef1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "3710aeff-240a-4042-b35f-1e465fa20db2",
        "codigo": "OE.4.6.8.6",
        "descripcion": "SUMINISTRO DE BIODIGESTOR",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "3c091c5b-fec6-4b7b-aa5f-e3cb69532ef1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "129bea8c-e7ad-4d5b-9e93-ecf01c4b4d89",
        "codigo": "OE.4.6.8.7",
        "descripcion": "INSTALACION DE BIODIGESTOR",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "3c091c5b-fec6-4b7b-aa5f-e3cb69532ef1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "62a69fcb-047c-4958-90a4-c621474227f4",
        "codigo": "OE.4.6.8.8",
        "descripcion": "TUBERIAS Y ACCESORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "3c091c5b-fec6-4b7b-aa5f-e3cb69532ef1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "6ec3d5fe-5d35-4d98-8cf9-65517f9ee871",
        "codigo": "OE.4.6.8.8.1",
        "descripcion": "LIMPIEZA DEL TERRENO MANUAL",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "62a69fcb-047c-4958-90a4-c621474227f4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR",
            "OE.4.6.8.8 TUBERIAS Y ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "f1a70cee-9aaa-44e0-88c0-d408e906c1b4",
        "codigo": "OE.4.6.8.8.2",
        "descripcion": "TRAZO, NIVELES Y REPLANTEO",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "62a69fcb-047c-4958-90a4-c621474227f4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR",
            "OE.4.6.8.8 TUBERIAS Y ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1be6b198-1812-41b5-a6d6-03e15a4e1edf",
        "codigo": "OE.4.6.8.8.3",
        "descripcion": "EXCAVACION MANUAL EN TERRENO NATURAL",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "62a69fcb-047c-4958-90a4-c621474227f4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR",
            "OE.4.6.8.8 TUBERIAS Y ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "e13604a4-6e43-4b62-a46a-2bf2e4e9ac3b",
        "codigo": "OE.4.6.8.8.4",
        "descripcion": "ELIMINACION DE MATERIAL EXCEDENTE MANUAL",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "62a69fcb-047c-4958-90a4-c621474227f4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR",
            "OE.4.6.8.8 TUBERIAS Y ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "a92c60ce-f31c-4e62-9b71-06940ff38afc",
        "codigo": "OE.4.6.8.8.5",
        "descripcion": "SUMINISTRO E INSTALACION TUBERIA",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "62a69fcb-047c-4958-90a4-c621474227f4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR",
            "OE.4.6.8.8 TUBERIAS Y ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "ca4dde98-febf-4c72-8139-db72e3049324",
        "codigo": "OE.4.6.9",
        "descripcion": "POZO PERCOLADOR",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "995b0040-67ec-4ff1-afa6-eaa78e2e20a7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "7b118afa-9533-4e7b-950e-90efe0ee4735",
        "codigo": "OE.4.6.9.1",
        "descripcion": "TRABAJOS PRELIMINARES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "ca4dde98-febf-4c72-8139-db72e3049324",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "c4fcfda5-a9e9-4ad9-a7a8-588aef17a18e",
        "codigo": "OE.4.6.9.1.1",
        "descripcion": "LIMPIEZA DEL TERRENO MANUAL",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "7b118afa-9533-4e7b-950e-90efe0ee4735",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.1 TRABAJOS PRELIMINARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "3dc3772e-d047-45bf-9f5f-67f5ba9632de",
        "codigo": "OE.4.6.9.1.2",
        "descripcion": "TRAZO Y REPLANTEO PRELIMINAR",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "7b118afa-9533-4e7b-950e-90efe0ee4735",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.1 TRABAJOS PRELIMINARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "cb17a527-0593-4c2b-afae-214ae9a788ba",
        "codigo": "OE.4.6.9.2",
        "descripcion": "MOVIMIENTO DE TIERRAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "ca4dde98-febf-4c72-8139-db72e3049324",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "0f123e39-9f9c-4bd9-8ceb-27147f18289b",
        "codigo": "OE.4.6.9.2.1",
        "descripcion": "EXCAVACION MANUAL EN TERRENO NATURAL",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "cb17a527-0593-4c2b-afae-214ae9a788ba",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.2 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "d6772909-a13e-4f17-85e7-dc0c1d4df27a",
        "codigo": "OE.4.6.9.2.2",
        "descripcion": "RELLENO CON MATERIAL GRANULAR",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "cb17a527-0593-4c2b-afae-214ae9a788ba",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.2 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "e18cbfad-d7f3-4203-8abb-1a004f48c3d2",
        "codigo": "OE.4.6.9.2.3",
        "descripcion": "ELIMINACION DE MATERIAL EXCEDENTE",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "cb17a527-0593-4c2b-afae-214ae9a788ba",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.2 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "eb03b020-f92b-4088-be75-f9d7f1eddcf0",
        "codigo": "OE.4.6.9.3",
        "descripcion": "OBRAS DE CONCRETO SIMPLE",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "ca4dde98-febf-4c72-8139-db72e3049324",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1ae2c9dd-148b-42e7-88f4-ef632d0a2853",
        "codigo": "OE.4.6.9.3.1",
        "descripcion": "CONCRETO f'c=175 kg/cm2",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "eb03b020-f92b-4088-be75-f9d7f1eddcf0",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.3 OBRAS DE CONCRETO SIMPLE"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "f8e402a2-153c-4db4-8428-e66639ce872c",
        "codigo": "OE.4.6.9.4",
        "descripcion": "OBRAS DE CONCRETO ARMADO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "ca4dde98-febf-4c72-8139-db72e3049324",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "b14450f1-93c4-4d31-93ea-2e2f7b96f6d6",
        "codigo": "OE.4.6.9.4.1",
        "descripcion": "CONCRETO f'c = 210 kg/cm2",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "f8e402a2-153c-4db4-8428-e66639ce872c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.4 OBRAS DE CONCRETO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1ee4a0e1-b81e-42de-aae2-2f1f70494ae8",
        "codigo": "OE.4.6.9.4.2",
        "descripcion": "ENCOFRADO Y DESENCOFRADO",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "f8e402a2-153c-4db4-8428-e66639ce872c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.4 OBRAS DE CONCRETO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "4fcc3963-b212-4cd3-9f84-43e6a87eaf3b",
        "codigo": "OE.4.6.9.4.3",
        "descripcion": "ACERO CORRUGADO FY= 4200 kg/cm2 GRADO 60",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "f8e402a2-153c-4db4-8428-e66639ce872c",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.4 OBRAS DE CONCRETO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "012e5c30-216c-42c1-a593-1c55f90bb629",
        "codigo": "OE.4.6.9.5",
        "descripcion": "TUBERIAS Y ACCESORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "ca4dde98-febf-4c72-8139-db72e3049324",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "b15623e9-deec-449f-ae49-87c6895f3e82",
        "codigo": "OE.4.6.9.5.1",
        "descripcion": "SUMINISTRO E INSTALACION TUBERIA PVC SAL 2\"",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "012e5c30-216c-42c1-a593-1c55f90bb629",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.5 TUBERIAS Y ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "3a048497-2c90-40ec-8259-6aa8baf3726e",
        "codigo": "OE.4.6.9.6",
        "descripcion": "MAMPOSTERIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "ca4dde98-febf-4c72-8139-db72e3049324",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "966d092a-a4e8-47e6-8e88-87c0854b174f",
        "codigo": "OE.4.6.9.6.1",
        "descripcion": "MAMPOSTERIA CON LADRILLO KK DE CABEZA (0.24 X 0.13 X 0.09 m.)",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "3a048497-2c90-40ec-8259-6aa8baf3726e",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.6 MAMPOSTERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "faa4f1f3-f2b2-4fdb-bd36-d564463b90ef",
        "codigo": "OE.4.7",
        "descripcion": "ADITAMENTOS VARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "024fe982-8c9f-4831-8b6c-1a58d130c68e",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "e88bc2a6-0856-4748-9266-d00f32689625",
        "codigo": "OE.4.7.6",
        "descripcion": "REGISTRO ROSCADO DE BRONCE DE 2\" PROVISIÓN Y COLOCACIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "faa4f1f3-f2b2-4fdb-bd36-d564463b90ef",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.4 INSTALACIONES SANITARIAS",
            "OE.4.7 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "96c5774b-4f7d-4538-8de0-6b9ba5ba5205",
        "codigo": "OE.5",
        "descripcion": "INSTALACIONES ELÉCTRICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 2,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "e799ae04-8b93-49be-a281-6b83ec262a71",
        "codigo": "OE.5.1",
        "descripcion": "CONEXIÓN A LA RED EXTERNA DE SUMINISTRO DE ENERGIA ELÉCTRICA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "96c5774b-4f7d-4538-8de0-6b9ba5ba5205",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "6500fa52-45ad-43ac-84ce-28edfe27df0d",
        "codigo": "OE.5.1.1",
        "descripcion": "Sistema de Utilización en Media Tensión Subestación Tipo Seco Compacto de 150 KVA.",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "e799ae04-8b93-49be-a281-6b83ec262a71",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.1 CONEXIÓN A LA RED EXTERNA DE SUMINISTRO DE ENERGIA ELÉCTRICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "622c428a-9c7d-47c3-b61c-ebd9a596be44",
        "codigo": "OE.5.2",
        "descripcion": "SALIDA PARA INSTALACIONES ELÉCTRICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "96c5774b-4f7d-4538-8de0-6b9ba5ba5205",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "7b1d9b46-d779-49e1-89bf-fbbbb70a4229",
        "codigo": "OE.5.2.1",
        "descripcion": "SALIDA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "622c428a-9c7d-47c3-b61c-ebd9a596be44",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "fdd859fa-edd8-49e9-a484-4f9740e681cf",
        "codigo": "OE.5.2.1.1",
        "descripcion": "SALIDA PARA ALUMBRADO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "7b1d9b46-d779-49e1-89bf-fbbbb70a4229",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "dbc27054-9b9b-4cae-87e7-f12324aaef26",
        "codigo": "OE.5.2.1.1.1",
        "descripcion": "Salida para Alumbrado",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "fdd859fa-edd8-49e9-a484-4f9740e681cf",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.1 SALIDA PARA ALUMBRADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "c1be8eff-00da-4115-97bf-3e138320c5aa",
        "codigo": "OE.5.2.1.1.2",
        "descripcion": "Salida para alumbrado exterior en poste tipo alumbrado público",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "fdd859fa-edd8-49e9-a484-4f9740e681cf",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.1 SALIDA PARA ALUMBRADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "8e3a81d7-47fb-49f2-b43c-0c5d55e96ad2",
        "codigo": "OE.5.2.1.1.3",
        "descripcion": "Salida para Alumbrado de Emergencia",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "fdd859fa-edd8-49e9-a484-4f9740e681cf",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.1 SALIDA PARA ALUMBRADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "30c87813-6062-4b5e-99d1-a54c4379fada",
        "codigo": "OE.5.2.1.2",
        "descripcion": "SALIDA PARA TOMACORRIENTES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "7b1d9b46-d779-49e1-89bf-fbbbb70a4229",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "06e5969b-bf43-4975-8fbc-854189ea47c4",
        "codigo": "OE.5.2.1.2.1",
        "descripcion": "Salida para tomacorriente Bipolar Doble con linea a tierra (F+ N+T), 16 A. 250 V. GRADO HOSPITALARIO DADOS COLOR BLANCO PARA USO GENERAL (SISTEMA NORMAL).",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "30c87813-6062-4b5e-99d1-a54c4379fada",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.2 SALIDA PARA TOMACORRIENTES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "fb323a37-4524-4880-928e-d720d589d35b",
        "codigo": "OE.5.2.1.2.2",
        "descripcion": "Salida para tomacorriente Bipolar Doble Tipo Mixto tres en linea y tipo Schuko (F+N+T), 16 A. 250 V. EN PARA USO GENERAL (NO ESTABILIZADO) (EQUIP. MEDICO). EMPOTRADO EN MURO",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "30c87813-6062-4b5e-99d1-a54c4379fada",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.2 SALIDA PARA TOMACORRIENTES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "dcefd6f0-7f0d-4cbf-8568-628eea925132",
        "codigo": "OE.5.2.1.2.3",
        "descripcion": "Salida para tomacorriente Bipolar Doble con linea a tierra tipo Schuko (F+N+T), 16A. 250 V. GRADO HOSPITALARIO DADOS C",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "30c87813-6062-4b5e-99d1-a54c4379fada",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.2 SALIDA PARA TOMACORRIENTES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "3edc5ba8-206f-45ca-b9a3-2221126346af",
        "codigo": "OE.5.2.1.2.4",
        "descripcion": "Tomacorriente doble para empotrar con puesta a tierra 15A/220v/60Hz estabilizado",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "30c87813-6062-4b5e-99d1-a54c4379fada",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.2 SALIDA PARA TOMACORRIENTES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "a212dac2-8eb9-4be7-a6ff-4413b491eb9a",
        "codigo": "OE.5.2.1.3",
        "descripcion": "SALIDA PARA TOMACORRIENTES DE FUERZA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "7b1d9b46-d779-49e1-89bf-fbbbb70a4229",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "dba72bb1-2628-4c3f-a5d9-8c64e65388f1",
        "codigo": "OE.5.2.1.3.1",
        "descripcion": "Salida de Fuerza con Caja y tapa Biselada de 100 x 100 x 100 mm( Duchas, equipos biomedicos, etc)",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "a212dac2-8eb9-4be7-a6ff-4413b491eb9a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "395bd826-79a8-45fb-9bdd-d24eabdaa1fb",
        "codigo": "OE.5.2.1.3.2",
        "descripcion": "Salida de Fuerza para electrobomba a prueba de agua",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "a212dac2-8eb9-4be7-a6ff-4413b491eb9a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "e5ab3b82-a61c-4fb4-ba78-7067468bfce5",
        "codigo": "OE.5.2.1.3.3",
        "descripcion": "Salida de fuerza con tomacorriente 25A/220v/60Hz salvo indicacion en plano",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "a212dac2-8eb9-4be7-a6ff-4413b491eb9a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "ee855d05-d2ef-4f6d-a70a-6de95c9d4939",
        "codigo": "OE.5.2.1.3.4",
        "descripcion": "Salida de fuerza para rapiducha electrica, calota o tablero de PVC 4 polos/ ITM 2x25A",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "a212dac2-8eb9-4be7-a6ff-4413b491eb9a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "4702c9d1-e835-4a21-a0b8-4fda68a0479f",
        "codigo": "OE.5.2.1.3.5",
        "descripcion": "Salida de fuerza para aire acondicionado tipo SPLIT",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "a212dac2-8eb9-4be7-a6ff-4413b491eb9a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "a65e2fdc-591e-4eb2-8b77-e774073ee915",
        "codigo": "OE.5.2.1.3.6",
        "descripcion": "Salida de fuerza para compresora de odontologia, calota o tablero de PVC 4 polos/ ITM 2x25A",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "a212dac2-8eb9-4be7-a6ff-4413b491eb9a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "447fe219-1bb0-429d-ac6e-90304e7ce848",
        "codigo": "OE.5.2.1.3.7",
        "descripcion": "Salida de fuerza para sillon odontologico, caja de paso de 100x55x50 mm",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "a212dac2-8eb9-4be7-a6ff-4413b491eb9a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "0bb7ad67-ef73-4cc8-aca1-f1468d3472ca",
        "codigo": "OE.5.2.1.3.8",
        "descripcion": "Salida de fueza para comunicaciones",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "a212dac2-8eb9-4be7-a6ff-4413b491eb9a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "d2c52771-94b4-40fc-ae5c-e3ad890ce6ac",
        "codigo": "OE.5.2.1.3.9",
        "descripcion": "Instalacion para Salida de Fuerza con Caja y tapa Biselada de 100 x 100 x 100 mm( Duchas, equipos biomedicos, etc)",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "a212dac2-8eb9-4be7-a6ff-4413b491eb9a",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "9eab9665-abec-4c44-87e4-f1eb27382390",
        "codigo": "OE.5.2.1.4",
        "descripcion": "SALIDA PARA INTERRUPTOR",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "7b1d9b46-d779-49e1-89bf-fbbbb70a4229",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "0bcfdbbb-912d-40c7-9db6-3872c6958cea",
        "codigo": "OE.5.2.1.4.1",
        "descripcion": "Salida para Interruptor Simple con placa de acero inoxidable Tipo Balancin grado Hospitalario",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "9eab9665-abec-4c44-87e4-f1eb27382390",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.4 SALIDA PARA INTERRUPTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "7814e575-43e4-4e35-a1dd-6d0c8468cfcf",
        "codigo": "OE.5.2.1.4.2",
        "descripcion": "Salida para Interruptor doble con placa de acero inoxidable Tipo Balancin grado Hospitalario",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "9eab9665-abec-4c44-87e4-f1eb27382390",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.4 SALIDA PARA INTERRUPTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "277f335a-47b8-43aa-bf64-6b86befed58f",
        "codigo": "OE.5.2.1.4.3",
        "descripcion": "Salida para Interruptor triple con placa de acero inoxidable Tipo Balancin grado Hospitalario",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "9eab9665-abec-4c44-87e4-f1eb27382390",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.4 SALIDA PARA INTERRUPTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "9e0025ff-e26c-4f04-b4bd-7f863b27eb04",
        "codigo": "OE.5.2.1.4.4",
        "descripcion": "Salida para Interruptor Simple de tres vías con placa de acero (Conmutación) Tipo Balancin grado Hospitalario",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "9eab9665-abec-4c44-87e4-f1eb27382390",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.4 SALIDA PARA INTERRUPTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "645747ff-47f4-4abc-9404-a8bbb520e65c",
        "codigo": "OE.5.2.1.4.5",
        "descripcion": "Interruptor Simple suspendido cabecera de cama (colgado) Tipo Balancin grado Hospitalario",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "9eab9665-abec-4c44-87e4-f1eb27382390",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.4 SALIDA PARA INTERRUPTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "5d071a0c-60f9-4832-b30e-c33e03ae6746",
        "codigo": "OE5.2.1.5",
        "descripcion": "CAJAS DE PASO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "b87b3152-d93e-4686-9410-88c61f297262",
        "codigo": "OE.5.2.1.5.1",
        "descripcion": "Caja de pase F°G° 400x400x75mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "bd34a2d2-0145-4eff-ade7-64ea306d3d98",
        "codigo": "OE.5.2.1.5.2",
        "descripcion": "Caja de pase F°G° 200x200x75mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "7cd6ea4e-6473-455a-aac6-7dea6b3db19d",
        "codigo": "OE.5.2.1.5.3",
        "descripcion": "Caja de pase F°G° 150x150x75mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "64503bb7-6e15-4f6c-b78c-083c600181d6",
        "codigo": "OE.5.2.1.5.4",
        "descripcion": "Caja de pase F°G° 100x100x75mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "a6213291-1cad-4e67-9050-dedcd2a285c9",
        "codigo": "OE.5.2.1.5.5",
        "descripcion": "Caja de pase F°G° 100x55x55mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "2d7f5530-9c71-42ff-a87b-02f575908897",
        "codigo": "OE.5.2.1.5.6",
        "descripcion": "Caja de pase F°G° 150X150X100mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "68997936-eb08-4a8e-9bc0-38e90dfedc9b",
        "codigo": "OE.5.2.1.5.7",
        "descripcion": "Caja de pase F°G° 300X300X100mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "codigo": "OE.5.2.2",
        "descripcion": "CANALIZACIONES, CONDUCTOS O TUBERÍAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "622c428a-9c7d-47c3-b61c-ebd9a596be44",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "3ca6b2ec-4a46-4270-b8fc-f568ef0e21b3",
        "codigo": "OE.5.2.2.1",
        "descripcion": "Tubería para Alimentadores PVC SAP NTP 399.006 DE 100 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "6d78a4bd-3e2b-4693-b818-6e141e44de60",
        "codigo": "OE.5.2.2.2",
        "descripcion": "Tubería para Alimentadores PVC SAP NTP 399.006 DE 35 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "123ea6c9-5f2e-40b4-99ad-edb1374537fb",
        "codigo": "OE.5.2.2.3",
        "descripcion": "Tubería para Alimentadores PVC SAP NTP 399.006 DE 25 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "653b111c-31ea-4108-90b7-35e995d2d202",
        "codigo": "OE.5.2.2.4",
        "descripcion": "Tubería alumbrado y tomacorrientes PVC SAP NTP 399.006 DE 20 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "af106fa8-6fed-4e24-a0ed-0c3ee929e629",
        "codigo": "OE.5.2.2.5",
        "descripcion": "Unión PVC SAP NTP 399.006 DE 100 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "2069fe1b-7e3c-437d-8649-3ed9a4318316",
        "codigo": "OE.5.2.2.6",
        "descripcion": "Unión PVC SAP NTP 399.006 DE 35 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "4f47f739-ec6e-4639-ad85-c3b10a32ffa3",
        "codigo": "OE.5.2.2.7",
        "descripcion": "Unión PVC SAP NTP 399.006 DE 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "47c6b177-2c4a-4001-89ba-72980b0f6434",
        "codigo": "OE.5.2.2.8",
        "descripcion": "Unión PVC SAP NTP 399.006 DE 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "23d4ba1e-e347-49d6-a789-0fef555dae4d",
        "codigo": "OE.5.2.2.9",
        "descripcion": "Curva PVC SAP NTP 399.006 DE 100 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "1af0bb2d-f01f-4fde-922a-71e37ed12533",
        "codigo": "OE.5.2.2.10",
        "descripcion": "Curva PVC SAP NTP 399.006 DE 35mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "71d843d1-37df-4487-989b-0ece4e837bf2",
        "codigo": "OE.5.2.2.11",
        "descripcion": "Curva PVC SAP NTP 399.006 DE 25mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "7aea2178-972f-4cf2-9694-567f45230788",
        "codigo": "OE.5.2.2.12",
        "descripcion": "Curva PVC SAP NTP 399.006 DE 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "801187e0-fe98-4b5a-8660-699bbe7ff038",
        "codigo": "OE.5.2.2.13",
        "descripcion": "Conector PVC SAP NTP 399.006 DE 100mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "b70119b6-c08c-4321-99c9-f3502de440b6",
        "codigo": "OE.5.2.2.14",
        "descripcion": "Conector PVC SAP NTP 399.006 DE 35mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "c489582c-f3a8-4512-b694-90d0a7941beb",
        "codigo": "OE.5.2.2.15",
        "descripcion": "Conector PVC SAP NTP 399.006 DE 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "2bd86e47-71f3-4601-a3d8-5dc088b80057",
        "codigo": "OE.5.2.2.16",
        "descripcion": "Conector PVC SAP NTP 399.006 DE 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "b14e763e-b541-4090-87d0-3e44439dbd3a",
        "codigo": "OE.5.2.2.17",
        "descripcion": "Tubería para Alimentadores PVC SAP NTP 399.006 DE 50 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "4c8b425a-5bec-43a0-b98a-348e82301ff5",
        "codigo": "OE.5.2.2.18",
        "descripcion": "Tubería para Alimentadores PVC SAP NTP 399.006 DE 65 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "50bcd884-057a-4773-87cd-1b7a921167f1",
        "codigo": "OE.5.2.2.19",
        "descripcion": "Tubería para Alimentadores PVC SAP NTP 399.006 DE 80 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "5801952e-f862-4ea1-817f-f23c5fb605cf",
        "codigo": "OE.5.2.2.20",
        "descripcion": "Unión PVC SAP NTP 399.006 DE 50 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "0ff8c0c4-2789-4e47-b6fb-3b6555a6c570",
        "codigo": "OE.5.2.2.21",
        "descripcion": "Unión PVC SAP NTP 399.006 DE 65 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "7568c35e-1ca3-4d11-bc27-240a6911c88b",
        "codigo": "OE.5.2.2.22",
        "descripcion": "Unión PVC SAP NTP 399.006 DE 80 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "b30aba53-42c3-48c0-a692-183007764ad6",
        "codigo": "OE.5.2.2.23",
        "descripcion": "Curva PVC SAP NTP 399.006 DE 50 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "73f56cf4-f45a-4fcf-a931-e5d16026250c",
        "codigo": "OE.5.2.2.24",
        "descripcion": "Curva PVC SAP NTP 399.006 DE 65 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "3d788c4a-cc09-47d1-b287-f7bbebe6a183",
        "codigo": "OE.5.2.2.25",
        "descripcion": "Curva PVC SAP NTP 399.006 DE 80 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "0bdd1cad-02a9-44a6-bab0-67869c01a4d0",
        "codigo": "OE.5.2.2.26",
        "descripcion": "Conector PVC SAP NTP 399.006 DE 50 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "971b9eac-c8e7-4e77-bd03-48a6b780c846",
        "codigo": "OE.5.2.2.27",
        "descripcion": "Conector PVC SAP NTP 399.006 DE 65 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "f5afb60c-bda0-4a21-be7b-5467f08b234f",
        "codigo": "OE.5.2.2.28",
        "descripcion": "Conector PVC SAP NTP 399.006 DE 80 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "e712ebfa-a084-4bc5-8c77-cf79abaf1d25",
        "codigo": "OE.5.2.2.29",
        "descripcion": "Tubería Conduit EMT de 20 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "4ace9127-3758-4d04-babf-541c63ffc36d",
        "codigo": "OE.5.2.2.30",
        "descripcion": "Tubería Conduit EMT de 25 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "0616e66b-f62d-46a4-bb0a-5bbd418a53a8",
        "codigo": "OE.5.2.2.31",
        "descripcion": "Union Conduit EMT de 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "5ea0f97c-b3f2-4bf3-99e3-8bf8dfac8a2b",
        "codigo": "OE.5.2.2.32",
        "descripcion": "Union Conduit ETM de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "5f33109f-287c-48a0-a38a-43a3786489b3",
        "codigo": "OE.5.2.2.33",
        "descripcion": "Curva Conduit EMT de 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "79ea698c-8569-495f-96cb-361cde95f5b9",
        "codigo": "OE.5.2.2.34",
        "descripcion": "Curva Conduit ETM de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "eff24517-8d91-4307-b0ca-5e733d7459fd",
        "codigo": "OE.5.2.2.35",
        "descripcion": "Conector Conduit EMT de 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "c25b19c4-a39e-479b-bfa7-664a4a6935bb",
        "codigo": "OE.5.2.2.36",
        "descripcion": "Conector Conduit EMT de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8aabcb14-f2fb-47b3-938e-c219406227ad",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "f24377c1-b659-43f2-8fd1-adc3949bd989",
        "codigo": "OE.5.2.3",
        "descripcion": "CONDUCTORES Y CABLES DE ENERGÍA EN TUBERÍAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "622c428a-9c7d-47c3-b61c-ebd9a596be44",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "22a0fbc2-8094-499a-a369-d51cd39dc592",
        "codigo": "OE.5.2.3.1",
        "descripcion": "Cable NH-80 DE 4 mm2 ALUMBRADO + TOMACORRIENTES",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "f24377c1-b659-43f2-8fd1-adc3949bd989",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.3 CONDUCTORES Y CABLES DE ENERGÍA EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "51bb3ee7-4a14-4f5f-9770-16945b8d7ec5",
        "codigo": "OE5.2.3.2",
        "descripcion": "Cable Cu NH-80 1 x 6 mm2 Alimentadores Fuerza",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "4df77771-2a1e-42b1-b275-f3d965d70720",
        "codigo": "OE.5.2.3.3",
        "descripcion": "Cable N2XOH de 1 x 6 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "f24377c1-b659-43f2-8fd1-adc3949bd989",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.3 CONDUCTORES Y CABLES DE ENERGÍA EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "68f3e95c-96fb-4f90-be5f-233260e1afb2",
        "codigo": "OE.5.2.3.4",
        "descripcion": "Cable N2XOH de 1 x 10 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "f24377c1-b659-43f2-8fd1-adc3949bd989",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.3 CONDUCTORES Y CABLES DE ENERGÍA EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "2fd7a305-0751-4eca-a8ef-5cd931c89e4a",
        "codigo": "OE.5.2.3.5",
        "descripcion": "Cable N2XOH de 1 x 16 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "f24377c1-b659-43f2-8fd1-adc3949bd989",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.3 CONDUCTORES Y CABLES DE ENERGÍA EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "9871da11-8eeb-4469-b9c2-6df449c9e6ab",
        "codigo": "OE.5.2.3.6",
        "descripcion": "Cable N2XOH de 1 x 25 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "f24377c1-b659-43f2-8fd1-adc3949bd989",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.3 CONDUCTORES Y CABLES DE ENERGÍA EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "99db3828-a3cc-4d36-be88-4637df07734f",
        "codigo": "OE.5.2.3.7",
        "descripcion": "Cable N2XOH de 1 x 70 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "f24377c1-b659-43f2-8fd1-adc3949bd989",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.3 CONDUCTORES Y CABLES DE ENERGÍA EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "8bb72062-d7dc-4690-8ac8-f4bc67ddc45f",
        "codigo": "OE.5.2.3.8",
        "descripcion": "Cable N2XOH de 1 x 120 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "f24377c1-b659-43f2-8fd1-adc3949bd989",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.3 CONDUCTORES Y CABLES DE ENERGÍA EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "6f62e523-fae3-4327-a5e9-6b152e46fb1f",
        "codigo": "OE.5.2.3.9",
        "descripcion": "Cable Cu Desnudo Cableado 1 x 25 mm2",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "f24377c1-b659-43f2-8fd1-adc3949bd989",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.3 CONDUCTORES Y CABLES DE ENERGÍA EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "7e952085-1921-4853-bc04-27f7ffb46a35",
        "codigo": "OE.5.2.3.10",
        "descripcion": "Cable Cu Desnudo Cableado 1 x 50 mm2",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "f24377c1-b659-43f2-8fd1-adc3949bd989",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.3 CONDUCTORES Y CABLES DE ENERGÍA EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "a22e8bba-3655-4dfc-8ec0-2fdc2c003708",
        "codigo": "OE.5.2.3.11",
        "descripcion": "Pruebas Eléctricas ( Aislamiento y Continuidad). DE CIRCUITOS DE ALUMBRADO, TOMACORRIENTES Y ALIMENTADORES",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "f24377c1-b659-43f2-8fd1-adc3949bd989",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.3 CONDUCTORES Y CABLES DE ENERGÍA EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "93b96654-99bd-45df-a659-99dcbcec3e3a",
        "codigo": "OE.5.2.3.12",
        "descripcion": "Cable N2XOH de 1 x 95 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "f24377c1-b659-43f2-8fd1-adc3949bd989",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.3 CONDUCTORES Y CABLES DE ENERGÍA EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "667a6081-f6f2-48e2-a2cc-f94faf55bfb9",
        "codigo": "OE.5.2.3.13",
        "descripcion": "Cable N2XOH de 1 x 50 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "f24377c1-b659-43f2-8fd1-adc3949bd989",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.3 CONDUCTORES Y CABLES DE ENERGÍA EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "f2aea423-4619-4488-9f8f-2b3d066b45fc",
        "codigo": "OE.5.2.3.14",
        "descripcion": "Cable N2XOH de 1 x 35 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "f24377c1-b659-43f2-8fd1-adc3949bd989",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.3 CONDUCTORES Y CABLES DE ENERGÍA EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "bba883c4-4b9f-434a-a32e-b406af03eb2a",
        "codigo": "OE.5.2.4",
        "descripcion": "SISTEMAS DE CONDUCTOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "622c428a-9c7d-47c3-b61c-ebd9a596be44",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "da41a821-8690-4e24-b16b-71d582977ce1",
        "codigo": "OE.5.2.4.1",
        "descripcion": "Canaleta para conductor enterrado 0.40 x 0.60 m",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "bba883c4-4b9f-434a-a32e-b406af03eb2a",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.4 SISTEMAS DE CONDUCTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "5aaf77c1-2e86-4672-9a4b-07a0c8c689fb",
        "codigo": "OE.5.2.4.2",
        "descripcion": "Buzon Electroducto de Concreto Armado con tapa 0.60 x0.60 x 0.60m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "bba883c4-4b9f-434a-a32e-b406af03eb2a",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.4 SISTEMAS DE CONDUCTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "b3460249-1ccb-448c-94e8-d84594ff3cba",
        "codigo": "OE.5.2.4.3",
        "descripcion": "Canal para tubería enterrada de 0.50X0.60m",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "bba883c4-4b9f-434a-a32e-b406af03eb2a",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.4 SISTEMAS DE CONDUCTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "9315ec3c-9957-45a7-87ee-bb10135290d8",
        "codigo": "OE.5.2.4.4",
        "descripcion": "Buzón electroducto de concreto con tapa 0.80x0.80x1.10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "bba883c4-4b9f-434a-a32e-b406af03eb2a",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.4 SISTEMAS DE CONDUCTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "0223ec36-4e5a-44d7-9d8a-555e2023c4c3",
        "codigo": "OE.5.2.4.5",
        "descripcion": "Buzón electroducto de concreto con tapa 0.80x0.60x0.80",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "bba883c4-4b9f-434a-a32e-b406af03eb2a",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.4 SISTEMAS DE CONDUCTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "8c9f48a6-1801-4fd8-af33-b49a8bb362b7",
        "codigo": "OE.5.2.6",
        "descripcion": "TABLEROS PRINCIPALES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "622c428a-9c7d-47c3-b61c-ebd9a596be44",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "5ec6a3d7-0e80-4ab6-889f-29df27855a98",
        "codigo": "OE.5.2.6.1",
        "descripcion": "TABLERO PRINCIPAL DE F°G° AUTOSOPORTADO TRIFASICO ( 380 / 220 VOLTIOS), PARA 15 PROTECCIONES DE CAJA MOLDEADA TIPO TETRA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8c9f48a6-1801-4fd8-af33-b49a8bb362b7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.6 TABLEROS PRINCIPALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "f3ad5977-272d-47a3-9048-dc099f07732c",
        "codigo": "OE.5.2.6.2",
        "descripcion": "TABLERO AUTOSOPORTADO GENERAL TG",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "8c9f48a6-1801-4fd8-af33-b49a8bb362b7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.6 TABLEROS PRINCIPALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "codigo": "OE.5.2.7",
        "descripcion": "TABLEROS DE DISTRIBUCION",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "622c428a-9c7d-47c3-b61c-ebd9a596be44",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "ef5eacad-fdb3-4bd8-93a7-b907afb129ba",
        "codigo": "OE.5.2.7.1",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-01 (36 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "2bd5ac24-d2b2-4013-a835-721b95839e9a",
        "codigo": "OE.5.2.7.2",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-02 (48 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "5d08278b-fab9-40f3-8a0b-5afa0712a36f",
        "codigo": "OE.5.2.7.3",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-03 (48 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "452abfaf-aa62-4ebe-bcd0-d8d1351e3579",
        "codigo": "OE.5.2.7.4",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-04 (42 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "548295a5-1f6c-4b30-8980-671a2db13509",
        "codigo": "OE.5.2.7.5",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-05 ( 42 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "890d6782-9012-44ee-8c46-fc5d076ffb0c",
        "codigo": "OE.5.2.7.6",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-06 (36 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "8651f68e-0b2e-44bf-a645-a1bc5abc2689",
        "codigo": "OE.5.2.7.7",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-07 ( 8 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "64a1589a-ff81-4048-abc3-b8fa26804af2",
        "codigo": "OE.5.2.7.8",
        "descripcion": "TABLERO DE DISTRIBUCIÓN T- AE ( AREAS EXTERNAS) ( 12 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "8567eb63-fbaf-4853-81ca-025787a8b7e4",
        "codigo": "OE.5.2.7.9",
        "descripcion": "TABLERO DE DISTRIBUCIÓN T- AL ( ALMACENES) ( 12 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "5136000f-788c-4f58-bd64-1fb08e47948a",
        "codigo": "OE.5.2.7.10",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-AC ( 60 polos) (TD08 AREAS COMUNES)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "5b5f6034-0478-4719-b16a-c3d9b5cdafd8",
        "codigo": "OE.5.2.7.11",
        "descripcion": "TABLERO DE DISTRIBUCIÓN T- CA ( CONSULTA ADMISION) ( 8 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "73a5aa68-0220-4b12-a92c-399b6465eefd",
        "codigo": "OE.5.2.7.12",
        "descripcion": "TABLERO DE DISTRIBUCIÓN T- CG ( CASETA DE GRUPO Y SED) ( 12 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "d6fe3d63-b415-4124-ba92-5826072c0c71",
        "codigo": "OE.5.2.7.13",
        "descripcion": "TABLERO DE DISTRIBUCIÓN T- E ( ESTABILIZADO) ( 18 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "c14ca2bd-188a-4b4c-87de-2dc99babaaca",
        "codigo": "OE.5.2.7.14",
        "descripcion": "TABLERO DE DISTRIBUCIÓN T- BOM ( 24 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "9115eb0a-3cbb-48c7-8e54-7a29eee65e41",
        "codigo": "OE.5.2.7.15",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-CF1 ( 48 polos)( CARGAS DE FUERZAS 01)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "6c06b147-5f12-41b4-8021-cbfc2348aaf2",
        "codigo": "OE.5.2.7.16",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-CF2 ( 60 polos)( CARGAS DE FUERZAS 02)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "3d950cbe-3866-4a8b-931d-5a0c6da154e2",
        "codigo": "OE.5.2.7.17",
        "descripcion": "Termimales Para Termomagnéticos Para Conductores De 4, 6 10, 16,25, 35, 50, 70 y 120 mm2",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "8a95a222-e530-4620-94d8-cea72a6c6fee",
        "codigo": "OE.5.2.7.18",
        "descripcion": "Marcadores de Fase Para Conductores",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "48c5db47-67b1-4c29-a164-87c95b3110e5",
        "codigo": "OE.5.2.7.19",
        "descripcion": "Tapas de Reserva para Tableros",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "c519b1b9-5f78-49ab-b32e-f7164b2774a5",
        "codigo": "OE.5.2.7.20",
        "descripcion": "Prueba de aislamiento de tableros",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "23487d7a-53fb-40f1-a385-fda6f0666003",
        "codigo": "OE.5.2.7.21",
        "descripcion": "Laminas de señalizacion contra riesgo electrico para tableros",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "7cdf2d78-d60c-47ed-bc03-10f50bca8d65",
        "codigo": "OE.5.2.7.22",
        "descripcion": "Tablero de Distribucion TD-01",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "51b09979-3df7-43ee-a505-a1b00ca73ab5",
        "codigo": "OE.5.2.7.23",
        "descripcion": "Tablero de Distribucion TD-02",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "262ac36a-7076-40a1-98e5-a95139b352c4",
        "codigo": "OE.5.2.7.24",
        "descripcion": "Tablero de Distribucion TD-03",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "40a529d8-a56d-4093-a6f6-25be8b4ed4b0",
        "codigo": "OE.5.2.7.25",
        "descripcion": "Tablero de Distribucion TD-04",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "5f82ac7e-f5da-454d-975a-163ce0dac4fd",
        "codigo": "OE.5.2.7.26",
        "descripcion": "Tablero de Distribucion TD-05",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "597bf11e-b6de-4065-93f0-3baa8ec81d1c",
        "codigo": "OE.5.2.7.27",
        "descripcion": "Tablero de Distribucion TD-06",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "6c922a93-e617-474e-a7ef-9524ee62d18b",
        "codigo": "OE.5.2.7.28",
        "descripcion": "Tablero de Distribucion TD-07",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "caabc666-48a9-4bd0-ac9c-58d58804ed17",
        "codigo": "OE.5.2.7.29",
        "descripcion": "Tablero de Distribucion TD-08",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "001efd6a-685c-48a9-91bb-0a5ab8dec5a4",
        "codigo": "OE.5.2.7.30",
        "descripcion": "Tablero de Distribucion TD-09",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "61404f46-3bdf-463b-8afa-a946d6e34767",
        "codigo": "OE.5.2.7.31",
        "descripcion": "Tablero de Distribucion TD-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "66c34ea0-618f-4ff5-8412-ae30ea6e9cbb",
        "codigo": "OE.5.2.7.32",
        "descripcion": "Tablero de Distribucion TD-11",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "3c29d9e8-2a45-4559-8c99-902cb0c802c2",
        "codigo": "OE.5.2.7.33",
        "descripcion": "Tablero de Distribucion TD-12",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "7d9bd428-ad31-427b-9d81-969b21fd2cad",
        "codigo": "OE.5.2.7.34",
        "descripcion": "Tablero de Distribucion TD-13",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "df679077-dfa5-4747-9764-e99c3706aff4",
        "codigo": "OE.5.2.7.35",
        "descripcion": "Tablero de Distribucion TD-14",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "5eab53e0-494a-4900-8497-eae6d40d3721",
        "codigo": "OE.5.2.7.36",
        "descripcion": "Tablero de Sub Distribucion TD-14-1",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "02f428ed-b81b-4232-9247-3c1903165b25",
        "codigo": "OE.5.2.7.37",
        "descripcion": "Tablero de Distribucion Estabilizado TDE-01",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "dcff3d3e-8f4d-4cb2-8860-637141bc52b6",
        "codigo": "OE.5.2.7.38",
        "descripcion": "Tablero de Distribucion Estabilizado TDE-02",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "6001f790-5f48-44bc-997b-35cfbaed1995",
        "codigo": "OE.5.2.7.39",
        "descripcion": "Tablero Bypass Comunicaciones TDC-01",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "fddb30a0-ade8-4b64-b418-2a0903c834c3",
        "codigo": "OE.5.2.7.40",
        "descripcion": "Tablero de Distribucion TD-AA-01",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "e3e66ddb-fbab-4cbd-b228-219047eb4279",
        "codigo": "OE.5.2.7.41",
        "descripcion": "Tablero de Distribucion TD-AA-02",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1bea55bb-070b-4463-8d0a-976bcd02c7dd",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "codigo": "OE.5.2.8",
        "descripcion": "DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "622c428a-9c7d-47c3-b61c-ebd9a596be44",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "78defb94-8cbe-450c-8d38-16a35c9a75bf",
        "codigo": "OE.5.2.8.1",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 350 A, 30 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "2d8615d4-df51-4d1e-8a73-59fd79630198",
        "codigo": "OE.5.2.8.2",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 140 A, 30 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "2d601a84-28eb-4e50-9b32-d32d1c2ce364",
        "codigo": "OE.5.2.8.3",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 120 A, 30 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "9ea28b76-7489-46c5-89eb-1e890edb833a",
        "codigo": "OE.5.2.8.4",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 80 A, 20 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "a4286663-3145-4bf1-b719-50244c8cc567",
        "codigo": "OE.5.2.8.5",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 70 A, 20 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "29114f77-9bf6-4297-951f-36cf0be609b1",
        "codigo": "OE.5.2.8.6",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 60 A, 20 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "9797170c-fe36-4ab3-af97-4bd674aeebd6",
        "codigo": "OE.5.2.8.7",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 50 A, 20 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "e99d2f21-d106-45da-8a83-25543922c006",
        "codigo": "OE.5.2.8.8",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 40 A, 20 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "b8de9009-3c5b-400a-a2b6-ba9620f898dd",
        "codigo": "OE.5.2.8.9",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 30 A, 20 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "6cbbcd12-9780-46f6-86ad-6588a0186689",
        "codigo": "OE.5.2.8.10",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 20 A, 20 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "3e7256ae-5058-4e50-9926-fa7d6a8024b7",
        "codigo": "OE.5.2.8.11",
        "descripcion": "Interruptor Termomagnetico Tipo Riel Bipolar 2 x 30 A, 10 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "a5057d2c-d933-4276-9979-df869a13fecd",
        "codigo": "OE.5.2.8.12",
        "descripcion": "Interruptor Termomagnético Tipo Riel Bipolar 2 X 20 A 10 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "7bf5c45c-7f7f-4b13-9a8e-320fdb323256",
        "codigo": "OE.5.2.8.13",
        "descripcion": "Interruptor Termomagnético Tipo Riel Bipolar 2 X 16 A 10 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "cd26ded8-fcf0-4312-8d65-ee05267289b9",
        "codigo": "OE.5.2.8.14",
        "descripcion": "Interruptor diferencial 2 x 25 A - 30 miliamperios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "1b6bfbe9-0c2d-4651-93ac-4172a9e8f567",
        "codigo": "OE.5.2.8.15",
        "descripcion": "Contactor monofasico de 20 Amperios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "20085786-7c97-405e-a2e2-29139ced9244",
        "codigo": "OE.5.2.8.16",
        "descripcion": "Reloj Horario",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "797fa4ca-b5bf-4218-8722-a2a4f371782a",
        "codigo": "OE.5.2.8.17",
        "descripcion": "Prueba de aislamiento de tableros",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "aebb010d-dac1-4add-a1f6-0ac150e6ec84",
        "codigo": "OE.5.2.8.18",
        "descripcion": "Prueba de balanceo de carga",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "90fa0f54-059a-4351-907b-030e031f3ead",
        "codigo": "OE.5.2.8.19",
        "descripcion": "Interruptor Termomagnético tipo caja moldeada 3X200A / 220V / 60Hz / 25KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "5d05d5ef-6c3b-497e-878e-ab7935994908",
        "codigo": "OE.5.2.8.20",
        "descripcion": "Interruptor Termomagnético tipo caja moldeada 3X160A / 220V / 60Hz / 16KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "d37cbc28-325c-480c-9d85-076e304864e0",
        "codigo": "OE.5.2.8.21",
        "descripcion": "Interruptor Termomagnético tipo caja moldeada 3X80A / 220V / 60Hz / 16KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "9c980435-39cc-44c7-ace4-8b8b827644a8",
        "codigo": "OE.5.2.8.22",
        "descripcion": "Interruptor Termomagnético tipo caja moldeada 3X63A / 220V / 60Hz / 16KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "0b364d7a-179f-48a8-b839-0d3aae66c8ff",
        "codigo": "OE.5.2.8.23",
        "descripcion": "Interruptor Termomagnético tipo caja moldeada 3X40A / 220V / 60Hz / 16KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "50ba68d2-ae9b-452b-888b-c2ab7f4242dc",
        "codigo": "OE.5.2.8.24",
        "descripcion": "Interruptor Termomagnético para riel DIN 3X32A / 220V / 60Hz / 10KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "652b13b9-f274-49a2-bf04-58d6aec72913",
        "codigo": "OE.5.2.8.25",
        "descripcion": "Interruptor Termomagnético para riel DIN 3X50A / 220V / 60Hz / 10KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "f38a5230-8bf9-4263-af40-ba5f0112bd40",
        "codigo": "OE.5.2.8.26",
        "descripcion": "Dispositivo de proteccion contra sobre tension",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "f8d81afe-e7cc-4f93-a9fc-24f50e6434d0",
        "codigo": "OE.5.2.8.27",
        "descripcion": "Interrruptor Termomagnetico para riel DIN 3x40A/220V/60Hz/10KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c54b2eeb-0779-41a7-af3d-bf72d5fbcbb8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "3a3952d1-57e6-46fd-bb10-79fbf90b31af",
        "codigo": "OE.5.3",
        "descripcion": "SUMINISTRO E INSTALACION DE POSTES DE CAC 8m",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "96c5774b-4f7d-4538-8de0-6b9ba5ba5205",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "b9460fe5-a90a-40aa-b4cd-f5a9dbf3ef8c",
        "codigo": "OE.5.3.1",
        "descripcion": "Suministro e Instalación de Postes de CAC DE 8m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "3a3952d1-57e6-46fd-bb10-79fbf90b31af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.3 SUMINISTRO E INSTALACION DE POSTES DE CAC 8m"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "393c1b87-c7d2-441f-978a-9ef157ef8f18",
        "codigo": "OE.5.4",
        "descripcion": "INSTALACION DE PARARRAYOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "96c5774b-4f7d-4538-8de0-6b9ba5ba5205",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "6782fb6a-465f-457f-b86f-8ffc9623f717",
        "codigo": "OE.5.4.1",
        "descripcion": "Pararrayo TIPO PDC 3,3 RADIO 65m, Nivel III, C/Disposit. de Cebado.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "393c1b87-c7d2-441f-978a-9ef157ef8f18",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.4 INSTALACION DE PARARRAYOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "aa2416dd-6e4a-4ae8-bb14-ee5821053ffd",
        "codigo": "OE.5.4.2",
        "descripcion": "Sistema de protección contra descargas eléctricas",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "393c1b87-c7d2-441f-978a-9ef157ef8f18",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.4 INSTALACION DE PARARRAYOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "5c3c375b-60aa-4d09-b097-4a31770ad8f8",
        "codigo": "OE.5.5",
        "descripcion": "INSTALACIÓN DEL SISTEMA DE PUESTA A TIERRA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "96c5774b-4f7d-4538-8de0-6b9ba5ba5205",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "5525fe6e-fc83-4cdc-898a-43303ff6e39c",
        "codigo": "OE.5.5.1",
        "descripcion": "Pozo puesta a tierra",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5c3c375b-60aa-4d09-b097-4a31770ad8f8",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.5 INSTALACIÓN DEL SISTEMA DE PUESTA A TIERRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "d9ab4888-37e4-430d-af22-911116f36eaa",
        "codigo": "OE.5.5.2",
        "descripcion": "Pruebas Eléctricas ( Resistencia de Puesta a Tierra)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5c3c375b-60aa-4d09-b097-4a31770ad8f8",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.5 INSTALACIÓN DEL SISTEMA DE PUESTA A TIERRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "add07154-5f51-445b-87e7-e85d904278a7",
        "codigo": "OE.5.5.3",
        "descripcion": "Puesta a tierra",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5c3c375b-60aa-4d09-b097-4a31770ad8f8",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.5 INSTALACIÓN DEL SISTEMA DE PUESTA A TIERRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "18b7a5b7-4276-49d3-9c6e-3e5c3737579c",
        "codigo": "OE.5.6",
        "descripcion": "ARTEFACTOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "96c5774b-4f7d-4538-8de0-6b9ba5ba5205",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "codigo": "OE.5.6.1",
        "descripcion": "LUMINARIAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "18b7a5b7-4276-49d3-9c6e-3e5c3737579c",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "b871ad8c-df4b-4f5d-a93c-5f130f8a4382",
        "codigo": "OE.5.6.1.1",
        "descripcion": "LUMINARIA TIPO DOWNLIGHT DE 2X18W, CODIGO DE PROTECCION IP 44, ADOSADO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "88247fa3-3d43-42cc-a44c-67368a6d8ac2",
        "codigo": "OE.5.6.1.2",
        "descripcion": "SPOT LIGHT DECORATIVO DLD 1x35W 220V, PARA ADOSAR",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "311b7894-ba1b-4924-a653-9ae23eb5a683",
        "codigo": "OE.5.6.1.3",
        "descripcion": "BRAQUETE DE ALUMBRADO DE CABECERA DE CAMA 2x20W, PARA ADOSAR",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "d76ac906-476a-44e5-bfbb-fe4c0b6f65bc",
        "codigo": "OE.5.6.1.4",
        "descripcion": "BRAQUETE DE ALUMBRADO PARA PASILLOS RSP 2X18W, PARA ADOSAR",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "c39b0af0-712c-4bdc-9407-34c5d1471064",
        "codigo": "OE.5.6.1.5",
        "descripcion": "LUMINARIA HERMETICA CON TUBO LED CON DIFUSOR DE 2x36W (OFICINAS Y ZONAS DE ACCESO DEL PERSONAL) PARA ADOSAR",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "1749b651-87ee-413b-884b-121023976f20",
        "codigo": "OE.5.6.1.6",
        "descripcion": "LUMINARIA PARA ADOSAR CON TUBO LED DE 2x36W Y BALASTO ELECTRONICO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "d1931325-511f-4195-ae1c-c5a3102727d3",
        "codigo": "OE.5.6.1.7",
        "descripcion": "LÁMPARA GERMICIDA ULTRAVIOLETA 30W, 220V 60HZ CON BALASTRO ELECTRÓNICO PARA ADOSAR",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "b97010e9-4700-4109-b20a-ad3a4b4ddb60",
        "codigo": "OE.5.6.1.8",
        "descripcion": "LUMINARIA PARA ALUMBRADO DE GUARDIA CON LAMP. AHORRADORAS DE 11W, 220V, 60Hz PARA ADOSAR",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "b721306a-8b7e-468b-a6f1-7afdbed9b9d7",
        "codigo": "OE.5.6.1.9",
        "descripcion": "LAMPARA CIALITICA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "f7333b13-05f1-4918-956b-f3b71b23a51f",
        "codigo": "OE.5.6.1.10",
        "descripcion": "LUMINARIA LED DE ALUMBRADO PUBLICO DE 150W (ZONA EXTERIOR DE AMBULANCIAS)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "d8d552fa-380c-417c-b0f9-5e59d496e0b9",
        "codigo": "OE.5.6.1.11",
        "descripcion": "LUZ DE EMERGENCIA DE BATERÍA TIPO LED 35 W PARA ADOSAR IP 42, IK 07",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "bb2087b9-c3ac-428c-8ccd-224258514cb4",
        "codigo": "OE.5.6.1.12",
        "descripcion": "Prueba de medición del nivel de iluminación en interiores y exteriores",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "a328455d-bb29-40e8-a202-9d2d637ae3a1",
        "codigo": "OE.5.6.1.13",
        "descripcion": "Luminaria tipo PANEL LED para empotrar, 60x60cm, 36w, 220v, 60Hz.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "bcf2da44-5642-40ce-97a3-f3fb6e9a7288",
        "codigo": "OE.5.6.1.14",
        "descripcion": "Luminaria tipo PANEL LED DOWNLIGHT para empotrar circular 15w, 220v, 60Hz",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "bc759ee0-0439-4555-be19-e2bfd821664a",
        "codigo": "OE.5.6.1.15",
        "descripcion": "Luminaria tipo ESTANCA LED para adosar 36w, 220v, 60Hz",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "0a8c050b-2c13-4c04-816b-65536fde1b86",
        "codigo": "OE.5.6.1.16",
        "descripcion": "Luminaria compacta prismática lineal 33w, 220v, 60Hz",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "aee6b455-a96b-4b8f-aae7-37153c5b07b8",
        "codigo": "OE.5.6.1.17",
        "descripcion": "Luminaria tipo PLAFON de 18w, 220v, 60Hz",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "7ec5d550-71c1-4326-b406-e5e71fe4eb61",
        "codigo": "OE.5.6.1.18",
        "descripcion": "Luminaria tipo CABECERA LED de 18w, 220v, 60Hz",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "cb8f579f-a118-49f3-a66f-32fe8a6f83bd",
        "codigo": "OE.5.6.1.19",
        "descripcion": "Equipo de iluminación de emergencia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "a12c0114-37f3-4d0e-afbd-d3cfd235c7e2",
        "codigo": "OE.5.6.1.20",
        "descripcion": "Luminaria ORNAMENTAL tipo ISLA de 60W, 220v, 60Hz",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "3ce95fde-7749-42c2-af09-02d1812dbeff",
        "codigo": "OE.5.6.1.21",
        "descripcion": "Lampara de examen clinico LED tipo cuello de ganso",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "77718970-d0c7-42be-9c09-94dd43bd445c",
        "codigo": "OE.5.6.1.22",
        "descripcion": "Lampara Spot Dicroico de 6 W",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "a31bcc72-31fc-4405-bc21-3c91ea116660",
        "codigo": "OE.5.6.1.23",
        "descripcion": "Braquet  Reflector de 13 W",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "727ccd1f-cc39-4904-a910-380980b6b9d7",
        "codigo": "OE.5.6.1.24",
        "descripcion": "Braquet de Pared exterior E27",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "6f0a43bb-e5be-405b-ab92-0ae0058fdbcc",
        "codigo": "OE.5.6.1.25",
        "descripcion": "Luminaria Tipo Aplique Led 20 W",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5837dc47-4755-4e48-91fb-78a39987ddd9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "0799649b-1582-41a4-9a10-22ea1187ccd6",
        "codigo": "OE.5.7",
        "descripcion": "EQUIPAMIENTO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "96c5774b-4f7d-4538-8de0-6b9ba5ba5205",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "abad021b-0597-447e-80dd-85956784f2cb",
        "codigo": "OE.5.7.1",
        "descripcion": "ELECTROBOMBAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "0799649b-1582-41a4-9a10-22ea1187ccd6",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "629fccaa-8722-41eb-955f-0dd033d843c2",
        "codigo": "OE.5.7.1.1",
        "descripcion": "SUMINISTRO E INSTALACIÓN DE ELECTROBOMBAS 3.4 H.P.-3Ø-380v.-60cps, incluye tablero de protección IP66 y sistema de automatización",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "abad021b-0597-447e-80dd-85956784f2cb",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.1 ELECTROBOMBAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "4e68dca7-f328-4557-a14b-0f749e4a5280",
        "codigo": "OE.5.7.1.2",
        "descripcion": "SUMINISTRO E INSTALACIÓN DE ELECTROBOMBAS SUMERGIBLES 3H.P.-3Ø-220v.-60cps, incluye tablero de protección IP66 y sistema de automatización",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "abad021b-0597-447e-80dd-85956784f2cb",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.1 ELECTROBOMBAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "1f2ede99-a73b-43e4-881e-e77101a5778e",
        "codigo": "OE.5.7.2",
        "descripcion": "EQUIPOS VARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "0799649b-1582-41a4-9a10-22ea1187ccd6",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "8772bb6b-474e-41a6-be21-06947559cec5",
        "codigo": "OE.5.7.2.1",
        "descripcion": "GRUPO ELECTROGENO de 140KVA prime, salida 380/220V, 1800RPM, 60HZ, incl Accesorios y Tanque de Comb.",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "1f2ede99-a73b-43e4-881e-e77101a5778e",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.2 EQUIPOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "ba0d72c2-1c31-4131-a732-5c8b83c28278",
        "codigo": "OE.5.7.2.2",
        "descripcion": "UPS TRIFASICO 20 KVA, 2 BATERIAS INTERNAS, INCLUYE TRANSFORMADOR DE AISLAMIENTO Y AUTOTRANSFORMADOR TRIFASICO 380/220V.",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "1f2ede99-a73b-43e4-881e-e77101a5778e",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.2 EQUIPOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "4b7d86f4-3241-4737-a8a7-90374f45338c",
        "codigo": "OE.5.7.2.3",
        "descripcion": "Suministro e instalacion del Grupo electrogeno y tablero de transferencia",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "1f2ede99-a73b-43e4-881e-e77101a5778e",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.2 EQUIPOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "ac4403de-9597-465d-9aa9-34db5d7521ad",
        "codigo": "OE.5.7.2.4",
        "descripcion": "Sistemas de alimentación ininterrumpida 20 KVA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1f2ede99-a73b-43e4-881e-e77101a5778e",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.2 EQUIPOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "21343d11-1076-424f-bb3d-f458d6ce50f4",
        "codigo": "OE.5.7.2.5",
        "descripcion": "Sistemas de alimentación ininterrumpida 6 KVA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1f2ede99-a73b-43e4-881e-e77101a5778e",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.2 EQUIPOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "2f1e8d1f-bb61-40b4-bf8e-5d5118474c22",
        "codigo": "OE.5.7.2.6",
        "descripcion": "Transformador de aislamiento de 20 KVA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1f2ede99-a73b-43e4-881e-e77101a5778e",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.2 EQUIPOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "660c088f-6853-423b-8ad0-50f82758b782",
        "codigo": "OE.5.7.2.7",
        "descripcion": "Transformador de aislamiento de 6 KVA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1f2ede99-a73b-43e4-881e-e77101a5778e",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.2 EQUIPOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "888aad2c-694f-4cd3-9494-86575e71bb30",
        "codigo": "OE.5.7.2.8",
        "descripcion": "Instalacion del sistema de respaldo de alimentacion ininterrumpida de 20KVA y de 6 KVA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "1f2ede99-a73b-43e4-881e-e77101a5778e",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.2 EQUIPOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "8944123f-b3f2-4583-aa5f-05e13525f461",
        "codigo": "OE.5.8",
        "descripcion": "INSTALACIONES INDUSTRIALES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "96c5774b-4f7d-4538-8de0-6b9ba5ba5205",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "40c24ce8-d339-417b-b8e1-cfb980fcc5a2",
        "codigo": "OE.5.8.1",
        "descripcion": "BANDEJAS ELECTRICAS DE 300x100mm",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "8944123f-b3f2-4583-aa5f-05e13525f461",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "8b0e0c42-cc7a-4f72-b0d8-e85383a67f6b",
        "codigo": "OE.5.8.1.1",
        "descripcion": "Bandeja de rejilla de acero electrosoldada de 300x100 mm/ 3m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "40c24ce8-d339-417b-b8e1-cfb980fcc5a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.8.1 BANDEJAS ELECTRICAS DE 300x100mm"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "c72c8c1b-3efc-4ce0-8e20-6330fa52f952",
        "codigo": "OE.5.8.1.2",
        "descripcion": "Accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "40c24ce8-d339-417b-b8e1-cfb980fcc5a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.8.1 BANDEJAS ELECTRICAS DE 300x100mm"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "f3101cfd-919b-4069-a08a-f556d28c6dd8",
        "codigo": "OE.5.8.1.3",
        "descripcion": "Soporte INSTA-FIX para suspensión en trapecio DE 370X80mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "40c24ce8-d339-417b-b8e1-cfb980fcc5a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.8.1 BANDEJAS ELECTRICAS DE 300x100mm"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "1912fe46-69a3-4e33-bbc8-fc219d653ee1",
        "codigo": "OE.5.8.1.4",
        "descripcion": "Soportes de Distanciador para fijar en pared de 300mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "40c24ce8-d339-417b-b8e1-cfb980fcc5a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.8.1 BANDEJAS ELECTRICAS DE 300x100mm"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "26fc3e8f-8b10-4025-909f-1d6a1b158e55",
        "codigo": "OE.5.6.16",
        "descripcion": "SISTEMA DE VENTILACION MECANICA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "18b7a5b7-4276-49d3-9c6e-3e5c3737579c",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "defd0c76-c039-40c3-8570-539d592c6308",
        "codigo": "OE.5.6.16.1",
        "descripcion": "SISTEMA DE INYECCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DEECOGRAFÍAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "26fc3e8f-8b10-4025-909f-1d6a1b158e55",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "537742d3-f952-47bb-afe4-067268bb63da",
        "codigo": "OE.5.6.16.1.1",
        "descripcion": "VENTILADOR HELICOCENTRIFUGO( 2410 RPM - 30W - 220 V - 1Ø - 60 HZ - 85 CFM - 3.7 MMCA - 55 DB -Paprox. 1.5 Kg)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "defd0c76-c039-40c3-8570-539d592c6308",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.1 SISTEMA DE INYECCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DEECOGRAFÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "9067a957-c62c-4068-9cdc-4217ebd217b8",
        "codigo": "OE.5.6.16.1.2",
        "descripcion": "SUMINISTRO E INSTALACION DE DUCTOS DE PLANCHA GALVANIZADA. INC ACCESORIOS, DAMPERS DE REGULACION, ANCLAJES.",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "defd0c76-c039-40c3-8570-539d592c6308",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.1 SISTEMA DE INYECCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DEECOGRAFÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "bf7dfe72-e160-4e46-b300-7ad2c78f48a0",
        "codigo": "OE.5.6.16.1.3",
        "descripcion": "SUMINISTRO E INSTALACION DE REJILLA DE INYECCIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "defd0c76-c039-40c3-8570-539d592c6308",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.1 SISTEMA DE INYECCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DEECOGRAFÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "e34e2f40-2314-44f0-b8b9-fcbd457142ed",
        "codigo": "OE.5.6.16.1.4",
        "descripcion": "CAJA PORTAFILTROS 154x319x154mm, INC. FILTROS, ACCESORIOS, ANCLAJES.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "defd0c76-c039-40c3-8570-539d592c6308",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.1 SISTEMA DE INYECCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DEECOGRAFÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "7a5459b6-c5e6-4ce1-ba02-5d555627c6ef",
        "codigo": "OE.5.6.16.2",
        "descripcion": "SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DE ECOGRAFÍAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "26fc3e8f-8b10-4025-909f-1d6a1b158e55",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "6654c9ed-c729-4bab-a169-a77dd5d1c2fc",
        "codigo": "OE.5.6.16.2.1",
        "descripcion": "EXTRACTOR AXIAL DIRECTO ( 2342 RPM - 38W - 220V - 1Ø-60 HZ - 102 CFM -61 DB -Paprox. 5.4 Kg)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7a5459b6-c5e6-4ce1-ba02-5d555627c6ef",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.2 SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DE ECOGRAFÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "124c61bd-660f-42d5-b245-adbc4f2199e2",
        "codigo": "OE.5.6.16.2.2",
        "descripcion": "SUMINISTRO E INSTALACION DE DUCTOS DE PLANCHA GALVANIZADA. INC ACCESORIOS, DAMPERS DE REGULACION, ANCLAJES.",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "7a5459b6-c5e6-4ce1-ba02-5d555627c6ef",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.2 SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DE ECOGRAFÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "bc44a4f7-d4dc-4e7d-a26f-0a83aad074a3",
        "codigo": "OE.5.6.16.2.3",
        "descripcion": "SUMINISTRO E INSTALACION DE REJILLA DE EXTRACCIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7a5459b6-c5e6-4ce1-ba02-5d555627c6ef",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.2 SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DE ECOGRAFÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "4317ead9-d25d-4bbb-9c2f-247e8b58ce1f",
        "codigo": "OE.5.6.16.2.4",
        "descripcion": "CAJA PORTAFILTROS 154x319x154mm, INC. FILTROS, ACCESORIOS, ANCLAJES.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7a5459b6-c5e6-4ce1-ba02-5d555627c6ef",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.2 SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DE ECOGRAFÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "a5e2484e-572f-4439-8bd6-73cd3e49471b",
        "codigo": "OE.5.6.16.3",
        "descripcion": "SISTEMA DE INYECCIÓN DE AIRE EN LABORATORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "26fc3e8f-8b10-4025-909f-1d6a1b158e55",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "b394043d-06fd-489d-be01-65a7770c1dde",
        "codigo": "OE.5.6.16.3.1",
        "descripcion": "VENTILADOR HELICOCENTRIFUGO( 2417 RPM - 30W - 220 V - 1Ø - 60 HZ - 77 CFM - 3.46 MMCA - 55 DB -Paprox. 1.5 Kg)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "a5e2484e-572f-4439-8bd6-73cd3e49471b",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.3 SISTEMA DE INYECCIÓN DE AIRE EN LABORATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "e7a0ec0e-540a-4ba1-bad0-f9bacc19a71a",
        "codigo": "OE.5.6.16.3.2",
        "descripcion": "SUMINISTRO E INSTALACION DE DUCTOS DE PLANCHA GALVANIZADA. INC ACCESORIOS, DAMPERS DE REGULACION, ANCLAJES.",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "a5e2484e-572f-4439-8bd6-73cd3e49471b",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.3 SISTEMA DE INYECCIÓN DE AIRE EN LABORATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "baa98003-bafb-47ae-b46b-29373a92170c",
        "codigo": "OE.5.6.16.3.3",
        "descripcion": "SUMINISTRO E INSTALACION DE REJILLA DE INYECCIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "a5e2484e-572f-4439-8bd6-73cd3e49471b",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.3 SISTEMA DE INYECCIÓN DE AIRE EN LABORATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "82652dca-0d65-426e-8779-549f429c2000",
        "codigo": "OE.5.6.16.3.4",
        "descripcion": "CAJA PORTAFILTROS 154x319x154mm, INC. FILTROS, ACCESORIOS, ANCLAJES.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "a5e2484e-572f-4439-8bd6-73cd3e49471b",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.3 SISTEMA DE INYECCIÓN DE AIRE EN LABORATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "c2b45f8c-149b-42fe-a2a7-60d0b2389273",
        "codigo": "OE.5.6.16.4",
        "descripcion": "SISTEMA DE EXTRACCIÓN DE AIRE EN LABORATORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "26fc3e8f-8b10-4025-909f-1d6a1b158e55",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1adce651-abca-4d27-bc73-a6c20d86452e",
        "codigo": "OE.5.6.16.4.1",
        "descripcion": "EXTRACTOR AXIAL DIRECTO ( 2342 RPM - 38W - 220V - 1Ø-60 HZ - 92 CFM - 61DB -Paprox. 5.4 Kg)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c2b45f8c-149b-42fe-a2a7-60d0b2389273",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.4 SISTEMA DE EXTRACCIÓN DE AIRE EN LABORATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "7a436237-a7a1-4628-9064-e41c83e16568",
        "codigo": "OE.5.6.16.4.2",
        "descripcion": "SUMINISTRO E INSTALACION DE DUCTOS DE PLANCHA GALVANIZADA. INC ACCESORIOS, DAMPERS DE REGULACION, ANCLAJES.",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "c2b45f8c-149b-42fe-a2a7-60d0b2389273",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.4 SISTEMA DE EXTRACCIÓN DE AIRE EN LABORATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "856a7376-732f-4a59-8f56-5b3e0c1d6fc9",
        "codigo": "OE.5.6.16.4.3",
        "descripcion": "SUMINISTRO E INSTALACION DE REJILLA DE EXTRACCIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c2b45f8c-149b-42fe-a2a7-60d0b2389273",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.4 SISTEMA DE EXTRACCIÓN DE AIRE EN LABORATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "23b6cfcc-00e4-48f4-9865-5138d16bc7f5",
        "codigo": "OE.5.6.16.4.4",
        "descripcion": "CAJA PORTAFILTROS 154x319x154mm, INC. FILTROS, ACCESORIOS, ANCLAJES.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "c2b45f8c-149b-42fe-a2a7-60d0b2389273",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.4 SISTEMA DE EXTRACCIÓN DE AIRE EN LABORATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "08c9f265-aa95-4762-8eef-d8ec043f1c73",
        "codigo": "OE.5.6.16.5",
        "descripcion": "SISTEMA DE INYECCIÓN DE AIRE EN SALA DE PARTOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "26fc3e8f-8b10-4025-909f-1d6a1b158e55",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "3f3b659d-4491-4df5-95a1-2a9145e7c359",
        "codigo": "OE.5.6.16.5.1",
        "descripcion": "VENTILADOR HELICOCENTRIFUGO( 2400 RPM - 30W - 220 V - 1Ø - 60 HZ - 69 CFM - 2.24MMCA - 55 DB -Paprox. 1.5 Kg)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "08c9f265-aa95-4762-8eef-d8ec043f1c73",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.5 SISTEMA DE INYECCIÓN DE AIRE EN SALA DE PARTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "0df9186c-386e-4c16-a562-0871fa7749e1",
        "codigo": "OE.5.6.16.5.2",
        "descripcion": "SUMINISTRO E INSTALACION DE DUCTOS DE PLANCHA GALVANIZADA. INC ACCESORIOS, DAMPERS DE REGULACION, ANCLAJES.",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "08c9f265-aa95-4762-8eef-d8ec043f1c73",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.5 SISTEMA DE INYECCIÓN DE AIRE EN SALA DE PARTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "5905e717-fd39-4248-abcc-133649636e3c",
        "codigo": "OE.5.6.16.5.3",
        "descripcion": "SUMINISTRO E INSTALACION DE REJILLA DE INYECCIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "08c9f265-aa95-4762-8eef-d8ec043f1c73",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.5 SISTEMA DE INYECCIÓN DE AIRE EN SALA DE PARTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "d998d89d-e02d-4423-9e1b-b900e25221af",
        "codigo": "OE.5.6.16.5.4",
        "descripcion": "CAJA PORTAFILTROS 154x319x154mm, INC. FILTROS, ACCESORIOS, ANCLAJES.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "08c9f265-aa95-4762-8eef-d8ec043f1c73",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.5 SISTEMA DE INYECCIÓN DE AIRE EN SALA DE PARTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "54e790f6-5ab6-4071-b97e-7b75e21efb39",
        "codigo": "OE.5.6.16.6",
        "descripcion": "SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE PARTOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "26fc3e8f-8b10-4025-909f-1d6a1b158e55",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "87bf7d7a-9c99-45cb-ac45-75591a016f52",
        "codigo": "OE.5.6.16.6.1",
        "descripcion": "VENTILADOR HELICOCENTRIFUGO( 2410 RPM - 30W - 220 V - 1Ø - 60 HZ - 83 CFM - 3.23 MMCA - 55 DB -Paprox. 1.5 Kg)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "54e790f6-5ab6-4071-b97e-7b75e21efb39",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.6 SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE PARTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "ec7a8172-63a9-4539-8ce4-690815366591",
        "codigo": "OE.5.6.16.6.2",
        "descripcion": "SUMINISTRO E INSTALACION DE DUCTOS DE PLANCHA GALVANIZADA. INC ACCESORIOS, DAMPERS DE REGULACION, ANCLAJES.",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "54e790f6-5ab6-4071-b97e-7b75e21efb39",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.6 SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE PARTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "129e38d3-9040-4c48-a50f-1ac47d29c10d",
        "codigo": "OE.5.6.16.6.3",
        "descripcion": "SUMINISTRO E INSTALACION DE REJILLA DE EXTRACCIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "54e790f6-5ab6-4071-b97e-7b75e21efb39",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.6 SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE PARTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "4683b1df-ef7a-410f-a3b5-e4207e192e3a",
        "codigo": "OE.5.6.16.6.4",
        "descripcion": "CAJA PORTAFILTROS 154x319x154mm, INC. FILTROS, ACCESORIOS, ANCLAJES.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "54e790f6-5ab6-4071-b97e-7b75e21efb39",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.6 SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE PARTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "4227afaa-7e9d-40a9-8d3a-9dfff50c032d",
        "codigo": "OE.5.6.18",
        "descripcion": "SISTEMA DE AIRE ACONDICIONADO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "18b7a5b7-4276-49d3-9c6e-3e5c3737579c",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "0a1f6802-67a9-4f9f-93bc-6cf9afeabdde",
        "codigo": "OE.5.6.18.1",
        "descripcion": "SUMINISTRO E INSTALACIONE DE UNIDADES EXTERIORES/ UNIDADES CONDENSADORAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "4227afaa-7e9d-40a9-8d3a-9dfff50c032d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "730d165d-f5b0-4103-9451-9a8ce3478055",
        "codigo": "OE.5.6.18.1.1",
        "descripcion": "UNIDAD CONDENSADORA VRV DE REFRIGERANTE R-410A (CAPACIDAD NOMINAL DE 48000 BTU/H-3.6 kW-220 V-1f-60Hz)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "0a1f6802-67a9-4f9f-93bc-6cf9afeabdde",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.1 SUMINISTRO E INSTALACIONE DE UNIDADES EXTERIORES/ UNIDADES CONDENSADORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "0737db2a-d370-41da-aaf0-b53476b376ab",
        "codigo": "OE.5.6.18.2",
        "descripcion": "SUMINISTRO E INSTALACION DE UNIDADES INTERIORES/ UNIDADES EVAPORADORAS (VRF)",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "4227afaa-7e9d-40a9-8d3a-9dfff50c032d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "58336c48-9e7d-406b-b9ee-4b5c022abb85",
        "codigo": "OE.5.6.18.2.1",
        "descripcion": "UNIDAD EVAPORADORA MONTADO EN PARED DE REFRIGERANTE R-410A (CAPACIDAD NOMINAL DE 7500 BTU/H-0.03 KW-220V-1F-60HZ)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "0737db2a-d370-41da-aaf0-b53476b376ab",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.2 SUMINISTRO E INSTALACION DE UNIDADES INTERIORES/ UNIDADES EVAPORADORAS (VRF)"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "a4fc8610-9514-4ce2-8977-4331c657bb48",
        "codigo": "OE.5.6.18.2.2",
        "descripcion": "UNIDAD EVAPORADORA MONTADO EN PARED DE REFRIGERANTE R-410A (CAPACIDAD NOMINAL DE 9600 BTU/H-0.03 KW-220V-1F-60HZ)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "0737db2a-d370-41da-aaf0-b53476b376ab",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.2 SUMINISTRO E INSTALACION DE UNIDADES INTERIORES/ UNIDADES EVAPORADORAS (VRF)"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "f8be5998-3733-4da3-ad5a-2c272d42ca95",
        "codigo": "OE.5.6.18.2.3",
        "descripcion": "UNIDAD EVAPORADORA MONTADO EN PARED DE REFRIGERANTE R-410A (CAPACIDAD NOMINAL DE 15400 BTU/H-0.03 KW-220V-1F-60HZ)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "0737db2a-d370-41da-aaf0-b53476b376ab",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.2 SUMINISTRO E INSTALACION DE UNIDADES INTERIORES/ UNIDADES EVAPORADORAS (VRF)"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "862ff999-ceb0-4265-a037-125024a58bcd",
        "codigo": "OE.5.6.18.3",
        "descripcion": "SUMINISTRO E INSTALACION DE SISTEMA CONVENCIONAL (FRÍO /CALOR)",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "4227afaa-7e9d-40a9-8d3a-9dfff50c032d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "fa39ebe9-b5e5-4cc3-914d-87ef0fdaccd3",
        "codigo": "OE.5.6.18.3.1",
        "descripcion": "UNIDAD CONDENSADORA DE REFRIGERANTE R-410A (CAPACIDAD NOMINAL DE 18000 BTU/H-2 kW-220 V-1f-60Hz)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "862ff999-ceb0-4265-a037-125024a58bcd",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.3 SUMINISTRO E INSTALACION DE SISTEMA CONVENCIONAL (FRÍO /CALOR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1c624905-368b-4394-bcd8-c00e28c3e5fa",
        "codigo": "OE.5.6.18.3.2",
        "descripcion": "UNIDAD EVAPORADORA DE REFRIGERANTE R-410A (CAPACIDAD NOMINAL DE 18000 BTU/H-2 Kw-220 V-1f-60Hz)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "862ff999-ceb0-4265-a037-125024a58bcd",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.3 SUMINISTRO E INSTALACION DE SISTEMA CONVENCIONAL (FRÍO /CALOR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "6794b3fe-e053-4dc6-94b5-557145d81d81",
        "codigo": "OE.5.6.18.4",
        "descripcion": "SUMINISTRO E INSTALACION DE REFNETS (BRANCH).",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "4227afaa-7e9d-40a9-8d3a-9dfff50c032d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "dfd2bce1-ce68-4553-9c3e-82dd97e2a339",
        "codigo": "OE.5.6.18.4.1",
        "descripcion": "REFNET JOINT TIPO 1 (Branch Kit).",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "6794b3fe-e053-4dc6-94b5-557145d81d81",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.4 SUMINISTRO E INSTALACION DE REFNETS (BRANCH)."
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "4daa3a51-d0a5-4d04-b5c1-6de2f6a67cac",
        "codigo": "OE.5.6.18.5",
        "descripcion": "SUMINISTRO E INSTALACION DE CONTROLES Y PANEL DECORATIVO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "4227afaa-7e9d-40a9-8d3a-9dfff50c032d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "dba09262-54b6-48ca-8a46-55df086bd0c3",
        "codigo": "OE.5.6.18.3.5.1",
        "descripcion": "BOMBA DE CONDENSADO (Kit Drenaje).",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.3 SUMINISTRO E INSTALACION DE SISTEMA CONVENCIONAL (FRÍO /CALOR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "c5bb1d34-aa12-4868-a088-ec74627afd2a",
        "codigo": "OE.5.6.18.3.5.2",
        "descripcion": "CONTROLADOR REMOTO NAVEGACION (CON CABLE), EN PARED.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.3 SUMINISTRO E INSTALACION DE SISTEMA CONVENCIONAL (FRÍO /CALOR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "0481c5d9-4505-43fa-9ec7-f761c2e28f5f",
        "codigo": "OE.5.6.18.3.5.3",
        "descripcion": "TUBERIA PVC-SAP ELECTRICA Ø=3/4\", INC. ACCESORIOS. EN AIRE ACONDICIONADO.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.3 SUMINISTRO E INSTALACION DE SISTEMA CONVENCIONAL (FRÍO /CALOR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "a6d91177-fd71-4b71-939a-6267c420f9c2",
        "codigo": "OE.5.6.18.3.5.4",
        "descripcion": "CABLE DE CONTROL FPLR 2x18 AWG LIBRE DE HALOGENO.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": null,
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.3 SUMINISTRO E INSTALACION DE SISTEMA CONVENCIONAL (FRÍO /CALOR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "fd2a9f69-3bb9-48f4-80c9-bc61c93ce29d",
        "codigo": "OE.5.6.18.6",
        "descripcion": "SUMINISTRO E INSTALACION DE TUBERIAS DE REFRIGERACION",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "4227afaa-7e9d-40a9-8d3a-9dfff50c032d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "4b6d7d4c-aee5-416f-a471-0943b482838a",
        "codigo": "OE.5.6.18.6.1",
        "descripcion": "TUBERIA DE COBRE DN 1/4\" - ØE 1/4\" TIPO FLEXIBLE, INC. AISLAMIENTO.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "fd2a9f69-3bb9-48f4-80c9-bc61c93ce29d",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.6 SUMINISTRO E INSTALACION DE TUBERIAS DE REFRIGERACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "e54d7149-f0f4-4fbb-9ced-761d434dbff4",
        "codigo": "OE.5.6.18.6.2",
        "descripcion": "TUBERIA DE COBRE DN 1/4\" - ØE 3/8\" TIPO L, INC. AISLAMIENTO.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "fd2a9f69-3bb9-48f4-80c9-bc61c93ce29d",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.6 SUMINISTRO E INSTALACION DE TUBERIAS DE REFRIGERACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "50efe046-a193-4a4c-a68c-7b86d9038be0",
        "codigo": "OE.5.6.18.6.3",
        "descripcion": "TUBERIA DE COBRE DN 3/8\" - ØE 1/2\" TIPO L, INC. AISLAMIENTO.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "fd2a9f69-3bb9-48f4-80c9-bc61c93ce29d",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.6 SUMINISTRO E INSTALACION DE TUBERIAS DE REFRIGERACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "27c1dee6-adce-46b5-950a-5b0065883f64",
        "codigo": "OE.5.6.18.6.4",
        "descripcion": "TUBERIA DE COBRE DN 1/2\" - ØE 5/8\" TIPO L, INC. AISLAMIENTO.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "fd2a9f69-3bb9-48f4-80c9-bc61c93ce29d",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.6 SUMINISTRO E INSTALACION DE TUBERIAS DE REFRIGERACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "e2a85fda-d890-471a-a88c-767747851261",
        "codigo": "OE.5.6.18.7",
        "descripcion": "CARGA DE REFRIGERACION",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "4227afaa-7e9d-40a9-8d3a-9dfff50c032d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "40cd51da-f844-4033-b63e-2596e025eb14",
        "codigo": "OE.5.6.18.7.1",
        "descripcion": "CARGA DE GAS REFRIGERANTE R410 ADICIONAL.",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "e2a85fda-d890-471a-a88c-767747851261",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.7 CARGA DE REFRIGERACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "d004703b-c1af-45aa-8a4f-81a287a77ead",
        "codigo": "OE.5.6.18.8",
        "descripcion": "BASES DE APOYO PARA EQUIPOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "4227afaa-7e9d-40a9-8d3a-9dfff50c032d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "aae0bba2-786a-4d9f-a882-b88c259c31de",
        "codigo": "OE.5.6.18.8.1",
        "descripcion": "PERFIL PARA SOPORTE DE UNIDADES CONDENSADORAS, INC. ANCLAJE QUIMICO, PLANCHA e=1/4\", ACABADOS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "d004703b-c1af-45aa-8a4f-81a287a77ead",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.8 BASES DE APOYO PARA EQUIPOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "0fc46342-0f05-47d0-943a-9ae8dfd35586",
        "codigo": "OE.5.6.18.9",
        "descripcion": "COLGADORES Y SOPORTES PARA TUBERIAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "4227afaa-7e9d-40a9-8d3a-9dfff50c032d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "aefc6389-87f9-4080-b4c8-cad21faecb65",
        "codigo": "OE.5.6.18.9.1",
        "descripcion": "SOPORTE DE PISO CON PERNO Ø3/8\", INC. ANCLAJE, ACABADOS.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "0fc46342-0f05-47d0-943a-9ae8dfd35586",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.9 COLGADORES Y SOPORTES PARA TUBERIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "76358719-0326-4020-af9b-cd42dcff3a62",
        "codigo": "OE.5.6.18.9.2",
        "descripcion": "ANCLAJE PARA TUBERIA DE COBRE (dos abrazaderas), EN MONTANTES.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "0fc46342-0f05-47d0-943a-9ae8dfd35586",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.9 COLGADORES Y SOPORTES PARA TUBERIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "6b96c500-b2f5-49bc-83ab-64ffdbdef25a",
        "codigo": "OE.6",
        "descripcion": "INSTALACIONES DE COMUNICACIONES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 2,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "cd4e4987-5833-498c-a306-42f4799073e1",
        "codigo": "OE.6.1",
        "descripcion": "CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "6b96c500-b2f5-49bc-83ab-64ffdbdef25a",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "34ca7179-324d-4ed9-8efa-d4087d933d88",
        "codigo": "OE.6.1.1",
        "descripcion": "CABLES EN TUBERÍAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "cd4e4987-5833-498c-a306-42f4799073e1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "83103ed6-46e5-43ad-931f-5275e0a843d2",
        "codigo": "OE.6.1.1.1",
        "descripcion": "Cable UTP Categoria 6A",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "34ca7179-324d-4ed9-8efa-d4087d933d88",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "60526eef-404a-426f-804e-b792efc223c4",
        "codigo": "OE.6.1.1.2",
        "descripcion": "Cable FPL 2X1 mm2",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "34ca7179-324d-4ed9-8efa-d4087d933d88",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "3d25e31a-874d-44bb-a30a-787bab1045d2",
        "codigo": "OE.6.1.1.3",
        "descripcion": "Cable de audio polarizado 2x2.5 mm2",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "34ca7179-324d-4ed9-8efa-d4087d933d88",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "00b95ee3-f18d-44f9-b04f-5e364954389c",
        "codigo": "OE.6.1.1.4",
        "descripcion": "Cable de Cu desnudo de 25 mm2",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "34ca7179-324d-4ed9-8efa-d4087d933d88",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "b646bfc6-34f7-436a-80c8-b2d2f456791d",
        "codigo": "OE.6.1.1.5",
        "descripcion": "Cable de Fibra Optica OM4 Multimodo de 50um/125um /OM4 10GbE.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "34ca7179-324d-4ed9-8efa-d4087d933d88",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "dbec7ef5-21fe-4d4c-bd24-908f10ad7305",
        "codigo": "OE.6.1.1.6",
        "descripcion": "Cable FPL 2X16 AWG",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "34ca7179-324d-4ed9-8efa-d4087d933d88",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "996003ce-9935-4142-9401-10f5441b99d1",
        "codigo": "OE.6.1.1.7",
        "descripcion": "Tendido de Cable UTP Categoria 6A",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "34ca7179-324d-4ed9-8efa-d4087d933d88",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "e5248aa0-ea82-4a37-aadb-ce66d7f662b4",
        "codigo": "OE.6.1.1.8",
        "descripcion": "Tendido de Cable FPL 2X1 mm2",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "34ca7179-324d-4ed9-8efa-d4087d933d88",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "b39a861b-cee4-44c9-976d-869e6e51df67",
        "codigo": "OE.6.1.1.9",
        "descripcion": "Tendido de Cable de audio polarizado 2x2.5 mm2",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "34ca7179-324d-4ed9-8efa-d4087d933d88",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "d921b6ec-644a-4ddd-b22f-04caa97d69a0",
        "codigo": "OE.6.1.1.10",
        "descripcion": "Tendido de Cable de Cu desnudo de 25 mm2",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "34ca7179-324d-4ed9-8efa-d4087d933d88",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1ff5b4cc-8437-4259-bf84-cde19ee3cdc6",
        "codigo": "OE.6.1.1.11",
        "descripcion": "Tendido de Cable de Fibra Optica OM4 Multimodo de 50um/125um /OM4 10GbE",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "34ca7179-324d-4ed9-8efa-d4087d933d88",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "405108dc-9662-4dc8-99b3-6a6530ccef34",
        "codigo": "OE.6.1.1.12",
        "descripcion": "Tendido de Cable FPL 2X16 AWG",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "34ca7179-324d-4ed9-8efa-d4087d933d88",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "69e35a4f-472f-4668-b554-ef1c9f0680a7",
        "codigo": "OE.6.1.1.13",
        "descripcion": "Tendido de Cable de Audio 2X14 AWG",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "34ca7179-324d-4ed9-8efa-d4087d933d88",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "990e2753-748f-4b46-8c73-77409b712e22",
        "codigo": "OE.6.2",
        "descripcion": "CANALETAS, CONDUCTOS Y/O TUBERÍAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "6b96c500-b2f5-49bc-83ab-64ffdbdef25a",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "2c03b7dc-00a2-43e5-8944-dd400b013909",
        "codigo": "OE.6.2.1",
        "descripcion": "Tubería Conduit EMT de 25 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "0df447ae-e1ef-47b6-8c0c-fe69e4fe1eaf",
        "codigo": "OE.6.2.2",
        "descripcion": "Tubería Conduit EMT de 20 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "6d9ff2be-599a-4bd7-a0e9-645da34de0e0",
        "codigo": "OE.6.2.3",
        "descripcion": "Curva Conduit EMT de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "c935538e-cff7-4139-9eee-eec8980cb694",
        "codigo": "OE.6.2.4",
        "descripcion": "Curva Conduit ETM de 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "614c5828-1bce-4394-9ecb-4efcd3857591",
        "codigo": "OE.6.2.5",
        "descripcion": "Union Conduit EMT de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "ddf8eb59-1bf3-459d-8103-a5108ee7f5d7",
        "codigo": "OE.6.2.6",
        "descripcion": "Union Conduit ETM de 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "bc63305f-495d-4e08-aa30-e71ddef498bc",
        "codigo": "OE.6.2.7",
        "descripcion": "Conector Conduit EMT de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "f970d098-7e42-4165-bc32-fbff444e02da",
        "codigo": "OE.6.2.8",
        "descripcion": "Conector Conduit EMT de 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1182a47b-907b-4951-acb0-7170ed974f02",
        "codigo": "OE.6.2.9",
        "descripcion": "Tuberia Electrica PVC SAP NTP 399.006 DE 50 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "0ed23faa-5928-488c-963e-93818a70ac06",
        "codigo": "OE.6.2.10",
        "descripcion": "Curva PVC SAP NTP 399.006 DE 50 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "37d52558-9f43-4881-9833-7b5cfbf744a2",
        "codigo": "OE.6.2.11",
        "descripcion": "Unión PVC SAP NTP 399.006 DE 50 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "a9a3fa08-81a5-4964-81f9-7767f1879a57",
        "codigo": "OE.6.2.12",
        "descripcion": "Conector PVC SAP NTP 399.006 DE 50 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "5ced5e4b-9e47-4f87-98e0-6285df78bf69",
        "codigo": "OE.6.2.13",
        "descripcion": "Bandeja tipo malla electrozincado 105X200 X3000 mm con aterramiento incluye accesorios de instalación",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "01b68250-f20d-4a3c-8245-988172012019",
        "codigo": "OE.6.2.14",
        "descripcion": "Tuberia Electrica PVC SAP NTP 399.006 DE 25 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "dce3f5de-19df-4392-bd09-34897751fe80",
        "codigo": "OE.6.2.15",
        "descripcion": "Union PVC SAP NTP 399.006 de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "437d8461-b695-4a68-8110-923509e31456",
        "codigo": "OE.6.2.16",
        "descripcion": "Conector PVC SAP NTP 399.006 de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "cff351bf-bda4-43de-abfe-fb3298b88bd2",
        "codigo": "OE.6.2.17",
        "descripcion": "Curva PVC SAP NTP 399.006 de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "2136e317-1625-454c-bdae-63ba82138588",
        "codigo": "OE.6.2.18",
        "descripcion": "Tuberia Conduit Flexible de 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "23ade7f9-d453-4f0e-9ea1-93f194a188ce",
        "codigo": "OE.6.2.19",
        "descripcion": "Prensaestopa Conduit 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "51160ef8-6173-4dca-855d-4b0ade81150e",
        "codigo": "OE.6.2.20",
        "descripcion": "Instalación de Tubería Conduit EMT de 25 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "4d583ec6-9db2-4b4d-a001-27db8d30308d",
        "codigo": "OE.6.2.21",
        "descripcion": "Instalación deTubería Conduit EMT de 20 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "3f9b400f-1eed-4920-aaec-10f2d15fdd0a",
        "codigo": "OE.6.2.22",
        "descripcion": "Instalación de Tuberia Conduit Flexible de 20 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "990e2753-748f-4b46-8c73-77409b712e22",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "codigo": "OE.6.3",
        "descripcion": "SALIDA DE COMUNICACIONES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "6b96c500-b2f5-49bc-83ab-64ffdbdef25a",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "d8b7875c-0147-43d0-a0ab-37c3dfcc5ffa",
        "codigo": "OE.6.3.1",
        "descripcion": "Salida de datos categoria 6A simple",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "e71a7d65-aef6-4cf7-ad1e-898a9ec07c3d",
        "codigo": "OE.6.3.2",
        "descripcion": "Salida de datos categoria 6A doble",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "ae1ff857-795d-4b10-b37a-88b58acaeda4",
        "codigo": "OE.6.3.3",
        "descripcion": "Salida detector de humo",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "c2d25c0c-a9d6-466b-bd4b-65841dacb836",
        "codigo": "OE.6.3.4",
        "descripcion": "Salida Estación Manual",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "5950f797-c753-4821-a653-81245ae79982",
        "codigo": "OE.6.3.5",
        "descripcion": "Salida sirena con luz estrobo",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "b99d2007-9a6b-4787-bd0f-bc351c5bde8b",
        "codigo": "OE.6.3.6",
        "descripcion": "Salida panel de alarma de incendio",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "aa095a6c-7dd2-4527-9529-961991845a6a",
        "codigo": "OE.6.3.7",
        "descripcion": "Salida Parlantes",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "5e7139bd-c76b-400e-accd-0bd65d3aca9d",
        "codigo": "OE.6.3.8",
        "descripcion": "Salida microfono/audio",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "bc80e539-d26e-4324-a3f9-2019493af0b6",
        "codigo": "OE.6.3.9",
        "descripcion": "Salida consola amplificador",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "12d882f7-b9b0-4621-9bb7-639be2ff966a",
        "codigo": "OE.6.3.10",
        "descripcion": "Salida para módulo de cabecera de llamado de enfermera",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "7481f55e-93fc-4a73-b1d0-e72297c16b0e",
        "codigo": "OE.6.3.11",
        "descripcion": "Salida para módulo de anulación",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "115c4d7b-0c91-4bc8-a2cf-5f9ebb65368f",
        "codigo": "OE.6.3.12",
        "descripcion": "Salida para pulsador de baño",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "fc02a13c-b1d9-4dde-b3c6-71165ea6c89c",
        "codigo": "OE.6.3.13",
        "descripcion": "Salida para luz indicador de llamada de enfermera",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "ee9402cb-1956-42b8-b3a0-3dbf1ef550fb",
        "codigo": "OE.6.3.14",
        "descripcion": "Salida para central de llamada de enfermera",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "18c0ce43-0270-481e-9ea6-084f64f8066a",
        "codigo": "OE.6.3.15",
        "descripcion": "Salida detector de temperatura",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "471107a0-a3aa-47de-a84e-10692a908fa2",
        "codigo": "OE.6.3.16",
        "descripcion": "Salida de atenuador de altavoz",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "9708430e-3167-4f3f-82ed-06c7542fedbc",
        "codigo": "OE.6.3.17",
        "descripcion": "Salida para datos categoria 6A simple",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "6e6eba37-1436-4c4c-984f-8635dc51b91f",
        "codigo": "OE.6.3.18",
        "descripcion": "Salida para datos categoria 6A doble",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "0cf9d2cc-1879-4495-b95e-f4d2317e9686",
        "codigo": "OE.6.3.19",
        "descripcion": "Salida para detector de humo",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "99b9d024-6ad9-4fb2-aaba-d515db3056b3",
        "codigo": "OE.6.3.20",
        "descripcion": "Salida para Estación Manual",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "b8b512e5-f9f2-46de-ab7a-abc48510076a",
        "codigo": "OE.6.3.21",
        "descripcion": "Salida para sirena con luz estrobo",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "d0d709ff-4a86-4c8e-abf5-7cffb2c81991",
        "codigo": "OE.6.3.22",
        "descripcion": "Salida para panel de alarma de incendio",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "e058a5f9-7070-415f-8586-cf880185d001",
        "codigo": "OE.6.3.23",
        "descripcion": "Salida para Parlantes",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "9b30f8c3-066b-4303-8be0-2b939d7328e8",
        "codigo": "OE.6.3.24",
        "descripcion": "Salida para microfono/audio",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "d26882a5-c4c2-47a6-a43d-ff0d96398904",
        "codigo": "OE.6.3.25",
        "descripcion": "Salida para consola amplificador",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "e6b97d9c-01ea-4485-8ad6-4d421649f2f4",
        "codigo": "OE.6.3.26",
        "descripcion": "Salida de módulo de cabecera de llamado de enfermera",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "42a2cc1a-5333-4cd9-b682-ba6fb2f59ce7",
        "codigo": "OE.6.3.27",
        "descripcion": "Salida de módulo de anulación",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "861f22cb-3b42-40f7-b96f-cbbab2f619b2",
        "codigo": "OE.6.3.28",
        "descripcion": "Salida de pulsador de baño",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "06054728-5e21-4dff-ac2e-24b5f5ffb0cb",
        "codigo": "OE.6.3.29",
        "descripcion": "Salida de luz indicador de llamada de enfermera",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "2c1de937-6aaf-4fb8-8546-a30fcd166334",
        "codigo": "OE.6.3.30",
        "descripcion": "Salida de central de llamada de enfermera",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "acee8382-6368-478d-82ed-d5acbe94c8d1",
        "codigo": "OE.6.3.31",
        "descripcion": "Salida para detector de temperatura",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1417d1a6-773e-4b49-8a68-497e3aae4750",
        "codigo": "OE.6.3.32",
        "descripcion": "Salida para atenuador de altavoz",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "8ec09674-a463-4dc8-adb1-24f4e055b546",
        "codigo": "OE.6.3.33",
        "descripcion": "salida para receptor AV",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "ce450ce3-677d-4533-9ba2-3bcfbdae0033",
        "codigo": "OE.6.3.34",
        "descripcion": "Salida para HDMI",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "05f4ec46-5952-48cf-b975-8f0b5f6ed995",
        "codigo": "OE.6.3.35",
        "descripcion": "Salida para parlante de techo",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "66b70ce4-f213-4fc1-959a-2e53377e92af",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "b5a5911d-fb9f-4cf4-8638-3e3158e2e8cf",
        "codigo": "OE.6.4",
        "descripcion": "CONDUCTORES DE COMUNICACIONES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "6b96c500-b2f5-49bc-83ab-64ffdbdef25a",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "12128980-e3d6-48a4-b32c-8c04b0350b4b",
        "codigo": "OE.6.4.1",
        "descripcion": "Zanja Electroducto 0.40x0.60m",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "b5a5911d-fb9f-4cf4-8638-3e3158e2e8cf",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.4 CONDUCTORES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "d50c2715-58fc-4f17-9654-9ec1c115b9cb",
        "codigo": "OE.6.4.2",
        "descripcion": "Relleno y compactado con material propio 0.50 x0.60 m",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "b5a5911d-fb9f-4cf4-8638-3e3158e2e8cf",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.4 CONDUCTORES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "56b4ad44-0ed5-4b77-8ace-086a1b31bb42",
        "codigo": "OE.6.4.3",
        "descripcion": "Buzon Electroducto de Concreto Armado con tapa 0.60 x0.60 x 0.60m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "b5a5911d-fb9f-4cf4-8638-3e3158e2e8cf",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.4 CONDUCTORES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "7d64dc1e-18ba-49f3-b6d4-d9d587423465",
        "codigo": "OE.6.5",
        "descripcion": "PATCH PANEL",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "6b96c500-b2f5-49bc-83ab-64ffdbdef25a",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "67696f49-9952-4758-8a0d-c73b31f8ad85",
        "codigo": "OE.6.5.1",
        "descripcion": "Patch Panel Cat6A de 24 puertos",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7d64dc1e-18ba-49f3-b6d4-d9d587423465",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "b2a6f81b-c9f4-4dd5-8e2e-621b05ba5482",
        "codigo": "OE.6.5.2",
        "descripcion": "Patch Cord UTP Cat6A de 3m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7d64dc1e-18ba-49f3-b6d4-d9d587423465",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "46e02247-1331-4e45-ba2d-12f01191aa1e",
        "codigo": "OE.6.5.3",
        "descripcion": "Patch cord UTP Cat6A de 20cm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7d64dc1e-18ba-49f3-b6d4-d9d587423465",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "ebafef37-7357-4a82-b384-2bd5ef0aa57e",
        "codigo": "OE.6.5.4",
        "descripcion": "Etiquetas adhesivas de identificacion, señalizacion y ordenamiento para el area de Trabajo y Gabinete",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7d64dc1e-18ba-49f3-b6d4-d9d587423465",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "84e5ddfa-2644-4cdc-ad1c-2e645bd4717d",
        "codigo": "OE.6.5.5",
        "descripcion": "Patch cord cat 6A x 1m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7d64dc1e-18ba-49f3-b6d4-d9d587423465",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "7364b5d4-b61f-4fdd-a5d2-81cec4d3db46",
        "codigo": "OE.6.5.6",
        "descripcion": "Patch cord cat 6A x 3m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7d64dc1e-18ba-49f3-b6d4-d9d587423465",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "fcf70684-1ab3-46c0-9ce4-90467395f24d",
        "codigo": "OE.6.5.7",
        "descripcion": "Patch Cord de Fibra Optica multimodo OM4 de 2m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7d64dc1e-18ba-49f3-b6d4-d9d587423465",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "83f6df26-f73d-413a-824c-bc5c53e63726",
        "codigo": "OE.6.5.8",
        "descripcion": "Bandeja de fibra optica de 1 RU incluye patch panel y acopladores",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7d64dc1e-18ba-49f3-b6d4-d9d587423465",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "c389454b-956e-419c-87dc-b0e843dd07eb",
        "codigo": "OE.6.5.9",
        "descripcion": "Bandeja de empalme para bandeja de FO incluye accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7d64dc1e-18ba-49f3-b6d4-d9d587423465",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "648756c8-ec1e-49fe-8e61-87116f156c6f",
        "codigo": "OE.6.5.10",
        "descripcion": "Patch Panel Cat6A - 24 puertos",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7d64dc1e-18ba-49f3-b6d4-d9d587423465",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "f567e150-3fe2-4355-bf67-930d4d91d6a3",
        "codigo": "OE.6.5.11",
        "descripcion": "Etiquetas adhesivas de identificacion, señalizacion y ordenamiento",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7d64dc1e-18ba-49f3-b6d4-d9d587423465",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "e05aad06-aa5b-4aa3-b0c4-df4713ec3e77",
        "codigo": "OE.6.5.12",
        "descripcion": "Patch cord cat 6A UTP de 1m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7d64dc1e-18ba-49f3-b6d4-d9d587423465",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "3d45399c-32dd-4d46-9401-beb6519a389b",
        "codigo": "OE.6.5.13",
        "descripcion": "Patch cord  cat 6A UTP de 3m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7d64dc1e-18ba-49f3-b6d4-d9d587423465",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "39765fef-fe95-461f-84a2-a97385b7e1b4",
        "codigo": "OE.6.5.14",
        "descripcion": "Patch Cord de Fibra Optica OM4 multimodo de 2m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7d64dc1e-18ba-49f3-b6d4-d9d587423465",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "fb192812-01b8-4217-aa92-63d908bcce40",
        "codigo": "OE.6.5.15",
        "descripcion": "Bandeja de fibra optica con patch panel y acopladores de 1 RU",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7d64dc1e-18ba-49f3-b6d4-d9d587423465",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "6b8a4203-dd0d-4fe8-8061-1baa2e867f7e",
        "codigo": "OE.6.5.16",
        "descripcion": "Bandeja de empalme para bandeja de Fibra incluye accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7d64dc1e-18ba-49f3-b6d4-d9d587423465",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "132c6536-25af-4c45-ad4b-d6998b6399c5",
        "codigo": "OE.6.6",
        "descripcion": "RACK DE COMUNICACIONES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "6b96c500-b2f5-49bc-83ab-64ffdbdef25a",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "f1897205-c3dc-41dd-8d70-c284583efe4d",
        "codigo": "OE.6.6.1",
        "descripcion": "SWITCH",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "132c6536-25af-4c45-ad4b-d6998b6399c5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "cc6eaf9a-9278-4cd0-bd57-6fefa78c4a4f",
        "codigo": "OE.6.6.1.1",
        "descripcion": "Switch Gigabit PoE de 48 puertos y 4 puertos SFP",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f1897205-c3dc-41dd-8d70-c284583efe4d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.1 SWITCH"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "611a0bdf-6cf4-4f97-8bea-434d67b595d6",
        "codigo": "OE.6.6.1.2",
        "descripcion": "Servicio de Instalación, configuración, capacitaciòn y Puesta en funcionamiento del patch panel/Rack de Comunicaciones",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "f1897205-c3dc-41dd-8d70-c284583efe4d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.1 SWITCH"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "46c05e73-a324-4b86-8997-d56a2a008de7",
        "codigo": "OE.6.6.1.3",
        "descripcion": "Switch Gigabit PoE de 24 puertos y 4 puertos SFP",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f1897205-c3dc-41dd-8d70-c284583efe4d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.1 SWITCH"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "69fcc10c-5805-40f5-bfe3-9ace99027e6b",
        "codigo": "OE.6.6.1.4",
        "descripcion": "Transceptor SFP, conector LC duplex",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f1897205-c3dc-41dd-8d70-c284583efe4d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.1 SWITCH"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "e3ee5a07-541b-4871-b890-e38e026e831c",
        "codigo": "OE.6.6.1.5",
        "descripcion": "Switch Gigabit PoE 48 puertos, 4 puertos SFP",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f1897205-c3dc-41dd-8d70-c284583efe4d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.1 SWITCH"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "c7053aca-4129-48dd-b9ae-23030ddc26be",
        "codigo": "OE.6.6.1.6",
        "descripcion": "Switch Gigabit PoE de 24 Port y 4 Port SFP",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f1897205-c3dc-41dd-8d70-c284583efe4d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.1 SWITCH"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "99d79af4-bd4f-4d0b-b250-4e869ade7ca8",
        "codigo": "OE.6.6.1.7",
        "descripcion": "Modulo Transceptor SFP, conector LC duplex",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f1897205-c3dc-41dd-8d70-c284583efe4d",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.1 SWITCH"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "bef8cdc3-4069-442f-98db-01cc6ec199e1",
        "codigo": "OE.6.6.2",
        "descripcion": "GABINETE DE COMUNICACION",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "132c6536-25af-4c45-ad4b-d6998b6399c5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "80344b2b-3c96-46f5-8b56-1189139bafdb",
        "codigo": "OE.6.6.2.1",
        "descripcion": "Gabinete de comunicaciones de piso de 42 RU c/accesorios de instalacion.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "bef8cdc3-4069-442f-98db-01cc6ec199e1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.2 GABINETE DE COMUNICACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "6b28fd4f-df3d-4302-88c4-6bd9c87aff20",
        "codigo": "OE.6.6.2.2",
        "descripcion": "UPS de 3000VA rackeable",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "bef8cdc3-4069-442f-98db-01cc6ec199e1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.2 GABINETE DE COMUNICACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "becd9bbe-f4d2-4e0b-a98d-2518915d0abb",
        "codigo": "OE.6.6.2.3",
        "descripcion": "Certificacion de puntos de cableado de datos Categoria 6A",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "bef8cdc3-4069-442f-98db-01cc6ec199e1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.2 GABINETE DE COMUNICACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "9cf6d63e-4243-4a0b-ae3d-5116204c1c9c",
        "codigo": "OE.6.6.2.4",
        "descripcion": "Gabinete de comunicación de pared de 12 RU c/accesorios de Instalacion",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "bef8cdc3-4069-442f-98db-01cc6ec199e1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.2 GABINETE DE COMUNICACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "9b564793-0f3a-4f87-bb2a-3d4d5f477191",
        "codigo": "OE.6.6.2.5",
        "descripcion": "Gabinete de piso de 42 RU c/accesorios de instalacion.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "bef8cdc3-4069-442f-98db-01cc6ec199e1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.2 GABINETE DE COMUNICACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "430f3cbc-db21-48d1-b690-612c7e712dac",
        "codigo": "OE.6.6.2.6",
        "descripcion": "Certificación de 111 puntos de cableado de datos categoría 6A y 02 puntos de fibra",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "bef8cdc3-4069-442f-98db-01cc6ec199e1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.2 GABINETE DE COMUNICACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "8cc98538-9550-4805-84ab-0a909c59e7b3",
        "codigo": "OE.6.6.2.7",
        "descripcion": "Gabinete de comunicación de pared de 12 RU c/accesorios de Instalacion",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "bef8cdc3-4069-442f-98db-01cc6ec199e1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.2 GABINETE DE COMUNICACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "5fed0124-05da-4183-9d9f-b85ea293300f",
        "codigo": "OE.6.7",
        "descripcion": "CAJA DE PASE PARA TRANSFORMADOR",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "6b96c500-b2f5-49bc-83ab-64ffdbdef25a",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "14a44d51-cf7b-4423-b853-b675b5fd804f",
        "codigo": "OE.6.7.1",
        "descripcion": "Caja de paso con tapa Biselada de F° G° 200x200x100 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5fed0124-05da-4183-9d9f-b85ea293300f",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "f680bbae-746b-429a-b5d2-63c39c7344b1",
        "codigo": "OE.6.7.2",
        "descripcion": "Caja de paso con tapa Biselada de F° G° 150x150x100 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5fed0124-05da-4183-9d9f-b85ea293300f",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "e2b60886-b1f1-43a6-9e86-fef46e17fcc6",
        "codigo": "OE.6.7.3",
        "descripcion": "Caja de paso pesada octogonal con tapa de 100x50 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5fed0124-05da-4183-9d9f-b85ea293300f",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "bc551a5a-f0f1-4262-9af8-3121d7356ee2",
        "codigo": "OE.6.7.4",
        "descripcion": "Caja de Paso con tapa Biselada de Fº Gº 100x100x100 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5fed0124-05da-4183-9d9f-b85ea293300f",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "90a27cc7-7000-4d8c-9251-114c2d512a2d",
        "codigo": "OE.6.7.5",
        "descripcion": "Caja de Paso con tapa Biselada de Fº Gº 300x300x100 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "5fed0124-05da-4183-9d9f-b85ea293300f",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "bd215807-0f31-4ff4-b088-9da69fcc47a0",
        "codigo": "OE.6.8.",
        "descripcion": "SISTEMAS VARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "8fe8c2f2-9bd4-46f9-8e36-e56d4b665eab",
        "codigo": "OE.6.8.1",
        "descripcion": "SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "6589f99b-b6e3-48ee-8911-f2d0c7a4ce31",
        "codigo": "OE.6.8.1.1",
        "descripcion": "Detector de Humo direccionable incluye base",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8fe8c2f2-9bd4-46f9-8e36-e56d4b665eab",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "343c2ba1-8ecf-4556-afb5-f9e801cd403c",
        "codigo": "OE.6.8.1.2",
        "descripcion": "Estación manual de doble accion direccionable",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8fe8c2f2-9bd4-46f9-8e36-e56d4b665eab",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "c2078e96-f3fe-4933-99e6-d7fc5c929f52",
        "codigo": "OE.6.8.1.3",
        "descripcion": "Sirena con luz estrobo",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8fe8c2f2-9bd4-46f9-8e36-e56d4b665eab",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "021768b1-002a-4ad6-9df1-ce407dc8a233",
        "codigo": "OE.6.8.1.4",
        "descripcion": "Panel de alarma de Incendios Direccionable",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8fe8c2f2-9bd4-46f9-8e36-e56d4b665eab",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "22c68667-b883-4026-9b0e-d24e5161f21e",
        "codigo": "OE.6.8.1.5",
        "descripcion": "Servicio de Instalacion, configuracion, capacitación y puesta en funcionamiento del Sistema de deteccion y alarma de incendios",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "8fe8c2f2-9bd4-46f9-8e36-e56d4b665eab",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "79b35173-0ee1-43f0-9660-93926fa414eb",
        "codigo": "OE.6.8.1.6",
        "descripcion": "Detector de Temperatura direccionable incluye base",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8fe8c2f2-9bd4-46f9-8e36-e56d4b665eab",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1373e85a-e819-4594-b4ab-153f14707d2a",
        "codigo": "OE.6.8.1.7",
        "descripcion": "Instalación de Detector de Humo direccionable con base",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8fe8c2f2-9bd4-46f9-8e36-e56d4b665eab",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "0916bcb5-b2de-4ac0-8087-2d782af2fece",
        "codigo": "OE.6.8.1.8",
        "descripcion": "Instalación de Estación manual doble accion direccionable",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8fe8c2f2-9bd4-46f9-8e36-e56d4b665eab",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "5ed0d15b-61d4-4430-9b1b-f8a45b602858",
        "codigo": "OE.6.8.1.9",
        "descripcion": "Instalación de Sirena con luz estrobo",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8fe8c2f2-9bd4-46f9-8e36-e56d4b665eab",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "3501e174-f368-461e-b74e-9c70f7bae667",
        "codigo": "OE.6.8.1.10",
        "descripcion": "Instalación de Panel de alarma de Incendios Direccionable",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8fe8c2f2-9bd4-46f9-8e36-e56d4b665eab",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "3a5afa47-3799-485b-8e3b-8fef833c8487",
        "codigo": "OE.6.8.1.11",
        "descripcion": "Instalación de Detector de Temperatura direccionable con base",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8fe8c2f2-9bd4-46f9-8e36-e56d4b665eab",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "7907f722-dfac-4251-b9b2-7918854a55a2",
        "codigo": "OE.6.8.2",
        "descripcion": "SISTEMA DE VIDEO VIGILANCIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "8f88853b-9f72-436e-8fef-8506418bd1a8",
        "codigo": "OE.6.8.2.1",
        "descripcion": "Camara IP fija PoE para Exterior incluye accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7907f722-dfac-4251-b9b2-7918854a55a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "501ed0c8-c81b-4947-a213-697a98210741",
        "codigo": "OE.6.8.2.2",
        "descripcion": "Grabador de video NVR de 16 canales incluye licencia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7907f722-dfac-4251-b9b2-7918854a55a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "2b27bef2-76fa-46dd-a0a4-b4555c8939a9",
        "codigo": "OE.6.8.2.3",
        "descripcion": "Monitor LCD de 24\"para CCTV",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7907f722-dfac-4251-b9b2-7918854a55a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "0c346ddb-9688-4d9d-9012-1071582a1541",
        "codigo": "OE.6.8.2.4",
        "descripcion": "Estacion de video Vigilancia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7907f722-dfac-4251-b9b2-7918854a55a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "74bec422-1189-4216-8e38-a647512b8ce4",
        "codigo": "OE.6.8.2.5",
        "descripcion": "Servicio de Instalacion, configuracion, capacitación y puesta en funcionamiento del Sistema de video vigilancia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7907f722-dfac-4251-b9b2-7918854a55a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "42c87df1-0133-4610-8029-2a12aba9a531",
        "codigo": "OE.6.8.2.6",
        "descripcion": "Camara IP PoE tipo Domo",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7907f722-dfac-4251-b9b2-7918854a55a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "8c981cd5-981c-4876-a494-aa1cdb75c298",
        "codigo": "OE.6.8.2.7",
        "descripcion": "Camara IP PoE tipo Bullet",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7907f722-dfac-4251-b9b2-7918854a55a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "52cea261-2ce8-43a6-936e-67a89f0ee064",
        "codigo": "OE.6.8.2.8",
        "descripcion": "Grabador de video NVR de 24 canales incluye licencia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7907f722-dfac-4251-b9b2-7918854a55a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "3ce1a388-40c2-43ca-811b-b647127d9f49",
        "codigo": "OE.6.8.2.9",
        "descripcion": "Instalación de Camara IP PoE tipo Domo",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7907f722-dfac-4251-b9b2-7918854a55a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "c73a278e-2e83-4f17-96b7-85d94ee3fa62",
        "codigo": "OE.6.8.2.10",
        "descripcion": "Instalación de Camara IP PoE tipo Bullet",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7907f722-dfac-4251-b9b2-7918854a55a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "c021d8b2-9262-4c9d-991d-4ec6abea1a56",
        "codigo": "OE.6.8.2.11",
        "descripcion": "Instalación de Grabador de video NVR de 24  canales incluye licencia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7907f722-dfac-4251-b9b2-7918854a55a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "04714fc0-b8ec-4566-84fc-48b62ac8eadf",
        "codigo": "OE.6.8.2.12",
        "descripcion": "Instalación de Unidad Central de Proceso -CPU",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7907f722-dfac-4251-b9b2-7918854a55a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "35726841-b477-46f2-9766-50586286c875",
        "codigo": "OE.6.8.2.13",
        "descripcion": "Instalación de Monitor LED",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7907f722-dfac-4251-b9b2-7918854a55a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "eda91624-08f3-470f-8fd0-17901a2008b5",
        "codigo": "OE.6.8.2.14",
        "descripcion": "Instalación de Disco Duro Interno",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7907f722-dfac-4251-b9b2-7918854a55a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "48421a65-e23a-4e2f-ae89-1b9e1f94d7f3",
        "codigo": "OE.6.8.2.15",
        "descripcion": "Instalación de Acumulador de energía – Equipo UPS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "7907f722-dfac-4251-b9b2-7918854a55a2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "549dc8be-fd26-4eba-b33d-a89ce161a990",
        "codigo": "OE.6.8.3",
        "descripcion": "SISTEMA DE SONIDO AMBIENTAL",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "fe9b7822-fab0-4266-a03d-807fbedfd7de",
        "codigo": "OE.6.8.3.1",
        "descripcion": "Parlantes de 6\" incluye accesosios para montaje en pared",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "549dc8be-fd26-4eba-b33d-a89ce161a990",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "90a7d88b-2e48-4354-81f4-df9c4c19cbcc",
        "codigo": "OE.6.8.3.2",
        "descripcion": "Amplificador de 1000 Watts con Salida de 70 y 100 V",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "549dc8be-fd26-4eba-b33d-a89ce161a990",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "df467498-ed2a-4601-ab34-0e1b87ab600e",
        "codigo": "OE.6.8.3.3",
        "descripcion": "Consola mezcladora de audio de 8 canales",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "549dc8be-fd26-4eba-b33d-a89ce161a990",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "55a6beab-4f02-4e61-9b37-913ea01ce5a6",
        "codigo": "OE.6.8.3.4",
        "descripcion": "Microfono profesional con accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "549dc8be-fd26-4eba-b33d-a89ce161a990",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "59b0d667-aba1-4500-af18-315a2f1f767a",
        "codigo": "OE.6.8.3.5",
        "descripcion": "Servicio de Instalacion, configuracion, capacitacion y puesta en funcionamiento del sistema de sonido ambiental",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "549dc8be-fd26-4eba-b33d-a89ce161a990",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "ad4bcd9a-a607-4e30-8c46-057eec1ae587",
        "codigo": "OE.6.8.3.6",
        "descripcion": "Atenuador de volumen",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "549dc8be-fd26-4eba-b33d-a89ce161a990",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "8a5a0011-5a8f-45fc-bd13-9d325757c743",
        "codigo": "OE.6.8.3.7",
        "descripcion": "Instalación de Parlantes de 6\" incluye accesosios  para montaje en pared",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "549dc8be-fd26-4eba-b33d-a89ce161a990",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "3e6324e0-f356-4c69-88df-fc159c5d94bc",
        "codigo": "OE.6.8.3.8",
        "descripcion": "Instalación de Amplificador de 1000 Watts con Salida de 70 y 100 V",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "549dc8be-fd26-4eba-b33d-a89ce161a990",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "9cf4b989-f4e1-4654-9815-3a080ebb7fa9",
        "codigo": "OE.6.8.3.9",
        "descripcion": "Instalación de Consola mezcladora de audio de 8 canales",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "549dc8be-fd26-4eba-b33d-a89ce161a990",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "b2ace1e0-3fec-46ae-af4d-501dd3474e1d",
        "codigo": "OE.6.8.3.10",
        "descripcion": "Instalación de Microfono profesional con accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "549dc8be-fd26-4eba-b33d-a89ce161a990",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "fbdbca47-30e0-4c16-8ddb-154a87e5d086",
        "codigo": "OE.6.8.3.11",
        "descripcion": "Instalación de Atenuador de volumen",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "549dc8be-fd26-4eba-b33d-a89ce161a990",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "99bb4d76-9096-445d-bf7d-3896342acaa7",
        "codigo": "OE.6.8.4",
        "descripcion": "SISTEMAS DE LLAMADA DE ENFERMERA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "0ebae4ae-4f13-4e9a-b761-a700c6c9e121",
        "codigo": "OE.6.8.4.1",
        "descripcion": "Central de llamada de enfermera con accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "99bb4d76-9096-445d-bf7d-3896342acaa7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "af7817d5-f4db-4681-b6f4-e260ffaf252d",
        "codigo": "OE.6.8.4.2",
        "descripcion": "Consola de sobremesa para comunicación",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "99bb4d76-9096-445d-bf7d-3896342acaa7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "03dab806-bc25-424c-ac8f-33f7bc0a424d",
        "codigo": "OE.6.8.4.3",
        "descripcion": "UPS 1000 VA con accesorios de instalación",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "99bb4d76-9096-445d-bf7d-3896342acaa7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "27256221-cbe9-446c-9e8f-f76653108b25",
        "codigo": "OE.6.8.4.4",
        "descripcion": "Modulo de cabecera de llamado de enfermera",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "99bb4d76-9096-445d-bf7d-3896342acaa7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "62b9d0c4-9335-4c7d-b6f5-17fc6d68e578",
        "codigo": "OE.6.8.4.5",
        "descripcion": "Modulo boton de anulacion",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "99bb4d76-9096-445d-bf7d-3896342acaa7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "64fdec33-0834-4f26-917d-a7ec8e1a2045",
        "codigo": "OE.6.8.4.6",
        "descripcion": "Pulsador de llamado de enfermera",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "99bb4d76-9096-445d-bf7d-3896342acaa7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "f1a7bc8e-5b84-4d19-b9a5-5bbc1755257d",
        "codigo": "OE.6.8.4.7",
        "descripcion": "Pulsador de baño",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "99bb4d76-9096-445d-bf7d-3896342acaa7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "11a79c93-55a2-467b-bb36-0c68e26b773c",
        "codigo": "OE.6.8.4.8",
        "descripcion": "Luz indicador de llamada de enfermera",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "99bb4d76-9096-445d-bf7d-3896342acaa7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "f94010de-a728-4b69-b1a4-33ccfdc313a7",
        "codigo": "OE.6.8.4.9",
        "descripcion": "Servicio de Instalacion, configuración, capacitación y puesta en funcionamiento del sistema de llamada de enfermera",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "99bb4d76-9096-445d-bf7d-3896342acaa7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "26fdfa89-efd4-40da-8cf2-29ba4108dd44",
        "codigo": "OE.6.8.4.10",
        "descripcion": "Instalación de Central de llamada de enfermera con accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "99bb4d76-9096-445d-bf7d-3896342acaa7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "e4ad7046-59a6-4256-a904-81f305b6efae",
        "codigo": "OE.6.8.4.11",
        "descripcion": "Instalación de Consola de sobremesa para comunicaion",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "99bb4d76-9096-445d-bf7d-3896342acaa7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "5e568106-2258-4135-8b02-6f613995f92b",
        "codigo": "OE.6.8.4.12",
        "descripcion": "Instalación de Modulo de cabecera de llamado de enfermera",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "99bb4d76-9096-445d-bf7d-3896342acaa7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "dc192a52-a3d4-4726-9f5a-8494c94c0a23",
        "codigo": "OE.6.8.4.13",
        "descripcion": "Instalación de Modulo boton de anulacion",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "99bb4d76-9096-445d-bf7d-3896342acaa7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "7d2f67cb-318b-4925-9d07-79b8b3d32f08",
        "codigo": "OE.6.8.4.14",
        "descripcion": "Instalación de Pulsador de llamado a enfermeras",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "99bb4d76-9096-445d-bf7d-3896342acaa7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "e3a0507f-8402-4ef4-8e8a-205d42b27b23",
        "codigo": "OE.6.8.4.15",
        "descripcion": "Instalación de Pulsador de baño",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "99bb4d76-9096-445d-bf7d-3896342acaa7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "38348541-34d2-4ac0-a2e6-e20326adea29",
        "codigo": "OE.6.8.4.16",
        "descripcion": "Instalación de Luz indicador de llamada de enfermera",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "99bb4d76-9096-445d-bf7d-3896342acaa7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "8a04de69-7875-4e2c-8e88-f9228cd3972a",
        "codigo": "OE.6.8.5",
        "descripcion": "SISTEMAS DE TELEFONIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "e2113416-9674-4bbe-8bf3-0ff12e360aca",
        "codigo": "OE.6.8.5.1",
        "descripcion": "Central telefonica IP incluye licenciamiento",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8a04de69-7875-4e2c-8e88-f9228cd3972a",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.5 SISTEMAS DE TELEFONIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "aad23c5d-5ab2-4e08-b7d6-1e1317de5f23",
        "codigo": "OE.6.8.5.2",
        "descripcion": "Telefono IP POE de mesa de uso general",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8a04de69-7875-4e2c-8e88-f9228cd3972a",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.5 SISTEMAS DE TELEFONIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "a5b769d9-f508-433f-8563-33ee79991e23",
        "codigo": "OE.6.8.5.3",
        "descripcion": "Servicio de instalación, configuración, capacitación y puesta en funcionamiento del Sistema de telefonia",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "8a04de69-7875-4e2c-8e88-f9228cd3972a",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.5 SISTEMAS DE TELEFONIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "87978443-1861-4f53-89f5-8cf60ff5f7e7",
        "codigo": "OE.6.8.5.4",
        "descripcion": "Instalación de Central telefonica IP incluye licenciamiento",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8a04de69-7875-4e2c-8e88-f9228cd3972a",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.5 SISTEMAS DE TELEFONIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "0b9a1959-d84c-4b58-b137-8039c7109088",
        "codigo": "OE.6.8.5.5",
        "descripcion": "Instalación de Telefono IP POE de mesa de uso general",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "8a04de69-7875-4e2c-8e88-f9228cd3972a",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.5 SISTEMAS DE TELEFONIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "d90ef91b-183f-443c-a69d-bd3f77479fdb",
        "codigo": "OE.6.8.6",
        "descripcion": "POZO DE PUESTA A TIERRA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "f4844cdf-0759-42cd-9ee2-7e874c720f28",
        "codigo": "OE.6.8.6.1",
        "descripcion": "Pozo puesta a tierra",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "d90ef91b-183f-443c-a69d-bd3f77479fdb",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.6 POZO DE PUESTA A TIERRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "d6f43657-d680-402b-8094-5bd917109754",
        "codigo": "OE.6.8.6.2",
        "descripcion": "Pruebas Eléctricas ( Resistencia de Puesta a Tierra)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "d90ef91b-183f-443c-a69d-bd3f77479fdb",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.6 POZO DE PUESTA A TIERRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "54e285b9-cd77-435f-95f1-99464d478ec5",
        "codigo": "OE.6.8.6.3",
        "descripcion": "Pozo puesta a tierra",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "d90ef91b-183f-443c-a69d-bd3f77479fdb",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.6 POZO DE PUESTA A TIERRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "b33eca11-0426-475e-b93d-f040ab22b94a",
        "codigo": "OE.6.8.6.4",
        "descripcion": "Pruebas electricas (resistencia)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "d90ef91b-183f-443c-a69d-bd3f77479fdb",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.6 POZO DE PUESTA A TIERRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "f5af3a5d-1296-4238-a92f-a968f2b9554a",
        "codigo": "OE.6.8.7",
        "descripcion": "SISTEMA DE SONIDO EN SALA DE REUNIONES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "c81405c5-276e-4f38-8308-d561867a8038",
        "codigo": "OE.6.8.7.1",
        "descripcion": "Receptor A/V",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f5af3a5d-1296-4238-a92f-a968f2b9554a",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.7 SISTEMA DE SONIDO EN SALA DE REUNIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "3649e40e-03b0-4351-a2d5-e587897968e0",
        "codigo": "OE.6.8.7.2",
        "descripcion": "Microfono inalambrico",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f5af3a5d-1296-4238-a92f-a968f2b9554a",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.7 SISTEMA DE SONIDO EN SALA DE REUNIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "2482eb3d-66c3-4887-967c-b8f059e5aa13",
        "codigo": "OE.6.8.7.3",
        "descripcion": "Parlante de Techo",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "f5af3a5d-1296-4238-a92f-a968f2b9554a",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.7 SISTEMA DE SONIDO EN SALA DE REUNIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "9efd713c-b973-45ee-aa88-b282080c3650",
        "codigo": "OE.6.8.8",
        "descripcion": "SISTEMA VISUAL EN SALA DE REUNIONES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "ba62fe65-e926-4543-9f46-f51e57980c2b",
        "codigo": "OE.6.8.8.1",
        "descripcion": "Ecram Electrico",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "9efd713c-b973-45ee-aa88-b282080c3650",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.8 SISTEMA VISUAL EN SALA DE REUNIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "086616c6-a4fc-482b-977d-4bc97b07e88f",
        "codigo": "OE.6.8.8.2",
        "descripcion": "Proyector Multimedia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "9efd713c-b973-45ee-aa88-b282080c3650",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.8.8 SISTEMA VISUAL EN SALA DE REUNIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "f5236cf0-7428-472b-98f9-cecc98ae74b0",
        "codigo": "OE.7.0",
        "descripcion": "PLAN OPERATIVO DE CIERRE TEMPORAL, TRASLADO, REINSTALACION Y PUESTA EN MARCHA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "ce546424-0a2f-4f8a-bbca-bcbcb6a954b2",
        "codigo": "OE.7.1",
        "descripcion": "TRASLADO Y PROTECCION DE EQUIPAMIENTO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "d4d4a770-e8d3-481e-ab9e-46873b96e936",
        "codigo": "OE.7.1.1",
        "descripcion": "Gastos de proteccion de equipos",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "ce546424-0a2f-4f8a-bbca-bcbcb6a954b2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.1 TRASLADO Y PROTECCION DE EQUIPAMIENTO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "97b36319-1d10-40bc-8a07-ae7755c56bf1",
        "codigo": "OE.7.1.2",
        "descripcion": "Gastos de transporte de equipos",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "ce546424-0a2f-4f8a-bbca-bcbcb6a954b2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.1 TRASLADO Y PROTECCION DE EQUIPAMIENTO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "33ca6f80-e050-4d9a-aae6-ee67f82df29d",
        "codigo": "OE.7.2",
        "descripcion": "TRASLADO EQUIPO BIOMEDICO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "3c65f7fc-f677-434e-8fb1-a463dbb5c599",
        "codigo": "OE.7.2.1",
        "descripcion": "Contraste y verificacion de equipo biomedico a trasladar",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "33ca6f80-e050-4d9a-aae6-ee67f82df29d",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.2 TRASLADO EQUIPO BIOMEDICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "66d3e95f-d128-4e5d-8a83-4d9c56a82e28",
        "codigo": "OE.7.2.2",
        "descripcion": "Desinstalado de equipo biomedico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "33ca6f80-e050-4d9a-aae6-ee67f82df29d",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.2 TRASLADO EQUIPO BIOMEDICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "2c104f2d-354b-45dd-89d7-5c1c6eca665f",
        "codigo": "OE.7.2.3",
        "descripcion": "Embalaje de equipo biomedico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "33ca6f80-e050-4d9a-aae6-ee67f82df29d",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.2 TRASLADO EQUIPO BIOMEDICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "b1a323f9-53d1-4934-a353-17c77453c7f4",
        "codigo": "OE.7.2.4",
        "descripcion": "Transporte de equipo biomedico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "33ca6f80-e050-4d9a-aae6-ee67f82df29d",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.2 TRASLADO EQUIPO BIOMEDICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "24dd315c-3495-49dc-b384-d24bd720496d",
        "codigo": "OE.7.2.5",
        "descripcion": "Instalacion de equipo biomedico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "33ca6f80-e050-4d9a-aae6-ee67f82df29d",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.2 TRASLADO EQUIPO BIOMEDICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "3491927e-944f-4b15-aa3b-6ea106047cc1",
        "codigo": "OE.7.2.6",
        "descripcion": "Pruebas en vacio de equipo biomedico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "33ca6f80-e050-4d9a-aae6-ee67f82df29d",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.2 TRASLADO EQUIPO BIOMEDICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "823bd2f5-ac7c-4ea1-aa10-36b2c5d66827",
        "codigo": "OE.7.3",
        "descripcion": "TRASLADO EQUIPO ELECTROMECANICO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "315d5400-891d-43b2-86f2-c91ed866bf11",
        "codigo": "OE.7.3.1",
        "descripcion": "Contraste y verificacion de equipo electromecanico a trasladar",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "823bd2f5-ac7c-4ea1-aa10-36b2c5d66827",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.3 TRASLADO EQUIPO ELECTROMECANICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "84b4426a-0bab-4511-b51d-c96e58d1d18a",
        "codigo": "OE.7.3.2",
        "descripcion": "Desinstalado de equipo electromecanico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "823bd2f5-ac7c-4ea1-aa10-36b2c5d66827",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.3 TRASLADO EQUIPO ELECTROMECANICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "529fdf0b-c42b-4f3d-9641-dfc00b4d1f5f",
        "codigo": "OE.7.3.3",
        "descripcion": "Embalaje de equipo electromecanico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "823bd2f5-ac7c-4ea1-aa10-36b2c5d66827",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.3 TRASLADO EQUIPO ELECTROMECANICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "647f06ce-9753-481f-bb43-dcc13236e09c",
        "codigo": "OE.7.3.4",
        "descripcion": "Transporte de equipo electromecanico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "823bd2f5-ac7c-4ea1-aa10-36b2c5d66827",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.3 TRASLADO EQUIPO ELECTROMECANICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "9fd36aea-127a-413c-a3a4-df7b403a0fee",
        "codigo": "OE.7.3.5",
        "descripcion": "Instalacion de equipo electromecanico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "823bd2f5-ac7c-4ea1-aa10-36b2c5d66827",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.3 TRASLADO EQUIPO ELECTROMECANICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "492b6d2e-036f-4f08-a8bb-7c92785ab9cb",
        "codigo": "OE.7.3.6",
        "descripcion": "Pruebas en vacio de equipo electromecanico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "823bd2f5-ac7c-4ea1-aa10-36b2c5d66827",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.3 TRASLADO EQUIPO ELECTROMECANICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "8ad31ba9-c014-4759-a21a-dc822ad251fb",
        "codigo": "OE.7.4",
        "descripcion": "TRASLADO EQUIPO INFORMATICO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "4cc7e65c-8812-4f5e-a94f-313d8167be26",
        "codigo": "OE.7.4.1",
        "descripcion": "Contraste y verificacion de equipo informatico a trasladar",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "8ad31ba9-c014-4759-a21a-dc822ad251fb",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.4 TRASLADO EQUIPO INFORMATICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "5b4a46e4-0acd-4347-95ae-887f87c0cad6",
        "codigo": "OE.7.4.2",
        "descripcion": "Desinstalado de equipo informaticos",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "8ad31ba9-c014-4759-a21a-dc822ad251fb",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.4 TRASLADO EQUIPO INFORMATICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "fefd8047-9b80-4aa5-ba33-7df6b7778776",
        "codigo": "OE.7.4.3",
        "descripcion": "Embalaje de equipo informatico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "8ad31ba9-c014-4759-a21a-dc822ad251fb",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.4 TRASLADO EQUIPO INFORMATICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "4dc24648-09c1-43aa-b1df-024fcae0704d",
        "codigo": "OE.7.4.4",
        "descripcion": "Transporte de equipo informatico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "8ad31ba9-c014-4759-a21a-dc822ad251fb",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.4 TRASLADO EQUIPO INFORMATICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "13b82b94-8bad-4686-a47a-a797b3a87844",
        "codigo": "OE.7.4.5",
        "descripcion": "Instalacion de equipo informatico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "8ad31ba9-c014-4759-a21a-dc822ad251fb",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.4 TRASLADO EQUIPO INFORMATICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "47b4b8b7-8c0d-42f7-813d-2c366da9d47f",
        "codigo": "OE.7.4.6",
        "descripcion": "Pruebas en vacio de equipo informatico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "8ad31ba9-c014-4759-a21a-dc822ad251fb",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.4 TRASLADO EQUIPO INFORMATICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "f6729ff8-c7e0-4216-8c99-76feafc6087d",
        "codigo": "OE.7.5",
        "descripcion": "TRASLADO INSTRUMENTAL",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "bc3678d1-7f50-4c05-8a40-df2f1af1d490",
        "codigo": "OE.7.5.1",
        "descripcion": "Contraste y verificacion de bienes a trasladar - instrumental",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "f6729ff8-c7e0-4216-8c99-76feafc6087d",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.5 TRASLADO INSTRUMENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "e773534d-d926-4e9d-8c77-4e23f94289e5",
        "codigo": "OE.7.5.2",
        "descripcion": "Embalaje de instrumental",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "f6729ff8-c7e0-4216-8c99-76feafc6087d",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.5 TRASLADO INSTRUMENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "ac26b09e-a344-498e-b8d0-90c0f7c80401",
        "codigo": "OE.7.5.3",
        "descripcion": "Transporte instrumental",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "f6729ff8-c7e0-4216-8c99-76feafc6087d",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.5 TRASLADO INSTRUMENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "fffbac2e-2058-48f0-9dff-6e04410528f0",
        "codigo": "OE.7.5.4",
        "descripcion": "Desembalaje, verificacion y organizacion de instrumental",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "f6729ff8-c7e0-4216-8c99-76feafc6087d",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.5 TRASLADO INSTRUMENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "0e2ab21f-8a04-4c3b-9b8a-fc8eedeefdf3",
        "codigo": "OE.7.6",
        "descripcion": "TRASLADO MOBILIARIO ADMINISTRATIVO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "19dde918-3c60-4fbc-9c6a-407338de8073",
        "codigo": "OE.7.6.1",
        "descripcion": "Contraste de bienes a trasladar- mobiliario administrativo",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "0e2ab21f-8a04-4c3b-9b8a-fc8eedeefdf3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.6 TRASLADO MOBILIARIO ADMINISTRATIVO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "61672215-ca88-44ad-b5c4-150ab3a57c43",
        "codigo": "OE.7.6.2",
        "descripcion": "Desinstalado de mobiliario administrativo",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "0e2ab21f-8a04-4c3b-9b8a-fc8eedeefdf3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.6 TRASLADO MOBILIARIO ADMINISTRATIVO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "41da5af1-d811-4740-8b48-81905718eeef",
        "codigo": "OE.7.6.3",
        "descripcion": "Embalaje de mobiliario administrativo",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "0e2ab21f-8a04-4c3b-9b8a-fc8eedeefdf3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.6 TRASLADO MOBILIARIO ADMINISTRATIVO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "93bafec7-9bf3-44c4-b4c7-699e24bfcd23",
        "codigo": "OE.7.6.4",
        "descripcion": "Transporte de mobiliario administrativo",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "0e2ab21f-8a04-4c3b-9b8a-fc8eedeefdf3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.6 TRASLADO MOBILIARIO ADMINISTRATIVO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "77c850eb-871f-4c5a-abf6-32deb6478167",
        "codigo": "OE.7.6.5",
        "descripcion": "Instalacion de mobiliario administrativo",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "0e2ab21f-8a04-4c3b-9b8a-fc8eedeefdf3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.6 TRASLADO MOBILIARIO ADMINISTRATIVO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "163c3176-9726-472d-a436-a0212418801e",
        "codigo": "OE.7.7",
        "descripcion": "TRASLADO MOBILIARIO CLINICO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "3d993544-d98d-4eb7-b868-3fbf4a4866ae",
        "codigo": "OE.7.7.1",
        "descripcion": "Contraste de bienes a trasladar- mobiliario clinico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "163c3176-9726-472d-a436-a0212418801e",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.7 TRASLADO MOBILIARIO CLINICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "c68fd995-d9bf-42d4-8d96-fb11c7bef997",
        "codigo": "OE.7.7.2",
        "descripcion": "Desinstalado de mobiliario clinico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "163c3176-9726-472d-a436-a0212418801e",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.7 TRASLADO MOBILIARIO CLINICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "dd3db8cc-e40e-415a-8157-09e42a541d2b",
        "codigo": "OE.7.7.3",
        "descripcion": "Embalaje de mobiliario clinico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "163c3176-9726-472d-a436-a0212418801e",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.7 TRASLADO MOBILIARIO CLINICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "ebaa5697-cfb9-4fae-94d2-a896aba38166",
        "codigo": "OE.7.7.4",
        "descripcion": "Transporte de mobiliario clinico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "163c3176-9726-472d-a436-a0212418801e",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.7 TRASLADO MOBILIARIO CLINICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "da8a9c03-4b97-4e4c-ab2b-4648d7ce4ae3",
        "codigo": "OE.7.7.5",
        "descripcion": "Instalacion de mobiliario clinico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "163c3176-9726-472d-a436-a0212418801e",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.7 TRASLADO MOBILIARIO CLINICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "2cff9b64-d073-4650-891d-6fd952ba0612",
        "codigo": "OE.7.8",
        "descripcion": "TRASLADO PRODUCTOS FARMACEUTICOS Y LABORATORIO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "a19a59a1-e3ee-41c8-bc3c-9ef58f153d6a",
        "codigo": "OE.7.8.1",
        "descripcion": "Contraste de productos farmaceuticos y de laboratorio",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "2cff9b64-d073-4650-891d-6fd952ba0612",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.8 TRASLADO PRODUCTOS FARMACEUTICOS Y LABORATORIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "9aafd00e-b535-40c3-9926-43c25e85b549",
        "codigo": "OE.7.8.2",
        "descripcion": "Embalado de productos farmaceuticos y de laboratorio",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "2cff9b64-d073-4650-891d-6fd952ba0612",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.8 TRASLADO PRODUCTOS FARMACEUTICOS Y LABORATORIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "f9aaa8a3-1185-4624-9641-1f33a7cdbfee",
        "codigo": "OE.7.8.3",
        "descripcion": "Transporte de productos farmaceuticos y laboratorio",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "2cff9b64-d073-4650-891d-6fd952ba0612",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.8 TRASLADO PRODUCTOS FARMACEUTICOS Y LABORATORIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "f07cb983-e634-4372-a855-fee5d47b93e3",
        "codigo": "OE.7.8.4",
        "descripcion": "Instalacion de farmacia",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "2cff9b64-d073-4650-891d-6fd952ba0612",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.7.8 TRASLADO PRODUCTOS FARMACEUTICOS Y LABORATORIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "b073a42b-0470-4fd2-9a3f-879536d7fda9",
        "codigo": "OE.8",
        "descripcion": "IMPACTO AMBIENTAL",
        "unidad": "",
        "es_titulo": true,
        "parent_id": null,
        "nivel_jerarquia": 2,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "e6f8ad48-4985-4624-878a-88aaeea23fca",
        "codigo": "OE.8.1",
        "descripcion": "PLAN DE MANEJO AMBIENTAL",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "b073a42b-0470-4fd2-9a3f-879536d7fda9",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.8 IMPACTO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "19d19c7f-b851-4693-b72e-7ded2fa1146b",
        "codigo": "OE.8.1.1",
        "descripcion": "Manejo de Residuos Solidos",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e6f8ad48-4985-4624-878a-88aaeea23fca",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.8 IMPACTO AMBIENTAL",
            "OE.8.1 PLAN DE MANEJO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "e12eac7e-6373-44d7-b06d-5c0f67e4a7d6",
        "codigo": "OE.8.1.2",
        "descripcion": "Charlas de Sensibilización Ambiental",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e6f8ad48-4985-4624-878a-88aaeea23fca",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.8 IMPACTO AMBIENTAL",
            "OE.8.1 PLAN DE MANEJO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "9d3f0fe0-32f3-47d0-a05b-e192f69e269d",
        "codigo": "OE.8.1.3",
        "descripcion": "Monitoreo Ambiental",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e6f8ad48-4985-4624-878a-88aaeea23fca",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.8 IMPACTO AMBIENTAL",
            "OE.8.1 PLAN DE MANEJO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "e8e2a9c1-0d14-4c9b-bf51-5e61bade5a8b",
        "codigo": "OE.8.4",
        "descripcion": "PLAN DE CIERRE DE OBRA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "b073a42b-0470-4fd2-9a3f-879536d7fda9",
        "nivel_jerarquia": 3,
        "jerarquia": [
            "OE.8 IMPACTO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "b5807e8c-e0a2-4735-9f2d-5250eb9f605e",
        "codigo": "OE.8.4.1",
        "descripcion": "Desmontaje de Instalaciones Provisionales",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "e8e2a9c1-0d14-4c9b-bf51-5e61bade5a8b",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.8 IMPACTO AMBIENTAL",
            "OE.8.4 PLAN DE CIERRE DE OBRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "bec47d9e-6e3b-467c-bfa8-3bb1117b2cc5",
        "codigo": "OE.8.4.2",
        "descripcion": "Punto ecologico x 3",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "e8e2a9c1-0d14-4c9b-bf51-5e61bade5a8b",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.8 IMPACTO AMBIENTAL",
            "OE.8.4 PLAN DE CIERRE DE OBRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "8d561288-b062-4ce5-8bb9-f9e3a3f8785c",
        "codigo": "OE.8.4.3",
        "descripcion": "Señalizacion Ambiental",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "e8e2a9c1-0d14-4c9b-bf51-5e61bade5a8b",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.8 IMPACTO AMBIENTAL",
            "OE.8.4 PLAN DE CIERRE DE OBRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    }
];
