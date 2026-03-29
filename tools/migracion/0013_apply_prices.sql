-- SQL Generado para actualizar precios y cantidad presupuesto
-- Archivo Origen: presupuesto_ultim.xls
-- Generado el: 2026-03-29 16:27:37

BEGIN;
DO $$
DECLARE
  v_proyecto_id UUID;
BEGIN
  SELECT id INTO v_proyecto_id FROM proyectos WHERE codigo = 'HOSP' LIMIT 1;
  IF v_proyecto_id IS NULL THEN
    RAISE EXCEPTION 'Proyecto HOSP no encontrado';
  END IF;

  -- OE.1 - OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1 - OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1 - CONSTRUCCIONES PROVISIONALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.1 - Oficinas
  UPDATE catalogo_partidas SET precio_unitario=157.37, cantidad_presupuesto=1018.0 WHERE codigo='OE.1.1.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.2 - Almacenes
  UPDATE catalogo_partidas SET precio_unitario=109.44, cantidad_presupuesto=4368.09 WHERE codigo='OE.1.1.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.3 - Casetas de guardianía
  UPDATE catalogo_partidas SET precio_unitario=147.84, cantidad_presupuesto=92.53 WHERE codigo='OE.1.1.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.5 - Vestuarios
  UPDATE catalogo_partidas SET precio_unitario=130.85, cantidad_presupuesto=1420.0 WHERE codigo='OE.1.1.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.6 - Servicios higienicos
  UPDATE catalogo_partidas SET precio_unitario=282.01, cantidad_presupuesto=134.0 WHERE codigo='OE.1.1.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.7 - Cercos Provisional de calamina
  UPDATE catalogo_partidas SET precio_unitario=53.39, cantidad_presupuesto=1432.18 WHERE codigo='OE.1.1.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.8 - Cartel de identificación de Obra de 4.80m x 3.60 m
  UPDATE catalogo_partidas SET precio_unitario=2517.15, cantidad_presupuesto=2.0 WHERE codigo='OE.1.1.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.9 - Suministro e instalacion de equipo para transporte vertical de materiales
  UPDATE catalogo_partidas SET precio_unitario=29501.97, cantidad_presupuesto=1.0 WHERE codigo='OE.1.1.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.10 - Traslado de material en desuso de Belempampa a Coripata y Antonio Lorena (D=750m)
  UPDATE catalogo_partidas SET precio_unitario=0.13, cantidad_presupuesto=110000.0 WHERE codigo='OE.1.1.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.11 - Traslado de materiales de Belempampa a almacen Huancaro (D=1800m)
  UPDATE catalogo_partidas SET precio_unitario=0.3, cantidad_presupuesto=2026138.64 WHERE codigo='OE.1.1.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.12 - Desmontaje y traslado de modulos prefabricados
  UPDATE catalogo_partidas SET precio_unitario=1723.87, cantidad_presupuesto=7.0 WHERE codigo='OE.1.1.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.13 - Reubicacion manual de material en obra D=300 m-Kilogramos
  UPDATE catalogo_partidas SET precio_unitario=0.74, cantidad_presupuesto=1845384.95 WHERE codigo='OE.1.1.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.14 - Reubicacion de material en obra manual D=300 m-metros cubicos
  UPDATE catalogo_partidas SET precio_unitario=66.7, cantidad_presupuesto=2060.0 WHERE codigo='OE.1.1.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.15 - Traslado de material con maquinaria de almacén Huancaro a Belempampa- en Kilogramos (D=1800m)
  UPDATE catalogo_partidas SET precio_unitario=0.17, cantidad_presupuesto=1592658.65 WHERE codigo='OE.1.1.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.16 - Traslado de material con maquinaria de almacen Huancaro a Belempampa-15M3 por viaje (D=1800m)
  UPDATE catalogo_partidas SET precio_unitario=681.84, cantidad_presupuesto=953.0 WHERE codigo='OE.1.1.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.17 - Reposicion y mantenimiento de areas colindantes
  UPDATE catalogo_partidas SET precio_unitario=174.3, cantidad_presupuesto=30.0 WHERE codigo='OE.1.1.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.18 - Orden y limpieza permanente en obra
  UPDATE catalogo_partidas SET precio_unitario=13422.3, cantidad_presupuesto=24.0 WHERE codigo='OE.1.1.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.19 - Desmontaje de oficinas y almacenes
  UPDATE catalogo_partidas SET precio_unitario=54.74, cantidad_presupuesto=4463.15 WHERE codigo='OE.1.1.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.20 - Almacen de estructura metalica
  UPDATE catalogo_partidas SET precio_unitario=486.01, cantidad_presupuesto=890.0 WHERE codigo='OE.1.1.1.20' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.21 - Embalado de materiales de almacen para traslado
  UPDATE catalogo_partidas SET precio_unitario=0.34, cantidad_presupuesto=455934.64 WHERE codigo='OE.1.1.1.21' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.22 - Habilitacion y nivelacion de accesos para maquinaria
  UPDATE catalogo_partidas SET precio_unitario=42.35, cantidad_presupuesto=6207.53 WHERE codigo='OE.1.1.1.22' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.23 - Habilitacion de escantillon y soportes para malla de acero
  UPDATE catalogo_partidas SET precio_unitario=4.16, cantidad_presupuesto=17372.49 WHERE codigo='OE.1.1.1.23' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.24 - Vaciado de falso piso en ambientes provisionales (almacen, vestuarios, ss.hh y otros)
  UPDATE catalogo_partidas SET precio_unitario=49.16, cantidad_presupuesto=627.48 WHERE codigo='OE.1.1.1.24' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.25 - Habilitacion y colocacion de mobiliario de 1.20x0.8m
  UPDATE catalogo_partidas SET precio_unitario=383.04, cantidad_presupuesto=202.0 WHERE codigo='OE.1.1.1.25' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.26 - Mantenimiento de andamios y estructuras metalicas
  UPDATE catalogo_partidas SET precio_unitario=242.96, cantidad_presupuesto=130.0 WHERE codigo='OE.1.1.1.26' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.27 - PUERTAS PROVISIONALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.1.27' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.27.1 - Instalación de puerta provisional metalica
  UPDATE catalogo_partidas SET precio_unitario=82.63, cantidad_presupuesto=55.99 WHERE codigo='OE.1.1.1.27.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.27.2 - Instalacion de puerta povisional de madera para almacen Huancaro
  UPDATE catalogo_partidas SET precio_unitario=45.18, cantidad_presupuesto=102.0 WHERE codigo='OE.1.1.1.27.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.28 - HABILITACION DE MOBILIARIOS PARA OBRA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.1.28' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.28.1 - Habilitacion de mobiliario estante L=1.20m x 1.80m
  UPDATE catalogo_partidas SET precio_unitario=274.35, cantidad_presupuesto=150.0 WHERE codigo='OE.1.1.1.28.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.28.2 - Habilitacion de pizarra acrilica para obra de 1.20mx2.40m
  UPDATE catalogo_partidas SET precio_unitario=326.52, cantidad_presupuesto=43.0 WHERE codigo='OE.1.1.1.28.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.28.3 - Habilitado de estantes para almacen de  2.50m x 0.90m con rollizo
  UPDATE catalogo_partidas SET precio_unitario=453.0, cantidad_presupuesto=126.0 WHERE codigo='OE.1.1.1.28.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.29 - CONSTRUCCIONES METALICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.1.29' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.29.1 - Habilitado y colocado de escalera metálica provisional
  UPDATE catalogo_partidas SET precio_unitario=7.97, cantidad_presupuesto=15601.45 WHERE codigo='OE.1.1.1.29.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.29.2 - Vestuario de estructura metalica
  UPDATE catalogo_partidas SET precio_unitario=109.55, cantidad_presupuesto=100.0 WHERE codigo='OE.1.1.1.29.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.29.3 - Habilitado y colocado de puente metálico
  UPDATE catalogo_partidas SET precio_unitario=7.16, cantidad_presupuesto=7320.18 WHERE codigo='OE.1.1.1.29.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.29.4 - Habilitado de soporte de cámaras de vigilancia móvil
  UPDATE catalogo_partidas SET precio_unitario=201.32, cantidad_presupuesto=20.0 WHERE codigo='OE.1.1.1.29.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.29.5 - Habilitación de escuadra metálica para soporte en voladizo
  UPDATE catalogo_partidas SET precio_unitario=12.23, cantidad_presupuesto=557.28 WHERE codigo='OE.1.1.1.29.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.30 - CONSTRUCCIONES PROVISIONALES EN OBRA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.1.30' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.30.1 - Habilitacion e instalacion de esquineros protectores tipo L
  UPDATE catalogo_partidas SET precio_unitario=22.64, cantidad_presupuesto=440.0 WHERE codigo='OE.1.1.1.30.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.1.30.2 - Cobertura de protección provisional en azotea
  UPDATE catalogo_partidas SET precio_unitario=47.71, cantidad_presupuesto=74.97 WHERE codigo='OE.1.1.1.30.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2 - INSTALACIONES PROVISIONALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2.1 - AGUA PARA LA CONSTRUCCIÓN
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2.1.1 - Almacenamiento y distribución
  UPDATE catalogo_partidas SET precio_unitario=7199.99, cantidad_presupuesto=1.0 WHERE codigo='OE.1.1.2.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2.1.2 - Restauracion y mantenimiento de instalaciones sanitarias provisionales
  UPDATE catalogo_partidas SET precio_unitario=4945.23, cantidad_presupuesto=24.0 WHERE codigo='OE.1.1.2.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2.2 - DESAGÜE PARA LA CONSTRUCCIÓN
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2.2.1 - Desagüe para la construcción
  UPDATE catalogo_partidas SET precio_unitario=7199.99, cantidad_presupuesto=1.0 WHERE codigo='OE.1.1.2.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2.3 - ENERGÍA ELÉCTRICA PROVISIONAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2.3.3 - Servicio extraordinario de energia electrica
  UPDATE catalogo_partidas SET precio_unitario=4537.6, cantidad_presupuesto=24.0 WHERE codigo='OE.1.1.2.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2.3.4 - Desmontaje y reubicacion de instalaciones electricas provisionales
  UPDATE catalogo_partidas SET precio_unitario=3215.21, cantidad_presupuesto=24.0 WHERE codigo='OE.1.1.2.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2.3.5 - Suministro de artefactos de iluminacion nocturna en obra
  UPDATE catalogo_partidas SET precio_unitario=17525.24, cantidad_presupuesto=1.0 WHERE codigo='OE.1.1.2.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2.3.6 - Adquisicion de tablero de control general
  UPDATE catalogo_partidas SET precio_unitario=6660.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.1.2.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2.3.7 - Adquisicion de tableros de distribucion
  UPDATE catalogo_partidas SET precio_unitario=25520.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.1.2.3.7' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2.3.8 - Adquisicion de reflectores
  UPDATE catalogo_partidas SET precio_unitario=33600.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.1.2.3.8' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2.3.9 - Adquisicion de accesorios
  UPDATE catalogo_partidas SET precio_unitario=29000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.1.2.3.9' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2.3.10 - Adquisicion de cables
  UPDATE catalogo_partidas SET precio_unitario=13800.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.1.2.3.10' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2.4 - INSTALACIÓN TELEFÓNICA Y COMUNICACIÓN PROVISIONAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2.4.1 - Conexion e Instalación
  UPDATE catalogo_partidas SET precio_unitario=520.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.1.2.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.2.4.2 - Consumo y mantenimiento
  UPDATE catalogo_partidas SET precio_unitario=1534.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.1.2.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3 - TRABAJOS PRELIMINARES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3.2 - TRABAJOS DE REUBICACION CON MAQUINARIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3.2.1 - Reubicación de material en obra con retroexcavadora D=100 m
  UPDATE catalogo_partidas SET precio_unitario=54.04, cantidad_presupuesto=11582.0 WHERE codigo='OE.1.1.3.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3.2.2 - Reubicación de material en obra con maquinaria D=100 m
  UPDATE catalogo_partidas SET precio_unitario=0.14, cantidad_presupuesto=81250.0 WHERE codigo='OE.1.1.3.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3.2.3 - Traslado de materiales con camioneta de almacen Huancaro a Belempampa (D=1800m)
  UPDATE catalogo_partidas SET precio_unitario=110.94, cantidad_presupuesto=2086.0 WHERE codigo='OE.1.1.3.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3.2.4 - Traslado de material en desuso de almacen Huancaro a IPD (D=3.4 KM)
  UPDATE catalogo_partidas SET precio_unitario=986.18, cantidad_presupuesto=35.0 WHERE codigo='OE.1.1.3.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3.2.5 - Reubicación de material en obra con minicargador frontal D=100 m
  UPDATE catalogo_partidas SET precio_unitario=74.3, cantidad_presupuesto=3132.0 WHERE codigo='OE.1.1.3.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3.2.6 - Traslado de material de relleno con camion volquete de 3 m3 de almacén huancaro a Belempampa (D=1800m)
  UPDATE catalogo_partidas SET precio_unitario=143.46, cantidad_presupuesto=1080.0 WHERE codigo='OE.1.1.3.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3.3 - TRABAJOS DE REUBICACION DE MATERIALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3.3.1 - Acarreo de materiales manual en obra D>150 m
  UPDATE catalogo_partidas SET precio_unitario=148.22, cantidad_presupuesto=18606.73 WHERE codigo='OE.1.1.3.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3.3.2 - Traslado vertical con winche de material en obra D=16m - Kilogramos
  UPDATE catalogo_partidas SET precio_unitario=0.11, cantidad_presupuesto=1068540.0 WHERE codigo='OE.1.1.3.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3.3.3 - Traslado vertical con winche de material en obra D=16m - metros cubicos
  UPDATE catalogo_partidas SET precio_unitario=47.94, cantidad_presupuesto=1364.0 WHERE codigo='OE.1.1.3.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3.3.4 - Traslado vertical manual de material en obra h=16 m
  UPDATE catalogo_partidas SET precio_unitario=0.2, cantidad_presupuesto=3345985.62 WHERE codigo='OE.1.1.3.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3.4 - TRABAJOS COMPLEMENTARIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3.4.1 - Rotura manual de piedra para reducción de diámetro (12" a <8") para empedrado
  UPDATE catalogo_partidas SET precio_unitario=111.16, cantidad_presupuesto=686.86 WHERE codigo='OE.1.1.3.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3.4.2 - Armado y desarmado de andamios
  UPDATE catalogo_partidas SET precio_unitario=21.37, cantidad_presupuesto=4800.0 WHERE codigo='OE.1.1.3.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3.4.3 - Rehabilitacion de construcciones provisionales
  UPDATE catalogo_partidas SET precio_unitario=7.35, cantidad_presupuesto=500.0 WHERE codigo='OE.1.1.3.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.3.4.4 - Reubicación de materiales de almacén
  UPDATE catalogo_partidas SET precio_unitario=2667.84, cantidad_presupuesto=12.0 WHERE codigo='OE.1.1.3.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.4 - ELIMINACIÓN DE OBSTRUCCIONES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.4.1 - Tala de Arboles
  UPDATE catalogo_partidas SET precio_unitario=17.72, cantidad_presupuesto=12.0 WHERE codigo='OE.1.1.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.4.2 - Eliminación de Raices
  UPDATE catalogo_partidas SET precio_unitario=24.89, cantidad_presupuesto=48.0 WHERE codigo='OE.1.1.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.5 - REMOCIONES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.5.1 - Remoción de Puertas
  UPDATE catalogo_partidas SET precio_unitario=23.64, cantidad_presupuesto=152.0 WHERE codigo='OE.1.1.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.5.2 - Remoción de Ventanas
  UPDATE catalogo_partidas SET precio_unitario=23.64, cantidad_presupuesto=162.0 WHERE codigo='OE.1.1.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.5.3 - Remoción de Aparatos Sanitarios
  UPDATE catalogo_partidas SET precio_unitario=25.21, cantidad_presupuesto=38.0 WHERE codigo='OE.1.1.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.5.4 - Remoción de Tijerales de madera
  UPDATE catalogo_partidas SET precio_unitario=47.28, cantidad_presupuesto=157.0 WHERE codigo='OE.1.1.5.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.5.5 - Remoción de Cobertura
  UPDATE catalogo_partidas SET precio_unitario=4.73, cantidad_presupuesto=3269.77 WHERE codigo='OE.1.1.5.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.5.6 - Remoción de Estructuras Metálicas
  UPDATE catalogo_partidas SET precio_unitario=3.36, cantidad_presupuesto=426.0 WHERE codigo='OE.1.1.5.6' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.6 - DEMOLICIONES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.6.1 - Demolicion de muros de ladrillo incluye cimentaciones
  UPDATE catalogo_partidas SET precio_unitario=19.99, cantidad_presupuesto=1017.36 WHERE codigo='OE.1.1.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.6.2 - Demolicion de muros de adobe incluye cimentaciones
  UPDATE catalogo_partidas SET precio_unitario=63.64, cantidad_presupuesto=202.45 WHERE codigo='OE.1.1.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.6.3 - DEMOLICIONES DE MUROS DE CONTENCION DE PIEDRA INC. CIMENTACIONES
  UPDATE catalogo_partidas SET precio_unitario=173.49, cantidad_presupuesto=780.0 WHERE codigo='OE.1.1.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.6.4 - Demolicion de Pisos  y falso pisos - Manual
  UPDATE catalogo_partidas SET precio_unitario=16.77, cantidad_presupuesto=1724.2 WHERE codigo='OE.1.1.6.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.6.5 - Eliminación de Demoliciones
  UPDATE catalogo_partidas SET precio_unitario=94.91, cantidad_presupuesto=3776.24 WHERE codigo='OE.1.1.6.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.6.6 - Demolicion de muros de contencion de concreto soterrado
  UPDATE catalogo_partidas SET precio_unitario=358.1, cantidad_presupuesto=538.29 WHERE codigo='OE.1.1.6.6' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.6.7 - Demolicion manual
  UPDATE catalogo_partidas SET precio_unitario=779.38, cantidad_presupuesto=268.49 WHERE codigo='OE.1.1.6.7' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.6.8 - Demolicion de estructuras de concreto armado (losas, vigas, columnas)
  UPDATE catalogo_partidas SET precio_unitario=358.1, cantidad_presupuesto=183.73 WHERE codigo='OE.1.1.6.8' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.6.9 - Demolicion de estructuras de concreto armado existente
  UPDATE catalogo_partidas SET precio_unitario=358.1, cantidad_presupuesto=36.95 WHERE codigo='OE.1.1.6.9' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.7 - MOVILIZACIÓN DE CAMPAMENTO, MAQUINARIA Y HERRAMIENTAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.7.2 - Movilización y desmovilización de equipos
  UPDATE catalogo_partidas SET precio_unitario=2400.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.1.7.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.8 - APUNTALAMIENTOS DE CONSTRUCCIONES EXISTENTES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.8.1 - Apuntalamiento de Construcciones Existentes
  UPDATE catalogo_partidas SET precio_unitario=53.06, cantidad_presupuesto=1.0 WHERE codigo='OE.1.1.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.9 - TRAZOS, NIVELES Y REPLANTEO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.9.1 - Trazo, niveles y replanteo preliminar
  UPDATE catalogo_partidas SET precio_unitario=3.3, cantidad_presupuesto=6451.57 WHERE codigo='OE.1.1.9.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.9.2 - Replanteo durante el proceso
  UPDATE catalogo_partidas SET precio_unitario=3261.54, cantidad_presupuesto=12.0 WHERE codigo='OE.1.1.9.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.9.3 - Establecimiento de punto geodesico Orden C con certificacion
  UPDATE catalogo_partidas SET precio_unitario=4500.0, cantidad_presupuesto=2.0 WHERE codigo='OE.1.1.9.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.9.4 - Control, trazo y replanteo en Obra
  UPDATE catalogo_partidas SET precio_unitario=61794.56, cantidad_presupuesto=24.0 WHERE codigo='OE.1.1.9.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.10 - DESMONTAJE Y MONTAJE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.10.1 - Desmontaje de cerco provisional de calamina
  UPDATE catalogo_partidas SET precio_unitario=19.82, cantidad_presupuesto=1432.18 WHERE codigo='OE.1.1.10.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.10.2 - Desmontaje de rampas de acceso
  UPDATE catalogo_partidas SET precio_unitario=39.3, cantidad_presupuesto=34.0 WHERE codigo='OE.1.1.10.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.10.3 - Reubicacion de escaleras metalicas
  UPDATE catalogo_partidas SET precio_unitario=0.87, cantidad_presupuesto=15601.45 WHERE codigo='OE.1.1.10.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.10.4 - Reubicacion de construcciones provisionales de estructuras metalicas
  UPDATE catalogo_partidas SET precio_unitario=0.87, cantidad_presupuesto=7320.18 WHERE codigo='OE.1.1.10.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.10.5 - Montaje y desmontaje de escuadra metalica
  UPDATE catalogo_partidas SET precio_unitario=24.5, cantidad_presupuesto=404.0 WHERE codigo='OE.1.1.10.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.11 - ADQUISICIONES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.11.1 - Adquisicion de equipos para el traslado de materiales en almacen
  UPDATE catalogo_partidas SET precio_unitario=10640.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.1.11.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.12 - PAGOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.12.1 - Pago de autorizacion de rotura de via GRGII-SGGO
  UPDATE catalogo_partidas SET precio_unitario=996.92, cantidad_presupuesto=1.0 WHERE codigo='OE.1.1.12.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.13 - REHABILITACION DE MAQUINARIAS Y EQUIPOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.13.1 - Rehabilitacion de maquinarias menores
  UPDATE catalogo_partidas SET precio_unitario=8015.7, cantidad_presupuesto=18.0 WHERE codigo='OE.1.1.13.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.14 - TRAMITES VARIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.1.1.14.1 - Tramites varios
  UPDATE catalogo_partidas SET precio_unitario=43153.9, cantidad_presupuesto=1.0 WHERE codigo='OE.1.1.14.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.2 - SEGURIDAD Y SALUD
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1 - ELABORACIÓN, IMPLEMENTACIÓN Y ADMINISTRACIÓN DEL PLAN DE SEGURIDAD Y SALUD EN EL TRABAJO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.1 - Elaboracion, Implementacion y administracion del Plan de Seguridad y Salud en el Trabajo
  UPDATE catalogo_partidas SET precio_unitario=3000.01, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.2 - Equipos de Proteccion  Individual
  UPDATE catalogo_partidas SET precio_unitario=1063.85, cantidad_presupuesto=300.0 WHERE codigo='OE.1.2.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.3 - Equipos de Proteccion Colectiva
  UPDATE catalogo_partidas SET precio_unitario=70980.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.4 - Señalizacion Temporal de Seguridad
  UPDATE catalogo_partidas SET precio_unitario=1575.38, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.5 - Capacitacion en Seguridad y Salud
  UPDATE catalogo_partidas SET precio_unitario=983.91, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.6 - Equipos de protección individual durante obra
  UPDATE catalogo_partidas SET precio_unitario=352036.86, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.7 - Equipos de Protección Colectiva en obra
  UPDATE catalogo_partidas SET precio_unitario=211766.76, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.8 - Habilitacion de señaleticas en obra
  UPDATE catalogo_partidas SET precio_unitario=6884.65, cantidad_presupuesto=24.0 WHERE codigo='OE.1.2.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.9 - Examen medico pre-ocupacional
  UPDATE catalogo_partidas SET precio_unitario=97.92, cantidad_presupuesto=1320.0 WHERE codigo='OE.1.2.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.10 - Plan de Seguridad y Salud en el Trabajo, Elaboración y Ejecución en obra
  UPDATE catalogo_partidas SET precio_unitario=7988.86, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.11 - Concientización en Seguridad y Salud
  UPDATE catalogo_partidas SET precio_unitario=20654.98, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.12 - Vigilancia y control de maquinaria en obra
  UPDATE catalogo_partidas SET precio_unitario=32712.8, cantidad_presupuesto=24.0 WHERE codigo='OE.1.2.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.13 - Habilitacion de casetas para puntos de hidratacion y lavado de manos
  UPDATE catalogo_partidas SET precio_unitario=347.31, cantidad_presupuesto=120.0 WHERE codigo='OE.1.2.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.14 - Implementacion de vias peatonales, rampas y accesos
  UPDATE catalogo_partidas SET precio_unitario=197.62, cantidad_presupuesto=400.0 WHERE codigo='OE.1.2.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.15 - Limpieza permanente en obra
  UPDATE catalogo_partidas SET precio_unitario=40017.6, cantidad_presupuesto=24.0 WHERE codigo='OE.1.2.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.16 - Desmontaje y montaje de comedor provisional en obra
  UPDATE catalogo_partidas SET precio_unitario=7.41, cantidad_presupuesto=216.0 WHERE codigo='OE.1.2.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.17 - Carpas para comedor provisional en obra
  UPDATE catalogo_partidas SET precio_unitario=868.94, cantidad_presupuesto=3.0 WHERE codigo='OE.1.2.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.18 - Montaje y Desmontaje de proteccion perimetral con malla Rashell
  UPDATE catalogo_partidas SET precio_unitario=12.36, cantidad_presupuesto=1540.0 WHERE codigo='OE.1.2.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.19 - Adquisicion de equipos de proteccion personal para obra
  UPDATE catalogo_partidas SET precio_unitario=1210000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.20 - Implementos de Seguridad Personal
  UPDATE catalogo_partidas SET precio_unitario=944816.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.1.20' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.1.21 - Adquisicion de Uniformes para Personal Obrero
  UPDATE catalogo_partidas SET precio_unitario=367440.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.1.21' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.2 - RECURSOS PARA RESPUESTAS ANTE EMERGENCIAS EN SEGURIDAD Y  SALUD DURANTE EL TRABAJO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.2.1 - Equipos de Primeros Auxilios y de Socorro
  UPDATE catalogo_partidas SET precio_unitario=696.4, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.2.2 - Equipos contra incendios
  UPDATE catalogo_partidas SET precio_unitario=1766.69, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.3 - SERVICIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.3.1 - Monitoreos ocupacionales
  UPDATE catalogo_partidas SET precio_unitario=32000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.3.2 - Auditorias de seguridad y salud en el trabajo
  UPDATE catalogo_partidas SET precio_unitario=30000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.3.3 - Mantenimiento preventivo y recarga de extintor de polvo quimico seco ABC de 6 kg
  UPDATE catalogo_partidas SET precio_unitario=1350.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.3.4 - Evaluacion medico ocupacional
  UPDATE catalogo_partidas SET precio_unitario=179.17, cantidad_presupuesto=720.0 WHERE codigo='OE.1.2.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.4 - CAPACITACIONES ESPECIFICAS DE SEGURIDAD Y SALUD EN OBRA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.4.1 - CAPACITACIONES DE TRABAJO DE ALTO RIESGO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.2.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.4.1.1 - Capacitacion-trabajos en altura
  UPDATE catalogo_partidas SET precio_unitario=3021.9, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.4.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.4.1.2 - Capacitacion-uso de herramientas de poder
  UPDATE catalogo_partidas SET precio_unitario=1600.48, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.4.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.4.1.3 - Capacitacion-trabajos en caliente
  UPDATE catalogo_partidas SET precio_unitario=578.76, cantidad_presupuesto=2.0 WHERE codigo='OE.1.2.4.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.4.1.4 - Capacitacion-trabajos en espacio confinado
  UPDATE catalogo_partidas SET precio_unitario=470.72, cantidad_presupuesto=2.0 WHERE codigo='OE.1.2.4.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.4.1.5 - Capacitacion de manipulacion de productos quimicos
  UPDATE catalogo_partidas SET precio_unitario=578.76, cantidad_presupuesto=2.0 WHERE codigo='OE.1.2.4.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.4.1.6 - Capacitacion-primeros auxilios
  UPDATE catalogo_partidas SET precio_unitario=623.4, cantidad_presupuesto=2.0 WHERE codigo='OE.1.2.4.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.5 - CAPACITACIONES TRIMESTRALES GENERALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.5.1 - Capacitaciones trimestrales en seguridad y salud
  UPDATE catalogo_partidas SET precio_unitario=18314.64, cantidad_presupuesto=8.0 WHERE codigo='OE.1.2.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6 - ADQUISICION DE MATERIALES Y EQUIPOS DE CONTROL DE SEGURIDAD
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.1 - Adquisicion de extintores contra incendio
  UPDATE catalogo_partidas SET precio_unitario=195.0, cantidad_presupuesto=60.0 WHERE codigo='OE.1.2.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.2 - Adquisicion de enmicadora para señalizacion
  UPDATE catalogo_partidas SET precio_unitario=2000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.3 - Adquisicion de equipos de comunicacion en obra
  UPDATE catalogo_partidas SET precio_unitario=31200.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.4 - Adquisicion de materiales de limpieza e higiene en obra
  UPDATE catalogo_partidas SET precio_unitario=39843.2, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.5 - Adquisicion de insumos para primeros auxilios
  UPDATE catalogo_partidas SET precio_unitario=41196.9, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.6 - Adquisicion de equipos audiovisuales
  UPDATE catalogo_partidas SET precio_unitario=12998.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.6' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.7 - Adquisicion de bienes para comedor
  UPDATE catalogo_partidas SET precio_unitario=34080.0, cantidad_presupuesto=2.0 WHERE codigo='OE.1.2.6.7' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.8 - Adquisicion de señaleticas para obra
  UPDATE catalogo_partidas SET precio_unitario=52087.24, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.8' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.9 - Adquisicion de agua de meza para hidratacion de personal
  UPDATE catalogo_partidas SET precio_unitario=30314.2, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.9' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.10 - Adquisicion de casillero de metal - Locker
  UPDATE catalogo_partidas SET precio_unitario=34960.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.10' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.11 - Adquisicion de equipos médicos
  UPDATE catalogo_partidas SET precio_unitario=18365.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.11' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.12 - Adquisicion de insumos de tópico
  UPDATE catalogo_partidas SET precio_unitario=12025.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.12' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.13 - Adquisicion de materiales de aseo y limpieza
  UPDATE catalogo_partidas SET precio_unitario=7340.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.13' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.14 - Adquisicion de megafonos
  UPDATE catalogo_partidas SET precio_unitario=300.0, cantidad_presupuesto=20.0 WHERE codigo='OE.1.2.6.14' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.15 - Adquisicion de insumos para sistema anticaidas
  UPDATE catalogo_partidas SET precio_unitario=42320.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.15' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.16 - Adquisicion de equipos de proyeccion y sonido
  UPDATE catalogo_partidas SET precio_unitario=40100.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.16' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.17 - Adquisicion de contenedores y bolsas de polietileno
  UPDATE catalogo_partidas SET precio_unitario=17000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.17' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.18 - Adquisicion de insumos para la estacion de emergencia
  UPDATE catalogo_partidas SET precio_unitario=16800.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.18' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.19 - Adquisicion de elementos de comunicacion visual y señalizacion
  UPDATE catalogo_partidas SET precio_unitario=10255.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.19' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.20 - Aquisicion de implementos de cocina
  UPDATE catalogo_partidas SET precio_unitario=31462.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.20' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.21 - Adquisicion de mobiliario metalico para almacenamiento personal
  UPDATE catalogo_partidas SET precio_unitario=42797.5, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.6.21' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.6.22 - Adquisicion de agua de mesa descartable
  UPDATE catalogo_partidas SET precio_unitario=21.83, cantidad_presupuesto=5700.0 WHERE codigo='OE.1.2.6.22' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7 - SISTEMA DE VIDEO VIGILANCIA OCUPACIONAL EN OBRA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.1 - Equipos de video-vigilancia de seguridad ocupacional en obra
  UPDATE catalogo_partidas SET precio_unitario=30000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.2 - Adquisicion de equipos de video-vigilancia de seguridad ocupacional en obra
  UPDATE catalogo_partidas SET precio_unitario=21030.0, cantidad_presupuesto=0.0 WHERE codigo='OE.1.2.7.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.3 - Adquisicion de cableado UTP
  UPDATE catalogo_partidas SET precio_unitario=6.0, cantidad_presupuesto=2135.0 WHERE codigo='OE.1.2.7.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.4 - Adquisicion de conectores
  UPDATE catalogo_partidas SET precio_unitario=4.8, cantidad_presupuesto=200.0 WHERE codigo='OE.1.2.7.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.5 - Adquisicion e instalacion de gabinete para protección de equipos de videovigilancia
  UPDATE catalogo_partidas SET precio_unitario=1610.31, cantidad_presupuesto=6.0 WHERE codigo='OE.1.2.7.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.6 - Adquisicion e instalacion de NVR de 16 canales
  UPDATE catalogo_partidas SET precio_unitario=5260.31, cantidad_presupuesto=3.0 WHERE codigo='OE.1.2.7.6' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.7 - Adquisicion e instalacion de NVR de 32 canales
  UPDATE catalogo_partidas SET precio_unitario=9760.31, cantidad_presupuesto=1.0 WHERE codigo='OE.1.2.7.7' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.8 - Adquisicion de monitor Led de 27"
  UPDATE catalogo_partidas SET precio_unitario=1200.0, cantidad_presupuesto=2.0 WHERE codigo='OE.1.2.7.8' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.9 - Adquisicion de monitor Led de 32"
  UPDATE catalogo_partidas SET precio_unitario=2725.0, cantidad_presupuesto=2.0 WHERE codigo='OE.1.2.7.9' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.10 - Adquisicion e instalacion de punto de acceso inalambrico
  UPDATE catalogo_partidas SET precio_unitario=2012.07, cantidad_presupuesto=5.0 WHERE codigo='OE.1.2.7.10' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.11 - Adquisicion e instalacion de Switch de 16 puertos POE
  UPDATE catalogo_partidas SET precio_unitario=1500.0, cantidad_presupuesto=3.0 WHERE codigo='OE.1.2.7.11' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.12 - Adquisicion e instalacion de UPS
  UPDATE catalogo_partidas SET precio_unitario=268.07, cantidad_presupuesto=6.0 WHERE codigo='OE.1.2.7.12' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.13 - Adquisicion de camara Tipo Bullet
  UPDATE catalogo_partidas SET precio_unitario=1150.0, cantidad_presupuesto=15.0 WHERE codigo='OE.1.2.7.13' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.14 - Instalacion de Camaras Bullet
  UPDATE catalogo_partidas SET precio_unitario=32.07, cantidad_presupuesto=35.0 WHERE codigo='OE.1.2.7.14' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.15 - Instalacion de camara PTZ
  UPDATE catalogo_partidas SET precio_unitario=53.43, cantidad_presupuesto=2.0 WHERE codigo='OE.1.2.7.15' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.16 - Instalacion de cableado UTP
  UPDATE catalogo_partidas SET precio_unitario=3.2, cantidad_presupuesto=2135.0 WHERE codigo='OE.1.2.7.16' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.17 - Ponchado de cable
  UPDATE catalogo_partidas SET precio_unitario=16.03, cantidad_presupuesto=200.0 WHERE codigo='OE.1.2.7.17' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.18 - CENTRAL DE CREACION Y ENTRENAMIENTO DE INTELIGENCIA ARTIFICIAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.2.7.18' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.18.1 - Adquisicion de estacion de trabajo
  UPDATE catalogo_partidas SET precio_unitario=10118.36, cantidad_presupuesto=2.0 WHERE codigo='OE.1.2.7.18.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.18.2 - Adquisicion de monitor de trabajo
  UPDATE catalogo_partidas SET precio_unitario=1582.88, cantidad_presupuesto=2.0 WHERE codigo='OE.1.2.7.18.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.19 - CABINA DE INGRESO Y SALIDA DE PERSONAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.2.7.19' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.7.19.1 - Habilitacion de cabina para registro de personal de obra
  UPDATE catalogo_partidas SET precio_unitario=220.23, cantidad_presupuesto=9.0 WHERE codigo='OE.1.2.7.19.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.8 - TRABAJOS COMPLEMENTARIOS DE SEGURIDAD Y SALUD OCUPACIONAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.8.1 - Montaje y desmontaje de domo pre-fabricado para comedor
  UPDATE catalogo_partidas SET precio_unitario=1336.08, cantidad_presupuesto=3.0 WHERE codigo='OE.1.2.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.8.2 - Habilitado y colocado de barandas de acero de seguridad
  UPDATE catalogo_partidas SET precio_unitario=2.06, cantidad_presupuesto=6812.6 WHERE codigo='OE.1.2.8.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.8.3 - Instalacion de lineas de vida
  UPDATE catalogo_partidas SET precio_unitario=3.3, cantidad_presupuesto=21000.0 WHERE codigo='OE.1.2.8.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.8.4 - Acarreo de agua para lavado de manos
  UPDATE catalogo_partidas SET precio_unitario=0.56, cantidad_presupuesto=96000.0 WHERE codigo='OE.1.2.8.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.8.5 - Acarreo de agua para consumo de personal
  UPDATE catalogo_partidas SET precio_unitario=0.56, cantidad_presupuesto=120000.0 WHERE codigo='OE.1.2.8.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.8.6 - Acarreo de materiales para trabajos complementarios de seguridad
  UPDATE catalogo_partidas SET precio_unitario=0.2, cantidad_presupuesto=60686.0 WHERE codigo='OE.1.2.8.6' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.8.7 - Habilitacion de acceso temporal
  UPDATE catalogo_partidas SET precio_unitario=2.23, cantidad_presupuesto=2400.0 WHERE codigo='OE.1.2.8.7' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.8.8 - Colocacion de arranque para barandas rigidas
  UPDATE catalogo_partidas SET precio_unitario=7.01, cantidad_presupuesto=3000.0 WHERE codigo='OE.1.2.8.8' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.8.9 - Instalacion y reposicion de capuchones
  UPDATE catalogo_partidas SET precio_unitario=0.44, cantidad_presupuesto=50000.0 WHERE codigo='OE.1.2.8.9' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.8.10 - Habilitacion e instalacion de tapas para ductos
  UPDATE catalogo_partidas SET precio_unitario=6.67, cantidad_presupuesto=2532.15 WHERE codigo='OE.1.2.8.10' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.8.11 - Preparacion de materiales y elaboracion de señaletica
  UPDATE catalogo_partidas SET precio_unitario=11.57, cantidad_presupuesto=1800.0 WHERE codigo='OE.1.2.8.11' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.8.12 - Instalacion y reposicion de cinta y malla de seguridad
  UPDATE catalogo_partidas SET precio_unitario=0.89, cantidad_presupuesto=80000.0 WHERE codigo='OE.1.2.8.12' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.8.13 - Corte y retiro de arranques
  UPDATE catalogo_partidas SET precio_unitario=3.27, cantidad_presupuesto=3000.0 WHERE codigo='OE.1.2.8.13' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.8.14 - Instalacion de rodapies
  UPDATE catalogo_partidas SET precio_unitario=20.69, cantidad_presupuesto=400.0 WHERE codigo='OE.1.2.8.14' AND proyecto_id=v_proyecto_id;
  -- OE.1.2.8.15 - Instalacion de malla anticaida
  UPDATE catalogo_partidas SET precio_unitario=9.8, cantidad_presupuesto=300.0 WHERE codigo='OE.1.2.8.15' AND proyecto_id=v_proyecto_id;
  -- OE.1.3 - PLAN DE MONITOREO ARQUEOLOGICO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.3.1 - IMPLEMENTACION PARA TRABAJOS DE MOVIMIENTO DE TIERRA AL NIVEL DE SEGUIMIENTO DEL PEA 2022
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.3.1.1 - Cubiertas para zanjas/movimiento de tierra a nivel de seguimiento
  UPDATE catalogo_partidas SET precio_unitario=50.49, cantidad_presupuesto=300.0 WHERE codigo='OE.1.3.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.3.1.2 - Trazado de zanjas para movimiento de tierra a nivel de seguimiento del PEA - 2022
  UPDATE catalogo_partidas SET precio_unitario=15.04, cantidad_presupuesto=250.0 WHERE codigo='OE.1.3.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.3.2 - MOVIMIENTO DE TIERRA A NIVEL DE SEGUIMIENTO DE LAS ESTRUCTURAS DEL PEA 2022
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.3.2.1 - Movimiento de tierra a nivel de seguimiento de las estructuras del PEA 2022
  UPDATE catalogo_partidas SET precio_unitario=708.51, cantidad_presupuesto=290.0 WHERE codigo='OE.1.3.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.3.3 - REGISTRO DE ZANJAS/MOVIMIENTO DE TIERRA A NIVEL DE SEGUIMIENTO DE LAS ESTRUCTURAS DEL PEA - 2022
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.3.3.1 - Registro grafico de zanjas (ficha de hallazgo, de excavación, arquitectura, diario de campo, ficha de monitoreo)
  UPDATE catalogo_partidas SET precio_unitario=51.17, cantidad_presupuesto=180.0 WHERE codigo='OE.1.3.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.3.3.2 - Dibujo en papel milimétrico
  UPDATE catalogo_partidas SET precio_unitario=307.02, cantidad_presupuesto=70.0 WHERE codigo='OE.1.3.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.3.3.3 - Digitalización en gabinete de fichas levantadas
  UPDATE catalogo_partidas SET precio_unitario=34.72, cantidad_presupuesto=210.0 WHERE codigo='OE.1.3.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.3.4 - PROCESO DE CONSERVACION DE MATERIAL CULTURAL (TRABAJO DE GABINETE)
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.3.4.1 - Lavado de material cultural
  UPDATE catalogo_partidas SET precio_unitario=63.9, cantidad_presupuesto=140.0 WHERE codigo='OE.1.3.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.3.4.2 - Clasificado y análisis de material cultural
  UPDATE catalogo_partidas SET precio_unitario=122.81, cantidad_presupuesto=140.0 WHERE codigo='OE.1.3.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.3.4.3 - Codificado de material cultural
  UPDATE catalogo_partidas SET precio_unitario=69.45, cantidad_presupuesto=140.0 WHERE codigo='OE.1.3.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.3.4.4 - Inventario de material cultural
  UPDATE catalogo_partidas SET precio_unitario=34.72, cantidad_presupuesto=140.0 WHERE codigo='OE.1.3.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.3.4.5 - Embalado de material cultural
  UPDATE catalogo_partidas SET precio_unitario=31.9, cantidad_presupuesto=140.0 WHERE codigo='OE.1.3.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.4 - CONSERVACION PREVENTIVA Y DEFINITIVA  DE HALLAZGOS  ARQUEOLOGICOS Y REPUBLICANOS (CANALES Y MUROS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1 - RECOMPOSICION ANASTILOSIS - RESCATE DE MUROS PREHISPANICOS/REPUBLICANO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.1 - PREPARACION DE MORTERO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.4.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.1.1 - Preparación de mortero para canal prehispanico
  UPDATE catalogo_partidas SET precio_unitario=148.64, cantidad_presupuesto=22.0 WHERE codigo='OE.1.4.1.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.1.2 - Preparación de mortero para canal republicano
  UPDATE catalogo_partidas SET precio_unitario=151.36, cantidad_presupuesto=10.0 WHERE codigo='OE.1.4.1.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.2 - CUBERTINAS DE PROTECCION DE CABECERA DE MUROS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.4.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.2.1 - Cubertinas de protección con mortero de tierra, arcilla, arena, cal y piedra chancada
  UPDATE catalogo_partidas SET precio_unitario=369.75, cantidad_presupuesto=2.0 WHERE codigo='OE.1.4.1.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.3 - ARMADO EN ANASTILOSIS  MUROS Y CANALES PREHISPANICO/REPUBLICANO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.4.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.3.1 - Desmontado, Anastilosis de estructura de canal Prehispánico
  UPDATE catalogo_partidas SET precio_unitario=320.2, cantidad_presupuesto=36.0 WHERE codigo='OE.1.4.1.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.3.2 - Desmontado, Anastilosis de estructura de canal Republicano
  UPDATE catalogo_partidas SET precio_unitario=320.2, cantidad_presupuesto=36.0 WHERE codigo='OE.1.4.1.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.3.3 - Reticulado y codificado de estructura Canal Prehispánico
  UPDATE catalogo_partidas SET precio_unitario=85.16, cantidad_presupuesto=60.0 WHERE codigo='OE.1.4.1.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.3.4 - Reticulado y codificado de estructura Canal Republicano
  UPDATE catalogo_partidas SET precio_unitario=85.16, cantidad_presupuesto=40.0 WHERE codigo='OE.1.4.1.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.4 - EMBOQUILLADO CON MORTERO PREPARADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.4.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.4.1 - Emboquillado de muros Prehispánico
  UPDATE catalogo_partidas SET precio_unitario=89.05, cantidad_presupuesto=150.0 WHERE codigo='OE.1.4.1.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.4.2 - Emboquillado de muros Republicano
  UPDATE catalogo_partidas SET precio_unitario=89.05, cantidad_presupuesto=71.0 WHERE codigo='OE.1.4.1.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.5 - CONSOLIDACION
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.4.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.5.1 - Consolidación de canales Pre Hispánicos
  UPDATE catalogo_partidas SET precio_unitario=71.73, cantidad_presupuesto=15.0 WHERE codigo='OE.1.4.1.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.5.2 - Consolidación de canales Republicanos
  UPDATE catalogo_partidas SET precio_unitario=71.73, cantidad_presupuesto=20.0 WHERE codigo='OE.1.4.1.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.5.3 - Consolidación de muros rustico
  UPDATE catalogo_partidas SET precio_unitario=440.41, cantidad_presupuesto=1.0 WHERE codigo='OE.1.4.1.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.6 - RECOMPOSICION
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.4.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.6.1 - Recomposición de muros rustico
  UPDATE catalogo_partidas SET precio_unitario=440.41, cantidad_presupuesto=1.0 WHERE codigo='OE.1.4.1.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.6.2 - Recomposición de canal  Pre Hispánicos
  UPDATE catalogo_partidas SET precio_unitario=146.8, cantidad_presupuesto=8.0 WHERE codigo='OE.1.4.1.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.6.3 - Recomposición de canal Republicano
  UPDATE catalogo_partidas SET precio_unitario=146.8, cantidad_presupuesto=10.0 WHERE codigo='OE.1.4.1.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.7 - RESTITUCION CON MATERIAL PROPIO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.4.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.7.1 - Restitución de muros rustico con material propio
  UPDATE catalogo_partidas SET precio_unitario=102.34, cantidad_presupuesto=3.0 WHERE codigo='OE.1.4.1.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.7.2 - Restitución de canales Pre Hispánicos rustico (con material propio)
  UPDATE catalogo_partidas SET precio_unitario=102.34, cantidad_presupuesto=5.0 WHERE codigo='OE.1.4.1.7.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.7.3 - Restitución de canal Republicano (con material propio)
  UPDATE catalogo_partidas SET precio_unitario=102.34, cantidad_presupuesto=4.0 WHERE codigo='OE.1.4.1.7.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.7.4 - Tratamiento de pisos: tierra: arcilla, gravilla
  UPDATE catalogo_partidas SET precio_unitario=22.02, cantidad_presupuesto=75.0 WHERE codigo='OE.1.4.1.7.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.8 - MANTENIMIENTO POST INVERSION
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.4.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.8.1 - Mantenimiento Post Inversión
  UPDATE catalogo_partidas SET precio_unitario=248.78, cantidad_presupuesto=12.0 WHERE codigo='OE.1.4.1.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.9 - VARIOS, LIMPIEZA Y JARDINERIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.4.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.1.9.1 - Limpieza de retículas y codificado
  UPDATE catalogo_partidas SET precio_unitario=199.87, cantidad_presupuesto=50.0 WHERE codigo='OE.1.4.1.9.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.2 - VARIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.2.1 - Señalética para Arqueología inc instalacion
  UPDATE catalogo_partidas SET precio_unitario=1200.0, cantidad_presupuesto=1.0 WHERE codigo='OE.1.4.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.4.2.2 - Señalética para arqueología - en concreto y mayólica grabada en alto relieve
  UPDATE catalogo_partidas SET precio_unitario=5000.0, cantidad_presupuesto=5.0 WHERE codigo='OE.1.4.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.5 - TRAMITES EN LA DDC CUSCO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.5.1 - PAGO DE  APROBACION DEL INFORME FINAL AL PMAR
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.5.1.1 - Servicio de aprobación del informe final al PMAR
  UPDATE catalogo_partidas SET precio_unitario=1071.02, cantidad_presupuesto=1.0 WHERE codigo='OE.1.5.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.5.2 - PAGO AL MINISTERIO DE CULTURA - PRA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.5.2.1 - Pago al Ministerio De Cultura - PRA
  UPDATE catalogo_partidas SET precio_unitario=1807.6, cantidad_presupuesto=1.0 WHERE codigo='OE.1.5.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.5.3 - PAGO AL MINISTERIO DE CULTURA - PRA - INSPECCION
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.5.3.1 - Pago al Ministerio De Cultura - PRA- Inspeccion
  UPDATE catalogo_partidas SET precio_unitario=4762.4, cantidad_presupuesto=1.0 WHERE codigo='OE.1.5.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.5.4 - PAGO DE AUTORIZACION PMA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.5.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.5.4.1 - PAGO DE AUTORIZACION PMA
  UPDATE catalogo_partidas SET precio_unitario=1158.6, cantidad_presupuesto=1.0 WHERE codigo='OE.1.5.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.6 - SEGMENTO DE MURO PREHISPANICO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.1 - Registro arqueológico en papel milimétrico de segmento de muro prehispánico
  UPDATE catalogo_partidas SET precio_unitario=64.12, cantidad_presupuesto=12.0 WHERE codigo='OE.1.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.2 - Reticulado y codificado segmento de muro prehispánico
  UPDATE catalogo_partidas SET precio_unitario=48.05, cantidad_presupuesto=12.0 WHERE codigo='OE.1.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.3 - Desmontado y anastilosis de segmento de muro prehispánico
  UPDATE catalogo_partidas SET precio_unitario=180.2, cantidad_presupuesto=13.2 WHERE codigo='OE.1.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.4 - Recomposición de segmento de muro prehispánico
  UPDATE catalogo_partidas SET precio_unitario=360.4, cantidad_presupuesto=13.2 WHERE codigo='OE.1.6.4' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.5 - Transporte de material, elementos liticos, tierra y arcilla
  UPDATE catalogo_partidas SET precio_unitario=148.58, cantidad_presupuesto=65.0 WHERE codigo='OE.1.6.5' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.6 - Acarreo de material en obra D=150m
  UPDATE catalogo_partidas SET precio_unitario=113.51, cantidad_presupuesto=31.5 WHERE codigo='OE.1.6.6' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.7 - Restitución con material propio de segmento de muro prehispanico
  UPDATE catalogo_partidas SET precio_unitario=227.01, cantidad_presupuesto=2.77 WHERE codigo='OE.1.6.7' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.8 - Preparacion de mortero para segmento de muro prehispanico
  UPDATE catalogo_partidas SET precio_unitario=65.96, cantidad_presupuesto=3.03 WHERE codigo='OE.1.6.8' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.9 - Cubertina de proteccion para segmento de muro prehispanico
  UPDATE catalogo_partidas SET precio_unitario=73.41, cantidad_presupuesto=5.5 WHERE codigo='OE.1.6.9' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.10 - Canteado de piedra para segmento de muro prehispanico
  UPDATE catalogo_partidas SET precio_unitario=227.01, cantidad_presupuesto=2.0 WHERE codigo='OE.1.6.10' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.11 - Emboquillado de segmento de muro prehispanico
  UPDATE catalogo_partidas SET precio_unitario=32.07, cantidad_presupuesto=10.0 WHERE codigo='OE.1.6.11' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.12 - Armado de balizas y crucetas para segmento de muro prehispanico
  UPDATE catalogo_partidas SET precio_unitario=448.87, cantidad_presupuesto=2.0 WHERE codigo='OE.1.6.12' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.13 - Excavaciones restringidas
  UPDATE catalogo_partidas SET precio_unitario=587.41, cantidad_presupuesto=15.6 WHERE codigo='OE.1.6.13' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.14 - Zarandeo de tierra para elaboracion de mortero
  UPDATE catalogo_partidas SET precio_unitario=113.78, cantidad_presupuesto=21.0 WHERE codigo='OE.1.6.14' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.15 - Recuperacion de elementos liticos aislados
  UPDATE catalogo_partidas SET precio_unitario=454.02, cantidad_presupuesto=3.0 WHERE codigo='OE.1.6.15' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.16 - Digitalizacion del registro arqueologico
  UPDATE catalogo_partidas SET precio_unitario=34.06, cantidad_presupuesto=10.0 WHERE codigo='OE.1.6.16' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.17 - Cuidado y proteccion permanente de los hallazgos arqueologicos
  UPDATE catalogo_partidas SET precio_unitario=56.77, cantidad_presupuesto=38.0 WHERE codigo='OE.1.6.17' AND proyecto_id=v_proyecto_id;
  -- OE.1.6.18 - Limpieza de segmento de muro prehispanico durante la excavacion
  UPDATE catalogo_partidas SET precio_unitario=195.8, cantidad_presupuesto=26.4 WHERE codigo='OE.1.6.18' AND proyecto_id=v_proyecto_id;
  -- OE.2 - ESTRUCTURAS.
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.1 - MOVIMIENTO DE TIERRAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.1 - NIVELACIÓN DE TERRENO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.1.1 - Nivelación con maquinaria a nivel de sub rasante
  UPDATE catalogo_partidas SET precio_unitario=2.07, cantidad_presupuesto=0.0 WHERE codigo='OE.2.1.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.1.2 - Nivelacion manual de terreno a nivel de desplante
  UPDATE catalogo_partidas SET precio_unitario=12.8, cantidad_presupuesto=6387.71 WHERE codigo='OE.2.1.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.1.3 - Nivelado con maquinaria (minicargador frontal)
  UPDATE catalogo_partidas SET precio_unitario=1.36, cantidad_presupuesto=800.0 WHERE codigo='OE.2.1.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.1.4 - Nivelado con maquinaria (retroexcavadora)
  UPDATE catalogo_partidas SET precio_unitario=0.99, cantidad_presupuesto=1434.0 WHERE codigo='OE.2.1.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.2 - EXCAVACIONES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.2.1 - EXCAVACIONES MASIVAS CON MAQUINARIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.1.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.2.1.1 - Excavaciones masivas para instalación de muros pantalla
  UPDATE catalogo_partidas SET precio_unitario=30.71, cantidad_presupuesto=0.0 WHERE codigo='OE.2.1.2.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.2.2 - EXCAVACIONES SIMPLES CON MAQUINARIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.1.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.2.2.1 - Excavaciones simples en material suelto -maquinaria
  UPDATE catalogo_partidas SET precio_unitario=30.71, cantidad_presupuesto=8029.51 WHERE codigo='OE.2.1.2.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.2.3 - EXCAVACIONES MANUALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.1.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.2.3.1 - Excavacion manual en terreno natural
  UPDATE catalogo_partidas SET precio_unitario=53.36, cantidad_presupuesto=451.83 WHERE codigo='OE.2.1.2.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.3 - CORTE DE PLATAFORMA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.3.1 - Corte de plataforma con maquinaria en terreno natural
  UPDATE catalogo_partidas SET precio_unitario=9.97, cantidad_presupuesto=0.0 WHERE codigo='OE.2.1.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.3.2 - Corte de terreno con maquinaria pesada
  UPDATE catalogo_partidas SET precio_unitario=30.07, cantidad_presupuesto=50876.88 WHERE codigo='OE.2.1.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.4 - RELLENOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.4.2 - RELLENOS CON MATERIAL DE PRÉSTAMO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.1.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.4.2.1 - Relleno y compactado con material de prestamo en estructuras
  UPDATE catalogo_partidas SET precio_unitario=89.45, cantidad_presupuesto=5019.83 WHERE codigo='OE.2.1.4.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.4.2.2 - Relleno y compactado con material afirmado + bolonería de diam=6"
  UPDATE catalogo_partidas SET precio_unitario=79.08, cantidad_presupuesto=2312.12 WHERE codigo='OE.2.1.4.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.4.2.3 - Relleno y compactado con material granular
  UPDATE catalogo_partidas SET precio_unitario=113.45, cantidad_presupuesto=205.1 WHERE codigo='OE.2.1.4.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.4.2.4 - Pedraplenado conformado con piedra de 4"-12"
  UPDATE catalogo_partidas SET precio_unitario=104.34, cantidad_presupuesto=3625.82 WHERE codigo='OE.2.1.4.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.4.2.5 - Relleno de estrato de transicion con piedra over 3/4"-6"
  UPDATE catalogo_partidas SET precio_unitario=19.96, cantidad_presupuesto=6740.18 WHERE codigo='OE.2.1.4.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.4.2.6 - Relleno y compactado con material de prestamo seleccionado
  UPDATE catalogo_partidas SET precio_unitario=31.18, cantidad_presupuesto=4945.32 WHERE codigo='OE.2.1.4.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.4.3 - ENROCADO NIVELANTE Y DE PROTECCION DE CIMENTACIONES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.1.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.4.3.1 - Enrocado para conformacion de cimentaciones h=0.60m
  UPDATE catalogo_partidas SET precio_unitario=165.12, cantidad_presupuesto=3362.88 WHERE codigo='OE.2.1.4.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.4.3.2 - Tendido de grava para nivelado de enrocado h=0.15m
  UPDATE catalogo_partidas SET precio_unitario=18.27, cantidad_presupuesto=4670.67 WHERE codigo='OE.2.1.4.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.4.3.3 - Empedrado para conformación de cimentaciones h=0.80m
  UPDATE catalogo_partidas SET precio_unitario=182.8, cantidad_presupuesto=19.1 WHERE codigo='OE.2.1.4.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.5 - NIVELACION INTERIOR Y APISONADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.5.1 - Nivelación interior y apisonado
  UPDATE catalogo_partidas SET precio_unitario=13.61, cantidad_presupuesto=3771.72 WHERE codigo='OE.2.1.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.6 - ELIMINACION DE MATERIAL EXCEDENTE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.6.1 - Acarreo de material excedente manual
  UPDATE catalogo_partidas SET precio_unitario=21.01, cantidad_presupuesto=9058.72 WHERE codigo='OE.2.1.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.6.3 - Eliminación de material excedente con maquinaria a DME
  UPDATE catalogo_partidas SET precio_unitario=64.22, cantidad_presupuesto=0.0 WHERE codigo='OE.2.1.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.6.4 - Remoción de material sobrante mediante maquinaria a DME
  UPDATE catalogo_partidas SET precio_unitario=6.18, cantidad_presupuesto=56894.79 WHERE codigo='OE.2.1.6.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.1.6.5 - Eliminación de material excedente con maquinaria a DME D = 8.5 km
  UPDATE catalogo_partidas SET precio_unitario=37.02, cantidad_presupuesto=306.0 WHERE codigo='OE.2.1.6.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.2 - OBRAS CONCRETO SIMPLE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.1 - CIMIENTOS CORRIDOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.1.1 - Cimiento corridos - Concreto f'c=175 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=456.34, cantidad_presupuesto=0.0 WHERE codigo='OE.2.2.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.1.2 - Cimiento Corrido - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=64.92, cantidad_presupuesto=0.0 WHERE codigo='OE.2.2.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.1.3 - Cimientos Corridos - Encofrado y desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=69.62, cantidad_presupuesto=785.34 WHERE codigo='OE.2.2.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.1.4 - Cimiento corridos - Concreto pre mezclado F'C=175 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=397.93, cantidad_presupuesto=195.71 WHERE codigo='OE.2.2.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.1.5 - Cimiento corrido - Concreto ciclopeo f’c=100 kg/cm² +  30% PIEDRA GRANDE
  UPDATE catalogo_partidas SET precio_unitario=508.17, cantidad_presupuesto=1.36 WHERE codigo='OE.2.2.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.2 - SUB ZAPATAS O FALSA ZAPATA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.2.1 - Falsa zapata f´c=100kg/cm2 + 30% P.G 10" max.
  UPDATE catalogo_partidas SET precio_unitario=327.88, cantidad_presupuesto=0.0 WHERE codigo='OE.2.2.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.3 - SOLADOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.3.1 - Solado f´c=100 kg/cm2, H=10 CM
  UPDATE catalogo_partidas SET precio_unitario=41.12, cantidad_presupuesto=4150.21 WHERE codigo='OE.2.2.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.3.2 - Concreto f'c=100 kg/cm2 para nivelado de enrocado
  UPDATE catalogo_partidas SET precio_unitario=51.03, cantidad_presupuesto=1365.24 WHERE codigo='OE.2.2.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.3.3 - Solado - concreto premezclado f'c=175 kg/cm2, H= 10 cm
  UPDATE catalogo_partidas SET precio_unitario=41.65, cantidad_presupuesto=218.22 WHERE codigo='OE.2.2.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.5 - ESTRUCTURA DE SOSTENIMIENTO DE EXCAVACIONES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.5.1 - Calzaduras- concreto f'c=140 kg/cm2+30% P.M
  UPDATE catalogo_partidas SET precio_unitario=418.22, cantidad_presupuesto=0.0 WHERE codigo='OE.2.2.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.5.2 - Calzadura - Encofrado y Desencofrado
  UPDATE catalogo_partidas SET precio_unitario=41.51, cantidad_presupuesto=0.0 WHERE codigo='OE.2.2.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.5.3 - Calzadura - Encofrado y Desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=64.66, cantidad_presupuesto=68.75 WHERE codigo='OE.2.2.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.5.4 - Calzaduras- concreto ciclopeo f'c=140 kg/cm2+30% P.M
  UPDATE catalogo_partidas SET precio_unitario=569.55, cantidad_presupuesto=86.48 WHERE codigo='OE.2.2.5.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.2.5.5 - Estructura de sostenimiento-concreto ciclopeo f'c=100 kg/cm2+50% P.G.
  UPDATE catalogo_partidas SET precio_unitario=357.41, cantidad_presupuesto=960.02 WHERE codigo='OE.2.2.5.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3 - OBRAS DE CONCRETO ARMADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.2 - ZAPATAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.2.1 - Zapatas - Concreto pre mezclado F'C=210 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=479.29, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.2.3 - Zapatas - Acero f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.3 - VIGAS DE CIMENTACIÓN
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.3.1 - Viga de cimentación - concreto pre mezclado  F'C=210 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=478.59, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.3.2 - Vigas de Cimentación - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=65.51, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.3.3 - Vigas de Cimentación - Acero f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.3.4 - Vigas de Cimentación - Acero de refuerzo f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=88505.42 WHERE codigo='OE.2.3.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.3.5 - Vigas de Cimentación - Encofrado y desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=86.71, cantidad_presupuesto=1513.06 WHERE codigo='OE.2.3.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.3.6 - Viga de cimentación - Concreto pre mezclado F'C=280 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=409.72, cantidad_presupuesto=937.2 WHERE codigo='OE.2.3.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.3.7 - Viga de cimentacion - Concreto f'c=280kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=833.69, cantidad_presupuesto=3.65 WHERE codigo='OE.2.3.3.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.4 - LOSAS DE CIMENTACIÓN
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.4.1 - Losas de cimentación - concreto pre mezclado F'C=210 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=478.59, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.4.2 - Losa de Cimentación - Encofrado y Desencofrado
  UPDATE catalogo_partidas SET precio_unitario=42.24, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.4.3 - Losa de Cimentación - Acero f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.4.4 - Losa de Cimentación - Acero de refuerzo f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=344582.37 WHERE codigo='OE.2.3.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.4.5 - Losa de Cimentación - Encofrado y Desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=70.43, cantidad_presupuesto=732.79 WHERE codigo='OE.2.3.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.4.6 - Losas de cimentación - Concreto pre mezclado F'C=280 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=415.5, cantidad_presupuesto=2465.01 WHERE codigo='OE.2.3.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.4.7 - Juntas frias de construccion en el proceso de vaciado
  UPDATE catalogo_partidas SET precio_unitario=35.95, cantidad_presupuesto=643.0 WHERE codigo='OE.2.3.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.4.8 - Losa de cimentacion - Tratamiento de juntas de construccion
  UPDATE catalogo_partidas SET precio_unitario=35.8, cantidad_presupuesto=488.24 WHERE codigo='OE.2.3.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.4.9 - Losa de cimentacion - Escarificado en juntas de construccion
  UPDATE catalogo_partidas SET precio_unitario=5.08, cantidad_presupuesto=488.24 WHERE codigo='OE.2.3.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.4.10 - Losa de cimentacion - Concreto  f'c=280kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=789.53, cantidad_presupuesto=22.88 WHERE codigo='OE.2.3.4.10' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.5 - SOBRECIMIENTOS REFORZADOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.5.1 - Sobrecimientos reforzados-concreto f'c=175 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=456.34, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.5.2 - Sobrecimiento reforzado - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=47.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.5.3 - Sobrecimientos reforzados - Acero f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.5.4 - Sobrecimientos reforzados - Acero de refuerzo f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=13675.83 WHERE codigo='OE.2.3.5.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.5.5 - Sobrecimiento reforzado - Encofrado y desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=89.88, cantidad_presupuesto=3230.16 WHERE codigo='OE.2.3.5.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.5.6 - Sobrecimientos reforzados - Concreto pre mezclado F'C=175 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=393.83, cantidad_presupuesto=275.24 WHERE codigo='OE.2.3.5.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.5.7 - Sobrecimientos reforzados - Concreto f'c=175 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=588.85, cantidad_presupuesto=47.72 WHERE codigo='OE.2.3.5.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.5.8 - Sobrecimientos  reforzados – Concreto premezclado f'c=210 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=382.74, cantidad_presupuesto=8.0 WHERE codigo='OE.2.3.5.8' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6 - MUROS REFORZADOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1 - MUROS DE CONTENCIÓN
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.1 - Muros de contención-concreto pre mezclado F'C=210 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=478.59, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.2 - Muros de contención-encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=41.31, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.3 - Muro de contencion - Acero f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.4 - Muro de Contención-Material de Filtro 3/4"
  UPDATE catalogo_partidas SET precio_unitario=130.41, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.5 - Muro de Contención-Llorones de Drenaje PVC 2"
  UPDATE catalogo_partidas SET precio_unitario=26.77, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.6 - Muro de Contencion.- Membrana Impermeabilizante
  UPDATE catalogo_partidas SET precio_unitario=28.02, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.7 - Muro de contencion - Acero de refuerzo f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=136644.16 WHERE codigo='OE.2.3.6.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.8 - Muros de contención-encofrado y desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=79.58, cantidad_presupuesto=1587.66 WHERE codigo='OE.2.3.6.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.9 - Muros de contención - Concreto pre mezclado F'C=280 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=463.14, cantidad_presupuesto=1208.92 WHERE codigo='OE.2.3.6.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.10 - Muro de Contención-Material Filtrante de piedra chancada de 3/4"
  UPDATE catalogo_partidas SET precio_unitario=153.93, cantidad_presupuesto=163.38 WHERE codigo='OE.2.3.6.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.11 - Muro de Contencion.- Revestimiento impermeabilizante
  UPDATE catalogo_partidas SET precio_unitario=29.02, cantidad_presupuesto=16.87 WHERE codigo='OE.2.3.6.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.12 - Muro de Contención-Relleno con piedra de 4" a 12"
  UPDATE catalogo_partidas SET precio_unitario=109.38, cantidad_presupuesto=1423.48 WHERE codigo='OE.2.3.6.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.13 - Muro de Contención-Relleno y compactado con material granular
  UPDATE catalogo_partidas SET precio_unitario=30.92, cantidad_presupuesto=1550.9 WHERE codigo='OE.2.3.6.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.14 - Muros de contencion - Encofrado y desencofrado metalico
  UPDATE catalogo_partidas SET precio_unitario=138.68, cantidad_presupuesto=4045.23 WHERE codigo='OE.2.3.6.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.15 - Muro de contencion - Impermeabilizacion con espuma expansiva
  UPDATE catalogo_partidas SET precio_unitario=15.28, cantidad_presupuesto=216.0 WHERE codigo='OE.2.3.6.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.16 - Muro de contencion - Pintado con Alquitran
  UPDATE catalogo_partidas SET precio_unitario=20.8, cantidad_presupuesto=216.0 WHERE codigo='OE.2.3.6.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.17 - Muros de contención – Concreto premezclado fc=210 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=382.89, cantidad_presupuesto=140.5 WHERE codigo='OE.2.3.6.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.18 - Muros de contencion - Concreto  f'c=210 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=671.34, cantidad_presupuesto=27.76 WHERE codigo='OE.2.3.6.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.1.19 - Muros de contencion - Concreto  f'c=280 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=833.69, cantidad_presupuesto=48.95 WHERE codigo='OE.2.3.6.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.2 - PLACAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.2.1 - Placas - concreto premezclado f'c=210 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=478.59, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.2.2 - Placas - Encofrado y Desencofrado
  UPDATE catalogo_partidas SET precio_unitario=41.31, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.2.3 - Placas - Acero f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.2.4 - Placas - Acero de refuerzo f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=9.74, cantidad_presupuesto=230325.76 WHERE codigo='OE.2.3.6.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.2.5 - Placas - Encofrado y Desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=61.76, cantidad_presupuesto=8581.92 WHERE codigo='OE.2.3.6.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.2.6 - Placas - Concreto pre mezclado F'C=280 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=466.51, cantidad_presupuesto=1187.27 WHERE codigo='OE.2.3.6.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.2.7 - Placas-Encofrado y desencofrado metalico
  UPDATE catalogo_partidas SET precio_unitario=146.93, cantidad_presupuesto=3118.17 WHERE codigo='OE.2.3.6.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.3 - PANTALLAS, BARANDAS Y SIMILARES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.3.1 - Pantallas, barandas y similares - concreto premezclado f'c=210 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=478.59, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.3.2 - Pantallas, barandas y similares - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=55.44, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.3.3 - Placas-Acero f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.3.4 - Pantallas, barandas y similares-Acero de refuerzo f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=10135.57 WHERE codigo='OE.2.3.6.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.3.5 - Pantallas, barandas y similares - Encofrado y desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=68.56, cantidad_presupuesto=954.8 WHERE codigo='OE.2.3.6.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.3.6 - Pantallas, barandas y similares - Concreto pre mezclado F'C=280 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=463.14, cantidad_presupuesto=103.29 WHERE codigo='OE.2.3.6.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.4 - MUROS PANTALLA CON ANCLAJE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.6.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.4.1 - Muros pantalla-concreto pre mezclado F'C=350 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=537.89, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.4.2 - Muros pantalla-acero fy=4200 kg/cm2 inc. instalación
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.4.3 - Muros pantalla-instalación de anclajes
  UPDATE catalogo_partidas SET precio_unitario=292.38, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.4.4 - Vigas de confinamiento - concreto pre mezclado F'C=350 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=537.89, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.4.5 - Vigas de confinamiento - encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=85.03, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.4.6 - Vigas de confinamiento - acero fy=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.4.7 - Muros guía - concreto pre mezclado F'C=210 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=478.59, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.4.8 - Muros guía - encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=72.24, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.4.9 - Muros guía - acero fy=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.6.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.5 - MUROS DE CONCRETO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.6.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.5.1 - Muros de concreto - Acero f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=4782.88 WHERE codigo='OE.2.3.6.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.5.2 - Muros de concreto - Encofrado y Desencofrado
  UPDATE catalogo_partidas SET precio_unitario=74.9, cantidad_presupuesto=364.0 WHERE codigo='OE.2.3.6.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.5.3 - Muros de concreto - Concreto premezclado f'c=210 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=429.02, cantidad_presupuesto=35.0 WHERE codigo='OE.2.3.6.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.5.4 - Muros de concreto - Concreto premezclado f'c=280 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=463.14, cantidad_presupuesto=98.06 WHERE codigo='OE.2.3.6.5.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.5.5 - Muros de concreto - Concreto premezclado f'c=175 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=370.66, cantidad_presupuesto=5.78 WHERE codigo='OE.2.3.6.5.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.5.6 - Estructura de transicion entre muro y cerco perimetrico - Acero de refuerzo f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=898.83 WHERE codigo='OE.2.3.6.5.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.5.7 - Estructura de transicion entre muro y cerco perimetrico - Encofrado y Desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=68.08, cantidad_presupuesto=14.64 WHERE codigo='OE.2.3.6.5.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.5.8 - Estructura de transicion entre muro y cerco perimetrico - Concreto f'c=280 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=899.92, cantidad_presupuesto=4.74 WHERE codigo='OE.2.3.6.5.8' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.6.5.9 - Estructura de transicion entre muro y cerco perimetrico - Concreto f'c=175 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=660.64, cantidad_presupuesto=5.24 WHERE codigo='OE.2.3.6.5.9' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.7 - COLUMNAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.7.1 - Columnas - concreto premezclado f'c=210 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=478.59, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.7.2 - Columnas - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=48.38, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.7.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.7.3 - Columnas - acero f'y=4200 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.7.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.7.4 - Columnetas - concreto f'c=175 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=456.34, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.7.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.7.5 - Columnetas - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=74.0, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.7.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.7.6 - Columnetas - Acero f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.7.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.7.7 - Columnetas - anclaje a muros pantalla
  UPDATE catalogo_partidas SET precio_unitario=292.38, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.7.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.7.8 - Columnas - acero de refuerzo f'y=4200 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=9.74, cantidad_presupuesto=117524.03 WHERE codigo='OE.2.3.7.8' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.7.9 - Columnas - Encofrado y Desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=65.25, cantidad_presupuesto=5126.31 WHERE codigo='OE.2.3.7.9' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.7.10 - Columnas - Concreto pre mezclado F'C=280 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=463.14, cantidad_presupuesto=655.27 WHERE codigo='OE.2.3.7.10' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.7.11 - Columnetas - Acero de refuerzo f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=61575.98 WHERE codigo='OE.2.3.7.11' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.7.12 - Columnetas - Encofrado y desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=53.5, cantidad_presupuesto=7033.75 WHERE codigo='OE.2.3.7.12' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.7.13 - Columnetas - Mezcla de concreto f'c=175 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=591.19, cantidad_presupuesto=414.64 WHERE codigo='OE.2.3.7.13' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.7.14 - Columnas - Concreto  f'c=280 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=919.92, cantidad_presupuesto=2.78 WHERE codigo='OE.2.3.7.14' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.7.15 - Columnas - Concreto  f'c=210 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=731.5, cantidad_presupuesto=5.88 WHERE codigo='OE.2.3.7.15' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.8 - VIGAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.8' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.8.1 - Vigas -Concreto premezclado f'c=210 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=478.59, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.8.2 - Vigas - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=85.02, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.8.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.8.3 - Vigas - Acero f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.8.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.8.4 - Viguetas. - concreto f'c=175 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=456.34, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.8.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.8.5 - Viguetas - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=84.58, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.8.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.8.6 - Viguetas - Acero f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.8.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.8.7 - Vigas - Encofrado y desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=108.41, cantidad_presupuesto=8317.75 WHERE codigo='OE.2.3.8.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.8.8 - Vigas - Acero de refuerzo f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=173643.37 WHERE codigo='OE.2.3.8.8' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.8.9 - Vigas - Concreto pre mezclado F'C=280 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=420.43, cantidad_presupuesto=1183.54 WHERE codigo='OE.2.3.8.9' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.8.10 - Viguetas - Encofrado y desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=63.31, cantidad_presupuesto=2338.54 WHERE codigo='OE.2.3.8.10' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.8.11 - Viguetas - Acero de refuerzo f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=28030.36 WHERE codigo='OE.2.3.8.11' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.8.12 - Viguetas - Mezcla de concreto f'c=175 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=414.52, cantidad_presupuesto=184.13 WHERE codigo='OE.2.3.8.12' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.8.13 - Vigas - Concreto premezclado f'c=280 Kg/cm2 con impermeabilizante
  UPDATE catalogo_partidas SET precio_unitario=421.93, cantidad_presupuesto=19.82 WHERE codigo='OE.2.3.8.13' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.8.14 - Vigas - Concreto  f'c=210 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=715.5, cantidad_presupuesto=1.06 WHERE codigo='OE.2.3.8.14' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.8.15 - Vigas - Concreto  f'c=280 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=899.92, cantidad_presupuesto=13.34 WHERE codigo='OE.2.3.8.15' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9 - LOSAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.9' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.1 - LOSA MACISA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.9.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.1.1 - Losa Maciza  - Concreto premezclado f'c=210 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=478.59, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.9.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.1.2 - Losa Maciza - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=68.79, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.9.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.1.3 - Losa maciza - Acero f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.9.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.1.4 - Losa Maciza - Encofrado y desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=81.78, cantidad_presupuesto=1065.93 WHERE codigo='OE.2.3.9.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.1.5 - Losa maciza - Acero de refuerzo f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=25929.1 WHERE codigo='OE.2.3.9.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.1.6 - Losa Maciza - Concreto pre mezclado F'C=280 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=429.93, cantidad_presupuesto=202.37 WHERE codigo='OE.2.3.9.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.1.7 - Losa Maciza - Concreto premezclado f'c=280 Kg/cm2 con impermeabilizante
  UPDATE catalogo_partidas SET precio_unitario=429.93, cantidad_presupuesto=22.42 WHERE codigo='OE.2.3.9.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.1.8 - Losa Maciza - Concreto  f'c=210 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=639.81, cantidad_presupuesto=1.46 WHERE codigo='OE.2.3.9.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.1.9 - Losa Maciza - Concreto  f'c=280 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=789.53, cantidad_presupuesto=23.1 WHERE codigo='OE.2.3.9.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.2 - LOSA ALIGERADA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.9.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.2.1 - Losa Aligerada - Concreto premezclado f'c=210 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=478.59, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.9.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.2.2 - Losa aligerada - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=68.79, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.9.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.2.3 - Losa aligerada - Acero f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.9.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.2.4 - Losa Aligerada - Ladrillo hueco de arcilla de 20x30x30 cm
  UPDATE catalogo_partidas SET precio_unitario=4.63, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.9.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.2.5 - Losa Aligerada - Ladrillo hueco de arcilla de 15x30x30 cm
  UPDATE catalogo_partidas SET precio_unitario=4.28, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.9.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.2.6 - Losa aligerada - Encofrado y desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=81.78, cantidad_presupuesto=11934.63 WHERE codigo='OE.2.3.9.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.2.7 - Losa Aligerada - Ladrillo hueco mecanizado para techo de 20x30x30 cm
  UPDATE catalogo_partidas SET precio_unitario=4.71, cantidad_presupuesto=80819.0 WHERE codigo='OE.2.3.9.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.2.8 - Losa Aligerada - Ladrillo hueco mecanizado para techo de 15x30x30 cm
  UPDATE catalogo_partidas SET precio_unitario=4.32, cantidad_presupuesto=4679.0 WHERE codigo='OE.2.3.9.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.2.9 - Losa aligerada - Acero de refuerzo f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=197464.98 WHERE codigo='OE.2.3.9.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.2.10 - Losa Aligerada - Concreto pre mezclado F'C=280 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=429.93, cantidad_presupuesto=1890.38 WHERE codigo='OE.2.3.9.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.2.11 - Losa Aligerada - Embalado de ladrillo hueco de arcilla de 20x30x30 cm
  UPDATE catalogo_partidas SET precio_unitario=1.27, cantidad_presupuesto=80819.0 WHERE codigo='OE.2.3.9.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.2.12 - Losa aligerada - Aplicacion de aditivo epoxico en juntas de construccion
  UPDATE catalogo_partidas SET precio_unitario=32.6, cantidad_presupuesto=457.34 WHERE codigo='OE.2.3.9.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.2.13 - Ariostramiento, aseguramiento y liberacion de puntales metalicos
  UPDATE catalogo_partidas SET precio_unitario=10.15, cantidad_presupuesto=17900.0 WHERE codigo='OE.2.3.9.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.2.14 - Losa aligerada - Escarificado en juntas de construccion
  UPDATE catalogo_partidas SET precio_unitario=5.08, cantidad_presupuesto=457.34 WHERE codigo='OE.2.3.9.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.2.15 - Losa aligerada - Concreto premezclado f'c=280 Kg/cm2 con impermeabilizante
  UPDATE catalogo_partidas SET precio_unitario=429.93, cantidad_presupuesto=9.75 WHERE codigo='OE.2.3.9.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.2.16 - Losa aligerada - Concreto  f'c=210 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=639.81, cantidad_presupuesto=3.62 WHERE codigo='OE.2.3.9.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.8 - FALSO PISO ARMADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.9.8' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.8.1 - Falso piso armado - concreto f'c=175 kg/cm2 e=10 cm
  UPDATE catalogo_partidas SET precio_unitario=28.59, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.9.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.8.2 - Falso piso armado - acero f'y=4200 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.9.8.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.8.3 - Falso piso armado - acero de refuerzo f'y=4200 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=3826.31 WHERE codigo='OE.2.3.9.8.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.8.4 - Falso piso armado - Mezcla de concreto f'c=175 kg/cm2 e=10 cm
  UPDATE catalogo_partidas SET precio_unitario=40.37, cantidad_presupuesto=771.27 WHERE codigo='OE.2.3.9.8.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.9 - RAMPA DE CONCRETO ARMADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.9.9' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.9.1 - Rampa - concreto premezclado f'c=210 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=478.59, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.9.9.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.9.2 - Rampa - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=68.79, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.9.9.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.9.3 - Rampa - acero f'y=4200 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.9.9.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.9.4 - Rampa - Encofrado y desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=76.7, cantidad_presupuesto=9.31 WHERE codigo='OE.2.3.9.9.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.9.5 - Rampa - acero de refuerzo f'y=4200 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=2504.23 WHERE codigo='OE.2.3.9.9.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.9.6 - Rampa - Concreto pre mezclado F'C=280 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=437.23, cantidad_presupuesto=39.73 WHERE codigo='OE.2.3.9.9.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.10 - ESCALERAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.9.10' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.10.1 - Escaleras - Concreto premezclado f'c=210 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=478.59, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.9.10.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.10.2 - Escaleras  - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=68.79, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.9.10.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.10.3 - Escaleras - Acero f'y= 4200 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.9.10.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.10.4 - Escaleras  - Encofrado y desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=76.51, cantidad_presupuesto=460.75 WHERE codigo='OE.2.3.9.10.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.10.5 - Escaleras - Acero de refuerzo f'y= 4200 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=10589.01 WHERE codigo='OE.2.3.9.10.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.10.6 - Escaleras - Concreto pre mezclado F'C=280 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=446.1, cantidad_presupuesto=94.7 WHERE codigo='OE.2.3.9.10.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.9.10.7 - Escaleras - Concreto  f'c=280 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=758.0, cantidad_presupuesto=5.06 WHERE codigo='OE.2.3.9.10.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.12 - TANQUE CISTERNA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.12' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.12.1 - Tanque Cisterna  - Concreto premezclado f'c=280 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=530.55, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.12.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.12.2 - Tanque Cisterna  - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=76.83, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.12.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.12.3 - Tanque Cisterna - Acero f'y= 4200 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.12.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.12.4 - Tanque Cisterna - Acero de refuerzo f'y= 4200 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=12596.45 WHERE codigo='OE.2.3.12.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.12.5 - Tanque Cisterna  - Encofrado y desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=66.59, cantidad_presupuesto=944.36 WHERE codigo='OE.2.3.12.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.12.6 - Tanque cisterna - Concreto pre mezclado con impermeabilizante F'C=280 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=443.66, cantidad_presupuesto=175.35 WHERE codigo='OE.2.3.12.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.12.7 - Poliestireno expandido (tecnoport) 1"x1.20x2.4 m
  UPDATE catalogo_partidas SET precio_unitario=8.71, cantidad_presupuesto=301.51 WHERE codigo='OE.2.3.12.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18 - PUENTE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.18' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.1 - Puente  - Concreto premezclado f'c=210 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=478.59, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.18.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.2 - Puente  - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=90.42, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.18.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.3 - Puente - Acero f'y= 4200 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.18.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.4 - Armado de Puente metálico (Planchas )
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.18.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.5 - Armado de apoyo móvil (puente metálico)
  UPDATE catalogo_partidas SET precio_unitario=52.49, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.18.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.6 - Armado de apoyo fijo (puente metálico)
  UPDATE catalogo_partidas SET precio_unitario=102.03, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.18.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.7 - Montaje de Puente metálico (Planchas )
  UPDATE catalogo_partidas SET precio_unitario=4.27, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.18.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.8 - Montaje de apoyo móvil (puente metálico)
  UPDATE catalogo_partidas SET precio_unitario=17.39, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.18.8' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.9 - Montaje de apoyo fijo (puente metálico)
  UPDATE catalogo_partidas SET precio_unitario=17.39, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.18.9' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.10 - Puente  - Encofrado y desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=87.21, cantidad_presupuesto=23.4 WHERE codigo='OE.2.3.18.10' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.11 - Puente - Acero de refuerzo f'y= 4200 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=2349.65 WHERE codigo='OE.2.3.18.11' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.12 - Puente - Concreto pre mezclado de resistencia F'C=210 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=406.1, cantidad_presupuesto=25.74 WHERE codigo='OE.2.3.18.12' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.13 - Habilitacion de Puente metálico (Planchas )
  UPDATE catalogo_partidas SET precio_unitario=12.7, cantidad_presupuesto=9542.94 WHERE codigo='OE.2.3.18.13' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.14 - Habilitacion de apoyo móvil (puente metálico)
  UPDATE catalogo_partidas SET precio_unitario=52.55, cantidad_presupuesto=12.0 WHERE codigo='OE.2.3.18.14' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.15 - Habilitacion de apoyo fijo (puente metálico)
  UPDATE catalogo_partidas SET precio_unitario=102.09, cantidad_presupuesto=12.0 WHERE codigo='OE.2.3.18.15' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.16 - Colocacion de Puente metálico (Planchas )
  UPDATE catalogo_partidas SET precio_unitario=4.34, cantidad_presupuesto=9542.94 WHERE codigo='OE.2.3.18.16' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.17 - Colocacion de apoyo móvil (puente metálico)
  UPDATE catalogo_partidas SET precio_unitario=18.4, cantidad_presupuesto=12.0 WHERE codigo='OE.2.3.18.17' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.18 - Colocacion de apoyo fijo (puente metálico)
  UPDATE catalogo_partidas SET precio_unitario=18.4, cantidad_presupuesto=12.0 WHERE codigo='OE.2.3.18.18' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.19 - Estructuras metalicas para puentes peatonal
  UPDATE catalogo_partidas SET precio_unitario=195000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.2.3.18.19' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.18.20 - Base metalica inferior de (300mmx275mm) y superior de (250mmx250mm) con pernos A193 7"X1/2"
  UPDATE catalogo_partidas SET precio_unitario=124.1, cantidad_presupuesto=17.0 WHERE codigo='OE.2.3.18.20' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.19 - CANALETA Y CAJA DE REGISTRO PARA GLP Y DIESEL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.19' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.19.1 - Canaleta y caja de registro - Concreto premezclado f'c=210 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=478.59, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.19.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.19.2 - Canaleta y caja de registro - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=47.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.19.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.19.3 - Canaleta y caja de registro - acero f'y=4200 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=0.0 WHERE codigo='OE.2.3.19.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.19.4 - Canaleta y caja de registro - Encofrado y desencofrado con fenolico
  UPDATE catalogo_partidas SET precio_unitario=67.43, cantidad_presupuesto=2709.77 WHERE codigo='OE.2.3.19.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.19.5 - Canaleta y caja de registro - acero de refuerzo f'y=4200 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=2280.37 WHERE codigo='OE.2.3.19.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.19.6 - Canaleta y caja de registro - Concreto pre mezclado de resistencia F'C=210 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=406.06, cantidad_presupuesto=1330.84 WHERE codigo='OE.2.3.19.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.20 - PEDESTALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.20' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.20.1 - Pedestales - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=68.08, cantidad_presupuesto=24.0 WHERE codigo='OE.2.3.20.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.20.2 - Pedestales - acero f'y=4200 Kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=1713.44 WHERE codigo='OE.2.3.20.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.20.3 - Pedestales - Concreto f'c=280 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=789.53, cantidad_presupuesto=2.4 WHERE codigo='OE.2.3.20.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.21 - PARAPETO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.21' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.21.1 - Parapeto - Acero f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=1527.18 WHERE codigo='OE.2.3.21.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.21.2 - Parapeto - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=68.08, cantidad_presupuesto=231.5 WHERE codigo='OE.2.3.21.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.21.3 - Parapeto - Concreto F'C=210 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=671.34, cantidad_presupuesto=19.51 WHERE codigo='OE.2.3.21.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.22 - CANALES DE DRENAJE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.3.22' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.22.1 - Canales de drenaje -  Acero f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=1952.51 WHERE codigo='OE.2.3.22.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.22.2 - Canales de drenaje - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=68.08, cantidad_presupuesto=402.59 WHERE codigo='OE.2.3.22.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.3.22.3 - Canales de drenaje - Concreto f'c=210 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=715.5, cantidad_presupuesto=22.06 WHERE codigo='OE.2.3.22.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.4 - ESTRUCTURAS METÁLICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.1 - COLUMNA METALICA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.1.1 - ARMADO COLUMNAS METÁLICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.1.1.1 - Armado de columnas metálicas 150x150x3mm
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.1.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.1.1.2 - Columna metalica 150x150x3mm - Armado
  UPDATE catalogo_partidas SET precio_unitario=16.09, cantidad_presupuesto=3898.76 WHERE codigo='OE.2.4.1.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.1.2 - MONTAJE COLUMNAS METÁLICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.1.2.1 - Montaje de columnas metálicas 150x150x3mm
  UPDATE catalogo_partidas SET precio_unitario=8.29, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.1.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.1.2.2 - Columna metalica 150x150x3mm - Montaje
  UPDATE catalogo_partidas SET precio_unitario=7.79, cantidad_presupuesto=3898.76 WHERE codigo='OE.2.4.1.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.2 - VIGAS METALICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.2.1 - ARMADO DE VIGAS METALICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.2.1.1 - Armado de VIGAS metálicas 50x150x3mm
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.2.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.2.1.2 - Armado de VIGAS metálicas 150x150x3mm
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.2.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.2.1.3 - Viga metalica 150x50x2.5MM - Armado
  UPDATE catalogo_partidas SET precio_unitario=12.71, cantidad_presupuesto=5693.51 WHERE codigo='OE.2.4.2.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.2.2 - MONTAJE DE VIGAS METALICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.2.2.1 - Montaje de VIGAS metálicas 50x150x3mm
  UPDATE catalogo_partidas SET precio_unitario=4.86, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.2.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.2.2.2 - Montaje de VIGAS metálicas 150x150x3mm
  UPDATE catalogo_partidas SET precio_unitario=8.29, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.2.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.2.2.3 - Viga metalica 150x50x2.5MM - Montaje
  UPDATE catalogo_partidas SET precio_unitario=7.79, cantidad_presupuesto=5693.51 WHERE codigo='OE.2.4.2.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4 - TIJERALES METÁLICOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1 - ARMADO DE TIJERALES METALICOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.1 - Armado de Tijeral T 1
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.2 - Armado de Tijeral T1'
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.3 - Armado de Tijeral T1"
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.4 - Armado de Tijeral T 2
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.5 - Armado de Tijeral T 2'
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.6 - Armado de Tijeral T 3
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.7 - Armado de Tijeral T3'
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.8 - Armado de Tijeral T 4
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.9 - Armado de Tijeral T4'
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.10 - Armado de Tijeral T 5
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.11 - Armado de Tijeral T 6
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.12 - Armado de Tijeral T7
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.13 - Armado de Tijeral T8
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.14 - Armado de Tijeral T9
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.15 - Armado de Tijeral T10
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.16 - Armado de Tijeral T11
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.17 - Armado de Tijeral T12
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.18 - Armado de Tijeral T13
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.19 - Armado de Tijeral T14
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.20 - Armado de Tijeral T15
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.20' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.21 - Armado de Tijeral T16
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.21' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.22 - Armado de Tijeral T17
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.22' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.23 - Armado de Tijeral T18
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.23' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.24 - Armado de Tijeral T19
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.24' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.25 - Armado de Tijeral T19'
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.25' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.26 - Armado de Tijeral T20
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.26' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.27 - Armado de Tijeral T21
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.27' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.28 - Armado de Tijeral T22
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.28' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.29 - Armado de Tijeral T23
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.29' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.30 - Armado de Tijeral T23'
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.30' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.31 - Armado de Tijeral T24
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.31' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.32 - Armado de Tijeral T25
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.32' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.33 - Armado de Tijeral T26
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.33' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.34 - Armado de Tijeral T27
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.34' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.35 - Armado de Tijeral T28
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.35' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.36 - Armado de Tijeral T29
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.36' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.37 - Armado de Tijeral T30
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.37' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.38 - Armado de Tijeral T31
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.38' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.39 - Armado de Tijeral T32
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.39' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.40 - Armado de Tijeral T33
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.40' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.41 - Armado de Tijeral T34
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.41' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.42 - Armado de Tijeral T34'
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.42' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.43 - Armado de Tijeral T35
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.43' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.1.44 - Armado de Tijeral T36
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.1.44' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2 - MONTAJE DE TIJERALES METALICOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.1 - Montaje de Tijeral T1
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.2 - Montaje de Tijeral T1'
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.3 - Montaje de Tijeral T1"
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.4 - Montaje de Tijeral T2
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.5 - Montaje de Tijeral T2'
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.6 - Montaje de Tijeral T3
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.7 - Montaje de Tijeral T3'
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.8 - Montaje de Tijeral T4
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.9 - Montaje de Tijeral T4'
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.10 - Montaje de Tijeral T5
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.11 - Montaje de Tijeral T6
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.12 - Montaje de Tijeral T7
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.13 - Montaje de Tijeral T8
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.14 - Montaje de Tijeral T9
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.15 - Montaje de Tijeral T10
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.16 - Montaje de Tijeral T11
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.17 - Montaje de Tijeral T12
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.17' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.18 - Montaje de Tijeral T13
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.18' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.19 - Montaje de Tijeral T14
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.19' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.20 - Montaje de Tijeral T15
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.20' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.21 - Montaje de Tijeral T16
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.21' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.22 - Montaje de Tijeral T17
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.22' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.23 - Montaje de Tijeral T18
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.23' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.24 - Montaje de Tijeral T19
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.24' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.25 - Montaje de Tijeral T19'
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.25' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.26 - Montaje de Tijeral T20
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.26' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.27 - Montaje de Tijeral T21
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.27' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.28 - Montaje de Tijeral T22
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.28' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.29 - Montaje de Tijeral T23
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.29' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.30 - Montaje de Tijeral T23'
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.30' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.31 - Montaje de Tijeral T24
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.31' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.32 - Montaje de Tijeral T25
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.32' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.33 - Montaje de Tijeral T26
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.33' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.34 - Montaje de Tijeral T27
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.34' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.35 - Montaje de Tijeral T28
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.35' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.36 - Montaje de Tijeral T29
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.36' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.37 - Montaje de Tijeral T30
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.37' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.38 - Montaje de Tijeral T31
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.38' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.39 - Montaje de Tijeral T32
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.39' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.40 - Montaje de Tijeral T33
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.40' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.41 - Montaje de Tijeral T34
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.41' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.42 - Montaje de Tijeral T34'
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.42' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.43 - Montaje de Tijeral T35
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.43' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.2.44 - Montaje de Tijeral T36
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.4.2.44' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.3 - TIJERALES DE APOYO DE CANALETA - ARMADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.3.1 - Tijeral metalico 50x50x2.5mm - Armado
  UPDATE catalogo_partidas SET precio_unitario=11.99, cantidad_presupuesto=367.91 WHERE codigo='OE.2.4.4.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.4 - TIJERALES DE APOYO DE CANALETA - MONTAJE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.4.4.1 - Tijeral metalico 50x50x2.5mm - Montaje
  UPDATE catalogo_partidas SET precio_unitario=7.79, cantidad_presupuesto=367.91 WHERE codigo='OE.2.4.4.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.5 - CORREAS METÁLICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.5.1 - ARMADO DE CORREAS METÁLICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.5.1.1 - Armado correas metálicas 40x80x2.5mm
  UPDATE catalogo_partidas SET precio_unitario=12.78, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.5.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.5.1.2 - Correa metalica 80x40x2.5mm - Armado
  UPDATE catalogo_partidas SET precio_unitario=12.84, cantidad_presupuesto=5358.08 WHERE codigo='OE.2.4.5.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.5.1.3 - Correa metalica 100x50x2.5mm - Armado
  UPDATE catalogo_partidas SET precio_unitario=12.66, cantidad_presupuesto=13568.28 WHERE codigo='OE.2.4.5.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.5.2 - MONTAJE DE CORREAS METÁLICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.5.2.1 - Montaje correas metálicas 40X80x2.5mm
  UPDATE catalogo_partidas SET precio_unitario=5.37, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.5.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.5.2.2 - Correa metalica 80x40x2.5mm - Montaje
  UPDATE catalogo_partidas SET precio_unitario=7.79, cantidad_presupuesto=5358.08 WHERE codigo='OE.2.4.5.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.5.2.3 - Correa metalica 100x50x2.5mm - Montaje
  UPDATE catalogo_partidas SET precio_unitario=7.79, cantidad_presupuesto=13568.28 WHERE codigo='OE.2.4.5.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8 - BASE METALICA DE APOYO ANCLADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.1 - ARMADO DE APOYOS METÁLICOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.1.1 - Armado de base metalica anclado tipo 1
  UPDATE catalogo_partidas SET precio_unitario=30.59, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.8.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.1.2 - Armado de base metalica anclado tipo 2
  UPDATE catalogo_partidas SET precio_unitario=64.53, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.8.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.2 - MONTAJE DE APOYOS METÁLICOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.2.1 - Montaje de Base Metalica Tipo 1
  UPDATE catalogo_partidas SET precio_unitario=20.42, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.8.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.2.2 - Montaje de Base Metalica Tipo 2
  UPDATE catalogo_partidas SET precio_unitario=33.49, cantidad_presupuesto=0.0 WHERE codigo='OE.2.4.8.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.3 - BASE METALICA DE APOYO ANCLADO - ARMADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.3.1 - ANCLAJE TIPO I
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.3.1.1 - Base metalica 35X35 (8 pernos) - Armado
  UPDATE catalogo_partidas SET precio_unitario=205.83, cantidad_presupuesto=57.0 WHERE codigo='OE.2.4.8.3.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.3.2 - ANCLAJE TIPO II
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.3.2.1 - Base metalica 35X35 (4 pernos) - Armado
  UPDATE catalogo_partidas SET precio_unitario=141.4, cantidad_presupuesto=62.0 WHERE codigo='OE.2.4.8.3.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.3.3 - ANCLAJE TIPO III
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.3.3.1 - Base metalica 30X40 (8 pernos) - Armado
  UPDATE catalogo_partidas SET precio_unitario=205.83, cantidad_presupuesto=3.0 WHERE codigo='OE.2.4.8.3.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.3.4 - ANCLAJE TIPO I (CON QUIMICO)
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.3.4.1 - Base metalica con quimico 35X35 c/ perno 5/8" - Armado
  UPDATE catalogo_partidas SET precio_unitario=205.83, cantidad_presupuesto=14.0 WHERE codigo='OE.2.4.8.3.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.3.5 - ANCLAJE TIPO II (CON QUIMICO)
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.3.5.1 - Base metalica con quimico 35X35 (4 pernos) - Armado
  UPDATE catalogo_partidas SET precio_unitario=167.79, cantidad_presupuesto=15.0 WHERE codigo='OE.2.4.8.3.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.3.6 - ANCLAJE TIPO III (CON QUIMICO)
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.3.6.1 - Base metalica con quimico 30X30 (4 pernos) - Armado
  UPDATE catalogo_partidas SET precio_unitario=199.79, cantidad_presupuesto=5.0 WHERE codigo='OE.2.4.8.3.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.4 - BASE METALICA DE APOYO ANCLADO - MONTAJE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.4.1 - ANCLAJE TIPO I
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.4.1.1 - Base metalica 35X35 (8 pernos) - Montaje
  UPDATE catalogo_partidas SET precio_unitario=30.85, cantidad_presupuesto=57.0 WHERE codigo='OE.2.4.8.4.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.4.2 - ANCLAJE TIPO II
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.4.2.1 - Base metalica 35X35 (4 pernos) - Montaje
  UPDATE catalogo_partidas SET precio_unitario=26.58, cantidad_presupuesto=62.0 WHERE codigo='OE.2.4.8.4.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.4.3 - ANCLAJE TIPO III
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.4.3.1 - Base metalica 30X40 (8 pernos) - Montaje
  UPDATE catalogo_partidas SET precio_unitario=30.85, cantidad_presupuesto=3.0 WHERE codigo='OE.2.4.8.4.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.5 - BASE METALICA DE APOYO MONJATE CON QUIMICO -  MONTAJE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.5.1 - ANCLAJE TIPO I (CON QUIMICO)
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.5.1.1 - Base metalica con quimico 35X35 c/ perno 5/8" - Montaje
  UPDATE catalogo_partidas SET precio_unitario=35.12, cantidad_presupuesto=14.0 WHERE codigo='OE.2.4.8.5.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.5.2 - ANCLAJE TIPO II ( CON QUIMICO)
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.5.2.1 - Base metalica con quimico 35X35 (4 pernos) - Montaje
  UPDATE catalogo_partidas SET precio_unitario=30.85, cantidad_presupuesto=15.0 WHERE codigo='OE.2.4.8.5.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.5.3 - ANCLAJE TIPO III ( CON QUIMICO)
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.5.3.1 - Base metalica con quimico 30X30 (4 pernos) - Montaje
  UPDATE catalogo_partidas SET precio_unitario=30.85, cantidad_presupuesto=5.0 WHERE codigo='OE.2.4.8.5.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.6 - ANCLAJE  DE TENSOR Y OTROS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.8.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.8.6.1 - Anclaje (Tensor y plancha)
  UPDATE catalogo_partidas SET precio_unitario=202.91, cantidad_presupuesto=1.0 WHERE codigo='OE.2.4.8.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.9 - DIAGONALES METALICOS DE BLOQUES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.9.1 - DIAGONALES METALICOS - ARMADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.9.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.9.1.1 - Diagonales metalicos 100x50x2.5mm - Armado
  UPDATE catalogo_partidas SET precio_unitario=12.66, cantidad_presupuesto=5734.57 WHERE codigo='OE.2.4.9.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.9.2 - DIAGONALES METALICOS - MONTAJE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.9.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.9.2.1 - Diagonales metalicos 100x50x2.5mm - Montaje
  UPDATE catalogo_partidas SET precio_unitario=7.79, cantidad_presupuesto=5734.57 WHERE codigo='OE.2.4.9.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.10 - ESTRUCTURAS METALICAS - BLOQUE VII
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.4.10' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.10.1 - Columnas - Tubo LAC metalica 150x150x3mm
  UPDATE catalogo_partidas SET precio_unitario=15.23, cantidad_presupuesto=1261.5 WHERE codigo='OE.2.4.10.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.10.2 - Vigas - Tubo LAC 150x50x2.5mm
  UPDATE catalogo_partidas SET precio_unitario=13.21, cantidad_presupuesto=1762.1 WHERE codigo='OE.2.4.10.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.10.3 - Tijeral - Tubo LAC 50x50x2.5mm
  UPDATE catalogo_partidas SET precio_unitario=12.49, cantidad_presupuesto=70.2 WHERE codigo='OE.2.4.10.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.10.4 - Correas - Tubo LAC 80x40x2.5mm
  UPDATE catalogo_partidas SET precio_unitario=13.34, cantidad_presupuesto=4167.22 WHERE codigo='OE.2.4.10.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.10.5 - Diagonales - Tubo LAC 100x50x2.5mm
  UPDATE catalogo_partidas SET precio_unitario=13.16, cantidad_presupuesto=1144.47 WHERE codigo='OE.2.4.10.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.10.6 - Base metalica con quimico 35X35 c/ perno 1/2" - Armado
  UPDATE catalogo_partidas SET precio_unitario=131.69, cantidad_presupuesto=34.0 WHERE codigo='OE.2.4.10.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.10.7 - Base metalica con quimico 35X35 c/ perno 1/2" - Montaje
  UPDATE catalogo_partidas SET precio_unitario=6.61, cantidad_presupuesto=34.0 WHERE codigo='OE.2.4.10.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.4.10.8 - Servicio de soldadura de estructura metalica bloque VII
  UPDATE catalogo_partidas SET precio_unitario=43800.0, cantidad_presupuesto=1.0 WHERE codigo='OE.2.4.10.8' AND proyecto_id=v_proyecto_id;
  -- OE.2.6 - VARIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.1 - JUNTAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.1.1 - Juntas  de poliestireno y espuma de poliuretano
  UPDATE catalogo_partidas SET precio_unitario=10.67, cantidad_presupuesto=3145.0 WHERE codigo='OE.2.6.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.1.2 - Juntas externas de separacion estructural entre bloques
  UPDATE catalogo_partidas SET precio_unitario=126.38, cantidad_presupuesto=256.93 WHERE codigo='OE.2.6.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.2 - PRUEBAS DE CONTROL DE CALIDAD
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.2.1 - Verificación de Capacidad Portante
  UPDATE catalogo_partidas SET precio_unitario=590.0, cantidad_presupuesto=2.0 WHERE codigo='OE.2.6.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.2.2 - Diseño de Mezclas
  UPDATE catalogo_partidas SET precio_unitario=450.0, cantidad_presupuesto=32.0 WHERE codigo='OE.2.6.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.2.3 - Ensayos de Compactación de Suelos
  UPDATE catalogo_partidas SET precio_unitario=70.0, cantidad_presupuesto=200.0 WHERE codigo='OE.2.6.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.2.4 - Rotura de Briquetas
  UPDATE catalogo_partidas SET precio_unitario=50.0, cantidad_presupuesto=4623.0 WHERE codigo='OE.2.6.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.2.5 - Pruebas de soldadura
  UPDATE catalogo_partidas SET precio_unitario=47.49, cantidad_presupuesto=324.0 WHERE codigo='OE.2.6.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.2.6 - Ensayo de Proctor Modificado
  UPDATE catalogo_partidas SET precio_unitario=470.0, cantidad_presupuesto=1.0 WHERE codigo='OE.2.6.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.2.7 - Control de calidad y seguimiento en obra
  UPDATE catalogo_partidas SET precio_unitario=7675.5, cantidad_presupuesto=24.0 WHERE codigo='OE.2.6.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.3 - CURADO Y PROTECCION  DEL CONCRETO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.3.1 - Curado y Protección de Concreto en Obra
  UPDATE catalogo_partidas SET precio_unitario=752.65, cantidad_presupuesto=12.0 WHERE codigo='OE.2.6.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.3.2 - Curado de elementos estructurales
  UPDATE catalogo_partidas SET precio_unitario=15736.74, cantidad_presupuesto=12.0 WHERE codigo='OE.2.6.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.3.3 - Control termico para vaciado nocturno
  UPDATE catalogo_partidas SET precio_unitario=4634.31, cantidad_presupuesto=12.0 WHERE codigo='OE.2.6.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.4 - PAVIMENTOS DE CONCRETO E=0.20
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.6.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.4.1 - Concreto  f'c=210 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=111.8, cantidad_presupuesto=0.0 WHERE codigo='OE.2.6.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.4.2 - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=53.09, cantidad_presupuesto=169.98 WHERE codigo='OE.2.6.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.4.3 - Corte de concreto para juntas
  UPDATE catalogo_partidas SET precio_unitario=1.52, cantidad_presupuesto=682.29 WHERE codigo='OE.2.6.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.4.4 - ACERO 5/8" CORRUGADO JUNTAS
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=181.58 WHERE codigo='OE.2.6.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.4.5 - Acero 5/8" liso juntas
  UPDATE catalogo_partidas SET precio_unitario=7.95, cantidad_presupuesto=0.0 WHERE codigo='OE.2.6.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.4.6 - Sellado Elastomero E=6 mm.
  UPDATE catalogo_partidas SET precio_unitario=28.56, cantidad_presupuesto=190.4 WHERE codigo='OE.2.6.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.4.7 - Concreto premezclado  f'c=210 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=381.56, cantidad_presupuesto=203.45 WHERE codigo='OE.2.6.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.4.8 - Falso piso - Concreto premezclado f'c= 175 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=366.43, cantidad_presupuesto=248.13 WHERE codigo='OE.2.6.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.4.9 - Acero 5/8" corrugado con casquillo de 3/4 de PVC (trasversal)
  UPDATE catalogo_partidas SET precio_unitario=6.38, cantidad_presupuesto=142.47 WHERE codigo='OE.2.6.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.4.10 - Malla de acero f'y=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.55, cantidad_presupuesto=9143.31 WHERE codigo='OE.2.6.4.10' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.5 - ADQUISICION DE EQUIPOS DE CONTROL DE CALIDAD
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.6.5' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.5.1 - Adquisicion de equipos de control de calidad
  UPDATE catalogo_partidas SET precio_unitario=226469.0, cantidad_presupuesto=1.0 WHERE codigo='OE.2.6.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.6 - LIMPIEZA SUPERFICIAL DE ELEMENTOS ESTRUCTURALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.6.6' AND proyecto_id=v_proyecto_id;
  -- OE.2.6.6.1 - Limpieza superficial de acero de refuerzo post vaciado
  UPDATE catalogo_partidas SET precio_unitario=6542.56, cantidad_presupuesto=10.0 WHERE codigo='OE.2.6.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.2.7 - TRASLADO Y ACARREO DE MATERIALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.2.7.1 - Acarreo manual de materiales para estructuras metalicas
  UPDATE catalogo_partidas SET precio_unitario=0.25, cantidad_presupuesto=25963.03 WHERE codigo='OE.2.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.3 - ARQUITECTURA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.1 - MUROS Y TABIQUES DE ALBAÑILERIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.1 - MUROS DE LADRILLO KING KONG DE ARCILLA (A MAQUINA O  ARTESANALMENTE)
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.1.1 - Muro de ladrillo KK de soga (0.24 X 0.13 X 0.09 m.)
  UPDATE catalogo_partidas SET precio_unitario=86.26, cantidad_presupuesto=0.0 WHERE codigo='OE.3.1.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.1.2 - Muro de ladrillo KK de cabeza (0.24 X 0.13 X 0.09 m.)
  UPDATE catalogo_partidas SET precio_unitario=142.7, cantidad_presupuesto=0.0 WHERE codigo='OE.3.1.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.1.3 - Muro de soga de ladrillo mecanizado de 18 huecos (0.24 X 0.13 X 0.09 m.)
  UPDATE catalogo_partidas SET precio_unitario=103.97, cantidad_presupuesto=3319.39 WHERE codigo='OE.3.1.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.1.4 - Muro de cabeza de ladrillo mecanizado de 18 huecos (0.24 X 0.13 X 0.09 m.)
  UPDATE catalogo_partidas SET precio_unitario=158.9, cantidad_presupuesto=2480.61 WHERE codigo='OE.3.1.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.1.5 - Juntas con sellador elastomerico
  UPDATE catalogo_partidas SET precio_unitario=28.95, cantidad_presupuesto=1589.1 WHERE codigo='OE.3.1.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10 - MUROS CON EL SISTEMA DE CONSTRUCCION EN SECO (SISTEMA DRYWALL O SIMILAR)
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.1 - Tabique de drywall una cara con placa de yeso tipo RH
  UPDATE catalogo_partidas SET precio_unitario=114.87, cantidad_presupuesto=0.0 WHERE codigo='OE.3.1.10.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.2 - Tabique de drywall dos caras en dinteles con placa de yeso tipo RF
  UPDATE catalogo_partidas SET precio_unitario=94.59, cantidad_presupuesto=0.0 WHERE codigo='OE.3.1.10.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.3 - Tabique de drywall dos caras con plancha de fibrocemento superboard pro
  UPDATE catalogo_partidas SET precio_unitario=165.94, cantidad_presupuesto=0.0 WHERE codigo='OE.3.1.10.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.4 - Tabique de drywall dos caras en dinteles con plancha de fibrocemento superboard pro
  UPDATE catalogo_partidas SET precio_unitario=170.19, cantidad_presupuesto=0.0 WHERE codigo='OE.3.1.10.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.5 - Tabique de drywall una cara en encuentro de escalera
  UPDATE catalogo_partidas SET precio_unitario=149.99, cantidad_presupuesto=0.0 WHERE codigo='OE.3.1.10.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.6 - PANELADO DE SISTEMA DRYWALL CON PLACA DE FIBROCEMENTO Y PLACA DE YESO ST
  UPDATE catalogo_partidas SET precio_unitario=103.14, cantidad_presupuesto=0.0 WHERE codigo='OE.3.1.10.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.7 - PANELADO DE SISTEMA DRYWALL CON PLACA DE FIBROCEMENTO Y RF
  UPDATE catalogo_partidas SET precio_unitario=103.24, cantidad_presupuesto=0.0 WHERE codigo='OE.3.1.10.7' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.8 - PANELADO DE SISTEMA DRYWALL CON PLACA DE FIBROCEMENTO Y RH
  UPDATE catalogo_partidas SET precio_unitario=102.16, cantidad_presupuesto=0.0 WHERE codigo='OE.3.1.10.8' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.9 - ESTRUCTURA METALICA PARA SISTEMA DRYWALL SIMPLE
  UPDATE catalogo_partidas SET precio_unitario=90.71, cantidad_presupuesto=13493.75 WHERE codigo='OE.3.1.10.9' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.10 - ESTRUCTURA METALICA PARA SISTEMA DRYWALL DOBLE
  UPDATE catalogo_partidas SET precio_unitario=148.64, cantidad_presupuesto=1998.06 WHERE codigo='OE.3.1.10.10' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.11 - Lamina de plomo e: 3 mm para rayos x
  UPDATE catalogo_partidas SET precio_unitario=842.1, cantidad_presupuesto=98.64 WHERE codigo='OE.3.1.10.11' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.12 - Estructura metalica para sistema drywall con plancha de plomo e: 3 mm
  UPDATE catalogo_partidas SET precio_unitario=180.47, cantidad_presupuesto=86.84 WHERE codigo='OE.3.1.10.12' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.13 - Refuerzos horizontales con riel de acero en tabiquería
  UPDATE catalogo_partidas SET precio_unitario=12.06, cantidad_presupuesto=25969.97 WHERE codigo='OE.3.1.10.13' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.14 - Colocación de neopreno para tabiquería en seco
  UPDATE catalogo_partidas SET precio_unitario=13.94, cantidad_presupuesto=19289.36 WHERE codigo='OE.3.1.10.14' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.15 - Juntas con masilla cortafuego
  UPDATE catalogo_partidas SET precio_unitario=17.04, cantidad_presupuesto=15687.66 WHERE codigo='OE.3.1.10.15' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.16 - Refuerzo de vanos con listones de madera en tabiqueria
  UPDATE catalogo_partidas SET precio_unitario=55.81, cantidad_presupuesto=5004.42 WHERE codigo='OE.3.1.10.16' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.17 - Refuerzo de PCF con tubo de acero en tabiqueria
  UPDATE catalogo_partidas SET precio_unitario=608.75, cantidad_presupuesto=113.0 WHERE codigo='OE.3.1.10.17' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.18 - Refuerzo horizontal con riel de 9 cm x 2.5 cm x E=0.90 mm
  UPDATE catalogo_partidas SET precio_unitario=13.28, cantidad_presupuesto=8132.75 WHERE codigo='OE.3.1.10.18' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.19 - Refuerzo con riel para puntos de instalaciones
  UPDATE catalogo_partidas SET precio_unitario=17.68, cantidad_presupuesto=1596.0 WHERE codigo='OE.3.1.10.19' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.20 - Refuerzo con parante de contrazocalo sanitario
  UPDATE catalogo_partidas SET precio_unitario=42.24, cantidad_presupuesto=7353.21 WHERE codigo='OE.3.1.10.20' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.21 - Refuerzo de puertas mayores a 1.20m con listones de madera
  UPDATE catalogo_partidas SET precio_unitario=65.81, cantidad_presupuesto=912.4 WHERE codigo='OE.3.1.10.21' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.22 - Instalacion de planchas de fibrocemento + yeso RH
  UPDATE catalogo_partidas SET precio_unitario=104.82, cantidad_presupuesto=22911.88 WHERE codigo='OE.3.1.10.22' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.23 - Instalacion de planchas de fibrocemento + yeso RF
  UPDATE catalogo_partidas SET precio_unitario=109.81, cantidad_presupuesto=7387.16 WHERE codigo='OE.3.1.10.23' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.24 - Colocacion de lana de vidrio e=65mm
  UPDATE catalogo_partidas SET precio_unitario=29.23, cantidad_presupuesto=350.0 WHERE codigo='OE.3.1.10.24' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.25 - Colocacion de lana de vidrio e=90mm
  UPDATE catalogo_partidas SET precio_unitario=24.25, cantidad_presupuesto=15249.52 WHERE codigo='OE.3.1.10.25' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.26 - Tratamiento de juntas de planchas de fibrocemento + yeso RH
  UPDATE catalogo_partidas SET precio_unitario=14.23, cantidad_presupuesto=22911.88 WHERE codigo='OE.3.1.10.26' AND proyecto_id=v_proyecto_id;
  -- OE.3.1.10.27 - Tratamiento de juntas de planchas de fibrocemento + yeso RF
  UPDATE catalogo_partidas SET precio_unitario=48.53, cantidad_presupuesto=7387.16 WHERE codigo='OE.3.1.10.27' AND proyecto_id=v_proyecto_id;
  -- OE.3.2 - REVOQUES Y REVESTIMIENTOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.1 - Tarrajeo primario (rayado) con mezcla C:A - 1:5
  UPDATE catalogo_partidas SET precio_unitario=26.22, cantidad_presupuesto=0.0 WHERE codigo='OE.3.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.2 - Tarrajeo en interiores  mezcla C:A - 1:5
  UPDATE catalogo_partidas SET precio_unitario=23.89, cantidad_presupuesto=0.0 WHERE codigo='OE.3.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.3 - Tarrajeo en muros exteriores mezcla C:A 1:5
  UPDATE catalogo_partidas SET precio_unitario=23.01, cantidad_presupuesto=0.0 WHERE codigo='OE.3.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.5 - Tarrajeo en columnas mezcla C:A 1:5
  UPDATE catalogo_partidas SET precio_unitario=30.41, cantidad_presupuesto=0.0 WHERE codigo='OE.3.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.6 - Tarrajeo en vigas  C:A 1:5
  UPDATE catalogo_partidas SET precio_unitario=25.73, cantidad_presupuesto=0.0 WHERE codigo='OE.3.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.7 - TARRAJEO DE MUROS DE CONCRETO MEZCLA C:A – 1:5
  UPDATE catalogo_partidas SET precio_unitario=23.67, cantidad_presupuesto=0.0 WHERE codigo='OE.3.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.8 - Tarrajeo con Impermeabilizante mezcla C:A - 1:5
  UPDATE catalogo_partidas SET precio_unitario=26.51, cantidad_presupuesto=0.0 WHERE codigo='OE.3.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.10 - Tarrajeo con baritina incluye derrames
  UPDATE catalogo_partidas SET precio_unitario=235.15, cantidad_presupuesto=0.0 WHERE codigo='OE.3.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.11 - Vestiduras de derrames en vanos c:a 1:5
  UPDATE catalogo_partidas SET precio_unitario=20.63, cantidad_presupuesto=0.0 WHERE codigo='OE.3.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.12 - Revestimientos con PAC
  UPDATE catalogo_partidas SET precio_unitario=115.15, cantidad_presupuesto=0.0 WHERE codigo='OE.3.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.19 - Bruñas
  UPDATE catalogo_partidas SET precio_unitario=8.25, cantidad_presupuesto=0.0 WHERE codigo='OE.3.2.19' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.20 - Tarrajeo en fondo de Escalera
  UPDATE catalogo_partidas SET precio_unitario=42.3, cantidad_presupuesto=0.0 WHERE codigo='OE.3.2.20' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.21 - Preparacion de gradas de concreto
  UPDATE catalogo_partidas SET precio_unitario=38.97, cantidad_presupuesto=0.0 WHERE codigo='OE.3.2.21' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.22 - Preparacion de descansos
  UPDATE catalogo_partidas SET precio_unitario=29.36, cantidad_presupuesto=0.0 WHERE codigo='OE.3.2.22' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.23 - Acabado tarrajeado con acabado rayado - Mezcla C:A 1:5
  UPDATE catalogo_partidas SET precio_unitario=49.82, cantidad_presupuesto=3561.84 WHERE codigo='OE.3.2.23' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.24 - Acabado tarrajeado de muros interiores - Mezcla C:A 1:5
  UPDATE catalogo_partidas SET precio_unitario=47.09, cantidad_presupuesto=16246.55 WHERE codigo='OE.3.2.24' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.25 - Acabado tarrajeado de muros exteriores - Mezcla C:A 1:5
  UPDATE catalogo_partidas SET precio_unitario=40.28, cantidad_presupuesto=6224.28 WHERE codigo='OE.3.2.25' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.26 - Acabado tarrajeado de columnas - Mezcla C:A 1:5
  UPDATE catalogo_partidas SET precio_unitario=46.94, cantidad_presupuesto=4153.57 WHERE codigo='OE.3.2.26' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.27 - Acabado tarrajeado de vigas - Mezcla C:A 1:5
  UPDATE catalogo_partidas SET precio_unitario=55.62, cantidad_presupuesto=5383.85 WHERE codigo='OE.3.2.27' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.28 - Acabado tarrajeado de muros de concreto - Mezcla C:A 1:5
  UPDATE catalogo_partidas SET precio_unitario=53.71, cantidad_presupuesto=5454.55 WHERE codigo='OE.3.2.28' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.29 - Acabado tarrajeado  - Mezcla C:A 1:5 con impermeabilizante
  UPDATE catalogo_partidas SET precio_unitario=51.79, cantidad_presupuesto=1373.51 WHERE codigo='OE.3.2.29' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.30 - Tarrajeo con mezcla baritina con tratamiento de derrames
  UPDATE catalogo_partidas SET precio_unitario=164.27, cantidad_presupuesto=260.6 WHERE codigo='OE.3.2.30' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.31 - Revestimiento en vestiduras de derrames de vanos C:A 1:5
  UPDATE catalogo_partidas SET precio_unitario=32.73, cantidad_presupuesto=6417.29 WHERE codigo='OE.3.2.31' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.32 - Suministro e instalacion de Paneles PAC
  UPDATE catalogo_partidas SET precio_unitario=7415.36, cantidad_presupuesto=1.0 WHERE codigo='OE.3.2.32' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.33 - Bruñas en revestimiento
  UPDATE catalogo_partidas SET precio_unitario=16.47, cantidad_presupuesto=0.0 WHERE codigo='OE.3.2.33' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.34 - Acabado tarrajeado de fondos de escalera mezcla C:A 1:5
  UPDATE catalogo_partidas SET precio_unitario=55.06, cantidad_presupuesto=190.78 WHERE codigo='OE.3.2.34' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.35 - Acabado de gradas de concreto
  UPDATE catalogo_partidas SET precio_unitario=44.49, cantidad_presupuesto=241.09 WHERE codigo='OE.3.2.35' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.36 - Acabado de descanso de gradas de concreto
  UPDATE catalogo_partidas SET precio_unitario=31.7, cantidad_presupuesto=108.14 WHERE codigo='OE.3.2.36' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.37 - Picado de elementos verticales (columnas y placas)
  UPDATE catalogo_partidas SET precio_unitario=5.98, cantidad_presupuesto=6381.49 WHERE codigo='OE.3.2.37' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.38 - Picado de elementos horizontales (vigas y cielo raso)
  UPDATE catalogo_partidas SET precio_unitario=5.98, cantidad_presupuesto=17253.34 WHERE codigo='OE.3.2.38' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.39 - Forjado de superficies verticales y horizontales
  UPDATE catalogo_partidas SET precio_unitario=23.11, cantidad_presupuesto=23634.83 WHERE codigo='OE.3.2.39' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.40 - Preparación de adherencia de losa y contrapiso
  UPDATE catalogo_partidas SET precio_unitario=6.42, cantidad_presupuesto=17743.97 WHERE codigo='OE.3.2.40' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.41 - Armado y desarmado de andamios en exteriores H=16m
  UPDATE catalogo_partidas SET precio_unitario=23.15, cantidad_presupuesto=6103.96 WHERE codigo='OE.3.2.41' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.42 - Preparación de adherencia de columnetas y viguetas
  UPDATE catalogo_partidas SET precio_unitario=6.42, cantidad_presupuesto=3190.56 WHERE codigo='OE.3.2.42' AND proyecto_id=v_proyecto_id;
  -- OE.3.2.43 - Bruñas de 1"
  UPDATE catalogo_partidas SET precio_unitario=16.44, cantidad_presupuesto=16919.64 WHERE codigo='OE.3.2.43' AND proyecto_id=v_proyecto_id;
  -- OE.3.3 - CIELORRASO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.3.3 - CIELORRASO CON MEZCLA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.3.3.1 - Cielo raso con mezcla. C:A 1:5 E=1.5cm
  UPDATE catalogo_partidas SET precio_unitario=35.83, cantidad_presupuesto=13128.18 WHERE codigo='OE.3.3.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.3.3.2 - Cielo raso con baritina E=1.5cm
  UPDATE catalogo_partidas SET precio_unitario=50.68, cantidad_presupuesto=20.73 WHERE codigo='OE.3.3.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.3.3.3 - Limpieza termica mediante flameado
  UPDATE catalogo_partidas SET precio_unitario=12.22, cantidad_presupuesto=13128.18 WHERE codigo='OE.3.3.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.3.3.4 - Armado de plataforma para tarrajeo
  UPDATE catalogo_partidas SET precio_unitario=8.72, cantidad_presupuesto=13128.18 WHERE codigo='OE.3.3.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.3.6 - FALSO CIELO RASO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.3.6.1 - Falso Cieloraso baldosa de fibra mineral biosoluble 0.61x0.61m, E=5/8".)
  UPDATE catalogo_partidas SET precio_unitario=136.88, cantidad_presupuesto=8929.96 WHERE codigo='OE.3.3.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.3.6.2 - Falso cielo raso con plancha de fibrocemento 6mm. bordes rebajados, junta invisible, acabado pintura latex vinilica
  UPDATE catalogo_partidas SET precio_unitario=145.68, cantidad_presupuesto=1082.49 WHERE codigo='OE.3.3.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.3.6.3 - Habilitado de caballetes metalicos
  UPDATE catalogo_partidas SET precio_unitario=577.59, cantidad_presupuesto=30.0 WHERE codigo='OE.3.3.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.4 - PISOS Y PAVIMENTOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.1 - CONTRAPISOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.1.1 - Contrapiso de concreto C:A 1:5, e=4 cm
  UPDATE catalogo_partidas SET precio_unitario=40.51, cantidad_presupuesto=0.0 WHERE codigo='OE.3.4.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.1.2 - Contrapiso de concreto con baritina e=4 cm
  UPDATE catalogo_partidas SET precio_unitario=40.06, cantidad_presupuesto=20.52 WHERE codigo='OE.3.4.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.1.3 - Contrapiso con concreto premezclado, e=5 cm
  UPDATE catalogo_partidas SET precio_unitario=27.05, cantidad_presupuesto=13598.14 WHERE codigo='OE.3.4.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.1.4 - Contrapiso con concreto premezclado F'C=280 Kg/cm2, e=5 cm
  UPDATE catalogo_partidas SET precio_unitario=33.29, cantidad_presupuesto=443.5 WHERE codigo='OE.3.4.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.2 - PISOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.2.15 - LAJA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.4.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.2.15.1 - PISO DE LAJA DE PIEDRA REGULAR
  UPDATE catalogo_partidas SET precio_unitario=109.54, cantidad_presupuesto=269.08 WHERE codigo='OE.3.4.2.15.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.2.19 - PISOS LAMINADOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.4.2.19' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.2.19.1 - Piso Vinilico flexible en rollo Alto transito E=2mm
  UPDATE catalogo_partidas SET precio_unitario=126.23, cantidad_presupuesto=457.6 WHERE codigo='OE.3.4.2.19.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.2.19.2 - Piso Vinilico flexible en rollo CONDUCTIVO MALLA DE COBRE E=2mm
  UPDATE catalogo_partidas SET precio_unitario=161.65, cantidad_presupuesto=443.82 WHERE codigo='OE.3.4.2.19.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.2.20 - PORCELANATOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.4.2.20' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.2.20.1 - Piso Porcelanato de 0.60x0.60 Antideslizante Alto transito.
  UPDATE catalogo_partidas SET precio_unitario=81.9, cantidad_presupuesto=9568.9 WHERE codigo='OE.3.4.2.20.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.2.21 - CERÁMICOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.4.2.21' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.2.21.1 - Piso Ceramico de 0.45 X 0.45 Antideslizante Alto transito.
  UPDATE catalogo_partidas SET precio_unitario=72.7, cantidad_presupuesto=0.0 WHERE codigo='OE.3.4.2.21.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.2.21.2 - Piso Ceramico de 0.60 X 0.60 Antideslizante Alto transito.
  UPDATE catalogo_partidas SET precio_unitario=76.92, cantidad_presupuesto=0.0 WHERE codigo='OE.3.4.2.21.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.4 - ACABADO DE CONCRETO EN PISOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.4.1 - Piso de cemento pulido bruñado.
  UPDATE catalogo_partidas SET precio_unitario=41.69, cantidad_presupuesto=3006.3 WHERE codigo='OE.3.4.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.4.2 - Piso de cemento pulido e impermeabilizado
  UPDATE catalogo_partidas SET precio_unitario=21.24, cantidad_presupuesto=111.09 WHERE codigo='OE.3.4.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.4.3 - Piso de cemento pulido e impermeabilizado con bruñas cada 3m
  UPDATE catalogo_partidas SET precio_unitario=25.1, cantidad_presupuesto=4145.45 WHERE codigo='OE.3.4.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.5 - SARDINELES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.5.1 - Concreto f'c=175 kg/cm² e=10cm h=10cm
  UPDATE catalogo_partidas SET precio_unitario=8.06, cantidad_presupuesto=76.01 WHERE codigo='OE.3.4.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.5.2 - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=71.47, cantidad_presupuesto=241.34 WHERE codigo='OE.3.4.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.5.3 - Juntas Flexible en sardinel E= 1"
  UPDATE catalogo_partidas SET precio_unitario=10.01, cantidad_presupuesto=22.75 WHERE codigo='OE.3.4.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.6 - VEREDAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.6.1 - Perfilado y compactado para veredas
  UPDATE catalogo_partidas SET precio_unitario=3.39, cantidad_presupuesto=501.1 WHERE codigo='OE.3.4.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.6.2 - Concreto f'c=175 kg/cm², en veredas e= 10 cm
  UPDATE catalogo_partidas SET precio_unitario=49.08, cantidad_presupuesto=512.85 WHERE codigo='OE.3.4.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.6.3 - Encofrado y desencofrado
  UPDATE catalogo_partidas SET precio_unitario=70.41, cantidad_presupuesto=196.39 WHERE codigo='OE.3.4.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.6.4 - Bruñas en veredas
  UPDATE catalogo_partidas SET precio_unitario=2.03, cantidad_presupuesto=1081.58 WHERE codigo='OE.3.4.6.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.6.5 - Juntas flexibles en veredas E= 1"
  UPDATE catalogo_partidas SET precio_unitario=10.01, cantidad_presupuesto=165.46 WHERE codigo='OE.3.4.6.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.8 - SOBREPISO O PISO TECNICO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.8.1 - Piso tecnico baldosa de alta presion con revestimiento de vinilico 60cmx60cm H=45cm
  UPDATE catalogo_partidas SET precio_unitario=64.04, cantidad_presupuesto=63.25 WHERE codigo='OE.3.4.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.9 - RAMPAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.9.1 - Perfilado y compactado para rampas
  UPDATE catalogo_partidas SET precio_unitario=3.39, cantidad_presupuesto=89.43 WHERE codigo='OE.3.4.9.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.9.2 - Concreto f'c=175 kg/cm², en Rampas, e=4"
  UPDATE catalogo_partidas SET precio_unitario=49.08, cantidad_presupuesto=91.94 WHERE codigo='OE.3.4.9.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.9.3 - Encofrado y desencofrado de rampas
  UPDATE catalogo_partidas SET precio_unitario=70.41, cantidad_presupuesto=21.58 WHERE codigo='OE.3.4.9.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.9.4 - Bruñas en rampas
  UPDATE catalogo_partidas SET precio_unitario=2.03, cantidad_presupuesto=1022.02 WHERE codigo='OE.3.4.9.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.4.9.5 - Junta flexible en Rampas
  UPDATE catalogo_partidas SET precio_unitario=10.01, cantidad_presupuesto=31.14 WHERE codigo='OE.3.4.9.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.5 - ZOCALOS  Y CONTRAZOCALOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.5.1 - ZOCALOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.5.1.9 - REVESTIMIENTOS ESPECIALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.5.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.3.5.1.9.1 - Zocalo Enchape de acero inoxidable
  UPDATE catalogo_partidas SET precio_unitario=148.94, cantidad_presupuesto=69.54 WHERE codigo='OE.3.5.1.9.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.5.1.9.2 - Zocalo de vinilico flexible en rollo E=2mm
  UPDATE catalogo_partidas SET precio_unitario=76.67, cantidad_presupuesto=1547.15 WHERE codigo='OE.3.5.1.9.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.5.1.10 - PORCELANATO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.5.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.3.5.1.10.1 - Zocalo Porcelanato 0.60x0.60
  UPDATE catalogo_partidas SET precio_unitario=87.96, cantidad_presupuesto=9680.77 WHERE codigo='OE.3.5.1.10.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.5.1.11 - CERÁMICO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.5.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.3.5.1.11.1 - Zocalo de Ceramico de 0.45 x 0.45
  UPDATE catalogo_partidas SET precio_unitario=60.32, cantidad_presupuesto=0.0 WHERE codigo='OE.3.5.1.11.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.5.1.13 - LAJA DE PIEDRA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.5.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.3.5.1.13.1 - ZOCALO DE LAJA DE PIEDRA REGULAR
  UPDATE catalogo_partidas SET precio_unitario=147.31, cantidad_presupuesto=145.55 WHERE codigo='OE.3.5.1.13.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.5.2 - CONTRAZOCALOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.5.2.3 - Contrazocalo de cemento pulido h=0.20 m
  UPDATE catalogo_partidas SET precio_unitario=20.18, cantidad_presupuesto=1523.02 WHERE codigo='OE.3.5.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.5.2.8 - Contrazocalo de porcelanato H=0.10m.
  UPDATE catalogo_partidas SET precio_unitario=56.14, cantidad_presupuesto=2061.36 WHERE codigo='OE.3.5.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.3.5.2.9 - Contrazocalo de ceramico H=0.10m.
  UPDATE catalogo_partidas SET precio_unitario=50.33, cantidad_presupuesto=0.0 WHERE codigo='OE.3.5.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.3.5.2.11 - Contrazocalo Sanitario de Terrazo Pulido h=10 cm, r=5cm.
  UPDATE catalogo_partidas SET precio_unitario=25.82, cantidad_presupuesto=7353.21 WHERE codigo='OE.3.5.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.3.5.2.12 - Contrazocalo Sanitario Cove former h=10 cm, r=5cm.
  UPDATE catalogo_partidas SET precio_unitario=24.7, cantidad_presupuesto=416.82 WHERE codigo='OE.3.5.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.3.6 - COBERTURAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.6.3 - Cobertura con Ladrillo Pastelero 24 x 3 x 24cm.
  UPDATE catalogo_partidas SET precio_unitario=67.58, cantidad_presupuesto=355.18 WHERE codigo='OE.3.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.6.4 - MATERIAL IMPERMEABILIZANTE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.6.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.6.4.1 - Sistema de Impermeabilización Bicapa - Manto Asfaltico
  UPDATE catalogo_partidas SET precio_unitario=30.0, cantidad_presupuesto=354.27 WHERE codigo='OE.3.6.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.6.5 - RECUBRIMIENTOS SOBRE ESTRUCTURAS  DE MADERA, METAL, ETC.
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.6.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.6.5.1 - Cobertura con Teja andina
  UPDATE catalogo_partidas SET precio_unitario=99.96, cantidad_presupuesto=3285.12 WHERE codigo='OE.3.6.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.6.5.2 - Cumbrera para teja andina
  UPDATE catalogo_partidas SET precio_unitario=114.12, cantidad_presupuesto=394.19 WHERE codigo='OE.3.6.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.6.5.3 - Cobertura Policarbonato solido 6mm. Translucido
  UPDATE catalogo_partidas SET precio_unitario=127.41, cantidad_presupuesto=134.68 WHERE codigo='OE.3.6.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.6.5.4 - Cubierta de protección para canales arqueologicos
  UPDATE catalogo_partidas SET precio_unitario=59331.04, cantidad_presupuesto=1.0 WHERE codigo='OE.3.6.5.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.7 - CARPINTERIA DE MADERA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.7' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1 - PUERTAS DE MADERA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.1 - P-1 (1.00x3.00) PUERTA DE 01 HOJA CONTRAPLACADA CON MIRILLA SUPERIOR CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=686.05, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.2 - P-2 (1.00x3.00) PUERTA DE 01 HOJA CONTRAPLACADA CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=986.04, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.3 - P-3 (1.00x3.00) PUERTA DE 01 HOJA CONTRAPLACADA CON MIRILLA SUPERIOR Y PLACA DE PROTECCION H=1.10 CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=986.04, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.4 - P-4 (1.20x3.00) PUERTA DE 02 HOJAS DE TABLERO REBAJADO CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=1136.05, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.5 - P-5 (1.20x3.00) PUERTA DE 01 HOJA CONTRAPLACADA CON MIRILLA SUPERIOR Y PLACA DE PROTECCION H=1.10 CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=1136.05, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.6 - P-6 (0.90x3.00) PUERTA DE 01 HOJA CONTRAPLACADA Y REJILLA DE VENTILACION INFERIOR, CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=956.05, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.7 - P-7 (0.80x3.00) PUERTA DE 01 HOJA CONTRAPLACADA Y REJILLA DE VENTILACION INFERIOR, CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=1198.39, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.8 - P-8 (0.90x3.00) PUERTA DE 01 HOJA CONTRAPLACADA Y REJILLA DE VENTILACION INFERIOR, Y REJILLA DE VENTILACION SUPERIOR
  UPDATE catalogo_partidas SET precio_unitario=956.05, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.9 - P-8a (1.00x2.20) PUERTA DE 01 HOJA BATIENTE CON PLACA ACERO INOX. CON VISOR
  UPDATE catalogo_partidas SET precio_unitario=1536.04, cantidad_presupuesto=2.0 WHERE codigo='OE.3.7.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.10 - P-9 (1.00x3.00) PUERTA DE 01 HOJA CONTRAPLACADA Y REJILLA DE VENTILACION SUPERIOR CON PLACA ACERO INOX. DE PROTECCION
  UPDATE catalogo_partidas SET precio_unitario=956.05, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.11 - P-10 (1.00x3.00) PUERTA DE 01 HOJA CONTRAPLACADA Y REJILLA DE VENTILACION INFERIOR, CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=956.05, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.12 - P-10a (0.60x1.80) PUERTA DE 01 HOJA CONTRAPLACADA Y REJILLA DE VENTILACION INFERIOR, CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=756.05, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.13 - P-10b (1.00x2.20) PUERTA DE 01 HOJA CONTRAPLACADA CON ACERO INOXIDABLE ACABADO SATINADO
  UPDATE catalogo_partidas SET precio_unitario=2536.04, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.14 - P-11 (1.20x3.00) PUERTA DE 01 HOJA CONTRAPLACADA CON PLACA DE PROTECCION H=1.10 CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=2136.05, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.15 - P-12 (1.40x3.00) PUERTA DE 02 HOJA CONTRAPLACADA CON PLACA DE PROTECCION H=1.10 CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=2236.04, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.16 - P-13 (1.80x3.00) PUERTA DE 02 HOJA CONTRAPLACADA VAIVEN CON MIRILLA SUPERIOR Y PLACA DE PROTECCION H=1.10 CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=3836.05, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.17 - P-14 (1.50x3.00) PUERTA DE 02 HOJAS CONTRAPLACADA CON PLACA DE PROTECCION CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=3936.06, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.18 - P-15 (1.80x3.00) PUERTA DE 02 HOJA CONTRAPLACADA CON MIRILLA SUPERIOR Y PLACA DE PROTECCION H=1.10 CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=2136.05, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.19 - P-16 (1.00x3.00) PUERTA DE 01 HOJA CONTRAPLACADA Y REJILLA DE VENTILACION SUPERIOR
  UPDATE catalogo_partidas SET precio_unitario=956.05, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.20 - P-17 (0.80x2.20) PUERTA DE 01 HOJA CONTRAPLACADA
  UPDATE catalogo_partidas SET precio_unitario=986.04, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.20' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.21 - P-18 (1.20x2.20) PUERTA DE 01 HOJA CONTRAPLACADA Y PLACA DE PROTECCION H=1.10 CON PLANCHA INTERIOR DE PLOMO
  UPDATE catalogo_partidas SET precio_unitario=2986.05, cantidad_presupuesto=1.0 WHERE codigo='OE.3.7.1.21' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.22 - P-19 (0.90x2.20) PUERTA DE 01 HOJA CONTRAPLACADA CON PLANCHA INTERIOR DE PLOMO
  UPDATE catalogo_partidas SET precio_unitario=3104.05, cantidad_presupuesto=4.0 WHERE codigo='OE.3.7.1.22' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.23 - P-20 (1.60x2.20) PUERTA DE 01 HOJA CORREDIZA CON PLACA ACERO INOX. CON VISOR (CON SIST. ELEC.)
  UPDATE catalogo_partidas SET precio_unitario=4236.85, cantidad_presupuesto=2.0 WHERE codigo='OE.3.7.1.23' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.24 - P-21 (1.80x3.00) PUERTA DE 02 HOJAS DE TABLERO REBAJADO CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=2708.75, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.24' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.25 - P-22 (0.90x2.40) PUERTA DE 01 HOJA DE TABLERO REBAJADO CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=1409.57, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.25' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.26 - P-22a (0.70x2.40) PUERTA DE 01 HOJA CONTRAPLACADA Y REJILLA DE VENTILACION INFERIOR, CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=1164.13, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.26' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.27 - P-23 (2.00x3.00) PUERTA DE 02 HOJAS DE TABLERO REBAJADO CON SOBRELUZ
  UPDATE catalogo_partidas SET precio_unitario=5186.75, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.27' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.28 - P-24 (0.90x2.10) PUERTA DE 01 HOJA CONTRAPLACADA
  UPDATE catalogo_partidas SET precio_unitario=810.13, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.28' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.29 - P-25 (0.60x2.20) PUERTA DE 01 HOJA CONTRAPLACADA
  UPDATE catalogo_partidas SET precio_unitario=886.05, cantidad_presupuesto=0.0 WHERE codigo='OE.3.7.1.29' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.30 - Puerta de madera de 01 hoja contraplacada con mirilla y  sobreluz tipo p-01 (1.00x3.00)
  UPDATE catalogo_partidas SET precio_unitario=1895.68, cantidad_presupuesto=58.0 WHERE codigo='OE.3.7.1.30' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.31 - Puerta de madera de 01 hoja contraplacada con sobreluz tipo p-02 (1.00x3.00)
  UPDATE catalogo_partidas SET precio_unitario=1883.08, cantidad_presupuesto=48.0 WHERE codigo='OE.3.7.1.31' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.32 - Puerta de madera de 01 hoja contraplacada con mirilla y placa de protección h=1.10 y sobreluz tipo p-03 (1.00x3.00)
  UPDATE catalogo_partidas SET precio_unitario=1968.93, cantidad_presupuesto=28.0 WHERE codigo='OE.3.7.1.32' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.33 - Puerta de madera de 02 hojas de tablero rebajado con sobreluz tipo p-04 (1.20x3.00)
  UPDATE catalogo_partidas SET precio_unitario=2615.35, cantidad_presupuesto=21.0 WHERE codigo='OE.3.7.1.33' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.34 - Puerta de madera de 01 hoja contraplacada con mirilla y placa de protección h=1.10 y sobreluz tipo p-05 (1.20x3.00)
  UPDATE catalogo_partidas SET precio_unitario=2067.69, cantidad_presupuesto=15.0 WHERE codigo='OE.3.7.1.34' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.35 - Puerta de madera de 01 hoja contraplacada con rejilla de ventilación inferior y sobreluz p-06 (0.90x3.00)
  UPDATE catalogo_partidas SET precio_unitario=1857.6, cantidad_presupuesto=59.0 WHERE codigo='OE.3.7.1.35' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.36 - Puerta de madera de 01 hoja contraplacada con rejilla de ventilación inferior y sobreluz tipo p-07 (0.80x3.00)
  UPDATE catalogo_partidas SET precio_unitario=1817.67, cantidad_presupuesto=63.0 WHERE codigo='OE.3.7.1.36' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.37 - Puerta de madera de 01 hoja contraplacada con rejillas de ventilación inferior y superior tipo p-08 (0.90x3.00)
  UPDATE catalogo_partidas SET precio_unitario=1874.0, cantidad_presupuesto=46.0 WHERE codigo='OE.3.7.1.37' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.38 - Puerta de madera de 01 hoja contraplacada con rejilla de ventilacion superior y placa acero inox.  tipo p-9 (1.00x3.00)
  UPDATE catalogo_partidas SET precio_unitario=1911.68, cantidad_presupuesto=46.0 WHERE codigo='OE.3.7.1.38' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.39 - Puerta de madera de 01 hoja contraplacada con rejilla de ventilacion inferior y sobreluz tipo p-10 (1.00x3.00)
  UPDATE catalogo_partidas SET precio_unitario=1898.08, cantidad_presupuesto=22.0 WHERE codigo='OE.3.7.1.39' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.40 - Puerta de madera de 01 hoja contraplacada con rejilla de ventilacion inferior y sobreluz tipo p-10a (0.60x1.80)
  UPDATE catalogo_partidas SET precio_unitario=930.25, cantidad_presupuesto=3.0 WHERE codigo='OE.3.7.1.40' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.41 - Puerta de madera de 01 hoja contraplacada con acero inoxidable acabado satinado tipo p-10b (1.00x2.20)
  UPDATE catalogo_partidas SET precio_unitario=1858.36, cantidad_presupuesto=1.0 WHERE codigo='OE.3.7.1.41' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.42 - Puerta de madera de 01 hoja contraplacada con placa de proteccion h=1.10 y sobreluz tipo p-11 (1.20x3.00)
  UPDATE catalogo_partidas SET precio_unitario=2058.59, cantidad_presupuesto=31.0 WHERE codigo='OE.3.7.1.42' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.43 - Puerta de madera de 02 hojas contraplacadas con placa de proteccion h=1.10 y con sobreluz tipo p-12 (1.40x3.00)
  UPDATE catalogo_partidas SET precio_unitario=2683.84, cantidad_presupuesto=11.0 WHERE codigo='OE.3.7.1.43' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.44 - Puerta de madera de 02 hojas contraplacada vaiven con mirilla, placa de proteccion h=1.10 y sobreluz tipo p-13 (1.80x3.00)
  UPDATE catalogo_partidas SET precio_unitario=3549.97, cantidad_presupuesto=6.0 WHERE codigo='OE.3.7.1.44' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.45 - Puerta de madera de 02 hojas contraplacada con placa de proteccion y sobreluz tipo p-14 (1.50x3.00)
  UPDATE catalogo_partidas SET precio_unitario=2898.52, cantidad_presupuesto=10.0 WHERE codigo='OE.3.7.1.45' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.46 - Puerta de madera de 02 hojas contraplacada con mirilla, placa de proteccion h=1.10 y sobreluz tipo p-15 (1.80x3.00)
  UPDATE catalogo_partidas SET precio_unitario=3372.87, cantidad_presupuesto=24.0 WHERE codigo='OE.3.7.1.46' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.47 - Puerta de madera de 01 hoja contraplacada con rejilla de ventilacion superior tipo p-16 (1.00x3.00)
  UPDATE catalogo_partidas SET precio_unitario=1909.08, cantidad_presupuesto=39.0 WHERE codigo='OE.3.7.1.47' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.48 - Puerta de madera de 01 hoja contraplacada tipo p-17 (0.80x2.20)
  UPDATE catalogo_partidas SET precio_unitario=1544.22, cantidad_presupuesto=22.0 WHERE codigo='OE.3.7.1.48' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.49 - Puerta de madera de 02 hojas de tablero rebajado con sobreluz tipo p-21 (1.80x3.00)
  UPDATE catalogo_partidas SET precio_unitario=4206.4, cantidad_presupuesto=2.0 WHERE codigo='OE.3.7.1.49' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.50 - Puerta de madera de 01 hoja de tablero rebajado con sobreluz tipo p-22 (0.90x2.40)
  UPDATE catalogo_partidas SET precio_unitario=1798.2, cantidad_presupuesto=6.0 WHERE codigo='OE.3.7.1.50' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.51 - Puerta de madera de 01 hoja contraplacada con rejilla de ventilacion inferior y sobreluz tipo p-22a (0.70x2.40)
  UPDATE catalogo_partidas SET precio_unitario=1655.47, cantidad_presupuesto=3.0 WHERE codigo='OE.3.7.1.51' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.52 - Puerta de madera de 02 hojas de tablero rebajado con sobreluz tipo p-23 (2.00x3.00)
  UPDATE catalogo_partidas SET precio_unitario=4545.07, cantidad_presupuesto=3.0 WHERE codigo='OE.3.7.1.52' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.53 - Puerta de madera de 01 hoja contraplacada tipo p-24 (0.90x2.10)
  UPDATE catalogo_partidas SET precio_unitario=1543.55, cantidad_presupuesto=1.0 WHERE codigo='OE.3.7.1.53' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.1.54 - Puerta de madera de 01 hoja contraplacada tipo p-25 (0.60x2.20)
  UPDATE catalogo_partidas SET precio_unitario=1180.22, cantidad_presupuesto=11.0 WHERE codigo='OE.3.7.1.54' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.12 - MUEBLES FIJOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.7.12' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.12.1 - MA-01 MUEBLE FIJO TABLERO AGLOMERADO o similar MELAMINICO POSTFORMADO
  UPDATE catalogo_partidas SET precio_unitario=660.8, cantidad_presupuesto=25.07 WHERE codigo='OE.3.7.12.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.12.2 - MB-01 MUEBLE TABLERO AGLOMERADO ENCHAPADO EN PLANCHA LAMINADA POST FORMADA
  UPDATE catalogo_partidas SET precio_unitario=577.02, cantidad_presupuesto=39.84 WHERE codigo='OE.3.7.12.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.12.3 - MB-02 MUEBLE TABLERO AGLOMERADO ENCHAPADO EN PLANCHA LAMINADA POST FORMADA
  UPDATE catalogo_partidas SET precio_unitario=666.7, cantidad_presupuesto=22.56 WHERE codigo='OE.3.7.12.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.12.4 - MB-02a MUEBLE TABLERO AGLOMERADO ENCHAPADO EN PLANCHA LAMINADA POST FORMADA
  UPDATE catalogo_partidas SET precio_unitario=1264.0, cantidad_presupuesto=1.5 WHERE codigo='OE.3.7.12.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.12.5 - MB-03 MUEBLE TABLERO AGLOMERADO ENCHAPADO EN PLANCHA LAMINADA POST FORMADA
  UPDATE catalogo_partidas SET precio_unitario=664.34, cantidad_presupuesto=29.47 WHERE codigo='OE.3.7.12.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.12.6 - MB-03a MUEBLE TABLERO AGLOMERADO  ENCHAPADO EN ACERO INOX.
  UPDATE catalogo_partidas SET precio_unitario=1424.0, cantidad_presupuesto=16.88 WHERE codigo='OE.3.7.12.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.12.7 - MB-04 MUEBLE TABLERO AGLOMERADO  ENCHAPADO EN ACERO INOX.
  UPDATE catalogo_partidas SET precio_unitario=960.0, cantidad_presupuesto=16.42 WHERE codigo='OE.3.7.12.7' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.12.8 - MB-04a MUEBLE TABLERO AGLOMERADO  ENCHAPADO EN PLANCHA LAMINADA POST FORMADA
  UPDATE catalogo_partidas SET precio_unitario=660.0, cantidad_presupuesto=24.25 WHERE codigo='OE.3.7.12.8' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.12.9 - MB-05a MUEBLE TABLERO AGLOMERADO  ENCHAPADO EN ACERO INOX.
  UPDATE catalogo_partidas SET precio_unitario=566.0, cantidad_presupuesto=8.9 WHERE codigo='OE.3.7.12.9' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.12.10 - MB-06 MUEBLE TABLERO AGLOMERADO  ENCHAPADO EN ACERO INOX.
  UPDATE catalogo_partidas SET precio_unitario=750.0, cantidad_presupuesto=4.79 WHERE codigo='OE.3.7.12.10' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.12.11 - MB-07 MUEBLE TABLERO AGLOMERADO  ENCHAPADO EN ACERO INOX.
  UPDATE catalogo_partidas SET precio_unitario=695.02, cantidad_presupuesto=32.05 WHERE codigo='OE.3.7.12.11' AND proyecto_id=v_proyecto_id;
  -- OE.3.7.12.12 - MB-08a MUEBLE TABLERO AGLOMERADO  ENCHAPADO EN PLANCHA LAMINADA POST FORMADA
  UPDATE catalogo_partidas SET precio_unitario=550.0, cantidad_presupuesto=6.0 WHERE codigo='OE.3.7.12.12' AND proyecto_id=v_proyecto_id;
  -- OE.3.8 - CARPINTERÍA METÁLICA Y HERRERÍA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.8' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.1 - VENTANAS DE FIERRO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.1.1 - Ventanas de fierro con malla metalica cocada 1"x1" (VF-01) 4.45x1.60m.  incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=233.33, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.1.2 - Ventanas de fierro con malla metalica cocada 1"x1" (VF-02) 2.40x1.00m.  incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=400.0, cantidad_presupuesto=12.0 WHERE codigo='OE.3.8.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.1.3 - Ventanas de fierro con malla metalica cocada 1"x1" (VF-03)1.83x1.00m. incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=141.67, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.2 - PUERTA DE FIERRO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.8.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.2.1 - Puerta de fierro PF-01 (1.50x2.60) incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=1500.0, cantidad_presupuesto=2.0 WHERE codigo='OE.3.8.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.2.2 - Puerta de fierro PF-02 (3.25x3.00) incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=3700.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.2.3 - Puerta de fierro PF-03 (1.20x3.00) incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=650.0, cantidad_presupuesto=2.0 WHERE codigo='OE.3.8.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.2.4 - Puerta de fierro PF-04 (1.50x3.00) incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=820.01, cantidad_presupuesto=4.0 WHERE codigo='OE.3.8.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.2.5 - Puerta de fierro PF-05 (1.80x3.00) incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=970.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.2.6 - Puerta de fierro PF-06 (2.40x3.00) incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=1300.01, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.2.7 - Puerta de fierro PF-07  (1.20x3.00)incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=1450.0, cantidad_presupuesto=3.0 WHERE codigo='OE.3.8.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.2.8 - Puerta de fierro PF-08 (4.43x3.00) incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=900.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.2.9 - Puerta de fierro PF-09 (4.00x3.00)  incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=850.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.2.10 - Puerta de fierro PF-10 (1.00x2.05)  incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=900.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.2.11 - Puerta de fierro PF-11 (0.80x1.75)  incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=750.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4 - VENTANA DE ALUMINIO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.8.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.1 - (V-1)1.50 X 1.80 m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=1215.87, cantidad_presupuesto=46.0 WHERE codigo='OE.3.8.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.2 - (V-1')1.05 X 1.80m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=750.0, cantidad_presupuesto=2.0 WHERE codigo='OE.3.8.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.3 - (V-2)1.20 X 1.80m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=972.7, cantidad_presupuesto=8.0 WHERE codigo='OE.3.8.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.4 - (V-3)1.10 X 1.00m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=495.35, cantidad_presupuesto=8.0 WHERE codigo='OE.3.8.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.5 - (V-4)1.50 X 1.00m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=675.48, cantidad_presupuesto=32.0 WHERE codigo='OE.3.8.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.6 - (V-5)0.60 X 1.00m VENTANA TIPO VITROVENT, MARCOS DE ALUMINIO VIDRIO LAMINADO 4mm
  UPDATE catalogo_partidas SET precio_unitario=499.85, cantidad_presupuesto=65.0 WHERE codigo='OE.3.8.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.7 - (V-6)0.80 X 1.00m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=560.0, cantidad_presupuesto=102.0 WHERE codigo='OE.3.8.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.8 - (V-6a)0.60 X 1.80m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=650.0, cantidad_presupuesto=3.0 WHERE codigo='OE.3.8.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.9 - (V-8)1.62 X 1.80m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=950.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.10 - (V-9)2.00 X 1.80m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=1493.17, cantidad_presupuesto=4.0 WHERE codigo='OE.3.8.4.10' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.11 - (V-10)2.00 X 0.60m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=540.39, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.4.11' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.12 - (V-10')2.00 X 0.60m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=850.0, cantidad_presupuesto=4.0 WHERE codigo='OE.3.8.4.12' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.13 - (V-11)1.09 X 1.80m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=360.0, cantidad_presupuesto=2.0 WHERE codigo='OE.3.8.4.13' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.14 - (V-12)1.00 X 1.00m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=450.32, cantidad_presupuesto=4.0 WHERE codigo='OE.3.8.4.14' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.15 - (V-13)0.80 X 1.80m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=450.32, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.4.15' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.16 - (V-14)1.00 X 0.60m VIDRIO EMPLOMADO
  UPDATE catalogo_partidas SET precio_unitario=160.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.4.16' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.17 - (V-15)0.50 X 1.00m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=196.0, cantidad_presupuesto=3.0 WHERE codigo='OE.3.8.4.17' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.18 - (V-15a)0.40 X 1.00m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=120.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.4.18' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.19 - (V-16)3.70 X 1.00m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=210.0, cantidad_presupuesto=2.0 WHERE codigo='OE.3.8.4.19' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.20 - (V-17)1.10 X 1.80m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=190.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.4.20' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.21 - (V-18)0.70 X 1.80m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=185.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.4.21' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.22 - (V-19)5.50 X 1.00m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=160.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.4.22' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.23 - (V-20)1.14 X 1.80m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=155.0, cantidad_presupuesto=0.0 WHERE codigo='OE.3.8.4.23' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.24 - (V-7)2.80 X 1.00m MARCOS DE ALUMINIO VIDRIO LAMINADO 6mm
  UPDATE catalogo_partidas SET precio_unitario=145.0, cantidad_presupuesto=7.0 WHERE codigo='OE.3.8.4.24' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.25 - Ventana de aluminio de 1.50 m x 1.80 m con RPT, incluye accesorios e instalacion
  UPDATE catalogo_partidas SET precio_unitario=5305.72, cantidad_presupuesto=31.0 WHERE codigo='OE.3.8.4.25' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.26 - Ventana de aluminio de 1.05 m x 1.80 m con RPT, incluye accesorios e instalacion
  UPDATE catalogo_partidas SET precio_unitario=4263.08, cantidad_presupuesto=2.0 WHERE codigo='OE.3.8.4.26' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.27 - Ventana de aluminio de 1.20 m x 1.80 m con RPT, incluye accesorios e instalacion
  UPDATE catalogo_partidas SET precio_unitario=4608.2, cantidad_presupuesto=4.0 WHERE codigo='OE.3.8.4.27' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.28 - Ventana de aluminio de 1.10 m x 1.00 m con RPT, incluye accesorios e instalacion
  UPDATE catalogo_partidas SET precio_unitario=2183.38, cantidad_presupuesto=2.0 WHERE codigo='OE.3.8.4.28' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.29 - Ventana de aluminio de 2.00 m x 0.60 m con RPT, incluye accesorios e instalacion
  UPDATE catalogo_partidas SET precio_unitario=3185.5, cantidad_presupuesto=5.0 WHERE codigo='OE.3.8.4.29' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.30 - Ventana de aluminio de 1.14 m x 1.80 m con RPT, incluye accesorios e instalacion
  UPDATE catalogo_partidas SET precio_unitario=4469.72, cantidad_presupuesto=2.0 WHERE codigo='OE.3.8.4.30' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.4.31 - Ventana de aluminio de 1.30 m x 1.80 m con RPT, incluye accesorios e instalacion
  UPDATE catalogo_partidas SET precio_unitario=4992.22, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.4.31' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.5 - PUERTAS DE ALUMINIO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.8.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.5.1 - Puerta 01 hoja de alumino (PA-01) 0.70x2.20m. incluye accesorios
  UPDATE catalogo_partidas SET precio_unitario=1280.0, cantidad_presupuesto=6.0 WHERE codigo='OE.3.8.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.6 - MAMPARA DE ALUMINIO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.8.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.6.1 - MAMPARA VENTANAS CORREDIZAS MARCOS DE ALUMINIO VIDRIO TEMPLADO 10mm (M-1) 2.36x2.40m.
  UPDATE catalogo_partidas SET precio_unitario=2884.4, cantidad_presupuesto=2.0 WHERE codigo='OE.3.8.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.6.2 - MAMPARA VENTANAS CORREDIZAS MARCOS DE ALUMINIO VIDRIO TEMPLADO 10mm (M-2) 3.26x2.40m.
  UPDATE catalogo_partidas SET precio_unitario=4005.4, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.6.3 - MAMPARA VENTANAS CORREDIZAS MARCOS DE ALUMINIO VIDRIO TEMPLADO 10mm (M-3) 5.63x3.00m.
  UPDATE catalogo_partidas SET precio_unitario=4856.4, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.6.4 - MAMPARA VENTANAS CORREDIZAS MARCOS DE ALUMINIO VIDRIO TEMPLADO 10mm (M-4) 3.18x3.00m.
  UPDATE catalogo_partidas SET precio_unitario=3877.4, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.6.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.6.5 - MAMPARA VENTANAS CORREDIZAS MARCOS DE ALUMINIO VIDRIO TEMPLADO 10mm (M-5) 2.20x3.00m.
  UPDATE catalogo_partidas SET precio_unitario=3788.4, cantidad_presupuesto=2.0 WHERE codigo='OE.3.8.6.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.6.6 - MAMPARA VENTANAS CORREDIZAS MARCOS DE ALUMINIO VIDRIO TEMPLADO 10mm (M-6) 3.10x3.00m.
  UPDATE catalogo_partidas SET precio_unitario=3178.4, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.6.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.6.7 - MAMPARA VENTANAS CORREDIZAS MARCOS DE ALUMINIO VIDRIO TEMPLADO 10mm (M-7) 2.02x3.00m.
  UPDATE catalogo_partidas SET precio_unitario=3153.4, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.6.7' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.6.8 - MAMPARA VENTANAS CORREDIZAS MARCOS DE ALUMINIO VIDRIO TEMPLADO 10mm (M-8) 2.04x2.40m.
  UPDATE catalogo_partidas SET precio_unitario=3438.4, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.6.8' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.6.9 - MAMPARA VENTANAS CORREDIZAS MARCOS DE ALUMINIO VIDRIO TEMPLADO 10mm (M-9) 3.00x3.00m.
  UPDATE catalogo_partidas SET precio_unitario=4488.4, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.6.9' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.10 - PUERTAS DE PLANCHA METALICA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.8.10' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.10.1 - Puerta cortafuegos (PCF-01) 1.20x2.20m.  incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=1973.2, cantidad_presupuesto=28.0 WHERE codigo='OE.3.8.10.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.10.2 - Puerta cortafuegos (PCF-02) 2.80x2.20m.  incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=2500.2, cantidad_presupuesto=2.0 WHERE codigo='OE.3.8.10.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.10.3 - Puerta cortafuegos (PCF-03) 2.40x2.20m.  incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=2298.2, cantidad_presupuesto=3.0 WHERE codigo='OE.3.8.10.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.10.4 - Puerta cortafuegos (PCF-04)2.30x2.20m.  incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=2130.2, cantidad_presupuesto=4.0 WHERE codigo='OE.3.8.10.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.10.5 - Puerta cortafuegos (PCF-05)1.50x2.20m.  incluye accesorios y pintura
  UPDATE catalogo_partidas SET precio_unitario=2019.2, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.10.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.10.6 - Puerta cortafuego de metal 60 cm x 2.20 m. incluye accesorios e instalacion
  UPDATE catalogo_partidas SET precio_unitario=2378.5, cantidad_presupuesto=20.0 WHERE codigo='OE.3.8.10.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.10.7 - Puerta cortafuego de metal 80 cm x 2.20 m. incluye accesorios e instalacion
  UPDATE catalogo_partidas SET precio_unitario=2378.5, cantidad_presupuesto=24.0 WHERE codigo='OE.3.8.10.7' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.10.8 - Puerta cortafuego de metal 1.00 m x 2.20 m. incluye accesorios e instalacion
  UPDATE catalogo_partidas SET precio_unitario=2382.05, cantidad_presupuesto=29.0 WHERE codigo='OE.3.8.10.8' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.13 - DIVISIÓN DE ALUMINIO PARA SERVICIOS HIGIÉNICOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.8.13' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.13.1 - SEPARADOR METALICOS PARA BAÑOS
  UPDATE catalogo_partidas SET precio_unitario=244.65, cantidad_presupuesto=34.76 WHERE codigo='OE.3.8.13.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.13.2 - SEPARADOR METALICO DE URINARIO (0.40m x 0.90m)
  UPDATE catalogo_partidas SET precio_unitario=331.17, cantidad_presupuesto=16.0 WHERE codigo='OE.3.8.13.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.14 - BARANDAS METÁLICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.8.14' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.14.1 - BARANDAS METALICA EN ESCALERAS H=0.90 m (inc. Pintado)
  UPDATE catalogo_partidas SET precio_unitario=495.34, cantidad_presupuesto=83.83 WHERE codigo='OE.3.8.14.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.14.2 - BARANDAS METALICA EN EXTERIORES H=0.35 m (inc. Pintado)
  UPDATE catalogo_partidas SET precio_unitario=461.06, cantidad_presupuesto=9.32 WHERE codigo='OE.3.8.14.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.14.3 - BARANDAS METALICA EN EXTERIORES, CON PASAMANOS H=0.90 m (inc. Pintado)
  UPDATE catalogo_partidas SET precio_unitario=612.31, cantidad_presupuesto=79.59 WHERE codigo='OE.3.8.14.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.14.4 - BARANDAS METALICA DE ACERO INOXIDABLE=0.90 m (inc. Accesorios de fijacion)
  UPDATE catalogo_partidas SET precio_unitario=522.21, cantidad_presupuesto=6.32 WHERE codigo='OE.3.8.14.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.15 - PASAMANOS AISLADOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.8.15' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.15.2 - Pasamano de fe. tubo ∅ 2" e=2.5mm, (inc. Pintado)
  UPDATE catalogo_partidas SET precio_unitario=107.61, cantidad_presupuesto=193.45 WHERE codigo='OE.3.8.15.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.16 - CERCOS DE FIERRO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.8.16' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.16.1 - Cerco tipo reja con tubos de fierro 2x2x1/8" h=3.08 m (inc. Pintado)
  UPDATE catalogo_partidas SET precio_unitario=1003.54, cantidad_presupuesto=34.69 WHERE codigo='OE.3.8.16.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.18 - ELEMENTOS METALICOS ESPECIALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.8.18' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.18.1 - Tapa junta de aluminio Plt 4"x5/16" para interiores
  UPDATE catalogo_partidas SET precio_unitario=45.36, cantidad_presupuesto=283.54 WHERE codigo='OE.3.8.18.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.18.2 - Tapa junta metalico Galvanizado E=1/32”  para exteriores
  UPDATE catalogo_partidas SET precio_unitario=120.68, cantidad_presupuesto=305.89 WHERE codigo='OE.3.8.18.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.18.3 - Tapa junta metalica Galvanizada E=1/32”  en techos
  UPDATE catalogo_partidas SET precio_unitario=120.68, cantidad_presupuesto=535.8 WHERE codigo='OE.3.8.18.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.18.4 - Cantonera de aluminio de 47x27mm
  UPDATE catalogo_partidas SET precio_unitario=103.46, cantidad_presupuesto=594.02 WHERE codigo='OE.3.8.18.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.18.5 - Barra de seguridad Acero inoxidable 32 mm - 60 cm EN SSHH
  UPDATE catalogo_partidas SET precio_unitario=199.3, cantidad_presupuesto=70.0 WHERE codigo='OE.3.8.18.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.18.6 - Escalera de gato
  UPDATE catalogo_partidas SET precio_unitario=1532.17, cantidad_presupuesto=5.0 WHERE codigo='OE.3.8.18.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.18.7 - Enrejado Metalico tipo Parasol
  UPDATE catalogo_partidas SET precio_unitario=524.3, cantidad_presupuesto=957.6 WHERE codigo='OE.3.8.18.7' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.18.8 - Protector de camillas
  UPDATE catalogo_partidas SET precio_unitario=296.23, cantidad_presupuesto=433.07 WHERE codigo='OE.3.8.18.8' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.18.9 - Protector de esquineros
  UPDATE catalogo_partidas SET precio_unitario=8.74, cantidad_presupuesto=139.0 WHERE codigo='OE.3.8.18.9' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.18.10 - Muro Cortina según diseño
  UPDATE catalogo_partidas SET precio_unitario=378.93, cantidad_presupuesto=891.65 WHERE codigo='OE.3.8.18.10' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.18.11 - Pergola Metalica 01 (incluye accesorios y pintura)
  UPDATE catalogo_partidas SET precio_unitario=9761.33, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.18.11' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.18.12 - Pergola Metalica 02 (incluye accesorios y pintura)
  UPDATE catalogo_partidas SET precio_unitario=9022.33, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.18.12' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.18.13 - Pergola Metalica 03 (incluye accesorios y pintura)
  UPDATE catalogo_partidas SET precio_unitario=9337.79, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.18.13' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.18.14 - Pergola Metalica 04 (incluye accesorios y pintura)
  UPDATE catalogo_partidas SET precio_unitario=8927.1, cantidad_presupuesto=1.0 WHERE codigo='OE.3.8.18.14' AND proyecto_id=v_proyecto_id;
  -- OE.3.8.18.15 - Celosias Metalicas
  UPDATE catalogo_partidas SET precio_unitario=154.94, cantidad_presupuesto=58.7 WHERE codigo='OE.3.8.18.15' AND proyecto_id=v_proyecto_id;
  -- OE.3.9 - CERRAJERIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.9' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.1 - BISAGRAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.9.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.1.1 - Bisagra aluminizada capuchina  pesada de 4" x 4"
  UPDATE catalogo_partidas SET precio_unitario=31.3, cantidad_presupuesto=2752.0 WHERE codigo='OE.3.9.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.1.2 - Bisagras vaiven  de acero grado 2 satinadas
  UPDATE catalogo_partidas SET precio_unitario=133.86, cantidad_presupuesto=54.0 WHERE codigo='OE.3.9.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.2 - CERRADURAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.9.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.2.1 - Cerradura tipo A
  UPDATE catalogo_partidas SET precio_unitario=89.28, cantidad_presupuesto=23.0 WHERE codigo='OE.3.9.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.2.2 - Cerradura tipo B
  UPDATE catalogo_partidas SET precio_unitario=170.29, cantidad_presupuesto=218.0 WHERE codigo='OE.3.9.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.2.3 - Cerradura tipo C
  UPDATE catalogo_partidas SET precio_unitario=90.85, cantidad_presupuesto=8.0 WHERE codigo='OE.3.9.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.2.4 - Cerradura tipo D
  UPDATE catalogo_partidas SET precio_unitario=145.29, cantidad_presupuesto=85.0 WHERE codigo='OE.3.9.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.2.5 - Cerradura tipo E
  UPDATE catalogo_partidas SET precio_unitario=2950.65, cantidad_presupuesto=86.0 WHERE codigo='OE.3.9.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.2.6 - Cerradura tipo F
  UPDATE catalogo_partidas SET precio_unitario=63.95, cantidad_presupuesto=27.0 WHERE codigo='OE.3.9.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.2.7 - Cerradura tipo H
  UPDATE catalogo_partidas SET precio_unitario=21.47, cantidad_presupuesto=18.0 WHERE codigo='OE.3.9.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.2.8 - Cerradura tipo I
  UPDATE catalogo_partidas SET precio_unitario=199.3, cantidad_presupuesto=18.0 WHERE codigo='OE.3.9.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.2.9 - Cerradura tipo K
  UPDATE catalogo_partidas SET precio_unitario=468.29, cantidad_presupuesto=11.0 WHERE codigo='OE.3.9.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.2.10 - Cerradura tipo L
  UPDATE catalogo_partidas SET precio_unitario=47.84, cantidad_presupuesto=3.0 WHERE codigo='OE.3.9.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.2.11 - Cerradura tipo O
  UPDATE catalogo_partidas SET precio_unitario=140.29, cantidad_presupuesto=134.0 WHERE codigo='OE.3.9.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.2.12 - Cerradura tipo P
  UPDATE catalogo_partidas SET precio_unitario=118.29, cantidad_presupuesto=8.0 WHERE codigo='OE.3.9.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.5 - ACCESORIOS EN GENERAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.9.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.5.1 - Topes de bronce para puertas tipo T
  UPDATE catalogo_partidas SET precio_unitario=21.39, cantidad_presupuesto=336.0 WHERE codigo='OE.3.9.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.5.2 - Sistema vaiven tipo hidraulico tipo G
  UPDATE catalogo_partidas SET precio_unitario=86.49, cantidad_presupuesto=48.0 WHERE codigo='OE.3.9.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.5.3 - Picaporte de embutir tipo J
  UPDATE catalogo_partidas SET precio_unitario=102.49, cantidad_presupuesto=64.0 WHERE codigo='OE.3.9.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.9.5.4 - Freno aereo tipo N
  UPDATE catalogo_partidas SET precio_unitario=208.76, cantidad_presupuesto=132.0 WHERE codigo='OE.3.9.5.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.10 - VIDRIOS, CRISTALES Y SIMILARES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.10' AND proyecto_id=v_proyecto_id;
  -- OE.3.10.1 - ESPEJOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.10.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.10.1.1 - Espejo 0.60x0.80 m de  4mm
  UPDATE catalogo_partidas SET precio_unitario=136.25, cantidad_presupuesto=140.0 WHERE codigo='OE.3.10.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.11 - PINTURA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.11' AND proyecto_id=v_proyecto_id;
  -- OE.3.11.1 - PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.11.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.11.1.1 - PINTURA CIELORASO C/OLEO MATE (2MANOS), C/IMPRIMANTE
  UPDATE catalogo_partidas SET precio_unitario=21.46, cantidad_presupuesto=0.0 WHERE codigo='OE.3.11.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.11.1.2 - PINTURA MUROS INTERIORES C/OLEO MATE (2MANOS), C/IMPRIMANTE
  UPDATE catalogo_partidas SET precio_unitario=18.96, cantidad_presupuesto=0.0 WHERE codigo='OE.3.11.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.11.1.3 - PINTURA MUROS EXTERIORES C/LATEX SATINADO (2MANOS), C/IMPRIMANTE
  UPDATE catalogo_partidas SET precio_unitario=21.21, cantidad_presupuesto=0.0 WHERE codigo='OE.3.11.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.11.1.4 - PINTURA FALSO CIELORASO C/EPOXICA (2MANOS), C/IMPRIMANTE
  UPDATE catalogo_partidas SET precio_unitario=20.08, cantidad_presupuesto=443.82 WHERE codigo='OE.3.11.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.11.1.5 - PINTURA MURAL EN AMBIENTES DE PEDIATRIA
  UPDATE catalogo_partidas SET precio_unitario=55.68, cantidad_presupuesto=131.4 WHERE codigo='OE.3.11.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.11.1.6 - Lijado e imprimado en cielo raso y vigas
  UPDATE catalogo_partidas SET precio_unitario=10.21, cantidad_presupuesto=17182.98 WHERE codigo='OE.3.11.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.11.1.7 - Lijado, imprimado y empastado en cielo raso y vigas (sotano)
  UPDATE catalogo_partidas SET precio_unitario=26.98, cantidad_presupuesto=1679.78 WHERE codigo='OE.3.11.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.3.11.1.8 - Pintura en cielo raso y vigas (2 manos)
  UPDATE catalogo_partidas SET precio_unitario=13.35, cantidad_presupuesto=18862.76 WHERE codigo='OE.3.11.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.3.11.1.9 - Lijado, imprimado y empastado en elementos verticales interiores
  UPDATE catalogo_partidas SET precio_unitario=23.55, cantidad_presupuesto=34555.33 WHERE codigo='OE.3.11.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.3.11.1.10 - Pintura en elementos verticales interiores (2 manos)
  UPDATE catalogo_partidas SET precio_unitario=13.35, cantidad_presupuesto=34555.33 WHERE codigo='OE.3.11.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.3.11.1.11 - Lijado e imprimado en elementos verticales exteriores
  UPDATE catalogo_partidas SET precio_unitario=21.08, cantidad_presupuesto=7895.69 WHERE codigo='OE.3.11.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.3.11.1.12 - Pintura en elementos verticales exteriores (2 manos)
  UPDATE catalogo_partidas SET precio_unitario=15.48, cantidad_presupuesto=7895.69 WHERE codigo='OE.3.11.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.3.11.1.13 - Lijado, imprimado y empastado en falso cielo raso con plancha de fibrocemento
  UPDATE catalogo_partidas SET precio_unitario=26.98, cantidad_presupuesto=3911.12 WHERE codigo='OE.3.11.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.3.11.1.14 - Pintura en falso cielo raso con plancha de fibrocemento (2 manos)
  UPDATE catalogo_partidas SET precio_unitario=13.35, cantidad_presupuesto=3911.12 WHERE codigo='OE.3.11.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.3.11.2 - PINTURA DE PUERTAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.11.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.11.2.1 - PINTURA EN PUERTAS CON BARNIZ 2 MANOS
  UPDATE catalogo_partidas SET precio_unitario=65.63, cantidad_presupuesto=3592.64 WHERE codigo='OE.3.11.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.12 - VARIOS, LIMPIEZA, JARDINERIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.12' AND proyecto_id=v_proyecto_id;
  -- OE.3.12.2 - LIMPIEZA FINAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.12.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.12.2.1 - Limpieza final en ambientes y pasadizo
  UPDATE catalogo_partidas SET precio_unitario=9.26, cantidad_presupuesto=13789.99 WHERE codigo='OE.3.12.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.12.2.2 - Provision y Sembrio de Grass
  UPDATE catalogo_partidas SET precio_unitario=9.58, cantidad_presupuesto=378.81 WHERE codigo='OE.3.12.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.12.2.3 - Ornamentacion con Plantas medianas
  UPDATE catalogo_partidas SET precio_unitario=182.33, cantidad_presupuesto=90.0 WHERE codigo='OE.3.12.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.13 - VARIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.13' AND proyecto_id=v_proyecto_id;
  -- OE.3.13.1 - Tubo de aluminio Ø 1" para cortinas
  UPDATE catalogo_partidas SET precio_unitario=35.99, cantidad_presupuesto=21.98 WHERE codigo='OE.3.13.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.13.2 - Cortinas de Lino  Plastificado
  UPDATE catalogo_partidas SET precio_unitario=55.0, cantidad_presupuesto=113.94 WHERE codigo='OE.3.13.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.13.3 - Pozas de cuarto de Limpieza
  UPDATE catalogo_partidas SET precio_unitario=329.6, cantidad_presupuesto=1.4 WHERE codigo='OE.3.13.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.13.4 - Mesas tablero para ovalin
  UPDATE catalogo_partidas SET precio_unitario=464.82, cantidad_presupuesto=38.89 WHERE codigo='OE.3.13.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.13.5 - Poyo de Concreto para muebles fijos
  UPDATE catalogo_partidas SET precio_unitario=316.09, cantidad_presupuesto=227.73 WHERE codigo='OE.3.13.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.13.6 - Extintor polvo quimico seco (PQS) 12kg
  UPDATE catalogo_partidas SET precio_unitario=82.51, cantidad_presupuesto=97.0 WHERE codigo='OE.3.13.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.13.7 - Extintor (CO2) 12kg
  UPDATE catalogo_partidas SET precio_unitario=83.4, cantidad_presupuesto=55.0 WHERE codigo='OE.3.13.7' AND proyecto_id=v_proyecto_id;
  -- OE.3.13.8 - Extintor (H2O) 12kg
  UPDATE catalogo_partidas SET precio_unitario=53.4, cantidad_presupuesto=19.0 WHERE codigo='OE.3.13.8' AND proyecto_id=v_proyecto_id;
  -- OE.3.13.9 - Extintor TIPO (K) 12kg
  UPDATE catalogo_partidas SET precio_unitario=64.4, cantidad_presupuesto=3.0 WHERE codigo='OE.3.13.9' AND proyecto_id=v_proyecto_id;
  -- OE.3.13.10 - Placa recordatoria de bronce
  UPDATE catalogo_partidas SET precio_unitario=180.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.13.10' AND proyecto_id=v_proyecto_id;
  -- OE.3.13.11 - Bancas de madera y concreto para exteriores
  UPDATE catalogo_partidas SET precio_unitario=220.0, cantidad_presupuesto=4.0 WHERE codigo='OE.3.13.11' AND proyecto_id=v_proyecto_id;
  -- OE.3.13.12 - Alcorque metalico para exteriores
  UPDATE catalogo_partidas SET precio_unitario=500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.13.12' AND proyecto_id=v_proyecto_id;
  -- OE.3.13.13 - Botallantas de concreto
  UPDATE catalogo_partidas SET precio_unitario=120.0, cantidad_presupuesto=31.0 WHERE codigo='OE.3.13.13' AND proyecto_id=v_proyecto_id;
  -- OE.3.14 - SEÑAL ORIENTATIVA - INDICATIVA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.14' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.1 - EXTERIOR
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.14.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.1.1 - SE-01 NOMBRE DE HOSPITAL
  UPDATE catalogo_partidas SET precio_unitario=60.0, cantidad_presupuesto=2.0 WHERE codigo='OE.3.14.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.1.2 - SE-02 LETRERO DE INGRESO EXTERIOR DE EMERGENCIA
  UPDATE catalogo_partidas SET precio_unitario=85.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.14.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.1.3 - SE-03 LETRERO CORPOREO DE EMERGENCIA
  UPDATE catalogo_partidas SET precio_unitario=70.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.14.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.1.4 - SE-04 LETRERO PARA IDENTIFICAR PUERTAS DE ACCESO EXTERIOR
  UPDATE catalogo_partidas SET precio_unitario=90.0, cantidad_presupuesto=3.0 WHERE codigo='OE.3.14.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.1.5 - SE-05 DIRECTORIO PRINCIPAL
  UPDATE catalogo_partidas SET precio_unitario=80.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.14.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.1.6 - SE-06 TOTEM INDICATIVO
  UPDATE catalogo_partidas SET precio_unitario=250.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.14.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.1.7 - SE-07 POSTE DE ESTACIONAMIENTO
  UPDATE catalogo_partidas SET precio_unitario=95.0, cantidad_presupuesto=1.0 WHERE codigo='OE.3.14.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2 - INTERIOR
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.14.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.1 - SI-01 DIRECTORIO DE NIVEL EN HALL DE ASCENSORES (1.20 X 0.80)
  UPDATE catalogo_partidas SET precio_unitario=85.0, cantidad_presupuesto=4.0 WHERE codigo='OE.3.14.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.2 - SI-02 INDICATIVO COLGANTE DE SERVICIOS (1.20 X 0.30)
  UPDATE catalogo_partidas SET precio_unitario=70.0, cantidad_presupuesto=13.0 WHERE codigo='OE.3.14.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.3 - SI-03 INDICATIVO DE PASADIZOS (0.60 X 0.20 ) ADOSADO
  UPDATE catalogo_partidas SET precio_unitario=96.0, cantidad_presupuesto=22.0 WHERE codigo='OE.3.14.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.4 - SI-04 INDICATIVO COLGANTE (1.20 X 0.30 )
  UPDATE catalogo_partidas SET precio_unitario=45.0, cantidad_presupuesto=12.0 WHERE codigo='OE.3.14.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.5 - SI-05 IDENTIFICATIVO ADOSADO (1.20 X0.30 )
  UPDATE catalogo_partidas SET precio_unitario=60.0, cantidad_presupuesto=13.0 WHERE codigo='OE.3.14.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.6 - SI-06 IDENTIFICATIVO COLGANTE (1.20 X 0.30 )
  UPDATE catalogo_partidas SET precio_unitario=74.0, cantidad_presupuesto=17.0 WHERE codigo='OE.3.14.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.7 - SI-07 IDENTIFICATIVO ADOSADO  DE 30 X 40 CM
  UPDATE catalogo_partidas SET precio_unitario=85.0, cantidad_presupuesto=225.0 WHERE codigo='OE.3.14.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.8 - SI-08 IDENTIFICATIVO EN BANDERA (0.30 X 0.40 )
  UPDATE catalogo_partidas SET precio_unitario=84.0, cantidad_presupuesto=224.0 WHERE codigo='OE.3.14.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.9 - SI-09 IDENTIFICATIVO ADOSADO DE 60 X 20 CM
  UPDATE catalogo_partidas SET precio_unitario=70.0, cantidad_presupuesto=6.0 WHERE codigo='OE.3.14.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.10 - SI-10 IDENTIFICATIVO DE SS.HH. EN BANDERA (0.30 X 0.30 )
  UPDATE catalogo_partidas SET precio_unitario=110.0, cantidad_presupuesto=24.0 WHERE codigo='OE.3.14.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.11 - SI-11 IDENTIFICATIVO ADOSADO EN PUERTA (0.30 X 0.30 )
  UPDATE catalogo_partidas SET precio_unitario=100.0, cantidad_presupuesto=104.0 WHERE codigo='OE.3.14.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.12 - SI-12 IDENTIFICATIVO ADOSADO DE SERV. EN PUERTA DE (0.20 X 0.20)
  UPDATE catalogo_partidas SET precio_unitario=20.0, cantidad_presupuesto=267.0 WHERE codigo='OE.3.14.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.13 - SI-13 IDENTIFICATIVO ADOSADO DE (0.30 X 0.10 M)
  UPDATE catalogo_partidas SET precio_unitario=35.0, cantidad_presupuesto=36.0 WHERE codigo='OE.3.14.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.14 - SI-14 PORTANOMBRES DE PACIENTES Y CONSULTORIOS (0.20 X 0.10)
  UPDATE catalogo_partidas SET precio_unitario=42.0, cantidad_presupuesto=39.0 WHERE codigo='OE.3.14.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.15 - SI-15 INDICATIVO DE CAMA ADOSADO (0.10 X 0.10)
  UPDATE catalogo_partidas SET precio_unitario=38.0, cantidad_presupuesto=56.0 WHERE codigo='OE.3.14.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.16 - SI-16 SEÑAL REGULADORA (0.80 X 0.30)
  UPDATE catalogo_partidas SET precio_unitario=78.0, cantidad_presupuesto=6.0 WHERE codigo='OE.3.14.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.17 - SI-17 INDICATIVO DE CIRCULACION VERTICAL (0.40 X VARIABLE)
  UPDATE catalogo_partidas SET precio_unitario=45.0, cantidad_presupuesto=6.0 WHERE codigo='OE.3.14.2.17' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.2.18 - LAMINAS DE SEÑALIZACION DE EVACUAION Y SEGURIDAD
  UPDATE catalogo_partidas SET precio_unitario=25.0, cantidad_presupuesto=12.0 WHERE codigo='OE.3.14.2.18' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.3 - FRANJA HOSPITALARIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.14.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.3.1 - FRANJA IDENTIFICATIVA UPSS
  UPDATE catalogo_partidas SET precio_unitario=8.0, cantidad_presupuesto=1513.83 WHERE codigo='OE.3.14.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.14.3.2 - PINTADO LÍNEAS SEPARADORAS DE ESTACIONAMIENTO Y SEGURIDAD EN PISO
  UPDATE catalogo_partidas SET precio_unitario=12.2, cantidad_presupuesto=606.35 WHERE codigo='OE.3.14.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.15 - TRASLADO DE MATERIALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.3.15' AND proyecto_id=v_proyecto_id;
  -- OE.3.15.1 - Traslado horizontal manual de materiales para arquitectura
  UPDATE catalogo_partidas SET precio_unitario=0.15, cantidad_presupuesto=1061211.35 WHERE codigo='OE.3.15.1' AND proyecto_id=v_proyecto_id;
  -- OE.3.15.2 - Traslado vertical manual de materiales para arquitectura
  UPDATE catalogo_partidas SET precio_unitario=0.2, cantidad_presupuesto=1280845.7 WHERE codigo='OE.3.15.2' AND proyecto_id=v_proyecto_id;
  -- OE.3.15.3 - Traslado vertical con winche de materiales para arquitectura
  UPDATE catalogo_partidas SET precio_unitario=0.11, cantidad_presupuesto=2146922.4 WHERE codigo='OE.3.15.3' AND proyecto_id=v_proyecto_id;
  -- OE.3.15.4 - Traslado vertical - agregados
  UPDATE catalogo_partidas SET precio_unitario=47.94, cantidad_presupuesto=830.5 WHERE codigo='OE.3.15.4' AND proyecto_id=v_proyecto_id;
  -- OE.3.15.5 - Limpieza y traslado interno de residuos de materiales de arquitectura
  UPDATE catalogo_partidas SET precio_unitario=0.22, cantidad_presupuesto=187972.92 WHERE codigo='OE.3.15.5' AND proyecto_id=v_proyecto_id;
  -- OE.4 - INSTALACIONES SANITARIAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.1 - APARATOS SANITARIOS Y ACCESORIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1 - SUMINISTRO DE APARATOS SANITARIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.1 - LAVATORIO TIPO A-2a (CERAMICA VITRIFICADA DE 23"X18", AGUA FRIA Y CALIENTE)
  UPDATE catalogo_partidas SET precio_unitario=350.0, cantidad_presupuesto=71.0 WHERE codigo='OE.4.1.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.2 - LAVATORIO TIPO A-3 (CERAMICA VITRIFICADA DE 23"X18", AGUA FRIA)
  UPDATE catalogo_partidas SET precio_unitario=644.2, cantidad_presupuesto=104.0 WHERE codigo='OE.4.1.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.3 - LAVATORIO TIPO A-5 (CERAMICA VITRIFICADA, OVALIN, AF DE 18" DIAMETRO, CONTROL)
  UPDATE catalogo_partidas SET precio_unitario=662.73, cantidad_presupuesto=51.0 WHERE codigo='OE.4.1.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.4 - LAVATORIO TIPO B-1 (ACERO INOXIDABLE 1 POZA S/ ESCURRIDOR 18"x20", AF Y AC)
  UPDATE catalogo_partidas SET precio_unitario=348.34, cantidad_presupuesto=22.0 WHERE codigo='OE.4.1.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.5 - LAVATORIO TIPO B-9 (ACERO INOXIDABLE 1 POZA C/ ESCURRIDOR 18"x20", INC. GRIFERIA)
  UPDATE catalogo_partidas SET precio_unitario=535.8, cantidad_presupuesto=27.0 WHERE codigo='OE.4.1.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.6 - LAVADERO TIPO B-102 (ACERO INOXIDABLE DE 2 POZAS ESPECIALES DE FONDO ALTO 28"x22"x10.1/2")
  UPDATE catalogo_partidas SET precio_unitario=696.8, cantidad_presupuesto=5.0 WHERE codigo='OE.4.1.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.7 - LAVADERO TIPO B-102a (ACERO INOXIDABLE 1610x700 PARA CIRUJANO-GRIFERIA CUELLO DE GANSO ESPECIAL CON CONTROL DE RODILLA CROMADA)
  UPDATE catalogo_partidas SET precio_unitario=646.8, cantidad_presupuesto=5.0 WHERE codigo='OE.4.1.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.8 - LAVADERO TIPO B-11 (ACERO INOX. 21"X42" CON 1 POZA Y 1 ESCURRIDERO, AGUA FRIA Y CALIENTE)
  UPDATE catalogo_partidas SET precio_unitario=596.8, cantidad_presupuesto=11.0 WHERE codigo='OE.4.1.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.9 - LAVADERO TIPO B-12 (ACERO INOX. 18"X55" CON 2 POZAS Y 1 ESCURRIDERO, CON CONTROL DE CODO MUÑECA)
  UPDATE catalogo_partidas SET precio_unitario=626.8, cantidad_presupuesto=5.0 WHERE codigo='OE.4.1.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.10 - LAVADERO TIPO B-23a (ACERO INOX. 24"X44" CON DOS POZAS SIN ESCURRIDERO)
  UPDATE catalogo_partidas SET precio_unitario=616.8, cantidad_presupuesto=1.0 WHERE codigo='OE.4.1.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.11 - LAVADERO DE COCINA CON LLAVE MEZCLADORA Y TUBO FLEXIBLE
  UPDATE catalogo_partidas SET precio_unitario=280.0, cantidad_presupuesto=5.0 WHERE codigo='OE.4.1.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.12 - LAVADERO TIPO B-66 (PREFRABRICADO DE MAMPOSTERIA Y REVESTIDO CON MAYOLICA BLANCA 1 POZA Y SOLO AGUA FRIA, CON GRIFERÍA DE BRONCE)
  UPDATE catalogo_partidas SET precio_unitario=453.6, cantidad_presupuesto=2.0 WHERE codigo='OE.4.1.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.13 - LAVADERO TIPO B-67 (PREFABRICADO DE MAMPOSTERIA Y REVESTIDO CON MAYOLICA BLANCA DE 2 POZAS DE DIFERENTE NIVEL Y SÓLO AGYUA FRÍA)
  UPDATE catalogo_partidas SET precio_unitario=569.0, cantidad_presupuesto=24.0 WHERE codigo='OE.4.1.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.14 - BOTADERO CLINICO B-50 (CERAMICA VITRIFICADA CON VALVULA FLUXOMETRO, AGUA FRIA Y CALIENTE)
  UPDATE catalogo_partidas SET precio_unitario=260.0, cantidad_presupuesto=4.0 WHERE codigo='OE.4.1.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.15 - INODORO TIPO C-1 (CERAMICA VITRIFICADA CON VALVULA FLUXOMETRO)
  UPDATE catalogo_partidas SET precio_unitario=1162.9, cantidad_presupuesto=124.0 WHERE codigo='OE.4.1.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.16 - INODORO TIPO C-1a DISCAPACITADOS (CERAMICA VITRIFICADA CON VALVULA FLUXOMETRO)
  UPDATE catalogo_partidas SET precio_unitario=250.0, cantidad_presupuesto=7.0 WHERE codigo='OE.4.1.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.17 - INODORO TIPO BABY (CERAMICA VITRIFICADA CON TANQUE)
  UPDATE catalogo_partidas SET precio_unitario=667.64, cantidad_presupuesto=2.0 WHERE codigo='OE.4.1.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.18 - URINARIO TIPO C-10 (CERAMICA VITRIFICADA CON VALVULA FLUXOMETRO)
  UPDATE catalogo_partidas SET precio_unitario=512.11, cantidad_presupuesto=35.0 WHERE codigo='OE.4.1.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.19 - DUCHA TIPO F-1 (SALIDA DE AGUA FRIA Y CALIENTE)
  UPDATE catalogo_partidas SET precio_unitario=185.0, cantidad_presupuesto=50.0 WHERE codigo='OE.4.1.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.20 - DUCHA TIPO F-8 (PRELAVADO MURAL)
  UPDATE catalogo_partidas SET precio_unitario=355.41, cantidad_presupuesto=18.0 WHERE codigo='OE.4.1.1.20' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.21 - DUCHA DE EMERGENCIA
  UPDATE catalogo_partidas SET precio_unitario=120.0, cantidad_presupuesto=2.0 WHERE codigo='OE.4.1.1.21' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.1.22 - PISTOLA DE PRESION - 30 PSI
  UPDATE catalogo_partidas SET precio_unitario=250.0, cantidad_presupuesto=6.0 WHERE codigo='OE.4.1.1.22' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.2 - SUMINISTRO DE ACCESORIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.2.1 - JABONERA TIPO H-4 (CROMADA DISPENSADOR DE JABON LIQUIDO)
  UPDATE catalogo_partidas SET precio_unitario=18.9, cantidad_presupuesto=153.0 WHERE codigo='OE.4.1.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.2.2 - JABONERA TIPO H-5 (LOZA PARA DUCHA)
  UPDATE catalogo_partidas SET precio_unitario=27.49, cantidad_presupuesto=68.0 WHERE codigo='OE.4.1.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.2.3 - PORTA ROLLO TIPO H-6 (PAPEL HIGIENICO DE LOZA)
  UPDATE catalogo_partidas SET precio_unitario=30.0, cantidad_presupuesto=126.0 WHERE codigo='OE.4.1.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.2.4 - JABONERA CROMADA TIPO H-4 PARA JABÓN LÍQUIDO - TIPO BOLA
  UPDATE catalogo_partidas SET precio_unitario=105.0, cantidad_presupuesto=118.0 WHERE codigo='OE.4.1.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.2.5 - DISPENSADOR TIPO H-10 (PAPEL TOALLA)
  UPDATE catalogo_partidas SET precio_unitario=184.43, cantidad_presupuesto=118.0 WHERE codigo='OE.4.1.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.3 - INSTALACION DE APARATOS SANITARIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.3.1 - COLOCACION DE APARATOS SANITARIOS
  UPDATE catalogo_partidas SET precio_unitario=28.17, cantidad_presupuesto=581.0 WHERE codigo='OE.4.1.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.4 - INSTALACION DE ACCESORIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.1.4.1 - COLOCACION DE ACCESORIOS SANITARIOS Y GRIFERIA
  UPDATE catalogo_partidas SET precio_unitario=15.03, cantidad_presupuesto=583.0 WHERE codigo='OE.4.1.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.2 - SISTEMA DE AGUA FRIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.1 - SALIDA DE AGUA FRIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.1.1 - SALIDA AGUA FRIA CON TUBERIA DE COBRE TIPO L 1/2"
  UPDATE catalogo_partidas SET precio_unitario=230.97, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.1.2 - SALIDA AGUA FRIA CON TUBERIA DE COBRE TIPO L 3/4"
  UPDATE catalogo_partidas SET precio_unitario=170.28, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.1.3 - SALIDA AGUA FRIA CON TUBERIA DE COBRE TIPO L 1"
  UPDATE catalogo_partidas SET precio_unitario=266.89, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.1.4 - SALIDA AGUA FRIA CON TUBERIA DE COBRE TIPO L 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=312.84, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.1.5 - SALIDA AGUA FRIA DURA CON TUBERIA DE COBRE TIPO L 1/2"
  UPDATE catalogo_partidas SET precio_unitario=164.53, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.1.6 - SALIDA AGUA FRIA DURA CON TUBERIA DE COBRE TIPO L 3/4"
  UPDATE catalogo_partidas SET precio_unitario=143.75, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.1.7 - SALIDA AGUA FRIA DURA CON TUBERIA DE COBRE TIPO L 1"
  UPDATE catalogo_partidas SET precio_unitario=204.66, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.1.8 - SALIDA AGUA FRIA DURA CON TUBERIA DE COBRE TIPO L 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=242.74, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.1.9 - HABILITACION SALIDA AGUA FRIA DURA CON TUBERIA DE COBRE TIPO L 1/2"
  UPDATE catalogo_partidas SET precio_unitario=163.02, cantidad_presupuesto=402.0 WHERE codigo='OE.4.2.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.1.10 - HABILITACION SALIDA AGUA FRIA DURA CON TUBERIA DE COBRE TIPO L 3/4"
  UPDATE catalogo_partidas SET precio_unitario=140.74, cantidad_presupuesto=18.0 WHERE codigo='OE.4.2.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.1.11 - HABILITACION SALIDA AGUA FRIA DURA CON TUBERIA DE COBRE TIPO L 1"
  UPDATE catalogo_partidas SET precio_unitario=203.85, cantidad_presupuesto=37.0 WHERE codigo='OE.4.2.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.1.12 - HABILITACION SALIDA AGUA FRIA DURA CON TUBERIA DE COBRE TIPO L 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=236.23, cantidad_presupuesto=133.0 WHERE codigo='OE.4.2.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.1.13 - SOLDADURA 90-5-5
  UPDATE catalogo_partidas SET precio_unitario=8.78, cantidad_presupuesto=590.0 WHERE codigo='OE.4.2.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.1.14 - PRUEBA HIDRAULICA EN SALIDA DE AGUA FRIA
  UPDATE catalogo_partidas SET precio_unitario=6.03, cantidad_presupuesto=590.0 WHERE codigo='OE.4.2.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2 - REDES DE DISTRIBUCIÓN
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.1 - TUBERIA DE COBRE TIPO L 1/2"
  UPDATE catalogo_partidas SET precio_unitario=70.07, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.2 - TUBERIA DE COBRE TIPO L 3/4"
  UPDATE catalogo_partidas SET precio_unitario=39.47, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.3 - TUBERIA DE COBRE TIPO L 1"
  UPDATE catalogo_partidas SET precio_unitario=53.87, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.4 - TUBERIA DE COBRE TIPO L 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=84.92, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.5 - TUBERIA DE COBRE TIPO L 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=100.67, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.6 - TUBERIA DE COBRE TIPO L 2"
  UPDATE catalogo_partidas SET precio_unitario=207.97, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.7 - TUBERIA DE COBRE TIPO L 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=156.03, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.8 - TUBERIA DE COBRE TIPO L 3"
  UPDATE catalogo_partidas SET precio_unitario=253.67, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.9 - TUBERIA DE COBRE TIPO L 4"
  UPDATE catalogo_partidas SET precio_unitario=271.67, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.10 - TUBERIA DE COBRE TIPO L 6"
  UPDATE catalogo_partidas SET precio_unitario=271.67, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.11 - TUBO DE COBRE TIPO L 1/2" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=83.8, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.12 - TUBO DE COBRE TIPO L 3/4" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=53.2, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.13 - TUBO DE COBRE TIPO L 1" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=69.21, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.14 - TUBO DE COBRE TIPO L 1 1/4" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=102.76, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.15 - TUBO DE COBRE TIPO L 1 1/2" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=118.51, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.16 - TUBO DE COBRE TIPO L 2" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=231.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.17 - TUBO DE COBRE TIPO L 2 1/2" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=359.23, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.17' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.18 - TUBO DE COBRE TIPO L 3" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=560.65, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.18' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.19 - TUBO DE COBRE TIPO L 4" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=894.14, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.2.19' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.20 - HAB. E INST. TUBO DE COBRE TIPO L 1/2" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=64.0, cantidad_presupuesto=1490.11 WHERE codigo='OE.4.2.2.20' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.21 - HAB. E INST. TUBO DE COBRE TIPO L 3/4" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=33.4, cantidad_presupuesto=433.47 WHERE codigo='OE.4.2.2.21' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.22 - HAB. E INST. TUBO DE COBRE TIPO L 1" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=48.61, cantidad_presupuesto=128.02 WHERE codigo='OE.4.2.2.22' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.23 - HAB. E INST. TUBO DE COBRE TIPO L 1 1/4" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=79.66, cantidad_presupuesto=1530.99 WHERE codigo='OE.4.2.2.23' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.24 - HAB. E INST. TUBO DE COBRE TIPO L 1 1/2" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=95.41, cantidad_presupuesto=240.07 WHERE codigo='OE.4.2.2.24' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.25 - HAB. E INST. TUBO DE COBRE TIPO L 2" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=198.43, cantidad_presupuesto=205.41 WHERE codigo='OE.4.2.2.25' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.26 - HAB. E INST. TUBO DE COBRE TIPO L 2 1/2" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=326.23, cantidad_presupuesto=122.64 WHERE codigo='OE.4.2.2.26' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.27 - HAB. E INST. TUBO DE COBRE TIPO L 3" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=527.65, cantidad_presupuesto=79.27 WHERE codigo='OE.4.2.2.27' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.28 - HAB. E INST. TUBO DE COBRE TIPO L 4" AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=846.25, cantidad_presupuesto=75.48 WHERE codigo='OE.4.2.2.28' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.29 - SOLDADURA 90-5-5
  UPDATE catalogo_partidas SET precio_unitario=8.78, cantidad_presupuesto=862.0 WHERE codigo='OE.4.2.2.29' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.30 - PRUEBA HIDRAULICA EN REDES DE DISTRIBUCION
  UPDATE catalogo_partidas SET precio_unitario=3.01, cantidad_presupuesto=4305.46 WHERE codigo='OE.4.2.2.30' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.2.31 - PINTURA BASE ZINCROMATO
  UPDATE catalogo_partidas SET precio_unitario=11.14, cantidad_presupuesto=4305.46 WHERE codigo='OE.4.2.2.31' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.3 - REDES DE ALIMENTACION
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.3.1 - TRABAJOS PRELIMINARES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.2.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.3.1.1 - EXCAVACION MANUAL PARA REDES SANITARIAS  H = 0.60 M
  UPDATE catalogo_partidas SET precio_unitario=51.81, cantidad_presupuesto=20.67 WHERE codigo='OE.4.2.3.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.3.1.2 - REFINE Y NIVELACION DE ZANJAS, T. NORMAL P/ TUB. D = 1 1/2" - 3"
  UPDATE catalogo_partidas SET precio_unitario=20.72, cantidad_presupuesto=34.45 WHERE codigo='OE.4.2.3.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.3.1.3 - RELLENO COMPACTADO A MANO, CON MATERIAL PROPIO
  UPDATE catalogo_partidas SET precio_unitario=41.45, cantidad_presupuesto=26.87 WHERE codigo='OE.4.2.3.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.3.2 - TUBERIA DE COBRE TIPO L
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.2.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.3.2.1 - TUBERIA DE COBRE TIPO L 1 1/4" ( CON CAMA DE ARENA )
  UPDATE catalogo_partidas SET precio_unitario=55.92, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.3.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.3.2.2 - TUBERIA DE COBRE TIPO L 2" ( CON CAMA DE ARENA )
  UPDATE catalogo_partidas SET precio_unitario=124.28, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.3.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.3.2.3 - TUBO DE COBRE TIPO L 1 1/4" (CON CAMA DE ARENA) AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=103.51, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.3.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.3.2.4 - HABILITACION TUBO DE COBRE TIPO L 1 1/4" (CON CAMA DE ARENA) AGUA FRIA DURA
  UPDATE catalogo_partidas SET precio_unitario=84.02, cantidad_presupuesto=42.5 WHERE codigo='OE.4.2.3.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.3.2.5 - SOLDADURA 90-5-5
  UPDATE catalogo_partidas SET precio_unitario=8.78, cantidad_presupuesto=9.0 WHERE codigo='OE.4.2.3.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.3.2.6 - PRUEBA HIDRAULICA EN REDES DE DISTRIBUCION
  UPDATE catalogo_partidas SET precio_unitario=3.01, cantidad_presupuesto=42.5 WHERE codigo='OE.4.2.3.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4 - ACCESORIOS DE REDES DE AGUA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1 - ACCESORIOS DE COBRE PARA AGUA FRIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.2.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.1 - CODO DE COBRE 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=18.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.2 - CODO DE COBRE 3/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=21.53, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.3 - CODO DE COBRE 1" X 90°
  UPDATE catalogo_partidas SET precio_unitario=30.11, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.4 - CODO DE COBRE 1 1/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=33.16, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.5 - CODO DE COBRE 1 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=42.84, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.6 - CODO DE COBRE 2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=80.29, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.7 - CODO DE COBRE 2 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=100.04, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.8 - CODO DE COBRE  3" X 90º
  UPDATE catalogo_partidas SET precio_unitario=120.04, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.9 - CODO DE COBRE 4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=135.04, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.10 - CODO DE COBRE  6" X 90º
  UPDATE catalogo_partidas SET precio_unitario=150.04, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.11 - TEE DE COBRE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=21.42, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.12 - TEE DE COBRE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=27.54, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.13 - TEE DE COBRE 1"
  UPDATE catalogo_partidas SET precio_unitario=37.87, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.14 - TEE DE COBRE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=55.32, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.15 - TEE DE COBRE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=42.24, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.16 - TEE DE COBRE 2"
  UPDATE catalogo_partidas SET precio_unitario=105.65, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.17 - TEE DE COBRE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=132.24, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.18 - TEE DE COBRE 3"
  UPDATE catalogo_partidas SET precio_unitario=167.24, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.19 - TEE DE COBRE 4"
  UPDATE catalogo_partidas SET precio_unitario=217.24, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.20 - TEE DE COBRE 6"
  UPDATE catalogo_partidas SET precio_unitario=267.24, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.20' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.21 - REDUCCION DE COBRE 3/4" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=21.23, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.21' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.22 - REDUCCION DE COBRE 1" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=24.25, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.22' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.23 - REDUCCION DE COBRE 1" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=30.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.23' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.24 - REDUCCION DE COBRE 1 1/4" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=36.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.24' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.25 - REDUCCION DE COBRE 1 1/4" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=45.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.25' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.26 - REDUCCION DE COBRE 1 1/4" - 1"
  UPDATE catalogo_partidas SET precio_unitario=39.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.26' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.27 - REDUCCION DE COBRE 1 1/2" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=37.83, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.27' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.28 - REDUCCION DE COBRE 1 1/2" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=28.94, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.28' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.29 - REDUCCION DE COBRE 1 1/2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=28.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.29' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.30 - REDUCCION DE COBRE 1 1/2" - 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=44.3, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.30' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.31 - REDUCCION DE COBRE 2" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=28.08, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.31' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.32 - REDUCCION DE COBRE 2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=60.08, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.32' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.33 - REDUCCION DE COBRE 2" - 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=49.48, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.33' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.34 - REDUCCION DE COBRE 2" - 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=91.37, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.34' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.35 - REDUCCION DE COBRE 2 1/2" - 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=45.11, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.35' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.36 - REDUCCION DE COBRE 2 1/2" - 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=52.19, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.36' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.37 - REDUCCION DE COBRE 2 1/2" - 2"
  UPDATE catalogo_partidas SET precio_unitario=68.71, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.37' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.38 - REDUCCION DE COBRE 3" - 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=82.04, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.38' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.39 - REDUCCION DE COBRE 3" - 2"
  UPDATE catalogo_partidas SET precio_unitario=98.56, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.39' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.40 - REDUCCION DE COBRE 3" - 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=99.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.40' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.41 - REDUCCION DE COBRE 4" - 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=115.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.41' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.42 - REDUCCION DE COBRE 4" - 2"
  UPDATE catalogo_partidas SET precio_unitario=124.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.42' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.43 - REDUCCION DE COBRE 4" - 3"
  UPDATE catalogo_partidas SET precio_unitario=246.06, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.43' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.44 - UNION DE COBRE PARA SOLDAR 1/2"
  UPDATE catalogo_partidas SET precio_unitario=25.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.44' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.45 - UNION DE COBRE PARA SOLDAR 3/4"
  UPDATE catalogo_partidas SET precio_unitario=31.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.45' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.46 - UNION DE COBRE PARA SOLDAR 1"
  UPDATE catalogo_partidas SET precio_unitario=37.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.46' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.47 - UNION DE COBRE PARA SOLDAR 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=42.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.47' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.48 - UNION DE COBRE PARA SOLDAR 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=47.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.48' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.49 - UNION DE COBRE PARA SOLDAR 2"
  UPDATE catalogo_partidas SET precio_unitario=62.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.49' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.50 - UNION DE COBRE PARA SOLDAR 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=97.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.50' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.51 - UNION DE COBRE PARA SOLDAR 3"
  UPDATE catalogo_partidas SET precio_unitario=207.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.51' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.52 - UNION DE COBRE PARA SOLDAR 4"
  UPDATE catalogo_partidas SET precio_unitario=307.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.52' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.53 - TAPÓN DE COBRE HEMBRA 1/2"
  UPDATE catalogo_partidas SET precio_unitario=19.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.53' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.54 - TAPÓN DE COBRE HEMBRA 3/4"
  UPDATE catalogo_partidas SET precio_unitario=20.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.54' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.55 - TAPÓN DE COBRE HEMBRA 1"
  UPDATE catalogo_partidas SET precio_unitario=26.83, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.55' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.1.56 - TAPÓN DE COBRE HEMBRA 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=28.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.1.56' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2 - PIEZAS VARIAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.2.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2.1 - CAJA P/VALVULA 30X30 CM
  UPDATE catalogo_partidas SET precio_unitario=54.19, cantidad_presupuesto=158.0 WHERE codigo='OE.4.2.4.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2.2 - CAJA P/VALVULA 35X35 CM
  UPDATE catalogo_partidas SET precio_unitario=68.35, cantidad_presupuesto=148.0 WHERE codigo='OE.4.2.4.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2.3 - CAJA P/VALVULA PRINCIPAL 40X60 CM
  UPDATE catalogo_partidas SET precio_unitario=84.03, cantidad_presupuesto=1.0 WHERE codigo='OE.4.2.4.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2.4 - COLGADOR PARA 1 TUBERÍA
  UPDATE catalogo_partidas SET precio_unitario=25.96, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.4.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2.5 - COLGADOR PARA 2 TUBERÍA
  UPDATE catalogo_partidas SET precio_unitario=46.09, cantidad_presupuesto=78.0 WHERE codigo='OE.4.2.4.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2.6 - COLGADOR MULTIPLE DE TUBERÍAS HORIZONTALES
  UPDATE catalogo_partidas SET precio_unitario=40.02, cantidad_presupuesto=299.0 WHERE codigo='OE.4.2.4.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2.7 - JUNTA DE EXPANSIÓN SISMICA DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=57.47, cantidad_presupuesto=3.0 WHERE codigo='OE.4.2.4.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2.8 - JUNTA DE EXPANSIÓN SISMICA DE 1.1/4"
  UPDATE catalogo_partidas SET precio_unitario=60.47, cantidad_presupuesto=4.0 WHERE codigo='OE.4.2.4.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2.9 - JUNTA DE EXPANSIÓN SISMICA DE 1.1/2"
  UPDATE catalogo_partidas SET precio_unitario=62.47, cantidad_presupuesto=4.0 WHERE codigo='OE.4.2.4.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2.10 - JUNTA DE EXPANSIÓN SISMICA DE 3"
  UPDATE catalogo_partidas SET precio_unitario=67.47, cantidad_presupuesto=5.0 WHERE codigo='OE.4.2.4.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2.11 - JUNTA DE EXPANSIÓN SISMICA DE 4"
  UPDATE catalogo_partidas SET precio_unitario=70.47, cantidad_presupuesto=3.0 WHERE codigo='OE.4.2.4.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2.12 - COLGADOR TIPO GOTA 1/2"
  UPDATE catalogo_partidas SET precio_unitario=42.91, cantidad_presupuesto=180.0 WHERE codigo='OE.4.2.4.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2.13 - COLGADOR TIPO GOTA 3/4"
  UPDATE catalogo_partidas SET precio_unitario=45.91, cantidad_presupuesto=90.0 WHERE codigo='OE.4.2.4.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2.14 - COLGADOR TIPO GOTA 1"
  UPDATE catalogo_partidas SET precio_unitario=46.91, cantidad_presupuesto=20.0 WHERE codigo='OE.4.2.4.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2.15 - COLGADOR TIPO GOTA 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=48.91, cantidad_presupuesto=280.0 WHERE codigo='OE.4.2.4.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2.16 - COLGADOR TIPO GOTA 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=49.91, cantidad_presupuesto=20.0 WHERE codigo='OE.4.2.4.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.2.17 - COLGADOR TIPO GOTA 2"
  UPDATE catalogo_partidas SET precio_unitario=51.21, cantidad_presupuesto=30.0 WHERE codigo='OE.4.2.4.2.17' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3 - HABILITACION E INST. ACCESORIOS DE COBRE PARA AGUA FRÍA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.2.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.1 - INST. CODO DE COBRE 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=10.56, cantidad_presupuesto=1793.0 WHERE codigo='OE.4.2.4.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.2 - INST. CODO DE COBRE 3/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=13.16, cantidad_presupuesto=339.0 WHERE codigo='OE.4.2.4.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.3 - INST. CODO DE COBRE 1" X 90°
  UPDATE catalogo_partidas SET precio_unitario=21.74, cantidad_presupuesto=85.0 WHERE codigo='OE.4.2.4.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.4 - INST. CODO DE COBRE 1 1/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=24.79, cantidad_presupuesto=1155.0 WHERE codigo='OE.4.2.4.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.5 - INST. CODO DE COBRE 1 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=34.47, cantidad_presupuesto=49.0 WHERE codigo='OE.4.2.4.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.6 - INST. CODO DE COBRE 2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=71.92, cantidad_presupuesto=64.0 WHERE codigo='OE.4.2.4.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.7 - INST. CODO DE COBRE 2 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=91.67, cantidad_presupuesto=30.0 WHERE codigo='OE.4.2.4.3.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.8 - INST. CODO DE COBRE 3" X 90°
  UPDATE catalogo_partidas SET precio_unitario=111.67, cantidad_presupuesto=17.0 WHERE codigo='OE.4.2.4.3.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.9 - INST. CODO DE COBRE 4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=126.67, cantidad_presupuesto=6.0 WHERE codigo='OE.4.2.4.3.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.10 - INST. TEE DE COBRE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=12.02, cantidad_presupuesto=443.0 WHERE codigo='OE.4.2.4.3.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.11 - INST. TEE DE COBRE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=18.14, cantidad_presupuesto=87.0 WHERE codigo='OE.4.2.4.3.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.12 - INST. TEE DE COBRE 1"
  UPDATE catalogo_partidas SET precio_unitario=28.47, cantidad_presupuesto=54.0 WHERE codigo='OE.4.2.4.3.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.13 - INST. TEE DE COBRE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=45.92, cantidad_presupuesto=424.0 WHERE codigo='OE.4.2.4.3.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.14 - INST. TEE DE COBRE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=32.84, cantidad_presupuesto=63.0 WHERE codigo='OE.4.2.4.3.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.15 - INST. TEE DE COBRE 2"
  UPDATE catalogo_partidas SET precio_unitario=96.25, cantidad_presupuesto=58.0 WHERE codigo='OE.4.2.4.3.15' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.16 - INST. TEE DE COBRE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=122.84, cantidad_presupuesto=25.0 WHERE codigo='OE.4.2.4.3.16' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.17 - INST. TEE DE COBRE 3"
  UPDATE catalogo_partidas SET precio_unitario=157.84, cantidad_presupuesto=14.0 WHERE codigo='OE.4.2.4.3.17' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.18 - INST. TEE DE COBRE 4"
  UPDATE catalogo_partidas SET precio_unitario=207.84, cantidad_presupuesto=11.0 WHERE codigo='OE.4.2.4.3.18' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.19 - INST. REDUCCION DE COBRE 3/4" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=13.47, cantidad_presupuesto=142.0 WHERE codigo='OE.4.2.4.3.19' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.20 - INST. REDUCCION DE COBRE 1" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=16.49, cantidad_presupuesto=14.0 WHERE codigo='OE.4.2.4.3.20' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.21 - INST. REDUCCION DE COBRE 1" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=22.67, cantidad_presupuesto=18.0 WHERE codigo='OE.4.2.4.3.21' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.22 - INST. REDUCCION DE COBRE 1 1/4" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=28.67, cantidad_presupuesto=258.0 WHERE codigo='OE.4.2.4.3.22' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.23 - INST. REDUCCION DE COBRE 1 1/4" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=37.67, cantidad_presupuesto=44.0 WHERE codigo='OE.4.2.4.3.23' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.24 - INST. REDUCCION DE COBRE 1 1/4" - 1"
  UPDATE catalogo_partidas SET precio_unitario=31.67, cantidad_presupuesto=44.0 WHERE codigo='OE.4.2.4.3.24' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.25 - INST. REDUCCION DE COBRE 1 1/2" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=30.07, cantidad_presupuesto=13.0 WHERE codigo='OE.4.2.4.3.25' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.26 - INST. REDUCCION DE COBRE 1 1/2" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=21.18, cantidad_presupuesto=14.0 WHERE codigo='OE.4.2.4.3.26' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.27 - INST. REDUCCION DE COBRE 1 1/2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=20.67, cantidad_presupuesto=4.0 WHERE codigo='OE.4.2.4.3.27' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.28 - INST. REDUCCION DE COBRE 1 1/2" - 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=36.54, cantidad_presupuesto=73.0 WHERE codigo='OE.4.2.4.3.28' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.29 - INST. REDUCCION DE COBRE 2" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=20.32, cantidad_presupuesto=10.0 WHERE codigo='OE.4.2.4.3.29' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.30 - INST. REDUCCION DE COBRE 2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=38.67, cantidad_presupuesto=3.0 WHERE codigo='OE.4.2.4.3.30' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.31 - INST REDUCCION DE COBRE 2" - 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=41.72, cantidad_presupuesto=39.0 WHERE codigo='OE.4.2.4.3.31' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.32 - INST. REDUCCION DE COBRE 2" - 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=48.56, cantidad_presupuesto=25.0 WHERE codigo='OE.4.2.4.3.32' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.33 - INST. REDUCCION DE COBRE 2 1/2" - 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=37.35, cantidad_presupuesto=21.0 WHERE codigo='OE.4.2.4.3.33' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.34 - INST. REDUCCION DE COBRE 2 1/2" - 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=44.43, cantidad_presupuesto=4.0 WHERE codigo='OE.4.2.4.3.34' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.35 - INST .REDUCCION DE COBRE 2 1/2" - 2"
  UPDATE catalogo_partidas SET precio_unitario=60.95, cantidad_presupuesto=11.0 WHERE codigo='OE.4.2.4.3.35' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.36 - INST. REDUCCION DE COBRE 3" - 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=74.28, cantidad_presupuesto=9.0 WHERE codigo='OE.4.2.4.3.36' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.37 - INST .REDUCCION DE COBRE 3" - 2"
  UPDATE catalogo_partidas SET precio_unitario=90.8, cantidad_presupuesto=6.0 WHERE codigo='OE.4.2.4.3.37' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.38 - INST. REDUCCION DE COBRE 3" - 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=91.67, cantidad_presupuesto=9.0 WHERE codigo='OE.4.2.4.3.38' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.39 - INST. REDUCCION DE COBRE 4" - 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=107.67, cantidad_presupuesto=4.0 WHERE codigo='OE.4.2.4.3.39' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.40 - INST. REDUCCION DE COBRE 4" - 2"
  UPDATE catalogo_partidas SET precio_unitario=116.67, cantidad_presupuesto=1.0 WHERE codigo='OE.4.2.4.3.40' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.41 - INST. REDUCCION DE COBRE 4" - 3"
  UPDATE catalogo_partidas SET precio_unitario=238.3, cantidad_presupuesto=5.0 WHERE codigo='OE.4.2.4.3.41' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.42 - INST. UNION DE COBRE PARA SOLDAR 1/2"
  UPDATE catalogo_partidas SET precio_unitario=13.9, cantidad_presupuesto=40.0 WHERE codigo='OE.4.2.4.3.42' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.43 - INST. UNION DE COBRE PARA SOLDAR 3/4"
  UPDATE catalogo_partidas SET precio_unitario=19.9, cantidad_presupuesto=50.0 WHERE codigo='OE.4.2.4.3.43' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.44 - INST. UNION DE COBRE PARA SOLDAR 1"
  UPDATE catalogo_partidas SET precio_unitario=25.9, cantidad_presupuesto=50.0 WHERE codigo='OE.4.2.4.3.44' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.45 - INST. UNION DE COBRE PARA SOLDAR 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=30.9, cantidad_presupuesto=55.0 WHERE codigo='OE.4.2.4.3.45' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.46 - INST. UNION DE COBRE PARA SOLDAR 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=35.9, cantidad_presupuesto=25.0 WHERE codigo='OE.4.2.4.3.46' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.47 - INST. UNION DE COBRE PARA SOLDAR 2"
  UPDATE catalogo_partidas SET precio_unitario=50.9, cantidad_presupuesto=35.0 WHERE codigo='OE.4.2.4.3.47' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.48 - INST. UNION DE COBRE PARA SOLDAR 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=85.9, cantidad_presupuesto=22.0 WHERE codigo='OE.4.2.4.3.48' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.49 - INST. UNION DE COBRE PARA SOLDAR 3"
  UPDATE catalogo_partidas SET precio_unitario=195.9, cantidad_presupuesto=15.0 WHERE codigo='OE.4.2.4.3.49' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.50 - INST. UNION DE COBRE PARA SOLDAR 4"
  UPDATE catalogo_partidas SET precio_unitario=295.9, cantidad_presupuesto=15.0 WHERE codigo='OE.4.2.4.3.50' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.51 - INST. TAPÓN DE COBRE HEMBRA 1/2"
  UPDATE catalogo_partidas SET precio_unitario=7.9, cantidad_presupuesto=375.0 WHERE codigo='OE.4.2.4.3.51' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.52 - INST. TAPÓN DE COBRE HEMBRA 3/4"
  UPDATE catalogo_partidas SET precio_unitario=8.4, cantidad_presupuesto=10.0 WHERE codigo='OE.4.2.4.3.52' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.53 - INST. TAPÓN DE COBRE HEMBRA 1"
  UPDATE catalogo_partidas SET precio_unitario=14.8, cantidad_presupuesto=31.0 WHERE codigo='OE.4.2.4.3.53' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.54 - INST. TAPÓN DE COBRE HEMBRA 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=16.9, cantidad_presupuesto=129.0 WHERE codigo='OE.4.2.4.3.54' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.55 - SOLDADURA 90-5-5
  UPDATE catalogo_partidas SET precio_unitario=8.78, cantidad_presupuesto=11314.0 WHERE codigo='OE.4.2.4.3.55' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.4.3.56 - PRUEBA HIDRAULICA EN REDES DE DISTRIBUCION
  UPDATE catalogo_partidas SET precio_unitario=2.01, cantidad_presupuesto=5657.0 WHERE codigo='OE.4.2.4.3.56' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5 - VALVULAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.1 - VALVULA COMPUERTA DE BRONCE DE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=143.49, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.2 - VALVULA COMPUERTA DE BRONCE DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=168.63, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.3 - VALVULA COMPUERTA DE BRONCE DE 1"
  UPDATE catalogo_partidas SET precio_unitario=179.6, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.4 - VALVULA COMPUERTA DE BRONCE DE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=195.99, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.5 - VALVULA COMPUERTA DE BRONCE DE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=219.87, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.6 - VALVULA COMPUERTA DE BRONCE DE 2"
  UPDATE catalogo_partidas SET precio_unitario=417.17, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.7 - VALVULA COMPUERTA DE BRONCE DE 2 1./2"
  UPDATE catalogo_partidas SET precio_unitario=325.53, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.8 - VALVULA COMPUERTA DE BRONCE DE 3"
  UPDATE catalogo_partidas SET precio_unitario=561.53, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.9 - VALVULA COMPUERTA DE BRONCE DE 4"
  UPDATE catalogo_partidas SET precio_unitario=1114.78, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.10 - VALVULA CHECK DE BRONCE ∅ 2" (EN CAJA DE VÁLVULAS PRINCIPAL)
  UPDATE catalogo_partidas SET precio_unitario=237.06, cantidad_presupuesto=1.0 WHERE codigo='OE.4.2.5.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.11 - VALVULA CHECK DE BRONCE DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=276.5, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.12 - VALVULA CHECK DE BRONCE DE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=217.14, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.13 - VÁLVULA ESFÉRICA DE BRONCE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=94.24, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.14 - VÁLVULA ESFÉRICA DE BRONCE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=125.27, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.15 - VÁLVULA ESFÉRICA DE BRONCE 1"
  UPDATE catalogo_partidas SET precio_unitario=211.51, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.15' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.16 - VÁLVULA ESFÉRICA DE BRONCE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=205.11, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.16' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.17 - VÁLVULA ESFÉRICA DE BRONCE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=266.58, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.17' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.18 - VÁLVULA ESFÉRICA DE BRONCE 2"
  UPDATE catalogo_partidas SET precio_unitario=582.23, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.18' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.19 - VÁLVULA ESFÉRICA DE BRONCE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=1066.19, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.19' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.20 - VÁLVULA ESFÉRICA DE BRONCE 3"
  UPDATE catalogo_partidas SET precio_unitario=1478.19, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.20' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.21 - VÁLVULA ESFÉRICA DE BRONCE 4"
  UPDATE catalogo_partidas SET precio_unitario=2104.67, cantidad_presupuesto=0.0 WHERE codigo='OE.4.2.5.21' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.22 - HAB. E INST. VALVULA CHECK DE BRONCE DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=260.3, cantidad_presupuesto=10.0 WHERE codigo='OE.4.2.5.22' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.23 - HAB. E INST. VALVULA CHECK DE BRONCE DE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=200.94, cantidad_presupuesto=30.0 WHERE codigo='OE.4.2.5.23' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.24 - HAB. E INST. VÁLVULA ESFÉRICA DE BRONCE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=78.04, cantidad_presupuesto=106.0 WHERE codigo='OE.4.2.5.24' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.25 - HAB. E INST. VÁLVULA ESFÉRICA DE BRONCE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=109.07, cantidad_presupuesto=52.0 WHERE codigo='OE.4.2.5.25' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.26 - HAB. E INST. VÁLVULA ESFÉRICA DE BRONCE 1"
  UPDATE catalogo_partidas SET precio_unitario=195.31, cantidad_presupuesto=4.0 WHERE codigo='OE.4.2.5.26' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.27 - HAB. E INST. VÁLVULA ESFÉRICA DE BRONCE 1 1/4""
  UPDATE catalogo_partidas SET precio_unitario=188.91, cantidad_presupuesto=122.0 WHERE codigo='OE.4.2.5.27' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.28 - HAB. E INST.  VÁLVULA ESFÉRICA DE BRONCE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=250.38, cantidad_presupuesto=7.0 WHERE codigo='OE.4.2.5.28' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.29 - HAB. E INST. VÁLVULA ESFÉRICA DE BRONCE 2"
  UPDATE catalogo_partidas SET precio_unitario=566.03, cantidad_presupuesto=10.0 WHERE codigo='OE.4.2.5.29' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.30 - HAB. E INST. VÁLVULA ESFÉRICA DE BRONCE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=1049.99, cantidad_presupuesto=2.0 WHERE codigo='OE.4.2.5.30' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.31 - HAB. E INST. VÁLVULA ESFÉRICA DE BRONCE 3"
  UPDATE catalogo_partidas SET precio_unitario=1461.99, cantidad_presupuesto=2.0 WHERE codigo='OE.4.2.5.31' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.32 - HAB. E INST. VÁLVULA ESFÉRICA DE BRONCE 4"
  UPDATE catalogo_partidas SET precio_unitario=2088.47, cantidad_presupuesto=3.0 WHERE codigo='OE.4.2.5.32' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.5.33 - SOLDADURA 90-5-5
  UPDATE catalogo_partidas SET precio_unitario=8.78, cantidad_presupuesto=348.0 WHERE codigo='OE.4.2.5.33' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.6 - ALMACENAMIENTO DE AGUA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.6.1 - CUARTO DE BOMBAS - A F
  UPDATE catalogo_partidas SET precio_unitario=61084.42, cantidad_presupuesto=1.0 WHERE codigo='OE.4.2.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.7 - PRUEBAS HIDRAULICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.7.1 - Prueba hidráulica de agua
  UPDATE catalogo_partidas SET precio_unitario=5.12, cantidad_presupuesto=4305.46 WHERE codigo='OE.4.2.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.8 - AISLADORES TERMICOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.8.1 - AISLADORES TERMICOS PARA TUBERIAS DE 1"
  UPDATE catalogo_partidas SET precio_unitario=19.83, cantidad_presupuesto=128.02 WHERE codigo='OE.4.2.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.8.2 - AISLADORES TERMICOS PARA TUBERIAS DE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=20.83, cantidad_presupuesto=765.5 WHERE codigo='OE.4.2.8.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.8.3 - AISLADORES TERMICOS PARA TUBERIAS DE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=22.72, cantidad_presupuesto=240.07 WHERE codigo='OE.4.2.8.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.8.4 - AISLADORES TERMICOS PARA TUBERIAS DE 2"
  UPDATE catalogo_partidas SET precio_unitario=24.72, cantidad_presupuesto=205.41 WHERE codigo='OE.4.2.8.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.8.5 - AISLADORES TERMICOS PARA TUBERIAS DE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=25.22, cantidad_presupuesto=122.64 WHERE codigo='OE.4.2.8.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.8.6 - AISLADORES TERMICOS PARA TUBERIAS DE 3"
  UPDATE catalogo_partidas SET precio_unitario=26.72, cantidad_presupuesto=79.27 WHERE codigo='OE.4.2.8.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.8.7 - AISLADORES TERMICOS PARA TUBERIAS DE 4"
  UPDATE catalogo_partidas SET precio_unitario=32.72, cantidad_presupuesto=75.48 WHERE codigo='OE.4.2.8.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.9 - PINTURA PARA TUBERIAS DE AGUA FRIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.2.9.1 - PINTURA PARA TUBERIAS DE AGUA FRIA
  UPDATE catalogo_partidas SET precio_unitario=12.89, cantidad_presupuesto=4305.46 WHERE codigo='OE.4.2.9.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.3 - SISTEMA DE AGUA CALIENTE Y RETORNO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.1 - SALIDAS DE AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.1.1 - SALIDA AGUA CALIENTE CON TUBERIA DE COBRE TIPO L 1/2"
  UPDATE catalogo_partidas SET precio_unitario=110.96, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.1.2 - SALIDA AGUA CALIENTE CON TUBERIA DE COBRE TIPO L 3/4"
  UPDATE catalogo_partidas SET precio_unitario=149.56, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.1.3 - SALIDA CON TUBERIA DE COBRE TIPO L 1/2 PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=164.53, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.1.4 - SALIDA CON TUBERIA DE COBRE TIPO L 3/4" PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=143.75, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.1.5 - HAB. E INST. SALIDA CON TUBERIA DE COBRE TIPO L 1/2 PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=134.09, cantidad_presupuesto=195.0 WHERE codigo='OE.4.3.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.1.6 - HAB. y INS. TUBERIA DE COBRE TIPO L 3/4" PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=140.74, cantidad_presupuesto=7.0 WHERE codigo='OE.4.3.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.1.7 - SOLDADURA 90-5-5
  UPDATE catalogo_partidas SET precio_unitario=8.78, cantidad_presupuesto=202.0 WHERE codigo='OE.4.3.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2 - REDES DE DISTRIBUCION DE AGUA CALIENTE  Y RETORNO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.1 - TUBERIA DE COBRE TIPO L 1/2"
  UPDATE catalogo_partidas SET precio_unitario=47.67, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.2 - TUBERIA DE COBRE TIPO L 3/4"
  UPDATE catalogo_partidas SET precio_unitario=30.67, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.3 - TUBERIA DE COBRE TIPO L 1"
  UPDATE catalogo_partidas SET precio_unitario=50.07, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.4 - TUBERIA DE COBRE TIPO L 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=64.67, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.5 - TUBERIA DE COBRE TIPO L 2"
  UPDATE catalogo_partidas SET precio_unitario=124.28, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.6 - TUBERIA DE COBRE TIPO L 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=139.67, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.7 - TUBERIA DE COBRE TIPO L 3"
  UPDATE catalogo_partidas SET precio_unitario=149.67, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.8 - TUBERIA DE COBRE TIPO L 4"
  UPDATE catalogo_partidas SET precio_unitario=159.67, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.9 - TUBO DE COBRE TIPO L 1/2" PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=86.41, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.10 - TUBO DE COBRE TIPO L 3/4" PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=53.2, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.11 - TUBO DE COBRE TIPO L 1" PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=69.21, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.12 - TUBO DE COBRE TIPO L 1 1/2" PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=118.51, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.13 - TUBO DE COBRE TIPO L 2" PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=231.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.14 - TUBO DE COBRE TIPO L 2 1/2" PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=359.23, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.15 - TUBO DE COBRE TIPO L 3" PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=560.65, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.16 - SUM. y HAB. TUBO DE COBRE TIPO L 1/2" PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=75.23, cantidad_presupuesto=2312.77 WHERE codigo='OE.4.3.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.17 - SUM. y HAB. TUBO DE COBRE TIPO L 3/4" PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=42.46, cantidad_presupuesto=784.91 WHERE codigo='OE.4.3.2.17' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.18 - SUM. y HAB. TUBO DE COBRE TIPO L 1" PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=58.22, cantidad_presupuesto=358.71 WHERE codigo='OE.4.3.2.18' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.19 - SUM y HAB. TUBO DE COBRE TIPO L 1 1/2" PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=105.02, cantidad_presupuesto=218.84 WHERE codigo='OE.4.3.2.19' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.20 - SUM. y HAB.TUBO DE COBRE TIPO L 2" PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=210.34, cantidad_presupuesto=85.55 WHERE codigo='OE.4.3.2.20' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.21 - SUM y HAB. TUBO DE COBRE TIPO L 2 1/2" PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=338.14, cantidad_presupuesto=22.08 WHERE codigo='OE.4.3.2.21' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.22 - SUM y HAB. TUBO DE COBRE TIPO L 3" PARA AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=539.56, cantidad_presupuesto=64.6 WHERE codigo='OE.4.3.2.22' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.23 - SOLDADURA 90-5-5
  UPDATE catalogo_partidas SET precio_unitario=8.78, cantidad_presupuesto=770.0 WHERE codigo='OE.4.3.2.23' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.24 - PROTECTOR AISLANTE TERMICO TUB. AGUA CALINETE
  UPDATE catalogo_partidas SET precio_unitario=32.77, cantidad_presupuesto=1450.8 WHERE codigo='OE.4.3.2.24' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.2.25 - PINTURA BASE ZINCROMATO
  UPDATE catalogo_partidas SET precio_unitario=10.24, cantidad_presupuesto=3847.46 WHERE codigo='OE.4.3.2.25' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3 - ACCESORIOS DE REDES DE AGUA CALIENTE Y RETORNO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1 - ACCESORIOS DE COBRE PARA AGUA CALIENTE Y RETORNO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.3.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.1 - CODO DE COBRE 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=18.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.2 - CODO DE COBRE 3/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=16.12, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.3 - CODO DE COBRE 1" X 90°
  UPDATE catalogo_partidas SET precio_unitario=30.11, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.4 - CODO DE COBRE 1 1/2" X 90º
  UPDATE catalogo_partidas SET precio_unitario=35.04, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.5 - CODO DE COBRE 2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=80.29, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.6 - CODO DE COBRE  2 1/2" X 90º
  UPDATE catalogo_partidas SET precio_unitario=85.04, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.7 - CODO DE COBRE 3" X 90°
  UPDATE catalogo_partidas SET precio_unitario=97.95, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.8 - CODO DE COBRE 4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=135.04, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.9 - TEE DE COBRE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=21.42, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.10 - TEE DE COBRE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=27.54, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.11 - TEE DE COBRE 1"
  UPDATE catalogo_partidas SET precio_unitario=37.87, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.12 - TEE DE COBRE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=42.24, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.13 - TEE DE COBRE 2"
  UPDATE catalogo_partidas SET precio_unitario=105.65, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.14 - TEE DE COBRE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=107.24, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.15 - TEE DE COBRE 3"
  UPDATE catalogo_partidas SET precio_unitario=167.24, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.16 - TEE DE COBRE 4"
  UPDATE catalogo_partidas SET precio_unitario=217.24, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.17 - REDUCCION DE COBRE 3/4" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=21.23, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.18 - REDUCCION DE COBRE 1" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=24.25, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.19 - REDUCCION DE COBRE 1" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=30.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.20 - REDUCCION DE COBRE 1 1/2" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=30.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.20' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.21 - REDUCCION DE COBRE 1 1/2" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=28.94, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.21' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.22 - REDUCCION DE COBRE 1 1/2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=44.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.22' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.23 - REDUCCION DE COBRE 2" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=28.08, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.23' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.24 - REDUCCION DE COBRE 2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=34.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.24' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.25 - REDUCCION DE COBRE 2" - 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=37.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.25' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.26 - REDUCCION DE COBRE 2 1/2" - 2"
  UPDATE catalogo_partidas SET precio_unitario=40.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.26' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.27 - REDUCCION DE COBRE 3" - 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=44.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.27' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.28 - REDUCCION DE COBRE 3" - 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=47.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.28' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.29 - REDUCCION DE COBRE 4" - 1"
  UPDATE catalogo_partidas SET precio_unitario=52.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.29' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.30 - REDUCCION DE COBRE 4" - 3"
  UPDATE catalogo_partidas SET precio_unitario=246.06, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.30' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.31 - UNION DE COBRE PARA SOLDAR 1/2"
  UPDATE catalogo_partidas SET precio_unitario=25.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.31' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.32 - UNION DE COBRE PARA SOLDAR 3/4"
  UPDATE catalogo_partidas SET precio_unitario=31.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.32' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.33 - UNION DE COBRE PARA SOLDAR 1"
  UPDATE catalogo_partidas SET precio_unitario=37.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.33' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.34 - UNION DE COBRE PARA SOLDAR 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=42.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.34' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.35 - UNION DE COBRE PARA SOLDAR 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=47.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.35' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.36 - UNION DE COBRE PARA SOLDAR 2"
  UPDATE catalogo_partidas SET precio_unitario=62.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.36' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.37 - UNION DE COBRE PARA SOLDAR 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=97.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.37' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.38 - UNION DE COBRE PARA SOLDAR 3"
  UPDATE catalogo_partidas SET precio_unitario=207.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.38' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.1.39 - TAPÓN DE COBRE HEMBRA 1/2"
  UPDATE catalogo_partidas SET precio_unitario=19.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.1.39' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.2 - PIEZAS VARIAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.3.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.2.1 - CAJA P/VALVULA 30X30 CM
  UPDATE catalogo_partidas SET precio_unitario=54.19, cantidad_presupuesto=211.0 WHERE codigo='OE.4.3.3.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.2.2 - CAJA P/ VALVULA 35 X 35 CM
  UPDATE catalogo_partidas SET precio_unitario=54.19, cantidad_presupuesto=7.0 WHERE codigo='OE.4.3.3.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.2.3 - COLGADOR PARA 1 TUBERÍA
  UPDATE catalogo_partidas SET precio_unitario=25.96, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.3.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.2.4 - JUNTA DE EXPANSIÓN SISMICA DE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=55.47, cantidad_presupuesto=11.0 WHERE codigo='OE.4.3.3.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.2.5 - JUNTA DE EXPANSIÓN SISMICA DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=57.47, cantidad_presupuesto=8.0 WHERE codigo='OE.4.3.3.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.2.6 - JUNTA DE EXPANSIÓN SISMICA DE 1"
  UPDATE catalogo_partidas SET precio_unitario=66.47, cantidad_presupuesto=4.0 WHERE codigo='OE.4.3.3.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.2.7 - JUNTA DE EXPANSIÓN SISMICA DE 1.1/2"
  UPDATE catalogo_partidas SET precio_unitario=62.47, cantidad_presupuesto=6.0 WHERE codigo='OE.4.3.3.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.2.8 - JUNTA DE EXPANSIÓN SISMICA DE 2"
  UPDATE catalogo_partidas SET precio_unitario=68.47, cantidad_presupuesto=4.0 WHERE codigo='OE.4.3.3.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.2.9 - JUNTA DE EXPANSIÓN SISMICA DE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=65.47, cantidad_presupuesto=2.0 WHERE codigo='OE.4.3.3.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.2.10 - JUNTA DE EXPANSIÓN SISMICA DE 3"
  UPDATE catalogo_partidas SET precio_unitario=197.33, cantidad_presupuesto=2.0 WHERE codigo='OE.4.3.3.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.2.11 - COLGADOR TIPO GOTA 1/2"
  UPDATE catalogo_partidas SET precio_unitario=42.91, cantidad_presupuesto=140.0 WHERE codigo='OE.4.3.3.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.2.12 - COLGADOR TIPO GOTA 3/4"
  UPDATE catalogo_partidas SET precio_unitario=45.91, cantidad_presupuesto=70.0 WHERE codigo='OE.4.3.3.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.2.13 - COLGADOR TIPO GOTA 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=48.91, cantidad_presupuesto=20.0 WHERE codigo='OE.4.3.3.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3 - SUMINISTRO E INSTALACION ACCESORIOS DE COBRE PARA AGUA CALIENTE Y RETORNO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.3.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.1 - SUM. E INST. CODO DE COBRE 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=10.56, cantidad_presupuesto=1463.0 WHERE codigo='OE.4.3.3.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.2 - SUM. E INST. CODO DE COBRE 3/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=13.16, cantidad_presupuesto=250.0 WHERE codigo='OE.4.3.3.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.3 - SUM. E INST. CODO DE COBRE 1" X 90°
  UPDATE catalogo_partidas SET precio_unitario=21.74, cantidad_presupuesto=100.0 WHERE codigo='OE.4.3.3.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.4 - SUM. E INST. CODO DE COBRE 1 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=34.47, cantidad_presupuesto=55.0 WHERE codigo='OE.4.3.3.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.5 - SUM. E INST. CODO DE COBRE 2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=71.92, cantidad_presupuesto=32.0 WHERE codigo='OE.4.3.3.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.6 - SUM. E INST. CODO DE COBRE 2 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=91.67, cantidad_presupuesto=4.0 WHERE codigo='OE.4.3.3.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.7 - SUM. E INST. CODO DE COBRE 3" X 90°
  UPDATE catalogo_partidas SET precio_unitario=111.67, cantidad_presupuesto=6.0 WHERE codigo='OE.4.3.3.3.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.8 - SUM. E INST. TEE DE COBRE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=12.02, cantidad_presupuesto=230.0 WHERE codigo='OE.4.3.3.3.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.9 - SUM. E INST. TEE DE COBRE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=18.14, cantidad_presupuesto=130.0 WHERE codigo='OE.4.3.3.3.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.10 - SUM. E INST. TEE DE COBRE 1"
  UPDATE catalogo_partidas SET precio_unitario=28.47, cantidad_presupuesto=75.0 WHERE codigo='OE.4.3.3.3.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.11 - SUM. E INST. TEE DE COBRE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=32.84, cantidad_presupuesto=36.0 WHERE codigo='OE.4.3.3.3.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.12 - SUM. E INST. TEE DE COBRE 2"
  UPDATE catalogo_partidas SET precio_unitario=96.25, cantidad_presupuesto=20.0 WHERE codigo='OE.4.3.3.3.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.13 - SUM. E INST. TEE DE COBRE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=97.84, cantidad_presupuesto=3.0 WHERE codigo='OE.4.3.3.3.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.14 - SUM. E INST. TEE DE COBRE 3"
  UPDATE catalogo_partidas SET precio_unitario=157.84, cantidad_presupuesto=5.0 WHERE codigo='OE.4.3.3.3.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.15 - SUM. E INST. TEE DE COBRE 4"
  UPDATE catalogo_partidas SET precio_unitario=207.84, cantidad_presupuesto=4.0 WHERE codigo='OE.4.3.3.3.15' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.16 - SUM. E INST. REDUCCION DE COBRE 3/4" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=13.47, cantidad_presupuesto=170.0 WHERE codigo='OE.4.3.3.3.16' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.17 - SUM. E INST. REDUCCION DE COBRE 1" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=16.49, cantidad_presupuesto=41.0 WHERE codigo='OE.4.3.3.3.17' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.18 - SUM. E INST. REDUCCION DE COBRE 1" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=22.67, cantidad_presupuesto=70.0 WHERE codigo='OE.4.3.3.3.18' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.19 - SUM. E INST. REDUCCION DE COBRE 1 1/2" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=30.07, cantidad_presupuesto=20.0 WHERE codigo='OE.4.3.3.3.19' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.20 - SUM. E INST. REDUCCION DE COBRE 1 1/2" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=21.18, cantidad_presupuesto=13.0 WHERE codigo='OE.4.3.3.3.20' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.21 - SUM. E INST. REDUCCION DE COBRE 1 1/2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=20.67, cantidad_presupuesto=22.0 WHERE codigo='OE.4.3.3.3.21' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.22 - SUM. E INST. REDUCCION DE COBRE 2" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=20.32, cantidad_presupuesto=4.0 WHERE codigo='OE.4.3.3.3.22' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.23 - SUM. E INST. REDUCCION DE COBRE 2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=26.67, cantidad_presupuesto=9.0 WHERE codigo='OE.4.3.3.3.23' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.24 - SUM. E INST. REDUCCION DE COBRE 2" - 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=29.67, cantidad_presupuesto=11.0 WHERE codigo='OE.4.3.3.3.24' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.25 - SUM. E INST .REDUCCION DE COBRE 2 1/2" - 2"
  UPDATE catalogo_partidas SET precio_unitario=32.67, cantidad_presupuesto=10.0 WHERE codigo='OE.4.3.3.3.25' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.26 - SUM. E INST. REDUCCION DE COBRE 3" - 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=36.67, cantidad_presupuesto=3.0 WHERE codigo='OE.4.3.3.3.26' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.27 - SUM. E INST. REDUCCION DE COBRE 3" - 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=39.67, cantidad_presupuesto=4.0 WHERE codigo='OE.4.3.3.3.27' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.28 - SUM. E INST. UNION DE COBRE PARA SOLDAR 1/2"
  UPDATE catalogo_partidas SET precio_unitario=13.9, cantidad_presupuesto=25.0 WHERE codigo='OE.4.3.3.3.28' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.29 - SUM. E INST. UNION DE COBRE PARA SOLDAR 3/4"
  UPDATE catalogo_partidas SET precio_unitario=19.9, cantidad_presupuesto=40.0 WHERE codigo='OE.4.3.3.3.29' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.30 - SUM. E INST. UNION DE COBRE PARA SOLDAR 1"
  UPDATE catalogo_partidas SET precio_unitario=25.9, cantidad_presupuesto=10.0 WHERE codigo='OE.4.3.3.3.30' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.31 - SUM. E INST. UNION DE COBRE PARA SOLDAR 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=30.9, cantidad_presupuesto=8.0 WHERE codigo='OE.4.3.3.3.31' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.32 - SUM. E INST. UNION DE COBRE PARA SOLDAR 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=35.9, cantidad_presupuesto=13.0 WHERE codigo='OE.4.3.3.3.32' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.33 - SUM. E INST. UNION DE COBRE PARA SOLDAR 2"
  UPDATE catalogo_partidas SET precio_unitario=50.9, cantidad_presupuesto=5.0 WHERE codigo='OE.4.3.3.3.33' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.34 - SUM. E INST. UNION DE COBRE PARA SOLDAR 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=85.9, cantidad_presupuesto=6.0 WHERE codigo='OE.4.3.3.3.34' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.35 - SUM. E INST. UNION DE COBRE PARA SOLDAR 3"
  UPDATE catalogo_partidas SET precio_unitario=195.9, cantidad_presupuesto=3.0 WHERE codigo='OE.4.3.3.3.35' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.36 - SUM. E INST. TAPÓN DE COBRE HEMBRA 1/2"
  UPDATE catalogo_partidas SET precio_unitario=7.9, cantidad_presupuesto=195.0 WHERE codigo='OE.4.3.3.3.36' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.3.3.37 - SOLDADURA 90-5-5
  UPDATE catalogo_partidas SET precio_unitario=8.78, cantidad_presupuesto=6190.0 WHERE codigo='OE.4.3.3.3.37' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4 - VALVULAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.1 - VALVULA DE COMPUERTA BRONCE DE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=226.69, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.2 - VALVULA DE COMPUERTA BRONCE DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=101.16, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.3 - VALVULA DE COMPUERTA BRONCE DE 1"
  UPDATE catalogo_partidas SET precio_unitario=112.14, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.4 - VALVULA DE COMPUERTA BRONCE DE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=217.14, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.5 - VALVULA DE COMPUERTA BRONCE DE 2"
  UPDATE catalogo_partidas SET precio_unitario=484.14, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.6 - VALVULA DE COMPUERTA BRONCE DE 3"
  UPDATE catalogo_partidas SET precio_unitario=1026.53, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.7 - VALVULA CHECK DE BRONCE DE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=137.06, cantidad_presupuesto=27.0 WHERE codigo='OE.4.3.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.8 - VALVULA CHECK DE BRONCE DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=167.06, cantidad_presupuesto=9.0 WHERE codigo='OE.4.3.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.9 - VÁLVULA ESFÉRICA DE BRONCE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=94.24, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.10 - VÁLVULA ESFÉRICA DE BRONCE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=125.27, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.4.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.11 - VÁLVULA ESFÉRICA DE BRONCE 1"
  UPDATE catalogo_partidas SET precio_unitario=211.51, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.4.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.12 - VÁLVULA ESFÉRICA DE BRONCE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=205.11, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.4.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.13 - VÁLVULA ESFÉRICA DE BRONCE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=266.58, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.4.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.14 - VÁLVULA ESFÉRICA DE BRONCE 2"
  UPDATE catalogo_partidas SET precio_unitario=582.23, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.4.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.15 - VÁLVULA ESFÉRICA DE BRONCE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=1066.19, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.4.15' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.16 - VÁLVULA ESFÉRICA DE BRONCE 3"
  UPDATE catalogo_partidas SET precio_unitario=1478.19, cantidad_presupuesto=0.0 WHERE codigo='OE.4.3.4.16' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.17 - HAB. E INST. VÁLVULA ESFÉRICA DE BRONCE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=78.04, cantidad_presupuesto=185.0 WHERE codigo='OE.4.3.4.17' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.18 - HAB. E INST. VÁLVULA ESFÉRICA DE BRONCE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=109.07, cantidad_presupuesto=27.0 WHERE codigo='OE.4.3.4.18' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.19 - HAB. E INST. VÁLVULA ESFÉRICA DE BRONCE 1"
  UPDATE catalogo_partidas SET precio_unitario=195.31, cantidad_presupuesto=16.0 WHERE codigo='OE.4.3.4.19' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.20 - HAB. E INST. VÁLVULA ESFÉRICA DE BRONCE 1 1/4""
  UPDATE catalogo_partidas SET precio_unitario=188.91, cantidad_presupuesto=4.0 WHERE codigo='OE.4.3.4.20' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.21 - HAB. E INST.  VÁLVULA ESFÉRICA DE BRONCE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=250.38, cantidad_presupuesto=6.0 WHERE codigo='OE.4.3.4.21' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.22 - HAB. E INST. VÁLVULA ESFÉRICA DE BRONCE 2"
  UPDATE catalogo_partidas SET precio_unitario=566.03, cantidad_presupuesto=4.0 WHERE codigo='OE.4.3.4.22' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.23 - HAB. E INST. VÁLVULA ESFÉRICA DE BRONCE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=1049.99, cantidad_presupuesto=1.0 WHERE codigo='OE.4.3.4.23' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.24 - HAB. E INST. VÁLVULA ESFÉRICA DE BRONCE 3"
  UPDATE catalogo_partidas SET precio_unitario=1461.99, cantidad_presupuesto=3.0 WHERE codigo='OE.4.3.4.24' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.4.25 - SOLDADURA 90-5-5
  UPDATE catalogo_partidas SET precio_unitario=8.78, cantidad_presupuesto=246.0 WHERE codigo='OE.4.3.4.25' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.5 - INSTALACIONES ESPECIALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.5.1 - CUARTO DE BOMBAS - A C Y RETORNO
  UPDATE catalogo_partidas SET precio_unitario=46465.49, cantidad_presupuesto=1.0 WHERE codigo='OE.4.3.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.6 - PRUEBAS HIDRAULICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.6.1 - Prueba hidráulica de agua caliente
  UPDATE catalogo_partidas SET precio_unitario=3.89, cantidad_presupuesto=3806.38 WHERE codigo='OE.4.3.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.7 - AISLADORES TERMINCOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.3.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.7.1 - AISLANTE TERMICO PARA TUBERIA DE COBRE 1"
  UPDATE catalogo_partidas SET precio_unitario=19.83, cantidad_presupuesto=251.1 WHERE codigo='OE.4.3.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.7.2 - AISLANTE TERMICO PARA TUBERIA DE COBRE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=20.83, cantidad_presupuesto=218.84 WHERE codigo='OE.4.3.7.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.7.3 - AISLANTE TERMICO PARA TUBERIA DE COBRE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=22.72, cantidad_presupuesto=85.55 WHERE codigo='OE.4.3.7.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.7.4 - AISLANTE TERMICO PARA TUBERIA DE COBRE 2"
  UPDATE catalogo_partidas SET precio_unitario=24.72, cantidad_presupuesto=22.08 WHERE codigo='OE.4.3.7.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.7.5 - AISLANTE TERMICO PARA TUBERIA DE COBRE 3"
  UPDATE catalogo_partidas SET precio_unitario=26.72, cantidad_presupuesto=64.6 WHERE codigo='OE.4.3.7.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.8 - PINTURA PARA TUBERIA DE AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.3.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.3.8.1 - PINTURA PARA TUBERIAS DE AGUA CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=12.89, cantidad_presupuesto=3847.46 WHERE codigo='OE.4.3.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.4 - SISTEMA DE AGUA CONTRA INCENDIO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.1 - REDES DE ALIMENTACIÓN
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.1.1 - TUBERIA HDPE - 40 DE 6" (CON CAMA DE ARENA)
  UPDATE catalogo_partidas SET precio_unitario=405.24, cantidad_presupuesto=6.0 WHERE codigo='OE.4.4.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2 - ACCESORIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.1 - CODO SCH - 40  1" x 90º C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=84.45, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.2 - CODO SCH - 40  1 1/4" x 90º C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=82.32, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.3 - CODO SCH - 40  1 1/2" x 90º C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=94.95, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.4 - CODO SCH - 40 2" x 90º C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=140.87, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.5 - CODO SCH - 40 2 1/2" x 90º C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=155.73, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.6 - CODO SCH - 40 3" x 90º C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=168.41, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.7 - CODO SCH - 40  3 1/2" x 90º C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=179.72, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.8 - CODO SCH - 40 4" x 90º C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=278.6, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.9 - CODO SCH - 40 DE 6" X 90º C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=545.42, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.10 - CODO HDPE - 40 DE 6"
  UPDATE catalogo_partidas SET precio_unitario=1071.48, cantidad_presupuesto=6.0 WHERE codigo='OE.4.4.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.11 - TEE SCH - 40  1" C/BRIDA
  UPDATE catalogo_partidas SET precio_unitario=106.05, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.12 - TEE SCH - 40  1 1/4" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=109.12, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.13 - TEE SCH - 40  1 1/2" C/BRIDA
  UPDATE catalogo_partidas SET precio_unitario=124.86, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.14 - TEE SCH - 40  2" C/BRIDA
  UPDATE catalogo_partidas SET precio_unitario=189.14, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.15 - TEE SCH - 40  2 1/2" C/BRIDA
  UPDATE catalogo_partidas SET precio_unitario=217.9, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.16 - TEE SCH - 40  3" C/BRIDA
  UPDATE catalogo_partidas SET precio_unitario=240.12, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.17 - TEE SCH - 40  3 1/2" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=257.72, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.17' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.18 - TEE SCH - 40  4" C/BRIDA
  UPDATE catalogo_partidas SET precio_unitario=252.73, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.18' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.19 - TEE SCH - 40  6" C/BRIDA
  UPDATE catalogo_partidas SET precio_unitario=967.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.19' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.20 - TEE HDEP - 60  6"
  UPDATE catalogo_partidas SET precio_unitario=486.81, cantidad_presupuesto=1.0 WHERE codigo='OE.4.4.2.20' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.21 - CRUZ SCH - 40  1" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=129.18, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.21' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.22 - CRUZ SCH - 40  1 1/2" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=150.75, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.22' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.23 - CRUZ SCH - 40 2" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=235.39, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.23' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.24 - CRUZ SCH - 40 2 1/2" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=259.16, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.24' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.25 - CRUZ SCH - 40 3" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=290.07, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.25' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.26 - CRUZ SCH - 40  3 1/2" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=314.72, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.26' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.27 - CRUZ SCH - 40 4" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=575.71, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.27' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.28 - REDUCCION SCH - 40  1 1/4" - 1" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=119.47, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.28' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.29 - REDUCCION SCH - 40  1 1/2" - 1" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=123.35, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.29' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.30 - REDUCCION SCH - 40  2" - 1" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=123.3, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.30' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.31 - REDUCCION SCH - 40  2" - 1 1/2" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=134.51, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.31' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.32 - REDUCCION SCH - 40  2 1/2" - 1" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=121.29, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.32' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.33 - REDUCCION SCH - 40  2 1/2" - 1 1/2" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=138.81, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.33' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.34 - REDUCCION SCH - 40  2 1/2" - 2" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=159.53, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.34' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.35 - REDUCCION SCH - 40  3" - 1" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=139.55, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.35' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.36 - REDUCCION SCH - 40  3" - 1/4" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=158.44, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.36' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.37 - REDUCCION SCH - 40  3" - 1 1/2" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=161.08, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.37' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.38 - REDUCCION SCH - 40  3" - 2" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=181.09, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.38' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.39 - REDUCCION SCH - 40  3" - 2 1/2" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=187.34, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.39' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.40 - REDUCCION SCH - 40  3 1/2" - 1 " C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=173.3, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.40' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.41 - REDUCCION SCH - 40  3 1/2" - 1 1/4" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=173.81, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.41' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.42 - REDUCCION SCH - 40  3 1/2" - 1 1/2" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=181.79, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.42' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.43 - REDUCCION SCH - 40  3 1/2" - 2" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=200.59, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.43' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.44 - REDUCCION SCH - 40  3 1/2" - 2 1/2" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=199.56, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.44' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.45 - REDUCCION SCH - 40  3 1/2" - 3" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=204.3, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.45' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.46 - REDUCCION SCH - 40  4" - 1" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=216.53, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.46' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.47 - REDUCCION SCH - 40  4" - 1 1/4" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=226.86, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.47' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.48 - REDUCCION SCH - 40  4" - 1 1/2" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=221.68, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.48' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.49 - REDUCCION SCH - 40  4" - 2 1/2" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=225.57, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.49' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.50 - REDUCCION SCH - 40  4" - 3" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=259.59, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.50' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.51 - REDUCCION SCH - 40  4" - 3 1/2" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=270.06, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.51' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.52 - REDUCCION SCH - 40  6" - 3" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=261.49, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.52' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.53 - REDUCCION SCH - 40  6" - 4" C/ BRIDA
  UPDATE catalogo_partidas SET precio_unitario=368.19, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.2.53' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.54 - CODO SCH - 40 1" x 90º
  UPDATE catalogo_partidas SET precio_unitario=7.75, cantidad_presupuesto=2781.0 WHERE codigo='OE.4.4.2.54' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.55 - CODO SCH - 40 1 1/4" x 90º
  UPDATE catalogo_partidas SET precio_unitario=11.25, cantidad_presupuesto=31.0 WHERE codigo='OE.4.4.2.55' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.56 - CODO SCH - 40 1 1/2" x 90º
  UPDATE catalogo_partidas SET precio_unitario=12.64, cantidad_presupuesto=17.0 WHERE codigo='OE.4.4.2.56' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.57 - CODO SCH - 40 2" x 90º
  UPDATE catalogo_partidas SET precio_unitario=14.84, cantidad_presupuesto=2.0 WHERE codigo='OE.4.4.2.57' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.58 - CODO SCH - 40 2 1/2" x 90º
  UPDATE catalogo_partidas SET precio_unitario=64.05, cantidad_presupuesto=84.0 WHERE codigo='OE.4.4.2.58' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.59 - CODO SCH - 40 3" x 90º
  UPDATE catalogo_partidas SET precio_unitario=78.63, cantidad_presupuesto=37.0 WHERE codigo='OE.4.4.2.59' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.60 - CODO SCH - 40 4" x 90º
  UPDATE catalogo_partidas SET precio_unitario=103.31, cantidad_presupuesto=35.0 WHERE codigo='OE.4.4.2.60' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.61 - CODO SCH - 40 6" x 90º
  UPDATE catalogo_partidas SET precio_unitario=171.01, cantidad_presupuesto=16.0 WHERE codigo='OE.4.4.2.61' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.62 - TEE SCH - 40 1"
  UPDATE catalogo_partidas SET precio_unitario=11.06, cantidad_presupuesto=328.0 WHERE codigo='OE.4.4.2.62' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.63 - TEE SCH - 40 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=14.4, cantidad_presupuesto=197.0 WHERE codigo='OE.4.4.2.63' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.64 - TEE SCH - 40 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=21.57, cantidad_presupuesto=133.0 WHERE codigo='OE.4.4.2.64' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.65 - TEE SCH - 40 2"
  UPDATE catalogo_partidas SET precio_unitario=28.89, cantidad_presupuesto=82.0 WHERE codigo='OE.4.4.2.65' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.66 - TEE SCH - 40 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=87.69, cantidad_presupuesto=6.0 WHERE codigo='OE.4.4.2.66' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.67 - TEE SCH - 40 3"
  UPDATE catalogo_partidas SET precio_unitario=108.6, cantidad_presupuesto=14.0 WHERE codigo='OE.4.4.2.67' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.68 - TEE SCH - 40 4"
  UPDATE catalogo_partidas SET precio_unitario=141.25, cantidad_presupuesto=72.0 WHERE codigo='OE.4.4.2.68' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.69 - TEE SCH - 40 6"
  UPDATE catalogo_partidas SET precio_unitario=241.44, cantidad_presupuesto=8.0 WHERE codigo='OE.4.4.2.69' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.70 - CRUZ SCH - 40 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=24.64, cantidad_presupuesto=2.0 WHERE codigo='OE.4.4.2.70' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.71 - CRUZ SCH - 40 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=44.46, cantidad_presupuesto=16.0 WHERE codigo='OE.4.4.2.71' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.72 - CRUZ SCH - 40 2"
  UPDATE catalogo_partidas SET precio_unitario=92.48, cantidad_presupuesto=17.0 WHERE codigo='OE.4.4.2.72' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.73 - CRUZ SCH - 40 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=136.42, cantidad_presupuesto=2.0 WHERE codigo='OE.4.4.2.73' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.74 - CRUZ SCH - 40 3"
  UPDATE catalogo_partidas SET precio_unitario=179.53, cantidad_presupuesto=30.0 WHERE codigo='OE.4.4.2.74' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.75 - CRUZ SCH - 40 4"
  UPDATE catalogo_partidas SET precio_unitario=216.05, cantidad_presupuesto=3.0 WHERE codigo='OE.4.4.2.75' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.76 - REDUCCION SCH - 1" -  1/2"
  UPDATE catalogo_partidas SET precio_unitario=11.76, cantidad_presupuesto=1140.0 WHERE codigo='OE.4.4.2.76' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.77 - REDUCCION SCH - 40 1 1/4" - 1"
  UPDATE catalogo_partidas SET precio_unitario=14.97, cantidad_presupuesto=395.0 WHERE codigo='OE.4.4.2.77' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.78 - REDUCCION SCH - 40 1 1/2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=17.22, cantidad_presupuesto=198.0 WHERE codigo='OE.4.4.2.78' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.79 - REDUCCION SCH - 40 1 1/2" - 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=20.58, cantidad_presupuesto=72.0 WHERE codigo='OE.4.4.2.79' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.80 - REDUCCION SCH - 40 2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=20.92, cantidad_presupuesto=85.0 WHERE codigo='OE.4.4.2.80' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.81 - REDUCCION SCH - 40 2" - 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=23.85, cantidad_presupuesto=41.0 WHERE codigo='OE.4.4.2.81' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.82 - REDUCCION SCH - 40 2" - 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=24.22, cantidad_presupuesto=44.0 WHERE codigo='OE.4.4.2.82' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.83 - REDUCCION SCH - 40 2 1/2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=57.77, cantidad_presupuesto=81.0 WHERE codigo='OE.4.4.2.83' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.84 - REDUCCION SCH - 40 2 1/2" - 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=57.53, cantidad_presupuesto=38.0 WHERE codigo='OE.4.4.2.84' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.85 - REDUCCION SCH - 40 2 1/2" - 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=57.53, cantidad_presupuesto=46.0 WHERE codigo='OE.4.4.2.85' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.86 - REDUCCION SCH - 40 2 1/2" - 2"
  UPDATE catalogo_partidas SET precio_unitario=76.5, cantidad_presupuesto=42.0 WHERE codigo='OE.4.4.2.86' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.87 - REDUCCION SCH - 40 3" - 1"
  UPDATE catalogo_partidas SET precio_unitario=63.3, cantidad_presupuesto=72.0 WHERE codigo='OE.4.4.2.87' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.88 - REDUCCION SCH - 40 3" - 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=75.53, cantidad_presupuesto=42.0 WHERE codigo='OE.4.4.2.88' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.89 - REDUCCION SCH - 40 3" - 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=64.73, cantidad_presupuesto=22.0 WHERE codigo='OE.4.4.2.89' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.90 - REDUCCION SCH - 40 3" - 2"
  UPDATE catalogo_partidas SET precio_unitario=87.79, cantidad_presupuesto=6.0 WHERE codigo='OE.4.4.2.90' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.91 - REDUCCION SCH - 40 3" - 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=93.22, cantidad_presupuesto=32.0 WHERE codigo='OE.4.4.2.91' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.92 - REDUCCION SCH - 40 4" - 1"
  UPDATE catalogo_partidas SET precio_unitario=99.09, cantidad_presupuesto=21.0 WHERE codigo='OE.4.4.2.92' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.93 - REDUCCION SCH - 40 4" - 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=99.09, cantidad_presupuesto=21.0 WHERE codigo='OE.4.4.2.93' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.94 - REDUCCION SCH - 40 4" - 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=99.09, cantidad_presupuesto=14.0 WHERE codigo='OE.4.4.2.94' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.95 - REDUCCION SCH - 40 4" - 2"
  UPDATE catalogo_partidas SET precio_unitario=103.0, cantidad_presupuesto=4.0 WHERE codigo='OE.4.4.2.95' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.96 - REDUCCION SCH - 40 4" - 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=99.9, cantidad_presupuesto=47.0 WHERE codigo='OE.4.4.2.96' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.97 - REDUCCION SCH - 40 4" - 3"
  UPDATE catalogo_partidas SET precio_unitario=106.36, cantidad_presupuesto=24.0 WHERE codigo='OE.4.4.2.97' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.98 - REDUCCION SCH - 40 6" - 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=107.41, cantidad_presupuesto=1.0 WHERE codigo='OE.4.4.2.98' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.99 - REDUCCION SCH - 40 6" - 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=121.25, cantidad_presupuesto=2.0 WHERE codigo='OE.4.4.2.99' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.100 - REDUCCION SCH - 40 6" - 3"
  UPDATE catalogo_partidas SET precio_unitario=137.6, cantidad_presupuesto=2.0 WHERE codigo='OE.4.4.2.100' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.2.101 - REDUCCION SCH - 40 6" - 4"
  UPDATE catalogo_partidas SET precio_unitario=144.38, cantidad_presupuesto=6.0 WHERE codigo='OE.4.4.2.101' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.3 - SUMINISTRO E INSTALACION DE GABINETES CONTRA INCENDIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.3.1 - GABINETE CONTRA INCENDIO
  UPDATE catalogo_partidas SET precio_unitario=1155.94, cantidad_presupuesto=21.0 WHERE codigo='OE.4.4.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.4 - SUMINISTRO E INSTALACION DE JUNTA ANTISIMICA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.4.1 - SOPORTE SISMICO DE 2 VIAS
  UPDATE catalogo_partidas SET precio_unitario=83.83, cantidad_presupuesto=521.0 WHERE codigo='OE.4.4.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.4.2 - SOPORTE SISMICO DE 4 VIAS
  UPDATE catalogo_partidas SET precio_unitario=109.83, cantidad_presupuesto=40.0 WHERE codigo='OE.4.4.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.4.3 - JUNTA FLEXIBLE ANTISISMICO DE 1"
  UPDATE catalogo_partidas SET precio_unitario=522.22, cantidad_presupuesto=3.0 WHERE codigo='OE.4.4.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.4.4 - JUNTA FLEXIBLE ANTISISMICO DE 2"
  UPDATE catalogo_partidas SET precio_unitario=749.84, cantidad_presupuesto=1.0 WHERE codigo='OE.4.4.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.4.5 - JUNTA FLEXIBLE ANTISISMICO DE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=934.25, cantidad_presupuesto=3.0 WHERE codigo='OE.4.4.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.4.6 - JUNTA FLEXIBLE ANTISISMICO DE 3"
  UPDATE catalogo_partidas SET precio_unitario=1285.67, cantidad_presupuesto=1.0 WHERE codigo='OE.4.4.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.4.7 - JUNTA FLEXIBLE ANTISISMICO DE 4"
  UPDATE catalogo_partidas SET precio_unitario=1619.63, cantidad_presupuesto=21.0 WHERE codigo='OE.4.4.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.4.8 - JUNTA FLEXIBLE ANTISISMICO DE 6"
  UPDATE catalogo_partidas SET precio_unitario=2621.39, cantidad_presupuesto=1.0 WHERE codigo='OE.4.4.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.5 - LLAVES Y VALVULAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.5.1 - VALVULA DE CONTROL 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=341.47, cantidad_presupuesto=3.0 WHERE codigo='OE.4.4.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.5.2 - VALVULA DE CONTROL 3"
  UPDATE catalogo_partidas SET precio_unitario=836.95, cantidad_presupuesto=1.0 WHERE codigo='OE.4.4.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.5.3 - VALVULA DE CONTROL 4"
  UPDATE catalogo_partidas SET precio_unitario=1122.58, cantidad_presupuesto=22.0 WHERE codigo='OE.4.4.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.5.4 - VALVULA DE CONTROL 6"
  UPDATE catalogo_partidas SET precio_unitario=2830.28, cantidad_presupuesto=8.0 WHERE codigo='OE.4.4.5.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.5.5 - ESTACION CONTROLADORA DE ROCIADORES
  UPDATE catalogo_partidas SET precio_unitario=1125.0, cantidad_presupuesto=23.0 WHERE codigo='OE.4.4.5.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.5.6 - VALVULA DE PRUEBA DE Ø1"
  UPDATE catalogo_partidas SET precio_unitario=287.33, cantidad_presupuesto=24.0 WHERE codigo='OE.4.4.5.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.5.7 - VALVULA DE CONTROL DE 2"
  UPDATE catalogo_partidas SET precio_unitario=931.76, cantidad_presupuesto=1.0 WHERE codigo='OE.4.4.5.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.5.8 - VALVULA SIAMESA
  UPDATE catalogo_partidas SET precio_unitario=1292.14, cantidad_presupuesto=1.0 WHERE codigo='OE.4.4.5.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.5.9 - VALVULA ANGULAR DE BRONCE H/M 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=821.3, cantidad_presupuesto=18.0 WHERE codigo='OE.4.4.5.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.6 - INSTALACIONES ESPECIALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.6.1 - CUARTO DE BOMBAS SISTEMA CONTRA INCENDIO
  UPDATE catalogo_partidas SET precio_unitario=63230.25, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.6.2 - CILINDRO DE FM-200 DE 125LB
  UPDATE catalogo_partidas SET precio_unitario=3500.0, cantidad_presupuesto=2.0 WHERE codigo='OE.4.4.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.6.3 - CILINDRO DE FM-200 DE 40LB
  UPDATE catalogo_partidas SET precio_unitario=2200.0, cantidad_presupuesto=8.0 WHERE codigo='OE.4.4.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.6.4 - BOQUILLA DE DESCARGA SISTEMA FM-200 DE 1.1/2"
  UPDATE catalogo_partidas SET precio_unitario=39.42, cantidad_presupuesto=1.0 WHERE codigo='OE.4.4.6.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.6.5 - BOQUILLA DE DESCARGA SISTEMA FM-200 DE 1"
  UPDATE catalogo_partidas SET precio_unitario=44.42, cantidad_presupuesto=4.0 WHERE codigo='OE.4.4.6.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.6.6 - SUMINISTRO E INSTALACION DE SISTEMA DE BOMBEO CONTRA INCENDIO
  UPDATE catalogo_partidas SET precio_unitario=187081.43, cantidad_presupuesto=1.0 WHERE codigo='OE.4.4.6.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7 - REDES DE DISTRIBUCIÓN
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7.1 - TUBERIA SCH - 40 DE 1"
  UPDATE catalogo_partidas SET precio_unitario=73.39, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7.2 - TUBERIA SCH - 40 DE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=202.22, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.7.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7.3 - TUBERIA SCH - 40 DE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=73.39, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.7.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7.4 - TUBERIA SCH - 40 DE 2"
  UPDATE catalogo_partidas SET precio_unitario=74.22, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.7.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7.5 - TUBERIA SCH - 40 DE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=107.82, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.7.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7.6 - TUBERIA SCH - 40 DE 3"
  UPDATE catalogo_partidas SET precio_unitario=116.09, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.7.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7.7 - TUBERIA SCH - 40 DE 3 1/2"
  UPDATE catalogo_partidas SET precio_unitario=118.14, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.7.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7.8 - TUBERIA SCH - 40 DE 4"
  UPDATE catalogo_partidas SET precio_unitario=92.05, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.7.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7.9 - TUBERIA SCH - 40 DE 6"
  UPDATE catalogo_partidas SET precio_unitario=86.62, cantidad_presupuesto=0.0 WHERE codigo='OE.4.4.7.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7.10 - TUBERIA SCH - 40 DE 1" SIN COSTURA
  UPDATE catalogo_partidas SET precio_unitario=79.54, cantidad_presupuesto=3534.63 WHERE codigo='OE.4.4.7.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7.11 - TUBERIA SCH - 40 DE 1 1/4" SIN COSTURA
  UPDATE catalogo_partidas SET precio_unitario=84.52, cantidad_presupuesto=410.53 WHERE codigo='OE.4.4.7.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7.12 - TUBERIA SCH - 40 DE 1 1/2" SIN COSTURA
  UPDATE catalogo_partidas SET precio_unitario=96.11, cantidad_presupuesto=394.34 WHERE codigo='OE.4.4.7.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7.13 - TUBERIA SCH - 40 DE 2" SIN COSTURA
  UPDATE catalogo_partidas SET precio_unitario=115.78, cantidad_presupuesto=256.62 WHERE codigo='OE.4.4.7.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7.14 - TUBERIA SCH - 40 DE 2 1/2" SIN COSTURA
  UPDATE catalogo_partidas SET precio_unitario=175.16, cantidad_presupuesto=447.32 WHERE codigo='OE.4.4.7.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7.15 - TUBERIA SCH - 40 DE 3" SIN COSTURA
  UPDATE catalogo_partidas SET precio_unitario=211.7, cantidad_presupuesto=260.61 WHERE codigo='OE.4.4.7.15' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7.16 - TUBERIA SCH - 40 DE 4" SIN COSTURA
  UPDATE catalogo_partidas SET precio_unitario=270.09, cantidad_presupuesto=773.76 WHERE codigo='OE.4.4.7.16' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.7.17 - TUBERIA SCH - 40 DE 6" SIN COSTURA
  UPDATE catalogo_partidas SET precio_unitario=315.64, cantidad_presupuesto=81.74 WHERE codigo='OE.4.4.7.17' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.8 - PRUEBAS HIDRAULICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.8.1 - PRUEBA HIDRAULICA DEL SISTEMA A.C.I.
  UPDATE catalogo_partidas SET precio_unitario=1.18, cantidad_presupuesto=4490.24 WHERE codigo='OE.4.4.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.9 - ROCIADORES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.9.1 - Rociador PD STD SR K5.6 NPT-1/2" Blanco TY-B 68°
  UPDATE catalogo_partidas SET precio_unitario=95.63, cantidad_presupuesto=985.0 WHERE codigo='OE.4.4.9.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.9.2 - Rociador Cobertura Estandar, Respuesta estandar, k=5.6, 68°C, NPT 1/2", UPRIGHT
  UPDATE catalogo_partidas SET precio_unitario=91.63, cantidad_presupuesto=152.0 WHERE codigo='OE.4.4.9.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.10 - SOPORTES Y COLGADORES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.4.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.10.1 - COLGADOR TIPO GOTA DE 3/8"X 1"
  UPDATE catalogo_partidas SET precio_unitario=73.45, cantidad_presupuesto=600.0 WHERE codigo='OE.4.4.10.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.10.2 - COLGADOR TIPO GOTA DE 3/8"X 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=75.45, cantidad_presupuesto=115.0 WHERE codigo='OE.4.4.10.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.10.3 - COLGADOR TIPO GOTA DE 3/8"X 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=83.95, cantidad_presupuesto=70.0 WHERE codigo='OE.4.4.10.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.10.4 - COLGADOR TIPO GOTA DE 3/8"X 2"
  UPDATE catalogo_partidas SET precio_unitario=85.25, cantidad_presupuesto=70.0 WHERE codigo='OE.4.4.10.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.10.5 - COLGADOR TIPO GOTA DE 3/8"X 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=86.95, cantidad_presupuesto=90.0 WHERE codigo='OE.4.4.10.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.10.6 - COLGADOR TIPO GOTA DE 3/8"X 3"
  UPDATE catalogo_partidas SET precio_unitario=88.35, cantidad_presupuesto=70.0 WHERE codigo='OE.4.4.10.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.10.7 - COLGADOR TIPO GOTA DE 3/8"X 4"
  UPDATE catalogo_partidas SET precio_unitario=107.22, cantidad_presupuesto=170.0 WHERE codigo='OE.4.4.10.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.10.8 - COLGADOR TIPO GOTA DE 1/2"X 6"
  UPDATE catalogo_partidas SET precio_unitario=114.95, cantidad_presupuesto=20.0 WHERE codigo='OE.4.4.10.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.10.9 - ABRAZADERA U-BOLT 3/8" X 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=71.45, cantidad_presupuesto=24.0 WHERE codigo='OE.4.4.10.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.11 - IMPERMEABILIZACION DE TANQUE CISTERNA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.4.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.11.1 - LIMPIEZA DE SUPERFICIE
  UPDATE catalogo_partidas SET precio_unitario=21.13, cantidad_presupuesto=320.03 WHERE codigo='OE.4.4.11.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.4.11.2 - PINTURA EPOXICA
  UPDATE catalogo_partidas SET precio_unitario=87.62, cantidad_presupuesto=320.03 WHERE codigo='OE.4.4.11.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.5 - SISTEMA DE DRENAJE PLUVIAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1 - REDES DE RECOLECCION EN PISOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.1 - TRAZO Y REPLANTEO
  UPDATE catalogo_partidas SET precio_unitario=2.59, cantidad_presupuesto=627.0 WHERE codigo='OE.4.5.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.2 - EXCAVACION DE ZANJAS PARA REDES EXT. SANITARIAS
  UPDATE catalogo_partidas SET precio_unitario=54.11, cantidad_presupuesto=195.36 WHERE codigo='OE.4.5.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.3 - EXCAVACION DE ZANJA PARA CANAL PLUVIAL
  UPDATE catalogo_partidas SET precio_unitario=54.11, cantidad_presupuesto=86.16 WHERE codigo='OE.4.5.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.4 - REFINE Y NIVELACION DE ZANJA
  UPDATE catalogo_partidas SET precio_unitario=2.76, cantidad_presupuesto=1269.4 WHERE codigo='OE.4.5.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.5 - PREPARACIÓN Y COLOCACIÓN DE CAMA DE APOYO H=0.10m
  UPDATE catalogo_partidas SET precio_unitario=18.02, cantidad_presupuesto=423.28 WHERE codigo='OE.4.5.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.6 - RELLENO Y APISONADO CON EQUIPO Y MATERIAL PROPIO
  UPDATE catalogo_partidas SET precio_unitario=6.91, cantidad_presupuesto=170.0 WHERE codigo='OE.4.5.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.7 - ELIMINACION DE MATERIAL EXCEDENTE CON MAQUINARIA D=5 KM
  UPDATE catalogo_partidas SET precio_unitario=22.9, cantidad_presupuesto=253.11 WHERE codigo='OE.4.5.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.8 - TUBERIA PVC CP - PESADA Ø 4"
  UPDATE catalogo_partidas SET precio_unitario=42.89, cantidad_presupuesto=200.0 WHERE codigo='OE.4.5.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.9 - TUBERIA PVC CP - PESADA Ø 6"
  UPDATE catalogo_partidas SET precio_unitario=62.07, cantidad_presupuesto=150.0 WHERE codigo='OE.4.5.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.10 - TUBERIA PVC UF ISO 4435 SN2 DN 200mm
  UPDATE catalogo_partidas SET precio_unitario=44.41, cantidad_presupuesto=45.0 WHERE codigo='OE.4.5.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.11 - TUBERIA PVC UF ISO 4435 SN2 DN 300mm
  UPDATE catalogo_partidas SET precio_unitario=58.81, cantidad_presupuesto=12.0 WHERE codigo='OE.4.5.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.12 - CANALES PLUVIALES DE CONCRETO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.5.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.12.1 - ENCOFRADO Y DESENCOFRADO EN CANALES PLUVIALES
  UPDATE catalogo_partidas SET precio_unitario=53.2, cantidad_presupuesto=516.94 WHERE codigo='OE.4.5.1.12.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.12.2 - CONCRETO F'C=175KG/CM2 PARA CANALES PLUVIALES
  UPDATE catalogo_partidas SET precio_unitario=515.09, cantidad_presupuesto=0.0 WHERE codigo='OE.4.5.1.12.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.12.3 - CURADO DE CONCRETO CANALES PLUVIALES
  UPDATE catalogo_partidas SET precio_unitario=1.15, cantidad_presupuesto=373.35 WHERE codigo='OE.4.5.1.12.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.12.4 - TARRAJEO DE SUPERFICE CON IMPERMEABILIZANTE EN CANALES PLUVIALES
  UPDATE catalogo_partidas SET precio_unitario=36.8, cantidad_presupuesto=506.0 WHERE codigo='OE.4.5.1.12.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.12.5 - REJILLA EN PLATINA DE 1" x 1.1/4"@1", MARCO L 1.1/2" x 1.1/2" x 1/4" B=0.30m
  UPDATE catalogo_partidas SET precio_unitario=31.75, cantidad_presupuesto=287.19 WHERE codigo='OE.4.5.1.12.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.12.6 - CONCRETO F'C=210 KG/CM2 PARA CANALES PLUVIALES
  UPDATE catalogo_partidas SET precio_unitario=622.48, cantidad_presupuesto=37.33 WHERE codigo='OE.4.5.1.12.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.12.7 - SOLADO EN CANALES PLUVIALES
  UPDATE catalogo_partidas SET precio_unitario=49.39, cantidad_presupuesto=143.6 WHERE codigo='OE.4.5.1.12.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.13 - TRABAJOS COMPLEMENTARIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.5.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.13.1 - ACARREO DE MATERIAL EXCEDENTE D = 50 M
  UPDATE catalogo_partidas SET precio_unitario=44.47, cantidad_presupuesto=131.45 WHERE codigo='OE.4.5.1.13.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.13.2 - TUBERIA PVC UF ISO SN2 DN 250mm
  UPDATE catalogo_partidas SET precio_unitario=72.59, cantidad_presupuesto=19.0 WHERE codigo='OE.4.5.1.13.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.1.13.3 - PREPARACION Y COLOCACION DE SOBRECAMA
  UPDATE catalogo_partidas SET precio_unitario=157.45, cantidad_presupuesto=58.7 WHERE codigo='OE.4.5.1.13.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2 - REDES DE RECOLECCION EN TECHOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.1 - CANALETA RECTANGULAR DE 0.15x0.25m DE PLANCHA GALVANIZADA LISA DE 1/20"
  UPDATE catalogo_partidas SET precio_unitario=51.54, cantidad_presupuesto=450.0 WHERE codigo='OE.4.5.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.2 - MONTANTE DE DRENJE PLUVIAL TUBERÍA DE PVC CP DE 4" (01 NIVEL)
  UPDATE catalogo_partidas SET precio_unitario=72.64, cantidad_presupuesto=0.0 WHERE codigo='OE.4.5.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.3 - MONTANTE DE DRENJE PLUVIAL TUBERÍA DE PVC CP DE 4" (04 NIVELES)
  UPDATE catalogo_partidas SET precio_unitario=85.84, cantidad_presupuesto=0.0 WHERE codigo='OE.4.5.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.4 - CODO PVC CP - PESADA 4" x 90º
  UPDATE catalogo_partidas SET precio_unitario=20.45, cantidad_presupuesto=0.0 WHERE codigo='OE.4.5.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.5 - CODO PVC CP - PESADA 4" x 45°
  UPDATE catalogo_partidas SET precio_unitario=15.49, cantidad_presupuesto=24.0 WHERE codigo='OE.4.5.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.6 - TEE PVC CP - PESADA 4"
  UPDATE catalogo_partidas SET precio_unitario=40.64, cantidad_presupuesto=0.0 WHERE codigo='OE.4.5.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.7 - TEE SANITARIA PVC CP - PESADA 4"
  UPDATE catalogo_partidas SET precio_unitario=47.39, cantidad_presupuesto=0.0 WHERE codigo='OE.4.5.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.8 - YEE PVC CP - PESADA 4"
  UPDATE catalogo_partidas SET precio_unitario=20.83, cantidad_presupuesto=12.0 WHERE codigo='OE.4.5.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.9 - SUMIDERO DE BRONCE 4"
  UPDATE catalogo_partidas SET precio_unitario=49.98, cantidad_presupuesto=5.0 WHERE codigo='OE.4.5.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.10 - REGISTRO DE BRONCE 4"
  UPDATE catalogo_partidas SET precio_unitario=29.79, cantidad_presupuesto=7.0 WHERE codigo='OE.4.5.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.11 - COLUMNETAS DE PROTECCIÓN
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.5.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.11.1 - ENCOFRADO Y DESENCOFRADO DE COLUMNETAS DE PROTECCION
  UPDATE catalogo_partidas SET precio_unitario=70.41, cantidad_presupuesto=29.16 WHERE codigo='OE.4.5.2.11.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.11.2 - CONCRETO F'C=175KG/CM2 PARA COLUMNETAS DE PROTECCION
  UPDATE catalogo_partidas SET precio_unitario=469.38, cantidad_presupuesto=1.84 WHERE codigo='OE.4.5.2.11.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.11.3 - ACERO EN COLUMNETAS DE PROTECCION F'Y=4200 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=6.87, cantidad_presupuesto=162.0 WHERE codigo='OE.4.5.2.11.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.11.4 - CURADO DE CONCRETO COLUMNETAS DE PROTECCION
  UPDATE catalogo_partidas SET precio_unitario=1.15, cantidad_presupuesto=29.16 WHERE codigo='OE.4.5.2.11.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.12 - MONTANTE DE DRENJE PLUVIAL TUBERÍA DE PVC CP DE 6"
  UPDATE catalogo_partidas SET precio_unitario=55.89, cantidad_presupuesto=624.83 WHERE codigo='OE.4.5.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.13 - CODO PVC CP - PESADA 6" x 90º
  UPDATE catalogo_partidas SET precio_unitario=61.55, cantidad_presupuesto=42.0 WHERE codigo='OE.4.5.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.14 - CODO PVC CP - PESADA 6" x 45°
  UPDATE catalogo_partidas SET precio_unitario=40.87, cantidad_presupuesto=2.0 WHERE codigo='OE.4.5.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.15 - YEE PVC CP - PESADA 6" A 4"
  UPDATE catalogo_partidas SET precio_unitario=58.12, cantidad_presupuesto=13.0 WHERE codigo='OE.4.5.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.16 - CANALETA TRIANGULAR DE PLANCHA GALVANIZADA
  UPDATE catalogo_partidas SET precio_unitario=101.66, cantidad_presupuesto=136.65 WHERE codigo='OE.4.5.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.2.17 - PINTURA EPOXICA
  UPDATE catalogo_partidas SET precio_unitario=83.46, cantidad_presupuesto=331.71 WHERE codigo='OE.4.5.2.17' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.3 - PRUEBAS HIDRAULICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.3.1 - CANALETA RECTANGULAR DE 0.15x0.25m DE PLANCHA GALVANIZADA LISA DE 1/20"
  UPDATE catalogo_partidas SET precio_unitario=51.54, cantidad_presupuesto=450.0 WHERE codigo='OE.4.5.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.4 - CAMARAS DE INSPECCION
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.5.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.4.1 - CAJA DE REG. - 12" X 24" TAPA CONCRETO
  UPDATE catalogo_partidas SET precio_unitario=187.85, cantidad_presupuesto=0.0 WHERE codigo='OE.4.5.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.4.2 - CAJA DE REG. - 18" X 24" TAPA CONCRETO
  UPDATE catalogo_partidas SET precio_unitario=204.05, cantidad_presupuesto=0.0 WHERE codigo='OE.4.5.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.4.3 - CAJA DE REG. - 24" X 24" TAPA CONCRETO
  UPDATE catalogo_partidas SET precio_unitario=267.52, cantidad_presupuesto=0.0 WHERE codigo='OE.4.5.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.4.4 - BUZON DE CONCRETO D=1.20, H<3.00M
  UPDATE catalogo_partidas SET precio_unitario=5654.86, cantidad_presupuesto=2.0 WHERE codigo='OE.4.5.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.4.5 - CAJA DE REGISTRO - 12" X 24" INCL. TAPA
  UPDATE catalogo_partidas SET precio_unitario=260.88, cantidad_presupuesto=3.0 WHERE codigo='OE.4.5.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.4.6 - CAJA DE REGISTRO - 18" X 24" INCL. TAPA
  UPDATE catalogo_partidas SET precio_unitario=276.8, cantidad_presupuesto=1.0 WHERE codigo='OE.4.5.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.4.7 - CAJA DE REGISTRO - 24" X 24" INCL. TAPA
  UPDATE catalogo_partidas SET precio_unitario=307.68, cantidad_presupuesto=16.0 WHERE codigo='OE.4.5.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.4.8 - BUZON DE CONCRETO D=1.20, H>3.70M
  UPDATE catalogo_partidas SET precio_unitario=7354.96, cantidad_presupuesto=2.0 WHERE codigo='OE.4.5.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.5 - CONEXION A LA RED PUBLICA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.5.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.5.1 - CONEXIÓN A RED EXTERIOR DE DRENAJE PLUVIAL
  UPDATE catalogo_partidas SET precio_unitario=1128.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.5.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.5.2 - CONEXION A MATRIZ EXTERIOR DE DRENAJE PLUVIAL
  UPDATE catalogo_partidas SET precio_unitario=770.48, cantidad_presupuesto=10.0 WHERE codigo='OE.4.5.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.6 - PASES DE TUBERIA ENTRE PISO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.5.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.5.6.1 - HABILITACION DE PASES EN LOSA PARA  Ø"4
  UPDATE catalogo_partidas SET precio_unitario=27.06, cantidad_presupuesto=33.0 WHERE codigo='OE.4.5.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.6 - SISTEMA DE DESAGUE Y VENTILACION
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.1 - SALIDAS DE DESAGÜE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.1.1 - SALIDA DE DESAGUE PVC CP - PESADA 2"
  UPDATE catalogo_partidas SET precio_unitario=93.21, cantidad_presupuesto=608.0 WHERE codigo='OE.4.6.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.1.2 - SALIDA DE DESAGUE PVC CP - PESADA 3"
  UPDATE catalogo_partidas SET precio_unitario=133.32, cantidad_presupuesto=24.0 WHERE codigo='OE.4.6.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.1.3 - SALIDA DE DESAGUE PVC CP - PESADA 4"
  UPDATE catalogo_partidas SET precio_unitario=109.84, cantidad_presupuesto=133.0 WHERE codigo='OE.4.6.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.1.4 - SALIDA DE VENTILACION PVC CP - PESADA 2"
  UPDATE catalogo_partidas SET precio_unitario=73.78, cantidad_presupuesto=608.0 WHERE codigo='OE.4.6.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.1.5 - HABILITACION DE PASES EN LOSA PARA  Ø2"
  UPDATE catalogo_partidas SET precio_unitario=10.59, cantidad_presupuesto=774.0 WHERE codigo='OE.4.6.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.1.6 - HABILITACION DE PASES EN LOSA PARA  Ø3"
  UPDATE catalogo_partidas SET precio_unitario=13.35, cantidad_presupuesto=39.0 WHERE codigo='OE.4.6.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.1.7 - HABILITACION DE PASES EN LOSA PARA  Ø4"
  UPDATE catalogo_partidas SET precio_unitario=27.06, cantidad_presupuesto=333.0 WHERE codigo='OE.4.6.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.2 - REDES DE DERIVACION
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.2.1 - TUBERIA PVC CP - PESADA 2"
  UPDATE catalogo_partidas SET precio_unitario=34.92, cantidad_presupuesto=1935.0 WHERE codigo='OE.4.6.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.2.2 - TUBERIA PVC CP - PESADA 3"
  UPDATE catalogo_partidas SET precio_unitario=42.78, cantidad_presupuesto=120.0 WHERE codigo='OE.4.6.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.2.3 - TUBERIA PVC CP - PESADA 4"
  UPDATE catalogo_partidas SET precio_unitario=41.8, cantidad_presupuesto=1155.0 WHERE codigo='OE.4.6.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.2.4 - TUBERIA COBRE Ø 2"
  UPDATE catalogo_partidas SET precio_unitario=61.7, cantidad_presupuesto=6.0 WHERE codigo='OE.4.6.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.2.5 - TUBERIA COBRE Ø 3"
  UPDATE catalogo_partidas SET precio_unitario=66.7, cantidad_presupuesto=6.0 WHERE codigo='OE.4.6.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.2.6 - TUBERIA COBRE Ø 4"
  UPDATE catalogo_partidas SET precio_unitario=76.7, cantidad_presupuesto=160.0 WHERE codigo='OE.4.6.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.2.7 - MONTANTE DE PVC CP - PESADA Ø 4"
  UPDATE catalogo_partidas SET precio_unitario=41.24, cantidad_presupuesto=929.0 WHERE codigo='OE.4.6.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.2.8 - MONTANTE DE COBRE Ø 4"
  UPDATE catalogo_partidas SET precio_unitario=38.2, cantidad_presupuesto=92.1 WHERE codigo='OE.4.6.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.2.9 - PINTURA PARA TUBERIAS COLGADAS
  UPDATE catalogo_partidas SET precio_unitario=10.4, cantidad_presupuesto=3065.7 WHERE codigo='OE.4.6.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.2.10 - COLOCACION Y RETIRO DE PLASTICO FILM PARA PROTECCION DE TUBERIAS
  UPDATE catalogo_partidas SET precio_unitario=2.21, cantidad_presupuesto=3643.0 WHERE codigo='OE.4.6.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.2.11 - LIMPIEZA DE TUBERIAS
  UPDATE catalogo_partidas SET precio_unitario=1.6, cantidad_presupuesto=3643.0 WHERE codigo='OE.4.6.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3 - REDES COLECTORAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3.1 - TUBERIA PVC CP
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.6.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3.1.1 - TRAZO Y REPLANTEO
  UPDATE catalogo_partidas SET precio_unitario=2.59, cantidad_presupuesto=585.0 WHERE codigo='OE.4.6.3.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3.1.2 - EXCAVACIÓN DE ZANJAS PARA REDES EXT. SANITARIAS
  UPDATE catalogo_partidas SET precio_unitario=54.11, cantidad_presupuesto=421.2 WHERE codigo='OE.4.6.3.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3.1.3 - REFINE Y NIVELACION DE ZANJAS
  UPDATE catalogo_partidas SET precio_unitario=2.76, cantidad_presupuesto=351.0 WHERE codigo='OE.4.6.3.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3.1.4 - PREPARACION Y COLOCACION DE CAMA DE APOYO H=0.10M
  UPDATE catalogo_partidas SET precio_unitario=18.02, cantidad_presupuesto=45.63 WHERE codigo='OE.4.6.3.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3.1.5 - RELLENO Y APISONADO CON EQUIPO Y MATERIAL PROPIO SELECCIONADO
  UPDATE catalogo_partidas SET precio_unitario=6.91, cantidad_presupuesto=421.2 WHERE codigo='OE.4.6.3.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3.1.6 - ELIMINACION DE MATERIAL EXCEDENTE CON MAQUINARIA D=5 KM
  UPDATE catalogo_partidas SET precio_unitario=23.58, cantidad_presupuesto=159.68 WHERE codigo='OE.4.6.3.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3.1.7 - TUBERIA PVC CP - PESADA Ø 4"
  UPDATE catalogo_partidas SET precio_unitario=41.8, cantidad_presupuesto=295.0 WHERE codigo='OE.4.6.3.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3.1.8 - TUBERIA PVC CP - PESADA Ø 6"
  UPDATE catalogo_partidas SET precio_unitario=96.29, cantidad_presupuesto=180.0 WHERE codigo='OE.4.6.3.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3.1.9 - TUBERIA PVC UF ISO 4435 SN2 DN 200mm
  UPDATE catalogo_partidas SET precio_unitario=44.41, cantidad_presupuesto=117.37 WHERE codigo='OE.4.6.3.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3.1.10 - TUBERIA PVC UF ISO 4435 SN2 DN 250mm
  UPDATE catalogo_partidas SET precio_unitario=49.81, cantidad_presupuesto=20.0 WHERE codigo='OE.4.6.3.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3.1.11 - RELLENO Y COMPACTADO MANUAL CON MATERIAL PROPIO
  UPDATE catalogo_partidas SET precio_unitario=61.4, cantidad_presupuesto=109.12 WHERE codigo='OE.4.6.3.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3.1.12 - RELLENO Y COMPACTADO CON EQUIPO Y MATERIAL PROPIO
  UPDATE catalogo_partidas SET precio_unitario=47.87, cantidad_presupuesto=278.21 WHERE codigo='OE.4.6.3.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3.1.13 - ACARREO DE MATERIAL D=50 m
  UPDATE catalogo_partidas SET precio_unitario=44.47, cantidad_presupuesto=41.96 WHERE codigo='OE.4.6.3.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3.1.14 - PREPARACION Y COLOCACION DE SOBRECAMA
  UPDATE catalogo_partidas SET precio_unitario=157.45, cantidad_presupuesto=77.56 WHERE codigo='OE.4.6.3.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3.2 - PRUEBAS HIDRAULICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.6.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.3.2.1 - PRUEBA HIDRAULICA DE DESAGUE
  UPDATE catalogo_partidas SET precio_unitario=1.18, cantidad_presupuesto=4977.49 WHERE codigo='OE.4.6.3.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4 - ACCESORIOS DE REDES COLECTORAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.6.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1 - ACCESORIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.6.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.1 - CODO PVC CP - PESADA 2"X90°
  UPDATE catalogo_partidas SET precio_unitario=36.69, cantidad_presupuesto=1056.0 WHERE codigo='OE.4.6.4.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.2 - CODO PVC CP - PESADA 3"X 90°
  UPDATE catalogo_partidas SET precio_unitario=61.29, cantidad_presupuesto=69.0 WHERE codigo='OE.4.6.4.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.3 - CODO PVC CP - PESADA 4"X 90°
  UPDATE catalogo_partidas SET precio_unitario=20.45, cantidad_presupuesto=61.0 WHERE codigo='OE.4.6.4.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.4 - CODO PVC CP - PESADA 2"X 45°
  UPDATE catalogo_partidas SET precio_unitario=29.97, cantidad_presupuesto=379.0 WHERE codigo='OE.4.6.4.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.5 - CODO PVC CP - PESADA 3"X 45°
  UPDATE catalogo_partidas SET precio_unitario=29.97, cantidad_presupuesto=30.0 WHERE codigo='OE.4.6.4.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.6 - CODO PVC CP - PESADA 4"X 45°
  UPDATE catalogo_partidas SET precio_unitario=15.49, cantidad_presupuesto=330.0 WHERE codigo='OE.4.6.4.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.7 - CODO SANITARIO PVC CP - PESADA 4"X 2"
  UPDATE catalogo_partidas SET precio_unitario=40.73, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.4.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.8 - TEE PVC CP - PESADA 2"
  UPDATE catalogo_partidas SET precio_unitario=33.59, cantidad_presupuesto=231.0 WHERE codigo='OE.4.6.4.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.9 - TEE PVC CP - PESADA 3"
  UPDATE catalogo_partidas SET precio_unitario=40.78, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.4.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.10 - TEE PVC CP - PESADA 4"
  UPDATE catalogo_partidas SET precio_unitario=40.88, cantidad_presupuesto=114.0 WHERE codigo='OE.4.6.4.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.11 - TEE SANITARIA PVC CP - PESADA 2"
  UPDATE catalogo_partidas SET precio_unitario=34.89, cantidad_presupuesto=25.0 WHERE codigo='OE.4.6.4.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.12 - TEE SANITARIA PVC CP - PESADA 3"
  UPDATE catalogo_partidas SET precio_unitario=39.79, cantidad_presupuesto=30.0 WHERE codigo='OE.4.6.4.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.13 - TEE SANITARIA PVC CP - PESADA 4"
  UPDATE catalogo_partidas SET precio_unitario=47.39, cantidad_presupuesto=144.0 WHERE codigo='OE.4.6.4.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.14 - YEE PVC CP - PESADA 2"
  UPDATE catalogo_partidas SET precio_unitario=34.81, cantidad_presupuesto=237.0 WHERE codigo='OE.4.6.4.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.15 - YEE PVC CP - PESADA 3"
  UPDATE catalogo_partidas SET precio_unitario=39.3, cantidad_presupuesto=63.0 WHERE codigo='OE.4.6.4.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.16 - YEE PVC CP - PESADA 4"
  UPDATE catalogo_partidas SET precio_unitario=12.13, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.4.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.17 - YEE C/REDUCCION PVC CP - PESADA 3"-2"
  UPDATE catalogo_partidas SET precio_unitario=43.19, cantidad_presupuesto=51.0 WHERE codigo='OE.4.6.4.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.18 - YEE C/REDUCCION PVC CP - PESADA 4"-2"
  UPDATE catalogo_partidas SET precio_unitario=40.68, cantidad_presupuesto=633.0 WHERE codigo='OE.4.6.4.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.19 - YEE C/REDUCCION PVC CP - PESADA 4"-3"
  UPDATE catalogo_partidas SET precio_unitario=48.68, cantidad_presupuesto=18.0 WHERE codigo='OE.4.6.4.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.20 - REDUCCION PVC CP - PESADA 3"-2"
  UPDATE catalogo_partidas SET precio_unitario=33.39, cantidad_presupuesto=22.0 WHERE codigo='OE.4.6.4.1.20' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.21 - REDUCCION PVC CP - PESADA 4"-2"
  UPDATE catalogo_partidas SET precio_unitario=35.4, cantidad_presupuesto=106.0 WHERE codigo='OE.4.6.4.1.21' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.22 - REDUCCION PVC CP - PESADA 4"-3"
  UPDATE catalogo_partidas SET precio_unitario=36.7, cantidad_presupuesto=24.0 WHERE codigo='OE.4.6.4.1.22' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.23 - CODO DE COBRE - 2"X90°
  UPDATE catalogo_partidas SET precio_unitario=80.29, cantidad_presupuesto=12.0 WHERE codigo='OE.4.6.4.1.23' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.24 - CODO DE COBRE - 3"X90°
  UPDATE catalogo_partidas SET precio_unitario=185.29, cantidad_presupuesto=73.0 WHERE codigo='OE.4.6.4.1.24' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.25 - CODO DE COBRE - 4"X90°
  UPDATE catalogo_partidas SET precio_unitario=135.04, cantidad_presupuesto=79.0 WHERE codigo='OE.4.6.4.1.25' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.26 - CODO DE COBRE - 2"X45°
  UPDATE catalogo_partidas SET precio_unitario=75.04, cantidad_presupuesto=4.0 WHERE codigo='OE.4.6.4.1.26' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.27 - CODO DE COBRE - 3"X45°
  UPDATE catalogo_partidas SET precio_unitario=80.04, cantidad_presupuesto=4.0 WHERE codigo='OE.4.6.4.1.27' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.28 - CODO DE COBRE - 4"X45°
  UPDATE catalogo_partidas SET precio_unitario=85.04, cantidad_presupuesto=20.0 WHERE codigo='OE.4.6.4.1.28' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.29 - TEE DE COBRE DE 4"
  UPDATE catalogo_partidas SET precio_unitario=217.24, cantidad_presupuesto=40.0 WHERE codigo='OE.4.6.4.1.29' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.30 - YEE DE COBRE DE 4"
  UPDATE catalogo_partidas SET precio_unitario=20.96, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.4.1.30' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.31 - REDUCCION DE COBRE DE 4"-2"
  UPDATE catalogo_partidas SET precio_unitario=124.43, cantidad_presupuesto=8.0 WHERE codigo='OE.4.6.4.1.31' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.32 - REDUCCION DE COBRE DE 4"-3"
  UPDATE catalogo_partidas SET precio_unitario=246.06, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.4.1.32' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.33 - REDUCCION DE COBRE DE 3"-2"
  UPDATE catalogo_partidas SET precio_unitario=189.82, cantidad_presupuesto=6.0 WHERE codigo='OE.4.6.4.1.33' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.34 - COLGADOR TIPO CLEVIS DE 2"
  UPDATE catalogo_partidas SET precio_unitario=9.06, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.4.1.34' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.35 - COLGADOR TIPO CLEVIS DE 3"
  UPDATE catalogo_partidas SET precio_unitario=11.06, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.4.1.35' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.36 - COLGADOR TIPO CLEVIS DE 4"
  UPDATE catalogo_partidas SET precio_unitario=22.41, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.4.1.36' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.37 - TRAZO Y REPLANTEO PARA TUBERIAS DURANTE LA EJECUCION
  UPDATE catalogo_partidas SET precio_unitario=5.31, cantidad_presupuesto=3418.44 WHERE codigo='OE.4.6.4.1.37' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.38 - COLGADOR TIPO GOTA 2"
  UPDATE catalogo_partidas SET precio_unitario=48.23, cantidad_presupuesto=1200.0 WHERE codigo='OE.4.6.4.1.38' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.39 - COLGADOR TIPO GOTA 3"
  UPDATE catalogo_partidas SET precio_unitario=51.33, cantidad_presupuesto=50.0 WHERE codigo='OE.4.6.4.1.39' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.40 - COLGADOR TIPO GOTA 4"
  UPDATE catalogo_partidas SET precio_unitario=55.73, cantidad_presupuesto=690.0 WHERE codigo='OE.4.6.4.1.40' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.41 - REDUCCION DE COBRE SOLDABLE DE 3"-2"
  UPDATE catalogo_partidas SET precio_unitario=38.93, cantidad_presupuesto=1.0 WHERE codigo='OE.4.6.4.1.41' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.42 - YEE DE COBRE SOLDABLE DE 4" - 3"
  UPDATE catalogo_partidas SET precio_unitario=508.63, cantidad_presupuesto=2.0 WHERE codigo='OE.4.6.4.1.42' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.43 - YEE DE COBRE SOLDABLE DE 3" - 2"
  UPDATE catalogo_partidas SET precio_unitario=398.63, cantidad_presupuesto=1.0 WHERE codigo='OE.4.6.4.1.43' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.44 - YEE DE COBRE SOLDABLE  DE 4"
  UPDATE catalogo_partidas SET precio_unitario=598.63, cantidad_presupuesto=24.0 WHERE codigo='OE.4.6.4.1.44' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.45 - YEE PVC CP 4"
  UPDATE catalogo_partidas SET precio_unitario=41.6, cantidad_presupuesto=211.0 WHERE codigo='OE.4.6.4.1.45' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.46 - CODO SANITARIO PVC- PESADA 4" X2"
  UPDATE catalogo_partidas SET precio_unitario=17.0, cantidad_presupuesto=150.0 WHERE codigo='OE.4.6.4.1.46' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.47 - UNION  PVC 2"
  UPDATE catalogo_partidas SET precio_unitario=17.67, cantidad_presupuesto=590.0 WHERE codigo='OE.4.6.4.1.47' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.48 - UNION  PVC 3"
  UPDATE catalogo_partidas SET precio_unitario=18.87, cantidad_presupuesto=50.0 WHERE codigo='OE.4.6.4.1.48' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.49 - UNION  PVC 4"
  UPDATE catalogo_partidas SET precio_unitario=22.17, cantidad_presupuesto=615.0 WHERE codigo='OE.4.6.4.1.49' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.1.50 - DISIPADOR DE ENERGIA EN MONTANTES
  UPDATE catalogo_partidas SET precio_unitario=146.38, cantidad_presupuesto=177.0 WHERE codigo='OE.4.6.4.1.50' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.2 - ADITAMENTOS VARIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.6.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.2.1 - SUMIDERO DE BRONCE 2"
  UPDATE catalogo_partidas SET precio_unitario=34.19, cantidad_presupuesto=157.0 WHERE codigo='OE.4.6.4.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.2.2 - SUMIDERO DE BRONCE 3"
  UPDATE catalogo_partidas SET precio_unitario=45.14, cantidad_presupuesto=24.0 WHERE codigo='OE.4.6.4.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.2.3 - SUMIDERO DE BRONCE 4"
  UPDATE catalogo_partidas SET precio_unitario=49.98, cantidad_presupuesto=31.0 WHERE codigo='OE.4.6.4.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.2.4 - REGISTRO DE BRONCE 2"
  UPDATE catalogo_partidas SET precio_unitario=24.09, cantidad_presupuesto=46.0 WHERE codigo='OE.4.6.4.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.2.5 - REGISTRO DE BRONCE 3"
  UPDATE catalogo_partidas SET precio_unitario=27.89, cantidad_presupuesto=28.0 WHERE codigo='OE.4.6.4.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.2.6 - REGISTRO DE BRONCE 4"
  UPDATE catalogo_partidas SET precio_unitario=29.79, cantidad_presupuesto=265.0 WHERE codigo='OE.4.6.4.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.2.7 - REGISTRO DE BRONCE 6"
  UPDATE catalogo_partidas SET precio_unitario=58.19, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.4.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.2.8 - SOMBRERO DE VENTILACIÓN PVC CP - PESADA DE 2"
  UPDATE catalogo_partidas SET precio_unitario=19.72, cantidad_presupuesto=6.0 WHERE codigo='OE.4.6.4.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.2.9 - SOMBRERO DE VENTILACIÓN PVC CP - PESADA DE 3"
  UPDATE catalogo_partidas SET precio_unitario=23.01, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.4.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.2.10 - SOMBRERO DE VENTILACIÓN PVC CP - PESADA DE 4"
  UPDATE catalogo_partidas SET precio_unitario=29.42, cantidad_presupuesto=61.0 WHERE codigo='OE.4.6.4.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.2.11 - REGISTRO COLGADO DE BRONCE 2"
  UPDATE catalogo_partidas SET precio_unitario=39.29, cantidad_presupuesto=14.0 WHERE codigo='OE.4.6.4.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.2.12 - REGISTRO COLGADO DE BRONCE 3"
  UPDATE catalogo_partidas SET precio_unitario=41.29, cantidad_presupuesto=11.0 WHERE codigo='OE.4.6.4.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.4.2.13 - REGISTRO COLGADO DE BRONCE 4"
  UPDATE catalogo_partidas SET precio_unitario=43.29, cantidad_presupuesto=110.0 WHERE codigo='OE.4.6.4.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5 - CAMARAS DE INSPECCION
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.6.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.1 - PARA CAJAS DE REGISTRO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.6.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.1.1 - CAJA DE REG. ALB. - 12" X 24" TAPA CONCRETO
  UPDATE catalogo_partidas SET precio_unitario=189.56, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.5.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.1.2 - CAJA DE REG. ALB. - 18" X 24" TAPA CONCRETO
  UPDATE catalogo_partidas SET precio_unitario=206.33, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.5.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.1.3 - CAJA DE REG. ALB. - 24" X 24" TAPA CONCRETO
  UPDATE catalogo_partidas SET precio_unitario=267.52, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.5.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.1.4 - BUZON DE CONCRETO D=1.20, H<3.00M
  UPDATE catalogo_partidas SET precio_unitario=5654.86, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.5.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.1.5 - TRAMPA DE SOLIDOS
  UPDATE catalogo_partidas SET precio_unitario=1426.08, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.5.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.1.6 - TRAMPA DE GRASAS
  UPDATE catalogo_partidas SET precio_unitario=1812.88, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.5.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.1.7 - POZA DE ENFRIAMIENTO
  UPDATE catalogo_partidas SET precio_unitario=2736.4, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.5.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.1.8 - CAMARA DE CONTACTO DE CLORO
  UPDATE catalogo_partidas SET precio_unitario=3928.81, cantidad_presupuesto=0.0 WHERE codigo='OE.4.6.5.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.1.9 - CAJA DE REGISTRO - 12" X 24" INCL. TAPA
  UPDATE catalogo_partidas SET precio_unitario=185.41, cantidad_presupuesto=50.0 WHERE codigo='OE.4.6.5.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.1.10 - CAJA DE REGISTRO - 18" X 24" INCL. TAPA
  UPDATE catalogo_partidas SET precio_unitario=225.17, cantidad_presupuesto=1.0 WHERE codigo='OE.4.6.5.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.1.11 - CAJA DE REGISTRO - 24" X 24" INCL. TAPA
  UPDATE catalogo_partidas SET precio_unitario=235.49, cantidad_presupuesto=14.0 WHERE codigo='OE.4.6.5.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.2 - PARA BUZONES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.6.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.2.1 - BUZON DE CONCRETO D=1.20, H<3.00M
  UPDATE catalogo_partidas SET precio_unitario=5654.86, cantidad_presupuesto=8.0 WHERE codigo='OE.4.6.5.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.3 - OBRAS DE ARTE SANITARIAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.6.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.3.1 - TRAMPA DE SOLIDOS DE CONCRETO ARMADO
  UPDATE catalogo_partidas SET precio_unitario=4008.07, cantidad_presupuesto=1.0 WHERE codigo='OE.4.6.5.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.3.2 - TRAMPA DE GRASAS DE CONCRETO ARMADO
  UPDATE catalogo_partidas SET precio_unitario=6245.53, cantidad_presupuesto=1.0 WHERE codigo='OE.4.6.5.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.3.3 - POZA DE ENFRIAMIENTO DE CONCRETO ARMADO
  UPDATE catalogo_partidas SET precio_unitario=8039.11, cantidad_presupuesto=1.0 WHERE codigo='OE.4.6.5.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.5.3.4 - CÁMARA DE CONTACTO DE CLORO DE CONCRETO ARMADO
  UPDATE catalogo_partidas SET precio_unitario=7629.08, cantidad_presupuesto=1.0 WHERE codigo='OE.4.6.5.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.6 - CONEXION A LA RED PUBLICA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.6.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.6.1 - CONEXION A LA RED PUBLICA DE DESAGUE
  UPDATE catalogo_partidas SET precio_unitario=53.35, cantidad_presupuesto=3.0 WHERE codigo='OE.4.6.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.7 - RESTITUCION DE DAÑOS DURANTE PROCESOS CONSTRUCTIVOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.6.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.7.1 - TUBERIA PVC CP - PESADA 2"
  UPDATE catalogo_partidas SET precio_unitario=41.33, cantidad_presupuesto=211.04 WHERE codigo='OE.4.6.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.6.7.2 - TEE SANITARIA PVC CP - PESADA 4"
  UPDATE catalogo_partidas SET precio_unitario=83.48, cantidad_presupuesto=20.0 WHERE codigo='OE.4.6.7.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.7 - SISTEMA DE AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.1 - SALIDAS DE AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.1.1 - SALIDA AGUA BLANDA CON TUBERÍA DE COBRE TIPO L 1/2"
  UPDATE catalogo_partidas SET precio_unitario=288.09, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.1.2 - SALIDA AGUA BLANDA CON TUBERIA DE COBRE TIPO L 3/4"
  UPDATE catalogo_partidas SET precio_unitario=197.65, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.1.3 - SALIDA CON TUBERÍA DE COBRE TIPO L 1/2" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=164.53, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.1.4 - SALIDA CON TUBERIA DE COBRE TIPO L 3/4" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=143.75, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.1.5 - HAB. CON TUBERIA DE COBRE TIPO L 1/2" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=163.02, cantidad_presupuesto=45.0 WHERE codigo='OE.4.7.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.1.6 - HAB. CON TUBERIA DE COBRE TIPO L 3/4" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=140.74, cantidad_presupuesto=5.0 WHERE codigo='OE.4.7.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.1.7 - SOLDADURA 90-5-5
  UPDATE catalogo_partidas SET precio_unitario=8.78, cantidad_presupuesto=50.0 WHERE codigo='OE.4.7.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2 - REDES DE DISTRIBUCIÓN
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.7.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.1 - TUBERIA DE COBRE TIPO L 1/2"
  UPDATE catalogo_partidas SET precio_unitario=66.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.2 - TUBERIA DE COBRE TIPO L 3/4"
  UPDATE catalogo_partidas SET precio_unitario=30.67, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.3 - TUBERIA DE COBRE TIPO L 1"
  UPDATE catalogo_partidas SET precio_unitario=50.07, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.5 - TUBERIA DE COBRE TIPO L 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=64.67, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.6 - TUBERIA DE COBRE TIPO L 2"
  UPDATE catalogo_partidas SET precio_unitario=124.28, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.7 - TUBERIA DE COBRE TIPO L 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=95.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.8 - TUBERIA DE COBRE TIPO L 3"
  UPDATE catalogo_partidas SET precio_unitario=149.67, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.9 - TUBERIA DE COBRE TIPO L 4"
  UPDATE catalogo_partidas SET precio_unitario=159.67, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.10 - TUBO DE COBRE TIPO L 1/2" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=86.41, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.11 - TUBO DE COBRE TIPO L 3/4" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=53.2, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.12 - TUBO DE COBRE TIPO L 1" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=69.21, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.13 - TUBO DE COBRE TIPO L 1 1/2" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=118.51, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.14 - TUBO DE COBRE TIPO L 2" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=231.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.15 - TUBO DE COBRE TIPO L 2 1/2" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=359.23, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.16 - TUBO DE COBRE TIPO L 3" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=560.65, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.17 - SUM. TUBO DE COBRE TIPO L 1/2" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=77.59, cantidad_presupuesto=510.0 WHERE codigo='OE.4.7.2.17' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.18 - SUM. TUBO DE COBRE TIPO L 3/4" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=46.99, cantidad_presupuesto=227.0 WHERE codigo='OE.4.7.2.18' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.19 - SUM. TUBO DE COBRE TIPO L 1" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=63.0, cantidad_presupuesto=306.0 WHERE codigo='OE.4.7.2.19' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.20 - SUM. TUBO DE COBRE TIPO L 1 1/2" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=112.3, cantidad_presupuesto=28.16 WHERE codigo='OE.4.7.2.20' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.21 - SUM. TUBO DE COBRE TIPO L 2" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=225.22, cantidad_presupuesto=67.11 WHERE codigo='OE.4.7.2.21' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.22 - SUM. TUBO DE COBRE TIPO L 2 1/2" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=353.02, cantidad_presupuesto=14.22 WHERE codigo='OE.4.7.2.22' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.23 - SUM. TUBO DE COBRE TIPO L 3" PARA AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=554.44, cantidad_presupuesto=22.0 WHERE codigo='OE.4.7.2.23' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.24 - SOLDADURA 90-5-5
  UPDATE catalogo_partidas SET precio_unitario=8.78, cantidad_presupuesto=235.0 WHERE codigo='OE.4.7.2.24' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.2.25 - PINTURA BASE ZINCROMATO
  UPDATE catalogo_partidas SET precio_unitario=11.14, cantidad_presupuesto=1174.49 WHERE codigo='OE.4.7.2.25' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3 - ACCESORIOS DE REDES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.7.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.1 - CODO DE COBRE 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=18.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.2 - CODO DE COBRE 3/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=21.53, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.3 - CODO DE COBRE 1" X 90°
  UPDATE catalogo_partidas SET precio_unitario=30.11, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.4 - CODO DE COBRE 1 1/2" X 90º
  UPDATE catalogo_partidas SET precio_unitario=35.04, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.5 - CODO DE COBRE 2" X 90º
  UPDATE catalogo_partidas SET precio_unitario=80.29, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.6 - CODO DE COBRE  2 1/2" X 90º
  UPDATE catalogo_partidas SET precio_unitario=100.04, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.7 - CODO DE COBRE 3" X 90°
  UPDATE catalogo_partidas SET precio_unitario=97.95, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.8 - CODO DE COBRE 4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=135.04, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.9 - TEE DE COBRE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=21.42, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.10 - TEE DE COBRE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=27.54, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.11 - TEE DE COBRE 1"
  UPDATE catalogo_partidas SET precio_unitario=37.87, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.12 - TEE DE COBRE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=42.24, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.13 - TEE DE COBRE 2"
  UPDATE catalogo_partidas SET precio_unitario=105.65, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.14 - TEE DE COBRE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=107.24, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.15 - REDUCCION DE COBRE 3/4" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=21.23, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.15' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.16 - REDUCCION DE COBRE 1" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=24.25, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.16' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.17 - REDUCCION DE COBRE 1" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=30.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.17' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.18 - REDUCCION DE COBRE 1 1/2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=44.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.18' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.19 - REDUCCION DE COBRE 2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=60.08, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.19' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.20 - REDUCCION DE COBRE 2" - 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=91.37, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.20' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.21 - REDUCCION DE COBRE 2 1/2" -2"
  UPDATE catalogo_partidas SET precio_unitario=40.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.21' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.22 - UNION DE COBRE PARA SOLDAR 1/2"
  UPDATE catalogo_partidas SET precio_unitario=25.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.22' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.23 - UNION DE COBRE PARA SOLDAR 3/4"
  UPDATE catalogo_partidas SET precio_unitario=31.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.23' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.24 - UNION DE COBRE PARA SOLDAR 1"
  UPDATE catalogo_partidas SET precio_unitario=37.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.24' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.25 - UNION DE COBRE PARA SOLDAR 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=42.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.25' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.26 - UNION DE COBRE PARA SOLDAR 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=47.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.26' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.27 - UNION DE COBRE PARA SOLDAR 2"
  UPDATE catalogo_partidas SET precio_unitario=62.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.27' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.28 - UNION DE COBRE PARA SOLDAR 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=97.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.28' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.29 - TAPÓN DE COBRE HEMBRA 1/2"
  UPDATE catalogo_partidas SET precio_unitario=19.93, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.3.29' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.30 - SUM. CODO DE COBRE 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=10.56, cantidad_presupuesto=326.0 WHERE codigo='OE.4.7.3.30' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.31 - SUM. CODO DE COBRE 3/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=13.16, cantidad_presupuesto=125.0 WHERE codigo='OE.4.7.3.31' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.32 - SUM. CODO DE COBRE 1" X 90°
  UPDATE catalogo_partidas SET precio_unitario=21.74, cantidad_presupuesto=62.0 WHERE codigo='OE.4.7.3.32' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.33 - SUM. CODO DE COBRE 1 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=34.47, cantidad_presupuesto=4.0 WHERE codigo='OE.4.7.3.33' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.34 - SUM. CODO DE COBRE 2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=71.92, cantidad_presupuesto=21.0 WHERE codigo='OE.4.7.3.34' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.35 - SUM. CODO DE COBRE 2 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=91.67, cantidad_presupuesto=3.0 WHERE codigo='OE.4.7.3.35' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.36 - SUM. CODO DE COBRE 3" X 90°
  UPDATE catalogo_partidas SET precio_unitario=111.67, cantidad_presupuesto=8.0 WHERE codigo='OE.4.7.3.36' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.37 - SUM. CODO DE COBRE 4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=126.67, cantidad_presupuesto=11.0 WHERE codigo='OE.4.7.3.37' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.38 - SUM. TEE DE COBRE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=12.02, cantidad_presupuesto=47.0 WHERE codigo='OE.4.7.3.38' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.39 - SUM. TEE DE COBRE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=18.14, cantidad_presupuesto=34.0 WHERE codigo='OE.4.7.3.39' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.40 - SUM. TEE DE COBRE 1"
  UPDATE catalogo_partidas SET precio_unitario=28.47, cantidad_presupuesto=32.0 WHERE codigo='OE.4.7.3.40' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.41 - SUM. TEE DE COBRE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=32.84, cantidad_presupuesto=4.0 WHERE codigo='OE.4.7.3.41' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.42 - SUM. TEE DE COBRE 2"
  UPDATE catalogo_partidas SET precio_unitario=96.25, cantidad_presupuesto=3.0 WHERE codigo='OE.4.7.3.42' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.43 - SUM. TEE DE COBRE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=97.84, cantidad_presupuesto=2.0 WHERE codigo='OE.4.7.3.43' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.44 - SUM. REDUCCION DE COBRE 3/4" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=13.47, cantidad_presupuesto=35.0 WHERE codigo='OE.4.7.3.44' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.45 - SUM. REDUCCION DE COBRE 1" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=16.49, cantidad_presupuesto=15.0 WHERE codigo='OE.4.7.3.45' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.46 - SUM. REDUCCION DE COBRE 1" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=22.67, cantidad_presupuesto=28.0 WHERE codigo='OE.4.7.3.46' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.47 - SUM. REDUCCION DE COBRE 1 1/2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=20.67, cantidad_presupuesto=7.0 WHERE codigo='OE.4.7.3.47' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.48 - SUM. REDUCCION DE COBRE 2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=38.67, cantidad_presupuesto=3.0 WHERE codigo='OE.4.7.3.48' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.49 - SUM. REDUCCION DE COBRE 2" - 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=48.56, cantidad_presupuesto=3.0 WHERE codigo='OE.4.7.3.49' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.50 - SUM. REDUCCION DE COBRE 2 1/2" - 2"
  UPDATE catalogo_partidas SET precio_unitario=32.67, cantidad_presupuesto=3.0 WHERE codigo='OE.4.7.3.50' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.51 - SUM. UNION DE COBRE PARA SOLDAR 1/2"
  UPDATE catalogo_partidas SET precio_unitario=19.57, cantidad_presupuesto=15.0 WHERE codigo='OE.4.7.3.51' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.52 - SUM. UNION DE COBRE PARA SOLDAR 3/4"
  UPDATE catalogo_partidas SET precio_unitario=25.57, cantidad_presupuesto=30.0 WHERE codigo='OE.4.7.3.52' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.53 - SUM. UNION DE COBRE PARA SOLDAR 1"
  UPDATE catalogo_partidas SET precio_unitario=31.57, cantidad_presupuesto=5.0 WHERE codigo='OE.4.7.3.53' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.54 - SUM. UNION DE COBRE PARA SOLDAR 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=36.57, cantidad_presupuesto=7.0 WHERE codigo='OE.4.7.3.54' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.55 - SUM. UNION DE COBRE PARA SOLDAR 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=41.57, cantidad_presupuesto=2.0 WHERE codigo='OE.4.7.3.55' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.56 - SUM. UNION DE COBRE PARA SOLDAR 2"
  UPDATE catalogo_partidas SET precio_unitario=56.57, cantidad_presupuesto=10.0 WHERE codigo='OE.4.7.3.56' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.57 - SUM. UNION DE COBRE PARA SOLDAR 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=91.57, cantidad_presupuesto=2.0 WHERE codigo='OE.4.7.3.57' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.58 - SUM. TAPÓN DE COBRE HEMBRA 1/2"
  UPDATE catalogo_partidas SET precio_unitario=13.57, cantidad_presupuesto=39.0 WHERE codigo='OE.4.7.3.58' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.3.59 - SOLDADURA 90-5-5
  UPDATE catalogo_partidas SET precio_unitario=8.78, cantidad_presupuesto=1772.0 WHERE codigo='OE.4.7.3.59' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4 - LLAVES Y VALVULAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.7.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.1 - VALVULA DE COMPUERTA BRONCE DE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=96.6, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.2 - VALVULA DE COMPUERTA BRONCE DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=101.16, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.3 - VALVULA DE COMPUERTA BRONCE DE 1"
  UPDATE catalogo_partidas SET precio_unitario=484.14, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.4 - VALVULA DE COMPUERTA BRONCE DE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=1026.53, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.5 - VALVULA DE COMPUERTA BRONCE DE 2"
  UPDATE catalogo_partidas SET precio_unitario=1507.39, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.6 - VALVULA DE COMPUERTA BRONCE DE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=325.53, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.7 - VÁLVULA ESFÉRICA DE BRONCE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=94.24, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.8 - VÁLVULA ESFÉRICA DE BRONCE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=125.27, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.9 - VÁLVULA ESFÉRICA DE BRONCE 1"
  UPDATE catalogo_partidas SET precio_unitario=211.51, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.10 - VÁLVULA ESFÉRICA DE BRONCE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=266.58, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.4.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.11 - VÁLVULA ESFÉRICA DE BRONCE 2"
  UPDATE catalogo_partidas SET precio_unitario=582.23, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.4.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.12 - VÁLVULA ESFÉRICA DE BRONCE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=1060.43, cantidad_presupuesto=0.0 WHERE codigo='OE.4.7.4.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.13 - VÁLVULA ESFÉRICA DE BRONCE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=78.04, cantidad_presupuesto=43.0 WHERE codigo='OE.4.7.4.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.14 - VÁLVULA ESFÉRICA DE BRONCE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=109.07, cantidad_presupuesto=16.0 WHERE codigo='OE.4.7.4.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.15 - VÁLVULA ESFÉRICA DE BRONCE 1"
  UPDATE catalogo_partidas SET precio_unitario=195.31, cantidad_presupuesto=11.0 WHERE codigo='OE.4.7.4.15' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.16 - VÁLVULA ESFÉRICA DE BRONCE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=250.38, cantidad_presupuesto=1.0 WHERE codigo='OE.4.7.4.16' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.17 - VÁLVULA ESFÉRICA DE BRONCE 2"
  UPDATE catalogo_partidas SET precio_unitario=566.03, cantidad_presupuesto=2.0 WHERE codigo='OE.4.7.4.17' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.18 - VÁLVULA ESFÉRICA DE BRONCE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=1044.23, cantidad_presupuesto=1.0 WHERE codigo='OE.4.7.4.18' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.4.19 - SOLDADURA 90-5-5
  UPDATE catalogo_partidas SET precio_unitario=8.78, cantidad_presupuesto=74.0 WHERE codigo='OE.4.7.4.19' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.5 - PIEZAS VARIAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.7.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.5.1 - CAJA P/VALVULA 30X30 CM
  UPDATE catalogo_partidas SET precio_unitario=54.19, cantidad_presupuesto=48.0 WHERE codigo='OE.4.7.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.5.2 - CAJA P/VALVULA 35X35 CM
  UPDATE catalogo_partidas SET precio_unitario=68.35, cantidad_presupuesto=12.0 WHERE codigo='OE.4.7.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.5.3 - COLGADOR PARA 1 TUBERÍA
  UPDATE catalogo_partidas SET precio_unitario=25.96, cantidad_presupuesto=76.0 WHERE codigo='OE.4.7.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.5.4 - JUNTA DE EXPANSIÓN SISMICA DE 1"
  UPDATE catalogo_partidas SET precio_unitario=66.47, cantidad_presupuesto=5.0 WHERE codigo='OE.4.7.5.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.5.5 - JUNTA DE EXPANSIÓN SISMICA DE 1.1/2"
  UPDATE catalogo_partidas SET precio_unitario=60.47, cantidad_presupuesto=2.0 WHERE codigo='OE.4.7.5.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.5.6 - JUNTA DE EXPANSIÓN SISMICA DE 2"
  UPDATE catalogo_partidas SET precio_unitario=68.47, cantidad_presupuesto=2.0 WHERE codigo='OE.4.7.5.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.5.7 - COLGADOR TIPO GOTA 1/2"
  UPDATE catalogo_partidas SET precio_unitario=42.91, cantidad_presupuesto=80.0 WHERE codigo='OE.4.7.5.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.5.8 - COLGADOR TIPO GOTA 3/4"
  UPDATE catalogo_partidas SET precio_unitario=45.91, cantidad_presupuesto=40.0 WHERE codigo='OE.4.7.5.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.6 - INSTALACIONES ESPECIALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.7.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.6.1 - CUARTO DE BOMBAS - A.B.
  UPDATE catalogo_partidas SET precio_unitario=137745.1, cantidad_presupuesto=1.0 WHERE codigo='OE.4.7.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.7 - PRUEBAS HIDRAULICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.7.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.7.1 - PRUEBA HIDRAULICA DEL AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=1.18, cantidad_presupuesto=1174.5 WHERE codigo='OE.4.7.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.8 - AISLADORES TERMICOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.7.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.8.1 - AISLADORES TERMICOS PARA TUBERIAS DE COBRE DE 1"
  UPDATE catalogo_partidas SET precio_unitario=19.83, cantidad_presupuesto=183.6 WHERE codigo='OE.4.7.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.8.2 - AISLADORES TERMICOS PARA TUBERIAS DE COBRE DE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=22.72, cantidad_presupuesto=28.16 WHERE codigo='OE.4.7.8.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.8.3 - AISLADORES TERMICOS PARA TUBERIAS DE COBRE DE 2"
  UPDATE catalogo_partidas SET precio_unitario=24.72, cantidad_presupuesto=67.11 WHERE codigo='OE.4.7.8.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.8.4 - AISLADORES TERMICOS PARA TUBERIAS DE COBRE DE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=25.22, cantidad_presupuesto=14.22 WHERE codigo='OE.4.7.8.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.8.5 - AISLADORES TERMICOS PARA TUBERIAS DE COBRE DE 3"
  UPDATE catalogo_partidas SET precio_unitario=26.72, cantidad_presupuesto=22.0 WHERE codigo='OE.4.7.8.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.9 - PINTURA PARA TUBERIA DE AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.7.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.7.9.1 - PINTURA PARA TUBERIAS DE AGUA BLANDA
  UPDATE catalogo_partidas SET precio_unitario=12.89, cantidad_presupuesto=1174.49 WHERE codigo='OE.4.7.9.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.8 - SISTEMA DE DRENAJE DE EQUIPOS DE AIRE ACONDICIONADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.1 - SALIDAS DE DRENAJE DE EQUIPOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.1.1 - SALIDA DE DESAGUE PVC SAP 2"
  UPDATE catalogo_partidas SET precio_unitario=75.37, cantidad_presupuesto=102.0 WHERE codigo='OE.4.8.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.2 - REDES DE DERIVACION
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.8.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.2.1 - TUBERIA PVC CP - PESADA Ø 2"
  UPDATE catalogo_partidas SET precio_unitario=34.92, cantidad_presupuesto=384.92 WHERE codigo='OE.4.8.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.2.2 - MONTANTE DE PVC CP - PESADA Ø 2"
  UPDATE catalogo_partidas SET precio_unitario=34.52, cantidad_presupuesto=373.0 WHERE codigo='OE.4.8.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.3 - ACCESORIOS DE DESAGUE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.8.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.3.1 - CODO PVC CP - PESADA 2"X90º
  UPDATE catalogo_partidas SET precio_unitario=36.69, cantidad_presupuesto=207.0 WHERE codigo='OE.4.8.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.3.2 - CODO PVC CP - PESADA 2"X45º
  UPDATE catalogo_partidas SET precio_unitario=29.97, cantidad_presupuesto=77.0 WHERE codigo='OE.4.8.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.3.3 - TEE PVC CP - PESADA 2"
  UPDATE catalogo_partidas SET precio_unitario=33.59, cantidad_presupuesto=11.0 WHERE codigo='OE.4.8.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.3.4 - YEE PVC CP - PESADA 2"
  UPDATE catalogo_partidas SET precio_unitario=34.81, cantidad_presupuesto=84.0 WHERE codigo='OE.4.8.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.3.5 - UNION UNIVERSAL PVC CP - PESADA 2"
  UPDATE catalogo_partidas SET precio_unitario=33.82, cantidad_presupuesto=122.0 WHERE codigo='OE.4.8.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.3.6 - UNION  PVC 2"
  UPDATE catalogo_partidas SET precio_unitario=17.67, cantidad_presupuesto=320.0 WHERE codigo='OE.4.8.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.4 - VARIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.8.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.4.1 - REGISTRO DE BRONCE 2"
  UPDATE catalogo_partidas SET precio_unitario=24.09, cantidad_presupuesto=32.0 WHERE codigo='OE.4.8.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.4.2 - COLGADOR TIPO CLEVIS DE 2"
  UPDATE catalogo_partidas SET precio_unitario=9.06, cantidad_presupuesto=163.0 WHERE codigo='OE.4.8.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.4.3 - SOMBRERO DE VENTILACION PVC CP - PESADA DE 2"
  UPDATE catalogo_partidas SET precio_unitario=19.72, cantidad_presupuesto=15.0 WHERE codigo='OE.4.8.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.5 - PINTURA PARA TUBERIAS DE DRENAJE DE AIRE ACONDICIONADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.8.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.5.1 - PINTURA PARA TUBERIAS DE DRENAJE DE AA
  UPDATE catalogo_partidas SET precio_unitario=10.4, cantidad_presupuesto=28.0 WHERE codigo='OE.4.8.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.6 - PASES DE TUBERIAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.8.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.8.6.1 - HABILITACION DE PASES EN LOSA PARA  Ø3"
  UPDATE catalogo_partidas SET precio_unitario=10.59, cantidad_presupuesto=67.0 WHERE codigo='OE.4.8.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.9 - SISTEMA DE SUBDRENAJE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.1 - TRAZO Y REPLANTEO
  UPDATE catalogo_partidas SET precio_unitario=2.59, cantidad_presupuesto=532.22 WHERE codigo='OE.4.9.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.2 - EXCAVACIÓN DE ZANJAS PARA REDES EXT. SANITARIAS
  UPDATE catalogo_partidas SET precio_unitario=54.11, cantidad_presupuesto=519.32 WHERE codigo='OE.4.9.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.3 - ENTIBADO DE ZANJA H=5.00M
  UPDATE catalogo_partidas SET precio_unitario=42.1, cantidad_presupuesto=583.0 WHERE codigo='OE.4.9.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.4 - COLOCACIÓN DE CAMA DE GRAVA DE 1/2", E=0.10M
  UPDATE catalogo_partidas SET precio_unitario=16.52, cantidad_presupuesto=0.0 WHERE codigo='OE.4.9.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.5 - RELLENO CON GRAVA DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=88.21, cantidad_presupuesto=276.43 WHERE codigo='OE.4.9.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.6 - RELLENO CON GRAVA DE 1" A 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=77.42, cantidad_presupuesto=0.0 WHERE codigo='OE.4.9.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.7 - RELLENO Y APISONADO CON ARENA GRUESA
  UPDATE catalogo_partidas SET precio_unitario=101.41, cantidad_presupuesto=180.18 WHERE codigo='OE.4.9.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.8 - ELIMINACIÓN DE MATERIAL EXCEDENTE CON MAQUINARIA D=5 KM
  UPDATE catalogo_partidas SET precio_unitario=22.67, cantidad_presupuesto=0.0 WHERE codigo='OE.4.9.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.9 - GEOTEXTIL NO TEJIDO PARA SUBDREN
  UPDATE catalogo_partidas SET precio_unitario=6.3, cantidad_presupuesto=2033.99 WHERE codigo='OE.4.9.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.10 - TUBERÍA PVC C-10 Ø6" (CON 02 PERFORACIONES DE 8MM@0.10M)
  UPDATE catalogo_partidas SET precio_unitario=26.81, cantidad_presupuesto=1001.94 WHERE codigo='OE.4.9.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.11 - TUBERÍA PVC C-10 Ø6"
  UPDATE catalogo_partidas SET precio_unitario=53.54, cantidad_presupuesto=74.07 WHERE codigo='OE.4.9.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.12 - COLOCACION DE CAMA DE ARENA E=0.10M
  UPDATE catalogo_partidas SET precio_unitario=108.48, cantidad_presupuesto=39.23 WHERE codigo='OE.4.9.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.13 - CAJA DE REGISTRO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.9.13' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.13.1 - TRAZO Y REPLANTEO DE CAJAS DE REGISTRO
  UPDATE catalogo_partidas SET precio_unitario=13.5, cantidad_presupuesto=31.5 WHERE codigo='OE.4.9.13.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.13.2 - Excavacion para cajas de registro de subdrenaje
  UPDATE catalogo_partidas SET precio_unitario=53.36, cantidad_presupuesto=34.65 WHERE codigo='OE.4.9.13.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.13.3 - ELIMINACIÓN DE MATERIAL EXCEDENTE CON MAQUINARIA D=5 KM
  UPDATE catalogo_partidas SET precio_unitario=33.23, cantidad_presupuesto=45.05 WHERE codigo='OE.4.9.13.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.13.4 - Solado f´c=100 kg/cm2, H=10 CM
  UPDATE catalogo_partidas SET precio_unitario=48.31, cantidad_presupuesto=31.5 WHERE codigo='OE.4.9.13.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.13.5 - CONCRETO F´C= 280 KG/CM2 PARA CAJAS DE REGISTRO
  UPDATE catalogo_partidas SET precio_unitario=621.81, cantidad_presupuesto=54.28 WHERE codigo='OE.4.9.13.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.13.6 - Encofrado y desencofrado para caja de registro
  UPDATE catalogo_partidas SET precio_unitario=61.15, cantidad_presupuesto=656.57 WHERE codigo='OE.4.9.13.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.13.7 - ACERO DE REFUERZO EN CAJAS DE REGISTRO F'Y=4200 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=5.79, cantidad_presupuesto=3811.44 WHERE codigo='OE.4.9.13.7' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.13.8 - SUMINISTRO Y COLOCACION DE TAPAS PARA CAJAS DE REGISTRO
  UPDATE catalogo_partidas SET precio_unitario=588.38, cantidad_presupuesto=14.0 WHERE codigo='OE.4.9.13.8' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.13.9 - TARRAJEO DE SUPERFICE CON IMPERMEABILIZANTE EN INTERIORES
  UPDATE catalogo_partidas SET precio_unitario=38.21, cantidad_presupuesto=345.01 WHERE codigo='OE.4.9.13.9' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.13.10 - SUMINISTRO E INSTALACION DE ESCALERA METALICA
  UPDATE catalogo_partidas SET precio_unitario=600.0, cantidad_presupuesto=14.0 WHERE codigo='OE.4.9.13.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.14 - SUBDRENAJE PARA MURO DE CONTENCION
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.9.14' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.14.1 - ENCOFRADO Y DESENCOFRADO PARA SOLADO
  UPDATE catalogo_partidas SET precio_unitario=65.59, cantidad_presupuesto=20.38 WHERE codigo='OE.4.9.14.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.14.2 - SOLADO EN SUBDRENAJE
  UPDATE catalogo_partidas SET precio_unitario=49.79, cantidad_presupuesto=15.29 WHERE codigo='OE.4.9.14.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.14.3 - ENCONFRADO PARA SUBDRENAJE
  UPDATE catalogo_partidas SET precio_unitario=65.59, cantidad_presupuesto=61.15 WHERE codigo='OE.4.9.14.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.9.14.4 - GEOMEMBRANA PARA MURO DE CONTENCION
  UPDATE catalogo_partidas SET precio_unitario=57.8, cantidad_presupuesto=1320.75 WHERE codigo='OE.4.9.14.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.10 - SISTEMA DE EXTRACCION DE AGUA SUBTERRANEA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.10' AND proyecto_id=v_proyecto_id;
  -- OE.4.10.1 - POZO ARTESIANO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.10.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.10.1.1 - POZO ARTESIANO
  UPDATE catalogo_partidas SET precio_unitario=34000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.4.10.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.10.2 - SISTEMA DE ALMACENAMIENTO DE AGUA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.10.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.10.2.1 - EXTRACCION DE AGUA SUBTERRANEA
  UPDATE catalogo_partidas SET precio_unitario=2472.02, cantidad_presupuesto=2.0 WHERE codigo='OE.4.10.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.10.2.2 - SISTEMA DE CONDUCCION DE AGUA SUBTERRANEA
  UPDATE catalogo_partidas SET precio_unitario=13.16, cantidad_presupuesto=75.0 WHERE codigo='OE.4.10.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.10.2.3 - ALMACENAMIENTO DE AGUA SUBTERRANEA
  UPDATE catalogo_partidas SET precio_unitario=28307.02, cantidad_presupuesto=1.0 WHERE codigo='OE.4.10.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.10.2.4 - TANQUE PARA ALMACENAMIENTO PARA SSHH EN OBRA
  UPDATE catalogo_partidas SET precio_unitario=3600.24, cantidad_presupuesto=4.0 WHERE codigo='OE.4.10.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.10.2.5 - ABASTECIMIENTO DE AGUA A OBRA
  UPDATE catalogo_partidas SET precio_unitario=3334.8, cantidad_presupuesto=6.0 WHERE codigo='OE.4.10.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.10.2.6 - REUBICACION DE POZO EXTRACION DE AGUA
  UPDATE catalogo_partidas SET precio_unitario=1450.97, cantidad_presupuesto=1.0 WHERE codigo='OE.4.10.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.4.11 - PAVIMENTOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.11' AND proyecto_id=v_proyecto_id;
  -- OE.4.11.1 - CORTE DE PAVIMENTO EXISTENTE
  UPDATE catalogo_partidas SET precio_unitario=47.29, cantidad_presupuesto=55.81 WHERE codigo='OE.4.11.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.11.2 - ACARREO DE MATERIAL DEMOLIDO
  UPDATE catalogo_partidas SET precio_unitario=22.23, cantidad_presupuesto=26.0 WHERE codigo='OE.4.11.2' AND proyecto_id=v_proyecto_id;
  -- OE.4.11.3 - REPOSICION DE PAVIMENTO
  UPDATE catalogo_partidas SET precio_unitario=1261.17, cantidad_presupuesto=3.91 WHERE codigo='OE.4.11.3' AND proyecto_id=v_proyecto_id;
  -- OE.4.11.4 - CONTROL DE CALIDAD
  UPDATE catalogo_partidas SET precio_unitario=970.0, cantidad_presupuesto=1.0 WHERE codigo='OE.4.11.4' AND proyecto_id=v_proyecto_id;
  -- OE.4.11.5 - REPOSICION DE PAVIMENTO CON CONCRETO ARMADO
  UPDATE catalogo_partidas SET precio_unitario=439.43, cantidad_presupuesto=3.35 WHERE codigo='OE.4.11.5' AND proyecto_id=v_proyecto_id;
  -- OE.4.12 - TRANSPORTE Y ACARREO DE MATERIALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.4.12' AND proyecto_id=v_proyecto_id;
  -- OE.4.12.1 - ACARREO DE MATERIALES SANITARIOS MANUAL EN OBRA D>150m
  UPDATE catalogo_partidas SET precio_unitario=0.15, cantidad_presupuesto=121165.62 WHERE codigo='OE.4.12.1' AND proyecto_id=v_proyecto_id;
  -- OE.4.12.2 - TRASLADO VERTICAL DE MATERIALES SANITARIOS EN OBRA H=16m
  UPDATE catalogo_partidas SET precio_unitario=0.2, cantidad_presupuesto=96687.99 WHERE codigo='OE.4.12.2' AND proyecto_id=v_proyecto_id;
  -- OE.5 - INSTALACIONES ELÉCTRICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.1 - CONEXIÓN A LA RED EXTERNA DE SUMINISTRO DE ENERGIA ELÉCTRICA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.1.1 - Sistema de Utilización en Media Tensión Subestación Tipo Convencional con Transformador Tipo Seco  de 630 KVA.
  UPDATE catalogo_partidas SET precio_unitario=531894.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2 - SALIDA PARA INSTALACIONES ELÉCTRICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1 - SALIDA PARA ALUMBRADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.1 - Salida para Alumbrado Empotrado a techo
  UPDATE catalogo_partidas SET precio_unitario=38.86, cantidad_presupuesto=3962.0 WHERE codigo='OE.5.2.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.2 - Salida para Alumbrado de Emergencia
  UPDATE catalogo_partidas SET precio_unitario=94.46, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.3 - SALIDA TOMACORRIENTE DOBLE UNIVERSAL CON PUESTA A TIERRA, 16 A. 250 V.  PARA USO GENERAL GRADO HOSPITALARIO, EMPOTRADO EN MURO. H=0.40m
  UPDATE catalogo_partidas SET precio_unitario=35.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.4 - SALIDA TOMACORRIENTE DOBLE UNIVERSAL CON PUESTA A TIERRA, 16 A. 250 V.  PARA USO GENERAL GRADO HOSPITALARIO, EMPOTRADO EN MURO. H=1.10m
  UPDATE catalogo_partidas SET precio_unitario=35.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.5 - SALIDA TOMACORRIENTE DOBLE UNIVERSAL CON PUESTA A TIERRA, 16 A. 250 V.  PARA USO GENERAL GRADO HOSPITALARIO, EMPOTRADO EN MURO. H=0.90m
  UPDATE catalogo_partidas SET precio_unitario=35.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.6 - SALIDA TOMACORRIENTE DOBLE UNIVERSAL CON PUESTA A TIERRA, 16 A. 250 V.  PARA USO GENERAL GRADO HOSPITALARIO, EMPOTRADO EN MURO. H=1.50m
  UPDATE catalogo_partidas SET precio_unitario=35.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.7 - SALIDA TOMACORRIENTE DOBLE UNIVERSAL CON PUESTA A TIERRA, 16 A. 250 V.  PARA USO GENERAL GRADO HOSPITALARIO, EMPOTRADO EN MURO. H=2.20m
  UPDATE catalogo_partidas SET precio_unitario=35.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.8 - SALIDA TOMACORRIENTE DOBLE UNIVERSAL CON PUESTA A TIERRA, 16 A. 250 V.  PARA USO GENERAL GRADO HOSPITALARIO, EMPOTRADO EN TECHO
  UPDATE catalogo_partidas SET precio_unitario=35.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.9 - SALIDA TOMACORRIENTE DOBLE UNIVERSAL CON PUESTA A TIERRA, 16 A. 250 V.  A PRUEBA DE AGUA GRADO HOSPITALARIO, EMPOTRADO EN MURO
  UPDATE catalogo_partidas SET precio_unitario=35.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.10 - SALIDA TOMACORRIENTE DOBLE TIPO SCHUKO, CON PUESTA A TIERRA, 16 A. 250 V. PARA USO ESTABILISADO.  (EQUIP. MEDICO).  EMPOTRADO EN MURO. H=1.60
  UPDATE catalogo_partidas SET precio_unitario=35.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.11 - SALIDA TOMACORRIENTE DOBLE TIPO UNIVERSAL, CON PUESTA A TIERRA, 16 A. 250 V. PARA USO GENERAL (ESTABILISADO).  (EQUIP. MEDICO).  EMPOTRADO EN MURO.
  UPDATE catalogo_partidas SET precio_unitario=35.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.12 - SALIDA TOMACORRIENTE DOBLE TIPO UNIVERSAL, CON PUESTA A TIERRA, 16 A. 250 V. PARA USO GENERAL (ESTABILISADO).  (EQUIP. MEDICO).  EMPOTRADO EN MURO. H=0.40
  UPDATE catalogo_partidas SET precio_unitario=35.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.13 - SALIDA TOMACORRIENTE DOBLE TIPO UNIVERSAL, CON PUESTA A TIERRA, 16 A. 250 V. PARA USO GENERAL (ESTABILISADO).  (EQUIP. MEDICO).  EMPOTRADO EN MURO. H=1.10
  UPDATE catalogo_partidas SET precio_unitario=35.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.14 - SALIDA DE FUERZA 1F PARA EQUIPOS BIOMEDICOS, INYECTORES Y EXTRACTORES EN PISO Y MURO
  UPDATE catalogo_partidas SET precio_unitario=35.76, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.15 - SALIDA DE FUERZA 3F PARA EQUIPOS BIOMEDICOS, INYECTORES Y EXTRACTORES EN PISO Y MURO
  UPDATE catalogo_partidas SET precio_unitario=35.76, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.16 - Salida para Interruptor simple Tipo Palanca Balancin Grado Hospitalario
  UPDATE catalogo_partidas SET precio_unitario=35.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.17 - Salida para Interruptor Doble Tipo Palanca Balancin Grado Hospitalario
  UPDATE catalogo_partidas SET precio_unitario=35.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.18 - Salida para Interruptor Triple Tipo Palanca Balancin Grado Hospitalario
  UPDATE catalogo_partidas SET precio_unitario=35.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.19 - Salida para Interruptor Simple de tres vías (Conmutación)Tipo Palanca Balancin Grado Hospitalario.
  UPDATE catalogo_partidas SET precio_unitario=35.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.20 - Interruptor Simple suspendido cabecera de cama
  UPDATE catalogo_partidas SET precio_unitario=35.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.1.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.21 - SALIDA PARA ALUMBRADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.1.21' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.21.1 - SALIDA PARA ALUMBRADO ADOSADO EN TECHO
  UPDATE catalogo_partidas SET precio_unitario=29.73, cantidad_presupuesto=1764.0 WHERE codigo='OE.5.2.1.21.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.21.2 - SALIDA PARA LUZ DE EMERGENCIA EN MURO
  UPDATE catalogo_partidas SET precio_unitario=37.64, cantidad_presupuesto=468.0 WHERE codigo='OE.5.2.1.21.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.21.3 - SALIDA PARA LUZ DE EMERGENCIA EN TECHO
  UPDATE catalogo_partidas SET precio_unitario=29.73, cantidad_presupuesto=21.0 WHERE codigo='OE.5.2.1.21.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.21.4 - SALIDA PARA ALUMBRADO EN CABECERA DE CAMA
  UPDATE catalogo_partidas SET precio_unitario=42.64, cantidad_presupuesto=48.0 WHERE codigo='OE.5.2.1.21.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.21.5 - SALIDA PARA ALUMBRADO CON SENSOR DE MOVIMIENTO
  UPDATE catalogo_partidas SET precio_unitario=29.73, cantidad_presupuesto=56.0 WHERE codigo='OE.5.2.1.21.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.22 - SALIDA PARA TOMACORRIENTE DE TENSION NORMAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.1.22' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.22.1 - SALIDA PARA TOMACORRIENTE DOBLE MIXTO, TIPO SCHUKO Y TRES EN LINEA, CON TOMA A TIERRA (H=0,40m)
  UPDATE catalogo_partidas SET precio_unitario=44.35, cantidad_presupuesto=868.0 WHERE codigo='OE.5.2.1.22.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.22.2 - SALIDA PARA TOMACORRIENTE DOBLE MIXTO, TIPO SCHUKO Y TRES EN LINEA, CON TOMA A TIERRA (H=0,90m)
  UPDATE catalogo_partidas SET precio_unitario=44.35, cantidad_presupuesto=5.0 WHERE codigo='OE.5.2.1.22.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.22.3 - SALIDA PARA TOMACORRIENTE DOBLE MIXTO, TIPO SCHUKO Y TRES EN LINEA, CON TOMA A TIERRA (H=1,20m)
  UPDATE catalogo_partidas SET precio_unitario=44.35, cantidad_presupuesto=12.0 WHERE codigo='OE.5.2.1.22.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.22.4 - SALIDA PARA TOMACORRIENTE DOBLE MIXTO, TIPO SCHUKO Y TRES EN LINEA, CON TOMA A TIERRA Y TAPA IDROBOX (H=1,20m)
  UPDATE catalogo_partidas SET precio_unitario=44.35, cantidad_presupuesto=62.0 WHERE codigo='OE.5.2.1.22.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.22.5 - SALIDA PARA TOMACORRIENTE DOBLE MIXTO, TIPO SCHUKO Y TRES EN LINEA, CON TOMA A TIERRA Y TAPA CON EMPAQUETADURA METALICA (H=1,20m)
  UPDATE catalogo_partidas SET precio_unitario=44.35, cantidad_presupuesto=10.0 WHERE codigo='OE.5.2.1.22.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.22.6 - SALIDA PARA TOMACORRIENTE DOBLE MIXTO, TIPO SCHUKO Y TRES EN LINEA, CON TOMA A TIERRA (H=2,20m)
  UPDATE catalogo_partidas SET precio_unitario=44.35, cantidad_presupuesto=34.0 WHERE codigo='OE.5.2.1.22.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.22.7 - SALIDA PARA TOMACORRIENTE DOBLE MIXTO, TIPO SCHUKO Y TRES EN LINEA, CON TOMA A TIERRA (Techo)
  UPDATE catalogo_partidas SET precio_unitario=44.35, cantidad_presupuesto=15.0 WHERE codigo='OE.5.2.1.22.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.22.8 - SALIDA PARA TOMACORRIENTE DOBLE, TIPO SCHUKO, CON TOMA A TIERRA (H=1.20m)
  UPDATE catalogo_partidas SET precio_unitario=51.35, cantidad_presupuesto=103.0 WHERE codigo='OE.5.2.1.22.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.23 - SALIDA PARA TOMACORRIENTE DE TENSION ESTABILIZADA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.1.23' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.23.1 - SALIDA PARA TOMACORRIENTE ESTABILIZADO DOBLE MIXTO, TIPO SCHUKO Y TRES EN LINEA, CON TOMA A TIERRA (H=0,40m)
  UPDATE catalogo_partidas SET precio_unitario=44.35, cantidad_presupuesto=334.0 WHERE codigo='OE.5.2.1.23.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.23.2 - SALIDA PARA TOMACORRIENTE DOBLE MIXTO, TIPO SCHUKO Y TRES EN LINEA, CON TOMA A TIERRA (H=1,20m)
  UPDATE catalogo_partidas SET precio_unitario=51.35, cantidad_presupuesto=251.0 WHERE codigo='OE.5.2.1.23.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.23.3 - SALIDA PARA BANCO DE TOMACORRIENTE ESTABILIZADO DOBLE TIPO SCHUKO BIPASO, CON TOMA A TIERRA (H=1,60m)
  UPDATE catalogo_partidas SET precio_unitario=44.35, cantidad_presupuesto=301.0 WHERE codigo='OE.5.2.1.23.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.24 - SALIDA PARA INTERRUPTOR
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.1.24' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.24.1 - SALIDA PARA INTERRUPTOR BIPOLAR SIMPLE
  UPDATE catalogo_partidas SET precio_unitario=44.35, cantidad_presupuesto=387.0 WHERE codigo='OE.5.2.1.24.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.24.2 - SALIDA PARA INTERRUPTOR BIPOLAR DOBLE
  UPDATE catalogo_partidas SET precio_unitario=44.35, cantidad_presupuesto=229.0 WHERE codigo='OE.5.2.1.24.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.24.3 - SALIDA PARA INTERRUPTOR BIPOLAR TRIPLE
  UPDATE catalogo_partidas SET precio_unitario=44.35, cantidad_presupuesto=36.0 WHERE codigo='OE.5.2.1.24.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.1.24.4 - SALIDA PARA INTERRUPTOR BIPOLAR DE CONMUTACION SIMPLE
  UPDATE catalogo_partidas SET precio_unitario=44.35, cantidad_presupuesto=132.0 WHERE codigo='OE.5.2.1.24.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.2 - CAJAS DE PASO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.2.1 - Caja de Paso F°G° Pesado biselada con Tapa 100 x 50 mm(OCTOGONAL)
  UPDATE catalogo_partidas SET precio_unitario=17.17, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.2.2 - Caja de Paso F°G° Pesado con tapa biselada 100 x 55 x 50 mm(RECTANGULAR)
  UPDATE catalogo_partidas SET precio_unitario=18.17, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.2.3 - Caja de Paso de FºGº Pesado con tapa Biselada 150x150x100 mm (Derivacion tuberia conduit con pvc)
  UPDATE catalogo_partidas SET precio_unitario=24.17, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.2.4 - Caja de Paso de FºGº Pesado con tapa Biselada 200x200x150 mm (Derivacion tuberia conduit con pvc)
  UPDATE catalogo_partidas SET precio_unitario=49.31, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.2.5 - Caja de Paso de FºGº Pesado con tapa Biselada 300x300x200 mm
  UPDATE catalogo_partidas SET precio_unitario=94.2, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.2.6 - Salida de Fuerza Caja con tapa de FºGº 100 x 100 x 100 mm. Hermetica para piso
  UPDATE catalogo_partidas SET precio_unitario=55.31, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.2.7 - PINTADO Y SEÑALIZACIÓN DE CAJAS DE PASO
  UPDATE catalogo_partidas SET precio_unitario=1.91, cantidad_presupuesto=4328.0 WHERE codigo='OE.5.2.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.2.8 - INSTALACIÓN DE CAJA DE PASO ADOSABLE DE F°G° TIPO PESADO 10CMX10CMX5CM
  UPDATE catalogo_partidas SET precio_unitario=23.94, cantidad_presupuesto=4328.0 WHERE codigo='OE.5.2.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3 - CANALIZACIONES, CONDUCTOS O TUBERÍAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.1 - Tubería Subterranea para Alimentadores  PVC SAP NTP 399.006 DE 100 mm
  UPDATE catalogo_partidas SET precio_unitario=22.24, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.2 - Tubería Empotrada para Alimentadores  PVC SAP NTP 399.006 DE 80 mm
  UPDATE catalogo_partidas SET precio_unitario=14.35, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.3 - Tubería Empotrada para Alimentadores  PVC SAP NTP 399.006 DE 40 mm
  UPDATE catalogo_partidas SET precio_unitario=14.22, cantidad_presupuesto=86.6 WHERE codigo='OE.5.2.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.4 - Tubería Empotrada para Alimentadores  PVC SAP NTP 399.006 DE 35 mm
  UPDATE catalogo_partidas SET precio_unitario=13.72, cantidad_presupuesto=66.0 WHERE codigo='OE.5.2.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.5 - Tubería Empotrada para Alimentadores  PVC SAP NTP 399.006 DE 25 mm
  UPDATE catalogo_partidas SET precio_unitario=13.54, cantidad_presupuesto=1050.0 WHERE codigo='OE.5.2.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.6 - Tubería Empotrada Alumbrado y Tomacorrientes  PVC SAP NTP 399.006 DE 20 mm
  UPDATE catalogo_partidas SET precio_unitario=6.93, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.7 - Unión PVC SAP NTP 399.006 DE 100 mm
  UPDATE catalogo_partidas SET precio_unitario=12.62, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.8 - Unión PVC SAP NTP 399.006 DE 80 mm
  UPDATE catalogo_partidas SET precio_unitario=8.97, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.9 - Unión PVC SAP NTP 399.006 DE 40 mm
  UPDATE catalogo_partidas SET precio_unitario=5.35, cantidad_presupuesto=4.0 WHERE codigo='OE.5.2.3.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.10 - Unión PVC SAP NTP 399.006 DE 35 mm
  UPDATE catalogo_partidas SET precio_unitario=6.64, cantidad_presupuesto=4.0 WHERE codigo='OE.5.2.3.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.11 - Unión PVC SAP NTP 399.006 DE 25 mm
  UPDATE catalogo_partidas SET precio_unitario=4.65, cantidad_presupuesto=50.0 WHERE codigo='OE.5.2.3.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.12 - Unión PVC SAP NTP 399.006 DE 20 mm
  UPDATE catalogo_partidas SET precio_unitario=4.22, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.13 - Curva PVC SAP NTP 399.006 DE 100 mm
  UPDATE catalogo_partidas SET precio_unitario=28.32, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.14 - Curva PVC SAP NTP 399.006 DE 80 mm
  UPDATE catalogo_partidas SET precio_unitario=16.62, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.15 - Curva PVC SAP NTP 399.006 DE 40 mm
  UPDATE catalogo_partidas SET precio_unitario=10.12, cantidad_presupuesto=4.0 WHERE codigo='OE.5.2.3.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.16 - Curva PVC SAP NTP 399.006 DE 35mm
  UPDATE catalogo_partidas SET precio_unitario=8.31, cantidad_presupuesto=4.0 WHERE codigo='OE.5.2.3.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.17 - Curva PVC SAP NTP 399.006 DE 25mm
  UPDATE catalogo_partidas SET precio_unitario=6.43, cantidad_presupuesto=50.0 WHERE codigo='OE.5.2.3.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.18 - Curva PVC SAP NTP 399.006 DE 20 mm
  UPDATE catalogo_partidas SET precio_unitario=4.89, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.19 - Conector para caja PVC SAP NTP 399.006 DE 100 mm
  UPDATE catalogo_partidas SET precio_unitario=7.32, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.20 - Conector para caja PVC SAP NTP 399.006 DE 80 mm
  UPDATE catalogo_partidas SET precio_unitario=6.51, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.21 - Conector para caja PVC SAP NTP 399.006 DE 40 mm
  UPDATE catalogo_partidas SET precio_unitario=5.01, cantidad_presupuesto=4.0 WHERE codigo='OE.5.2.3.21' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.22 - Conector para caja PVC SAP NTP 399.006 DE 35 mm
  UPDATE catalogo_partidas SET precio_unitario=5.62, cantidad_presupuesto=4.0 WHERE codigo='OE.5.2.3.22' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.23 - Conector para caja PVC SAP NTP 399.006 DE 25 mm
  UPDATE catalogo_partidas SET precio_unitario=4.14, cantidad_presupuesto=50.0 WHERE codigo='OE.5.2.3.23' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.24 - Conector para caja PVC SAP NTP 399.006 DE 20 mm
  UPDATE catalogo_partidas SET precio_unitario=3.88, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.24' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.25 - Tubería METALICO conduit EMT 65 mm
  UPDATE catalogo_partidas SET precio_unitario=20.51, cantidad_presupuesto=46.2 WHERE codigo='OE.5.2.3.25' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.26 - Tubería METALICO CONDUIT EMT 50 mm
  UPDATE catalogo_partidas SET precio_unitario=20.5, cantidad_presupuesto=117.6 WHERE codigo='OE.5.2.3.26' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.27 - Tubería METALICO CONDUIT EMT 40 mm
  UPDATE catalogo_partidas SET precio_unitario=20.17, cantidad_presupuesto=375.9 WHERE codigo='OE.5.2.3.27' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.28 - Tubería METALICO CONDUIT EMT de 25 mm
  UPDATE catalogo_partidas SET precio_unitario=18.83, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.28' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.29 - Tubería METALICO CONDUIT EMT 20 mm
  UPDATE catalogo_partidas SET precio_unitario=16.17, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.29' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.30 - Tubería METALICO conduit EMT Flexible de 20 mm
  UPDATE catalogo_partidas SET precio_unitario=13.41, cantidad_presupuesto=2672.26 WHERE codigo='OE.5.2.3.30' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.31 - Unión METALICO CONDUIT EMT de 65mm
  UPDATE catalogo_partidas SET precio_unitario=22.82, cantidad_presupuesto=44.0 WHERE codigo='OE.5.2.3.31' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.32 - Unión METALICO CONDUIT EMT de 50mm
  UPDATE catalogo_partidas SET precio_unitario=22.82, cantidad_presupuesto=112.0 WHERE codigo='OE.5.2.3.32' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.33 - Unión METALICO CONDUIT EMT de 40mm
  UPDATE catalogo_partidas SET precio_unitario=22.82, cantidad_presupuesto=358.0 WHERE codigo='OE.5.2.3.33' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.34 - Unión METALICO Conduit EMT de 25mm
  UPDATE catalogo_partidas SET precio_unitario=36.44, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.34' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.35 - Unión METALICO CONDUIT EMT de 20mm
  UPDATE catalogo_partidas SET precio_unitario=22.82, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.35' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.36 - Curva METALICO CONDUIT EMT de 65 mm
  UPDATE catalogo_partidas SET precio_unitario=6.59, cantidad_presupuesto=22.0 WHERE codigo='OE.5.2.3.36' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.37 - Curva METALICO CONDUIT EMT de 50 mm
  UPDATE catalogo_partidas SET precio_unitario=6.59, cantidad_presupuesto=56.0 WHERE codigo='OE.5.2.3.37' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.38 - Curva METALICO CONDUIT EMT de 40 mm
  UPDATE catalogo_partidas SET precio_unitario=6.59, cantidad_presupuesto=179.0 WHERE codigo='OE.5.2.3.38' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.39 - Curva METALICO Conduit EMT de 25 mm
  UPDATE catalogo_partidas SET precio_unitario=16.81, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.39' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.40 - Curva METALICO CONDUIT EMT de 20 mm
  UPDATE catalogo_partidas SET precio_unitario=6.59, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.40' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.41 - Conector METALICO CONDUIT EMT de 65 mm
  UPDATE catalogo_partidas SET precio_unitario=6.59, cantidad_presupuesto=44.0 WHERE codigo='OE.5.2.3.41' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.42 - Conector METALICO CONDUIT EMT de 50 mm
  UPDATE catalogo_partidas SET precio_unitario=15.16, cantidad_presupuesto=112.0 WHERE codigo='OE.5.2.3.42' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.43 - Conector METALICO CONDUIT EMT de 40 mm
  UPDATE catalogo_partidas SET precio_unitario=14.31, cantidad_presupuesto=358.0 WHERE codigo='OE.5.2.3.43' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.44 - Conector METALICO CONDUIT EMT de 25 mm
  UPDATE catalogo_partidas SET precio_unitario=13.08, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.44' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.45 - Conector METALICO CONDUIT EMT de 20 mm
  UPDATE catalogo_partidas SET precio_unitario=8.31, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.3.45' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.46 - Prensaestopa METALICO CONDUIT EMT 65mm
  UPDATE catalogo_partidas SET precio_unitario=61.01, cantidad_presupuesto=44.0 WHERE codigo='OE.5.2.3.46' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.47 - Prensaestopa METALICO CONDUIT EMT 50mm
  UPDATE catalogo_partidas SET precio_unitario=52.51, cantidad_presupuesto=112.0 WHERE codigo='OE.5.2.3.47' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.48 - Prensaestopa METALICO CONDUIT EMT 40mm
  UPDATE catalogo_partidas SET precio_unitario=42.51, cantidad_presupuesto=358.0 WHERE codigo='OE.5.2.3.48' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.49 - Prensaestopa METALICO CONDUIT EMT 35mm
  UPDATE catalogo_partidas SET precio_unitario=38.01, cantidad_presupuesto=66.0 WHERE codigo='OE.5.2.3.49' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.50 - Prensaestopa METALICO CONDUIT EMT 25mm
  UPDATE catalogo_partidas SET precio_unitario=33.01, cantidad_presupuesto=80.0 WHERE codigo='OE.5.2.3.50' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.51 - Prensaestopa METALICO CONDUIT EMT 20mm
  UPDATE catalogo_partidas SET precio_unitario=23.11, cantidad_presupuesto=5640.0 WHERE codigo='OE.5.2.3.51' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.52 - OBRAS PRELIMINARES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.3.52' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.52.1 - TRAZO Y REPLANTEO DE ALIMENTADORES PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=3.79, cantidad_presupuesto=153.6 WHERE codigo='OE.5.2.3.52.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.52.2 - TRAZO Y REPLANTEO DE CIRCUITOS DERIVADOS DE INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=6.76, cantidad_presupuesto=28296.02 WHERE codigo='OE.5.2.3.52.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.52.3 - TRAZO Y REPLANTEO DE INSTALACION DE BANDEJAS TIPO MALLA PORTACABLE
  UPDATE catalogo_partidas SET precio_unitario=12.47, cantidad_presupuesto=1138.19 WHERE codigo='OE.5.2.3.52.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.52.4 - PICADO Y CORTE DE MUROS PARA INSTALACIÓN DE TUBERÍA PVC
  UPDATE catalogo_partidas SET precio_unitario=22.81, cantidad_presupuesto=0.9 WHERE codigo='OE.5.2.3.52.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.53 - MOVIMIENTO DE TIERRAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.3.53' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.53.1 - EXCAVACIÓN DE ZANJA PARA ALIMENTADORES DE INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=22.02, cantidad_presupuesto=115.2 WHERE codigo='OE.5.2.3.53.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.53.2 - CAMA DE ARENA (NSTALACIONES ELECTRICAS) e=20cm
  UPDATE catalogo_partidas SET precio_unitario=189.98, cantidad_presupuesto=30.72 WHERE codigo='OE.5.2.3.53.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.53.3 - RELLENO DE ZANJA PARA ALIMENTADORES
  UPDATE catalogo_partidas SET precio_unitario=34.48, cantidad_presupuesto=84.48 WHERE codigo='OE.5.2.3.53.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.53.4 - PROTECCION PARA ALIMENTADORES
  UPDATE catalogo_partidas SET precio_unitario=21.87, cantidad_presupuesto=256.0 WHERE codigo='OE.5.2.3.53.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.53.5 - CINTA SEÑALIZADORA
  UPDATE catalogo_partidas SET precio_unitario=2.93, cantidad_presupuesto=256.0 WHERE codigo='OE.5.2.3.53.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.53.6 - ELIMINACIÓN DE MATERIAL EXCEDENTE CON MAQUINARIA A DME D=8KM
  UPDATE catalogo_partidas SET precio_unitario=37.02, cantidad_presupuesto=221.41 WHERE codigo='OE.5.2.3.53.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54 - DUCTOS Y TUBERIAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.3.54' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.1 - TUBERIA SUBTERRANEA DE PVC-SAP ELECTRICA DE Ø100 mm
  UPDATE catalogo_partidas SET precio_unitario=55.71, cantidad_presupuesto=1022.64 WHERE codigo='OE.5.2.3.54.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.2 - TUBERIA SUBTERRANEA DE PVC-SAP ELECTRICA DE Ø80 mm
  UPDATE catalogo_partidas SET precio_unitario=47.5, cantidad_presupuesto=826.6 WHERE codigo='OE.5.2.3.54.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.3 - TUBERIA SUBTERRANEA DE PVC-SAP ELECTRICA DE Ø50 mm
  UPDATE catalogo_partidas SET precio_unitario=31.79, cantidad_presupuesto=1909.52 WHERE codigo='OE.5.2.3.54.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.4 - UNION PVC SAP NTP 399.006 DE 100 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=24.61, cantidad_presupuesto=256.0 WHERE codigo='OE.5.2.3.54.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.5 - UNION PVC SAP NTP 399.006 DE 80 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=19.16, cantidad_presupuesto=207.0 WHERE codigo='OE.5.2.3.54.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.6 - UNION PVC SAP NTP 399.006 DE 50 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=12.8, cantidad_presupuesto=477.0 WHERE codigo='OE.5.2.3.54.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.7 - CURVA PVC SAP NTP 399.006 DE 100 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=81.88, cantidad_presupuesto=170.0 WHERE codigo='OE.5.2.3.54.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.8 - CURVA PVC SAP NTP 399.006 DE 80 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=56.83, cantidad_presupuesto=138.0 WHERE codigo='OE.5.2.3.54.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.9 - CONECTOR PVC SAP NTP 399.006 DE 100 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=17.71, cantidad_presupuesto=170.0 WHERE codigo='OE.5.2.3.54.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.10 - CONECTOR PVC SAP NTP 399.006 DE 80 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=15.13, cantidad_presupuesto=138.0 WHERE codigo='OE.5.2.3.54.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.11 - CONECTOR PVC SAP NTP 399.006 DE 20 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=8.06, cantidad_presupuesto=3044.0 WHERE codigo='OE.5.2.3.54.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.12 - TUBERIA METALICA CONDUIT EMT 20 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=23.76, cantidad_presupuesto=28296.02 WHERE codigo='OE.5.2.3.54.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.13 - TUBERIA METALICA CONDUIT EMT 25 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=27.22, cantidad_presupuesto=2092.74 WHERE codigo='OE.5.2.3.54.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.14 - UNION METALICO CONDUIT EMT de 20 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=9.01, cantidad_presupuesto=9432.0 WHERE codigo='OE.5.2.3.54.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.15 - UNION METALICO CONDUIT EMT de 25 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=9.32, cantidad_presupuesto=697.0 WHERE codigo='OE.5.2.3.54.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.16 - CURVA METALICO CONDUIT EMT de 20 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=9.82, cantidad_presupuesto=250.0 WHERE codigo='OE.5.2.3.54.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.17 - CURVA METALICO CONDUIT EMT de 25 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=11.72, cantidad_presupuesto=60.0 WHERE codigo='OE.5.2.3.54.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.18 - CONECTOR METALICO CONDUIT EMT de 20 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=9.01, cantidad_presupuesto=21324.0 WHERE codigo='OE.5.2.3.54.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.19 - CONECTOR METALICO CONDUIT EMT de 25 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=9.21, cantidad_presupuesto=360.0 WHERE codigo='OE.5.2.3.54.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.20 - PRENSAESTOPA METALICO CONDUIT EMT de 20 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=23.56, cantidad_presupuesto=3312.0 WHERE codigo='OE.5.2.3.54.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.21 - PRENSAESTOPA METALICO CONDUIT EMT de 25 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=33.56, cantidad_presupuesto=177.0 WHERE codigo='OE.5.2.3.54.21' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.22 - TUBERIA METALICA CONDUIT FLEXIBLE DE 20 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=27.16, cantidad_presupuesto=1738.8 WHERE codigo='OE.5.2.3.54.22' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.3.54.23 - TUBERIA METALICA CONDUIT FLEXIBLE DE 25 mm PARA INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=29.8, cantidad_presupuesto=88.55 WHERE codigo='OE.5.2.3.54.23' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.4 - BANDEJAS TIPO MALLA ELECTROZINCADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.4.1 - Bandeja Tipo Malla electrozincado 54x600x3000 mm con aterramiento incluye accesorio de instalacion.
  UPDATE catalogo_partidas SET precio_unitario=607.13, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.4.2 - Bandeja Tipo Malla electrozincado 54x450x3000 mm con aterramiento incluye accesorio de instalacion.
  UPDATE catalogo_partidas SET precio_unitario=489.13, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.4.3 - Bandeja Tipo Malla electrozincado 54x300x3000 mm con aterramiento incluye accesorio de instalacion.
  UPDATE catalogo_partidas SET precio_unitario=331.45, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.4.4 - Bandeja Tipo Malla electrozincado 54x200x3000 mm con aterramiento incluye accesorio de instalacion.
  UPDATE catalogo_partidas SET precio_unitario=194.13, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.4.5 - INSTALACIÓN DE SISTEMA DE SUJECION PARA BANDEJA TIPO MALLA ELECTROZINCADO
  UPDATE catalogo_partidas SET precio_unitario=95.94, cantidad_presupuesto=285.0 WHERE codigo='OE.5.2.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.4.6 - BANDEJA TIPO MALLA ELECTROZINCADO DE 105X600X3000 MM
  UPDATE catalogo_partidas SET precio_unitario=764.76, cantidad_presupuesto=138.86 WHERE codigo='OE.5.2.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.4.7 - BANDEJA TIPO MALLA ELECTROZINCADO DE 60X500X3000 MM
  UPDATE catalogo_partidas SET precio_unitario=299.02, cantidad_presupuesto=291.41 WHERE codigo='OE.5.2.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.4.8 - BANDEJA TIPO MALLA ELECTROZINCADO DE 60X300X3000 MM
  UPDATE catalogo_partidas SET precio_unitario=229.02, cantidad_presupuesto=240.95 WHERE codigo='OE.5.2.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.4.9 - BANDEJA TIPO MALLA ELECTROZINCADO DE 60X200X3000 MM
  UPDATE catalogo_partidas SET precio_unitario=169.02, cantidad_presupuesto=466.97 WHERE codigo='OE.5.2.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.4.10 - INSTALACIÓN DE ATERRAMIENTO PARA BANDEJAS TIPO MALLA ELECTROZINCADO
  UPDATE catalogo_partidas SET precio_unitario=41.13, cantidad_presupuesto=1138.19 WHERE codigo='OE.5.2.4.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.5 - CONDUCTORES Y CABLES DE ENERGIA EN TUBERIAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.5.1 - Cable NH-90 DE 4 mm2 ALUMBRADO + TOMACORRIENTES
  UPDATE catalogo_partidas SET precio_unitario=6.69, cantidad_presupuesto=60592.49 WHERE codigo='OE.5.2.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.5.2 - Cable NH-90 DE 1x6 mm2 Puntos de Fuerza
  UPDATE catalogo_partidas SET precio_unitario=8.96, cantidad_presupuesto=1430.1 WHERE codigo='OE.5.2.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.5.3 - Cable N2XOH  de 1 x 6  mm2 Alimentadores
  UPDATE catalogo_partidas SET precio_unitario=8.91, cantidad_presupuesto=24051.25 WHERE codigo='OE.5.2.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.5.4 - Cable N2XOH  de 1 x 10 mm2 Alimentadores
  UPDATE catalogo_partidas SET precio_unitario=12.32, cantidad_presupuesto=5678.3 WHERE codigo='OE.5.2.5.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.5.5 - Cable N2XOH  de 1 x 16 mm2 Alimentadores
  UPDATE catalogo_partidas SET precio_unitario=14.42, cantidad_presupuesto=2341.45 WHERE codigo='OE.5.2.5.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.5.6 - Cable N2XOH  de 1 x 25 mm2 Alimentadores
  UPDATE catalogo_partidas SET precio_unitario=10.73, cantidad_presupuesto=1652.81 WHERE codigo='OE.5.2.5.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.5.7 - Cable N2XOH  de 1 x 35 mm2 Alimentadores
  UPDATE catalogo_partidas SET precio_unitario=18.65, cantidad_presupuesto=838.16 WHERE codigo='OE.5.2.5.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.5.8 - Cable N2XOH  de 1 x 50 mm2 Alimentadores
  UPDATE catalogo_partidas SET precio_unitario=32.84, cantidad_presupuesto=2257.82 WHERE codigo='OE.5.2.5.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.5.9 - Cable N2XOH  de 1 x 70 mm2 Alimentadores
  UPDATE catalogo_partidas SET precio_unitario=49.25, cantidad_presupuesto=1592.27 WHERE codigo='OE.5.2.5.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.5.10 - Cable N2XOH  de 1 x 95 mm2 Alimentadores
  UPDATE catalogo_partidas SET precio_unitario=62.25, cantidad_presupuesto=8706.29 WHERE codigo='OE.5.2.5.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.5.11 - Cable N2XOH  de 1 x 120 mm2 Alimentadores
  UPDATE catalogo_partidas SET precio_unitario=4.83, cantidad_presupuesto=399.0 WHERE codigo='OE.5.2.5.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.5.12 - Cable Cu Desnudo Cableado  1 x 50 mm2
  UPDATE catalogo_partidas SET precio_unitario=27.89, cantidad_presupuesto=112.35 WHERE codigo='OE.5.2.5.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.5.13 - Cable Cu Desnudo Cableado  1 x 35 mm2
  UPDATE catalogo_partidas SET precio_unitario=18.99, cantidad_presupuesto=28.35 WHERE codigo='OE.5.2.5.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.5.14 - Cable Cu Desnudo Cableado 1 x 25 mm2
  UPDATE catalogo_partidas SET precio_unitario=1.07, cantidad_presupuesto=349.65 WHERE codigo='OE.5.2.5.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.5.15 - Pruebas Eléctricas ( Aislamiento y Continuidad). DE CIRCUITOS DE ALUMBRADO, TOMACORRIENTES Y ALIMENTADORES
  UPDATE catalogo_partidas SET precio_unitario=1800.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.2.5.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.6 - SISTEMA DE CONDUCTOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.6.1 - Canaleta para conductor enterrado 0.80 x 1.1 m
  UPDATE catalogo_partidas SET precio_unitario=56.0, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.6.2 - Buzon Electroducto de Concreto Armado con tapa 0.60 x0.60 x 0.60m
  UPDATE catalogo_partidas SET precio_unitario=374.71, cantidad_presupuesto=0.0 WHERE codigo='OE.5.2.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.6.3 - BUZONES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.6.3.1 - EXCAVACIÓN DE HOYO PARA BUZÓN DE PASO DE INSTALACIONES ELECTRICAS
  UPDATE catalogo_partidas SET precio_unitario=17.67, cantidad_presupuesto=36.19 WHERE codigo='OE.5.2.6.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.6.3.2 - ENCOFRADO Y DESENCOFRADO PARA BUZONES DE PASO
  UPDATE catalogo_partidas SET precio_unitario=111.72, cantidad_presupuesto=104.12 WHERE codigo='OE.5.2.6.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.6.3.3 - ACERO DE REFUERZO PARA BUZON DE PASO fy=4200 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=6.78, cantidad_presupuesto=1038.32 WHERE codigo='OE.5.2.6.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.6.3.4 - CONCRETO EN BUZONES f'c=210 kg/cm2
  UPDATE catalogo_partidas SET precio_unitario=713.25, cantidad_presupuesto=13.25 WHERE codigo='OE.5.2.6.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7 - TABLEROS GENERAL Y PRINCIPALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.1 - TABLEROS AUTOSOPORTADOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.1.1 - TABLERO AUTOSOPORTADO CON TERMOMAGNETICOS REGULABLES DE 01 IGTF + 04 ITF DE 380/220 VOLTIOS, 600 KVA
  UPDATE catalogo_partidas SET precio_unitario=18202.94, cantidad_presupuesto=25.0 WHERE codigo='OE.5.2.7.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.1.2 - TABLERO AUTOSOPORTADO CON TERMOMAGNETICOS REGULABLES DE 01 IGTF + 06 ITF DE 380/220 VOLTIOS, 600 KVA
  UPDATE catalogo_partidas SET precio_unitario=18705.94, cantidad_presupuesto=26.0 WHERE codigo='OE.5.2.7.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.1.3 - TABLERO AUTOSOPORTADO CON TERMOMAGNETICOS REGULABLES DE 01 IGTF + 08 ITF DE 380/220 VOLTIOS, 600 KVA
  UPDATE catalogo_partidas SET precio_unitario=19219.94, cantidad_presupuesto=9.0 WHERE codigo='OE.5.2.7.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.1.4 - TABLERO AUTOSOPORTADO CON TERMOMAGNETICOS REGULABLES DE 01 IGTF + 10 ITF DE 380/220 VOLTIOS, 600 KVA
  UPDATE catalogo_partidas SET precio_unitario=19682.94, cantidad_presupuesto=2.0 WHERE codigo='OE.5.2.7.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.1.5 - TABLERO AUTOSOPORTADO CON TERMOMAGNETICOS REGULABLES DE 01 IGTF + 12 ITF DE 380/220 VOLTIOS, 600 KVA
  UPDATE catalogo_partidas SET precio_unitario=20180.94, cantidad_presupuesto=4.0 WHERE codigo='OE.5.2.7.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.1.6 - TABLERO AUTOSOPORTADO CON TERMOMAGNETICOS REGULABLES DE 01 IGTF DE 380/220 VOLTIOS, 600 KVA
  UPDATE catalogo_partidas SET precio_unitario=20752.94, cantidad_presupuesto=9.0 WHERE codigo='OE.5.2.7.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.2 - TABLEROS DE DISTRIBUCION
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.7.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.2.1 - TABLERO DE DISTRIBUCIÓN DE 01 ITF + 04 IT +01 RIEL DE 04 ID
  UPDATE catalogo_partidas SET precio_unitario=645.88, cantidad_presupuesto=98.0 WHERE codigo='OE.5.2.7.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.2.2 - TABLERO DE DISTRIBUCIÓN DE 01 ITF + 06 IT +01 RIEL DE 06 ID
  UPDATE catalogo_partidas SET precio_unitario=702.88, cantidad_presupuesto=69.0 WHERE codigo='OE.5.2.7.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.2.3 - TABLERO DE DISTRIBUCIÓN DE 01 ITF + 08 IT +02 RIEL DE 08 ID
  UPDATE catalogo_partidas SET precio_unitario=749.88, cantidad_presupuesto=26.0 WHERE codigo='OE.5.2.7.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.2.4 - TABLERO DE DISTRIBUCIÓN DE 01 ITF + 10 IT +02 RIEL DE 10 ID
  UPDATE catalogo_partidas SET precio_unitario=790.88, cantidad_presupuesto=7.0 WHERE codigo='OE.5.2.7.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.2.5 - TABLERO DE DISTRIBUCIÓN DE 01 ITF + 02 IT +02 RIEL DE 12 ID
  UPDATE catalogo_partidas SET precio_unitario=838.88, cantidad_presupuesto=4.0 WHERE codigo='OE.5.2.7.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.3 - TABLERO DE ASILAMIENTO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.7.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.3.1 - TABLERO DE AISLAMIENTO EMPOTRABLE DE 01 ITF + 04 IT + 01 RIEL DE 04 ID
  UPDATE catalogo_partidas SET precio_unitario=16181.77, cantidad_presupuesto=13.0 WHERE codigo='OE.5.2.7.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.3.2 - TABLERO DE AISLAMIENTO EMPOTRABLE DE 01 ITF + 06 IT + 01 RIEL  DE 06 ID
  UPDATE catalogo_partidas SET precio_unitario=16381.77, cantidad_presupuesto=1.0 WHERE codigo='OE.5.2.7.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.4 - TERMINALES PARA CONDUCTORES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.7.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.4.1 - TERMINALES PARA CONDUCTORES DE 4 MM2
  UPDATE catalogo_partidas SET precio_unitario=1.63, cantidad_presupuesto=7750.0 WHERE codigo='OE.5.2.7.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.4.2 - TERMINALES PARA CONDUCTORES DE 6 MM2
  UPDATE catalogo_partidas SET precio_unitario=1.77, cantidad_presupuesto=2000.0 WHERE codigo='OE.5.2.7.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.4.3 - TERMINALES PARA CONDUCTORES DE 10 MM2
  UPDATE catalogo_partidas SET precio_unitario=2.56, cantidad_presupuesto=1280.0 WHERE codigo='OE.5.2.7.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.4.4 - TERMINALES PARA CONDUCTORES DE 16 MM2
  UPDATE catalogo_partidas SET precio_unitario=2.9, cantidad_presupuesto=420.0 WHERE codigo='OE.5.2.7.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.4.5 - TERMINALES PARA CONDUCTORES DE 25 MM2
  UPDATE catalogo_partidas SET precio_unitario=3.5, cantidad_presupuesto=180.0 WHERE codigo='OE.5.2.7.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.4.6 - TERMINALES PARA CONDUCTORES DE 35 MM2
  UPDATE catalogo_partidas SET precio_unitario=5.5, cantidad_presupuesto=140.0 WHERE codigo='OE.5.2.7.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.4.7 - TERMINALES PARA CONDUCTORES DE 50 MM2
  UPDATE catalogo_partidas SET precio_unitario=7.17, cantidad_presupuesto=220.0 WHERE codigo='OE.5.2.7.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.4.8 - TERMINALES PARA CONDUCTORES DE 70 MM2
  UPDATE catalogo_partidas SET precio_unitario=10.5, cantidad_presupuesto=120.0 WHERE codigo='OE.5.2.7.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.4.9 - TERMINALES PARA CONDUCTORES DE 95 MM2
  UPDATE catalogo_partidas SET precio_unitario=13.35, cantidad_presupuesto=180.0 WHERE codigo='OE.5.2.7.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.4.10 - TERMINALES PARA CONDUCTORES DE 120 MM2
  UPDATE catalogo_partidas SET precio_unitario=15.99, cantidad_presupuesto=140.0 WHERE codigo='OE.5.2.7.4.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.4.11 - MARCADORES DE FASE PARA CONDUCTORES
  UPDATE catalogo_partidas SET precio_unitario=22.35, cantidad_presupuesto=13200.0 WHERE codigo='OE.5.2.7.4.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.4.12 - LÁMINAS DE SEÑALIZACIÓN CONTRA RIESGO ELÉCTRICO PARA TABLEROS
  UPDATE catalogo_partidas SET precio_unitario=4.9, cantidad_presupuesto=287.0 WHERE codigo='OE.5.2.7.4.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.7.4.13 - TAPAS DE RESERVA PARA TABLEROS
  UPDATE catalogo_partidas SET precio_unitario=3.9, cantidad_presupuesto=574.0 WHERE codigo='OE.5.2.7.4.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8 - DISPOSITIVOS DE MANIOBRA Y PROTECCION
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.1 - INTERRUPTOR TERMOMAGNETICO 2x20 A
  UPDATE catalogo_partidas SET precio_unitario=83.62, cantidad_presupuesto=653.0 WHERE codigo='OE.5.2.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.2 - INTERRUPTOR TERMOMAGNETICO 2x25 A
  UPDATE catalogo_partidas SET precio_unitario=86.61, cantidad_presupuesto=91.0 WHERE codigo='OE.5.2.8.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.3 - INTERRUPTOR TERMOMAGNETICO DIFERENCIAL 2x25 A 30 Ma
  UPDATE catalogo_partidas SET precio_unitario=183.16, cantidad_presupuesto=744.0 WHERE codigo='OE.5.2.8.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.4 - INTERRUPTOR TERMOMAGNETICO 4x25 A
  UPDATE catalogo_partidas SET precio_unitario=341.11, cantidad_presupuesto=144.0 WHERE codigo='OE.5.2.8.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.5 - INTERRUPTOR TERMOMAGNETICO 4x32 A
  UPDATE catalogo_partidas SET precio_unitario=341.11, cantidad_presupuesto=5.0 WHERE codigo='OE.5.2.8.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.6 - INTERRUPTOR TERMOMAGNETICO 4x40 A
  UPDATE catalogo_partidas SET precio_unitario=341.11, cantidad_presupuesto=2.0 WHERE codigo='OE.5.2.8.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.7 - INTERRUPTOR TERMOMAGNETICO 4x80 A
  UPDATE catalogo_partidas SET precio_unitario=621.11, cantidad_presupuesto=2.0 WHERE codigo='OE.5.2.8.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.8 - INTERRUPTOR TERMOMAGNETICO 4x250 A
  UPDATE catalogo_partidas SET precio_unitario=1468.11, cantidad_presupuesto=2.0 WHERE codigo='OE.5.2.8.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.9 - INTERRUPTOR TERMOMAGNETICO DE FUERZA 4x25 A
  UPDATE catalogo_partidas SET precio_unitario=341.11, cantidad_presupuesto=386.0 WHERE codigo='OE.5.2.8.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.10 - INTERRUPTOR TERMOMAGNETICO DE FUERZA 4x32 A
  UPDATE catalogo_partidas SET precio_unitario=341.11, cantidad_presupuesto=83.0 WHERE codigo='OE.5.2.8.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.11 - INTERRUPTOR TERMOMAGNETICO DE FUERZA 4x40 A
  UPDATE catalogo_partidas SET precio_unitario=341.11, cantidad_presupuesto=30.0 WHERE codigo='OE.5.2.8.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.12 - INTERRUPTOR TERMOMAGNETICO DE FUERZA 4x63 A
  UPDATE catalogo_partidas SET precio_unitario=341.11, cantidad_presupuesto=18.0 WHERE codigo='OE.5.2.8.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.13 - INTERRUPTOR TERMOMAGNETICO DE FUERZA 4x80 A
  UPDATE catalogo_partidas SET precio_unitario=621.11, cantidad_presupuesto=18.0 WHERE codigo='OE.5.2.8.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.14 - INTERRUPTOR TERMOMAGNETICO DE FUERZA 4x100 A
  UPDATE catalogo_partidas SET precio_unitario=811.11, cantidad_presupuesto=8.0 WHERE codigo='OE.5.2.8.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.15 - INTERRUPTOR TERMOMAGNETICO DE FUERZA 4x120 A
  UPDATE catalogo_partidas SET precio_unitario=901.11, cantidad_presupuesto=4.0 WHERE codigo='OE.5.2.8.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.16 - INTERRUPTOR TERMOMAGNETICO DE FUERZA 4x140 A
  UPDATE catalogo_partidas SET precio_unitario=959.11, cantidad_presupuesto=5.0 WHERE codigo='OE.5.2.8.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.17 - INTERRUPTOR TERMOMAGNETICO DE FUERZA 4x150 A
  UPDATE catalogo_partidas SET precio_unitario=986.11, cantidad_presupuesto=4.0 WHERE codigo='OE.5.2.8.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.18 - INTERRUPTOR TERMOMAGNETICO DE FUERZA 4x160 A
  UPDATE catalogo_partidas SET precio_unitario=1076.11, cantidad_presupuesto=2.0 WHERE codigo='OE.5.2.8.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.19 - INTERRUPTOR TERMOMAGNETICO DE FUERZA 4x180 A
  UPDATE catalogo_partidas SET precio_unitario=1251.11, cantidad_presupuesto=2.0 WHERE codigo='OE.5.2.8.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.20 - INTERRUPTOR TERMOMAGNETICO DE FUERZA 4x250 A
  UPDATE catalogo_partidas SET precio_unitario=1468.11, cantidad_presupuesto=6.0 WHERE codigo='OE.5.2.8.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.21 - INTERRUPTOR TERMOMAGNETICO DE FUERZA 4x300 A
  UPDATE catalogo_partidas SET precio_unitario=1501.11, cantidad_presupuesto=2.0 WHERE codigo='OE.5.2.8.21' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.22 - INTERRUPTOR TERMOMAGNETICO DE FUERZA 4x400 A
  UPDATE catalogo_partidas SET precio_unitario=1831.11, cantidad_presupuesto=3.0 WHERE codigo='OE.5.2.8.22' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.23 - INTERRUPTOR TERMOMAGNETICO DE FUERZA 4x600 A
  UPDATE catalogo_partidas SET precio_unitario=3091.11, cantidad_presupuesto=1.0 WHERE codigo='OE.5.2.8.23' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.24 - INTERRUPTOR TERMOMAGNETICO DE FUERZA 4x1000 A
  UPDATE catalogo_partidas SET precio_unitario=3671.11, cantidad_presupuesto=1.0 WHERE codigo='OE.5.2.8.24' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.25 - INTERRUPTOR TERMOMAGNETICO DE FUERZA 4x2000 A
  UPDATE catalogo_partidas SET precio_unitario=7130.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.2.8.25' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.26 - DISPOSITIVO DE PROTECCION CONTRASOBRETENSIONES DPS 100 KVA,
  UPDATE catalogo_partidas SET precio_unitario=2065.77, cantidad_presupuesto=48.0 WHERE codigo='OE.5.2.8.26' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.27 - PRUEBA DE SELECTIVIDAD ELECTRICA
  UPDATE catalogo_partidas SET precio_unitario=4500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.2.8.27' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.8.28 - PRUEBA DE BALANCEO DE CARGA
  UPDATE catalogo_partidas SET precio_unitario=9900.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.2.8.28' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.9 - TRASLADO DE MATERIALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.9.1 - ACARREO DE MATERIALES ELECTRICOS MANUAL EN OBRA D>150m
  UPDATE catalogo_partidas SET precio_unitario=0.15, cantidad_presupuesto=100843.54 WHERE codigo='OE.5.2.9.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.2.9.2 - TRASLADO VERTICAL DE MATERIALES ELECTRICOS EN OBRA H=16m
  UPDATE catalogo_partidas SET precio_unitario=0.2, cantidad_presupuesto=100843.54 WHERE codigo='OE.5.2.9.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.3 - INSTALACION DE PARARRAYOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.3.1 - Pararrayos PDC en Techo., con Dispositivo de Cebado No Radioactivo R = 103 m.
  UPDATE catalogo_partidas SET precio_unitario=8637.32, cantidad_presupuesto=1.0 WHERE codigo='OE.5.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.4 - INSTALACIÓN DE SISTEMA DE PUESTA A TIERRA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.4.1 - Pozo de Puesta a Tierra
  UPDATE catalogo_partidas SET precio_unitario=1831.49, cantidad_presupuesto=31.0 WHERE codigo='OE.5.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.4.2 - Pruebas de Resistencia de Puesta a Tierra
  UPDATE catalogo_partidas SET precio_unitario=708.0, cantidad_presupuesto=31.0 WHERE codigo='OE.5.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.4.3 - OBRAS PRELIMINARES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.4.3.1 - EXCAVACIÓN DE HOYO PARA SISTEMA DE PUESTA A TIERRA
  UPDATE catalogo_partidas SET precio_unitario=13.34, cantidad_presupuesto=117.6 WHERE codigo='OE.5.4.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.4.3.2 - PROTECCION DE HOYO PARA POZO A TIERRA
  UPDATE catalogo_partidas SET precio_unitario=75.63, cantidad_presupuesto=67.2 WHERE codigo='OE.5.4.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.5 - ARTEFACTOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1 - LAMPARAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.1 - Luminaria panel tipo Led 49.5 W, para adosar IP 20, IK2
  UPDATE catalogo_partidas SET precio_unitario=167.54, cantidad_presupuesto=105.0 WHERE codigo='OE.5.5.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.2 - Luminaria panel tipo Led 36 W de 0.30 x 1.20 m para adosar IP 20, IK2
  UPDATE catalogo_partidas SET precio_unitario=167.54, cantidad_presupuesto=8.0 WHERE codigo='OE.5.5.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.3 - Luminaria panel tipo Led 36 W de 0.60 x 0.60 m para empotrar IP 20, IK2
  UPDATE catalogo_partidas SET precio_unitario=146.54, cantidad_presupuesto=469.0 WHERE codigo='OE.5.5.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.4 - Luminaria panel tipo Led 30.5 W de 0.60 x 0.60 m para empotrar IP 20, IK2
  UPDATE catalogo_partidas SET precio_unitario=146.54, cantidad_presupuesto=461.0 WHERE codigo='OE.5.5.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.5 - Luminaria hermética tipo Led 36 W para adosar IP 65, IK08
  UPDATE catalogo_partidas SET precio_unitario=207.54, cantidad_presupuesto=26.0 WHERE codigo='OE.5.5.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.6 - Luminaria hermética tipo Led 36 W para suspender IP 65, IK08
  UPDATE catalogo_partidas SET precio_unitario=207.54, cantidad_presupuesto=154.0 WHERE codigo='OE.5.5.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.7 - Luminaria hermética tipo Led 18 W para suspender IP 65, IK08
  UPDATE catalogo_partidas SET precio_unitario=191.74, cantidad_presupuesto=43.0 WHERE codigo='OE.5.5.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.8 - Luminaria  de luminaria downlight tipo Led 28 W para emptrar IP 20, IK2.
  UPDATE catalogo_partidas SET precio_unitario=152.54, cantidad_presupuesto=313.0 WHERE codigo='OE.5.5.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.9 - Luminaria downlight tipo Led 20.5 W para empotrar IP 20, IK2
  UPDATE catalogo_partidas SET precio_unitario=147.54, cantidad_presupuesto=240.0 WHERE codigo='OE.5.5.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.10 - Luminaria downlight tipo Led 13 W para empotrar IP 20, IK2
  UPDATE catalogo_partidas SET precio_unitario=108.24, cantidad_presupuesto=103.0 WHERE codigo='OE.5.5.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.11 - Luminaria con sensor de movimiento tipo Led 34 W, para adosar IP 20, IK2
  UPDATE catalogo_partidas SET precio_unitario=146.54, cantidad_presupuesto=23.0 WHERE codigo='OE.5.5.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.12 - Luz ultravioleta antigermen (GERMICIDA), de 1 x 30 W, para adosar.
  UPDATE catalogo_partidas SET precio_unitario=238.54, cantidad_presupuesto=16.0 WHERE codigo='OE.5.5.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.13 - Luminaria farola esferica Led 25 W, con brazo tipo antorcha IP 65, IK 2.
  UPDATE catalogo_partidas SET precio_unitario=167.54, cantidad_presupuesto=22.0 WHERE codigo='OE.5.5.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.14 - Luminaria ornamental de exteriores módulo Led 50 W para poste metálico IP 66, IK8 .
  UPDATE catalogo_partidas SET precio_unitario=272.54, cantidad_presupuesto=20.0 WHERE codigo='OE.5.5.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.15 - Luz de emergencia de 16w, de bateria tipo led 1200 Lm, para adosar IP65, IK7
  UPDATE catalogo_partidas SET precio_unitario=206.54, cantidad_presupuesto=364.0 WHERE codigo='OE.5.5.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.16 - Luminaria hermetico panel tipo Led 36 W de 0.60 x 0.60 m para empotrar IP 65, para ambientes esteriles con alto grado de proteccion
  UPDATE catalogo_partidas SET precio_unitario=217.24, cantidad_presupuesto=5.0 WHERE codigo='OE.5.5.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.17 - Luminaria hermetico panel tipo Led 46 W de 0.60 x 0.60 m para empotrar IP 65, para ambientes esteriles con alto grado de proteccion
  UPDATE catalogo_partidas SET precio_unitario=233.29, cantidad_presupuesto=96.0 WHERE codigo='OE.5.5.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.18 - Luminaria Braquet Termoformado Led de 2x28 W. para Adosar IP 66, IK 8
  UPDATE catalogo_partidas SET precio_unitario=216.54, cantidad_presupuesto=11.0 WHERE codigo='OE.5.5.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.19 - Luminaria Adosable para luz cabecera de cama lampara ahorradora de 2x18 W, (Hospitalizacion)
  UPDATE catalogo_partidas SET precio_unitario=108.04, cantidad_presupuesto=82.0 WHERE codigo='OE.5.5.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.20 - Luz de guardia con lampara ahorradora con socket E-27, de 1x23 W emportrada en muro. para uso de corredores y ecuartos de hospitalizacion
  UPDATE catalogo_partidas SET precio_unitario=222.54, cantidad_presupuesto=48.0 WHERE codigo='OE.5.5.1.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.21 - Luminaria tipo braquet E-27 con lampara Led de 13.2 W, con difusor uso en baños
  UPDATE catalogo_partidas SET precio_unitario=88.04, cantidad_presupuesto=70.0 WHERE codigo='OE.5.5.1.21' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.22 - Luminaria con sensor de movimiento downlight tipo Led 20.5 W para empotrar IP 20, IK2
  UPDATE catalogo_partidas SET precio_unitario=98.04, cantidad_presupuesto=24.0 WHERE codigo='OE.5.5.1.22' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.1.23 - Prueba de medición del nivel de iluminación en interiores y exteriores
  UPDATE catalogo_partidas SET precio_unitario=4500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.5.1.23' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.2 - PLACAS Y ACCESORIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.2.1 - TOMACORRIENTE DOBLE UNIVERSAL CON PUESTA A TIERRA 16 A. 250 V. PARA USO GENERAL GRADO HOSPITALARIO, EMPOTRADO EN MURO. H=0.40m
  UPDATE catalogo_partidas SET precio_unitario=73.99, cantidad_presupuesto=1321.0 WHERE codigo='OE.5.5.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.2.2 - TOMACORRIENTE DOBLE UNIVERSAL CON PUESTA A TIERRA, 16 A. 250 V.  PARA USO GENERAL GRADO HOSPITALARIO, EMPOTRADO EN MURO. H=1.10m
  UPDATE catalogo_partidas SET precio_unitario=73.99, cantidad_presupuesto=171.0 WHERE codigo='OE.5.5.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.2.3 - TOMACORRIENTE DOBLE UNIVERSAL CON PUESTA A TIERRA, 16 A. 250 V.  PARA USO GENERAL GRADO HOSPITALARIO, EMPOTRADO EN MURO. H=0.90m
  UPDATE catalogo_partidas SET precio_unitario=73.99, cantidad_presupuesto=19.0 WHERE codigo='OE.5.5.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.2.4 - TOMACORRIENTE DOBLE UNIVERSAL CON PUESTA A TIERRA, 16 A. 250 V.  PARA USO GENERAL GRADO HOSPITALARIO, EMPOTRADO EN MURO. H=1.50m
  UPDATE catalogo_partidas SET precio_unitario=73.99, cantidad_presupuesto=8.0 WHERE codigo='OE.5.5.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.2.5 - TOMACORRIENTE DOBLE UNIVERSAL CON PUESTA A TIERRA, 16 A. 250 V.  PARA USO GENERAL GRADO HOSPITALARIO, EMPOTRADO EN MURO. H=2.20m
  UPDATE catalogo_partidas SET precio_unitario=73.99, cantidad_presupuesto=99.0 WHERE codigo='OE.5.5.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.2.6 - TOMACORRIENTE DOBLE UNIVERSAL CON PUESTA A TIERRA, 16 A. 250 V.  PARA USO GENERAL GRADO HOSPITALARIO, EMPOTRADO EN TECHO
  UPDATE catalogo_partidas SET precio_unitario=73.99, cantidad_presupuesto=10.0 WHERE codigo='OE.5.5.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.2.7 - TOMACORRIENTE DOBLE UNIVERSAL CON PUESTA A TIERRA, 16 A. 250 V.  A PRUEBA DE AGUA GRADO HOSPITALARIO, EMPOTRADO EN MURO
  UPDATE catalogo_partidas SET precio_unitario=73.99, cantidad_presupuesto=31.0 WHERE codigo='OE.5.5.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.2.8 - TOMACORRIENTE DOBLE TIPO SCHUKO, CON PUESTA A TIERRA, 16 A. 250 V. PARA USO ESTABILISADO.  (EQUIP. MEDICO).  EMPOTRADO EN MURO. H=1.60
  UPDATE catalogo_partidas SET precio_unitario=119.29, cantidad_presupuesto=226.0 WHERE codigo='OE.5.5.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.2.9 - TOMACORRIENTE DOBLE TIPO UNIVERSAL, CON PUESTA A TIERRA, 16 A. 250 V. PARA USO GENERAL (ESTABILISADO).  (EQUIP. MEDICO).  EMPOTRADO EN MURO.
  UPDATE catalogo_partidas SET precio_unitario=73.99, cantidad_presupuesto=222.0 WHERE codigo='OE.5.5.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.2.10 - TOMACORRIENTE DOBLE TIPO UNIVERSAL, CON PUESTA A TIERRA, 16 A. 250 V. PARA USO GENERAL (ESTABILISADO).  (EQUIP. MEDICO).  EMPOTRADO EN MURO. H=0.40
  UPDATE catalogo_partidas SET precio_unitario=73.99, cantidad_presupuesto=257.0 WHERE codigo='OE.5.5.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.2.11 - TOMACORRIENTE DOBLE TIPO UNIVERSAL, CON PUESTA A TIERRA, 16 A. 250 V. PARA USO GENERAL (ESTABILISADO).  (EQUIP. MEDICO).  EMPOTRADO EN MURO. H=1.10
  UPDATE catalogo_partidas SET precio_unitario=73.99, cantidad_presupuesto=11.0 WHERE codigo='OE.5.5.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.2.12 - Interruptor simple Tipo Palanca Balancin Grado Hospitalario
  UPDATE catalogo_partidas SET precio_unitario=50.19, cantidad_presupuesto=428.0 WHERE codigo='OE.5.5.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.2.13 - Interruptor Doble Tipo Palanca Grado Hospitalario
  UPDATE catalogo_partidas SET precio_unitario=52.19, cantidad_presupuesto=323.0 WHERE codigo='OE.5.5.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.2.14 - Interruptor Triple Tipo Palanca Grado Hospitalario
  UPDATE catalogo_partidas SET precio_unitario=55.19, cantidad_presupuesto=76.0 WHERE codigo='OE.5.5.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.2.15 - Interruptor Simple de tres vías (Conmutación)Tipo Palanca Grado Hospitalario.
  UPDATE catalogo_partidas SET precio_unitario=50.19, cantidad_presupuesto=109.0 WHERE codigo='OE.5.5.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.2.16 - Interruptor Simple suspendido cabecera de cama
  UPDATE catalogo_partidas SET precio_unitario=35.19, cantidad_presupuesto=82.0 WHERE codigo='OE.5.5.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.3 - EQUIPOS ELECTRICOS Y MECANICOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.3.1 - UPS Trifasico 380/220 V, 2 KVA , 2 Baterias internas
  UPDATE catalogo_partidas SET precio_unitario=9022.29, cantidad_presupuesto=2.0 WHERE codigo='OE.5.5.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.3.2 - UPS Trifasico 380/220 V, 5 KVA , 2 Baterias internas
  UPDATE catalogo_partidas SET precio_unitario=11624.29, cantidad_presupuesto=17.0 WHERE codigo='OE.5.5.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.3.3 - UPS Trifasico 380/220 V, 10 KVA , 2 Baterias internas
  UPDATE catalogo_partidas SET precio_unitario=16746.59, cantidad_presupuesto=6.0 WHERE codigo='OE.5.5.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.3.4 - UPS Trifasico 380/220 V,15 KVA , 2 Baterias internas
  UPDATE catalogo_partidas SET precio_unitario=21720.79, cantidad_presupuesto=5.0 WHERE codigo='OE.5.5.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.3.5 - UPS Trifasico 380/220 V,20 KVA , 2 Baterias internas
  UPDATE catalogo_partidas SET precio_unitario=23299.7, cantidad_presupuesto=1.0 WHERE codigo='OE.5.5.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.3.6 - UPS Trifasico 380/220 V,75 KVA , 2 Baterias internas
  UPDATE catalogo_partidas SET precio_unitario=117877.9, cantidad_presupuesto=1.0 WHERE codigo='OE.5.5.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.3.7 - Transformador de Aislamiento Trifasico 380/220 V, 2 KVA
  UPDATE catalogo_partidas SET precio_unitario=2395.29, cantidad_presupuesto=2.0 WHERE codigo='OE.5.5.3.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.3.8 - Transformador de Aislamiento Trifasico 380/220 V, 5 KVA
  UPDATE catalogo_partidas SET precio_unitario=3998.29, cantidad_presupuesto=17.0 WHERE codigo='OE.5.5.3.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.3.9 - Transformador de Aislamiento Trifasico 380/220 V, 10 KVA
  UPDATE catalogo_partidas SET precio_unitario=4808.76, cantidad_presupuesto=6.0 WHERE codigo='OE.5.5.3.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.3.10 - Transformador de Aislamiento Trifasico 380/220 V, 15 KVA
  UPDATE catalogo_partidas SET precio_unitario=6421.17, cantidad_presupuesto=5.0 WHERE codigo='OE.5.5.3.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.3.11 - Transformador de Aislamiento Trifasico 380/220 V, 20 KVA
  UPDATE catalogo_partidas SET precio_unitario=8178.4, cantidad_presupuesto=1.0 WHERE codigo='OE.5.5.3.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.5.3.12 - Transformador de Aislamiento Trifasico 380/220 V, 75 KVA
  UPDATE catalogo_partidas SET precio_unitario=30036.67, cantidad_presupuesto=1.0 WHERE codigo='OE.5.5.3.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6 - EQUIPOS ELECTRICOS Y MECÁNICOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4 - SISTEMA DE PETROLEO Y GRUPO ELECTROGENO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1 - INSTALACIONES DE PETROLEO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.1 - TUBERIA SCH-80 DE 1/2", ASTM A53, EN CANALETA
  UPDATE catalogo_partidas SET precio_unitario=62.49, cantidad_presupuesto=9.6 WHERE codigo='OE.5.6.4.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.2 - TUBERIA SCH-40 DE 1", ASTM A53, EN CANALETA
  UPDATE catalogo_partidas SET precio_unitario=58.53, cantidad_presupuesto=246.5 WHERE codigo='OE.5.6.4.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.3 - TUBERIA SCH-40 DE 1 1/2", ASTM A53, EN CANALETA
  UPDATE catalogo_partidas SET precio_unitario=67.63, cantidad_presupuesto=28.0 WHERE codigo='OE.5.6.4.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.4 - TUBERIA SCH-40 DE 4", ASTM A53, EN CANALETA - VENTEO
  UPDATE catalogo_partidas SET precio_unitario=74.71, cantidad_presupuesto=13.0 WHERE codigo='OE.5.6.4.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.5 - TUBERIA SCH-80 DE 1/2", ASTM A53, EXPUESTA
  UPDATE catalogo_partidas SET precio_unitario=75.85, cantidad_presupuesto=15.0 WHERE codigo='OE.5.6.4.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.6 - TUBERIA SCH-40 DE 1", ASTM A53, EXPUESTA
  UPDATE catalogo_partidas SET precio_unitario=63.99, cantidad_presupuesto=16.5 WHERE codigo='OE.5.6.4.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.7 - TUBERIA SCH-40 DE 1 1/2", ASTM A53, EXPUESTA
  UPDATE catalogo_partidas SET precio_unitario=80.99, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.4.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.8 - TUBERIA STD DE 10", ASTM A53, EXPUESTA - GASES DE ESCASPE
  UPDATE catalogo_partidas SET precio_unitario=368.91, cantidad_presupuesto=10.2 WHERE codigo='OE.5.6.4.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.9 - CODO 1/2" x 90º CLASE150 MI 197 ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=20.32, cantidad_presupuesto=17.0 WHERE codigo='OE.5.6.4.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.10 - CODO 1" x 90º CLASE150 MI 197 ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=22.07, cantidad_presupuesto=59.0 WHERE codigo='OE.5.6.4.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.11 - CODO 1 1/2" x 90º CLASE150 MI 197 ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=23.17, cantidad_presupuesto=19.0 WHERE codigo='OE.5.6.4.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.12 - CODO 4" x 90º CLASE150 MI 197 SOLDADO
  UPDATE catalogo_partidas SET precio_unitario=40.08, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.4.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.13 - CODO 10" x 90º CLASE150 MI 197 SOLDADO
  UPDATE catalogo_partidas SET precio_unitario=59.87, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.4.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.14 - UNION SIMPLE 1" CLASE150 MI 197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=24.26, cantidad_presupuesto=22.0 WHERE codigo='OE.5.6.4.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.15 - UNION UNIVERSAL 1/2" CLASE150 MI 197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=21.51, cantidad_presupuesto=8.0 WHERE codigo='OE.5.6.4.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.16 - UNION UNIVERSAL 1" CLASE150 MI 197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=24.19, cantidad_presupuesto=26.0 WHERE codigo='OE.5.6.4.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.17 - UNION UNIVERSAL 1 1/2" CLASE150 MI 197 - ROSCADO FIERRO MALEABLE
  UPDATE catalogo_partidas SET precio_unitario=30.8, cantidad_presupuesto=12.0 WHERE codigo='OE.5.6.4.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.18 - TEE  1" x 90º CLASE150 MI 197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=18.2, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.4.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.19 - TEE  1/2" x 90º CLASE150 MI 197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=22.67, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.4.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.20 - TEE  1 1/2" x 90º CLASE150 MI 197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=30.95, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.4.1.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.21 - VALVULA DE BOLA 1/2" SCRD 150 PSI
  UPDATE catalogo_partidas SET precio_unitario=209.82, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.4.1.21' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.22 - VALVULA DE BOLA 1" SCRD 150 PSI
  UPDATE catalogo_partidas SET precio_unitario=287.7, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.4.1.22' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.23 - VALVULA DE BOLA  1 1/2" SCRD 150 PSI
  UPDATE catalogo_partidas SET precio_unitario=184.99, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.4.1.23' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.24 - VALVULA DE CHECK  1 1/2" SCRD 150 PSI
  UPDATE catalogo_partidas SET precio_unitario=334.03, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.4.1.24' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.25 - VALVULA  DE FLOTADOR DE 1"
  UPDATE catalogo_partidas SET precio_unitario=159.53, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.4.1.25' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.26 - VALVULA  DE CANASTILLA DE 1"
  UPDATE catalogo_partidas SET precio_unitario=166.61, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.4.1.26' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.27 - JUNTA FLEXIBLE METAFLEX O SIMILAR, TUBERIA DE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=99.82, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.4.1.27' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.28 - JUNTA FLEXIBLE METAFLEX O SIMILAR, TUBERIA DE 1"
  UPDATE catalogo_partidas SET precio_unitario=140.82, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.4.1.28' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.29 - JUNTA FLEXIBLE METAFLEX O SIMILAR, TUBERIA DE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=260.82, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.4.1.29' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.30 - VALVULA DE ALIVIO DE 1"
  UPDATE catalogo_partidas SET precio_unitario=135.79, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.4.1.30' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.31 - FILTRO TIPO YEE DE 1 "
  UPDATE catalogo_partidas SET precio_unitario=104.75, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.4.1.31' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.32 - FILTRO TIPO YEE DE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=135.15, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.4.1.32' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.33 - MANOMETRO DIESEL
  UPDATE catalogo_partidas SET precio_unitario=276.23, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.4.1.33' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.34 - VISOR DE PETROLEO DE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=56.23, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.4.1.34' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.35 - INTERRUPTOR DE ELECTRONIVEL
  UPDATE catalogo_partidas SET precio_unitario=93.8, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.4.1.35' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.36 - SUMINISTRO E INSTALACION DE ELECTROBOMBA DE PETROLEO MONOBLOCK TRIFASICO 380 VCA, 1 HP, HD= 5 M, Q= 10 GAL
  UPDATE catalogo_partidas SET precio_unitario=45680.0, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.4.1.36' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.37 - SUMINISTRO E INSTALACION TANQUE DIARIO DE PETROLEO 250 GLNS
  UPDATE catalogo_partidas SET precio_unitario=15620.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.4.1.37' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.38 - SUMINISTRO E INSTALACION TANQUE DIARIO DE PETROLEO 200 GLNS
  UPDATE catalogo_partidas SET precio_unitario=13680.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.4.1.38' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.39 - SUMINISTRO E INSTALACION DE TANQUE ENTERRADO DE PETROLEO DB5, CAP: 1500 GLNS
  UPDATE catalogo_partidas SET precio_unitario=83690.7, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.4.1.39' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.40 - PINTURA PARA TUBERIA COLOR MARRON
  UPDATE catalogo_partidas SET precio_unitario=2.18, cantidad_presupuesto=344.8 WHERE codigo='OE.5.6.4.1.40' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.41 - PRUEBAS MECANICAS DEL SISTEMA DE PETROLEO
  UPDATE catalogo_partidas SET precio_unitario=10364.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.4.1.41' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.1.42 - DUCTOS Y ACCESORIOS - TRATAMIENTO AISLADO
  UPDATE catalogo_partidas SET precio_unitario=43.09, cantidad_presupuesto=378.0 WHERE codigo='OE.5.6.4.1.42' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.2 - TUBERÍA DE LINEA DE CONDENSADOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.2.1 - TUBERIA SCH - 40 DE 1/2" DE ACERO GALVANIZADO
  UPDATE catalogo_partidas SET precio_unitario=82.44, cantidad_presupuesto=1.84 WHERE codigo='OE.5.6.4.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.2.2 - VALVULA DE BOLA 1/2" SCRD 150 PSI
  UPDATE catalogo_partidas SET precio_unitario=209.82, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.4.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.2.3 - CODO 1/2" x 90º CLASE150 MI 197 DE ACERO GALVANIZADO ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=20.32, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.4.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.3 - INSTALACIONES DE GRUPO ELECTROGENO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.4.3.1 - SUMINISTRO E INSTALACIÓN DE GRUPO ELECTROGENO ENCAPSULADO E INSONORIZADO DE 625 KW (3Ø, 220V), INCLUYE TABLERO DE TRANSFERENCIA AUTOMATICO TTA.
  UPDATE catalogo_partidas SET precio_unitario=320698.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.4.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.6 - ASCENSORES Y MONTACARGAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.6.1 - SUMINISTRO E INSTALACION DE ASCENSOR PUBLICO CON CUARTO DE MAQUINAS, CAP. 1500KG, 20 PERSONAS V=1M/S, 4 PARADAS
  UPDATE catalogo_partidas SET precio_unitario=310250.0, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.6.2 - SUMINISTRO E INSTALACION DE ASCENSOR MONTACARGA CON CUARTO DE MAQUINAS, CAP. 1,500 kg. 18 - 20 PERSONAS, V = 0.5 m/s, 5 PARADAS
  UPDATE catalogo_partidas SET precio_unitario=305978.0, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.6.3 - SUMINISTRO E INSTALACION DE ASCENSOR MONTACAMILLA CON CUARTO DE MAQUINAS, CAP. 2,500 kg. 31 - 33 PERSONAS, V = 1 m/s, 5 PARADAS
  UPDATE catalogo_partidas SET precio_unitario=380680.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.6.4 - SUMINISTRO E INSTALACION DE MESA TRANSFER.
  UPDATE catalogo_partidas SET precio_unitario=14560.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.6.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13 - SISTEMA DE VAPOR
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1 - ALIMENTADOR DE RED DE VAPOR
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.13.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.1 - SALIDA DE SISTEMA DE VAPOR Ø 1/2"
  UPDATE catalogo_partidas SET precio_unitario=52.41, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.2 - SALIDA DE SISTEMA DE VAPOR Ø 3/4"
  UPDATE catalogo_partidas SET precio_unitario=74.91, cantidad_presupuesto=7.0 WHERE codigo='OE.5.6.13.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.3 - SALIDA DE SISTEMA DE VAPOR Ø 1"
  UPDATE catalogo_partidas SET precio_unitario=109.61, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.13.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.4 - SALIDA DE SISTEMA DE VAPOR Ø 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=161.41, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.13.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.5 - TUBERIA SCH - 40 DE Ø 1/2"
  UPDATE catalogo_partidas SET precio_unitario=36.17, cantidad_presupuesto=5.5 WHERE codigo='OE.5.6.13.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.6 - TUBERIA SCH - 40 DE Ø 3/4"
  UPDATE catalogo_partidas SET precio_unitario=39.91, cantidad_presupuesto=63.13 WHERE codigo='OE.5.6.13.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.7 - TUBERIA SCH - 40 DE Ø 1"
  UPDATE catalogo_partidas SET precio_unitario=44.59, cantidad_presupuesto=85.03 WHERE codigo='OE.5.6.13.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.8 - TUBERIA SCH - 40 DE Ø 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=49.77, cantidad_presupuesto=14.97 WHERE codigo='OE.5.6.13.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.9 - TUBERIA SCH - 40 DE Ø 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=53.78, cantidad_presupuesto=174.08 WHERE codigo='OE.5.6.13.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.10 - TUBERIA SCH - 40 DE Ø 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=81.33, cantidad_presupuesto=64.03 WHERE codigo='OE.5.6.13.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.11 - TUBERIA SCH - 40 DE Ø 3"
  UPDATE catalogo_partidas SET precio_unitario=97.2, cantidad_presupuesto=16.93 WHERE codigo='OE.5.6.13.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.12 - CODO DE FIERRO MALEABLE GALVANIZADO DE Ø 1/2" x 90º CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=17.34, cantidad_presupuesto=10.0 WHERE codigo='OE.5.6.13.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.13 - CODO DE FIERRO MALEABLE GALVANIZADO DE Ø 3/4" x 90º CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=18.64, cantidad_presupuesto=43.0 WHERE codigo='OE.5.6.13.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.14 - CODO DE FIERRO MALEABLE GALVANIZADO DE Ø 1" x 90º CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=20.34, cantidad_presupuesto=33.0 WHERE codigo='OE.5.6.13.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.15 - CODO DE FIERRO MALEABLE GALVANIZADO DE Ø 1 1/4" x 90º CLASE 150 ASTM A197  - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=23.84, cantidad_presupuesto=13.0 WHERE codigo='OE.5.6.13.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.16 - CODO DE FIERRO MALEABLE GALVANIZADO DE Ø 1 1/2" x 90º CLASE 150 ASTM A197  - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=27.34, cantidad_presupuesto=22.0 WHERE codigo='OE.5.6.13.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.17 - CODO DE FIERRO MALEABLE GALVANIZADO DE Ø 2 1/2" x 90º CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=31.34, cantidad_presupuesto=10.0 WHERE codigo='OE.5.6.13.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.18 - CODO DE FIERRO MALEABLE GALVANIZADO DE Ø 3" x 90º CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=57.74, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.13.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.19 - TEE DE FIERRO MALEABLE GALVANIZADO DE Ø 1/2" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=18.04, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.13.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.20 - TEE DE FIERRO MALEABLE GALVANIZADO DE Ø 3/4" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=20.64, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.13.1.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.21 - TEE DE FIERRO MALEABLE GALVANIZADO DE Ø 1" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=24.14, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.13.1.21' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.22 - TEE DE FIERRO MALEABLE GALVANIZADO DE Ø 1 1/2" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=30.34, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.13.1.22' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.23 - TEE DE FIERRO MALEABLE GALVANIZADO DE 2 1/2" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=52.64, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.13.1.23' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.24 - REDUCCIÓN BUSHING DE FIERRO MALEABLE GALVANIZADODE 2 1/2" X 1" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=61.34, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.13.1.24' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.25 - REDUCCIÓN BUSHING DE FIERRO MALEABLE GALVANIZADO DE 2 1/2" X 1 1/2" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=66.74, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.13.1.25' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.26 - REDUCCIÓN BUSHING DE FIERRO MALEABLE GALVANIZADODE 1 1/2" X 3/4" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=57.84, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.13.1.26' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.27 - REDUCCIÓN BUSHING DE FIERRO MALEABLE GALVANIZADO DE 1 1/2" X 1" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=37.34, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.13.1.27' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.28 - REDUCCIÓN BUSHING DE FIERRO MALEABLE GALVANIZADO DE 1" X 3/4" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=29.84, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.13.1.28' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.29 - REDUCCIÓN BUSHING DE FIERRO MALEABLE GALVANIZADO DE 3/4" X 1/2" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=28.34, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.13.1.29' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.30 - REDUCCIÓN EXCENTRICA CAMPANA DE  FIERRO MALEABLE GALVANIZADO DE 1 1/2" X 1" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=56.74, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.1.30' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.31 - REDUCCIÓN EXCENTRICA CAMPANA DE  FIERRO MALEABLE GALVANIZADO DE 1" X 3/4" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=51.44, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.1.31' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.32 - VALVULA DE BOLA DE BRONCE Ø 1/2" - ROSCADA
  UPDATE catalogo_partidas SET precio_unitario=69.19, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.13.1.32' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.33 - VALVULA DE BOLA DE BRONCE Ø 3/4" - ROSCADA
  UPDATE catalogo_partidas SET precio_unitario=74.19, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.13.1.33' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.34 - VALVULA DE BOLA DE BRONCE Ø 1" - ROSCADA
  UPDATE catalogo_partidas SET precio_unitario=83.29, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.13.1.34' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.35 - VALVULA DE BOLA DE BRONCE Ø 1 1/2" - ROSCADA
  UPDATE catalogo_partidas SET precio_unitario=103.39, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.13.1.35' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.36 - VALVULA DE BOLA DE BRONCE Ø 2 1/2" - ROSCADA
  UPDATE catalogo_partidas SET precio_unitario=127.69, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.13.1.36' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.37 - VALVULA DE GLOBO DE BRONCE Ø 3/4" - ROSCADA
  UPDATE catalogo_partidas SET precio_unitario=128.64, cantidad_presupuesto=9.0 WHERE codigo='OE.5.6.13.1.37' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.38 - VALVULA DE GLOBO DE BRONCE Ø 1" - ROSCADA
  UPDATE catalogo_partidas SET precio_unitario=194.34, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.13.1.38' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.39 - VALVULA DE COMPUERTA DE BRONCE Ø 1" - ROSCADA
  UPDATE catalogo_partidas SET precio_unitario=84.39, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.13.1.39' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.40 - VALVULA CHECK Ø 1"
  UPDATE catalogo_partidas SET precio_unitario=228.46, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.13.1.40' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.41 - FILTRO TIPO YEE DE BRONCE Ø 1"
  UPDATE catalogo_partidas SET precio_unitario=282.06, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.13.1.41' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.42 - UNION UNIVERSAL DE FIERRO MALEABLE GALVANIZADO DE Ø 1/2" CLASE 150 ASTM A197
  UPDATE catalogo_partidas SET precio_unitario=24.04, cantidad_presupuesto=10.0 WHERE codigo='OE.5.6.13.1.42' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.43 - UNION UNIVERSAL DE FIERRO MALEABLE GALVANIZADO DE Ø 3/4" CLASE 150 ASTM A197
  UPDATE catalogo_partidas SET precio_unitario=26.84, cantidad_presupuesto=13.0 WHERE codigo='OE.5.6.13.1.43' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.44 - UNION UNIVERSAL DE FIERRO MALEABLE GALVANIZADO DE Ø 1" CLASE 150 ASTM A197
  UPDATE catalogo_partidas SET precio_unitario=32.84, cantidad_presupuesto=12.0 WHERE codigo='OE.5.6.13.1.44' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.45 - UNION UNIVERSAL DE FIERRO MALEABLE GALVANIZADO DE Ø 1 1/2" CLASE 150 ASTM A197
  UPDATE catalogo_partidas SET precio_unitario=67.84, cantidad_presupuesto=12.0 WHERE codigo='OE.5.6.13.1.45' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.46 - UNION UNIVERSAL DE FIERRO MALEABLE GALVANIZADO DE Ø 2 1/2" CLASE 150 ASTM A197
  UPDATE catalogo_partidas SET precio_unitario=133.04, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.13.1.46' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.47 - UNION SIMPLE DE FIERRO MALEABLE GALVANIZADO DE 1 1/2" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=33.74, cantidad_presupuesto=10.0 WHERE codigo='OE.5.6.13.1.47' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.48 - UNION SIMPLE DE FIERRO MALEABLE GALVANIZADO DE 2 1/2 "CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=39.54, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.13.1.48' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.49 - MANOMETRO DE PRESION DE VAPOR DE 250PSI
  UPDATE catalogo_partidas SET precio_unitario=282.92, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.13.1.49' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.50 - SUMINISTRO E INSTALACION DE VÁLVULA DE CONTROL DE PRESIÓN Y TEMPERATURA
  UPDATE catalogo_partidas SET precio_unitario=19900.0, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.13.1.50' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.51 - SUMINISTRO E INSTALACION DE ESTACION REDUCTORA DE PRESION = 150 PSIG. DE Ø 3/4"
  UPDATE catalogo_partidas SET precio_unitario=43850.0, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.13.1.51' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.52 - SUMINISTRO E INSTALACION DE ESTACION REDUCTORA DE PRESION = 150 PSIG. DE Ø 1"
  UPDATE catalogo_partidas SET precio_unitario=43850.0, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.13.1.52' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.53 - SUMINISTRO E INSTALACION DE ESTACION REDUCTORA DE PRESION = 150 PSIG.DE  Ø 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=43850.0, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.13.1.53' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.54 - SUMINISTRO E INSTALACION DE DOSIFICADOR DE PRODUCTOS QUIMICOS 50 LITROS DE ACERO INOXIDABLE
  UPDATE catalogo_partidas SET precio_unitario=7500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.1.54' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.55 - SUMINISTRO E INSTALACION DE TANQUE DE PURGA DE VAPOR CAP. 180 LITROS . DE PLANCHA DE ACERO INOXIDABLE
  UPDATE catalogo_partidas SET precio_unitario=23500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.1.55' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.56 - SUMINISTRO E INSTALACION DE TANQUE DE ALIMENTACION DE AGUA CON DEAIREADOR ATMOSFERICO Y RECEPCION DE CONDENSADO DE 150 GLN; 0.61MØX1.91M; DE ACERO INOXIDABLE
  UPDATE catalogo_partidas SET precio_unitario=44500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.1.56' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.57 - SUMINISTRO E INSTALACION DE MANIFOLD DE DISTRIBUCION DE VAPOR DE 0.2MØX2.50M (INCLUYE ACCESORIOS)
  UPDATE catalogo_partidas SET precio_unitario=12500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.1.57' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.58 - SUMINISTRO E INSTALACIÓN DE ABLANDADOR DE AGUA DE 59.5 GPM, CON TANQUE DE RESINA DE 7 PIES CUBICOS
  UPDATE catalogo_partidas SET precio_unitario=24259.2, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.1.58' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.59 - SUMINISTRO E INSTALACION DE CALDERA DE ALMACENAMIENTO DE VAPOR, 70.0 BHP, CAP 2400 LBS/HR MÍNIMO Y EQUIPAMIENTO COMPLEMENTARIO.
  UPDATE catalogo_partidas SET precio_unitario=265984.0, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.13.1.59' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.60 - SUMINISTRO E INSTALACION DE CALENTADOR DE AGUA INSTANTANEO A VAPOR PARA PRODUCCIÓN DE AGUA CALIENTE A 80°C.
  UPDATE catalogo_partidas SET precio_unitario=73532.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.1.60' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.61 - SUMINISTRO E INSTALACION DE TANQUE ACUMULADOR DE AGUA CALIENTE SANITARIA A 80°C DE 4M3.
  UPDATE catalogo_partidas SET precio_unitario=61820.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.1.61' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.62 - SUMINISTRO E INSTALACION DE TANQUE INTERACUMULADOR CON INTERCAMBIADOR DE CALOR A VAPOR DE 5M3 PARA PRODUCCIÓN DE AGUA CALIENTE SANITARIA A 55°C
  UPDATE catalogo_partidas SET precio_unitario=81140.0, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.13.1.62' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.63 - SUMINISTRO E INSTALACION DE PAQUETE FINALES DE LINEA  (SEGUN DISEÑO)
  UPDATE catalogo_partidas SET precio_unitario=59239.66, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.1.63' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.64 - SUMINISTRO E INSTALACION DE PAQUETE DE PURGA DE LINEA (SEGUN DISEÑO)
  UPDATE catalogo_partidas SET precio_unitario=23232.5, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.1.64' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.1.65 - SUMINISTRO E INSTALACION DE PAQUETE DE PURGA AUTOMATICA (SEGUN DISEÑO)
  UPDATE catalogo_partidas SET precio_unitario=165.8, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.13.1.65' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2 - ALIMENTADOR DE RED RETORNO CONDENSADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.13.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.1 - SALIDA DE SISTEMA DE RETORNO CONDENSADO Ø 1/2"
  UPDATE catalogo_partidas SET precio_unitario=350.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.2 - SALIDA DE SISTEMA DE RETORNO CONDENSADO Ø 3/4"
  UPDATE catalogo_partidas SET precio_unitario=400.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.3 - SALIDA DE SISTEMA DE RETORNO CONDENSADO Ø 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=810.0, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.13.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.4 - TUBERIA SCH - 40 DE Ø 1/2"
  UPDATE catalogo_partidas SET precio_unitario=46.5, cantidad_presupuesto=15.18 WHERE codigo='OE.5.6.13.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.5 - TUBERIA SCH - 40 DE Ø 3/4"
  UPDATE catalogo_partidas SET precio_unitario=62.0, cantidad_presupuesto=113.85 WHERE codigo='OE.5.6.13.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.6 - TUBERIA SCH - 40 DE Ø 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=145.0, cantidad_presupuesto=46.13 WHERE codigo='OE.5.6.13.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.7 - TUBERIA SCH - 40 DE Ø 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=310.0, cantidad_presupuesto=92.66 WHERE codigo='OE.5.6.13.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.8 - CODO DE FIERRO MALEABLE GALVANIZADO DE Ø 1/2" x 90º CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=17.34, cantidad_presupuesto=14.0 WHERE codigo='OE.5.6.13.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.9 - CODO DE FIERRO MALEABLE GALVANIZADO DE Ø 3/4" x 90º CLASE 150 ASTM A197  - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=18.64, cantidad_presupuesto=52.0 WHERE codigo='OE.5.6.13.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.10 - CODO DE FIERRO MALEABLE GALVANIZADO DE Ø 1 1/2" x 90º CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=27.34, cantidad_presupuesto=26.0 WHERE codigo='OE.5.6.13.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.11 - CODO DE FIERRO MALEABLE GALVANIZADO DE Ø 2 1/2" x 90º CLASE 150 ASTM A197  - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=31.34, cantidad_presupuesto=16.0 WHERE codigo='OE.5.6.13.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.12 - TEE DE FIERRO MALEABLE GALVANIZADO DE Ø 3/4" x 90º CLASE 150 ASTM A197  - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=20.64, cantidad_presupuesto=9.0 WHERE codigo='OE.5.6.13.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.13 - TEE DE FIERRO MALEABLE GALVANIZADO DE Ø 1 1/2" x 90º CLASE 150 ASTM A197  - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=30.34, cantidad_presupuesto=11.0 WHERE codigo='OE.5.6.13.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.14 - TEE DE FIERRO MALEABLE GALVANIZADO DE Ø 2 1/2" x 90º CLASE 150 ASTM A197  - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=52.64, cantidad_presupuesto=17.0 WHERE codigo='OE.5.6.13.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.15 - REDUCCIÓN BUSHING DE FIERRO MALEABLE GALVANIZADO DE 2 1/2" X 1" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=61.34, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.13.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.16 - REDUCCIÓN BUSHING DE FIERRO MALEABLE GALVANIZADO DE 2 1/2" X 1 1/2" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=66.74, cantidad_presupuesto=10.0 WHERE codigo='OE.5.6.13.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.17 - REDUCCIÓN BUSHING DE FIERRO MALEABLE GALVANIZADO DE 1 1/2" X 1/2" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=52.84, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.13.2.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.18 - REDUCCIÓN BUSHING DE FIERRO MALEABLE GALVANIZADO DE 1 1/2" X 3/4" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=57.84, cantidad_presupuesto=12.0 WHERE codigo='OE.5.6.13.2.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.19 - REDUCCIÓN BUSHING DE FIERRO MALEABLE GALVANIZADO DE 1 1/2" X 1" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=37.34, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.2.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.20 - REDUCCIÓN BUSHING DE FIERRO MALEABLE GALVANIZADO DE 3/4" X 1/2" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=28.34, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.13.2.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.21 - REDUCCIÓN EXCENTRICA CAMPANA DE FIERRO MALEABLE GALVANIZADO DE 1 1/2" X 3/4" CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=55.34, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.2.21' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.22 - VALVULA DE BOLA DE BRONCE Ø 1/2"
  UPDATE catalogo_partidas SET precio_unitario=69.19, cantidad_presupuesto=10.0 WHERE codigo='OE.5.6.13.2.22' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.23 - VALVULA DE BOLA DE BRONCE Ø 3/4"
  UPDATE catalogo_partidas SET precio_unitario=74.19, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.13.2.23' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.24 - VALVULA DE BOLA DE BRONCE Ø 1"
  UPDATE catalogo_partidas SET precio_unitario=83.29, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.2.24' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.25 - VALVULA DE BOLA DE BRONCE Ø 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=103.39, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.13.2.25' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.26 - VALVULA DE BOLA DE BRONCE Ø 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=127.69, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.13.2.26' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.27 - UNION UNIVERSAL DE FIERRO MALEABLE GALVANIZADO DE Ø 1/2" CLASE 150 ASTM A197
  UPDATE catalogo_partidas SET precio_unitario=24.04, cantidad_presupuesto=20.0 WHERE codigo='OE.5.6.13.2.27' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.28 - UNION UNIVERSAL DE FIERRO MALEABLE GALVANIZADO DE Ø 3/4" CLASE 150 ASTM A197
  UPDATE catalogo_partidas SET precio_unitario=26.84, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.13.2.28' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.29 - UNION UNIVERSAL DE FIERRO MALEABLE GALVANIZADO DE Ø 1" CLASE 150 ASTM A197
  UPDATE catalogo_partidas SET precio_unitario=32.84, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.13.2.29' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.30 - UNION UNIVERSAL DE FIERRO MALEABLE GALVANIZADO DE Ø 1 1/4" CLASE 150 ASTM A197
  UPDATE catalogo_partidas SET precio_unitario=66.04, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.2.30' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.31 - UNION UNIVERSAL DE FIERRO MALEABLE GALVANIZADO DE Ø 1 1/2" CLASE 150 ASTM A197
  UPDATE catalogo_partidas SET precio_unitario=67.84, cantidad_presupuesto=11.0 WHERE codigo='OE.5.6.13.2.31' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.32 - UNION UNIVERSAL DE FIERRO MALEABLE GALVANIZADO DE Ø 2 1/2" CLASE 150 ASTM A197
  UPDATE catalogo_partidas SET precio_unitario=133.04, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.13.2.32' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.33 - UNION SIMPLE DE FIERRO MALEABLE GALVANIZADO DE 2 1/2 "CLASE 150 ASTM A197 - ROSCADO
  UPDATE catalogo_partidas SET precio_unitario=39.54, cantidad_presupuesto=8.0 WHERE codigo='OE.5.6.13.2.33' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.34 - JUNTA FLEXIBLE DE EXPANSION DE ACERO INOX. DE Ø 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=461.91, cantidad_presupuesto=8.0 WHERE codigo='OE.5.6.13.2.34' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.35 - JUNTA FLEXIBLE DE EXPANSION DE ACERO INOX. DE Ø 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=900.31, cantidad_presupuesto=8.0 WHERE codigo='OE.5.6.13.2.35' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.2.36 - SUMINISTRO E INSTALACION DE PAQUETE DE PURGA TERMODINAMICA (SEGUN DISEÑO)
  UPDATE catalogo_partidas SET precio_unitario=42770.66, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.2.36' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.3 - VARIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.13.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.3.1 - COLGADOR PARA 1 TUBERIA TIPO CANAL F.G. UNISTRUT (INCL. VARILLA ROSCADA 5/8")
  UPDATE catalogo_partidas SET precio_unitario=22.22, cantidad_presupuesto=56.0 WHERE codigo='OE.5.6.13.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.3.2 - COLGADOR PARA 2 TUBERIA TIPO CANAL F.G. UNISTRUT (INCL. VARILLA ROSCADA 5/8")
  UPDATE catalogo_partidas SET precio_unitario=41.42, cantidad_presupuesto=30.0 WHERE codigo='OE.5.6.13.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.3.3 - COLGADOR PARA 3 TUBERIA TIPO CANAL F.G. UNISTRUT (INCL. VARILLA ROSCADA 5/8")
  UPDATE catalogo_partidas SET precio_unitario=51.92, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.3.4 - SOPORTES VERTICALES EN PARED PARA 1 TUBERIAS
  UPDATE catalogo_partidas SET precio_unitario=28.0, cantidad_presupuesto=8.0 WHERE codigo='OE.5.6.13.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.3.5 - SOPORTES VERTICALES EN PARED PARA 2 TUBERIAS
  UPDATE catalogo_partidas SET precio_unitario=52.0, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.13.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.3.6 - ADOSADO EN PARED PARA 2 TUBERIAS
  UPDATE catalogo_partidas SET precio_unitario=53.0, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.13.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.3.7 - SUMINISTRO E INSTALACIÓN DE RACK PARA SOPORTE DE TUBERIAS DE VAPOR Y RETORNO DE CONDENSADOS.
  UPDATE catalogo_partidas SET precio_unitario=4850.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.13.3.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.3.8 - SUMINISTRO E INSTALACIÓN DE SOPORTES FIJOS ANCLADOS AL TECHO  PARA PASO DE TUBERIAS DE VAPOR Y RETORNO DE CONDENSADOS DE 1 1/2" Y 2 1/2".
  UPDATE catalogo_partidas SET precio_unitario=1230.0, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.13.3.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.3.9 - AISLAMIENTO TERMOACUSTICO PARA TUBERIA DE Ø 3/4" DE 1" DE ESPESOR
  UPDATE catalogo_partidas SET precio_unitario=75.0, cantidad_presupuesto=197.66 WHERE codigo='OE.5.6.13.3.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.13.3.10 - AISLAMIENTO TERMOACUSTICO PARA TUBERIA DE Ø 1-3" DE 2" DE ESPESOR
  UPDATE catalogo_partidas SET precio_unitario=110.0, cantidad_presupuesto=493.83 WHERE codigo='OE.5.6.13.3.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14 - SISTEMA DE AIRE COMPRIMIDO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.1 - TUBERIAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.14.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.1.1 - TUBERÍA DE COBRE "TIPO K" DE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=120.92, cantidad_presupuesto=50.75 WHERE codigo='OE.5.6.14.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.1.2 - TUBERÍA DE COBRE "TIPO K" DE 1"
  UPDATE catalogo_partidas SET precio_unitario=99.4, cantidad_presupuesto=97.97 WHERE codigo='OE.5.6.14.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.1.3 - TUBERÍA DE COBRE "TIPO K" DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=87.1, cantidad_presupuesto=206.39 WHERE codigo='OE.5.6.14.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.1.4 - TUBERÍA DE COBRE "TIPO K" DE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=74.08, cantidad_presupuesto=235.19 WHERE codigo='OE.5.6.14.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2 - ACCESORIOS DE TUBERIAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.14.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.1 - CODO DE COBRE DE 1 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=117.67, cantidad_presupuesto=8.0 WHERE codigo='OE.5.6.14.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.2 - CODO DE COBRE DE 1" X 90°
  UPDATE catalogo_partidas SET precio_unitario=104.94, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.14.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.3 - CODO DE COBRE DE 3/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=97.87, cantidad_presupuesto=14.0 WHERE codigo='OE.5.6.14.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.4 - CODO DE COBRE DE 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=92.87, cantidad_presupuesto=16.0 WHERE codigo='OE.5.6.14.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.5 - TEE DE COBRE DE 1 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=143.9, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.14.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.6 - TEE DE COBRE DE 1" X 90°
  UPDATE catalogo_partidas SET precio_unitario=110.5, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.14.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.7 - TEE DE COBRE DE 3/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=94.73, cantidad_presupuesto=12.0 WHERE codigo='OE.5.6.14.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.8 - TEE DE COBRE DE 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=94.05, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.14.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.9 - REDUCCIÓN DE COBRE 1 1/2" A 1"
  UPDATE catalogo_partidas SET precio_unitario=104.87, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.14.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.10 - REDUCCIÓN DE COBRE 1 1/2" A 3/4"
  UPDATE catalogo_partidas SET precio_unitario=101.57, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.14.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.11 - REDUCCIÓN DE COBRE 1" A 3/4"
  UPDATE catalogo_partidas SET precio_unitario=97.16, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.14.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.12 - REDUCCIÓN DE COBRE 1" A 1/2"
  UPDATE catalogo_partidas SET precio_unitario=99.69, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.14.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.13 - REDUCCIÓN DE COBRE 3/4" A 1/2"
  UPDATE catalogo_partidas SET precio_unitario=95.66, cantidad_presupuesto=18.0 WHERE codigo='OE.5.6.14.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.14 - UNION UNIVERSAL DE COBRE 1"
  UPDATE catalogo_partidas SET precio_unitario=118.37, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.14.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.15 - UNION UNIVERSAL DE COBRE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=110.47, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.14.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.16 - UNION UNIVERSAL DE COBRE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=103.17, cantidad_presupuesto=78.0 WHERE codigo='OE.5.6.14.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.17 - UNION SIMPLE DE COBRE DE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=102.37, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.14.2.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.18 - UNION SIMPLE DE COBRE DE 1"
  UPDATE catalogo_partidas SET precio_unitario=97.37, cantidad_presupuesto=7.0 WHERE codigo='OE.5.6.14.2.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.19 - UNION SIMPLE DE COBRE DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=95.77, cantidad_presupuesto=25.0 WHERE codigo='OE.5.6.14.2.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.2.20 - UNION SIMPLE DE COBRE DE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=92.37, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.14.2.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.3 - VALVULAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.14.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.3.1 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1"
  UPDATE catalogo_partidas SET precio_unitario=308.88, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.14.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.3.2 - VÁLVULA DE BOLA DE TRES PIEZAS DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=241.75, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.14.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.3.3 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=193.57, cantidad_presupuesto=38.0 WHERE codigo='OE.5.6.14.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.4 - EQUIPAMIENTO ESPECIAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.14.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.4.1 - COLGADOR PARA TUBERÍA SEGÚN PLANO
  UPDATE catalogo_partidas SET precio_unitario=34.99, cantidad_presupuesto=228.0 WHERE codigo='OE.5.6.14.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.4.2 - SOPORTE DE TUBERÍA DE PISO
  UPDATE catalogo_partidas SET precio_unitario=44.17, cantidad_presupuesto=27.0 WHERE codigo='OE.5.6.14.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.4.3 - SOPORTE DE TUBERÍA DE PARED
  UPDATE catalogo_partidas SET precio_unitario=72.97, cantidad_presupuesto=8.0 WHERE codigo='OE.5.6.14.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.4.4 - COMPRESOR DE AIRE DE 7.5 KW, 25.5 M3/H @3400 MSNM.
  UPDATE catalogo_partidas SET precio_unitario=81900.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.14.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.4.5 - SALIDA PARA AIRE COMPRIMIDO DE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=429.08, cantidad_presupuesto=27.0 WHERE codigo='OE.5.6.14.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.4.6 - JUNTA FLEXIBLE DE 1" , 1M
  UPDATE catalogo_partidas SET precio_unitario=389.91, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.14.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.4.7 - JUNTA FLEXIBLE DE 3/4" , 1M
  UPDATE catalogo_partidas SET precio_unitario=219.91, cantidad_presupuesto=9.0 WHERE codigo='OE.5.6.14.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.4.8 - JUNTA FLEXIBLE DE 1/2" , 1M
  UPDATE catalogo_partidas SET precio_unitario=129.91, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.14.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.14.4.9 - PRUEBAS CRUZADAS Y DE HERMETICIDAD.
  UPDATE catalogo_partidas SET precio_unitario=9520.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.14.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15 - SISTEMA DE OXÍGENO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.1 - TUBERÍAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.15.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.1.1 - TUBERÍA DE COBRE "TIPO K" DE 2"
  UPDATE catalogo_partidas SET precio_unitario=361.3, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.1.2 - TUBERÍA DE COBRE "TIPO K" DE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=117.8, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.1.3 - TUBERÍA DE COBRE "TIPO K" DE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=156.14, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.1.4 - TUBERÍA DE COBRE "TIPO K" DE 1"
  UPDATE catalogo_partidas SET precio_unitario=96.8, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.1.5 - TUBERÍA DE COBRE "TIPO K" DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=84.8, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.1.6 - TUBERÍA DE COBRE "TIPO K" DE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=72.1, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.1.7 - TUBERÍA DE COBRE "TIPO K" DE 2" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=366.45, cantidad_presupuesto=197.31 WHERE codigo='OE.5.6.15.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.1.8 - TUBERÍA DE COBRE "TIPO K" DE 1 1/2" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=108.01, cantidad_presupuesto=85.03 WHERE codigo='OE.5.6.15.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.1.9 - TUBERÍA DE COBRE "TIPO K" DE 1 1/4" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=145.96, cantidad_presupuesto=80.02 WHERE codigo='OE.5.6.15.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.1.10 - TUBERÍA DE COBRE "TIPO K" DE 1" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=81.7, cantidad_presupuesto=150.0 WHERE codigo='OE.5.6.15.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.1.11 - TUBERÍA DE COBRE "TIPO K" DE 3/4" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=67.43, cantidad_presupuesto=439.66 WHERE codigo='OE.5.6.15.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.1.12 - TUBERÍA DE COBRE "TIPO K" DE 1/2" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=52.64, cantidad_presupuesto=565.7 WHERE codigo='OE.5.6.15.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.1.13 - PINTURA EN TUBERIA - SISTEMA DE OXÍGENO
  UPDATE catalogo_partidas SET precio_unitario=54.6, cantidad_presupuesto=42.21 WHERE codigo='OE.5.6.15.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.1.14 - EMBALADO DE TUBERIA CON PAPEL FILM - SISTEMA DE OXÍGENO
  UPDATE catalogo_partidas SET precio_unitario=15.84, cantidad_presupuesto=1517.72 WHERE codigo='OE.5.6.15.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2 - ACCESORIOS DE TUBERIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.15.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.1 - CODO DE COBRE 2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=88.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.2 - CODO DE COBRE 1 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=68.06, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.3 - CODO DE COBRE 1 1/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=63.63, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.4 - CODO DE COBRE 1" X 90°
  UPDATE catalogo_partidas SET precio_unitario=60.58, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.5 - CODO DE COBRE 3/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=52.0, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.6 - CODO DE COBRE 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=46.71, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.7 - TEE DE COBRE 2" X90°
  UPDATE catalogo_partidas SET precio_unitario=135.04, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.8 - TEE DE COBRE 1 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=100.66, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.9 - TEE DE COBRE 1 1/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=84.71, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.10 - TEE DE COBRE 1" X 90°
  UPDATE catalogo_partidas SET precio_unitario=67.26, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.11 - TEE DE COBRE 3/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=56.93, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.12 - TEE DE COBRE 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=50.81, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.13 - REDUCCION DE COBRE 2" - 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=121.84, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.14 - REDUCCION DE COBRE 2" - 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=79.95, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.15 - REDUCCION DE COBRE 2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=76.9, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.16 - REDUCCION DE COBRE 2" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=58.55, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.17 - REDUCCIÓN DE COBRE 1 1 /2" A 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=74.77, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.18 - REDUCCIÓN DE COBRE 1 1 /2" A 3/4"
  UPDATE catalogo_partidas SET precio_unitario=56.6, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.19 - REDUCCION DE COBRE 1 1/4" - 1"
  UPDATE catalogo_partidas SET precio_unitario=55.02, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.20 - REDUCCION DE COBRE 1 1/4" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=56.11, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.21 - REDUCCION DE COBRE 1" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=52.19, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.21' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.22 - REDUCCION DE COBRE 1" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=54.72, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.22' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.23 - REDUCCION DE COBRE 3/4" - 1/2"
  UPDATE catalogo_partidas SET precio_unitario=49.81, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.23' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.24 - UNION UNIVERSAL DE COBRE 2"
  UPDATE catalogo_partidas SET precio_unitario=153.42, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.24' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.25 - UNION UNIVERSAL DE COBRE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=65.22, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.25' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.26 - UNION UNIVERSAL DE COBRE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=73.92, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.26' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.27 - UNION UNIVERSAL DE COBRE 1"
  UPDATE catalogo_partidas SET precio_unitario=69.92, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.27' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.28 - UNION UNIVERSAL DE COBRE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=72.52, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.28' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.29 - UNION UNIVERSAL DE COBRE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=65.22, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.29' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.30 - UNION SIMPLE DE COBRE 2"
  UPDATE catalogo_partidas SET precio_unitario=65.84, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.30' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.31 - UNION SIMPLE DE COBRE 1 1/ 2"
  UPDATE catalogo_partidas SET precio_unitario=62.34, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.31' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.32 - UNION SIMPLE DE COBRE 1 1/ 4"
  UPDATE catalogo_partidas SET precio_unitario=59.44, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.32' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.33 - UNION SIMPLE DE COBRE 1"
  UPDATE catalogo_partidas SET precio_unitario=57.34, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.33' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.34 - UNION SIMPLE DE COBRE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=55.74, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.34' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.35 - UNION SIMPLE DE COBRE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=52.34, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.2.35' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.36 - CODO DE COBRE 2" X 90° OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=242.06, cantidad_presupuesto=26.0 WHERE codigo='OE.5.6.15.2.36' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.37 - CODO DE COBRE 1 1/2" X 90° OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=160.97, cantidad_presupuesto=9.0 WHERE codigo='OE.5.6.15.2.37' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.38 - CODO DE COBRE 1 1/4" X 90° OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=141.11, cantidad_presupuesto=16.0 WHERE codigo='OE.5.6.15.2.38' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.39 - CODO DE COBRE 1" X 90° OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=122.46, cantidad_presupuesto=16.0 WHERE codigo='OE.5.6.15.2.39' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.40 - CODO DE COBRE 3/4" X 90° OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=82.43, cantidad_presupuesto=43.0 WHERE codigo='OE.5.6.15.2.40' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.41 - CODO DE COBRE 1 1/2" X 45° OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=208.85, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.15.2.41' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.42 - CODO DE COBRE 1" X 45° OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=114.04, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.15.2.42' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.43 - CODO DE COBRE 1/2" X 45° OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=105.34, cantidad_presupuesto=24.0 WHERE codigo='OE.5.6.15.2.43' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.44 - CODO DE COBRE 3/4" X 45° OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=85.71, cantidad_presupuesto=8.0 WHERE codigo='OE.5.6.15.2.44' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.45 - CODO DE COBRE 1/2" X 90° OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=75.29, cantidad_presupuesto=265.0 WHERE codigo='OE.5.6.15.2.45' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.46 - TEE DE COBRE 2" X90° OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=459.33, cantidad_presupuesto=10.0 WHERE codigo='OE.5.6.15.2.46' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.47 - TEE DE COBRE 1 1/2" X 90° OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=358.6, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.15.2.47' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.48 - TEE DE COBRE 1 1/4" X 90° OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=315.48, cantidad_presupuesto=14.0 WHERE codigo='OE.5.6.15.2.48' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.49 - TEE DE COBRE 1" X 90° OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=217.5, cantidad_presupuesto=32.0 WHERE codigo='OE.5.6.15.2.49' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.50 - TEE DE COBRE 3/4" X 90° OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=167.57, cantidad_presupuesto=60.0 WHERE codigo='OE.5.6.15.2.50' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.51 - TEE DE COBRE 1/2" X 90° OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=129.58, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.15.2.51' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.52 - REDUCCION DE COBRE 2" - 1 1/2" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=287.4, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.15.2.52' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.53 - REDUCCION DE COBRE 2" - 1 1/4" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=279.03, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.15.2.53' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.54 - REDUCCION DE COBRE 2" - 1" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=276.91, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.15.2.54' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.55 - REDUCCION DE COBRE 2" - 3/4" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=276.51, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.15.2.55' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.56 - REDUCCIÓN DE COBRE 1 1 /2" A 1 1/4" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=198.35, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.15.2.56' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.57 - REDUCCIÓN DE COBRE 1 1 /2" A 3/4" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=197.69, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.15.2.57' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.58 - REDUCCION DE COBRE 1 1/4" - 1" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=125.59, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.15.2.58' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.59 - REDUCCION DE COBRE 1 1/4" - 3/4" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=124.69, cantidad_presupuesto=9.0 WHERE codigo='OE.5.6.15.2.59' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.60 - REDUCCION DE COBRE 1" - 3/4" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=111.65, cantidad_presupuesto=30.0 WHERE codigo='OE.5.6.15.2.60' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.61 - REDUCCION DE COBRE 1" - 1/2" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=112.36, cantidad_presupuesto=12.0 WHERE codigo='OE.5.6.15.2.61' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.62 - REDUCCION DE COBRE 3/4" - 1/2" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=97.39, cantidad_presupuesto=88.0 WHERE codigo='OE.5.6.15.2.62' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.63 - UNION UNIVERSAL DE COBRE 2" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=388.59, cantidad_presupuesto=12.0 WHERE codigo='OE.5.6.15.2.63' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.64 - UNION UNIVERSAL DE COBRE 1 1/2" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=263.62, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.15.2.64' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.65 - UNION UNIVERSAL DE COBRE 1 1/4" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=178.39, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.15.2.65' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.66 - UNION UNIVERSAL DE COBRE 1" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=150.3, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.15.2.66' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.67 - UNION UNIVERSAL DE COBRE 3/4" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=127.32, cantidad_presupuesto=22.0 WHERE codigo='OE.5.6.15.2.67' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.68 - UNION UNIVERSAL DE COBRE 1/2" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=95.14, cantidad_presupuesto=200.0 WHERE codigo='OE.5.6.15.2.68' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.69 - UNION SIMPLE DE COBRE 2" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=296.95, cantidad_presupuesto=20.0 WHERE codigo='OE.5.6.15.2.69' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.70 - UNION SIMPLE DE COBRE 1 1/ 2" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=187.55, cantidad_presupuesto=7.0 WHERE codigo='OE.5.6.15.2.70' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.71 - UNION SIMPLE DE COBRE 1 1/ 4" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=122.72, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.15.2.71' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.72 - UNION SIMPLE DE COBRE 1" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=112.38, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.15.2.72' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.73 - UNION SIMPLE DE COBRE 3/4" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=99.92, cantidad_presupuesto=24.0 WHERE codigo='OE.5.6.15.2.73' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.2.74 - UNION SIMPLE DE COBRE 1/2" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=79.51, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.15.2.74' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.3 - VALVULAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.15.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.3.1 - VÁLVULA DE BOLA DE TRES PIEZAS DE 2"
  UPDATE catalogo_partidas SET precio_unitario=220.76, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.3.2 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=260.43, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.3.3 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=453.15, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.3.4 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1"
  UPDATE catalogo_partidas SET precio_unitario=299.74, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.3.5 - VÁLVULA DE BOLA DE TRES PIEZAS DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=232.61, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.3.6 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1/2"
  UPDATE catalogo_partidas SET precio_unitario=184.43, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.3.7 - VÁLVULA DE BOLA DE TRES PIEZAS DE 2" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=491.49, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.15.3.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.3.8 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1 1/2" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=387.07, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.15.3.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.3.9 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1 1/4" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=282.67, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.15.3.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.3.10 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=387.83, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.15.3.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.3.11 - VÁLVULA DE BOLA DE TRES PIEZAS DE 3/4" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=310.55, cantidad_presupuesto=12.0 WHERE codigo='OE.5.6.15.3.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.3.12 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1/2" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=244.59, cantidad_presupuesto=100.0 WHERE codigo='OE.5.6.15.3.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.4 - EQUIPAMIENTO ESPECIAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.15.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.4.1 - COLGADOR PARA TUBERÍA SEGÚN PLANO
  UPDATE catalogo_partidas SET precio_unitario=34.99, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.15.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.4.2 - SOPORTE DE TUBERÍA DE PARED
  UPDATE catalogo_partidas SET precio_unitario=73.79, cantidad_presupuesto=8.0 WHERE codigo='OE.5.6.15.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.4.3 - TANQUE DE OXIGENO CRIOGENICO DE 4700 GALONES
  UPDATE catalogo_partidas SET precio_unitario=355870.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.15.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.4.4 - MANIFOLD REGULADOR DE SUMINISTRO DE OXÍGENO ELECTRÓNICO.
  UPDATE catalogo_partidas SET precio_unitario=71838.32, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.15.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.4.5 - BOTELLA DE OXÍGENO MEDICINAL DE 10m3 CON CONTENIDO
  UPDATE catalogo_partidas SET precio_unitario=2867.08, cantidad_presupuesto=60.0 WHERE codigo='OE.5.6.15.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.4.6 - SALIDA PARA OXIGENO MEDICINAL DE 3/8"
  UPDATE catalogo_partidas SET precio_unitario=591.55, cantidad_presupuesto=103.0 WHERE codigo='OE.5.6.15.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.4.7 - SALIDA PARA ALARMA AUDIOVISUAL DE OXÍGENO
  UPDATE catalogo_partidas SET precio_unitario=7185.03, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.15.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.4.8 - JUNTA FLEXIBLES DE 2" , 1M
  UPDATE catalogo_partidas SET precio_unitario=729.91, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.15.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.4.9 - JUNTA FLEXIBLES DE 1 1/2" , 1M
  UPDATE catalogo_partidas SET precio_unitario=461.91, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.15.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.4.10 - JUNTA FLEXIBLES DE 1 1/4" , 1M
  UPDATE catalogo_partidas SET precio_unitario=417.91, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.15.4.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.4.11 - JUNTA FLEXIBLES DE 1" , 1M
  UPDATE catalogo_partidas SET precio_unitario=389.91, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.15.4.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.4.12 - JUNTA FLEXIBLES DE 3/4" , 1M
  UPDATE catalogo_partidas SET precio_unitario=219.91, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.15.4.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.4.13 - PRUEBAS CRUZADAS Y DE HERMETICIDAD.
  UPDATE catalogo_partidas SET precio_unitario=2227.29, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.15.4.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.5 - EQUIPOS DE CENTRAL DE OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.15.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.15.5.1 - CENTRAL DE OXÍGENO-GENERADOR DE OXÍGENO VSA
  UPDATE catalogo_partidas SET precio_unitario=2600000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.15.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16 - SISTEMA DE VENTILACIÓN MECÁNICA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1 - EQUIPOS DE EXTRACCIÓN DE AIRE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.16.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.1 - EXTRACTOR HELICOCENTRIFUGO 127 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.2 - EXTRACTOR HELICOCENTRIFUGO 149 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.3 - EXTRACTOR HELICOCENTRIFUGO 166 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.4 - EXTRACTOR HELICOCENTRIFUGO 175 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.5 - EXTRACTOR HELICOCENTRIFUGO 200 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.6 - EXTRACTOR HELICOCENTRIFUGO 215 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.7 - EXTRACTOR HELICOCENTRIFUGO 217 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.8 - EXTRACTOR HELICOCENTRIFUGO 238 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.9 - EXTRACTOR HELICOCENTRIFUGO 239 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.10 - EXTRACTOR HELICOCENTRIFUGO 240 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.11 - EXTRACTOR HELICOCENTRIFUGO 253 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.12 - EXTRACTOR HELICOCENTRIFUGO 257 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.16.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.13 - EXTRACTOR HELICOCENTRIFUGO 262 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.14 - EXTRACTOR HELICOCENTRIFUGO 263 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.15 - EXTRACTOR HELICOCENTRIFUGO 276 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.16.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.16 - EXTRACTOR HELICOCENTRIFUGO 280 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.17 - EXTRACTOR HELICOCENTRIFUGO 282 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.18 - EXTRACTOR HELICOCENTRIFUGO 283 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.19 - EXTRACTOR HELICOCENTRIFUGO 292 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.20 - EXTRACTOR HELICOCENTRIFUGO 308 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.21 - EXTRACTOR HELICOCENTRIFUGO 314 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.21' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.22 - EXTRACTOR HELICOCENTRIFUGO 318 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.22' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.23 - EXTRACTOR HELICOCENTRIFUGO 319 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.23' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.24 - EXTRACTOR HELICOCENTRIFUGO 335 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.24' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.25 - EXTRACTOR HELICOCENTRIFUGO 344 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.25' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.26 - EXTRACTOR HELICOCENTRIFUGO 359 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.26' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.27 - EXTRACTOR HELICOCENTRIFUGO 378 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.27' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.28 - EXTRACTOR HELICOCENTRIFUGO 380 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.28' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.29 - EXTRACTOR CENTRIFUGO DE AIRE 743 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.29' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.30 - EXTRACTOR CENTRIFUGO DE AIRE 820 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.30' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.31 - EXTRACTOR CENTRIFUGO DE AIRE 876 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.31' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.32 - EXTRACTOR CENTRIFUGO DE AIRE 921 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.32' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.33 - EXTRACTOR CENTRIFUGO DE AIRE 924 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.33' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.34 - EXTRACTOR CENTRIFUGO DE AIRE 960 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.34' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.35 - EXTRACTOR CENTRIFUGO DE AIRE 987 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.35' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.36 - EXTRACTOR CENTRIFUGO DE AIRE 1014 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.36' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.37 - EXTRACTOR CENTRIFUGO DE AIRE 1048 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.37' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.38 - EXTRACTOR CENTRIFUGO DE AIRE 1052 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.38' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.39 - EXTRACTOR CENTRIFUGO DE AIRE 1093 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.39' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.40 - EXTRACTOR CENTRIFUGO DE AIRE 1218 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.16.1.40' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.41 - EXTRACTOR CENTRIFUGO DE AIRE 1232 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.41' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.42 - EXTRACTOR CENTRIFUGO DE AIRE 1248 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.42' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.43 - EXTRACTOR CENTRIFUGO DE AIRE 1290 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.43' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.44 - EXTRACTOR CENTRIFUGO DE AIRE 1307 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.44' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.45 - EXTRACTOR CENTRIFUGO DE AIRE 1347 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.45' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.46 - EXTRACTOR CENTRIFUGO DE AIRE 1609 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.46' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.47 - EXTRACTOR CENTRIFUGO DE AIRE 2084 CFM
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.47' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.48 - EXTRACTOR CENTRIFUGO DE AIRE 1748 CFM UL/FM COCINA
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.48' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.49 - EXTRACTOR CENTRIFUGO DE AIRE 1935 CFM UL/FM COCINA
  UPDATE catalogo_partidas SET precio_unitario=4476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.49' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.50 - EXTRACTOR CENTRIFUGO DE AIRE 2185 CFM UL/FM COCINA
  UPDATE catalogo_partidas SET precio_unitario=5476.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.50' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.51 - EXTRACTOR CENTRIFUGO DE AIRE 2546 CFM UL/FM COCINA
  UPDATE catalogo_partidas SET precio_unitario=5786.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.51' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.1.52 - PRECIPITADOR ELECTROSTATICO, 7750CFM
  UPDATE catalogo_partidas SET precio_unitario=528000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.1.52' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2 - EQUIPOS DE INYECCION DE AIRE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.16.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.1 - INYECTOR HELICOCENTRIFUGO 114 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.2 - INYECTOR HELICOCENTRIFUGO 150 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.3 - INYECTOR HELICOCENTRIFUGO 180 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.4 - INYECTOR HELICOCENTRIFUGO 194 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.5 - INYECTOR HELICOCENTRIFUGO 210 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.6 - INYECTOR HELICOCENTRIFUGO 216 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.16.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.7 - INYECTOR HELICOCENTRIFUGO 217 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.8 - INYECTOR HELICOCENTRIFUGO 222 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.9 - INYECTOR HELICOCENTRIFUGO 230 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.10 - INYECTOR HELICOCENTRIFUGO 250 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.11 - INYECTOR HELICOCENTRIFUGO 254 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.12 - INYECTOR HELICOCENTRIFUGO 262 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.13 - INYECTOR HELICOCENTRIFUGO 276 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.16.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.14 - INYECTOR HELICOCENTRIFUGO 285 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.15 - INYECTOR HELICOCENTRIFUGO 286 CFM, 102W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.16 - INYECTOR HELICOCENTRIFUGO 292 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.17 - INYECTOR HELICOCENTRIFUGO 319 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.18 - INYECTOR HELICOCENTRIFUGO 340 CFM, 130W, 220/1/60
  UPDATE catalogo_partidas SET precio_unitario=3076.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.19 - INYECTOR CENTRIFUGO DE AIRE 233 CFM
  UPDATE catalogo_partidas SET precio_unitario=2376.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.20 - INYECTOR CENTRIFUGO DE AIRE 309 CFM
  UPDATE catalogo_partidas SET precio_unitario=2376.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.21 - INYECTOR CENTRIFUGO DE AIRE 341 CFM
  UPDATE catalogo_partidas SET precio_unitario=2376.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.21' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.22 - INYECTOR CENTRIFUGO DE AIRE 394 CFM
  UPDATE catalogo_partidas SET precio_unitario=2376.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.22' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.23 - INYECTOR CENTRIFUGO DE AIRE 432 CFM
  UPDATE catalogo_partidas SET precio_unitario=2376.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.23' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.24 - INYECTOR CENTRIFUGO DE AIRE 444 CFM
  UPDATE catalogo_partidas SET precio_unitario=2376.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.24' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.25 - INYECTOR CENTRIFUGO DE AIRE 445 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.25' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.26 - INYECTOR CENTRIFUGO DE AIRE 448 CFM
  UPDATE catalogo_partidas SET precio_unitario=4694.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.26' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.27 - INYECTOR CENTRIFUGO DE AIRE 456 CFM
  UPDATE catalogo_partidas SET precio_unitario=4694.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.27' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.28 - INYECTOR CENTRIFUGO DE AIRE 458 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.16.2.28' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.29 - INYECTOR CENTRIFUGO DE AIRE 459 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.16.2.29' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.30 - INYECTOR CENTRIFUGO DE AIRE 461 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.30' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.31 - INYECTOR CENTRIFUGO DE AIRE 488 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.31' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.32 - INYECTOR CENTRIFUGO DE AIRE 489 CFM
  UPDATE catalogo_partidas SET precio_unitario=4694.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.32' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.33 - INYECTOR CENTRIFUGO DE AIRE 491 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.33' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.34 - INYECTOR CENTRIFUGO DE AIRE 504 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.34' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.35 - INYECTOR CENTRIFUGO DE AIRE 527 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.35' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.36 - INYECTOR CENTRIFUGO DE AIRE 528 CFM
  UPDATE catalogo_partidas SET precio_unitario=4694.93, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.16.2.36' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.37 - INYECTOR CENTRIFUGO DE AIRE 625 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.37' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.38 - INYECTOR CENTRIFUGO DE AIRE 632 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.16.2.38' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.39 - INYECTOR CENTRIFUGO DE AIRE 752 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.39' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.40 - INYECTOR CENTRIFUGO DE AIRE 819 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.40' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.41 - INYECTOR CENTRIFUGO DE AIRE 932 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.41' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.42 - INYECTOR CENTRIFUGO DE AIRE 949 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.42' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.43 - INYECTOR CENTRIFUGO DE AIRE 987 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.43' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.44 - INYECTOR CENTRIFUGO DE AIRE 1165 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.44' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.45 - INYECTOR CENTRIFUGO DE AIRE 1387 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.45' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.46 - INYECTOR CENTRIFUGO DE AIRE 1424 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.46' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.47 - INYECTOR CENTRIFUGO DE AIRE 1748 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.47' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.2.48 - INYECTOR CENTRIFUGO DE AIRE 1828 CFM
  UPDATE catalogo_partidas SET precio_unitario=4676.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.2.48' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.3 - EQUIPOS DE AIRE ACONDICIONADO SPLIT DECORATIVO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.16.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.3.1 - UNIDAD DE AIRE ACONDICIONADO TIPO SPLIT DECORATIVO DE 24000 BTU/H
  UPDATE catalogo_partidas SET precio_unitario=6714.93, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.16.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.3.2 - UNIDAD DE AIRE ACONDICIONADO TIPO SPLIT DECORATIVO DE 12000 BTU/H
  UPDATE catalogo_partidas SET precio_unitario=4052.93, cantidad_presupuesto=7.0 WHERE codigo='OE.5.6.16.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.3.3 - UNIDAD DE AIRE ACONDICIONADO TIPO SPLIT DECORATIVO DE 9000 BTU/H
  UPDATE catalogo_partidas SET precio_unitario=3163.93, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.16.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.4 - EQUIPOS DE TRATAMIENTO DE AIRE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.16.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.4.1 - EQUIPO AA SPLIT DUCTO TIPO HEAT PUMP (FRIO CALOR)  59000 BTU/hr
  UPDATE catalogo_partidas SET precio_unitario=17134.74, cantidad_presupuesto=10.0 WHERE codigo='OE.5.6.16.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.4.2 - EQUIPO AA SPLIT DUCTO TIPO HEAT PUMP (FRIO CALOR)  44500 BTU/hr
  UPDATE catalogo_partidas SET precio_unitario=15034.74, cantidad_presupuesto=14.0 WHERE codigo='OE.5.6.16.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.4.3 - EQUIPO AA SPLIT DUCTO TIPO HEAT PUMP (FRIO CALOR)  32800 BTU/hr
  UPDATE catalogo_partidas SET precio_unitario=13669.74, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.16.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.4.4 - INSTALACIÓN ELÉCTRICA DEL SISTEMA DE HVAC
  UPDATE catalogo_partidas SET precio_unitario=946.46, cantidad_presupuesto=26.0 WHERE codigo='OE.5.6.16.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.4.5 - PRUEBAS, BALANCEO Y ARRANQUE DEL SISTEMA
  UPDATE catalogo_partidas SET precio_unitario=4932.4, cantidad_presupuesto=26.0 WHERE codigo='OE.5.6.16.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.4.6 - LÁMPARAS ULTRAVIOLETA EN DUCTO
  UPDATE catalogo_partidas SET precio_unitario=2667.33, cantidad_presupuesto=54.0 WHERE codigo='OE.5.6.16.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5 - SISTEMA DE DUCTOS Y ACCESORIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.16.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.1 - DUCTOS Y ACCESORIOS - TRATAMIENTO AISLADO
  UPDATE catalogo_partidas SET precio_unitario=43.09, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.16.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.2 - DUCTOS Y ACCESORIOS - NO AISLADO
  UPDATE catalogo_partidas SET precio_unitario=39.12, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.16.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.3 - DUCTOS Y ACCESORIOS - CAMPANA EXTRACTORA
  UPDATE catalogo_partidas SET precio_unitario=32.18, cantidad_presupuesto=3228.29 WHERE codigo='OE.5.6.16.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.4 - DIFUSORES DE INYECCION DE AIRE
  UPDATE catalogo_partidas SET precio_unitario=1640.46, cantidad_presupuesto=14.42 WHERE codigo='OE.5.6.16.5.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.5 - REJILLAS DE EXTRACCION DE AIRE
  UPDATE catalogo_partidas SET precio_unitario=1779.7, cantidad_presupuesto=21.1 WHERE codigo='OE.5.6.16.5.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.6 - Trazo y replanteo durante el proceso de construccion
  UPDATE catalogo_partidas SET precio_unitario=3.24, cantidad_presupuesto=31500.0 WHERE codigo='OE.5.6.16.5.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.7 - Habilitado y suministro de ductos para sistema de ventilacion
  UPDATE catalogo_partidas SET precio_unitario=14.55, cantidad_presupuesto=24059.43 WHERE codigo='OE.5.6.16.5.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.8 - Habilitado  y suministro de accesorios para ductos de sistema de ventilacion
  UPDATE catalogo_partidas SET precio_unitario=23.06, cantidad_presupuesto=10529.41 WHERE codigo='OE.5.6.16.5.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.9 - Habilitado e instalacion de soportes para ductos de ventilacion
  UPDATE catalogo_partidas SET precio_unitario=114.81, cantidad_presupuesto=5000.0 WHERE codigo='OE.5.6.16.5.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.10 - Instalacion de ductos sistema de ventilacion
  UPDATE catalogo_partidas SET precio_unitario=26.55, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.16.5.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.11 - DUCTOS Y ACCESORIOS - TRATAMIENTO AISLADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.16.5.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.11.1 - Habilitado y suministro de ductos para sistema de ventilacion - aislado
  UPDATE catalogo_partidas SET precio_unitario=14.55, cantidad_presupuesto=8758.69 WHERE codigo='OE.5.6.16.5.11.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.11.2 - Habilitado y suministro de accesorios para ductos de sistema de ventilacion - aislado
  UPDATE catalogo_partidas SET precio_unitario=23.06, cantidad_presupuesto=4379.34 WHERE codigo='OE.5.6.16.5.11.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.11.3 - Habilitado e instalacion de soportes para ductos de ventilacion - aislado
  UPDATE catalogo_partidas SET precio_unitario=114.81, cantidad_presupuesto=2000.0 WHERE codigo='OE.5.6.16.5.11.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.11.4 - Instalacion de ductos sistema de ventilacion - aislado
  UPDATE catalogo_partidas SET precio_unitario=40.83, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.16.5.11.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.11.5 - INSTALACION DE DUCTOS DE TRATAMIENTO AISLADO
  UPDATE catalogo_partidas SET precio_unitario=13.46, cantidad_presupuesto=13138.03 WHERE codigo='OE.5.6.16.5.11.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.11.6 - AISLAMIENTO TERMICO DE DUCTOS Y ACCESORIOS
  UPDATE catalogo_partidas SET precio_unitario=56.45, cantidad_presupuesto=4058.89 WHERE codigo='OE.5.6.16.5.11.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.12 - DUCTOS Y ACCESORIOS - TRATAMIENTO NO AISLADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.16.5.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.12.1 - INSTALACION DE DUCTOS DE TRATAMIENTO NO AISLADO
  UPDATE catalogo_partidas SET precio_unitario=13.46, cantidad_presupuesto=34773.12 WHERE codigo='OE.5.6.16.5.12.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.13 - EMBALADO DE DUCTOS AISLADOS Y NO AISLADOS CON PAPEL FILM
  UPDATE catalogo_partidas SET precio_unitario=94.48, cantidad_presupuesto=800.0 WHERE codigo='OE.5.6.16.5.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.14 - LIMPIEZA DE DUCTOS MANUAL
  UPDATE catalogo_partidas SET precio_unitario=13.53, cantidad_presupuesto=2500.0 WHERE codigo='OE.5.6.16.5.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.15 - REMOCION DE FILM EN DUCTOS Y ACCESRIOS
  UPDATE catalogo_partidas SET precio_unitario=1.91, cantidad_presupuesto=800.0 WHERE codigo='OE.5.6.16.5.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.16 - SELLADO FINAL DE DUCTOS
  UPDATE catalogo_partidas SET precio_unitario=53.24, cantidad_presupuesto=2875.0 WHERE codigo='OE.5.6.16.5.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.5.17 - CHAVETA PARA DUCTOS DE VENTILACION
  UPDATE catalogo_partidas SET precio_unitario=5.89, cantidad_presupuesto=7500.0 WHERE codigo='OE.5.6.16.5.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6 - FILTROS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.16.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.1 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (233 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.2 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (309 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.3 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (341 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.4 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (394 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.5 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (432 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.6 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (444 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.7 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (445 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.8 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (448 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.9 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (456 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.10 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (458 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.16.6.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.11 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (459 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.16.6.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.12 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (461 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.13 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (488 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.14 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (489 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.15 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (491 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.16 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (504 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.17 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (527 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.18 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (528 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.16.6.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.19 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (625 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.20 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (632 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.16.6.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.21 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (752 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.21' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.22 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (819 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.22' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.23 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (932 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.23' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.24 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (949 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.24' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.25 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (987 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.25' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.26 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (1165 CFM)
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.26' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.27 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (1387CFM)
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.27' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.28 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (1424 CFM)
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.28' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.29 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (1828 CFM)
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.29' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.30 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (1748 CFM)
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.30' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.31 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (743 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.31' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.32 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (820 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.32' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.33 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (876 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.33' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.34 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (921 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.34' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.35 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (924 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.35' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.36 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (960 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.36' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.37 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (987 CFM)
  UPDATE catalogo_partidas SET precio_unitario=6101.88, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.37' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.38 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (1014 CFM)
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.38' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.39 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (1048 CFM)
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.39' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.40 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (1052 CFM)
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.40' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.41 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (1093 CFM)
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.41' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.42 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (1218 CFM)
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.16.6.42' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.43 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (1232 CFM)
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.43' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.44 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (1248 CFM)
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.44' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.45 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (1290 CFM)
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.45' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.46 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (1307 CFM)
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.46' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.47 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (1347 CFM)
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.47' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.48 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (1609 CFM)
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.48' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.49 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (2084 CFM)
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.49' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.50 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (1748 CFM) COCINA
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.50' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.51 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (1935 CFM) COCINA
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.51' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.52 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (2185 CFM) COCINA
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.52' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.6.53 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (2546 CFM) COCINA
  UPDATE catalogo_partidas SET precio_unitario=5731.57, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.16.6.53' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.7 - HUMIDISTATO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.16.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.7.1 - HUMIDISTATO DE 1.13 KW
  UPDATE catalogo_partidas SET precio_unitario=2020.0, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.16.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.8 - CAJA DE VOLUMEN VARIABLE (VAV)
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.16.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.8.1 - CAJAS DE VOLUMEN VARIABLE DESDE QMIN: 80 CFM A QMAX: 250 CFM.
  UPDATE catalogo_partidas SET precio_unitario=2454.0, cantidad_presupuesto=59.0 WHERE codigo='OE.5.6.16.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.8.2 - VAV DESDE QMIN:80 CFM A QMAX:350 CFM
  UPDATE catalogo_partidas SET precio_unitario=2454.0, cantidad_presupuesto=32.0 WHERE codigo='OE.5.6.16.8.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.8.3 - VAV DESDE QMIN:80 CFM A QMAX:460 CFM
  UPDATE catalogo_partidas SET precio_unitario=2454.0, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.16.8.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.9 - DISPOSITIVOS DE CONTROL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.16.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.9.1 - TABLERO ELECTRICO PARA EQUIPOS INCL. VARIADOR DE FRECUENCIA
  UPDATE catalogo_partidas SET precio_unitario=22514.93, cantidad_presupuesto=12.0 WHERE codigo='OE.5.6.16.9.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.10 - DAMPER MANUAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.16.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.16.10.1 - DAMPER MANUAL
  UPDATE catalogo_partidas SET precio_unitario=364.2, cantidad_presupuesto=250.0 WHERE codigo='OE.5.6.16.10.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17 - SISTEMA DE VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.1 - TUBERÍAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.17.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.1.1 - TUBERÍA DE COBRE "TIPO K" DE 4"
  UPDATE catalogo_partidas SET precio_unitario=507.3, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.1.2 - TUBERÍA DE COBRE "TIPO K" DE 2"
  UPDATE catalogo_partidas SET precio_unitario=361.3, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.1.3 - TUBERÍA DE COBRE "TIPO K" DE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=117.8, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.1.4 - TUBERÍA DE COBRE "TIPO K" DE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=156.14, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.1.5 - TUBERÍA DE COBRE "TIPO K" DE 1"
  UPDATE catalogo_partidas SET precio_unitario=96.8, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.1.6 - TUBERÍA DE COBRE "TIPO K" DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=84.8, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.1.7 - TUBERÍA DE COBRE "TIPO K" DE 4" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=550.21, cantidad_presupuesto=33.3 WHERE codigo='OE.5.6.17.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.1.8 - TUBERÍA DE COBRE "TIPO K" DE 2" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=366.45, cantidad_presupuesto=77.27 WHERE codigo='OE.5.6.17.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.1.9 - TUBERÍA DE COBRE "TIPO K" DE 1 1/2" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=108.01, cantidad_presupuesto=141.94 WHERE codigo='OE.5.6.17.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.1.10 - TUBERÍA DE COBRE "TIPO K" DE 1 1/4" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=154.44, cantidad_presupuesto=105.32 WHERE codigo='OE.5.6.17.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.1.11 - TUBERÍA DE COBRE "TIPO K" DE 1" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=89.53, cantidad_presupuesto=170.69 WHERE codigo='OE.5.6.17.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.1.12 - TUBERÍA DE COBRE "TIPO K" DE 3/4" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=67.43, cantidad_presupuesto=972.13 WHERE codigo='OE.5.6.17.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.1.13 - PINTURA EN TUBERIA - SISTEMA DE VACÍO CLÍNICO
  UPDATE catalogo_partidas SET precio_unitario=54.6, cantidad_presupuesto=46.7 WHERE codigo='OE.5.6.17.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.1.14 - EMBALADO DE TUBERIA CON PAPEL FILM - SISTEMA DE VACÍO CLÍNICO
  UPDATE catalogo_partidas SET precio_unitario=15.84, cantidad_presupuesto=1500.65 WHERE codigo='OE.5.6.17.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2 - ACCESORIOS DE TUBERIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.17.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.1 - CODO DE COBRE DE 4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=117.51, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.2 - CODO DE COBRE 2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=88.41, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.3 - CODO DE COBRE 1 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=73.31, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.4 - CODO DE COBRE 1 1/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=63.63, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.5 - CODO DE COBRE 1" X 90°
  UPDATE catalogo_partidas SET precio_unitario=60.58, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.6 - CODO DE COBRE 3/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=52.0, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.7 - TEE DE COBRE 2"
  UPDATE catalogo_partidas SET precio_unitario=135.04, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.8 - TEE DE COBRE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=100.66, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.9 - TEE DE COBRE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=84.71, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.10 - TEE DE COBRE 1"
  UPDATE catalogo_partidas SET precio_unitario=67.26, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.11 - TEE DE COBRE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=56.93, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.12 - REDUCCIÓN DE COBRE 2" A 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=59.24, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.13 - REDUCCION DE COBRE 2" - 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=79.95, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.14 - REDUCCION DE COBRE 2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=76.9, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.15 - REDUCCIÓN DE COBRE 2" A 3/4"
  UPDATE catalogo_partidas SET precio_unitario=76.9, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.16 - REDUCCION DE COBRE 1 1/2" - 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=74.77, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.17 - REDUCCION DE COBRE 1 1/2" - 1"
  UPDATE catalogo_partidas SET precio_unitario=74.97, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.18 - REDUCCIÓN DE COBRE 1 1/2" A 3/4"
  UPDATE catalogo_partidas SET precio_unitario=56.6, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.19 - REDUCCION DE COBRE 1 1/4" - 1"
  UPDATE catalogo_partidas SET precio_unitario=55.02, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.20 - REDUCCION DE COBRE 1 1/4" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=56.11, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.21 - REDUCCION DE COBRE 1" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=52.19, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.21' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.22 - UNION UNIVERSAL DE COBRE 2"
  UPDATE catalogo_partidas SET precio_unitario=95.42, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.22' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.23 - UNION UNIVERSAL DE COBRE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=86.92, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.23' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.24 - UNION UNIVERSAL DE COBRE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=73.92, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.24' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.25 - UNION UNIVERSAL DE COBRE 1"
  UPDATE catalogo_partidas SET precio_unitario=69.92, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.25' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.26 - UNION UNIVERSAL DE COBRE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=72.52, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.26' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.27 - UNION SIMPLE DE COBRE 2"
  UPDATE catalogo_partidas SET precio_unitario=65.84, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.27' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.28 - UNION SIMPLE DE COBRE 1 1/ 2"
  UPDATE catalogo_partidas SET precio_unitario=62.34, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.28' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.29 - UNION SIMPLE DE COBRE 1 1/ 4"
  UPDATE catalogo_partidas SET precio_unitario=59.44, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.29' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.30 - UNION SIMPLE DE COBRE 1"
  UPDATE catalogo_partidas SET precio_unitario=57.34, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.30' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.31 - UNION SIMPLE DE COBRE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=55.74, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.2.31' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.32 - CODO DE COBRE DE 4" X 90° VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=277.47, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.17.2.32' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.33 - CODO DE COBRE 2" X 90° VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=242.06, cantidad_presupuesto=10.0 WHERE codigo='OE.5.6.17.2.33' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.34 - CODO DE COBRE 1 1/2" X 90° VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=160.97, cantidad_presupuesto=22.0 WHERE codigo='OE.5.6.17.2.34' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.35 - CODO DE COBRE 1 1/4" X 90° VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=141.11, cantidad_presupuesto=17.0 WHERE codigo='OE.5.6.17.2.35' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.36 - CODO DE COBRE 1" X 90° VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=122.46, cantidad_presupuesto=19.0 WHERE codigo='OE.5.6.17.2.36' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.37 - CODO DE COBRE 3/4" X 90° VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=82.43, cantidad_presupuesto=290.0 WHERE codigo='OE.5.6.17.2.37' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.38 - CODO DE COBRE 1 1/2" X 45° VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=208.85, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.17.2.38' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.39 - CODO DE COBRE 1" X 45° VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=114.04, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.17.2.39' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.40 - CODO DE COBRE 3/4" X 45° VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=85.71, cantidad_presupuesto=8.0 WHERE codigo='OE.5.6.17.2.40' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.41 - TEE DE COBRE 2" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=459.33, cantidad_presupuesto=7.0 WHERE codigo='OE.5.6.17.2.41' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.42 - TEE DE COBRE 1 1/2" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=358.6, cantidad_presupuesto=7.0 WHERE codigo='OE.5.6.17.2.42' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.43 - TEE DE COBRE 1 1/4" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=315.48, cantidad_presupuesto=12.0 WHERE codigo='OE.5.6.17.2.43' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.44 - TEE DE COBRE 1" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=217.5, cantidad_presupuesto=45.0 WHERE codigo='OE.5.6.17.2.44' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.45 - TEE DE COBRE 3/4" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=167.57, cantidad_presupuesto=51.0 WHERE codigo='OE.5.6.17.2.45' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.46 - REDUCCIÓN DE COBRE 2" A 1 1/2" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=287.4, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.17.2.46' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.47 - REDUCCION DE COBRE 2" - 1 1/4" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=279.03, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.17.2.47' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.48 - REDUCCION DE COBRE 2" - 1" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=276.91, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.17.2.48' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.49 - REDUCCIÓN DE COBRE 2" A 3/4" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=276.51, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.17.2.49' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.50 - REDUCCION DE COBRE 1 1/2" - 1 1/4" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=198.35, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.17.2.50' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.51 - REDUCCION DE COBRE 1 1/2" - 1" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=209.09, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.17.2.51' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.52 - REDUCCIÓN DE COBRE 1 1/2" A 3/4" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=197.69, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.17.2.52' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.53 - REDUCCION DE COBRE 1 1/4" - 1" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=125.59, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.17.2.53' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.54 - REDUCCION DE COBRE 1 1/4" - 3/4" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=124.69, cantidad_presupuesto=10.0 WHERE codigo='OE.5.6.17.2.54' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.55 - REDUCCION DE COBRE 1" - 3/4" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=111.65, cantidad_presupuesto=46.0 WHERE codigo='OE.5.6.17.2.55' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.56 - UNION UNIVERSAL DE COBRE 2" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=369.28, cantidad_presupuesto=10.0 WHERE codigo='OE.5.6.17.2.56' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.57 - UNION UNIVERSAL DE COBRE 1 1/2" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=263.62, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.17.2.57' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.58 - UNION UNIVERSAL DE COBRE 1 1/4" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=178.39, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.17.2.58' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.59 - UNION UNIVERSAL DE COBRE 1" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=150.3, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.17.2.59' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.60 - UNION UNIVERSAL DE COBRE 3/4" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=127.32, cantidad_presupuesto=225.0 WHERE codigo='OE.5.6.17.2.60' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.61 - UNION SIMPLE DE COBRE 2" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=296.95, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.17.2.61' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.62 - UNION SIMPLE DE COBRE 1 1/ 2" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=187.55, cantidad_presupuesto=13.0 WHERE codigo='OE.5.6.17.2.62' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.63 - UNION SIMPLE DE COBRE 1 1/ 4" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=122.72, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.17.2.63' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.64 - UNION SIMPLE DE COBRE 1" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=112.38, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.17.2.64' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.65 - UNION SIMPLE DE COBRE 3/4" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=99.92, cantidad_presupuesto=28.0 WHERE codigo='OE.5.6.17.2.65' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.3 - VALVULAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.17.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.3.1 - VÁLVULA DE BOLA DE TRES PIEZAS DE 2"
  UPDATE catalogo_partidas SET precio_unitario=260.43, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.3.2 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=222.43, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.3.3 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=453.15, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.3.4 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1"
  UPDATE catalogo_partidas SET precio_unitario=299.74, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.3.5 - VÁLVULA DE BOLA DE TRES PIEZAS DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=232.61, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.3.6 - VÁLVULA DE BOLA DE TRES PIEZAS DE 2" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=491.49, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.17.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.3.7 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1 1/2" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=387.07, cantidad_presupuesto=13.0 WHERE codigo='OE.5.6.17.3.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.3.8 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1 1/4" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=282.67, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.17.3.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.3.9 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=387.83, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.17.3.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.3.10 - VÁLVULA DE BOLA DE TRES PIEZAS DE 3/4" VACIO CLINICO
  UPDATE catalogo_partidas SET precio_unitario=310.55, cantidad_presupuesto=28.0 WHERE codigo='OE.5.6.17.3.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.4 - EQUIPAMIENTO ESPECIAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.17.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.4.1 - COLGADOR PARA TUBERÍA SEGÚN PLANO
  UPDATE catalogo_partidas SET precio_unitario=34.99, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.17.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.4.2 - SOPORTE DE TUBERÍA DE PARED
  UPDATE catalogo_partidas SET precio_unitario=73.79, cantidad_presupuesto=16.0 WHERE codigo='OE.5.6.17.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.4.3 - CENTRAL DUPLEX DE VACÍO: 14.9 KW-3F-220V CON CAPACIDAD DE 3879 LPM @19"Hg.
  UPDATE catalogo_partidas SET precio_unitario=159860.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.17.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.4.4 - SALIDA PARA VACIO CLINICO DE 3/8"
  UPDATE catalogo_partidas SET precio_unitario=512.0, cantidad_presupuesto=103.0 WHERE codigo='OE.5.6.17.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.4.5 - JUNTA FLEXIBLES DE 2" , 1M
  UPDATE catalogo_partidas SET precio_unitario=729.91, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.17.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.4.6 - JUNTA FLEXIBLES DE 1 1/2" , 1M
  UPDATE catalogo_partidas SET precio_unitario=461.91, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.17.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.4.7 - JUNTA FLEXIBLES DE 1 1/4" , 1M
  UPDATE catalogo_partidas SET precio_unitario=417.91, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.17.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.4.8 - JUNTA FLEXIBLES DE 1" , 1M
  UPDATE catalogo_partidas SET precio_unitario=389.91, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.17.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.4.9 - JUNTA FLEXIBLES DE 3/4" , 1M
  UPDATE catalogo_partidas SET precio_unitario=219.91, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.17.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.4.10 - SALIDA PARA ALARMA AUDIOVISUAL DE VACIO CLÍNICO
  UPDATE catalogo_partidas SET precio_unitario=115.7, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.17.4.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.4.11 - PRUEBAS CRUZADAS Y DE HERMETICIDAD.
  UPDATE catalogo_partidas SET precio_unitario=2227.29, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.17.4.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18 - SISTEMA DE AIRE ACONDICIONADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.1 - CAMARAS FRIGORIFICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.18.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.1.1 - SUMINISTRO E INSTALACIÓN DE CAMARA DE CONGELACIÓN PARA PESCADOS ( VOLUMEN 7 M3, TEMPERATURA MAX. -20°C, POTENCIA DE REFRIGERACIÓN MÍNIMA 6280 BTU/H).
  UPDATE catalogo_partidas SET precio_unitario=53250.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.1.2 - SUMINISTRO E INSTALACIÓN DE CAMARA DE CONGELACIÓN PARA PRODUCTOS CONGELADOS  ( VOLUMEN 7 M3,TEMPERATURA  MAX. -20°C,  POTENCIA DE REFRIGERACIÓN MÍNIMA 6280 BTU/H).
  UPDATE catalogo_partidas SET precio_unitario=53250.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.1.3 - SUMINISTRO E INSTALACIÓN DE CAMARA DE CONGELACIÓN PARA PRODUCTOS CARNICOS ( VOLUMEN 7.44 M3, TEMPERATURA  MAX. -20°C, POTENCIA DE REFRIGERACIÓN MÍNIMA 9800 BTU/H).
  UPDATE catalogo_partidas SET precio_unitario=53250.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.1.4 - SUMINISTRO E INSTALACIÓN DE CAMARA DE CONSERVACIÓN PARA LACTEOS  ( VOLUMEN 6.66 M3, TEMPERATURA MAX 2°C, POTENCIA DE REFRIGERACIÓN MÍNIMA 3050 BTU/H).
  UPDATE catalogo_partidas SET precio_unitario=53250.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.1.5 - SUMINISTRO E INSTALACIÓN DE CAMARA DE CONSERVACIÓN PARA FRUTAS Y VERDURAS  ( VOLUMEN 8.14 M3, TEMPERATURA MAX. 2°C, VOLUMEN 7.32 M3, POTENCIA DE REFRIGERACIÓN MÍNIMA 9900 BTU/H).
  UPDATE catalogo_partidas SET precio_unitario=53250.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2 - UMAS AL 100% DE AIRE EXTERIOR
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.18.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.1 - UMA SALA DE OPERACION GINECOLOGIA
  UPDATE catalogo_partidas SET precio_unitario=150000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.2 - UMA SALA DE OPERACION MULTIFUNCIONAL
  UPDATE catalogo_partidas SET precio_unitario=150000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.3 - UMA SALA MULTIFUNCIONAL 01
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.4 - UMA SALA MULTIFUNCIONAL 02
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.5 - UMA SALA MULTIFUNCIONAL 03
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.6 - UMA SALA MULTIFUNCIONAL 04
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.7 - UMA SALA MULTIFUNCIONAL 05
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.8 - UMA SALA MULTIFUNCIONAL 06
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.9 - UMA SALA MULTIFUNCIONAL 07
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.10 - UMA SALA MULTIFUNCIONAL 08
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.11 - UMA SALA MULTIFUNCIONAL 09
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.12 - UMA SALA MULTIFUNCIONAL 10
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.13 - UMA SALA MULTIFUNCIONAL 11
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.14 - UMA LABORATORIO
  UPDATE catalogo_partidas SET precio_unitario=150000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.15 - UMA SALA DE ESTERILIZACIONES
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.16 - UMA SALA ANESTESICA
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.17 - UMA SALA ECOGRAFIA GENERAL
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.18 - UMA ALMACEN DE MATERIAL ESTERIL
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.19 - UMA SALAS DE HOSPITALIZACION 01 (VARONES)
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.20 - UMA SALAS DE HOSPITALIZACION 02 (OBST./MUJERES)
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.21 - UMA SALAS DE HOSPITALIZACION 03 (GINEC./OBST.)
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.21' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.22 - UMA SALAS DE HOSPITALIZACION 04 (GINEC.)
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.22' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.23 - UMA SALAS DE HOSPITALIZACION 05 (M.I. MUJERES)
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.23' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.24 - UMA SALAS DE HOSPITALIZACION 06 (PEDIATRIA)
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.24' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.25 - UMA SALAS DE HOSPITALIZACION 07 (ADOLESCENTES)
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.25' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.26 - UMA SALAS DE HOSPITALIZACION 08 (CIR. MUJERES)
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.26' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.27 - UMA SALAS DE HOSPITALIZACION 09 (CIR. VARONES)
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.27' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.28 - UMA SALAS DE HOSPITALIZACION 10 (CIRUJIA AISLADOS)
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.28' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.29 - UMA SALA DE OBSERVACIONES
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.29' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.30 - UMA UNIDAD VIGILANCIA INTENSIVA
  UPDATE catalogo_partidas SET precio_unitario=144000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.2.30' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.2.31 - DIFUSOR DE FLUJO LAMINAR 24"x24"
  UPDATE catalogo_partidas SET precio_unitario=280000.0, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.18.2.31' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3 - HUMIDIFICADORES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.18.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.1 - HUMIDIFICADOR SALA DE OPERACION GINECOLOGIA
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.2 - HUMIDIFICADOR SALA DE OPERACION MULTIFUNCIONAL
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.3 - HUMIDIFICADOR SALA MULTIFUNCIONAL 01
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.4 - HUMIDIFICADOR SALA MULTIFUNCIONAL 02
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.5 - HUMIDIFICADOR SALA MULTIFUNCIONAL 03
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.6 - HUMIDIFICADOR SALA MULTIFUNCIONAL 04
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.7 - HUMIDIFICADOR SALA MULTIFUNCIONAL 05
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.8 - HUMIDIFICADOR SALA MULTIFUNCIONAL 06
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.9 - HUMIDIFICADOR SALA MULTIFUNCIONAL 07
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.10 - HUMIDIFICADOR SALA MULTIFUNCIONAL 08
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.11 - HUMIDIFICADOR SALA MULTIFUNCIONAL 09
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.12 - HUMIDIFICADOR SALA MULTIFUNCIONAL 10
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.13 - HUMIDIFICADOR SALA MULTIFUNCIONAL 11
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.14 - HUMIDIFICADOR LABORATORIO
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.15 - HUMIDIFICADOR SALA DE ESTERILIZACIONES
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.16 - HUMIDIFICADOR SALA ANESTESICA
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.17 - HUMIDIFICADOR SALA ECOGRAFIA GENERAL
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.18 - HUMIDIFICADOR ALMACEN DE MATERIAL ESTERIL
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.19 - HUMIDIFICADOR SALAS DE HOSPITALIZACION 01 (VARONES)
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.20 - HUMIDIFICADOR SALAS DE HOSPITALIZACION 02 (OBST./MUJERES)
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.21 - HUMIDIFICADOR SALAS DE HOSPITALIZACION 03 (GINEC./OBST.)
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.21' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.22 - HUMDIFICADOR SALAS DE HOSPITALIZACION 04 (GINEC.)
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.22' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.23 - HUMIDIFICADOR SALAS DE HOSPITALIZACION 05 (M.I. MUJERES)
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.23' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.24 - HUMIDIFICADOR SALAS DE HOSPITALIZACION 06 (PEDIATRIA)
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.24' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.25 - HUMIDIFICADOR SALAS DE HOSPITALIZACION 07 (ADOLESCENTES)
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.25' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.26 - HUMIDIFICADOR SALAS DE HOSPITALIZACION 08 (CIR. MUJERES)
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.26' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.27 - HUMIDIFICADOR SALAS DE HOSPITALIZACION 09 (CIR. VARONES)
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.27' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.28 - HUMIDIFICADOR SALAS DE HOSPITALIZACION 10 (CIRUJIA AISLADOS)
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.28' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.29 - HUMDIFICADOR SALA DE OBSERVACIONES
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.29' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.18.3.30 - HUMIDIFICADOR UNIDAD VIGILANCIA INTENSIVA
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.18.3.30' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19 - SISTEMA DE AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.1 - TUBERÍAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.19.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.1.1 - TUBERÍA DE COBRE "TIPO K" DE 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=196.3, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.1.2 - TUBERÍA DE COBRE "TIPO K" DE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=156.14, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.1.3 - TUBERÍA DE COBRE "TIPO K" DE 1"
  UPDATE catalogo_partidas SET precio_unitario=96.8, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.1.4 - TUBERÍA DE COBRE "TIPO K" DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=84.8, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.1.5 - TUBERÍA DE COBRE "TIPO K" DE 2 1/2" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=207.9, cantidad_presupuesto=30.48 WHERE codigo='OE.5.6.19.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.1.6 - TUBERÍA DE COBRE "TIPO K" DE 1 1/4" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=154.44, cantidad_presupuesto=72.23 WHERE codigo='OE.5.6.19.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.1.7 - TUBERÍA DE COBRE "TIPO K" DE 1" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=89.53, cantidad_presupuesto=93.04 WHERE codigo='OE.5.6.19.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.1.8 - TUBERÍA DE COBRE "TIPO K" DE 3/4" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=74.7, cantidad_presupuesto=114.55 WHERE codigo='OE.5.6.19.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.1.9 - PINTURA EN TUBERIA - SISTEMA DE AIRE COMPRIMIDO
  UPDATE catalogo_partidas SET precio_unitario=54.6, cantidad_presupuesto=10.53 WHERE codigo='OE.5.6.19.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.1.10 - EMBALADO DE TUBERIA CON PAPEL FILM - SISTEMA DE AIRE COMPRIMIDO
  UPDATE catalogo_partidas SET precio_unitario=15.84, cantidad_presupuesto=310.3 WHERE codigo='OE.5.6.19.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2 - ACCESORIOS DE TUBERIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.19.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.1 - CODO DE COBRE 1 1/2" X 90°
  UPDATE catalogo_partidas SET precio_unitario=46.71, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.2 - CODO DE COBRE 1 1/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=63.63, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.3 - CODO DE COBRE 1" X 90°
  UPDATE catalogo_partidas SET precio_unitario=60.58, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.4 - CODO DE COBRE 3/4" X 90°
  UPDATE catalogo_partidas SET precio_unitario=52.0, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.5 - TEE DE COBRE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=84.71, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.6 - TEE DE COBRE 1"
  UPDATE catalogo_partidas SET precio_unitario=67.26, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.7 - TEE DE COBRE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=56.93, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.8 - REDUCCIÓN DE COBRE 2" A 3/4"
  UPDATE catalogo_partidas SET precio_unitario=76.9, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.9 - REDUCCION DE COBRE 1 1/4" - 1"
  UPDATE catalogo_partidas SET precio_unitario=55.02, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.10 - REDUCCIÓN DE COBRE 1 1/4" A 3/4"
  UPDATE catalogo_partidas SET precio_unitario=56.1, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.11 - REDUCCION DE COBRE 1" - 3/4"
  UPDATE catalogo_partidas SET precio_unitario=52.19, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.12 - UNION UNIVERSAL DE COBRE 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=84.22, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.13 - UNION UNIVERSAL DE COBRE 1"
  UPDATE catalogo_partidas SET precio_unitario=80.42, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.14 - UNION UNIVERSAL DE COBRE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=72.52, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.15 - UNION SIMPLE DE COBRE 1 1/ 4"
  UPDATE catalogo_partidas SET precio_unitario=59.44, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.16 - UNION SIMPLE DE COBRE 1"
  UPDATE catalogo_partidas SET precio_unitario=57.34, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.17 - UNION SIMPLE DE COBRE DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=55.74, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.2.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.18 - CODO DE COBRE 1 1/2" X 90° AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=160.97, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.19.2.18' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.19 - CODO DE COBRE 1 1/4" X 90° AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=141.11, cantidad_presupuesto=10.0 WHERE codigo='OE.5.6.19.2.19' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.20 - CODO DE COBRE 1" X 90° AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=122.46, cantidad_presupuesto=19.0 WHERE codigo='OE.5.6.19.2.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.21 - CODO DE COBRE 3/4" X 90° AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=82.43, cantidad_presupuesto=34.0 WHERE codigo='OE.5.6.19.2.21' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.22 - CODO DE COBRE 1 1/2" X 45° AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=208.85, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.19.2.22' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.23 - CODO DE COBRE 1" X 45° AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=114.04, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.17.2.23' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.17.2.24 - CODO DE COBRE 3/4" X 45° AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=85.71, cantidad_presupuesto=8.0 WHERE codigo='OE.5.6.17.2.24' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.25 - TEE DE COBRE 1 1/4" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=315.48, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.19.2.25' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.26 - TEE DE COBRE 1" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=217.5, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.19.2.26' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.27 - TEE DE COBRE 3/4" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=167.57, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.19.2.27' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.28 - REDUCCIÓN DE COBRE 2" A 3/4" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=276.51, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.19.2.28' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.29 - REDUCCION DE COBRE 1 1/4" - 1" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=125.59, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.19.2.29' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.30 - REDUCCIÓN DE COBRE 1 1/4" A 3/4" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=124.69, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.19.2.30' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.31 - REDUCCION DE COBRE 1" - 3/4" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=111.65, cantidad_presupuesto=7.0 WHERE codigo='OE.5.6.19.2.31' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.32 - UNION UNIVERSAL DE COBRE 1 1/4" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=178.39, cantidad_presupuesto=10.0 WHERE codigo='OE.5.6.19.2.32' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.33 - UNION UNIVERSAL DE COBRE 1" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=150.3, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.19.2.33' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.34 - UNION UNIVERSAL DE COBRE 3/4" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=127.32, cantidad_presupuesto=18.0 WHERE codigo='OE.5.6.19.2.34' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.35 - UNION SIMPLE DE COBRE 1 1/ 4" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=122.72, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.19.2.35' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.36 - UNION SIMPLE DE COBRE 1" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=112.38, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.19.2.36' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.2.37 - UNION SIMPLE DE COBRE DE 3/4" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=99.92, cantidad_presupuesto=11.0 WHERE codigo='OE.5.6.19.2.37' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.3 - VALVULAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.19.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.3.1 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1 1 /4"
  UPDATE catalogo_partidas SET precio_unitario=184.43, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.3.2 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1"
  UPDATE catalogo_partidas SET precio_unitario=175.43, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.3.3 - VÁLVULA DE BOLA DE TRES PIEZAS DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=232.61, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.3.4 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1 1 /4" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=282.67, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.19.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.3.5 - VÁLVULA DE BOLA DE TRES PIEZAS DE 1" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=387.83, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.19.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.3.6 - VÁLVULA DE BOLA DE TRES PIEZAS DE 3/4" AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=310.55, cantidad_presupuesto=9.0 WHERE codigo='OE.5.6.19.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.4 - EQUIPAMIENTO ESPECIAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.19.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.4.1 - COLGADOR PARA TUBERÍA SEGÚN PLANO
  UPDATE catalogo_partidas SET precio_unitario=34.99, cantidad_presupuesto=0.0 WHERE codigo='OE.5.6.19.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.4.2 - SOPORTE DE TUBERÍA DE PARED
  UPDATE catalogo_partidas SET precio_unitario=73.79, cantidad_presupuesto=16.0 WHERE codigo='OE.5.6.19.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.4.3 - CENTRAL DE AIRE COMPRIMIDO MEDICINAL 50.4 SCFM
  UPDATE catalogo_partidas SET precio_unitario=301860.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.19.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.4.4 - SALIDA PARA DE AIRE COMPRIMIDO MEDICINAL DE 3/8"
  UPDATE catalogo_partidas SET precio_unitario=486.32, cantidad_presupuesto=5.0 WHERE codigo='OE.5.6.19.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.4.5 - JUNTA FLEXIBLES DE 1 1/4" , 1M
  UPDATE catalogo_partidas SET precio_unitario=417.91, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.19.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.4.6 - JUNTA FLEXIBLES DE 1" , 1M
  UPDATE catalogo_partidas SET precio_unitario=389.91, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.19.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.4.7 - JUNTA FLEXIBLES DE 3/4" , 1M
  UPDATE catalogo_partidas SET precio_unitario=219.91, cantidad_presupuesto=2.0 WHERE codigo='OE.5.6.19.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.4.8 - SALIDA PARA ALARMA AUDIOVISUAL DE AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=104.28, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.19.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.19.4.9 - PRUEBAS CRUZADAS Y DE HERMETICIDAD.
  UPDATE catalogo_partidas SET precio_unitario=2227.29, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.19.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.20 - SISTEMA DE EXTRACCION DE AIRE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.20' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.20.1 - SISTEMA DE DUCTOS Y ACCESORIOS - ESTACIONAMIENTO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.20.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.20.1.1 - EXTRACTOR CENTRIFUGO 13536 CFM  UL/FM
  UPDATE catalogo_partidas SET precio_unitario=15954.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.20.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.20.1.2 - DUCTOS Y ACCESORIOS
  UPDATE catalogo_partidas SET precio_unitario=39.12, cantidad_presupuesto=3813.0 WHERE codigo='OE.5.6.20.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.20.1.3 - REJILLAS DE EXTRACCION DE AIRE
  UPDATE catalogo_partidas SET precio_unitario=1779.7, cantidad_presupuesto=1.84 WHERE codigo='OE.5.6.20.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.20.1.4 - DAMPER MOTORIZADO CORTAFUEGO
  UPDATE catalogo_partidas SET precio_unitario=1534.47, cantidad_presupuesto=16.0 WHERE codigo='OE.5.6.20.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.20.1.5 - SENSOR DE NIVEL DE MONOXIDO DE CARBONO
  UPDATE catalogo_partidas SET precio_unitario=287.47, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.20.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.20.1.6 - INSTALACIÓN ELÉCTRICA DEL SISTEMA DE HVAC
  UPDATE catalogo_partidas SET precio_unitario=946.46, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.20.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.20.1.7 - PRUEBAS, BALANCEO Y ARRANQUE DEL SISTEMA
  UPDATE catalogo_partidas SET precio_unitario=4932.4, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.20.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.20.2 - FILTROS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.20.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.20.2.1 - CAJA PORTA FILTRO Y FILTROS DE AIRE EXTRACCION  (13536 CFM)
  UPDATE catalogo_partidas SET precio_unitario=22773.8, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.20.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.20.3 - EQUIPOS CENTRIFUGOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.20.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.20.3.1 - TABLERO ELECTRICO PARA EQUIPOS INCL. VARIADOR DE FRECUENCIA
  UPDATE catalogo_partidas SET precio_unitario=22514.93, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.20.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.21 - SISTEMA DE PRESURIZACIÓN DE ESCALERAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.21' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.21.1 - EQUIPOS CENTRIFUGOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.21.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.21.1.1 - INYECTOR CENTRIFUGO 14480 CFM
  UPDATE catalogo_partidas SET precio_unitario=3094.93, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.21.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.21.1.2 - DAMPER DE ALIVIO BAROMÉTRICO 32 PLG X 32 PLG - 12965 CFM
  UPDATE catalogo_partidas SET precio_unitario=6290.47, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.21.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.21.2 - CONDUCTOS, REJILLAS Y ACCESORIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.21.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.21.2.1 - DUCTOS Y ACCESORIOS DE PRESURIZACIÓN DE ESCALERAS
  UPDATE catalogo_partidas SET precio_unitario=49.98, cantidad_presupuesto=5002.0 WHERE codigo='OE.5.6.21.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.21.2.2 - REJILLAS DE INYECCION CON DAMPER CORTAFUERGO 450*450MM
  UPDATE catalogo_partidas SET precio_unitario=255.36, cantidad_presupuesto=12.0 WHERE codigo='OE.5.6.21.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.21.2.3 - REJILLAS DE INYECCION CON DAMPER CORTAFUERGO 600*600MM
  UPDATE catalogo_partidas SET precio_unitario=317.36, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.21.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.21.2.4 - REJILLAS DE INYECCION CON DAMPER CORTAFUERGO 1200*800MM
  UPDATE catalogo_partidas SET precio_unitario=384.36, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.21.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.21.2.5 - SENSOR DE PRESIÓN
  UPDATE catalogo_partidas SET precio_unitario=478.47, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.21.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.21.2.6 - SENSOR DE HUMO
  UPDATE catalogo_partidas SET precio_unitario=301.45, cantidad_presupuesto=20.0 WHERE codigo='OE.5.6.21.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.21.3 - FILTROS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.21.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.21.3.1 - CAJA PORTA FILTRO Y FILTROS DE AIRE INYECCION (14480 CFM)
  UPDATE catalogo_partidas SET precio_unitario=279.75, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.21.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.21.4 - OTROS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.21.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.21.4.1 - TABLERO ELECTRICO
  UPDATE catalogo_partidas SET precio_unitario=13250.0, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.21.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.21.4.2 - PRUEBAS Y BALANCEO
  UPDATE catalogo_partidas SET precio_unitario=4720.0, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.21.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.22 - SISTEMA DE EVACUACION DE GASES ANESTESICOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.22' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.22.1 - SUMINISTRO E INSTALACION DE EVACUACION DE GASES ANESTESICOS
  UPDATE catalogo_partidas SET precio_unitario=80000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.22.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.23 - SUMINISTRO E INSTALACION DE MANIFOLD LINEA CO2
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.23' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.23.1 - SUMINISTRO E INSTALACION DE MANIFOLD LNEA CO2
  UPDATE catalogo_partidas SET precio_unitario=60000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.23.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.23.2 - TUBERÍA DE COBRE "TIPO K" DE 3/4" CO2
  UPDATE catalogo_partidas SET precio_unitario=87.43, cantidad_presupuesto=107.45 WHERE codigo='OE.5.6.23.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.23.3 - TUBERÍA DE COBRE "TIPO K" DE 1/2" CO2
  UPDATE catalogo_partidas SET precio_unitario=72.64, cantidad_presupuesto=1.6 WHERE codigo='OE.5.6.23.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.23.4 - CODO DE COBRE 3/4" X 90° CO2
  UPDATE catalogo_partidas SET precio_unitario=78.0, cantidad_presupuesto=25.0 WHERE codigo='OE.5.6.23.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.23.5 - CODO DE COBRE 3/4" X 45° CO2
  UPDATE catalogo_partidas SET precio_unitario=81.28, cantidad_presupuesto=3.0 WHERE codigo='OE.5.6.23.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.23.6 - TEE DE COBRE 3/4" CO2
  UPDATE catalogo_partidas SET precio_unitario=164.2, cantidad_presupuesto=4.0 WHERE codigo='OE.5.6.23.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.23.7 - REDUCCION DE  3/4" A 1/2"
  UPDATE catalogo_partidas SET precio_unitario=92.45, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.23.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.23.8 - UNION UNIVERSAL DE COBRE 3/4" CO2
  UPDATE catalogo_partidas SET precio_unitario=122.89, cantidad_presupuesto=12.0 WHERE codigo='OE.5.6.23.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.23.9 - UNION SIMPLE DE COBRE 3/4" CO2
  UPDATE catalogo_partidas SET precio_unitario=95.49, cantidad_presupuesto=21.0 WHERE codigo='OE.5.6.23.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.23.10 - VÁLVULA DE BOLA DE TRES PIEZAS DE 3/4" OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=310.55, cantidad_presupuesto=6.0 WHERE codigo='OE.5.6.23.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.24 - ADQUISICION DE EQUIPOS Y HERRAMIENTAS PARA INSTALACIONES MECANICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.24' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.24.1 - ADQUISICION DE EQUIPOS Y HERRAMIENTAS PARA  INSTALACIONES MECANICAS
  UPDATE catalogo_partidas SET precio_unitario=37707.5, cantidad_presupuesto=1.0 WHERE codigo='OE.5.6.24.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25 - SISTEMAS DE SUJECION PARA INTALACIONES MECANICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.25' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1 - SUJECION DE INSTALACION DE GASES MEDICINALES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.25.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1.1 - SOPORTE PARA TUBERIAS EN TECHO
  UPDATE catalogo_partidas SET precio_unitario=78.75, cantidad_presupuesto=1613.0 WHERE codigo='OE.5.6.25.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1.2 - ABRAZADERA PARA TUBERIA DE 4''
  UPDATE catalogo_partidas SET precio_unitario=30.95, cantidad_presupuesto=21.0 WHERE codigo='OE.5.6.25.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1.3 - ABRAZADERA PARA TUBERIA DE 2''
  UPDATE catalogo_partidas SET precio_unitario=27.95, cantidad_presupuesto=172.0 WHERE codigo='OE.5.6.25.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1.4 - ABRAZADERA PARA TUBERIA  1 1/2''
  UPDATE catalogo_partidas SET precio_unitario=27.45, cantidad_presupuesto=88.0 WHERE codigo='OE.5.6.25.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1.5 - ABRAZADERA PARA TUBERA  1 1/4''
  UPDATE catalogo_partidas SET precio_unitario=26.95, cantidad_presupuesto=122.0 WHERE codigo='OE.5.6.25.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1.6 - ABRAZADERA PARA TUBERIA 1''
  UPDATE catalogo_partidas SET precio_unitario=27.45, cantidad_presupuesto=231.0 WHERE codigo='OE.5.6.25.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1.7 - ABRAZADERA PARA TUBERIA 3/4''
  UPDATE catalogo_partidas SET precio_unitario=26.65, cantidad_presupuesto=704.0 WHERE codigo='OE.5.6.25.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1.8 - ABRAZADERA PARA TUBERIA 2 1/2''
  UPDATE catalogo_partidas SET precio_unitario=28.95, cantidad_presupuesto=17.0 WHERE codigo='OE.5.6.25.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1.9 - ABRAZADERA PARA TUBERIA 1/2''
  UPDATE catalogo_partidas SET precio_unitario=25.75, cantidad_presupuesto=254.0 WHERE codigo='OE.5.6.25.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1.10 - COLGADOR TIPO GOTA  Ø 1/2"
  UPDATE catalogo_partidas SET precio_unitario=41.38, cantidad_presupuesto=50.0 WHERE codigo='OE.5.6.25.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1.11 - COLGADOR TIPO GOTA  Ø 3/4"
  UPDATE catalogo_partidas SET precio_unitario=42.38, cantidad_presupuesto=75.0 WHERE codigo='OE.5.6.25.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1.12 - COLGADOR TIPO GOTA  Ø 1"
  UPDATE catalogo_partidas SET precio_unitario=41.07, cantidad_presupuesto=30.0 WHERE codigo='OE.5.6.25.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1.13 - COLGADOR TIPO GOTA  Ø 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=43.38, cantidad_presupuesto=30.0 WHERE codigo='OE.5.6.25.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1.14 - COLGADOR TIPO GOTA  Ø 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=45.38, cantidad_presupuesto=20.0 WHERE codigo='OE.5.6.25.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1.15 - COLGADOR TIPO GOTA  Ø 2"
  UPDATE catalogo_partidas SET precio_unitario=45.38, cantidad_presupuesto=40.0 WHERE codigo='OE.5.6.25.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1.16 - COLGADOR TIPO GOTA  Ø 2 1/2"
  UPDATE catalogo_partidas SET precio_unitario=45.38, cantidad_presupuesto=10.0 WHERE codigo='OE.5.6.25.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.25.1.17 - COLGADOR TIPO GOTA  Ø 4"
  UPDATE catalogo_partidas SET precio_unitario=57.38, cantidad_presupuesto=10.0 WHERE codigo='OE.5.6.25.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.26 - ACARREO DE INSUMOS DE INSTALACIONES MECANICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.26' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.26.1 - ACARREO VERTICAL DE MATERIALES
  UPDATE catalogo_partidas SET precio_unitario=0.22, cantidad_presupuesto=142777.1 WHERE codigo='OE.5.6.26.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.26.2 - ACARREO DE MATERIALES ESPECIALIZADO ALMACEN - OBRA
  UPDATE catalogo_partidas SET precio_unitario=0.4, cantidad_presupuesto=142777.1 WHERE codigo='OE.5.6.26.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.27 - MOVILIZACIÓN Y DESMOVILIZACION DE EQUIPOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.6.27' AND proyecto_id=v_proyecto_id;
  -- OE.5.6.27.1 - MOVILIZACION Y DESMOVILIZACION DE EQUIPOS Y HERRAMIENTAS ESPECIALIZADAS
  UPDATE catalogo_partidas SET precio_unitario=1.47, cantidad_presupuesto=2400.0 WHERE codigo='OE.5.6.27.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.7 - OTROS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.5.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.7.1 - TABLERO DE CONTROL DE GASES MEDICINALES PARA SISTEMAS DE OXIGENO, VACIO Y AIRE COMPRIMIDO MEDICINAL.
  UPDATE catalogo_partidas SET precio_unitario=603.4, cantidad_presupuesto=3.0 WHERE codigo='OE.5.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.5.7.2 - TABLERO DE CONTROL DE GASES MEDICINALES PARA SISTEMAS DE OXIGENO Y VACIO.
  UPDATE catalogo_partidas SET precio_unitario=583.4, cantidad_presupuesto=3.0 WHERE codigo='OE.5.7.2' AND proyecto_id=v_proyecto_id;
  -- OE.5.7.3 - TOMA MURAL TIPO 1
  UPDATE catalogo_partidas SET precio_unitario=4394.2, cantidad_presupuesto=0.0 WHERE codigo='OE.5.7.3' AND proyecto_id=v_proyecto_id;
  -- OE.5.7.4 - TOMA MURAL TIPO 2
  UPDATE catalogo_partidas SET precio_unitario=3994.2, cantidad_presupuesto=0.0 WHERE codigo='OE.5.7.4' AND proyecto_id=v_proyecto_id;
  -- OE.5.7.5 - TOMA MURAL TIPO 3
  UPDATE catalogo_partidas SET precio_unitario=3844.2, cantidad_presupuesto=0.0 WHERE codigo='OE.5.7.5' AND proyecto_id=v_proyecto_id;
  -- OE.5.7.6 - TOMA MURAL TIPO 4
  UPDATE catalogo_partidas SET precio_unitario=4354.2, cantidad_presupuesto=0.0 WHERE codigo='OE.5.7.6' AND proyecto_id=v_proyecto_id;
  -- OE.5.7.7 - TOMA MURAL TIPO 5
  UPDATE catalogo_partidas SET precio_unitario=4354.2, cantidad_presupuesto=0.0 WHERE codigo='OE.5.7.7' AND proyecto_id=v_proyecto_id;
  -- OE.5.7.8 - TOMA MURAL TIPO 6
  UPDATE catalogo_partidas SET precio_unitario=4354.2, cantidad_presupuesto=0.0 WHERE codigo='OE.5.7.8' AND proyecto_id=v_proyecto_id;
  -- OE.5.7.9 - ALARMA AUDIOVISUAL PARA SISTEMA DE OXIGENO, VACIO Y AIRE COMPRIMIDO MEDICINAL
  UPDATE catalogo_partidas SET precio_unitario=3870.29, cantidad_presupuesto=3.0 WHERE codigo='OE.5.7.9' AND proyecto_id=v_proyecto_id;
  -- OE.5.7.10 - ALARMA AUDIOVISUAL PARA SISTEMA DE OXIGENO Y VACIO.
  UPDATE catalogo_partidas SET precio_unitario=3540.29, cantidad_presupuesto=3.0 WHERE codigo='OE.5.7.10' AND proyecto_id=v_proyecto_id;
  -- OE.5.7.11 - PANEL CABECERO HOSPITALARIO D-225A
  UPDATE catalogo_partidas SET precio_unitario=10000.0, cantidad_presupuesto=45.0 WHERE codigo='OE.5.7.11' AND proyecto_id=v_proyecto_id;
  -- OE.5.7.12 - PANEL CABECERO HOSPITALARIO D-225B
  UPDATE catalogo_partidas SET precio_unitario=10000.0, cantidad_presupuesto=4.0 WHERE codigo='OE.5.7.12' AND proyecto_id=v_proyecto_id;
  -- OE.5.7.13 - PANEL CABECERO HOSPITALARIO D-226A
  UPDATE catalogo_partidas SET precio_unitario=10000.0, cantidad_presupuesto=11.0 WHERE codigo='OE.5.7.13' AND proyecto_id=v_proyecto_id;
  -- OE.5.7.14 - PANEL CABECERO HOSPITALARIO D-226B
  UPDATE catalogo_partidas SET precio_unitario=10000.0, cantidad_presupuesto=5.0 WHERE codigo='OE.5.7.14' AND proyecto_id=v_proyecto_id;
  -- OE.5.7.15 - PANEL CABECERO HOSPITALARIO D-226C
  UPDATE catalogo_partidas SET precio_unitario=10000.0, cantidad_presupuesto=4.0 WHERE codigo='OE.5.7.15' AND proyecto_id=v_proyecto_id;
  -- OE.5.7.16 - PANEL CABECERO HOSPITALARIO D-228
  UPDATE catalogo_partidas SET precio_unitario=10000.0, cantidad_presupuesto=2.0 WHERE codigo='OE.5.7.16' AND proyecto_id=v_proyecto_id;
  -- OE.6 - INSTALACIONES DE COMUNICACIONES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.1 - CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1 - CABLES EN TUBERÍAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.1 - Cable S/FTP categoria 7A Clase FA 1000 MHz
  UPDATE catalogo_partidas SET precio_unitario=6.62, cantidad_presupuesto=0.0 WHERE codigo='OE.6.1.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.2 - Cable UTP categoria 5E
  UPDATE catalogo_partidas SET precio_unitario=2.44, cantidad_presupuesto=0.0 WHERE codigo='OE.6.1.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.3 - Cable HDMI X 10 m
  UPDATE catalogo_partidas SET precio_unitario=64.02, cantidad_presupuesto=0.0 WHERE codigo='OE.6.1.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.4 - Cable USB x 10m
  UPDATE catalogo_partidas SET precio_unitario=297.02, cantidad_presupuesto=0.0 WHERE codigo='OE.6.1.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.5 - Cable FPL 2X18 AWG
  UPDATE catalogo_partidas SET precio_unitario=3.42, cantidad_presupuesto=0.0 WHERE codigo='OE.6.1.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.6 - Cable FPL 2X16 AWG
  UPDATE catalogo_partidas SET precio_unitario=2.62, cantidad_presupuesto=0.0 WHERE codigo='OE.6.1.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.7 - Cable de audio 2x16 AWG libre de halogeno
  UPDATE catalogo_partidas SET precio_unitario=2.62, cantidad_presupuesto=0.0 WHERE codigo='OE.6.1.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.8 - Cable para micrófono
  UPDATE catalogo_partidas SET precio_unitario=4.94, cantidad_presupuesto=0.0 WHERE codigo='OE.6.1.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.9 - Cable coaxial RG8
  UPDATE catalogo_partidas SET precio_unitario=2.62, cantidad_presupuesto=0.0 WHERE codigo='OE.6.1.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.10 - Cable coaxial RG6
  UPDATE catalogo_partidas SET precio_unitario=3.34, cantidad_presupuesto=0.0 WHERE codigo='OE.6.1.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.11 - Cable de Fibra Optica Multimodo OM4 de 12 hilos
  UPDATE catalogo_partidas SET precio_unitario=4.27, cantidad_presupuesto=0.0 WHERE codigo='OE.6.1.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.12 - Cable de Cu desnudo de 25 mm2
  UPDATE catalogo_partidas SET precio_unitario=14.58, cantidad_presupuesto=0.0 WHERE codigo='OE.6.1.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.13 - TENDIDO CABLE S/FTP CATEGORIA 7A CLASE FA 1000 MHz
  UPDATE catalogo_partidas SET precio_unitario=7.51, cantidad_presupuesto=52633.33 WHERE codigo='OE.6.1.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.14 - TENDIDO CABLE UTP CATEGORIA 5E
  UPDATE catalogo_partidas SET precio_unitario=4.43, cantidad_presupuesto=2641.6 WHERE codigo='OE.6.1.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.15 - TENDIDO CABLE HDMI X 10 M
  UPDATE catalogo_partidas SET precio_unitario=74.56, cantidad_presupuesto=24.0 WHERE codigo='OE.6.1.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.16 - TENDIDO CABLE FPL 2X18 AWG
  UPDATE catalogo_partidas SET precio_unitario=3.87, cantidad_presupuesto=4738.6 WHERE codigo='OE.6.1.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.17 - TENDIDO CABLE FPL 2X16 AWG
  UPDATE catalogo_partidas SET precio_unitario=5.1, cantidad_presupuesto=2876.14 WHERE codigo='OE.6.1.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.18 - TENDIDO CABLE DE AUDIO 2X16 AWG LIBRE DE HALOGENO
  UPDATE catalogo_partidas SET precio_unitario=3.87, cantidad_presupuesto=2275.61 WHERE codigo='OE.6.1.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.19 - TENDIDO CABLE PARA MICRÓFONO
  UPDATE catalogo_partidas SET precio_unitario=10.84, cantidad_presupuesto=10.0 WHERE codigo='OE.6.1.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.6.1.1.20 - TENDIDO CABLE DE FIBRA OPTICA MULTIMODO OM4 DE 12 HILOS
  UPDATE catalogo_partidas SET precio_unitario=45.75, cantidad_presupuesto=3655.2 WHERE codigo='OE.6.1.1.20' AND proyecto_id=v_proyecto_id;
  -- OE.6.2 - CANALES, CONDUCTOS Y/O TUBERÍAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.1 - Tuberia Electrica PVC SAP NTP 399.006 DE 100 mm
  UPDATE catalogo_partidas SET precio_unitario=5.9, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.2 - Tuberia Electrica PVC SAP NTP 399.006 DE 50 mm
  UPDATE catalogo_partidas SET precio_unitario=6.08, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.3 - Tuberia Electrica PVC SAP NTP 399.006 de 25 mm
  UPDATE catalogo_partidas SET precio_unitario=7.4, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.4 - Tuberia Electrica PVC SAP NTP 399.006 de 20 mm
  UPDATE catalogo_partidas SET precio_unitario=6.93, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.5 - Curva PVC SAP NTP 399.006 de 100 mm
  UPDATE catalogo_partidas SET precio_unitario=4.12, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.6 - Curva PVC SAP NTP 399.006 DE 50 mm
  UPDATE catalogo_partidas SET precio_unitario=10.12, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.7 - Curva PVC SAP NTP 399.006 de 25 mm
  UPDATE catalogo_partidas SET precio_unitario=6.43, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.8 - Curva PVC SAP NTP 399.006 DE 20 mm
  UPDATE catalogo_partidas SET precio_unitario=4.89, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.9 - Union PVC SAP NTP 399.006 de 100 mm
  UPDATE catalogo_partidas SET precio_unitario=4.12, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.10 - Unión PVC SAP NTP 399.006 DE 50 mm
  UPDATE catalogo_partidas SET precio_unitario=5.35, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.11 - Unión PVC SAP NTP 399.006 DE 25 mm
  UPDATE catalogo_partidas SET precio_unitario=4.65, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.12 - Unión PVC SAP NTP 399.006 DE 20 mm
  UPDATE catalogo_partidas SET precio_unitario=4.22, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.13 - Conector PVC SAP NTP 399.006 de 100 mm
  UPDATE catalogo_partidas SET precio_unitario=4.12, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.14 - Conector PVC SAP NTP 399.006 DE 50 mm
  UPDATE catalogo_partidas SET precio_unitario=5.01, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.15 - Conector PVC SAP NTP 399.006 DE 25 mm
  UPDATE catalogo_partidas SET precio_unitario=4.14, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.16 - Conector PVC SAP NTP 399.006 DE 20 mm
  UPDATE catalogo_partidas SET precio_unitario=3.88, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.17 - Tubería conduit EMT de 25 mm
  UPDATE catalogo_partidas SET precio_unitario=15.68, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.17' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.18 - Tubería conduit EMT de 20 mm
  UPDATE catalogo_partidas SET precio_unitario=14.07, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.18' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.19 - Curva Conduit EMT de 25 mm
  UPDATE catalogo_partidas SET precio_unitario=16.81, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.19' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.20 - Curva Conduit EMT de 20 mm
  UPDATE catalogo_partidas SET precio_unitario=6.59, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.20' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.21 - Unión Conduit EMT de 25mm
  UPDATE catalogo_partidas SET precio_unitario=36.44, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.21' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.22 - Unión Conduit EMT de 20mm
  UPDATE catalogo_partidas SET precio_unitario=22.82, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.22' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.23 - Conector CONDUIT EMT de 25 mm
  UPDATE catalogo_partidas SET precio_unitario=13.08, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.23' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.24 - Conector CONDUIT EMT de 20 mm
  UPDATE catalogo_partidas SET precio_unitario=8.31, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.24' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.25 - Bandeja tipo malla de 105x300x3000mm electrozincado, aterrado y con accesorios de instalacion.
  UPDATE catalogo_partidas SET precio_unitario=331.45, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.25' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.26 - Tubería conduit EMT Flexible de 20 mm
  UPDATE catalogo_partidas SET precio_unitario=14.07, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.26' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.27 - Prensaestopa para tubo PVC flexible de 20 mm
  UPDATE catalogo_partidas SET precio_unitario=1.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.27' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.28 - Bandeja tipo malla de 105x100x3000mm electrozincado, aterrado y con accesorios de instalacion.
  UPDATE catalogo_partidas SET precio_unitario=130.07, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.28' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.29 - Riel unistrut 41 X 21 X 1.5mm X 2.4m
  UPDATE catalogo_partidas SET precio_unitario=243.59, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.29' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.30 - Abrazadera de 3/4"
  UPDATE catalogo_partidas SET precio_unitario=13.34, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.30' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.31 - Abrazadera de 1"
  UPDATE catalogo_partidas SET precio_unitario=13.54, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.31' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.32 - Abrazadera unistrut de 3/4"
  UPDATE catalogo_partidas SET precio_unitario=14.24, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.32' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.33 - Abrazadera unistrut de 1"
  UPDATE catalogo_partidas SET precio_unitario=15.04, cantidad_presupuesto=0.0 WHERE codigo='OE.6.2.33' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.34 - TRAZO Y REPLANTEO
  UPDATE catalogo_partidas SET precio_unitario=1.44, cantidad_presupuesto=10966.02 WHERE codigo='OE.6.2.34' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.35 - SISTEMA DE FIJACION Y SUSPENSION PARA BANDEJA PORTACABLE DE 100MM
  UPDATE catalogo_partidas SET precio_unitario=15.3, cantidad_presupuesto=150.0 WHERE codigo='OE.6.2.35' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.36 - BANDEJA PORTACABLES ELECTROZINCADO TIPO MALLA DE 105X100X3000MM
  UPDATE catalogo_partidas SET precio_unitario=155.69, cantidad_presupuesto=180.0 WHERE codigo='OE.6.2.36' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.37 - PROTECCION TEMPORAL CON FILM DE BANDEJA PORTACABLES DE 100MM
  UPDATE catalogo_partidas SET precio_unitario=3.33, cantidad_presupuesto=180.0 WHERE codigo='OE.6.2.37' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.38 - SISTEMA DE SUJECIÓN PARA BANDEJA PORTACABLES DE 300MM
  UPDATE catalogo_partidas SET precio_unitario=33.04, cantidad_presupuesto=968.0 WHERE codigo='OE.6.2.38' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.39 - BANDEJA PORTACABLES ELECTROZINCADO TIPO MALLA DE 105X300X3000MM
  UPDATE catalogo_partidas SET precio_unitario=303.77, cantidad_presupuesto=1262.41 WHERE codigo='OE.6.2.39' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.40 - PROTECCION TEMPORAL CON FILM DE BANDEJA PORTACABLES DE 300 MM
  UPDATE catalogo_partidas SET precio_unitario=4.35, cantidad_presupuesto=1162.0 WHERE codigo='OE.6.2.40' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.41 - ATERRAMIENTO PARA BANDEJA PORTACABLE
  UPDATE catalogo_partidas SET precio_unitario=36.19, cantidad_presupuesto=1342.0 WHERE codigo='OE.6.2.41' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.42 - PICADO Y CORTE DE MUROS PARA INSTALACIÓN DE TUBERÍA PVC
  UPDATE catalogo_partidas SET precio_unitario=9.61, cantidad_presupuesto=140.0 WHERE codigo='OE.6.2.42' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.43 - TUBERIA ELECTRICA PVC SAP DE 100 MM
  UPDATE catalogo_partidas SET precio_unitario=43.9, cantidad_presupuesto=68.32 WHERE codigo='OE.6.2.43' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.44 - TUBERIA ELECTRICA PVC SAP DE 50 MM
  UPDATE catalogo_partidas SET precio_unitario=19.64, cantidad_presupuesto=100.12 WHERE codigo='OE.6.2.44' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.45 - TUBERIA ELECTRICA PVC SAP DE 25 MM
  UPDATE catalogo_partidas SET precio_unitario=15.04, cantidad_presupuesto=2048.88 WHERE codigo='OE.6.2.45' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.46 - TUBERIA ELECTRICA PVC SAP DE 20 MM
  UPDATE catalogo_partidas SET precio_unitario=14.23, cantidad_presupuesto=271.43 WHERE codigo='OE.6.2.46' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.47 - CURVA ELECTRICA PVC SAP DE 100 MM
  UPDATE catalogo_partidas SET precio_unitario=81.84, cantidad_presupuesto=8.0 WHERE codigo='OE.6.2.47' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.48 - CURVA ELECTRICA PVC SAP DE 50 MM
  UPDATE catalogo_partidas SET precio_unitario=24.42, cantidad_presupuesto=30.0 WHERE codigo='OE.6.2.48' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.49 - CURVA ELECTRICA PVC SAP DE 25 MM
  UPDATE catalogo_partidas SET precio_unitario=8.17, cantidad_presupuesto=873.0 WHERE codigo='OE.6.2.49' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.50 - CURVA ELECTRICA PVC SAP DE 20 MM
  UPDATE catalogo_partidas SET precio_unitario=7.06, cantidad_presupuesto=180.0 WHERE codigo='OE.6.2.50' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.51 - UNION ELECTRICA PVC SAP DE 100 MM
  UPDATE catalogo_partidas SET precio_unitario=17.36, cantidad_presupuesto=20.0 WHERE codigo='OE.6.2.51' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.52 - UNIÓN ELECTRICA PVC SAP DE 50 MM
  UPDATE catalogo_partidas SET precio_unitario=9.27, cantidad_presupuesto=30.0 WHERE codigo='OE.6.2.52' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.53 - UNIÓN ELECTRICA PVC SAP DE 25 MM
  UPDATE catalogo_partidas SET precio_unitario=5.85, cantidad_presupuesto=873.0 WHERE codigo='OE.6.2.53' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.54 - UNIÓN ELECTRICA PVC SAP DE 20 MM
  UPDATE catalogo_partidas SET precio_unitario=5.75, cantidad_presupuesto=86.0 WHERE codigo='OE.6.2.54' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.55 - CONECTOR ELECTRICO PVC SAP DE 100 MM
  UPDATE catalogo_partidas SET precio_unitario=17.36, cantidad_presupuesto=20.0 WHERE codigo='OE.6.2.55' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.56 - CONECTOR ELECTRICO PVC SAP DE 50 MM
  UPDATE catalogo_partidas SET precio_unitario=13.41, cantidad_presupuesto=30.0 WHERE codigo='OE.6.2.56' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.57 - CONECTOR ELECTRICO PVC SAP DE 25 MM
  UPDATE catalogo_partidas SET precio_unitario=5.85, cantidad_presupuesto=873.0 WHERE codigo='OE.6.2.57' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.58 - CONECTOR ELECTRICO PVC SAP DE 20 MM
  UPDATE catalogo_partidas SET precio_unitario=5.75, cantidad_presupuesto=10.0 WHERE codigo='OE.6.2.58' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.59 - TUBERÍA CONDUIT EMT DE 25 MM
  UPDATE catalogo_partidas SET precio_unitario=17.67, cantidad_presupuesto=4658.0 WHERE codigo='OE.6.2.59' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.60 - TUBERÍA CONDUIT EMT DE 20 MM
  UPDATE catalogo_partidas SET precio_unitario=14.73, cantidad_presupuesto=4966.0 WHERE codigo='OE.6.2.60' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.61 - CURVA CONDUIT EMT DE 25 MM
  UPDATE catalogo_partidas SET precio_unitario=8.17, cantidad_presupuesto=1755.0 WHERE codigo='OE.6.2.61' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.62 - CURVA CONDUIT EMT DE 20 MM
  UPDATE catalogo_partidas SET precio_unitario=6.27, cantidad_presupuesto=3268.0 WHERE codigo='OE.6.2.62' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.63 - UNIÓN CONDUIT EMT DE 25MM
  UPDATE catalogo_partidas SET precio_unitario=5.77, cantidad_presupuesto=2355.0 WHERE codigo='OE.6.2.63' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.64 - UNIÓN CONDUIT EMT DE 20MM
  UPDATE catalogo_partidas SET precio_unitario=5.46, cantidad_presupuesto=2655.0 WHERE codigo='OE.6.2.64' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.65 - CONECTOR CONDUIT EMT DE 25 MM
  UPDATE catalogo_partidas SET precio_unitario=5.66, cantidad_presupuesto=2355.0 WHERE codigo='OE.6.2.65' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.66 - CONECTOR CONDUIT EMT DE 20 MM
  UPDATE catalogo_partidas SET precio_unitario=5.46, cantidad_presupuesto=5268.0 WHERE codigo='OE.6.2.66' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.67 - TUBERÍA CONDUIT EMT FLEXIBLE DE 20 MM
  UPDATE catalogo_partidas SET precio_unitario=9.71, cantidad_presupuesto=1918.5 WHERE codigo='OE.6.2.67' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.68 - TUBERÍA CONDUIT EMT FLEXIBLE DE 25 MM
  UPDATE catalogo_partidas SET precio_unitario=11.76, cantidad_presupuesto=700.0 WHERE codigo='OE.6.2.68' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.69 - PRENSAESTOPA PARA TUBO PVC FLEXIBLE DE 20 MM
  UPDATE catalogo_partidas SET precio_unitario=7.7, cantidad_presupuesto=2558.0 WHERE codigo='OE.6.2.69' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.70 - PRENSAESTOPA PARA TUBO PVC FLEXIBLE DE 25 MM
  UPDATE catalogo_partidas SET precio_unitario=10.73, cantidad_presupuesto=680.0 WHERE codigo='OE.6.2.70' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.71 - PROTECCION TEMPORAL DE TUBERIA CONDUIT CON FILM
  UPDATE catalogo_partidas SET precio_unitario=1.26, cantidad_presupuesto=9624.0 WHERE codigo='OE.6.2.71' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.72 - SISTEMA DE FIJACION CON ABRAZADERA 1"
  UPDATE catalogo_partidas SET precio_unitario=17.41, cantidad_presupuesto=2347.0 WHERE codigo='OE.6.2.72' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.73 - SISTEMA DE FIJACION CON ABRAZADERA 3/4"
  UPDATE catalogo_partidas SET precio_unitario=17.2, cantidad_presupuesto=3742.0 WHERE codigo='OE.6.2.73' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.74 - SISTEMA DE FIJACION CON RIEL UNISTRUT h=2.1 cm
  UPDATE catalogo_partidas SET precio_unitario=20.59, cantidad_presupuesto=2356.0 WHERE codigo='OE.6.2.74' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.75 - SISTEMA DE FIJACION CON RIEL UNISTRUT h=4.1 cm
  UPDATE catalogo_partidas SET precio_unitario=20.93, cantidad_presupuesto=2857.0 WHERE codigo='OE.6.2.75' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.76 - ABRAZADERA UNISTRUT DE 1"
  UPDATE catalogo_partidas SET precio_unitario=5.87, cantidad_presupuesto=951.0 WHERE codigo='OE.6.2.76' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.77 - ABRAZADERA UNISTRUT DE 3/4"
  UPDATE catalogo_partidas SET precio_unitario=5.06, cantidad_presupuesto=2169.0 WHERE codigo='OE.6.2.77' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.78 - TUBERIA ELECTRICA PVC SAP DE 50 MM SOTERRADA
  UPDATE catalogo_partidas SET precio_unitario=12.87, cantidad_presupuesto=15.6 WHERE codigo='OE.6.2.78' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.79 - TUBERIA ELECTRICA PVC SAP DE 40 MM SOTERRADA
  UPDATE catalogo_partidas SET precio_unitario=11.1, cantidad_presupuesto=15.6 WHERE codigo='OE.6.2.79' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.80 - TUBERIA ELECTRICA PVC SAP DE 25 MM SOTERRADA
  UPDATE catalogo_partidas SET precio_unitario=8.44, cantidad_presupuesto=15.6 WHERE codigo='OE.6.2.80' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.81 - ACCESORIO PARA CONEXION A TUBERIA EN BANDEJA
  UPDATE catalogo_partidas SET precio_unitario=12.75, cantidad_presupuesto=520.0 WHERE codigo='OE.6.2.81' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.82 - ACCESORIO PARA BAJADA DE CABLES EN BANDEJA
  UPDATE catalogo_partidas SET precio_unitario=27.62, cantidad_presupuesto=140.0 WHERE codigo='OE.6.2.82' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.83 - RETIRO DE PROTECCION TEMPORAL EN BANDEJA PORTACABLES
  UPDATE catalogo_partidas SET precio_unitario=1.04, cantidad_presupuesto=1342.0 WHERE codigo='OE.6.2.83' AND proyecto_id=v_proyecto_id;
  -- OE.6.2.84 - RETIRO DE PROTECCION TEMPORAL DE TUBERIA CONDUIT
  UPDATE catalogo_partidas SET precio_unitario=0.94, cantidad_presupuesto=9624.0 WHERE codigo='OE.6.2.84' AND proyecto_id=v_proyecto_id;
  -- OE.6.3 - SALIDA DE COMUNICACIONES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.1 - Salida de datos categoria 7A simple
  UPDATE catalogo_partidas SET precio_unitario=101.41, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.2 - Salida de datos categoria 7A Doble
  UPDATE catalogo_partidas SET precio_unitario=163.97, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.3 - Salida para TV
  UPDATE catalogo_partidas SET precio_unitario=129.67, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.4 - Salida HDMI/USB
  UPDATE catalogo_partidas SET precio_unitario=54.61, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.5 - Salida sensor de humo
  UPDATE catalogo_partidas SET precio_unitario=33.17, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.6 - Salida sensor de humo sobre falso cielo raso
  UPDATE catalogo_partidas SET precio_unitario=33.17, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.7 - Salida sensor de temperatura
  UPDATE catalogo_partidas SET precio_unitario=33.17, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.8 - Salida para sensor de aniego
  UPDATE catalogo_partidas SET precio_unitario=38.47, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.8' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.9 - Salida de sensor optico termico
  UPDATE catalogo_partidas SET precio_unitario=33.17, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.9' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.10 - Salida Estación Manual
  UPDATE catalogo_partidas SET precio_unitario=35.67, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.10' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.11 - Salida sirena con luz estrobo
  UPDATE catalogo_partidas SET precio_unitario=18.77, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.11' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.12 - Salida sirena de alarma contra incendio
  UPDATE catalogo_partidas SET precio_unitario=19.27, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.12' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.13 - Salida panel de alarma de incendio
  UPDATE catalogo_partidas SET precio_unitario=24.17, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.13' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.14 - salida unidad de control
  UPDATE catalogo_partidas SET precio_unitario=41.07, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.14' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.15 - Salida parlante
  UPDATE catalogo_partidas SET precio_unitario=33.17, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.15' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.16 - Salida para control de volumen
  UPDATE catalogo_partidas SET precio_unitario=36.17, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.16' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.17 - Salida microfono/audio
  UPDATE catalogo_partidas SET precio_unitario=97.33, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.17' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.18 - Salida consola amplificada
  UPDATE catalogo_partidas SET precio_unitario=41.07, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.18' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.19 - Salida radio trasceptor VHF/HF
  UPDATE catalogo_partidas SET precio_unitario=43.06, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.19' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.20 - Salida para telefono de bomberos
  UPDATE catalogo_partidas SET precio_unitario=88.67, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.20' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.21 - Salida terminal de habitación
  UPDATE catalogo_partidas SET precio_unitario=35.67, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.21' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.22 - Salida pulsador de cama
  UPDATE catalogo_partidas SET precio_unitario=35.67, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.22' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.23 - Salida pulsador de baño
  UPDATE catalogo_partidas SET precio_unitario=35.67, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.23' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.24 - Salida pulsador de piso
  UPDATE catalogo_partidas SET precio_unitario=35.67, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.24' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.25 - Salida lampara de pasillo
  UPDATE catalogo_partidas SET precio_unitario=35.67, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.25' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.26 - Salida de datos Cat. 7A simple
  UPDATE catalogo_partidas SET precio_unitario=111.01, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.26' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.27 - Salida de datos Cat. 7A doble
  UPDATE catalogo_partidas SET precio_unitario=170.01, cantidad_presupuesto=0.0 WHERE codigo='OE.6.3.27' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.28 - SALIDA HDMI
  UPDATE catalogo_partidas SET precio_unitario=33.06, cantidad_presupuesto=48.0 WHERE codigo='OE.6.3.28' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.29 - PUNTO HDMI-  FACEPLATE
  UPDATE catalogo_partidas SET precio_unitario=100.16, cantidad_presupuesto=24.0 WHERE codigo='OE.6.3.29' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.30 - PUNTO HDMI - FACE PLATE TIPO CEPILLO
  UPDATE catalogo_partidas SET precio_unitario=60.16, cantidad_presupuesto=24.0 WHERE codigo='OE.6.3.30' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.31 - SALIDA PARA SENSOR DE HUMO
  UPDATE catalogo_partidas SET precio_unitario=19.16, cantidad_presupuesto=558.0 WHERE codigo='OE.6.3.31' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.32 - SALIDA PARA SENSOR DE HUMO SOBRE FALSO CIELO RASO
  UPDATE catalogo_partidas SET precio_unitario=19.16, cantidad_presupuesto=458.0 WHERE codigo='OE.6.3.32' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.33 - SALIDA PARA SENSOR DE TEMPERATURA
  UPDATE catalogo_partidas SET precio_unitario=19.16, cantidad_presupuesto=4.0 WHERE codigo='OE.6.3.33' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.34 - SALIDA SENSOR DE ANIEGO
  UPDATE catalogo_partidas SET precio_unitario=49.06, cantidad_presupuesto=2.0 WHERE codigo='OE.6.3.34' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.35 - SALIDA PARA SENSOR OPTICO TERMICO
  UPDATE catalogo_partidas SET precio_unitario=19.16, cantidad_presupuesto=4.0 WHERE codigo='OE.6.3.35' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.36 - SALIDA PARA ESTACIÓN MANUAL
  UPDATE catalogo_partidas SET precio_unitario=30.06, cantidad_presupuesto=45.0 WHERE codigo='OE.6.3.36' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.37 - SALIDA PARA SIRENA CON LUZ ESTROBO
  UPDATE catalogo_partidas SET precio_unitario=24.16, cantidad_presupuesto=45.0 WHERE codigo='OE.6.3.37' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.38 - SALIDA PARA SIRENA DE ALARMA CONTRA INCENDIO
  UPDATE catalogo_partidas SET precio_unitario=24.16, cantidad_presupuesto=6.0 WHERE codigo='OE.6.3.38' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.39 - SALIDA PARA PANEL DE ALARMA DE INCENDIO
  UPDATE catalogo_partidas SET precio_unitario=48.3, cantidad_presupuesto=1.0 WHERE codigo='OE.6.3.39' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.40 - SALIDA PARA ANUNCIADOR REMOTO
  UPDATE catalogo_partidas SET precio_unitario=54.2, cantidad_presupuesto=3.0 WHERE codigo='OE.6.3.40' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.41 - SALIDA PARA PARLANTE
  UPDATE catalogo_partidas SET precio_unitario=23.66, cantidad_presupuesto=235.0 WHERE codigo='OE.6.3.41' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.42 - SALIDA CONTROL DE VOLUMEN
  UPDATE catalogo_partidas SET precio_unitario=30.06, cantidad_presupuesto=4.0 WHERE codigo='OE.6.3.42' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.43 - SALIDA PARA MICROFONO/AUDIO
  UPDATE catalogo_partidas SET precio_unitario=49.06, cantidad_presupuesto=2.0 WHERE codigo='OE.6.3.43' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.44 - PUNTO PARA MICROFONO/AUDIO - FACEPLATE
  UPDATE catalogo_partidas SET precio_unitario=79.88, cantidad_presupuesto=1.0 WHERE codigo='OE.6.3.44' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.45 - PUNTO PARA MICROFONO/AUDIO - FACEPLATE TIPO CEPILLO
  UPDATE catalogo_partidas SET precio_unitario=66.06, cantidad_presupuesto=1.0 WHERE codigo='OE.6.3.45' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.46 - SALIDA PARA CONSOLA AMPLIFICADA
  UPDATE catalogo_partidas SET precio_unitario=54.2, cantidad_presupuesto=5.0 WHERE codigo='OE.6.3.46' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.47 - SALIDA PARA RADIO TRASCEPTOR VHF/HF
  UPDATE catalogo_partidas SET precio_unitario=48.3, cantidad_presupuesto=1.0 WHERE codigo='OE.6.3.47' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.48 - PUNTO RADIO TRASCEPTOR VHF/HF
  UPDATE catalogo_partidas SET precio_unitario=70.16, cantidad_presupuesto=1.0 WHERE codigo='OE.6.3.48' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.49 - SALIDA TELEFONO DE BOMBEROS
  UPDATE catalogo_partidas SET precio_unitario=45.2, cantidad_presupuesto=9.0 WHERE codigo='OE.6.3.49' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.50 - SALIDA PARA TERMINAL DE HABITACIÓN
  UPDATE catalogo_partidas SET precio_unitario=45.2, cantidad_presupuesto=56.0 WHERE codigo='OE.6.3.50' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.51 - SALIDA PARA PULSADOR DE CAMA
  UPDATE catalogo_partidas SET precio_unitario=45.2, cantidad_presupuesto=78.0 WHERE codigo='OE.6.3.51' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.52 - SALIDA PARA PULSADOR DE BAÑO
  UPDATE catalogo_partidas SET precio_unitario=45.2, cantidad_presupuesto=38.0 WHERE codigo='OE.6.3.52' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.53 - SALIDA PARA PULSADOR DE PISO
  UPDATE catalogo_partidas SET precio_unitario=45.2, cantidad_presupuesto=2.0 WHERE codigo='OE.6.3.53' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.54 - SALIDA PARA LAMPARA DE PASILLO
  UPDATE catalogo_partidas SET precio_unitario=45.2, cantidad_presupuesto=43.0 WHERE codigo='OE.6.3.54' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.55 - SALIDA DE DATOS CAT. 7A
  UPDATE catalogo_partidas SET precio_unitario=48.2, cantidad_presupuesto=919.0 WHERE codigo='OE.6.3.55' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.56 - PUNTO DE DATOS CAT 7A SIMPLE
  UPDATE catalogo_partidas SET precio_unitario=92.16, cantidad_presupuesto=695.0 WHERE codigo='OE.6.3.56' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.57 - PUNTO DE DATOS CAT 7A DOBLE
  UPDATE catalogo_partidas SET precio_unitario=95.96, cantidad_presupuesto=224.0 WHERE codigo='OE.6.3.57' AND proyecto_id=v_proyecto_id;
  -- OE.6.3.58 - SALIDA BOTONERA TEMPORIZADOR
  UPDATE catalogo_partidas SET precio_unitario=43.29, cantidad_presupuesto=3.0 WHERE codigo='OE.6.3.58' AND proyecto_id=v_proyecto_id;
  -- OE.6.4 - CONDUCTORES DE COMUNICACIONES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.4.1 - Excavacion de zanja para ducto enterrado 0.50 x 0.60 m
  UPDATE catalogo_partidas SET precio_unitario=12.61, cantidad_presupuesto=0.0 WHERE codigo='OE.6.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.4.2 - Relleno y compactado con material propio 0.50 x0.60 m
  UPDATE catalogo_partidas SET precio_unitario=49.86, cantidad_presupuesto=0.0 WHERE codigo='OE.6.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.4.3 - Buzon de Co Ao de 0.60x0.60x0.60 m
  UPDATE catalogo_partidas SET precio_unitario=113.68, cantidad_presupuesto=0.0 WHERE codigo='OE.6.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.4.4 - BUZON DE COMUNICACIONES - EXCAVACIÓN MANUAL
  UPDATE catalogo_partidas SET precio_unitario=18.0, cantidad_presupuesto=2.53 WHERE codigo='OE.6.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.4.5 - BUZON DE COMUNICACIONES - ENCOFRADO Y DESENCOFRADO
  UPDATE catalogo_partidas SET precio_unitario=190.5, cantidad_presupuesto=19.1 WHERE codigo='OE.6.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.4.6 - BUZON DE COMUNICACIONES - CONCRETO F'C=210KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=544.79, cantidad_presupuesto=1.45 WHERE codigo='OE.6.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.4.7 - BUZON DE COMUNICACIONES - ACERO DE REFUERZO FY=4200 KG/CM2
  UPDATE catalogo_partidas SET precio_unitario=4.51, cantidad_presupuesto=59.35 WHERE codigo='OE.6.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.4.8 - BUZON DE COMUNICACIONES - TAPA DE CONCRETO
  UPDATE catalogo_partidas SET precio_unitario=132.26, cantidad_presupuesto=5.0 WHERE codigo='OE.6.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.6.4.9 - EXCAVACION DE ZANJA PARA DUCTO SOTERRADO
  UPDATE catalogo_partidas SET precio_unitario=27.01, cantidad_presupuesto=26.34 WHERE codigo='OE.6.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.6.4.10 - RELLENO Y COMPACTADO CON MATERIAL PROPIO
  UPDATE catalogo_partidas SET precio_unitario=80.41, cantidad_presupuesto=15.8 WHERE codigo='OE.6.4.10' AND proyecto_id=v_proyecto_id;
  -- OE.6.4.11 - RELLENO Y COMPACTADO CON MATERIAL DE PRESTAMO
  UPDATE catalogo_partidas SET precio_unitario=193.48, cantidad_presupuesto=10.56 WHERE codigo='OE.6.4.11' AND proyecto_id=v_proyecto_id;
  -- OE.6.4.12 - SEÑALIZACION EN ZANJA PARA DUCTO SOTERRADO
  UPDATE catalogo_partidas SET precio_unitario=11.5, cantidad_presupuesto=70.35 WHERE codigo='OE.6.4.12' AND proyecto_id=v_proyecto_id;
  -- OE.6.5 - PATCH PANEL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.1 - Patch panel Cat 7A 48 puertos, incluye jack Cat 7A
  UPDATE catalogo_partidas SET precio_unitario=3113.96, cantidad_presupuesto=0.0 WHERE codigo='OE.6.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.2 - Patch panel Cat 7A 24 puertos, incluye jack Cat 7A
  UPDATE catalogo_partidas SET precio_unitario=1586.66, cantidad_presupuesto=0.0 WHERE codigo='OE.6.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.3 - Patch cord  Cat 7A-Cat 6A  de 7 pies - 3m
  UPDATE catalogo_partidas SET precio_unitario=1.18, cantidad_presupuesto=0.0 WHERE codigo='OE.6.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.4 - Patch cord  Cat 7A-Cat 6A  de 3 pies - 1m
  UPDATE catalogo_partidas SET precio_unitario=1.18, cantidad_presupuesto=0.0 WHERE codigo='OE.6.5.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.5 - Patch cord FO OM4 Multimodo 3 pies - 1m
  UPDATE catalogo_partidas SET precio_unitario=1.18, cantidad_presupuesto=0.0 WHERE codigo='OE.6.5.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.6 - Patch Cord HDMI 3m
  UPDATE catalogo_partidas SET precio_unitario=21.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.5.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.7 - Patch Cord HDMI 1m
  UPDATE catalogo_partidas SET precio_unitario=16.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.5.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.8 - Bandeja de empalme para bandeja de FO ( incluye accesorios)
  UPDATE catalogo_partidas SET precio_unitario=395.59, cantidad_presupuesto=0.0 WHERE codigo='OE.6.5.8' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.9 - Bandeja de fibra optica de 1 RU incluye patch panel y acopladores
  UPDATE catalogo_partidas SET precio_unitario=426.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.5.9' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.10 - Etiquetas adhesivas de identificacion, señalizacion y ordenamiento para el area de Trabajo y Gabinete
  UPDATE catalogo_partidas SET precio_unitario=3.05, cantidad_presupuesto=0.0 WHERE codigo='OE.6.5.10' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.11 - Certificacion de los puntos del cableado de datos Cat 7A
  UPDATE catalogo_partidas SET precio_unitario=63.72, cantidad_presupuesto=992.0 WHERE codigo='OE.6.5.11' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.12 - Certificación de los puntos de fibra óptica
  UPDATE catalogo_partidas SET precio_unitario=65.5, cantidad_presupuesto=60.0 WHERE codigo='OE.6.5.12' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.13 - Patch Cord CAT 7AX2m
  UPDATE catalogo_partidas SET precio_unitario=100.0, cantidad_presupuesto=190.0 WHERE codigo='OE.6.5.13' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.14 - PATCH PANEL CAT 7A 24 PUERTOS, INCLUYE JACK CAT 7A
  UPDATE catalogo_partidas SET precio_unitario=1304.05, cantidad_presupuesto=54.0 WHERE codigo='OE.6.5.14' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.15 - PATCH CORD  CAT 7A - CAT 6A X 1M
  UPDATE catalogo_partidas SET precio_unitario=67.25, cantidad_presupuesto=1430.0 WHERE codigo='OE.6.5.15' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.16 - PATCH CORD CAT 7A  - CAT 6A X 3M
  UPDATE catalogo_partidas SET precio_unitario=84.22, cantidad_presupuesto=690.0 WHERE codigo='OE.6.5.16' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.17 - PATCH CORD DE FIBRA OPTICA LC-LC X 1M
  UPDATE catalogo_partidas SET precio_unitario=92.41, cantidad_presupuesto=40.0 WHERE codigo='OE.6.5.17' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.18 - PATCH CORD DE FIBRA OPTICA LC-LC X 2M
  UPDATE catalogo_partidas SET precio_unitario=104.41, cantidad_presupuesto=25.0 WHERE codigo='OE.6.5.18' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.19 - BANDEJA PARA FIBRA OPTICA DE 12 PUERTOS
  UPDATE catalogo_partidas SET precio_unitario=2517.41, cantidad_presupuesto=16.0 WHERE codigo='OE.6.5.19' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.20 - BANDEJA PARA FIBRA OPTICA DE 24 PUERTOS
  UPDATE catalogo_partidas SET precio_unitario=4314.61, cantidad_presupuesto=3.0 WHERE codigo='OE.6.5.20' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.21 - BANDEJA PARA FIBRA OPTICA DE 48 PUERTOS
  UPDATE catalogo_partidas SET precio_unitario=9829.21, cantidad_presupuesto=1.0 WHERE codigo='OE.6.5.21' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.22 - ETIQUETAS ADHESIVAS DE IDENTIFICACION, SEÑALIZACION Y ORDENAMIENTO
  UPDATE catalogo_partidas SET precio_unitario=1.52, cantidad_presupuesto=12394.0 WHERE codigo='OE.6.5.22' AND proyecto_id=v_proyecto_id;
  -- OE.6.5.23 - EMPALME POR FUSION DE FIBRA OPTICA MM OM4
  UPDATE catalogo_partidas SET precio_unitario=9240.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.5.23' AND proyecto_id=v_proyecto_id;
  -- OE.6.6 - RACK DE COMUNICACIONES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.6.1 - GABINETE DE COMUNICACION
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.6.1.1 - Gabinete de comunicaciones de Piso de 42 RU c/accesorios de instalacion
  UPDATE catalogo_partidas SET precio_unitario=2301.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.6.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.6.1.2 - Gabinete de comunicaciones de Piso de 18 RU C/Accesorios de Instalación
  UPDATE catalogo_partidas SET precio_unitario=8580.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.6.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.6.1.3 - UPS de 2000VA rackeable
  UPDATE catalogo_partidas SET precio_unitario=4316.44, cantidad_presupuesto=0.0 WHERE codigo='OE.6.6.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.6.1.4 - Piso antiestatico conductivo
  UPDATE catalogo_partidas SET precio_unitario=180.0, cantidad_presupuesto=195.06 WHERE codigo='OE.6.6.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.6.1.5 - GABINETE DE COMUNICACIONES DE PISO DE 42 RU
  UPDATE catalogo_partidas SET precio_unitario=23524.0, cantidad_presupuesto=10.0 WHERE codigo='OE.6.6.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.6.1.6 - GABINETE DE COMUNICACIONES DE PARED DE 18 RU
  UPDATE catalogo_partidas SET precio_unitario=13613.66, cantidad_presupuesto=2.0 WHERE codigo='OE.6.6.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.6.1.7 - INSTALACION Y PUESTA EN FUNCIONAMIENTO DE GABIENTE DE COMUNICACIONES
  UPDATE catalogo_partidas SET precio_unitario=25295.04, cantidad_presupuesto=1.0 WHERE codigo='OE.6.6.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.6.2 - SISTEMA INTEGRAL DE GABINETE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.6.2.1 - Sistema integral de gabinete de 42 RU con accesorio de instalacion
  UPDATE catalogo_partidas SET precio_unitario=22304.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.6.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.6.2.2 - Sistema de refrigeracion con condensador externo
  UPDATE catalogo_partidas SET precio_unitario=144808.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.6.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.6.2.3 - Servicio de instalacion, configuracion, capacitacion y puesta de funcionamiento
  UPDATE catalogo_partidas SET precio_unitario=29136.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.6.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.6.2.4 - SISTEMA INTEGRAL DE GABINETE DE 42 RU CON ACCESORIO DE INSTALACION
  UPDATE catalogo_partidas SET precio_unitario=20577.0, cantidad_presupuesto=4.0 WHERE codigo='OE.6.6.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.6.2.5 - SISTEMA DE REFRIGERACION CON CONDENSADOR EXTERNO
  UPDATE catalogo_partidas SET precio_unitario=102714.28, cantidad_presupuesto=2.0 WHERE codigo='OE.6.6.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.6.2.6 - INSTALACION, CONFIGURACION, CAPACITACION Y PUESTA DE FUNCIONAMIENTO DEL SISTEMA INTEGRAL DE GABINETE
  UPDATE catalogo_partidas SET precio_unitario=12644.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.6.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.7 - CAJAS DE PASO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.7.1 - Caja de Paso con tapa Biselada de F°G° 300x300x100 mm
  UPDATE catalogo_partidas SET precio_unitario=16.35, cantidad_presupuesto=0.0 WHERE codigo='OE.6.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.7.2 - Caja de Paso Pesada con tapa Biselada de 200x200x100mm
  UPDATE catalogo_partidas SET precio_unitario=40.63, cantidad_presupuesto=0.0 WHERE codigo='OE.6.7.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.7.3 - Caja de paso Pesada con tapa biselada de 150x150x100mm
  UPDATE catalogo_partidas SET precio_unitario=29.76, cantidad_presupuesto=0.0 WHERE codigo='OE.6.7.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.7.4 - Caja de pase de fierro galvanizado pesado 15 cm x 20cm x 20cm
  UPDATE catalogo_partidas SET precio_unitario=40.49, cantidad_presupuesto=0.0 WHERE codigo='OE.6.7.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.7.5 - Caja de Pase de Fierro Galvanizado Pesado 10cmx25cmx25cm
  UPDATE catalogo_partidas SET precio_unitario=49.99, cantidad_presupuesto=0.0 WHERE codigo='OE.6.7.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.7.6 - CAJA DE PASO CUADRADA F°G° PESADA DE 100X100X50 MM
  UPDATE catalogo_partidas SET precio_unitario=29.92, cantidad_presupuesto=1500.0 WHERE codigo='OE.6.7.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.7.7 - CAJA DE PASO CUADRADA F°G° PESADA DE 100X100X75MM
  UPDATE catalogo_partidas SET precio_unitario=32.95, cantidad_presupuesto=1800.0 WHERE codigo='OE.6.7.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.7.8 - CAJA DE PASO CUADRADA F°G°PESADA DE 150X150X100MM
  UPDATE catalogo_partidas SET precio_unitario=39.01, cantidad_presupuesto=876.0 WHERE codigo='OE.6.7.8' AND proyecto_id=v_proyecto_id;
  -- OE.6.7.9 - CAJA DE PASO CUADRADA F°G°PESADA DE 200X200X100MM
  UPDATE catalogo_partidas SET precio_unitario=51.13, cantidad_presupuesto=18.0 WHERE codigo='OE.6.7.9' AND proyecto_id=v_proyecto_id;
  -- OE.6.7.10 - CAJA DE PASO CUADRADA F°G° PESADA DE 200X200X150 MM
  UPDATE catalogo_partidas SET precio_unitario=62.24, cantidad_presupuesto=120.0 WHERE codigo='OE.6.7.10' AND proyecto_id=v_proyecto_id;
  -- OE.6.7.11 - CAJA DE PASO CUADRADA F°G° PESADA DE 300X300X100 MM
  UPDATE catalogo_partidas SET precio_unitario=78.4, cantidad_presupuesto=16.0 WHERE codigo='OE.6.7.11' AND proyecto_id=v_proyecto_id;
  -- OE.6.7.12 - CAJA DE PASO RECTANGULAR F°G° PESADA DE 100X250X250 MM
  UPDATE catalogo_partidas SET precio_unitario=72.34, cantidad_presupuesto=15.0 WHERE codigo='OE.6.7.12' AND proyecto_id=v_proyecto_id;
  -- OE.6.7.13 - CAJA DE PASO OCTOGONAL F°G° PESADA DE 100X50 MM
  UPDATE catalogo_partidas SET precio_unitario=29.62, cantidad_presupuesto=3600.0 WHERE codigo='OE.6.7.13' AND proyecto_id=v_proyecto_id;
  -- OE.6.7.14 - SEÑALIZACIÓN DE CAJAS DE PASE
  UPDATE catalogo_partidas SET precio_unitario=5.61, cantidad_presupuesto=7945.0 WHERE codigo='OE.6.7.14' AND proyecto_id=v_proyecto_id;
  -- OE.6.8 - SISTEMAS VARIOS DE COMUNICACIONES
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1 - SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1.1 - Panel principal  de alarma contra incendio direccionable incluye accesorios
  UPDATE catalogo_partidas SET precio_unitario=93922.92, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1.2 - Unidad de control incluye accesorios
  UPDATE catalogo_partidas SET precio_unitario=12500.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1.3 - Sensor de Humo Direccionable incluye base para sensor
  UPDATE catalogo_partidas SET precio_unitario=335.45, cantidad_presupuesto=1168.0 WHERE codigo='OE.6.8.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1.4 - Sensor de temperatura direccionable incluye base
  UPDATE catalogo_partidas SET precio_unitario=68.64, cantidad_presupuesto=8.0 WHERE codigo='OE.6.8.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1.5 - Sensor optico termico
  UPDATE catalogo_partidas SET precio_unitario=289.0, cantidad_presupuesto=8.0 WHERE codigo='OE.6.8.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1.6 - Sensor de aniego
  UPDATE catalogo_partidas SET precio_unitario=271.22, cantidad_presupuesto=7.0 WHERE codigo='OE.6.8.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1.7 - Estación Manual de doble Accion
  UPDATE catalogo_partidas SET precio_unitario=289.15, cantidad_presupuesto=49.0 WHERE codigo='OE.6.8.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1.8 - Sirena de alarma contra incendio
  UPDATE catalogo_partidas SET precio_unitario=62.6, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1.9 - Sirena con luz estrobo
  UPDATE catalogo_partidas SET precio_unitario=315.0, cantidad_presupuesto=49.0 WHERE codigo='OE.6.8.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1.10 - Modulo para telefono de bomberos incluye telefono
  UPDATE catalogo_partidas SET precio_unitario=2178.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1.11 - Modulo de aislamiento
  UPDATE catalogo_partidas SET precio_unitario=270.22, cantidad_presupuesto=21.0 WHERE codigo='OE.6.8.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1.12 - Modulo para monitoreo de valvulas y flujo de agua
  UPDATE catalogo_partidas SET precio_unitario=152.82, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1.13 - Modulo de control direccionable
  UPDATE catalogo_partidas SET precio_unitario=119.18, cantidad_presupuesto=8.0 WHERE codigo='OE.6.8.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1.14 - Modulo de monitoreo direccionable
  UPDATE catalogo_partidas SET precio_unitario=428.0, cantidad_presupuesto=53.0 WHERE codigo='OE.6.8.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1.15 - Servicio de Instalacion, configuracion y puesta en funcionamiento del Sistema de deteccion y alarma de incendios
  UPDATE catalogo_partidas SET precio_unitario=69620.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1.16 - INSTALACION DEL SISTEMA DE DETECCION Y ALARMA DE INCENDIOS
  UPDATE catalogo_partidas SET precio_unitario=42674.22, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.1.17 - CONFIGURACION, CAPACITACION Y PUESTA EN FUNCIONAMIENTO DEL SISTEMA DE DETECCION Y ALARMA DE INCENDIOS
  UPDATE catalogo_partidas SET precio_unitario=7000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.2 - SISTEMA DE SONIDO AMBIENTAL Y PERIFONEO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.2.1 - Servidor licenciado de 30 canales SIP
  UPDATE catalogo_partidas SET precio_unitario=6672.9, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.2.2 - Microfono cuello ganso con teclado multizonas IP/SIP
  UPDATE catalogo_partidas SET precio_unitario=1087.53, cantidad_presupuesto=5.0 WHERE codigo='OE.6.8.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.2.3 - Gateway y audio IP
  UPDATE catalogo_partidas SET precio_unitario=588.3, cantidad_presupuesto=15.0 WHERE codigo='OE.6.8.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.2.4 - Cable de audio para conexión de gateway y amplificador
  UPDATE catalogo_partidas SET precio_unitario=14.4, cantidad_presupuesto=15.0 WHERE codigo='OE.6.8.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.2.5 - Amplificador 4x500 W RMS rackeable
  UPDATE catalogo_partidas SET precio_unitario=799.2, cantidad_presupuesto=4.0 WHERE codigo='OE.6.8.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.2.6 - parlante de techo de 6 1/2" doble con transformador linea 100V/6W-24 W maximo.
  UPDATE catalogo_partidas SET precio_unitario=81.3, cantidad_presupuesto=238.0 WHERE codigo='OE.6.8.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.2.7 - Parlante de adosar a pared de 30 W de 5" incluye accesorios
  UPDATE catalogo_partidas SET precio_unitario=245.22, cantidad_presupuesto=11.0 WHERE codigo='OE.6.8.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.2.8 - Atenuador de volumen
  UPDATE catalogo_partidas SET precio_unitario=125.0, cantidad_presupuesto=4.0 WHERE codigo='OE.6.8.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.2.9 - Servicio de instalación, configuración, capacitación y puesta en funcionamiento del sistema de sonido Ambiental
  UPDATE catalogo_partidas SET precio_unitario=11300.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.2.10 - INSTALACIÓN DEL SISTEMA DE SONIDO AMBIENTAL
  UPDATE catalogo_partidas SET precio_unitario=9396.74, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.2.11 - CONFIGURACIÓN, CAPACITACIÓN Y PUESTA EN FUNCIONAMIENTO DEL SISTEMA DE SONIDO AMBIENTAL
  UPDATE catalogo_partidas SET precio_unitario=2500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3 - SISTEMA DE VIDEO VIGILANCIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.1 - Camara IP PoE para interior tipo A
  UPDATE catalogo_partidas SET precio_unitario=840.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.2 - Camara IP PoE para interior tipo B
  UPDATE catalogo_partidas SET precio_unitario=897.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.3 - Camara IP PoE para exterior tipo A
  UPDATE catalogo_partidas SET precio_unitario=11949.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.4 - Grabador NVR incluye software de gestion y licencias
  UPDATE catalogo_partidas SET precio_unitario=102974.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.5 - Estacion de monitoreo incluye monitor incluye accesorios
  UPDATE catalogo_partidas SET precio_unitario=21510.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.6 - Video Wall 2x2x43” 4K Controlador y licencias
  UPDATE catalogo_partidas SET precio_unitario=0.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.7 - Servicio de Instalacion, configuracion, capacitacion y puesta en funcionamiento de Sistema de Video Vigilancia
  UPDATE catalogo_partidas SET precio_unitario=9200.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.3.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.8 - CAMARA DE VIDEO DIGITAL IP
  UPDATE catalogo_partidas SET precio_unitario=3000.0, cantidad_presupuesto=117.0 WHERE codigo='OE.6.8.3.8' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.9 - CAMARA DE VIDEO DIGITAL IP TIPO DOMO
  UPDATE catalogo_partidas SET precio_unitario=3200.0, cantidad_presupuesto=21.0 WHERE codigo='OE.6.8.3.9' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.10 - CAMARA DE VIDEO DIGITAL IP TIPO FIJA
  UPDATE catalogo_partidas SET precio_unitario=3400.0, cantidad_presupuesto=24.0 WHERE codigo='OE.6.8.3.10' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.11 - CAMARA DE VIDEO DIGITAL PANORAMICA 180°
  UPDATE catalogo_partidas SET precio_unitario=8200.0, cantidad_presupuesto=4.0 WHERE codigo='OE.6.8.3.11' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.12 - CAMARA DE VIDEO DIGITAL PANORAMICA 270°
  UPDATE catalogo_partidas SET precio_unitario=10500.0, cantidad_presupuesto=3.0 WHERE codigo='OE.6.8.3.12' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.13 - GRABADOR NVR
  UPDATE catalogo_partidas SET precio_unitario=665500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.3.13' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.14 - SOFTWARE DE GESTION Y LICENCIAS
  UPDATE catalogo_partidas SET precio_unitario=210760.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.3.14' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.15 - ESTACION DE MONITOREO
  UPDATE catalogo_partidas SET precio_unitario=14725.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.3.15' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.16 - VIDEO WALL
  UPDATE catalogo_partidas SET precio_unitario=28440.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.3.16' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.17 - INSTALACION DE SISTEMA DE VIDEO VIGILANCIA
  UPDATE catalogo_partidas SET precio_unitario=7535.46, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.3.17' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.3.18 - CONFIGURACION, CAPACITACION Y PUESTA EN FUNCIONAMIENTO DE SISTEMA DE VIDEO VIGILANCIA
  UPDATE catalogo_partidas SET precio_unitario=5000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.3.18' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.4 - SISTEMA DE TELEFONIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.4.1 - Telefono IP Tipo I uso general
  UPDATE catalogo_partidas SET precio_unitario=1.18, cantidad_presupuesto=152.0 WHERE codigo='OE.6.8.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.4.2 - Telefono IP Tipo III gerencial
  UPDATE catalogo_partidas SET precio_unitario=1.18, cantidad_presupuesto=9.0 WHERE codigo='OE.6.8.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.4.3 - Telefono IP de operadora incluye consola de expansion
  UPDATE catalogo_partidas SET precio_unitario=1.18, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.4.4 - Accesorio para Telefono IP Tipo I para montaje en pared
  UPDATE catalogo_partidas SET precio_unitario=101.25, cantidad_presupuesto=24.0 WHERE codigo='OE.6.8.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.4.5 - Central telefonica incluye licenciamiento
  UPDATE catalogo_partidas SET precio_unitario=1.18, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.4.6 - Servicio de Instalacion, configuracion, capacitacion  y puesta en funcionamiento del Sistema de telefonia
  UPDATE catalogo_partidas SET precio_unitario=1.18, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.4.7 - INSTALACION DEL SISTEMA DE TELEFONIA
  UPDATE catalogo_partidas SET precio_unitario=2675.39, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.4.8 - CONFIGURACION, CAPACITACION  Y PUESTA EN FUNCIONAMIENTO DEL SISTEMA DE TELEFONIA
  UPDATE catalogo_partidas SET precio_unitario=2500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.5 - SISTEMA DE CONTROL DE ACCESO Y SEGURIDAD
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.5.1 - Dispositivo Biometrico de control de acceso con accesorios y/o modulo incluye software
  UPDATE catalogo_partidas SET precio_unitario=1095.0, cantidad_presupuesto=18.0 WHERE codigo='OE.6.8.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.5.2 - Cerradura electromagnetica incluye gabinete, fuente de alimentacion y bateria
  UPDATE catalogo_partidas SET precio_unitario=150.0, cantidad_presupuesto=18.0 WHERE codigo='OE.6.8.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.5.3 - Pulsador de salida en pared
  UPDATE catalogo_partidas SET precio_unitario=30.0, cantidad_presupuesto=18.0 WHERE codigo='OE.6.8.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.5.4 - Dispositivo biometrico de control de asistencia incluye software
  UPDATE catalogo_partidas SET precio_unitario=1375.0, cantidad_presupuesto=2.0 WHERE codigo='OE.6.8.5.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.5.5 - Servicio de Instalacion, configuracion, capacitacion  y puesta en funcionamiento del Sistema de Control de Acceso y Seguridad.
  UPDATE catalogo_partidas SET precio_unitario=5500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.5.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.6 - SISTEMA DE TELEVISIÓN
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.6.1 - Amplificador para TV Cable
  UPDATE catalogo_partidas SET precio_unitario=250.0, cantidad_presupuesto=12.0 WHERE codigo='OE.6.8.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.6.2 - Modulador de video incluye conectores y accesorios
  UPDATE catalogo_partidas SET precio_unitario=4024.2, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.6.3 - Spliter o tap de 2 salidas
  UPDATE catalogo_partidas SET precio_unitario=15.0, cantidad_presupuesto=40.0 WHERE codigo='OE.6.8.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.6.4 - Spliter o tap de 3 salidas
  UPDATE catalogo_partidas SET precio_unitario=11.0, cantidad_presupuesto=20.0 WHERE codigo='OE.6.8.6.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.6.5 - Conector RG6 de compresión
  UPDATE catalogo_partidas SET precio_unitario=3.0, cantidad_presupuesto=200.0 WHERE codigo='OE.6.8.6.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.6.6 - Reproductor blue ray incluye conversor HDMI a coaxial
  UPDATE catalogo_partidas SET precio_unitario=2149.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.6.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.6.7 - Servicio de Instalación, configuración, capacitación  y puesta en funcionamiento del Sistema de television
  UPDATE catalogo_partidas SET precio_unitario=950.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.6.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.7 - SISTEMA DE PROCESAMIENTO CENTRALIZADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.7.1 - Servidor Hiperconvergente
  UPDATE catalogo_partidas SET precio_unitario=89340.16, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.7.2 - KVM deslizable de 1RU
  UPDATE catalogo_partidas SET precio_unitario=21641.2, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.7.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.7.3 - Servicio de Instalación, configuración, capacitación  y puesta en funcionamiento del Sistema de Procesamiento Centralizado
  UPDATE catalogo_partidas SET precio_unitario=13139.3, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.7.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.7.4 - SERVIDOR HIPERCONVERGENTE DE 3 NODOS
  UPDATE catalogo_partidas SET precio_unitario=1440580.63, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.7.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.7.5 - INSTALACION, CONFIGURACION CAPACITACION Y PUESTA EN FUNCIONAMIENTO DEL SISTEMA DE PROCESAMIENTO CENTRALIZADO
  UPDATE catalogo_partidas SET precio_unitario=15000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.7.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.8 - SISTEMA DE ALMACENAMIENTO CENTRALIZADO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.8' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.8.1 - Servidor de almacenamiento de informacion
  UPDATE catalogo_partidas SET precio_unitario=223116.75, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.8.2 - Copia de seguridad centralizada
  UPDATE catalogo_partidas SET precio_unitario=59536.9, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.8.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.8.3 - Servicio de Instalación, configuración, capacitación  y puesta en funcionamiento del Sistema de almacenamiento centralizado
  UPDATE catalogo_partidas SET precio_unitario=85998.4, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.8.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.8.4 - SERVIDOR PARA ALMACENAMIENTO CENTRALIZADO
  UPDATE catalogo_partidas SET precio_unitario=1734985.56, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.8.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.8.5 - BACKUP CENTRALIZADO
  UPDATE catalogo_partidas SET precio_unitario=633275.81, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.8.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.8.6 - INSTALACION, CONFIGURACION, CAPACITACION Y PUESTA EN FUNCIONAMIENTO DEL SISTEMA DE ALMACENAMIENTO
  UPDATE catalogo_partidas SET precio_unitario=18000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.8.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9 - SISTEMA DE CONECTIVIDAD Y SEGURIDAD INFORMATICA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.9' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9.1 - Switch de core
  UPDATE catalogo_partidas SET precio_unitario=106268.44, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.9.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9.2 - Switch de distribucion
  UPDATE catalogo_partidas SET precio_unitario=74330.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.9.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9.3 - Switch Gigabit de 24 puertos PoE + 4 puertos SFP
  UPDATE catalogo_partidas SET precio_unitario=10542.12, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.9.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9.4 - Switch Gigabit de 48 Puertos PoE y 4 puertos SFP
  UPDATE catalogo_partidas SET precio_unitario=17460.46, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.9.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9.5 - Acces Point PoE
  UPDATE catalogo_partidas SET precio_unitario=600.31, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.9.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9.6 - Controladora de acces point
  UPDATE catalogo_partidas SET precio_unitario=3300.46, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.9.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9.7 - Firewall
  UPDATE catalogo_partidas SET precio_unitario=4899.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.9.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9.8 - Servicio de Instalación, configuración, capacitación  y puesta en funcionamiento del Sistema de conectividad y seguridad informática
  UPDATE catalogo_partidas SET precio_unitario=42480.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.9.8' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9.9 - SWITCH PARA RED - PRINCIPAL (CORE) DE 24 SLOTS
  UPDATE catalogo_partidas SET precio_unitario=41425.0, cantidad_presupuesto=2.0 WHERE codigo='OE.6.8.9.9' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9.10 - SWITCH PARA RED DE 24 PUERTOS PoE
  UPDATE catalogo_partidas SET precio_unitario=9359.0, cantidad_presupuesto=7.0 WHERE codigo='OE.6.8.9.10' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9.11 - SWITCH PARA RED DE 48 PUERTOS
  UPDATE catalogo_partidas SET precio_unitario=9525.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.9.11' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9.12 - SWITCH PARA RED DE 48 PUERTOS PoE
  UPDATE catalogo_partidas SET precio_unitario=15233.0, cantidad_presupuesto=13.0 WHERE codigo='OE.6.8.9.12' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9.13 - SWITCH PARA RED - DE BORDE 48 PUERTOS
  UPDATE catalogo_partidas SET precio_unitario=55350.71, cantidad_presupuesto=10.0 WHERE codigo='OE.6.8.9.13' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9.14 - PUNTO DE ACCESO INALAMBRICO - ACCESS POINT WIRELESS
  UPDATE catalogo_partidas SET precio_unitario=4137.97, cantidad_presupuesto=43.0 WHERE codigo='OE.6.8.9.14' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9.15 - SISTEMA DE PROTECCION Y SEGURIDAD  PARA RED - FIREWALL
  UPDATE catalogo_partidas SET precio_unitario=258777.22, cantidad_presupuesto=2.0 WHERE codigo='OE.6.8.9.15' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9.16 - TRANSCEIVER 10 GBASE-SR
  UPDATE catalogo_partidas SET precio_unitario=202.2, cantidad_presupuesto=18.0 WHERE codigo='OE.6.8.9.16' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.9.17 - TRANSCEIVER
  UPDATE catalogo_partidas SET precio_unitario=1988.3, cantidad_presupuesto=50.0 WHERE codigo='OE.6.8.9.17' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.10 - SISTEMA DE RELOJES SINCRONIZADOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.10' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.10.1 - Reloj IP de una cara
  UPDATE catalogo_partidas SET precio_unitario=1135.23, cantidad_presupuesto=131.0 WHERE codigo='OE.6.8.10.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.10.2 - Reloj cronometro de pared
  UPDATE catalogo_partidas SET precio_unitario=5450.0, cantidad_presupuesto=3.0 WHERE codigo='OE.6.8.10.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.10.3 - Accesorio para reloj de doble cara
  UPDATE catalogo_partidas SET precio_unitario=421.05, cantidad_presupuesto=5.0 WHERE codigo='OE.6.8.10.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.10.4 - Reloj patron incluye GPS
  UPDATE catalogo_partidas SET precio_unitario=5450.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.10.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.10.5 - Servicio de Instalación, configuración, capacitación  y puesta en funcionamiento del Sistema de Relojes Sincronizados
  UPDATE catalogo_partidas SET precio_unitario=8100.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.10.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.10.6 - INSTALACIÓN DEL SISTEMA DE RELOJES SINCRONIZADOS
  UPDATE catalogo_partidas SET precio_unitario=3360.6, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.10.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.10.7 - CONFIGURACIÓN, CAPACITACIÓN  Y PUESTA EN FUNCIONAMIENTO DEL SISTEMA DE RELOJES SINCRONIZADOS
  UPDATE catalogo_partidas SET precio_unitario=8000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.10.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.11 - SISTEMA DE TELEPRESENCIA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.11' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.11.1 - Equipo de Video Conferencia
  UPDATE catalogo_partidas SET precio_unitario=341020.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.11.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.11.2 - Computadora para el monitoreo incluye Monitor LED de 42"
  UPDATE catalogo_partidas SET precio_unitario=8287.14, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.11.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.11.3 - Servicio de Instalación, configuración, capacitación  y puesta en funcionamiento del Sistema de Telepresencia
  UPDATE catalogo_partidas SET precio_unitario=6549.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.11.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.12 - SISTEMA DE COMUNICACIÓN POR RADIO VHF/HF
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.12' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.12.1 - Torre ventada de 12m
  UPDATE catalogo_partidas SET precio_unitario=6638.68, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.12.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.12.2 - Antena dipolo multibanda Incluye accesorios de instalacion
  UPDATE catalogo_partidas SET precio_unitario=855.26, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.12.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.12.3 - Antena omnidireccional incluye accesorios de instalación
  UPDATE catalogo_partidas SET precio_unitario=1398.3, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.12.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.12.4 - Radio transceptor HF incluye accesorios de instalacion.
  UPDATE catalogo_partidas SET precio_unitario=14181.34, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.12.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.12.5 - Radio transceptor VHF incluye accesorios de instalacion.
  UPDATE catalogo_partidas SET precio_unitario=5574.32, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.12.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.12.6 - Servicio de instalacion, configuracion, capacitacion y puesta en funcionamiento del Sistema de Comunicación por Radio.
  UPDATE catalogo_partidas SET precio_unitario=30716.58, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.12.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.13 - SISTEMA DE GESTION DE IMÁGENES MEDICAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.13' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.13.1 - Sistema de gestion de imágenes medicas PACs incluye equipos
  UPDATE catalogo_partidas SET precio_unitario=1817199.88, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.13.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.13.2 - Servicio de instalación, configuración, capacitación  y puesta en funcionamiento del sistema del sistema de imágenes medicas.
  UPDATE catalogo_partidas SET precio_unitario=100409.73, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.13.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.14 - SISTEMA DE LLAMADA DE ENFERMERA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.14' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.14.1 - Estacion de enfermera
  UPDATE catalogo_partidas SET precio_unitario=19422.0, cantidad_presupuesto=6.0 WHERE codigo='OE.6.8.14.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.14.2 - Terminal de habitacion
  UPDATE catalogo_partidas SET precio_unitario=6054.0, cantidad_presupuesto=54.0 WHERE codigo='OE.6.8.14.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.14.3 - Pulsador de cama
  UPDATE catalogo_partidas SET precio_unitario=140.15, cantidad_presupuesto=78.0 WHERE codigo='OE.6.8.14.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.14.4 - Pulsador de baño
  UPDATE catalogo_partidas SET precio_unitario=115.49, cantidad_presupuesto=38.0 WHERE codigo='OE.6.8.14.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.14.5 - Pulsador de piso
  UPDATE catalogo_partidas SET precio_unitario=585.71, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.14.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.14.6 - Luz de pasillo led
  UPDATE catalogo_partidas SET precio_unitario=89.7, cantidad_presupuesto=43.0 WHERE codigo='OE.6.8.14.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.14.7 - Servidor de  gestion de control y almacenamiento de datos
  UPDATE catalogo_partidas SET precio_unitario=20848.21, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.14.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.14.8 - Servicio de instalación, configuración, capacitación  y puesta en funcionamiento del sistema del sistema de llamada de enfermera
  UPDATE catalogo_partidas SET precio_unitario=10500.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.14.8' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.14.9 - INSTALACIÓN DEL SISTEMA DE LLAMADA DE ENFERMERA
  UPDATE catalogo_partidas SET precio_unitario=4310.68, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.14.9' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.14.10 - CONFIGURACIÓN, CAPACITACIÓN  Y PUESTA EN FUNCIONAMIENTO DEL SISTEMA DEL SISTEMA DE LLAMADA DE ENFERMERA
  UPDATE catalogo_partidas SET precio_unitario=8500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.14.10' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.15 - SISTEMA DE PUESTA A TIERRA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.15' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.15.1 - Pozo de Puesta a Tierra
  UPDATE catalogo_partidas SET precio_unitario=1831.49, cantidad_presupuesto=6.0 WHERE codigo='OE.6.8.15.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.15.2 - Pruebas de resistencia de puesta a tierra
  UPDATE catalogo_partidas SET precio_unitario=708.0, cantidad_presupuesto=6.0 WHERE codigo='OE.6.8.15.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.15.3 - Barra de tierra de  equipotencial TGB
  UPDATE catalogo_partidas SET precio_unitario=131.52, cantidad_presupuesto=14.0 WHERE codigo='OE.6.8.15.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.15.4 - Cable puesta a tierra CPT 10MM2
  UPDATE catalogo_partidas SET precio_unitario=18.62, cantidad_presupuesto=250.0 WHERE codigo='OE.6.8.15.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.15.5 - Cable puesta a tierra CPT 25MM2
  UPDATE catalogo_partidas SET precio_unitario=27.32, cantidad_presupuesto=250.0 WHERE codigo='OE.6.8.15.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.15.6 - Terminal tipo ojal 10MM2
  UPDATE catalogo_partidas SET precio_unitario=10.52, cantidad_presupuesto=70.0 WHERE codigo='OE.6.8.15.6' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.15.7 - Terminal tipo ojal 25MM2
  UPDATE catalogo_partidas SET precio_unitario=20.04, cantidad_presupuesto=20.0 WHERE codigo='OE.6.8.15.7' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.15.8 - Conector perno partido cobre 25MM2
  UPDATE catalogo_partidas SET precio_unitario=26.94, cantidad_presupuesto=20.0 WHERE codigo='OE.6.8.15.8' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.16 - SISTEMA DE GESTION DE COLAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.16' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.16.1 - Software de gestion de colas incluye instalacion, capacitacion y puesta en marcha
  UPDATE catalogo_partidas SET precio_unitario=100409.73, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.16.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.16.2 - Servicio de Instalación, configuración, capacitación  y puesta en funcionamiento del Sistema de gestion de colas
  UPDATE catalogo_partidas SET precio_unitario=10399.34, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.16.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.17 - SISTEMA BMS DE MANTENIMIENTO Y AHORRO ENERGETICO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.17' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.17.1 - Sistema BMS de mantenimiento y ahorro energetico
  UPDATE catalogo_partidas SET precio_unitario=1280933.14, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.17.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.18 - SISTEMA DE SONIDO AMBIENTAL EN SALA DE USO MULTIPLE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.18' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.18.1 - Mezclador de 8 canales reproductor y grabador incluye accesorios
  UPDATE catalogo_partidas SET precio_unitario=1.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.18.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.18.2 - Amplificador 350W RMS 70/100 V
  UPDATE catalogo_partidas SET precio_unitario=1.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.18.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.18.3 - Parlante de techo de 6" de 30W RMS/100 V
  UPDATE catalogo_partidas SET precio_unitario=1.0, cantidad_presupuesto=6.0 WHERE codigo='OE.6.8.18.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.18.4 - Microfono profesional con accesorios
  UPDATE catalogo_partidas SET precio_unitario=1.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.18.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.18.5 - Servicio de instalación, configuración, capacitación  y puesta en funcionamiento del sistema del sistema de sonido en sala de uso multiple
  UPDATE catalogo_partidas SET precio_unitario=1.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.18.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.19 - SISTEMA DE DETECCION Y EXTINCION DE INCENDIO PARA EL CENTRO DE DATOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.19' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.19.1 - Sistema de deteccion, extincion y alarma de incendios
  UPDATE catalogo_partidas SET precio_unitario=15506.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.19.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.19.2 - Servicio de instalacion, configuracion, capacitacion y puesta en funcionamiento el Sistema de incendio para el centro de datos
  UPDATE catalogo_partidas SET precio_unitario=12506.0, cantidad_presupuesto=0.0 WHERE codigo='OE.6.8.19.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.19.3 - SISTEMA DE DETECCION, EXTINCION Y ALARMA DE INCENDIOS
  UPDATE catalogo_partidas SET precio_unitario=142152.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.19.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.19.4 - SERVICIO DE INSTALACION, CONFIGURACION, CAPACITACION Y PUESTA EN FUNCIONAMIENTO EL SISTEMA DE INCENDIO PARA EL CENTRO DE DATOS
  UPDATE catalogo_partidas SET precio_unitario=4800.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.19.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.20 - SISTEMA DE AMPLIFICACION DE SEÑAL DE TELEFONIA MOVIL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.20' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.20.1 - ANTENA DE RECEPCION DE SEÑAL TELEFONIA MOVIL
  UPDATE catalogo_partidas SET precio_unitario=2730.0, cantidad_presupuesto=3.0 WHERE codigo='OE.6.8.20.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.20.2 - AMPLIFICADOR DE SEÑAL TELEFONIA MOVIL
  UPDATE catalogo_partidas SET precio_unitario=38765.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.20.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.20.3 - ANTENA DE REPETICION DE SEÑAL TELEFONIA MOVIL
  UPDATE catalogo_partidas SET precio_unitario=1023.0, cantidad_presupuesto=11.0 WHERE codigo='OE.6.8.20.3' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.20.4 - INSTALACION DEL SISTEMA DE AMPLIFICACION DE SEÑAL MOVIL
  UPDATE catalogo_partidas SET precio_unitario=553.11, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.20.4' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.20.5 - CONFIGURACION, PUESTA EN FUNCIONAMIENTO Y CAPACITACION DEL SISTEMA DE AMPLIFICACION DE SEÑAL MOVIL
  UPDATE catalogo_partidas SET precio_unitario=2500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.20.5' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.21 - SISTEMA DE ELIMINACION DE PESTES POR ULTRASONIDO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.6.8.21' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.21.1 - EQUIPO AHUYENTADOR ELECTRONICO SONORO PARA ANIMALES
  UPDATE catalogo_partidas SET precio_unitario=1114.0, cantidad_presupuesto=6.0 WHERE codigo='OE.6.8.21.1' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.21.2 - INSTALACION DEL SISTEMA DE ELIMINACION DE PESTES POR ULTRASONIDO
  UPDATE catalogo_partidas SET precio_unitario=188.76, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.21.2' AND proyecto_id=v_proyecto_id;
  -- OE.6.8.21.3 - CONFIGURACION, PUESTA EN FUNCIONAMIENTO Y CAPACITACION DEL SISTEMA DE ELIMINACION DE PESTES POR ULTRASONIDO
  UPDATE catalogo_partidas SET precio_unitario=600.0, cantidad_presupuesto=1.0 WHERE codigo='OE.6.8.21.3' AND proyecto_id=v_proyecto_id;
  -- OE.7 - INSTALACIONES DE GAS LICUADO DE PETROLEO GLP
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.7' AND proyecto_id=v_proyecto_id;
  -- OE.7.1 - ALIMENTADOR Y ACCESORIOS DE COMBUSTIBLE GLP
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.1 - SALIDA DE GAS LICUADO DE PETROLEO 1/2"
  UPDATE catalogo_partidas SET precio_unitario=490.29, cantidad_presupuesto=7.0 WHERE codigo='OE.7.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.2 - SALIDA DE GAS LICUADO DE PETROLEO 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=603.09, cantidad_presupuesto=2.0 WHERE codigo='OE.7.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.3 - TUBERIA DE COBRE TIPO L DE 1/2", ASTM B 88, EXTERIOR
  UPDATE catalogo_partidas SET precio_unitario=63.04, cantidad_presupuesto=3.6 WHERE codigo='OE.7.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.4 - TUBERIA DE COBRE TIPO L DE 1/2", ASTM B 88, EMPOTRADO
  UPDATE catalogo_partidas SET precio_unitario=63.04, cantidad_presupuesto=4.14 WHERE codigo='OE.7.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.5 - TUBERIA DE COBRE TIPO L DE 3/4", ASTM B 88, EXTERIOR
  UPDATE catalogo_partidas SET precio_unitario=63.04, cantidad_presupuesto=1.45 WHERE codigo='OE.7.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.6 - TUBERIA DE COBRE TIPO L DE 1", ASTM B 88, EXTERIOR
  UPDATE catalogo_partidas SET precio_unitario=132.43, cantidad_presupuesto=92.72 WHERE codigo='OE.7.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.7 - TUBERIA DE COBRE TIPO L DE 1", ASTM B 88, EMPOTRADO
  UPDATE catalogo_partidas SET precio_unitario=132.43, cantidad_presupuesto=11.42 WHERE codigo='OE.7.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.8 - TUBERIA DE COBRE TIPO L DE 1", ASTM B 88, CANALETA
  UPDATE catalogo_partidas SET precio_unitario=132.43, cantidad_presupuesto=57.53 WHERE codigo='OE.7.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.9 - TUBERIA DE COBRE TIPO L DE 1 1/4", ASTM B 88, EMPOTRADO
  UPDATE catalogo_partidas SET precio_unitario=137.25, cantidad_presupuesto=9.54 WHERE codigo='OE.7.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.10 - TUBERIA DE COBRE TIPO L DE 1 1/2", ASTM B 88, CANALETA
  UPDATE catalogo_partidas SET precio_unitario=147.09, cantidad_presupuesto=87.79 WHERE codigo='OE.7.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.11 - TUBERIA DE COBRE TIPO L DE 1 1/2", ASTM B 88, EXTERIOR
  UPDATE catalogo_partidas SET precio_unitario=147.09, cantidad_presupuesto=116.63 WHERE codigo='OE.7.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.12 - CODO DE COBRE TIPO L 1/2" X 90º
  UPDATE catalogo_partidas SET precio_unitario=32.44, cantidad_presupuesto=4.0 WHERE codigo='OE.7.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.13 - CODO DE COBRE TIPO L 1" X 90º
  UPDATE catalogo_partidas SET precio_unitario=37.34, cantidad_presupuesto=20.0 WHERE codigo='OE.7.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.14 - CODO DE COBRE TIPO L 1 1/4" X 90º
  UPDATE catalogo_partidas SET precio_unitario=39.64, cantidad_presupuesto=3.0 WHERE codigo='OE.7.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.15 - CODO DE COBRE TIPO L 1 1/2" X 90º
  UPDATE catalogo_partidas SET precio_unitario=41.14, cantidad_presupuesto=50.0 WHERE codigo='OE.7.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.16 - TEE DE COBRE TIPO L 3/4"
  UPDATE catalogo_partidas SET precio_unitario=34.94, cantidad_presupuesto=3.0 WHERE codigo='OE.7.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.17 - TEE DE COBRE TIPO L 1"
  UPDATE catalogo_partidas SET precio_unitario=38.74, cantidad_presupuesto=4.0 WHERE codigo='OE.7.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.18 - TEE DE COBRE TIPO L 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=40.54, cantidad_presupuesto=3.0 WHERE codigo='OE.7.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.19 - REDUCCION DE COBRE TIPO L DE 1 1/2" A 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=53.14, cantidad_presupuesto=2.0 WHERE codigo='OE.7.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.20 - REDUCCION DE COBRE TIPO L DE 1 1/2" A 1"
  UPDATE catalogo_partidas SET precio_unitario=43.14, cantidad_presupuesto=1.0 WHERE codigo='OE.7.1.20' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.21 - REDUCCION DE COBRE TIPO L DE 1" A 3/4"
  UPDATE catalogo_partidas SET precio_unitario=40.14, cantidad_presupuesto=1.0 WHERE codigo='OE.7.1.21' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.22 - REDUCCION DE COBRE TIPO L DE 1" A 1/2"
  UPDATE catalogo_partidas SET precio_unitario=40.14, cantidad_presupuesto=4.0 WHERE codigo='OE.7.1.22' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.23 - REDUCCION DE COBRE TIPO L DE 3/4" A 1/2"
  UPDATE catalogo_partidas SET precio_unitario=37.14, cantidad_presupuesto=5.0 WHERE codigo='OE.7.1.23' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.24 - UNION UNIVERSAL DE COBRE TIPO L 1/2"
  UPDATE catalogo_partidas SET precio_unitario=40.04, cantidad_presupuesto=10.0 WHERE codigo='OE.7.1.24' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.25 - UNION UNIVERSAL DE COBRE TIPO L 1"
  UPDATE catalogo_partidas SET precio_unitario=48.14, cantidad_presupuesto=10.0 WHERE codigo='OE.7.1.25' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.26 - UNION UNIVERSAL DE COBRE TIPO L 1 1/4"
  UPDATE catalogo_partidas SET precio_unitario=53.14, cantidad_presupuesto=4.0 WHERE codigo='OE.7.1.26' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.27 - UNION UNIVERSAL DE COBRE TIPO L 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=56.94, cantidad_presupuesto=10.0 WHERE codigo='OE.7.1.27' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.28 - UNION SIMPLE DE COBRE TIPO L 1"
  UPDATE catalogo_partidas SET precio_unitario=37.64, cantidad_presupuesto=6.0 WHERE codigo='OE.7.1.28' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.29 - UNION SIMPLE DE COBRE TIPO L 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=42.64, cantidad_presupuesto=7.0 WHERE codigo='OE.7.1.29' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.30 - VALVULA BOLA 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=222.25, cantidad_presupuesto=2.0 WHERE codigo='OE.7.1.30' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.31 - VALVULA DE GLOBO DE 1"
  UPDATE catalogo_partidas SET precio_unitario=109.69, cantidad_presupuesto=4.0 WHERE codigo='OE.7.1.31' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.32 - VALVULA DE GLOBO DE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=30.79, cantidad_presupuesto=4.0 WHERE codigo='OE.7.1.32' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.33 - VALVULA DE SEGURIDAD 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=263.15, cantidad_presupuesto=2.0 WHERE codigo='OE.7.1.33' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.34 - VALVULA CHECK 3/4"
  UPDATE catalogo_partidas SET precio_unitario=186.37, cantidad_presupuesto=2.0 WHERE codigo='OE.7.1.34' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.35 - VALVULA CHECK 1"
  UPDATE catalogo_partidas SET precio_unitario=296.81, cantidad_presupuesto=2.0 WHERE codigo='OE.7.1.35' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.36 - VALVULA CHECK 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=347.57, cantidad_presupuesto=2.0 WHERE codigo='OE.7.1.36' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.37 - VALVULA DE RETORNO 1"
  UPDATE catalogo_partidas SET precio_unitario=178.34, cantidad_presupuesto=2.0 WHERE codigo='OE.7.1.37' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.38 - VALVULA DE LLENADO 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=297.55, cantidad_presupuesto=2.0 WHERE codigo='OE.7.1.38' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.39 - MANOMETRO DE PRESION
  UPDATE catalogo_partidas SET precio_unitario=334.13, cantidad_presupuesto=6.0 WHERE codigo='OE.7.1.39' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.40 - COLGADOR PARA TUBERÍA SEGÚN PLANO
  UPDATE catalogo_partidas SET precio_unitario=44.65, cantidad_presupuesto=5.0 WHERE codigo='OE.7.1.40' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.41 - SOPORTE DE TUBERÍA DE PARED
  UPDATE catalogo_partidas SET precio_unitario=73.79, cantidad_presupuesto=4.0 WHERE codigo='OE.7.1.41' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.42 - ESTACION REDUCTORA DE PRESION 1RA ETAPA DE 1 1/2"
  UPDATE catalogo_partidas SET precio_unitario=1152.12, cantidad_presupuesto=2.0 WHERE codigo='OE.7.1.42' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.43 - ESTACION REDUCTORA DE PRESION 2DA ETAPA DE 1"
  UPDATE catalogo_partidas SET precio_unitario=1108.52, cantidad_presupuesto=4.0 WHERE codigo='OE.7.1.43' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.44 - SUMINISTRO E INSTALACION DE TANQUE AEREO DE ALMACENAMIENTO DE GLP, CAP: 3000 GLNS
  UPDATE catalogo_partidas SET precio_unitario=120000.0, cantidad_presupuesto=0.0 WHERE codigo='OE.7.1.44' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.45 - PRUEBAS MECANICAS DEL SISTEMA DE COMBUSTIBLE GLP
  UPDATE catalogo_partidas SET precio_unitario=7560.0, cantidad_presupuesto=1.0 WHERE codigo='OE.7.1.45' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.46 - SUMINISTRO DE TANQUE AEREO DE ALMACENAMIENTO DE GLP, CAP: 1000 GLNS
  UPDATE catalogo_partidas SET precio_unitario=20000.0, cantidad_presupuesto=4.0 WHERE codigo='OE.7.1.46' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.47 - INSTALACION Y MONTAJE DE TANQUE AEREO DE ALMACENAMIENTO CAP 1000 GLN
  UPDATE catalogo_partidas SET precio_unitario=140000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.7.1.47' AND proyecto_id=v_proyecto_id;
  -- OE.7.1.48 - LINEA DE LLENADO PARA TANQUE GLP
  UPDATE catalogo_partidas SET precio_unitario=20000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.7.1.48' AND proyecto_id=v_proyecto_id;
  -- OE.8 - PLAN DE MANEJO AMBIENTAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8' AND proyecto_id=v_proyecto_id;
  -- OE.8.1 - ETAPA DE CONSTRUCCION
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.1 - PROGRAMA DE MANEJO DE RESIDUOS SÓLIDOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.1.1 - Transporte y disposición final de residuos de la demolición y construcción en zonas autorizadas por la autoridad local
  UPDATE catalogo_partidas SET precio_unitario=35.4, cantidad_presupuesto=8838.59 WHERE codigo='OE.8.1.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.1.2 - Acondicionamiento y adquisición de recipientes para el almacén de residuos durante la ejecución del proyecto
  UPDATE catalogo_partidas SET precio_unitario=1569.4, cantidad_presupuesto=0.0 WHERE codigo='OE.8.1.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.1.3 - Recojo, transporte y disposición final de residuos peligrosos (waipes, material contaminado, recipientes de pintura, refrigerantes, aditivos, etc. por una EO-RS.
  UPDATE catalogo_partidas SET precio_unitario=10620.0, cantidad_presupuesto=2.0 WHERE codigo='OE.8.1.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.1.4 - Recojo, transporte y disposición final de residuos NO peligrosos (residuos no aprovechables)
  UPDATE catalogo_partidas SET precio_unitario=27000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.8.1.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.1.5 - Limpieza continua de oficinas y almacenes provisionales de obra
  UPDATE catalogo_partidas SET precio_unitario=13485.3, cantidad_presupuesto=24.0 WHERE codigo='OE.8.1.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.1.6 - Acopio y almacenamiento de residuos producidos en obra
  UPDATE catalogo_partidas SET precio_unitario=10776.5, cantidad_presupuesto=24.0 WHERE codigo='OE.8.1.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.1.7 - Adquisición de contenedor para RR.SS.
  UPDATE catalogo_partidas SET precio_unitario=12000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.8.1.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.1.8 - Adecuada segregacion y registro de residuos solidos en el centro de acopio
  UPDATE catalogo_partidas SET precio_unitario=4506.87, cantidad_presupuesto=8.0 WHERE codigo='OE.8.1.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.1.9 - Adquisicion de insumos y materiales de limpieza
  UPDATE catalogo_partidas SET precio_unitario=8107.7, cantidad_presupuesto=1.0 WHERE codigo='OE.8.1.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.2 - PROGRAMA DE MONITOREO AMBIENTAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.2.1 - Monitoreo de la calidad de aire
  UPDATE catalogo_partidas SET precio_unitario=2360.0, cantidad_presupuesto=5.0 WHERE codigo='OE.8.1.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.2.2 - Monitoreo de ruido ambiental
  UPDATE catalogo_partidas SET precio_unitario=1180.0, cantidad_presupuesto=5.0 WHERE codigo='OE.8.1.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.2.3 - Sensibilización ambiental
  UPDATE catalogo_partidas SET precio_unitario=531.0, cantidad_presupuesto=24.0 WHERE codigo='OE.8.1.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.2.4 - Monitoreo de suelo
  UPDATE catalogo_partidas SET precio_unitario=5192.0, cantidad_presupuesto=5.0 WHERE codigo='OE.8.1.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.3 - Señalización Ambiental
  UPDATE catalogo_partidas SET precio_unitario=1770.0, cantidad_presupuesto=0.0 WHERE codigo='OE.8.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.4 - Lonas para cobertura de agregados
  UPDATE catalogo_partidas SET precio_unitario=1416.0, cantidad_presupuesto=0.0 WHERE codigo='OE.8.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.5 - COBERTURA Y PROTECCION DE AGREGADOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.5.1 - Cobertura y proteccion de agregados
  UPDATE catalogo_partidas SET precio_unitario=7.5, cantidad_presupuesto=6800.0 WHERE codigo='OE.8.1.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.6 - PLAN DE MITIGACION AMBIENTAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.6.1 - Prevencion y control de derrames de aceites e hidrocarburos
  UPDATE catalogo_partidas SET precio_unitario=33358.3, cantidad_presupuesto=1.0 WHERE codigo='OE.8.1.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.6.2 - Procedimiento de Respuesta ante Derrames de Aceites e Hidrocarburos
  UPDATE catalogo_partidas SET precio_unitario=17445.4, cantidad_presupuesto=1.0 WHERE codigo='OE.8.1.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.6.3 - Acciones de mitigacion de polvo
  UPDATE catalogo_partidas SET precio_unitario=11224.4, cantidad_presupuesto=24.0 WHERE codigo='OE.8.1.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.7 - GESTION MANEJO DE RESIDUOS LIQUIDOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.7.1 - Instalacion y mantenimiento de baños quimicos portatiles
  UPDATE catalogo_partidas SET precio_unitario=3000.0, cantidad_presupuesto=7.0 WHERE codigo='OE.8.1.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.8 - SEÑALIZACION AMBIENTAL EN OBRA
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.8.1 - Adquisicion de señaleticas ambientales
  UPDATE catalogo_partidas SET precio_unitario=2500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.8.1.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.8.1.8.2 - Colocacion y rehabilitacion de señalizaciones para medio ambiente
  UPDATE catalogo_partidas SET precio_unitario=3334.8, cantidad_presupuesto=8.0 WHERE codigo='OE.8.1.8.2' AND proyecto_id=v_proyecto_id;
  -- OE.8.2 - ETAPA DE OPERACIÓN Y MANTENIMIENTO (ANUAL)
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8.2' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1 - PROGRAMA DE MANEJO DE RESIDUOS SÓLIDOS DEL EE.SS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.1 - Adquisición de tacho rojo de 20 lt  con tapa  HDPE
  UPDATE catalogo_partidas SET precio_unitario=90.0, cantidad_presupuesto=166.0 WHERE codigo='OE.8.2.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.2 - Adquisición de tacho rojo de 40 lt  con tapa  HDPE
  UPDATE catalogo_partidas SET precio_unitario=165.0, cantidad_presupuesto=26.0 WHERE codigo='OE.8.2.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.3 - Adquisición de tacho rojo de 60 lt  con tapa  HDPE
  UPDATE catalogo_partidas SET precio_unitario=180.0, cantidad_presupuesto=66.0 WHERE codigo='OE.8.2.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.4 - Adquisición de tacho rojo de 120 lt  con tapa y ruedas  HDPE
  UPDATE catalogo_partidas SET precio_unitario=195.0, cantidad_presupuesto=9.0 WHERE codigo='OE.8.2.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.5 - Adquisición de tacho rojo de 220 lt  con tapa y ruedas  HDPE
  UPDATE catalogo_partidas SET precio_unitario=270.0, cantidad_presupuesto=4.0 WHERE codigo='OE.8.2.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.6 - Adquisición de tacho rojo de 660 lt  con tapa y ruedas  HDPE
  UPDATE catalogo_partidas SET precio_unitario=1200.0, cantidad_presupuesto=2.0 WHERE codigo='OE.8.2.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.7 - Adquisición de tacho amarillo de 20 lt  con tapa HDPE
  UPDATE catalogo_partidas SET precio_unitario=90.0, cantidad_presupuesto=50.0 WHERE codigo='OE.8.2.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.8 - Adquisición de tacho amarillo de 40 lt  con tapa HDPE
  UPDATE catalogo_partidas SET precio_unitario=165.0, cantidad_presupuesto=27.0 WHERE codigo='OE.8.2.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.9 - Adquisición de tacho amarillo de 50 lt  con tapa HDPE
  UPDATE catalogo_partidas SET precio_unitario=170.0, cantidad_presupuesto=2.0 WHERE codigo='OE.8.2.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.10 - Adquisición de tacho amarillo de 60 lt  con tapa HDPE
  UPDATE catalogo_partidas SET precio_unitario=195.0, cantidad_presupuesto=6.0 WHERE codigo='OE.8.2.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.11 - Adquisición de tacho amarillo de 120 lt  con tapa y ruedas HDPE
  UPDATE catalogo_partidas SET precio_unitario=240.0, cantidad_presupuesto=13.0 WHERE codigo='OE.8.2.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.12 - Adquisición de tacho amarillo de 400 lt  con tapa y ruedas HDPE
  UPDATE catalogo_partidas SET precio_unitario=1000.0, cantidad_presupuesto=2.0 WHERE codigo='OE.8.2.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.13 - Adquisición de tacho negro de 20 lt con tapa HDPE
  UPDATE catalogo_partidas SET precio_unitario=90.0, cantidad_presupuesto=161.0 WHERE codigo='OE.8.2.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.14 - Adquisición de tacho negro de 40 lt con tapa HDPE
  UPDATE catalogo_partidas SET precio_unitario=165.0, cantidad_presupuesto=54.0 WHERE codigo='OE.8.2.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.15 - Adquisición de tacho negro de 60 lt  con tapa HDPE
  UPDATE catalogo_partidas SET precio_unitario=180.0, cantidad_presupuesto=57.0 WHERE codigo='OE.8.2.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.16 - Adquisición de tacho negro de 120 lt con tapa y ruedas de HDPE
  UPDATE catalogo_partidas SET precio_unitario=195.0, cantidad_presupuesto=10.0 WHERE codigo='OE.8.2.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.17 - Adquisición de tacho negro de 220 lt con tapa y ruedas de HDPE
  UPDATE catalogo_partidas SET precio_unitario=270.0, cantidad_presupuesto=2.0 WHERE codigo='OE.8.2.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.18 - Adquisición de tacho negro de 400 lt con tapa y ruedas de HDPE
  UPDATE catalogo_partidas SET precio_unitario=1000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.8.2.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.1.19 - Adquisición de tacho negro de 660 lt con tapa y ruedas de HDPE
  UPDATE catalogo_partidas SET precio_unitario=1200.0, cantidad_presupuesto=2.0 WHERE codigo='OE.8.2.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.2 - PROGRAMA DE MONITOREO AMBIENTAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.2.1 - Monitoreo de la calidad de aire
  UPDATE catalogo_partidas SET precio_unitario=2360.0, cantidad_presupuesto=2.0 WHERE codigo='OE.8.2.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.8.2.2.2 - Monitoreo de ruido ambiental
  UPDATE catalogo_partidas SET precio_unitario=1180.0, cantidad_presupuesto=2.0 WHERE codigo='OE.8.2.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.8.3 - ETAPA DE CIERRE O ABANDONO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8.3' AND proyecto_id=v_proyecto_id;
  -- OE.8.3.1 - PLAN DE CIERRE
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.8.3.1.1 - Limpieza del terreno
  UPDATE catalogo_partidas SET precio_unitario=5900.0, cantidad_presupuesto=1.0 WHERE codigo='OE.8.3.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.8.3.1.2 - Revegetación
  UPDATE catalogo_partidas SET precio_unitario=9440.0, cantidad_presupuesto=1.0 WHERE codigo='OE.8.3.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.8.3.1.3 - Señalización Ambiental
  UPDATE catalogo_partidas SET precio_unitario=1770.0, cantidad_presupuesto=1.0 WHERE codigo='OE.8.3.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.8.4 - CONTROL DE CALIDAD
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8.4' AND proyecto_id=v_proyecto_id;
  -- OE.8.4.1 - ADQUISICION DE EQUIPOS DE CONTROL DE CALIDAD
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.8.4.1.1 - Adquisicion de equipos de control ambiental
  UPDATE catalogo_partidas SET precio_unitario=9800.0, cantidad_presupuesto=1.0 WHERE codigo='OE.8.4.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.8.4.2 - CALIBRACION DE EQUIPOS DE CONTROL DE CALIDAD
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.8.4.2.1 - Calibracion de sonómetro
  UPDATE catalogo_partidas SET precio_unitario=413.0, cantidad_presupuesto=4.0 WHERE codigo='OE.8.4.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.8.5 - SEGUIMIENTO DE TRAMITE ADMINISTRATIVO Y GESTION DE DOCUMENTOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8.5' AND proyecto_id=v_proyecto_id;
  -- OE.8.5.1 - SEGUIMIENTO DE TRAMITE ADMINISTRATIVO Y GESTION DE DOCUMENTOS
  UPDATE catalogo_partidas SET precio_unitario=37000.0, cantidad_presupuesto=0.0 WHERE codigo='OE.8.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.8.5.2 - Gestion documentaria y tramite administrativo
  UPDATE catalogo_partidas SET precio_unitario=3000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.8.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.8.6 - ESTUDIO DE ALMACENAMIENTO PRIMARIO DE RR.SS HOSPITALARIOS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.8.6' AND proyecto_id=v_proyecto_id;
  -- OE.8.6.1 - Servicio para el estudio de almacenamiento de RR.SS Hospitalarios
  UPDATE catalogo_partidas SET precio_unitario=3000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.8.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.9 - COMPONENTE 02: SUFICIENTE Y ADECUADO EQUIPAMIENTO Y MANTENIMIENTO PARA LA PRESTACION DEL SERICIO ASISTENCIAL Y ADMINISTRATIVO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.9' AND proyecto_id=v_proyecto_id;
  -- OE.9.1 - B - EQUIPAMIENTO BIOMÉDICO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.9.1' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.1 - ELECTROCARDIOGRAFO
  UPDATE catalogo_partidas SET precio_unitario=11695.89, cantidad_presupuesto=8.0 WHERE codigo='OE.9.1.1' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.2 - ECÓGRAFO DOPPLER COLOR 4D
  UPDATE catalogo_partidas SET precio_unitario=221602.5, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.2' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.3 - ECÓGRAFO PORTÁTIL
  UPDATE catalogo_partidas SET precio_unitario=99638.82, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.3' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.4 - BOMBA DE INFUSION DE 1 CANAL
  UPDATE catalogo_partidas SET precio_unitario=12349.95, cantidad_presupuesto=4.0 WHERE codigo='OE.9.1.4' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.5 - BOMBA DE INFUSION DE 2 CANALES
  UPDATE catalogo_partidas SET precio_unitario=36274.78, cantidad_presupuesto=22.0 WHERE codigo='OE.9.1.5' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.6 - BOMBA DE INFUSION DE JERINGA
  UPDATE catalogo_partidas SET precio_unitario=11140.96, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.6' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.7 - COCHE DE PARO EQUIPADO
  UPDATE catalogo_partidas SET precio_unitario=66487.0, cantidad_presupuesto=14.0 WHERE codigo='OE.9.1.7' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.8 - INCUBADORA DE TRANSPORTE
  UPDATE catalogo_partidas SET precio_unitario=76939.2, cantidad_presupuesto=4.0 WHERE codigo='OE.9.1.8' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.9 - INCUBADORA ESTANDAR
  UPDATE catalogo_partidas SET precio_unitario=90921.66, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.9' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.10 - INCUBADORA NEONATAL ABIERTA
  UPDATE catalogo_partidas SET precio_unitario=90949.9, cantidad_presupuesto=4.0 WHERE codigo='OE.9.1.10' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.11 - MAQUINA DE ANESTESIA CON MONITOREO AVANZADO
  UPDATE catalogo_partidas SET precio_unitario=290543.75, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.11' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.12 - VENTILADOR MECANICO ADULTO - PEDIATRICO - NEONATAL
  UPDATE catalogo_partidas SET precio_unitario=175760.3, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.12' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.13 - VENTILADOR DE TRANSPORTE
  UPDATE catalogo_partidas SET precio_unitario=92248.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.13' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.14 - MONITOR DE FUNCIONES VITALES DE TRANSPORTE
  UPDATE catalogo_partidas SET precio_unitario=89000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.14' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.15 - VENTILADOR MECANICO ADULTO PEDIATRICO
  UPDATE catalogo_partidas SET precio_unitario=169984.09, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.15' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.16 - MONITOR DEL ESTADO HIPNOTICO
  UPDATE catalogo_partidas SET precio_unitario=61724.67, cantidad_presupuesto=0.0 WHERE codigo='OE.9.1.16' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.17 - AGITADOR PARA BOLSAS DE SANGRE
  UPDATE catalogo_partidas SET precio_unitario=27343.97, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.17' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.18 - MONITOR FETAL GEMELAR
  UPDATE catalogo_partidas SET precio_unitario=31160.97, cantidad_presupuesto=15.0 WHERE codigo='OE.9.1.18' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.19 - PULSIOXIMETRO
  UPDATE catalogo_partidas SET precio_unitario=6306.3, cantidad_presupuesto=26.0 WHERE codigo='OE.9.1.19' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.20 - MONITOR DE FUNCIONES VITALES DE 5 PARAMETROS
  UPDATE catalogo_partidas SET precio_unitario=166207.14, cantidad_presupuesto=5.0 WHERE codigo='OE.9.1.20' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.21 - BALANZA DE DOS PLATILLOS DE 2 KG.
  UPDATE catalogo_partidas SET precio_unitario=1690.52, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.21' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.22 - EQUIPO DE RAYOS X ESTACIONARIO DIGITAL
  UPDATE catalogo_partidas SET precio_unitario=1201049.35, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.22' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.23 - NEBULIZADOR
  UPDATE catalogo_partidas SET precio_unitario=4766.49, cantidad_presupuesto=6.0 WHERE codigo='OE.9.1.23' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.24 - EQUIPO DE RAYOS X DENTAL RODABLE DIGITAL
  UPDATE catalogo_partidas SET precio_unitario=90000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.24' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.25 - ESTERILIZADOR CON GENERADOR ELECTRICO DE VAPOR DE 2O LT
  UPDATE catalogo_partidas SET precio_unitario=39270.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.1.25' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.26 - ESTERILIZADOR CON GENERADOR ELECTRICO DE VAPOR DE 30 LT.
  UPDATE catalogo_partidas SET precio_unitario=35697.36, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.26' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.27 - ESTERILIZADOR CON GENERADOR ELECTRICO DE VAPOR DE 40 LT
  UPDATE catalogo_partidas SET precio_unitario=72667.73, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.27' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.28 - ESTERILIZADOR CON GENERADOR ELECTRICO A VAPOR DE 50 LITROS
  UPDATE catalogo_partidas SET precio_unitario=89250.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.28' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.29 - LAVADOR ULTRASÓNICO DE INSTRUMENTAL QUIRURGICO
  UPDATE catalogo_partidas SET precio_unitario=48681.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.1.29' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.30 - TANQUE DE HIDROTERAPIA PARA MIEMBROS INFERIORES
  UPDATE catalogo_partidas SET precio_unitario=37060.62, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.30' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.31 - TANQUE DE HIDROTERAPIA PARA MIEMBROS SUPERIORES
  UPDATE catalogo_partidas SET precio_unitario=33928.42, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.31' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.32 - EQUIPO DE RAYOS X RODABLE DIGITAL
  UPDATE catalogo_partidas SET precio_unitario=311727.02, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.32' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.33 - ANALIZADOR AUTOMATICO PARA MICROBIOLOGIA
  UPDATE catalogo_partidas SET precio_unitario=265408.31, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.33' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.34 - ANALIZADOR BIOQUIMICO AUTOMATIZADO
  UPDATE catalogo_partidas SET precio_unitario=204750.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.34' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.35 - ANALIZADOR DE ELECTROLITICOS Y GASES DE SANGRE PORTATIL
  UPDATE catalogo_partidas SET precio_unitario=53423.41, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.35' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.36 - ANALIZADOR DE ELECTROLITOS Y GASES EN LA SANGRE
  UPDATE catalogo_partidas SET precio_unitario=137670.17, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.36' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.37 - BAÑO MARIA DE 10 A 15 LT
  UPDATE catalogo_partidas SET precio_unitario=7932.93, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.37' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.38 - BAÑO MARIA DE 20 A 25 LITROS
  UPDATE catalogo_partidas SET precio_unitario=10193.25, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.38' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.39 - CABINA DE FLUJO LAMINAR HORIZONTAL
  UPDATE catalogo_partidas SET precio_unitario=45520.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.39' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.40 - ESPECTROFOTOMETRO
  UPDATE catalogo_partidas SET precio_unitario=65123.26, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.40' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.41 - INCUBADORA DE MICROBIOLOGIA CO2
  UPDATE catalogo_partidas SET precio_unitario=37963.65, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.41' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.42 - INCUBADORA DE MICROBIOLOGIA DE 30 A 40 LITROS
  UPDATE catalogo_partidas SET precio_unitario=40675.82, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.42' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.43 - ROTADOR SEROL6GICO
  UPDATE catalogo_partidas SET precio_unitario=11617.45, cantidad_presupuesto=4.0 WHERE codigo='OE.9.1.43' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.44 - ANALIZADOR HEMATOL6GICO AUTOMATICO DE 03 EXTIRPES
  UPDATE catalogo_partidas SET precio_unitario=116674.4, cantidad_presupuesto=0.0 WHERE codigo='OE.9.1.44' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.45 - CENTRIFUGA UNIVERSAL PARA 24 TUBOS
  UPDATE catalogo_partidas SET precio_unitario=34807.5, cantidad_presupuesto=3.0 WHERE codigo='OE.9.1.45' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.46 - CENTRIFUGA PARA 24 TUBOS
  UPDATE catalogo_partidas SET precio_unitario=24500.0, cantidad_presupuesto=4.0 WHERE codigo='OE.9.1.46' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.47 - CENTRIFUGA PARA MICROHEMATOCRITO
  UPDATE catalogo_partidas SET precio_unitario=15786.68, cantidad_presupuesto=4.0 WHERE codigo='OE.9.1.47' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.48 - EQUIPO DE FOTOTERAPIA
  UPDATE catalogo_partidas SET precio_unitario=16696.26, cantidad_presupuesto=4.0 WHERE codigo='OE.9.1.48' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.49 - COAGUL6METRO AUTOMATIZADO
  UPDATE catalogo_partidas SET precio_unitario=325500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.49' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.50 - HEMOGLOBINÓMETRO
  UPDATE catalogo_partidas SET precio_unitario=5911.24, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.50' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.51 - BALANZA ANALITICA (200 A 500 GR)
  UPDATE catalogo_partidas SET precio_unitario=9030.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.51' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.52 - BALANZA ANALITICA DE PRECISI6N
  UPDATE catalogo_partidas SET precio_unitario=6689.46, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.52' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.53 - CENTRIFUGA REFRIGERADA DE PIE
  UPDATE catalogo_partidas SET precio_unitario=65100.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.53' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.54 - TERMO PORTA VACUNAS
  UPDATE catalogo_partidas SET precio_unitario=404.25, cantidad_presupuesto=30.0 WHERE codigo='OE.9.1.54' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.55 - LAMPARA DE TERAPIA RAYOS INFRARROJOS
  UPDATE catalogo_partidas SET precio_unitario=5167.86, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.55' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.56 - ANALIZADOR AUTOMNTICO DE COOMBS
  UPDATE catalogo_partidas SET precio_unitario=118406.71, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.56' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.57 - LECTOR DE ELISA
  UPDATE catalogo_partidas SET precio_unitario=42658.47, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.57' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.58 - DESCONGELADOR DE PLASMA
  UPDATE catalogo_partidas SET precio_unitario=69793.06, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.58' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.59 - LAMPARA DE TERAPIA RAYOS ULTRAVIOLETAS
  UPDATE catalogo_partidas SET precio_unitario=6166.67, cantidad_presupuesto=0.0 WHERE codigo='OE.9.1.59' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.60 - ESTERILIZADOR POR CALOR SECO 50 LITROS
  UPDATE catalogo_partidas SET precio_unitario=37893.63, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.60' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.61 - MICROSCOPIO QUIRURGICO PARA OFTALMOLOGIA
  UPDATE catalogo_partidas SET precio_unitario=200340.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.61' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.62 - FOTOCUAGULADOR
  UPDATE catalogo_partidas SET precio_unitario=18000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.62' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.63 - LAMPARA QUIRURGICA DE TECHO DE INTENSIDAD ALTA
  UPDATE catalogo_partidas SET precio_unitario=161521.19, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.63' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.64 - LENSÓMETRO DIGITAL CON UVEÓMETRO
  UPDATE catalogo_partidas SET precio_unitario=20000.5, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.64' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.65 - LÁMPARA QUIRÚRGICA DE TECHO SIMPLE
  UPDATE catalogo_partidas SET precio_unitario=92501.56, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.65' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.66 - PULSIOXIMETRO PORTÁTIL
  UPDATE catalogo_partidas SET precio_unitario=8965.08, cantidad_presupuesto=7.0 WHERE codigo='OE.9.1.66' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.67 - AGITADOR DE TUBOS
  UPDATE catalogo_partidas SET precio_unitario=14700.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.67' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.68 - LÁMPARA QUIRÚRGICA RODABLE
  UPDATE catalogo_partidas SET precio_unitario=78374.59, cantidad_presupuesto=16.0 WHERE codigo='OE.9.1.68' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.69 - CUNA DE CALOR RADIANTE
  UPDATE catalogo_partidas SET precio_unitario=86891.46, cantidad_presupuesto=12.0 WHERE codigo='OE.9.1.69' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.70 - ESTERILIZADOR CON GENERADOR ELECTRICO DE VAPOR VERTICAL DE
30 LITROS
  UPDATE catalogo_partidas SET precio_unitario=63882.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.70' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.71 - MICROSCOPIO BINOCULAR CON CONTRASTE DE FASE
  UPDATE catalogo_partidas SET precio_unitario=60048.87, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.71' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.72 - ANALIZADOR INMUNOLÓGICO
  UPDATE catalogo_partidas SET precio_unitario=254945.15, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.72' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.73 - EQUIPO DE TERAPIA CON ULTRASONIDO
  UPDATE catalogo_partidas SET precio_unitario=23779.81, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.73' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.74 - ECOGRAFO PARA EVALUACION MUSCO ESQUELETICO
  UPDATE catalogo_partidas SET precio_unitario=246750.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.74' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.75 - ESTERILIZADOR ELÉCTRICO DE BIBERONES 30 A 55LTS
  UPDATE catalogo_partidas SET precio_unitario=30164.04, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.75' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.76 - ROTADOR ORBITAL
  UPDATE catalogo_partidas SET precio_unitario=10034.82, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.76' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.77 - ANALIZADOR AUTOMATICO DE HEMOCULTIVO
  UPDATE catalogo_partidas SET precio_unitario=188488.55, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.77' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.78 - INCUBADORA PARA CULTIVO
  UPDATE catalogo_partidas SET precio_unitario=40385.13, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.78' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.79 - ESTIMULADOR NERVIOSO TRANSCUTANEO (TENS)
  UPDATE catalogo_partidas SET precio_unitario=8986.54, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.79' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.80 - DESFIBRILADOR EXTERNO AUTOMATICO
  UPDATE catalogo_partidas SET precio_unitario=24570.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.80' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.81 - EQUIPO DE ELECTROTERAPIA DE CORRIENTES MULTIPLES
  UPDATE catalogo_partidas SET precio_unitario=22881.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.1.81' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.82 - EQUIPO DE TERAPIA COMBINADA (ULTRASONIDO + ELECTROTERAPIA)
  UPDATE catalogo_partidas SET precio_unitario=19690.95, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.82' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.83 - DESTARTARIZADOR ULTRASÓNICO
  UPDATE catalogo_partidas SET precio_unitario=6489.75, cantidad_presupuesto=3.0 WHERE codigo='OE.9.1.83' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.84 - BALANZA DE PRECISI6N 2 KG
  UPDATE catalogo_partidas SET precio_unitario=6825.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.1.84' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.85 - CAMPANA PARA ANAEROBIOSIS
  UPDATE catalogo_partidas SET precio_unitario=19500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.85' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.86 - LAMPARA GERMICIDA DE PARED
  UPDATE catalogo_partidas SET precio_unitario=2733.8, cantidad_presupuesto=4.0 WHERE codigo='OE.9.1.86' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.87 - UNIDAD DENTAL COMPLETA
  UPDATE catalogo_partidas SET precio_unitario=55500.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.1.87' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.88 - TONÓMETRO DE SCHIOTZ
  UPDATE catalogo_partidas SET precio_unitario=823.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.88' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.89 - CAMARA RETINAL NO MIDRIATICA
  UPDATE catalogo_partidas SET precio_unitario=168225.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.89' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.90 - TONÓMETRO DE AIRE
  UPDATE catalogo_partidas SET precio_unitario=30461.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.90' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.91 - AUTOKERATOREFRACTÓMETRO FIJO
  UPDATE catalogo_partidas SET precio_unitario=56166.58, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.91' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.92 - FACOEMULSIFICADOR CON VITREOFAGO
  UPDATE catalogo_partidas SET precio_unitario=395172.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.92' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.93 - BALON DE HONAN
  UPDATE catalogo_partidas SET precio_unitario=2500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.93' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.94 - ANALIZADOR AUTOMATIZADO PARA INMUNOBIOQUIMICA DE ELECTROQUIMIOLUMINISCENCIA
  UPDATE catalogo_partidas SET precio_unitario=472500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.94' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.95 - CAMPIMETRO COMPUTARIZADO
  UPDATE catalogo_partidas SET precio_unitario=79700.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.95' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.96 - ECÓGRAFO OFTALMOLÓGICO
  UPDATE catalogo_partidas SET precio_unitario=115500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.96' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.97 - MICROSCOPIO BINOCULAR ESTANDAR
  UPDATE catalogo_partidas SET precio_unitario=17813.25, cantidad_presupuesto=6.0 WHERE codigo='OE.9.1.97' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.98 - TORRE DE VIDEO CIRUGIA LAPAROSCOPICA
  UPDATE catalogo_partidas SET precio_unitario=595000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.98' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.99 - TORRE DE VIDEO CIRUGIA HISTEROSCOPICA
  UPDATE catalogo_partidas SET precio_unitario=745000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.99' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.100 - MONITOR DE FUNCIONES VITALES DE 6 PARAMETROS (ATENCIÓN AL RECIÉN NACIDO)
  UPDATE catalogo_partidas SET precio_unitario=46935.58, cantidad_presupuesto=15.0 WHERE codigo='OE.9.1.100' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.101 - VIDEO COLPOSCOPIO
  UPDATE catalogo_partidas SET precio_unitario=55941.94, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.101' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.102 - VIDEO GASTROSCOPIO
  UPDATE catalogo_partidas SET precio_unitario=790266.67, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.102' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.103 - ELECTROBISTURI MONOPOLAR / BIPOLAR DIGITAL
  UPDATE catalogo_partidas SET precio_unitario=102375.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.103' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.104 - ELECTROBISTURI MONOPOLAR I BIPOLAR DIGITAL CON PINZA HEMOSTATICA DE VASOS
  UPDATE catalogo_partidas SET precio_unitario=122850.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.104' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.105 - ELECTROBISTURI PARA ENDOSCOPIA A GAS ARGÓN
  UPDATE catalogo_partidas SET precio_unitario=131132.5, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.105' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.106 - MONITOR DE FUNCIONES VITALES DE 7 PARAMETROS
  UPDATE catalogo_partidas SET precio_unitario=64622.11, cantidad_presupuesto=21.0 WHERE codigo='OE.9.1.106' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.107 - ELECTROCAUTERIO MONOPOLAR Y BIPOLAR
  UPDATE catalogo_partidas SET precio_unitario=46585.75, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.107' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.108 - MESA DE OPERACIONES HIDRAULICA/ELECTRICA
  UPDATE catalogo_partidas SET precio_unitario=161303.54, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.108' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.109 - ASPIRADOR DE SECRECION PORTATIL
  UPDATE catalogo_partidas SET precio_unitario=4794.94, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.109' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.110 - ASPIRADOR DE SECRECIONES DE SOBREMESA
  UPDATE catalogo_partidas SET precio_unitario=7847.46, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.110' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.111 - ASPIRADOR DE SECRECIONES RODABLE
  UPDATE catalogo_partidas SET precio_unitario=9723.2, cantidad_presupuesto=32.0 WHERE codigo='OE.9.1.111' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.112 - ASPIRADOR DE SECRECIONES RODABLE PARA RED DE VACIO
  UPDATE catalogo_partidas SET precio_unitario=2439.89, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.112' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.113 - CALENTADOR CORPORAL
  UPDATE catalogo_partidas SET precio_unitario=17216.23, cantidad_presupuesto=4.0 WHERE codigo='OE.9.1.113' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.114 - CALENTADOR PARA SANGRE/SOLUCIONES
  UPDATE catalogo_partidas SET precio_unitario=18900.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.114' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.115 - EQUIPO CALENTADOR DE FLUIDOS
  UPDATE catalogo_partidas SET precio_unitario=22693.52, cantidad_presupuesto=20.0 WHERE codigo='OE.9.1.115' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.116 - DETECTOR DE LATIDOS FETALES DE SOBREMESA
  UPDATE catalogo_partidas SET precio_unitario=6678.62, cantidad_presupuesto=15.0 WHERE codigo='OE.9.1.116' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.117 - DETECTOR DE LATIDOS FETALES PORTÁTIL
  UPDATE catalogo_partidas SET precio_unitario=4912.66, cantidad_presupuesto=12.0 WHERE codigo='OE.9.1.117' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.118 - ECÓGRAFO DOPPLER COLOR 3D
  UPDATE catalogo_partidas SET precio_unitario=354390.84, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.118' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.119 - PH METRO DIGITAL
  UPDATE catalogo_partidas SET precio_unitario=359.91, cantidad_presupuesto=2.0 WHERE codigo='OE.9.1.119' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.120 - PLICÓMETRO ESTANDARIZADO
  UPDATE catalogo_partidas SET precio_unitario=318.58, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.120' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.121 - AUTOQUERATOREFRACTÓMETRO
  UPDATE catalogo_partidas SET precio_unitario=41664.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.121' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.122 - ESTATIVA DE TECHO CON UNA COLUMNA
  UPDATE catalogo_partidas SET precio_unitario=110000.0, cantidad_presupuesto=4.0 WHERE codigo='OE.9.1.122' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.123 - ELECTROCARDIÓGRAFO DE 12 CANALES
  UPDATE catalogo_partidas SET precio_unitario=11695.89, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.123' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.124 - SISTEMA HOLTER
  UPDATE catalogo_partidas SET precio_unitario=300000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.124' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.125 - SISTEMA MAPA (MONITOREO DE PRESIÓN AMBULATORIA CONTINUA)
  UPDATE catalogo_partidas SET precio_unitario=100000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.125' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.126 - CABINA DE SEGURIDAD BIOLÓGICA
  UPDATE catalogo_partidas SET precio_unitario=45520.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.126' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.127 - LÁMPARA GERMICIDA RODABLE
  UPDATE catalogo_partidas SET precio_unitario=5000.0, cantidad_presupuesto=4.0 WHERE codigo='OE.9.1.127' AND proyecto_id=v_proyecto_id;
  -- OE.9.1.128 - ANALIZADOR HEMATOLOGICO AUTOMATICO DE 5 DIFERENCIALES
  UPDATE catalogo_partidas SET precio_unitario=116674.4, cantidad_presupuesto=1.0 WHERE codigo='OE.9.1.128' AND proyecto_id=v_proyecto_id;
  -- OE.9.2 - C - EQUIPAMIENTO COMPLEMENTARIO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.9.2' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.1 - COCHE PARA INTUBACION DIFICIL
  UPDATE catalogo_partidas SET precio_unitario=32054.19, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.1' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.2 - ESTETOSCOPIO NEONATAL
  UPDATE catalogo_partidas SET precio_unitario=580.01, cantidad_presupuesto=18.0 WHERE codigo='OE.9.2.2' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.3 - ESTETOSCOPIO ADULTO
  UPDATE catalogo_partidas SET precio_unitario=552.14, cantidad_presupuesto=5.0 WHERE codigo='OE.9.2.3' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.4 - ESTETOSCOPIO ADULTO PEDIÁTRICO
  UPDATE catalogo_partidas SET precio_unitario=552.14, cantidad_presupuesto=52.0 WHERE codigo='OE.9.2.4' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.5 - FRONTOLUZ
  UPDATE catalogo_partidas SET precio_unitario=4300.98, cantidad_presupuesto=3.0 WHERE codigo='OE.9.2.5' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.6 - LARINGOSCOPIO ADULTO - PEDIATRICO
  UPDATE catalogo_partidas SET precio_unitario=3944.94, cantidad_presupuesto=6.0 WHERE codigo='OE.9.2.6' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.7 - LINTERNA PARA EXAMEN CLÍNICO
  UPDATE catalogo_partidas SET precio_unitario=146.07, cantidad_presupuesto=17.0 WHERE codigo='OE.9.2.7' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.8 - MARTILLO DE REFLEJOS
  UPDATE catalogo_partidas SET precio_unitario=296.64, cantidad_presupuesto=8.0 WHERE codigo='OE.9.2.8' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.9 - PANTOSCOPIO
  UPDATE catalogo_partidas SET precio_unitario=8984.22, cantidad_presupuesto=10.0 WHERE codigo='OE.9.2.9' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.10 - PANTOSCOPIO PEDIATRICO
  UPDATE catalogo_partidas SET precio_unitario=6944.51, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.10' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.11 - TENSIÓMETRO ANEROIDE ADULTO
  UPDATE catalogo_partidas SET precio_unitario=500.0, cantidad_presupuesto=0.0 WHERE codigo='OE.9.2.11' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.12 - TENSIÓMETRO ANEROIDE RODABLE ADULTO
  UPDATE catalogo_partidas SET precio_unitario=1576.58, cantidad_presupuesto=0.0 WHERE codigo='OE.9.2.12' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.13 - TENSIÓMETRO ANEROIDE RODABLE PEDIÁTRICO - NEONATAL
  UPDATE catalogo_partidas SET precio_unitario=1453.73, cantidad_presupuesto=0.0 WHERE codigo='OE.9.2.13' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.14 - EQUIPO DE OXIGENOTERAPIA RODABLE
  UPDATE catalogo_partidas SET precio_unitario=22000.0, cantidad_presupuesto=12.0 WHERE codigo='OE.9.2.14' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.15 - MANDIL EMPLOMADO
  UPDATE catalogo_partidas SET precio_unitario=919.58, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.15' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.16 - CANASTILLA (GRADILLA) PARA TRANSPORTE DE MUESTRAS
  UPDATE catalogo_partidas SET precio_unitario=829.55, cantidad_presupuesto=4.0 WHERE codigo='OE.9.2.16' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.17 - MICROINCINERADOR PARA LABORATORIO
  UPDATE catalogo_partidas SET precio_unitario=1100.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.17' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.18 - RELOJ CRON6METRO PARA LABORATORIO
  UPDATE catalogo_partidas SET precio_unitario=688.36, cantidad_presupuesto=4.0 WHERE codigo='OE.9.2.18' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.19 - RELOJ DE LABORATORIO CON ALARMA
  UPDATE catalogo_partidas SET precio_unitario=1518.45, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.19' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.20 - TERMÓMETRO / HIGRÓMETRO DIGITAL
  UPDATE catalogo_partidas SET precio_unitario=797.63, cantidad_presupuesto=10.0 WHERE codigo='OE.9.2.20' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.21 - COLCHONETA 2OO X 8O CM
  UPDATE catalogo_partidas SET precio_unitario=1136.88, cantidad_presupuesto=7.0 WHERE codigo='OE.9.2.21' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.22 - ANDADOR
  UPDATE catalogo_partidas SET precio_unitario=682.4, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.22' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.23 - BARRA PARALELAS PARA ADULTO
  UPDATE catalogo_partidas SET precio_unitario=8464.5, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.23' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.24 - BARRA PARALELAS PARA NIÑOS
  UPDATE catalogo_partidas SET precio_unitario=5161.89, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.24' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.25 - BICICLETA ERGOMETRICA, ADULTO
  UPDATE catalogo_partidas SET precio_unitario=16345.72, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.25' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.26 - BICICLETA ERGOMETRICA, PEDIATRICA
  UPDATE catalogo_partidas SET precio_unitario=19577.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.26' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.27 - CIRCUITO DE PSICOMOTRICIDAD
  UPDATE catalogo_partidas SET precio_unitario=8190.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.27' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.28 - ESCALERA COMBINADA CON RAMPA
  UPDATE catalogo_partidas SET precio_unitario=6090.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.28' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.29 - ESCALERA SUECA
  UPDATE catalogo_partidas SET precio_unitario=2189.14, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.29' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.30 - ESPEJO POSTURAL
  UPDATE catalogo_partidas SET precio_unitario=4290.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.30' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.31 - KIT DE BANDAS ELASTICAS
  UPDATE catalogo_partidas SET precio_unitario=2205.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.31' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.32 - MULETAS
  UPDATE catalogo_partidas SET precio_unitario=2036.08, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.32' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.33 - POLEA CON CONTRAPESAS , SET DE PESAS
  UPDATE catalogo_partidas SET precio_unitario=5729.95, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.33' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.34 - RUEDA DE MARINO CON MANIVELA PARA EJERCICIOS DE HOMBRO
  UPDATE catalogo_partidas SET precio_unitario=3974.04, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.34' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.35 - CAJA DE LUNAS CON MONTURA DE PRUEBAS ADULTO Y PEDIÁTRICO
  UPDATE catalogo_partidas SET precio_unitario=6825.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.35' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.36 - BALANZA DIGITAL NEONATAL
  UPDATE catalogo_partidas SET precio_unitario=3991.22, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.36' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.37 - BALANZA DIGITAL CON TALLIMETRO PEDIATRICA
  UPDATE catalogo_partidas SET precio_unitario=5506.25, cantidad_presupuesto=3.0 WHERE codigo='OE.9.2.37' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.38 - BOLSA PERFUSORA
  UPDATE catalogo_partidas SET precio_unitario=3360.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.38' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.39 - FLUJÓMETRO CON HUMIDIFICADOR PARA LA RED DE OXIGENO
  UPDATE catalogo_partidas SET precio_unitario=1276.01, cantidad_presupuesto=105.0 WHERE codigo='OE.9.2.39' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.40 - MALETÍN DE ATENCIÓN MEDICA
  UPDATE catalogo_partidas SET precio_unitario=9167.0, cantidad_presupuesto=8.0 WHERE codigo='OE.9.2.40' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.41 - MALETIN DE REANIMACIÓN NEONATAL
  UPDATE catalogo_partidas SET precio_unitario=5147.82, cantidad_presupuesto=13.0 WHERE codigo='OE.9.2.41' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.42 - MALETIN DE REANIMACIÓN ADULTO PEDIATRICO
  UPDATE catalogo_partidas SET precio_unitario=5486.25, cantidad_presupuesto=6.0 WHERE codigo='OE.9.2.42' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.43 - RESUCITADOR MANUAL ADULTO
  UPDATE catalogo_partidas SET precio_unitario=996.15, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.43' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.44 - CORTADORA ELECTRICA DE GASAS
  UPDATE catalogo_partidas SET precio_unitario=23751.08, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.44' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.45 - CANASTILLA (GRADILLA) DE COLORACI6N DE 20 LAMINAS
  UPDATE catalogo_partidas SET precio_unitario=787.5, cantidad_presupuesto=3.0 WHERE codigo='OE.9.2.45' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.46 - CONTADOR DE CELULAS
  UPDATE catalogo_partidas SET precio_unitario=6958.24, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.46' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.47 - MICROPIPETA 3 MEDIDAS
  UPDATE catalogo_partidas SET precio_unitario=2398.33, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.47' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.48 - PIPETA AUTOMATICA 10 - 100 UL
  UPDATE catalogo_partidas SET precio_unitario=1098.04, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.48' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.49 - PIPETA AUTOMATICA 200 - 1000 UL
  UPDATE catalogo_partidas SET precio_unitario=1102.93, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.49' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.50 - PIPETA AUTOMATICA 5 - 50 UL
  UPDATE catalogo_partidas SET precio_unitario=1071.11, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.50' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.51 - PIPETA AUTOMATICA 50 - 200 UL
  UPDATE catalogo_partidas SET precio_unitario=1034.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.51' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.52 - GLUCÓMETRO PORTÁTIL
  UPDATE catalogo_partidas SET precio_unitario=791.26, cantidad_presupuesto=13.0 WHERE codigo='OE.9.2.52' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.53 - LÁMPARA DE EXAMEN CLÍNICO
  UPDATE catalogo_partidas SET precio_unitario=3296.53, cantidad_presupuesto=47.0 WHERE codigo='OE.9.2.53' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.54 - COOLER PARA TRANSPORTE DE VACUNAS
  UPDATE catalogo_partidas SET precio_unitario=8925.0, cantidad_presupuesto=10.0 WHERE codigo='OE.9.2.54' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.55 - LAMPARA DE EXAMEN CLINICO - LED, TIPO CUELLO DE GANSO
  UPDATE catalogo_partidas SET precio_unitario=2778.89, cantidad_presupuesto=4.0 WHERE codigo='OE.9.2.55' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.56 - MALETIN DE REANIMACION - ADULTO PEDIATRICO
  UPDATE catalogo_partidas SET precio_unitario=8494.29, cantidad_presupuesto=0.0 WHERE codigo='OE.9.2.56' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.57 - LARINGOSCOPIO ADULTO
  UPDATE catalogo_partidas SET precio_unitario=3392.41, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.57' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.58 - COLLARIN EMPLOMADO
  UPDATE catalogo_partidas SET precio_unitario=392.16, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.58' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.59 - MEDIDOR DE INDICE DE MASA CORPORAL
  UPDATE catalogo_partidas SET precio_unitario=3791.58, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.59' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.60 - ESTIMULADOR FETAL
  UPDATE catalogo_partidas SET precio_unitario=7875.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.2.60' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.61 - BALANZA DIGITAL CON TALLIMETRO ADULTO
  UPDATE catalogo_partidas SET precio_unitario=5099.61, cantidad_presupuesto=21.0 WHERE codigo='OE.9.2.61' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.62 - BALANZA DIGITAL CON TALLIMETRO NEONATAL
  UPDATE catalogo_partidas SET precio_unitario=3229.0, cantidad_presupuesto=7.0 WHERE codigo='OE.9.2.62' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.63 - CINTA MÉTRICA
  UPDATE catalogo_partidas SET precio_unitario=117.28, cantidad_presupuesto=7.0 WHERE codigo='OE.9.2.63' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.64 - PELOTAS PARA EJERCICIOS 3 MEDIDAS
  UPDATE catalogo_partidas SET precio_unitario=566.26, cantidad_presupuesto=5.0 WHERE codigo='OE.9.2.64' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.65 - INFANTÓMETRO
  UPDATE catalogo_partidas SET precio_unitario=1680.0, cantidad_presupuesto=4.0 WHERE codigo='OE.9.2.65' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.66 - TALLIMETRO PEDIÁTRICO
  UPDATE catalogo_partidas SET precio_unitario=1210.95, cantidad_presupuesto=6.0 WHERE codigo='OE.9.2.66' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.67 - GONIÓMETRO
  UPDATE catalogo_partidas SET precio_unitario=1043.33, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.67' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.68 - PODOSCOPIO
  UPDATE catalogo_partidas SET precio_unitario=3675.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.68' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.69 - PLOMADA (REHABILITACION)
  UPDATE catalogo_partidas SET precio_unitario=525.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.69' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.70 - KIT DE ALZAS
  UPDATE catalogo_partidas SET precio_unitario=178.5, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.70' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.71 - EQUIPO DE ELECTROACUPUNTURA
  UPDATE catalogo_partidas SET precio_unitario=11108.33, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.71' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.72 - EQUIPO DE LASER TERAPEUTICO
  UPDATE catalogo_partidas SET precio_unitario=47250.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.72' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.73 - MALETIN DE REANIMACION PEDIATRICO NEONATAL
  UPDATE catalogo_partidas SET precio_unitario=4954.47, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.73' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.74 - BALANZA DIGITAL PARA PESAR ÓRGANOS
  UPDATE catalogo_partidas SET precio_unitario=14175.0, cantidad_presupuesto=6.0 WHERE codigo='OE.9.2.74' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.75 - EQUIPO DE TRACCION CERVICAL
  UPDATE catalogo_partidas SET precio_unitario=36686.23, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.75' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.76 - EQUIPO DE TRACCION CERVICAL / LUMBAR CON CAMILLA
  UPDATE catalogo_partidas SET precio_unitario=39328.75, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.76' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.77 - EQUIPO FAJA ERGOMETRICA
  UPDATE catalogo_partidas SET precio_unitario=139481.42, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.77' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.78 - TERMOFORO
  UPDATE catalogo_partidas SET precio_unitario=6965.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.78' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.79 - LÁMPARA DE EXAMEN CON LUPA 2O D
  UPDATE catalogo_partidas SET precio_unitario=1300.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.79' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.80 - LÁMPARA DE WOOD
  UPDATE catalogo_partidas SET precio_unitario=702.06, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.80' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.81 - LAMPARA DE LUZ HALÓGENA DENTAL
  UPDATE catalogo_partidas SET precio_unitario=3656.49, cantidad_presupuesto=0.0 WHERE codigo='OE.9.2.81' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.82 - ESCALERA PARA DEDOS
  UPDATE catalogo_partidas SET precio_unitario=605.14, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.82' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.83 - TRANSILUMINADOR DE VASOS SANGUINEOS
  UPDATE catalogo_partidas SET precio_unitario=16666.67, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.83' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.84 - BALANZA DIGITAL PORTÁTIL
  UPDATE catalogo_partidas SET precio_unitario=3243.89, cantidad_presupuesto=8.0 WHERE codigo='OE.9.2.84' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.85 - CINTA OBSTÉTRICA CLAP
  UPDATE catalogo_partidas SET precio_unitario=115.93, cantidad_presupuesto=6.0 WHERE codigo='OE.9.2.85' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.86 - CAMARA INTRAORAL
  UPDATE catalogo_partidas SET precio_unitario=11453.88, cantidad_presupuesto=3.0 WHERE codigo='OE.9.2.86' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.87 - TENSIÓMETRO ANEROIDE PEDIÁTRICO - NEONATAL
  UPDATE catalogo_partidas SET precio_unitario=300.0, cantidad_presupuesto=0.0 WHERE codigo='OE.9.2.87' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.88 - LÁMPARA DE HENDIDURA PORTÁTIL
  UPDATE catalogo_partidas SET precio_unitario=56592.9, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.88' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.89 - MONITOR DE OPTOTIPOS LCD
  UPDATE catalogo_partidas SET precio_unitario=22075.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.89' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.90 - REGLA BIOMETRICA
  UPDATE catalogo_partidas SET precio_unitario=48500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.90' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.91 - LAMPARA DE FOTOCURADO
  UPDATE catalogo_partidas SET precio_unitario=3450.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.2.91' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.92 - OFTALMORETINOSCOPIO
  UPDATE catalogo_partidas SET precio_unitario=5554.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.92' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.93 - OFTALMOSCOPIO INDIRECTO
  UPDATE catalogo_partidas SET precio_unitario=18395.63, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.93' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.94 - DERMATOSCOPIO
  UPDATE catalogo_partidas SET precio_unitario=6756.75, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.94' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.95 - DESTRUCTOR DE AGUJAS HIPODÉRMICAS
  UPDATE catalogo_partidas SET precio_unitario=3206.86, cantidad_presupuesto=21.0 WHERE codigo='OE.9.2.95' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.96 - JUEGO DE 03 LAVATORIOS DE 5, 8 Y 12 LITROS
  UPDATE catalogo_partidas SET precio_unitario=508.56, cantidad_presupuesto=4.0 WHERE codigo='OE.9.2.96' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.97 - TERMOMETRO DE LABORATORIO DE -10 A + 100 0°C
  UPDATE catalogo_partidas SET precio_unitario=233.33, cantidad_presupuesto=3.0 WHERE codigo='OE.9.2.97' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.98 - PISTOLA DE AIRE CALIENTE
  UPDATE catalogo_partidas SET precio_unitario=485.09, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.98' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.99 - TERMÓMETRO PARA PORTA VACUNAS
  UPDATE catalogo_partidas SET precio_unitario=367.5, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.99' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.100 - SELLADORA DE BOLSAS
  UPDATE catalogo_partidas SET precio_unitario=44266.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.100' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.101 - BASTONES
  UPDATE catalogo_partidas SET precio_unitario=3759.25, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.101' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.102 - ESTANTES CON JUGUETES Y MATERIAL DIDACTICO DIVERSO PARA NIÑOS 3 AÑOS A MAS
  UPDATE catalogo_partidas SET precio_unitario=3675.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.102' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.103 - PISO MICRO POROSO
  UPDATE catalogo_partidas SET precio_unitario=781.25, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.103' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.104 - CONTENEDOR RODABLE PARA RESIDUOS SOLIDOS (240L)
  UPDATE catalogo_partidas SET precio_unitario=1217.76, cantidad_presupuesto=32.0 WHERE codigo='OE.9.2.104' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.105 - CONTENEDOR RODABLE PARA RESIDUOS SOLIDOS (178L)
  UPDATE catalogo_partidas SET precio_unitario=980.0, cantidad_presupuesto=9.0 WHERE codigo='OE.9.2.105' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.106 - CAJETINES DE ALMACENAMIENTO MULTIPLE PARA DOSIS UNITARIA
  UPDATE catalogo_partidas SET precio_unitario=18632.25, cantidad_presupuesto=4.0 WHERE codigo='OE.9.2.106' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.107 - JUEGO DE MENAJE
  UPDATE catalogo_partidas SET precio_unitario=19035.77, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.107' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.108 - TEST DE DESARROLLO PSICOMOTOR (TEPSI)
  UPDATE catalogo_partidas SET precio_unitario=2340.07, cantidad_presupuesto=3.0 WHERE codigo='OE.9.2.108' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.109 - TEST ABREVIADO PERUANO (TAP)
  UPDATE catalogo_partidas SET precio_unitario=3150.0, cantidad_presupuesto=6.0 WHERE codigo='OE.9.2.109' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.110 - TEST EEDP (ESCALA DE EVALUACIÓN DE DESARROLLO PSICOMOTOR)
  UPDATE catalogo_partidas SET precio_unitario=2379.61, cantidad_presupuesto=3.0 WHERE codigo='OE.9.2.110' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.111 - TEST DE WPPSI (PRE ESCOLAR)
  UPDATE catalogo_partidas SET precio_unitario=1386.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.111' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.112 - TEST DE WISC-R (ESCOLAR)
  UPDATE catalogo_partidas SET precio_unitario=3276.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.112' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.113 - TEST DE WAIS (ADULTOS)
  UPDATE catalogo_partidas SET precio_unitario=2589.99, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.113' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.114 - TEST DE STANFORD BINET
  UPDATE catalogo_partidas SET precio_unitario=3276.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.114' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.115 - GESTO GRAMA
  UPDATE catalogo_partidas SET precio_unitario=665.11, cantidad_presupuesto=2.0 WHERE codigo='OE.9.2.115' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.116 - JUEGOS PARA ESTIMULACIÓN TEMPRANA
  UPDATE catalogo_partidas SET precio_unitario=17694.02, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.116' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.117 - JUEGOS PARA ESTIMULACIÓN SENSORIAL
  UPDATE catalogo_partidas SET precio_unitario=2625.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.117' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.118 - TENSIOMETRO DIGITAL ADULTO
  UPDATE catalogo_partidas SET precio_unitario=500.0, cantidad_presupuesto=5.0 WHERE codigo='OE.9.2.118' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.119 - TENSIOMETRO DIGITAL PEDIÁTRICO NEONATAL
  UPDATE catalogo_partidas SET precio_unitario=500.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.2.119' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.120 - TENSIOMETRO DIGITAL RODABLE PEDIÁTRICO NEONATAL
  UPDATE catalogo_partidas SET precio_unitario=1576.58, cantidad_presupuesto=22.0 WHERE codigo='OE.9.2.120' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.121 - TENSIOMETRO DIGITAL RODABLE ADULTO
  UPDATE catalogo_partidas SET precio_unitario=1576.58, cantidad_presupuesto=47.0 WHERE codigo='OE.9.2.121' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.122 - MALETÍN DE REANIMACIÓN ADULTO PEDIATRICO CON ASPIRADOR
  UPDATE catalogo_partidas SET precio_unitario=8494.29, cantidad_presupuesto=6.0 WHERE codigo='OE.9.2.122' AND proyecto_id=v_proyecto_id;
  -- OE.9.2.123 - BALANZA PEDIATRICA DE MESA DE 0 A 20 KG
  UPDATE catalogo_partidas SET precio_unitario=3229.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.2.123' AND proyecto_id=v_proyecto_id;
  -- OE.9.3 - E - EQUIPAMIENTO ELECTROMECÁNICO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.9.3' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.1 - TANQUE DE COMPRESAS CALIENTES
  UPDATE catalogo_partidas SET precio_unitario=14531.43, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.1' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.2 - TANQUE DE COMPRESAS FRIAS
  UPDATE catalogo_partidas SET precio_unitario=16289.01, cantidad_presupuesto=2.0 WHERE codigo='OE.9.3.2' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.3 - BALANZA DE MESA DE 2O KILOS
  UPDATE catalogo_partidas SET precio_unitario=5431.84, cantidad_presupuesto=2.0 WHERE codigo='OE.9.3.3' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.4 - UNIDAD DE ASPIRACIÓN PARA RED DE VACIO
  UPDATE catalogo_partidas SET precio_unitario=1750.02, cantidad_presupuesto=103.0 WHERE codigo='OE.9.3.4' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.5 - UNIDAD DE TRATAMIENTO DE RESIDUOS HOSPITALARIOS
  UPDATE catalogo_partidas SET precio_unitario=1114473.6, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.5' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.6 - ESTERILIZADOR CON GENERADOR ELECTRICO DE VAPOR (DUAL)DE
100/150 LITROS CON DOBLE PUERTA
  UPDATE catalogo_partidas SET precio_unitario=414487.5, cantidad_presupuesto=0.0 WHERE codigo='OE.9.3.6' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.7 - LAVADORA AUTOMATICA DE CHATAS
  UPDATE catalogo_partidas SET precio_unitario=146230.0, cantidad_presupuesto=4.0 WHERE codigo='OE.9.3.7' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.8 - REFRIGERADORA PARA LABORATORIO (15 A 25 PIES CUBICOS)
  UPDATE catalogo_partidas SET precio_unitario=38641.95, cantidad_presupuesto=3.0 WHERE codigo='OE.9.3.8' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.9 - REFRIGERADORA PARA LABORATORIO DE 14 PIES CUBICOS
  UPDATE catalogo_partidas SET precio_unitario=54447.61, cantidad_presupuesto=6.0 WHERE codigo='OE.9.3.9' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.10 - REFRIGERADORA PARA MEDICAMENTOS
  UPDATE catalogo_partidas SET precio_unitario=48000.0, cantidad_presupuesto=4.0 WHERE codigo='OE.9.3.10' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.11 - CONGELADORA VERTICAL DE -20° C
  UPDATE catalogo_partidas SET precio_unitario=48900.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.3.11' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.12 - TANQUE DE PARAFINA
  UPDATE catalogo_partidas SET precio_unitario=9203.62, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.12' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.13 - CONGELADORA PARA VACUNAS HORIZONTAL
  UPDATE catalogo_partidas SET precio_unitario=47599.39, cantidad_presupuesto=2.0 WHERE codigo='OE.9.3.13' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.14 - TUBO PARA COLGAR CARNE
  UPDATE catalogo_partidas SET precio_unitario=678.21, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.14' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.15 - BALANZA DE PLATAFORMA, FUERZA 100KG
  UPDATE catalogo_partidas SET precio_unitario=4187.26, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.15' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.16 - BALANZA DE PLATAFORMA DIGITAL, FUERZA 100 KG
  UPDATE catalogo_partidas SET precio_unitario=7450.51, cantidad_presupuesto=3.0 WHERE codigo='OE.9.3.16' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.17 - BALANZA DE PLATAFORMA FUERZA 160 KG.
  UPDATE catalogo_partidas SET precio_unitario=4811.22, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.17' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.18 - REFRIGERADORA PARA ALIMENTOS
  UPDATE catalogo_partidas SET precio_unitario=10000.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.3.18' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.19 - EQUIPO COMPACTADOR DE RESIDUOS SOLIDOS
  UPDATE catalogo_partidas SET precio_unitario=179950.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.19' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.20 - REFRIGERADORA DE 14 PIES CUBICOS
  UPDATE catalogo_partidas SET precio_unitario=7954.36, cantidad_presupuesto=8.0 WHERE codigo='OE.9.3.20' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.21 - BIDESTILADOR DE AGUA 4 LITROS/H
  UPDATE catalogo_partidas SET precio_unitario=23114.17, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.21' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.22 - BIDESTILADOR DE AGUA 8 LITROS/H
  UPDATE catalogo_partidas SET precio_unitario=37726.88, cantidad_presupuesto=2.0 WHERE codigo='OE.9.3.22' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.23 - EQUIPO DISPENSADOR DE ALIMENTOS
  UPDATE catalogo_partidas SET precio_unitario=10308.32, cantidad_presupuesto=2.0 WHERE codigo='OE.9.3.23' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.24 - REFRIGERADOR DE 4 P3
  UPDATE catalogo_partidas SET precio_unitario=7686.24, cantidad_presupuesto=3.0 WHERE codigo='OE.9.3.24' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.25 - HORNO ELECTROVAPOR
  UPDATE catalogo_partidas SET precio_unitario=65474.74, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.25' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.26 - HERVIDOR ELECTRICO DE AGUA
  UPDATE catalogo_partidas SET precio_unitario=5628.7, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.26' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.27 - EQUIPO PARA CORTAR TELA
  UPDATE catalogo_partidas SET precio_unitario=2100.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.27' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.28 - CAMARA DE CONSERVACIÓN DE CADAVERES DE 02 CUERPOS
  UPDATE catalogo_partidas SET precio_unitario=44168.34, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.28' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.29 - REFRIGERADORA 15 PIES CUBICOS
  UPDATE catalogo_partidas SET precio_unitario=8700.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.29' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.30 - COCINA A GAS PROPANO DE 6 HORNILLAS Y HORNO
  UPDATE catalogo_partidas SET precio_unitario=20240.15, cantidad_presupuesto=0.0 WHERE codigo='OE.9.3.30' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.31 - LAVADOR DESINFECTOR DE 2 PUERTAS
  UPDATE catalogo_partidas SET precio_unitario=225588.13, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.31' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.32 - LAVADORA CENTRIFUGA AUTOMATICA DE 2 PUERTAS (BARRERA SANITARIA), INDUSTRIAL 25 KG
  UPDATE catalogo_partidas SET precio_unitario=126000.0, cantidad_presupuesto=0.0 WHERE codigo='OE.9.3.32' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.33 - MAQUINA DE COSER, ELECTRICA, INDUSTRIAL
  UPDATE catalogo_partidas SET precio_unitario=7437.89, cantidad_presupuesto=3.0 WHERE codigo='OE.9.3.33' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.34 - PLANCHADOR DE RODILLO A VAPOR DE 50 KG/H (CALANDRIA)
  UPDATE catalogo_partidas SET precio_unitario=41300.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.34' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.35 - PRENSA INDUSTRIAL
  UPDATE catalogo_partidas SET precio_unitario=89228.98, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.35' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.36 - SECADORA DE ROPA
  UPDATE catalogo_partidas SET precio_unitario=79219.32, cantidad_presupuesto=2.0 WHERE codigo='OE.9.3.36' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.37 - MAQUINA LUSTRADORA TIPO INDUSTRIAL CON ESCOBILLA
  UPDATE catalogo_partidas SET precio_unitario=130672.0, cantidad_presupuesto=24.0 WHERE codigo='OE.9.3.37' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.38 - BATIDORA INDUSTRIAL
  UPDATE catalogo_partidas SET precio_unitario=13102.59, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.38' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.39 - COCINA ELECTRICA DE DOS HORNILLAS DE MESA
  UPDATE catalogo_partidas SET precio_unitario=5040.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.3.39' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.40 - EQUIPO CON PISTOLA PARA LAVADO DE COCHES (A VAPOR)
  UPDATE catalogo_partidas SET precio_unitario=8568.36, cantidad_presupuesto=5.0 WHERE codigo='OE.9.3.40' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.41 - EXPRIMIDORES DE JUGOS, SEMI INDUSTRIAL, DE ACERO INOXIDABLE
  UPDATE catalogo_partidas SET precio_unitario=3641.88, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.41' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.42 - GRUPO DE COCCION MARMITAS DE 20/40/60 LITROS
  UPDATE catalogo_partidas SET precio_unitario=41055.02, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.42' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.43 - HORNO MICROONDAS CON PANEL DIGITAL
  UPDATE catalogo_partidas SET precio_unitario=1369.44, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.43' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.44 - LAVADOR AUTOMATICO DE VAJILLAS
  UPDATE catalogo_partidas SET precio_unitario=31963.56, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.44' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.45 - LICUADORA ELECTRICA 2000 CC
  UPDATE catalogo_partidas SET precio_unitario=3090.73, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.45' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.46 - LICUADORA INDUSTRIAL DE 20 LITROS
  UPDATE catalogo_partidas SET precio_unitario=10672.75, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.46' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.47 - MAQUINA ELECTRICA PELADORA DE PAPAS
  UPDATE catalogo_partidas SET precio_unitario=24906.41, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.47' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.48 - MARMITA VOLCABLE DE 50 LITROS MINIMO
  UPDATE catalogo_partidas SET precio_unitario=69782.04, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.48' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.49 - MARMITA VOLCABLE DE 100 LITROS
  UPDATE catalogo_partidas SET precio_unitario=48150.0, cantidad_presupuesto=0.0 WHERE codigo='OE.9.3.49' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.50 - MOLEDORA ELECTRICA DE CARNE
  UPDATE catalogo_partidas SET precio_unitario=9314.65, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.50' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.51 - SIERRA ELECTRICA PARA CORTAR CARNE
  UPDATE catalogo_partidas SET precio_unitario=26428.59, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.51' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.52 - TRONCO PARA CORTAR CARNE
  UPDATE catalogo_partidas SET precio_unitario=440.3, cantidad_presupuesto=0.0 WHERE codigo='OE.9.3.52' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.53 - COCHE TERMICO TRANSPORTADOR DE ALIMENTOS
  UPDATE catalogo_partidas SET precio_unitario=23888.75, cantidad_presupuesto=2.0 WHERE codigo='OE.9.3.53' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.54 - COCINA A GAS PROPANO DE 2 HORNILLAS Y HORNO
  UPDATE catalogo_partidas SET precio_unitario=2300.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.54' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.55 - ESTERILIZADOR CON GENERADOR ELECTRICO DE VAPOR ( DUAL) DE 200/250 LITROS CON DOBLE PUERTA
  UPDATE catalogo_partidas SET precio_unitario=414487.5, cantidad_presupuesto=2.0 WHERE codigo='OE.9.3.55' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.56 - COCINA A GAS PROPANO DE 06 HORNILLAS INDUSTRIAL CON PLANCHA
  UPDATE catalogo_partidas SET precio_unitario=20240.15, cantidad_presupuesto=0.0 WHERE codigo='OE.9.3.56' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.57 - LAVADORA CENTRIFUGA AUTOMÁTICA DE 2 PUERTAS( BARRERA SANITARIA), INDUSTRIAL 40/50KG
  UPDATE catalogo_partidas SET precio_unitario=126000.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.3.57' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.58 - HORNO A GAS
  UPDATE catalogo_partidas SET precio_unitario=87522.67, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.58' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.59 - SARTEN VOLCABLE
  UPDATE catalogo_partidas SET precio_unitario=27053.13, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.59' AND proyecto_id=v_proyecto_id;
  -- OE.9.3.60 - COCINA A GAS DE 4 HORNILLAS
  UPDATE catalogo_partidas SET precio_unitario=15850.29, cantidad_presupuesto=1.0 WHERE codigo='OE.9.3.60' AND proyecto_id=v_proyecto_id;
  -- OE.9.4 - INF - EQUIPAMIENTO INFORMÁTICO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.9.4' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.1 - IMPRESORA LASER EN SECO
  UPDATE catalogo_partidas SET precio_unitario=33265.79, cantidad_presupuesto=1.0 WHERE codigo='OE.9.4.1' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.2 - DATA LOGGER
  UPDATE catalogo_partidas SET precio_unitario=2075.84, cantidad_presupuesto=31.0 WHERE codigo='OE.9.4.2' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.3 - LECTOR DE CÓDIGO DE BARRAS
  UPDATE catalogo_partidas SET precio_unitario=5250.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.4.3' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.4 - EQUIPO DE SECADO DE MANOS CON FILTRO ULPA
  UPDATE catalogo_partidas SET precio_unitario=2800.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.4.4' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.5 - PIZARRA CON PROYECTOR DE TIRO CORTO
  UPDATE catalogo_partidas SET precio_unitario=13174.89, cantidad_presupuesto=0.0 WHERE codigo='OE.9.4.5' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.6 - CAJA FUERTE CON CLAVE TIPO RELOJ
  UPDATE catalogo_partidas SET precio_unitario=2625.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.4.6' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.7 - IMPRESORA LASER MULTIFUNCIONAL
  UPDATE catalogo_partidas SET precio_unitario=9433.78, cantidad_presupuesto=2.0 WHERE codigo='OE.9.4.7' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.8 - TELEVISOR LED SMART TV DE 5O" APROX. INC. RACK
  UPDATE catalogo_partidas SET precio_unitario=3902.2, cantidad_presupuesto=19.0 WHERE codigo='OE.9.4.8' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.9 - IMPRESORA LASER ALTA DEMANDA
  UPDATE catalogo_partidas SET precio_unitario=5427.93, cantidad_presupuesto=3.0 WHERE codigo='OE.9.4.9' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.10 - PROYECTOR MULTIMEDIA CON TARJETA RED INALAMBRICA PARA TECHO CON RACK
  UPDATE catalogo_partidas SET precio_unitario=2413.37, cantidad_presupuesto=2.0 WHERE codigo='OE.9.4.10' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.11 - PROYECTOR INTERACTIVO TACTIL
  UPDATE catalogo_partidas SET precio_unitario=7707.76, cantidad_presupuesto=2.0 WHERE codigo='OE.9.4.11' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.12 - TELEVISOR LED SMART TV DE 32" APROX. INC. RACK
  UPDATE catalogo_partidas SET precio_unitario=1200.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.4.12' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.13 - TELEVISOR LED SMART TV DE 42" APROX. INC. RACK
  UPDATE catalogo_partidas SET precio_unitario=4199.5, cantidad_presupuesto=50.0 WHERE codigo='OE.9.4.13' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.14 - CAJA REGISTRADORA DIGITAL
  UPDATE catalogo_partidas SET precio_unitario=27615.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.4.14' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.15 - COMPUTADORA PERSONAL
  UPDATE catalogo_partidas SET precio_unitario=5334.7, cantidad_presupuesto=0.0 WHERE codigo='OE.9.4.15' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.16 - COMPUTADORA PORTATIL
  UPDATE catalogo_partidas SET precio_unitario=6437.36, cantidad_presupuesto=26.0 WHERE codigo='OE.9.4.16' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.17 - ECRAN DE PARED ENROLLABLE
  UPDATE catalogo_partidas SET precio_unitario=7325.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.4.17' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.18 - EQUIPO DE CÁMARA FOTOGRÁFICA
  UPDATE catalogo_partidas SET precio_unitario=3780.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.4.18' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.19 - IMPRESORA LASER BAJA DEMANDA
  UPDATE catalogo_partidas SET precio_unitario=78690.88, cantidad_presupuesto=14.0 WHERE codigo='OE.9.4.19' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.20 - IMPRESORA MULTIFUNCIONAL
  UPDATE catalogo_partidas SET precio_unitario=3564.4, cantidad_presupuesto=37.0 WHERE codigo='OE.9.4.20' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.21 - EQUIPO DE SONIDO
  UPDATE catalogo_partidas SET precio_unitario=18900.0, cantidad_presupuesto=9.0 WHERE codigo='OE.9.4.21' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.22 - UNIDAD CENTRAL DE PROCESOS CPU
  UPDATE catalogo_partidas SET precio_unitario=5320.0, cantidad_presupuesto=155.0 WHERE codigo='OE.9.4.22' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.23 - MONITOR LED
  UPDATE catalogo_partidas SET precio_unitario=370.0, cantidad_presupuesto=155.0 WHERE codigo='OE.9.4.23' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.24 - SISTEMA DE ALIMENTACIÓN ININTERRUMPIDA UPS - 1KVA
  UPDATE catalogo_partidas SET precio_unitario=345.0, cantidad_presupuesto=155.0 WHERE codigo='OE.9.4.24' AND proyecto_id=v_proyecto_id;
  -- OE.9.4.25 - PIZARRA DIGITAL INTERACTIVA
  UPDATE catalogo_partidas SET precio_unitario=9163.14, cantidad_presupuesto=6.0 WHERE codigo='OE.9.4.25' AND proyecto_id=v_proyecto_id;
  -- OE.9.5 - INST - EQUIPAMIENTO INSTRUMENTAL
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.9.5' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.1 - DIAPASÓN
  UPDATE catalogo_partidas SET precio_unitario=2559.9, cantidad_presupuesto=3.0 WHERE codigo='OE.9.5.1' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.2 - SET DE RIÑONERAS DE ACERO QUIRÚRGICO
  UPDATE catalogo_partidas SET precio_unitario=2500.0, cantidad_presupuesto=47.0 WHERE codigo='OE.9.5.2' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.3 - SET DE TAMBORES DE ACERO QUIRÚRGICO
  UPDATE catalogo_partidas SET precio_unitario=4200.0, cantidad_presupuesto=45.0 WHERE codigo='OE.9.5.3' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.4 - SET DE INSTRUMENTAL PARA RETIRAR PUNTOS
  UPDATE catalogo_partidas SET precio_unitario=5619.0, cantidad_presupuesto=13.0 WHERE codigo='OE.9.5.4' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.5 - SET INSTRUMENTAL DE SUTURAS
  UPDATE catalogo_partidas SET precio_unitario=5518.07, cantidad_presupuesto=19.0 WHERE codigo='OE.9.5.5' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.6 - SET INSTRUMENTAL PARA CURACIONES
  UPDATE catalogo_partidas SET precio_unitario=5771.0, cantidad_presupuesto=25.0 WHERE codigo='OE.9.5.6' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.7 - SET INSTRUMENTAL PARA EXTRACCIÓN DE CUERPO EXTRAÑO
  UPDATE catalogo_partidas SET precio_unitario=10466.2, cantidad_presupuesto=2.0 WHERE codigo='OE.9.5.7' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.8 - SET INSTRUMENTAL PARA PEQUEÑAS INTERVENCIONES QUIRURGICAS
  UPDATE catalogo_partidas SET precio_unitario=6902.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.5.8' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.9 - SET DE TOMA DE MUESTRAS GINECO OBSTÉTRICOS
  UPDATE catalogo_partidas SET precio_unitario=14874.0, cantidad_presupuesto=4.0 WHERE codigo='OE.9.5.9' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.10 - SET INSTRUMENTAL DE INSERCIÓN Y RETIRO DE DIU
  UPDATE catalogo_partidas SET precio_unitario=10065.0, cantidad_presupuesto=4.0 WHERE codigo='OE.9.5.10' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.11 - SET INSTRUMENTAL DE LAPAROTOMIA CESAREA
  UPDATE catalogo_partidas SET precio_unitario=25061.22, cantidad_presupuesto=0.0 WHERE codigo='OE.9.5.11' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.12 - SET DE INSTRUMENTAL PARA SUTURA
  UPDATE catalogo_partidas SET precio_unitario=5518.07, cantidad_presupuesto=6.0 WHERE codigo='OE.9.5.12' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.13 - SET INSTRUMENTAL DE LEGRADO UTERINO
  UPDATE catalogo_partidas SET precio_unitario=3955.99, cantidad_presupuesto=3.0 WHERE codigo='OE.9.5.13' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.14 - SET INSTRUMENTAL DE PARTO
  UPDATE catalogo_partidas SET precio_unitario=6902.0, cantidad_presupuesto=15.0 WHERE codigo='OE.9.5.14' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.15 - SET INSTRUMENTAL PARA EXAMEN GINECOLÓGICO I
  UPDATE catalogo_partidas SET precio_unitario=5863.2, cantidad_presupuesto=11.0 WHERE codigo='OE.9.5.15' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.16 - SET INSTRUMENTAL PARA REVISIÓN DE CUELLO UTERINO
  UPDATE catalogo_partidas SET precio_unitario=6264.14, cantidad_presupuesto=3.0 WHERE codigo='OE.9.5.16' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.17 - SET INSTRUMENTAL DE CIRUGIA DENTAL
  UPDATE catalogo_partidas SET precio_unitario=12892.01, cantidad_presupuesto=2.0 WHERE codigo='OE.9.5.17' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.18 - SET INSTRUMENTAL PARA CURACIÓN DENTAL
  UPDATE catalogo_partidas SET precio_unitario=5742.52, cantidad_presupuesto=3.0 WHERE codigo='OE.9.5.18' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.19 - SET INSTRUMENTAL PARA DIAGNOSTICO ODONTOLÓGICO
  UPDATE catalogo_partidas SET precio_unitario=5603.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.5.19' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.20 - SET INSTRUMENTAL PARA ENDODONCIA
  UPDATE catalogo_partidas SET precio_unitario=9494.39, cantidad_presupuesto=3.0 WHERE codigo='OE.9.5.20' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.21 - SET INSTRUMENTAL PARA EXODONCIA
  UPDATE catalogo_partidas SET precio_unitario=11114.4, cantidad_presupuesto=3.0 WHERE codigo='OE.9.5.21' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.22 - SET INSTRUMENTAL DE CIRUGIA LAPAROSCOPICA
  UPDATE catalogo_partidas SET precio_unitario=51328.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.22' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.23 - SET INSTRUMENTAL DE AMIGDALOTOMIA ADULTO
  UPDATE catalogo_partidas SET precio_unitario=34460.83, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.23' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.24 - SET INSTRUMENTAL DE REDUCCION INCRUENTA DE FRACTURA DE HUESOS NASALES
  UPDATE catalogo_partidas SET precio_unitario=8093.72, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.24' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.25 - SET INSTRUMENTAL DE OSTEOSINTESIS PARA PEQUEÑOS FRAGMENTOS
  UPDATE catalogo_partidas SET precio_unitario=27400.15, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.25' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.26 - SET INSTRUMENTAL DE OSTEOSINTESIS SISTEMA AO PARA TORNILLO
  UPDATE catalogo_partidas SET precio_unitario=25980.37, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.26' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.27 - SET INSTRUMENTAL PARA CATARATA
  UPDATE catalogo_partidas SET precio_unitario=15898.59, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.27' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.28 - SET INSTRUMENTAL PARA DATRIOCISTOCROSTOMIA
  UPDATE catalogo_partidas SET precio_unitario=25599.02, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.28' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.29 - SET INSTRUMENTAL DE CIRUGIA MAYOR
  UPDATE catalogo_partidas SET precio_unitario=54717.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.29' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.30 - SET INSTRUMENTAL PARA CIRUGIA REFRACTIVA
  UPDATE catalogo_partidas SET precio_unitario=15396.75, cantidad_presupuesto=0.0 WHERE codigo='OE.9.5.30' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.31 - SET INSTRUMENTAL PARA VITRECTOMIA
  UPDATE catalogo_partidas SET precio_unitario=36103.25, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.31' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.32 - SET INSTRUMENTAL PARA ENUCLEACION
  UPDATE catalogo_partidas SET precio_unitario=10335.07, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.32' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.33 - SET INSTRUMENTAL PARA ESTRABISMO
  UPDATE catalogo_partidas SET precio_unitario=13826.45, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.33' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.34 - SET INSTRUMENTAL PARA GLAUCOMA
  UPDATE catalogo_partidas SET precio_unitario=9860.96, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.34' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.35 - SET INSTRUMENTAL PARA RETINOPLASTIA
  UPDATE catalogo_partidas SET precio_unitario=17250.96, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.35' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.36 - SET INSTRUMENTAL PARA RETIRO DE PUNTO DE CAMARA ANTERIOR
  UPDATE catalogo_partidas SET precio_unitario=6879.36, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.36' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.37 - SET INSTRUMENTAL PARA POLIPOS NASALES
  UPDATE catalogo_partidas SET precio_unitario=8217.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.37' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.38 - SET INSTRUMENTAL PARA SEPTORRINOPLASTIA
  UPDATE catalogo_partidas SET precio_unitario=11690.73, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.38' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.39 - SET INSTRUMENTAL DE CIRUGIA MENOR
  UPDATE catalogo_partidas SET precio_unitario=14017.13, cantidad_presupuesto=6.0 WHERE codigo='OE.9.5.39' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.40 - SET INSTRUMENTAL PARA TABIQUE NASAL
  UPDATE catalogo_partidas SET precio_unitario=6425.98, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.40' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.41 - PINZA PARA APERTURAR YESO
  UPDATE catalogo_partidas SET precio_unitario=1141.99, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.41' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.42 - SET INSTRUMENTAL PARA EXAMEN GINECOLÓGICO 11
  UPDATE catalogo_partidas SET precio_unitario=3203.5, cantidad_presupuesto=5.0 WHERE codigo='OE.9.5.42' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.43 - SET INSTRUMENTAL PARA CONO LEEP
  UPDATE catalogo_partidas SET precio_unitario=4620.92, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.43' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.44 - SET INSTRUMENTAL PARA PUNCIÓN LUMBAR
  UPDATE catalogo_partidas SET precio_unitario=3958.5, cantidad_presupuesto=7.0 WHERE codigo='OE.9.5.44' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.45 - SET INSTRUMENTAL DE CIRUGIA MENOR DE TRAUMATOLOGIA
  UPDATE catalogo_partidas SET precio_unitario=48390.89, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.45' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.46 - SET DE INSTRUMENTAL OFTALMOLOGICO BASICO
  UPDATE catalogo_partidas SET precio_unitario=6689.33, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.46' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.47 - SET INSTRUMENTAL DE CIRUGIA PEDIATRICA ESCOLAR
  UPDATE catalogo_partidas SET precio_unitario=18834.91, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.47' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.48 - SET INSTRUMENTAL DE DEBRIDACION Y LIMPIEZA QUIRURGICA
  UPDATE catalogo_partidas SET precio_unitario=2271.97, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.48' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.49 - SET INSTRUMENTAL DE PEQUEÑAS INTERVENCIONES QUIRURGICAS
  UPDATE catalogo_partidas SET precio_unitario=8548.0, cantidad_presupuesto=5.0 WHERE codigo='OE.9.5.49' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.50 - SET DE RODILLOS DE ESPUMA PARA GESTANTE
  UPDATE catalogo_partidas SET precio_unitario=653.33, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.50' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.51 - SET INSTRUMENTAL PARA CESAREA
  UPDATE catalogo_partidas SET precio_unitario=15000.0, cantidad_presupuesto=5.0 WHERE codigo='OE.9.5.51' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.52 - SET INSTRUMENTAL PARA LAPAROTOMIA
  UPDATE catalogo_partidas SET precio_unitario=20000.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.5.52' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.53 - SET DE ASPIRACION MANUAL ENDOUTERINA (AMEU)
  UPDATE catalogo_partidas SET precio_unitario=5500.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.5.53' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.54 - SET INSTRUMENTAL DE MORCELADOR UTERINO
  UPDATE catalogo_partidas SET precio_unitario=40000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.54' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.55 - SET INSTRUMENTAL LEGRADO PUERPERAL
  UPDATE catalogo_partidas SET precio_unitario=8000.0, cantidad_presupuesto=5.0 WHERE codigo='OE.9.5.55' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.56 - SET DE INSTRUMENTAL QUIRURGICO PARA PTERIGION
  UPDATE catalogo_partidas SET precio_unitario=5000.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.5.56' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.57 - SET DE INSTRUMENTAL QUIRURGICO PARA CHALAZION
  UPDATE catalogo_partidas SET precio_unitario=5000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.57' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.58 - SET INSTRUMENTAL PARA BLEFAROPLASTIA
  UPDATE catalogo_partidas SET precio_unitario=9985.2, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.58' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.59 - SET DE INSTRUMENTAL PARA CIRUGÍA DE LESIONES DE PARPADO Y REGIÓN PERIOCULAR
  UPDATE catalogo_partidas SET precio_unitario=10000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.59' AND proyecto_id=v_proyecto_id;
  -- OE.9.5.60 - SET DE INSTRUMENTAL PARA CIRUGÍA DE VÍAS LAGRIMALES.
  UPDATE catalogo_partidas SET precio_unitario=9852.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.5.60' AND proyecto_id=v_proyecto_id;
  -- OE.9.6 - MA - MOBILIARIO ADMINISTRATIVO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.9.6' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.1 - TABLA DE PLANCHAR A MANO
  UPDATE catalogo_partidas SET precio_unitario=3419.5, cantidad_presupuesto=1.0 WHERE codigo='OE.9.6.1' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.2 - ARCHIVADOR METÁLICO DE 4 GAVETAS
  UPDATE catalogo_partidas SET precio_unitario=1566.25, cantidad_presupuesto=80.0 WHERE codigo='OE.9.6.2' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.3 - VITRINA METÁLICA PARA ANUNCIOS CON PUERTAS CORREDIZAS DE VIDRIO
  UPDATE catalogo_partidas SET precio_unitario=2297.81, cantidad_presupuesto=19.0 WHERE codigo='OE.9.6.3' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.4 - PAPELERA DE ACERO INOXIDABLE CON TAPA Y VENTANA ABATIBLE ACCIONAMIENTO A PEDAL
  UPDATE catalogo_partidas SET precio_unitario=630.0, cantidad_presupuesto=10.0 WHERE codigo='OE.9.6.4' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.5 - PAPELERA DE ACERO INOXIDABLE DE FORMA CILINDRICA
  UPDATE catalogo_partidas SET precio_unitario=778.75, cantidad_presupuesto=38.0 WHERE codigo='OE.9.6.5' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.6 - VITRINA METALICA PARA LIBROS
  UPDATE catalogo_partidas SET precio_unitario=1939.0, cantidad_presupuesto=14.0 WHERE codigo='OE.9.6.6' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.7 - CARRO PARA UTILES DE LIMPIEZA
  UPDATE catalogo_partidas SET precio_unitario=4565.03, cantidad_presupuesto=24.0 WHERE codigo='OE.9.6.7' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.8 - MESA DE COMEDOR PARA 4 PERSONAS
  UPDATE catalogo_partidas SET precio_unitario=866.77, cantidad_presupuesto=8.0 WHERE codigo='OE.9.6.8' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.9 - ATRIL ROTA FOLIO
  UPDATE catalogo_partidas SET precio_unitario=2463.75, cantidad_presupuesto=7.0 WHERE codigo='OE.9.6.9' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.10 - PAPELERA DE PLASTICO CON TAPA Y VENTANA BATIBLE
  UPDATE catalogo_partidas SET precio_unitario=527.43, cantidad_presupuesto=140.0 WHERE codigo='OE.9.6.10' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.11 - PIZARRA ACRILICA DE 2OO X 1OO CM PARA ADOSAR EN LA PARED
  UPDATE catalogo_partidas SET precio_unitario=2498.75, cantidad_presupuesto=2.0 WHERE codigo='OE.9.6.11' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.12 - PAPELERA METÁLICA DE PISO
  UPDATE catalogo_partidas SET precio_unitario=148.08, cantidad_presupuesto=163.0 WHERE codigo='OE.9.6.12' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.13 - BANCO DE MADERA PARA VESTUARIO
  UPDATE catalogo_partidas SET precio_unitario=103.95, cantidad_presupuesto=20.0 WHERE codigo='OE.9.6.13' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.14 - BANDEJA ACRÍLICA DOBLE PARA ESCRITORIO
  UPDATE catalogo_partidas SET precio_unitario=106.11, cantidad_presupuesto=84.0 WHERE codigo='OE.9.6.14' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.15 - BUTACA METÁLICA DE 3 CUERPOS
  UPDATE catalogo_partidas SET precio_unitario=1240.11, cantidad_presupuesto=51.0 WHERE codigo='OE.9.6.15' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.16 - BUTACA DE 3 CUERPOS CON UN ASIENTO DE 0.80CM
  UPDATE catalogo_partidas SET precio_unitario=800.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.6.16' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.17 - BUTACA DE 4 CUERPOS CON UN ASIENTO DE 0.80CM
  UPDATE catalogo_partidas SET precio_unitario=950.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.6.17' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.18 - BUTACA DE 4 CUERPOS
  UPDATE catalogo_partidas SET precio_unitario=900.0, cantidad_presupuesto=12.0 WHERE codigo='OE.9.6.18' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.19 - ARMARIO METÁLICO DE 2 PUERTAS
  UPDATE catalogo_partidas SET precio_unitario=1506.44, cantidad_presupuesto=23.0 WHERE codigo='OE.9.6.19' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.20 - ESCRITORIO EJECUTIVO
  UPDATE catalogo_partidas SET precio_unitario=1827.84, cantidad_presupuesto=9.0 WHERE codigo='OE.9.6.20' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.21 - ESCRITORIO ESTÁNDAR
  UPDATE catalogo_partidas SET precio_unitario=1770.08, cantidad_presupuesto=138.0 WHERE codigo='OE.9.6.21' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.22 - MESA AUXILIAR PARA OFICINA
  UPDATE catalogo_partidas SET precio_unitario=4777.5, cantidad_presupuesto=11.0 WHERE codigo='OE.9.6.22' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.23 - MESA DE MADERA DE TRABAJO DE 240 X 120 CM.
  UPDATE catalogo_partidas SET precio_unitario=5820.0, cantidad_presupuesto=25.0 WHERE codigo='OE.9.6.23' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.24 - MESA DE MADERA PARA NIÑOS
  UPDATE catalogo_partidas SET precio_unitario=1315.05, cantidad_presupuesto=6.0 WHERE codigo='OE.9.6.24' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.25 - MESA DE REUNIONES DE 9O X 18O CM
  UPDATE catalogo_partidas SET precio_unitario=3676.79, cantidad_presupuesto=6.0 WHERE codigo='OE.9.6.25' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.26 - ARMARIO METÁLICO DE UN CUERPO Y DOS COMPARTIMIENTOS
  UPDATE catalogo_partidas SET precio_unitario=2126.95, cantidad_presupuesto=54.0 WHERE codigo='OE.9.6.26' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.27 - MESA METALICA DE CENTRO
  UPDATE catalogo_partidas SET precio_unitario=4777.5, cantidad_presupuesto=4.0 WHERE codigo='OE.9.6.27' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.28 - MESA METALICA ESQUINERA
  UPDATE catalogo_partidas SET precio_unitario=507.7, cantidad_presupuesto=6.0 WHERE codigo='OE.9.6.28' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.29 - MODULO PARA COMPUTO
  UPDATE catalogo_partidas SET precio_unitario=997.5, cantidad_presupuesto=5.0 WHERE codigo='OE.9.6.29' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.30 - PIZARRA ACRÍLICA DE 15O X 1OO CM PARA ADOSAR EN LA PARED
  UPDATE catalogo_partidas SET precio_unitario=907.22, cantidad_presupuesto=16.0 WHERE codigo='OE.9.6.30' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.31 - SILLA DE MADERA PARA NIÑOS
  UPDATE catalogo_partidas SET precio_unitario=582.69, cantidad_presupuesto=24.0 WHERE codigo='OE.9.6.31' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.32 - SILLA METÁLICA APILABLE
  UPDATE catalogo_partidas SET precio_unitario=282.22, cantidad_presupuesto=418.0 WHERE codigo='OE.9.6.32' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.33 - SILLA METALICA CONFORTABLE GIRATORIA RODABLE
  UPDATE catalogo_partidas SET precio_unitario=769.33, cantidad_presupuesto=34.0 WHERE codigo='OE.9.6.33' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.34 - SILLA METALICA GIRATORIA RODABLE CON BRAZOS
  UPDATE catalogo_partidas SET precio_unitario=769.33, cantidad_presupuesto=8.0 WHERE codigo='OE.9.6.34' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.35 - SILLA METÁLICA GIRATORIA RODABLE
  UPDATE catalogo_partidas SET precio_unitario=608.25, cantidad_presupuesto=156.0 WHERE codigo='OE.9.6.35' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.36 - ARMARIO PARA COLGAR DE MADERA DE 2 DIVISIONES Y PUERTAS CORREDIZAS
  UPDATE catalogo_partidas SET precio_unitario=3634.83, cantidad_presupuesto=2.0 WHERE codigo='OE.9.6.36' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.37 - SILLA METALICA GIRATORIA RODABLE CON ASIENTO ALTO
  UPDATE catalogo_partidas SET precio_unitario=1097.5, cantidad_presupuesto=30.0 WHERE codigo='OE.9.6.37' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.38 - SILLON METALICO SEMICONFORTABLE CON PORTABRAZOS UNIPERSONAL
  UPDATE catalogo_partidas SET precio_unitario=1186.9, cantidad_presupuesto=7.0 WHERE codigo='OE.9.6.38' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.39 - SILLON METALICO SEMICONFORTABLE SIN PORTABRAZOS 2 CUERPOS
  UPDATE catalogo_partidas SET precio_unitario=2110.25, cantidad_presupuesto=1.0 WHERE codigo='OE.9.6.39' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.40 - SILLÓN METALICO SEMICONFORTABLE SIN PORTABRAZOS 3 CUERPOS
  UPDATE catalogo_partidas SET precio_unitario=2140.46, cantidad_presupuesto=19.0 WHERE codigo='OE.9.6.40' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.41 - SILLON METALICO SEMICONFORTABLE SIN PORTABRAZOS UNIPERSONAL
  UPDATE catalogo_partidas SET precio_unitario=907.22, cantidad_presupuesto=3.0 WHERE codigo='OE.9.6.41' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.42 - PARIHUELAS PARA DEPÓSITO
  UPDATE catalogo_partidas SET precio_unitario=937.5, cantidad_presupuesto=51.0 WHERE codigo='OE.9.6.42' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.43 - ESCALERA DE ALUMINIO DE 3 PASOS
  UPDATE catalogo_partidas SET precio_unitario=545.9, cantidad_presupuesto=11.0 WHERE codigo='OE.9.6.43' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.44 - ESTANTERIA METALICA DE ANGULOS RANURADOS DE O1 CUERPO O5 ANAQUELES
  UPDATE catalogo_partidas SET precio_unitario=1850.0, cantidad_presupuesto=48.0 WHERE codigo='OE.9.6.44' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.45 - ESTANTERIA METALICA DE ANGULOS RANURADOS DE O1 CUERPO O5 ANAQUELES O MÁS
  UPDATE catalogo_partidas SET precio_unitario=1200.0, cantidad_presupuesto=4.0 WHERE codigo='OE.9.6.45' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.46 - PERCHA METÁLICA DE PARED CON 4 GANCHOS
  UPDATE catalogo_partidas SET precio_unitario=527.43, cantidad_presupuesto=148.0 WHERE codigo='OE.9.6.46' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.47 - MESA PLEGABLE DE PLASTICO Y ESTRUCTURA DE METAL
  UPDATE catalogo_partidas SET precio_unitario=1800.0, cantidad_presupuesto=0.0 WHERE codigo='OE.9.6.47' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.48 - MESA METALICA DE NOCHE
  UPDATE catalogo_partidas SET precio_unitario=1112.5, cantidad_presupuesto=71.0 WHERE codigo='OE.9.6.48' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.49 - PIZARRA ACRÍLICA DE 165 X 95 CM PARA ADOSAR EN LA PARED
  UPDATE catalogo_partidas SET precio_unitario=907.22, cantidad_presupuesto=3.0 WHERE codigo='OE.9.6.49' AND proyecto_id=v_proyecto_id;
  -- OE.9.6.50 - MESA AUXILIAR
  UPDATE catalogo_partidas SET precio_unitario=1000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.6.50' AND proyecto_id=v_proyecto_id;
  -- OE.9.7 - MC - MOBILIARIO CLÍNICO
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.9.7' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.1 - CHATA DE ACERO INOXIDABLE
  UPDATE catalogo_partidas SET precio_unitario=305.41, cantidad_presupuesto=74.0 WHERE codigo='OE.9.7.1' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.2 - CHATA DE ACERO INOXIDABLE PEDIATRICO
  UPDATE catalogo_partidas SET precio_unitario=216.25, cantidad_presupuesto=3.0 WHERE codigo='OE.9.7.2' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.3 - PAPAGAYO DE ACERO INOXIDABLE
  UPDATE catalogo_partidas SET precio_unitario=217.04, cantidad_presupuesto=25.0 WHERE codigo='OE.9.7.3' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.4 - PAPAGAYO DE ACERO INOXIDABLE PEDIATRICO
  UPDATE catalogo_partidas SET precio_unitario=147.21, cantidad_presupuesto=6.0 WHERE codigo='OE.9.7.4' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.5 - NEGATOSCOPIO DE 2 CAMPOS
  UPDATE catalogo_partidas SET precio_unitario=2909.79, cantidad_presupuesto=48.0 WHERE codigo='OE.9.7.5' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.6 - NEGATOSCOPIO DE 4 CAMPOS
  UPDATE catalogo_partidas SET precio_unitario=5681.7, cantidad_presupuesto=2.0 WHERE codigo='OE.9.7.6' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.7 - MESA PARA MASAJES
  UPDATE catalogo_partidas SET precio_unitario=3471.45, cantidad_presupuesto=1.0 WHERE codigo='OE.9.7.7' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.8 - BALANZA MECANICA CON TALLIMETRO PARA ADULTO
  UPDATE catalogo_partidas SET precio_unitario=1398.0, cantidad_presupuesto=0.0 WHERE codigo='OE.9.7.8' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.9 - MÓDULOS DE PSICOMOTRICIDAD PARA NIÑOS 1 A 3 AÑOS
  UPDATE catalogo_partidas SET precio_unitario=6825.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.7.9' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.10 - MÓDULOS DE PSICOMOTRICIDAD PARA NIÑOS 3 AÑOS A MAS
  UPDATE catalogo_partidas SET precio_unitario=7140.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.7.10' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.11 - MÓDULOS DE PSICOMOTRICIDAD PARA NIÑOS MENORES DE 12 MESES
  UPDATE catalogo_partidas SET precio_unitario=7087.5, cantidad_presupuesto=1.0 WHERE codigo='OE.9.7.11' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.12 - PORTACHATAS Y PAPAGAYOS DE PARED
  UPDATE catalogo_partidas SET precio_unitario=4802.34, cantidad_presupuesto=4.0 WHERE codigo='OE.9.7.12' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.13 - PORTA LAVATORIO DOBLE DE ACERO INOXIDABLE RODABLE CON GABINETES
  UPDATE catalogo_partidas SET precio_unitario=3500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.7.13' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.14 - PORTA LAVATORIO SIMPLE METALICO RODABLE, INCLUYE LAVATORIO DE ACERO INOXIDABLE
  UPDATE catalogo_partidas SET precio_unitario=3523.2, cantidad_presupuesto=2.0 WHERE codigo='OE.9.7.14' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.15 - PORTASUERO METALICO RODABLE
  UPDATE catalogo_partidas SET precio_unitario=744.5, cantidad_presupuesto=101.0 WHERE codigo='OE.9.7.15' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.16 - SILLA DE RUEDAS ESTÁNDAR
  UPDATE catalogo_partidas SET precio_unitario=1174.14, cantidad_presupuesto=7.0 WHERE codigo='OE.9.7.16' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.17 - SILLA DE RUEDAS, PEDIATRICA
  UPDATE catalogo_partidas SET precio_unitario=1147.52, cantidad_presupuesto=6.0 WHERE codigo='OE.9.7.17' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.18 - SILLA ESPECIAL PARA TOMA DE MUESTRAS
  UPDATE catalogo_partidas SET precio_unitario=2658.75, cantidad_presupuesto=1.0 WHERE codigo='OE.9.7.18' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.19 - COCHE PARA TRANSPORTE DE ROPA LIMPIA
  UPDATE catalogo_partidas SET precio_unitario=5001.15, cantidad_presupuesto=8.0 WHERE codigo='OE.9.7.19' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.20 - CARRO PARA EL TRANSPORTE DE DESECHOS
  UPDATE catalogo_partidas SET precio_unitario=6511.6, cantidad_presupuesto=12.0 WHERE codigo='OE.9.7.20' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.21 - CUBO DE ACERO INOXIDABLE PARA DESPERDICIOS CON TAPA ACCIONADA A PEDAL
  UPDATE catalogo_partidas SET precio_unitario=845.36, cantidad_presupuesto=166.0 WHERE codigo='OE.9.7.21' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.22 - PORTA BALDE DE ACERO INOXIDABLE RODABLE CON BALDE DE ACERO INOXIDABLE
  UPDATE catalogo_partidas SET precio_unitario=2470.03, cantidad_presupuesto=36.0 WHERE codigo='OE.9.7.22' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.23 - PORTA LAVATORIO DOBLE METALICO RODABLE INC. LAVATORIO DE ACERO INOXIDABLE
  UPDATE catalogo_partidas SET precio_unitario=1994.85, cantidad_presupuesto=19.0 WHERE codigo='OE.9.7.23' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.24 - PORTABOLSA METALICA RODABLE, CON BOLSA DE LONA
  UPDATE catalogo_partidas SET precio_unitario=986.56, cantidad_presupuesto=7.0 WHERE codigo='OE.9.7.24' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.25 - CARRO PARA EL TRANSPORTE PESADO
  UPDATE catalogo_partidas SET precio_unitario=2150.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.7.25' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.26 - COCHE REPARTIDOR DE ALIMENTOS EN BANDEJAS DE ACERO INOXIDABLE INC. MENAJERÍA
  UPDATE catalogo_partidas SET precio_unitario=17757.5, cantidad_presupuesto=0.0 WHERE codigo='OE.9.7.26' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.27 - MESA RODABLE PARA ALIMENTOS
  UPDATE catalogo_partidas SET precio_unitario=1079.2, cantidad_presupuesto=57.0 WHERE codigo='OE.9.7.27' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.28 - SILLÓN PARA TRATAMIENTO DE OFTALMOLOGIA
  UPDATE catalogo_partidas SET precio_unitario=25453.64, cantidad_presupuesto=1.0 WHERE codigo='OE.9.7.28' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.29 - TABLA DE TRANSPORTE DE POLITRAUMATIZADO
  UPDATE catalogo_partidas SET precio_unitario=600.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.7.29' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.30 - CILINDRO DE PLASTICO CON TAPA VAIVEN
  UPDATE catalogo_partidas SET precio_unitario=377.69, cantidad_presupuesto=5.0 WHERE codigo='OE.9.7.30' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.31 - ARMARIO ACERO INOXIDABLE
  UPDATE catalogo_partidas SET precio_unitario=4201.03, cantidad_presupuesto=3.0 WHERE codigo='OE.9.7.31' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.32 - ESTANTES CON JUGUETES Y MATERIAL DIDÁCTICO DIVERSO PARA ESTIMULACIÓN TEMPRANA
  UPDATE catalogo_partidas SET precio_unitario=8172.15, cantidad_presupuesto=1.0 WHERE codigo='OE.9.7.32' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.33 - CAMILLA PARA TRACCION CERVICAL Y LUMBAR
  UPDATE catalogo_partidas SET precio_unitario=4193.36, cantidad_presupuesto=0.0 WHERE codigo='OE.9.7.33' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.34 - MESA METALICA RODABLE PARA MULTIPLES USOS, 2 TABLEROS CON BARANDAS 65X45X84 CM
  UPDATE catalogo_partidas SET precio_unitario=2693.3, cantidad_presupuesto=1.0 WHERE codigo='OE.9.7.34' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.35 - ESCALINATA METALICA 3 PELDAÑOS
  UPDATE catalogo_partidas SET precio_unitario=537.65, cantidad_presupuesto=1.0 WHERE codigo='OE.9.7.35' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.36 - CAMILLA PARA EL TRANSPORTE DE CADAVERES
  UPDATE catalogo_partidas SET precio_unitario=7495.62, cantidad_presupuesto=1.0 WHERE codigo='OE.9.7.36' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.37 - CAMA CAMILLA MULTIPROPOSITO ELECTRICA TIPO UCI
  UPDATE catalogo_partidas SET precio_unitario=32391.75, cantidad_presupuesto=2.0 WHERE codigo='OE.9.7.37' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.38 - RACK MÓVIL PARA CAJAS E INSTRUMENTAL
  UPDATE catalogo_partidas SET precio_unitario=5498.72, cantidad_presupuesto=2.0 WHERE codigo='OE.9.7.38' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.39 - MUEBLE PARA BAÑO DE ARTESA
  UPDATE catalogo_partidas SET precio_unitario=2500.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.7.39' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.40 - MESA DE USO MÚLTIPLE DE ACERO INOXIDABLE DE 90X45
  UPDATE catalogo_partidas SET precio_unitario=1949.22, cantidad_presupuesto=3.0 WHERE codigo='OE.9.7.40' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.41 - MESA DE ACERO INOXIDABLE CON LAVATORIO
  UPDATE catalogo_partidas SET precio_unitario=3500.0, cantidad_presupuesto=4.0 WHERE codigo='OE.9.7.41' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.42 - MESA DE ACERO INOXIDABLE 1.24x70cm
  UPDATE catalogo_partidas SET precio_unitario=3200.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.7.42' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.43 - MESA DE ACERO INOXIDABLE 1.14x70cm
  UPDATE catalogo_partidas SET precio_unitario=3200.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.7.43' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.44 - ESTANTERÍA PARA HISTORIAS CLÍNICAS
  UPDATE catalogo_partidas SET precio_unitario=1990.63, cantidad_presupuesto=13.0 WHERE codigo='OE.9.7.44' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.45 - ARCHIVADOR METÁLICO DE PLACAS RADIOGRÁFICAS
  UPDATE catalogo_partidas SET precio_unitario=750.0, cantidad_presupuesto=4.0 WHERE codigo='OE.9.7.45' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.46 - TIENDA DE CAMPAÑA MEDICA
  UPDATE catalogo_partidas SET precio_unitario=250000.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.7.46' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.47 - SILLÓN METÁLICO CONFORTABLE RECLINABLE PARA REPOSO
  UPDATE catalogo_partidas SET precio_unitario=2985.0, cantidad_presupuesto=19.0 WHERE codigo='OE.9.7.47' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.48 - TABURETE DE ACERO INOXIDABLE CON ASIENTO GIRATORIO RODABLE
  UPDATE catalogo_partidas SET precio_unitario=907.75, cantidad_presupuesto=27.0 WHERE codigo='OE.9.7.48' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.49 - TABURETE METALICO FIJO CON ASIENTO GIRATORIO
  UPDATE catalogo_partidas SET precio_unitario=698.99, cantidad_presupuesto=33.0 WHERE codigo='OE.9.7.49' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.50 - TABURETE METÁLICO RODABLE CON ASIENTO GIRATORIO
  UPDATE catalogo_partidas SET precio_unitario=986.83, cantidad_presupuesto=17.0 WHERE codigo='OE.9.7.50' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.51 - ARMARIO PARA COLGAR ENDOSCOPIOS
  UPDATE catalogo_partidas SET precio_unitario=1200.0, cantidad_presupuesto=2.0 WHERE codigo='OE.9.7.51' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.52 - VITRINA METÁLICA DE ACERO INOXIDABLE PARA INSTRUMENTOS O MATERIAL ESTÉRIL DE UN CUERPO
  UPDATE catalogo_partidas SET precio_unitario=4228.09, cantidad_presupuesto=27.0 WHERE codigo='OE.9.7.52' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.53 - CARRO PARA EL TRANSPORTE DE MATERIAL ESTERIL
  UPDATE catalogo_partidas SET precio_unitario=12337.5, cantidad_presupuesto=3.0 WHERE codigo='OE.9.7.53' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.54 - ESTANTERIA DE ACERO INOXIDABLE DE 0I CUERPO 03 DIVISIONES
  UPDATE catalogo_partidas SET precio_unitario=3046.07, cantidad_presupuesto=18.0 WHERE codigo='OE.9.7.54' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.55 - ESTANTERIA DE ACERO INOXIDABLE DE O1 CUERPO O5 DIVISIONES
  UPDATE catalogo_partidas SET precio_unitario=5315.0, cantidad_presupuesto=103.0 WHERE codigo='OE.9.7.55' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.56 - ESTANTE VENTILADO 60X1.20 CM
  UPDATE catalogo_partidas SET precio_unitario=2000.0, cantidad_presupuesto=0.0 WHERE codigo='OE.9.7.56' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.57 - ESCALINATA EN ACERO INOXIDABLE PARA SALA DE OPERACIONES
  UPDATE catalogo_partidas SET precio_unitario=699.54, cantidad_presupuesto=4.0 WHERE codigo='OE.9.7.57' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.58 - RACK MOVIL PARA CAJAS E INSTRUMENTAL B
  UPDATE catalogo_partidas SET precio_unitario=18816.25, cantidad_presupuesto=1.0 WHERE codigo='OE.9.7.58' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.59 - RACK MOVIL PARA CESTAS
  UPDATE catalogo_partidas SET precio_unitario=5572.1, cantidad_presupuesto=1.0 WHERE codigo='OE.9.7.59' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.60 - VITRINA DE ACERO INOXIDABLE PARA INSTRUMENTAL Y MATERIAL ESTÉRIL DE DOS CUERPOS
  UPDATE catalogo_partidas SET precio_unitario=5426.45, cantidad_presupuesto=55.0 WHERE codigo='OE.9.7.60' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.61 - CARRO PARA TRANSPORTE DE DOSIS UNITARIA
  UPDATE catalogo_partidas SET precio_unitario=30258.75, cantidad_presupuesto=6.0 WHERE codigo='OE.9.7.61' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.62 - MESA (DIVÁN) PARA EXÁMENES GINECO OBSTÉTRICOS
  UPDATE catalogo_partidas SET precio_unitario=3605.0, cantidad_presupuesto=6.0 WHERE codigo='OE.9.7.62' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.63 - MESA ESPECIAL EN ACERO INOXIDABLE PARA TÓPICO GINECO- OBSTETRICO
  UPDATE catalogo_partidas SET precio_unitario=4483.75, cantidad_presupuesto=1.0 WHERE codigo='OE.9.7.63' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.64 - BIOMBO DE ACERO INOXIDABLE DE 2 CUERPOS
  UPDATE catalogo_partidas SET precio_unitario=1449.1, cantidad_presupuesto=25.0 WHERE codigo='OE.9.7.64' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.65 - CAMA CAMILLA MULTIPROPÓSITO
  UPDATE catalogo_partidas SET precio_unitario=32391.75, cantidad_presupuesto=6.0 WHERE codigo='OE.9.7.65' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.66 - CAMA CLINICA RODABLE PARA ADULTOS
  UPDATE catalogo_partidas SET precio_unitario=7668.96, cantidad_presupuesto=50.0 WHERE codigo='OE.9.7.66' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.67 - CAMA CLINICA RODABLE PARA NIÑOS ESCOLARES
  UPDATE catalogo_partidas SET precio_unitario=6402.06, cantidad_presupuesto=10.0 WHERE codigo='OE.9.7.67' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.68 - CAMA CUNA METALICA RODABLE CON BARANDAS
  UPDATE catalogo_partidas SET precio_unitario=2698.25, cantidad_presupuesto=2.0 WHERE codigo='OE.9.7.68' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.69 - CAMILLA METALICA SOBRE BASTIDOR RODABLE
  UPDATE catalogo_partidas SET precio_unitario=2878.02, cantidad_presupuesto=8.0 WHERE codigo='OE.9.7.69' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.70 - CARRO METALICO FICHERO PARA 20 PORTA HISTORIAS CLINICAS
  UPDATE catalogo_partidas SET precio_unitario=3134.18, cantidad_presupuesto=5.0 WHERE codigo='OE.9.7.70' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.71 - COCHE METALICO DE CURACIONES RODABLE
  UPDATE catalogo_partidas SET precio_unitario=4126.31, cantidad_presupuesto=8.0 WHERE codigo='OE.9.7.71' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.72 - COCHE PARA TRANSPORTE DE ROPA SUCIA
  UPDATE catalogo_partidas SET precio_unitario=6511.6, cantidad_presupuesto=9.0 WHERE codigo='OE.9.7.72' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.73 - CUNA ACRILICA CON BASE METALICA RODABLE
  UPDATE catalogo_partidas SET precio_unitario=2923.97, cantidad_presupuesto=22.0 WHERE codigo='OE.9.7.73' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.74 - ESCALINATA METÁLICA 2 PELDAÑOS
  UPDATE catalogo_partidas SET precio_unitario=688.49, cantidad_presupuesto=136.0 WHERE codigo='OE.9.7.74' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.75 - ESCALINATA METALICA DE I PELDAÑO
  UPDATE catalogo_partidas SET precio_unitario=241.91, cantidad_presupuesto=3.0 WHERE codigo='OE.9.7.75' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.76 - MESA (DIVÁN) PARA EXÁMENES Y CURACIONES
  UPDATE catalogo_partidas SET precio_unitario=2115.32, cantidad_presupuesto=24.0 WHERE codigo='OE.9.7.76' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.77 - CAMA CAMILLA PLEGABLE
  UPDATE catalogo_partidas SET precio_unitario=700.0, cantidad_presupuesto=4.0 WHERE codigo='OE.9.7.77' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.78 - MESA ANGULAR DE ACERO INOXIDABLE PARA INSTRUMENTAL
  UPDATE catalogo_partidas SET precio_unitario=2831.32, cantidad_presupuesto=2.0 WHERE codigo='OE.9.7.78' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.79 - MESA DE ACERO INOXIDABLE TIPO MAYO
  UPDATE catalogo_partidas SET precio_unitario=1585.87, cantidad_presupuesto=8.0 WHERE codigo='OE.9.7.79' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.80 - MESA DE ACERO INOXIDABLE RODABLE PARA MÚLTIPLES USOS
  UPDATE catalogo_partidas SET precio_unitario=2782.24, cantidad_presupuesto=80.0 WHERE codigo='OE.9.7.80' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.81 - MESA DE PARTOS
  UPDATE catalogo_partidas SET precio_unitario=84180.09, cantidad_presupuesto=11.0 WHERE codigo='OE.9.7.81' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.82 - MESA DE TRABAJO DE ACERO INOXIDABLE DE 100 X 200 CM
  UPDATE catalogo_partidas SET precio_unitario=4408.78, cantidad_presupuesto=3.0 WHERE codigo='OE.9.7.82' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.83 - MESA DE TRABAJO DE ACERO INOXIDABLE DE 1.4O X O.7O M
  UPDATE catalogo_partidas SET precio_unitario=3201.98, cantidad_presupuesto=30.0 WHERE codigo='OE.9.7.83' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.84 - MESA ESPECIAL EN ACERO INOXIDABLE PARA TÓPICO
  UPDATE catalogo_partidas SET precio_unitario=6885.21, cantidad_presupuesto=6.0 WHERE codigo='OE.9.7.84' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.85 - MESA METÁLICA PARA EXÁMENES Y CAMBIAR PAÑALES
  UPDATE catalogo_partidas SET precio_unitario=1640.46, cantidad_presupuesto=5.0 WHERE codigo='OE.9.7.85' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.86 - MESA METÁLICA DE USO MÚLTIPLE DE 9O X 45 CM
  UPDATE catalogo_partidas SET precio_unitario=1575.0, cantidad_presupuesto=9.0 WHERE codigo='OE.9.7.86' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.87 - MESA RODABLE DE ACERO INOXIDABLE PARA CURACIONES CON TABLERO
  UPDATE catalogo_partidas SET precio_unitario=2748.03, cantidad_presupuesto=17.0 WHERE codigo='OE.9.7.87' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.88 - MAQUETA DE HIGIENE BUCAL
  UPDATE catalogo_partidas SET precio_unitario=916.82, cantidad_presupuesto=2.0 WHERE codigo='OE.9.7.88' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.89 - MESA PLEGABLE DE PLASTICO Y ESTRUCTURA DE METAL
  UPDATE catalogo_partidas SET precio_unitario=1800.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.7.89' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.90 - CARRO PARA BANDEJAS ISOTERMICAS
  UPDATE catalogo_partidas SET precio_unitario=4000.0, cantidad_presupuesto=3.0 WHERE codigo='OE.9.7.90' AND proyecto_id=v_proyecto_id;
  -- OE.9.7.91 - MESA DE METAL DE ACERO INOXIDABLE DE 100CM
  UPDATE catalogo_partidas SET precio_unitario=2987.76, cantidad_presupuesto=4.0 WHERE codigo='OE.9.7.91' AND proyecto_id=v_proyecto_id;
  -- OE.9.8 - V - TRANSPORTE VEHICULAR
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.9.8' AND proyecto_id=v_proyecto_id;
  -- OE.9.8.1 - AMBULANCIA TIPO I
  UPDATE catalogo_partidas SET precio_unitario=379550.0, cantidad_presupuesto=0.0 WHERE codigo='OE.9.8.1' AND proyecto_id=v_proyecto_id;
  -- OE.9.8.2 - CARRO PARA TRANSPORTE DE PERSONAL, TIPO TODO TERRENO
  UPDATE catalogo_partidas SET precio_unitario=158112.82, cantidad_presupuesto=1.0 WHERE codigo='OE.9.8.2' AND proyecto_id=v_proyecto_id;
  -- OE.9.8.3 - AMBULANCIA URBANA TIPO II
  UPDATE catalogo_partidas SET precio_unitario=466500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.8.3' AND proyecto_id=v_proyecto_id;
  -- OE.9.9 - PRESTACIONES ACCESORIAS
  UPDATE catalogo_partidas SET precio_unitario=0, cantidad_presupuesto=0 WHERE codigo='OE.9.9' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.1 - P.A. ECÓGRAFO DOPPLER COLOR 4D
  UPDATE catalogo_partidas SET precio_unitario=11080.13, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.1' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.2 - P.A. BOMBA DE INFUSION DE 1 CANAL
  UPDATE catalogo_partidas SET precio_unitario=617.5, cantidad_presupuesto=4.0 WHERE codigo='OE.9.9.2' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.3 - P.A. BOMBA DE INFUSION DE 2 CANALES
  UPDATE catalogo_partidas SET precio_unitario=1813.74, cantidad_presupuesto=22.0 WHERE codigo='OE.9.9.3' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.4 - P.A. BOMBA DE INFUSION DE JERINGA
  UPDATE catalogo_partidas SET precio_unitario=557.05, cantidad_presupuesto=2.0 WHERE codigo='OE.9.9.4' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.5 - P.A. COCHE DE PARO EQUIPADO
  UPDATE catalogo_partidas SET precio_unitario=3324.35, cantidad_presupuesto=14.0 WHERE codigo='OE.9.9.5' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.6 - P.A. INCUBADORA DE TRANSPORTE
  UPDATE catalogo_partidas SET precio_unitario=3846.96, cantidad_presupuesto=4.0 WHERE codigo='OE.9.9.6' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.7 - P.A. INCUBADORA ESTANDAR
  UPDATE catalogo_partidas SET precio_unitario=4546.08, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.7' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.8 - P.A. INCUBADORA NEONATAL ABIERTA
  UPDATE catalogo_partidas SET precio_unitario=4547.5, cantidad_presupuesto=4.0 WHERE codigo='OE.9.9.8' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.9 - P.A. MAQUINA DE ANESTESIA CON MONITOREO AVANZADO
  UPDATE catalogo_partidas SET precio_unitario=14527.19, cantidad_presupuesto=2.0 WHERE codigo='OE.9.9.9' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.10 - P.A. VENTILADOR MECANICO ADULTO - PEDIATRICO - NEONATAL
  UPDATE catalogo_partidas SET precio_unitario=8788.02, cantidad_presupuesto=2.0 WHERE codigo='OE.9.9.10' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.11 - P.A. VENTILADOR DE TRANSPORTE
  UPDATE catalogo_partidas SET precio_unitario=4612.4, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.11' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.12 - P.A. MONITOR DE FUNCIONES VITALES DE TRANSPORTE
  UPDATE catalogo_partidas SET precio_unitario=4450.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.12' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.13 - P.A. VENTILADOR MECANICO ADULTO PEDIATRICO
  UPDATE catalogo_partidas SET precio_unitario=8499.2, cantidad_presupuesto=2.0 WHERE codigo='OE.9.9.13' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.14 - P.A. MONITOR DEL ESTADO HIPNOTICO
  UPDATE catalogo_partidas SET precio_unitario=3086.23, cantidad_presupuesto=0.0 WHERE codigo='OE.9.9.14' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.15 - P.A. MONITOR FETAL GEMELAR
  UPDATE catalogo_partidas SET precio_unitario=1558.05, cantidad_presupuesto=15.0 WHERE codigo='OE.9.9.15' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.16 - P.A. MONITOR DE FUNCIONES VITALES DE 5 PARAMETROS
  UPDATE catalogo_partidas SET precio_unitario=8310.36, cantidad_presupuesto=5.0 WHERE codigo='OE.9.9.16' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.17 - P.A. EQUIPO DE RAYOS X ESTACIONARIO DIGITAL
  UPDATE catalogo_partidas SET precio_unitario=60052.47, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.17' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.18 - P.A. EQUIPO DE RAYOS X DENTAL RODABLE DIGITAL
  UPDATE catalogo_partidas SET precio_unitario=4500.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.18' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.19 - P.A. EQUIPO DE RAYOS X RODABLE DIGITAL
  UPDATE catalogo_partidas SET precio_unitario=15586.35, cantidad_presupuesto=2.0 WHERE codigo='OE.9.9.19' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.20 - P.A. ANALIZADOR AUTOMATICO PARA MICROBIOLOGIA
  UPDATE catalogo_partidas SET precio_unitario=13270.42, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.20' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.21 - P.A. ANALIZADOR BIOQUIMICO AUTOMATIZADO
  UPDATE catalogo_partidas SET precio_unitario=10237.5, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.21' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.22 - P.A. ESPECTROFOTOMETRO
  UPDATE catalogo_partidas SET precio_unitario=3256.16, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.22' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.23 - P.A. INCUBADORA DE MICROBIOLOGIA CO2
  UPDATE catalogo_partidas SET precio_unitario=1898.18, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.23' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.24 - P.A. ANALIZADOR HEMATOL6GICO AUTOMATICO DE 03 EXTIRPES
  UPDATE catalogo_partidas SET precio_unitario=5833.72, cantidad_presupuesto=0.0 WHERE codigo='OE.9.9.24' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.25 - P.A. COAGUL6METRO AUTOMATIZADO
  UPDATE catalogo_partidas SET precio_unitario=16275.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.25' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.26 - P.A. MICROSCOPIO QUIRURGICO PARA OFTALMOLOGIA
  UPDATE catalogo_partidas SET precio_unitario=10017.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.26' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.27 - P.A. LÁMPARA QUIRÚRGICA DE TECHO SIMPLE
  UPDATE catalogo_partidas SET precio_unitario=4625.08, cantidad_presupuesto=2.0 WHERE codigo='OE.9.9.27' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.28 - P.A. AGITADOR DE TUBOS
  UPDATE catalogo_partidas SET precio_unitario=735.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.28' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.29 - P.A. CUNA DE CALOR RADIANTE
  UPDATE catalogo_partidas SET precio_unitario=4344.57, cantidad_presupuesto=12.0 WHERE codigo='OE.9.9.29' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.30 - P.A. ANALIZADOR INMUNOLÓGICO
  UPDATE catalogo_partidas SET precio_unitario=12747.26, cantidad_presupuesto=2.0 WHERE codigo='OE.9.9.30' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.31 - P.A. ECOGRAFO PARA EVALUACION MUSCO ESQUELETICO
  UPDATE catalogo_partidas SET precio_unitario=12337.5, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.31' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.32 - P.A. ANALIZADOR AUTOMATICO DE HEMOCULTIVO
  UPDATE catalogo_partidas SET precio_unitario=9424.43, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.32' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.33 - P.A. DESFIBRILADOR EXTERNO AUTOMATICO
  UPDATE catalogo_partidas SET precio_unitario=1228.5, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.33' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.34 - P.A. UNIDAD DENTAL COMPLETA
  UPDATE catalogo_partidas SET precio_unitario=4377.66, cantidad_presupuesto=3.0 WHERE codigo='OE.9.9.34' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.35 - P.A. CAMARA RETINAL NO MIDRIATICA
  UPDATE catalogo_partidas SET precio_unitario=8411.25, cantidad_presupuesto=2.0 WHERE codigo='OE.9.9.35' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.36 - P.A. TONÓMETRO DE AIRE
  UPDATE catalogo_partidas SET precio_unitario=1523.05, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.36' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.37 - P.A. AUTOKERATOREFRACTÓMETRO FIJO
  UPDATE catalogo_partidas SET precio_unitario=2808.33, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.37' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.38 - P.A. FACOEMULSIFICADOR CON VITREOFAGO
  UPDATE catalogo_partidas SET precio_unitario=19758.6, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.38' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.39 - P.A. ANALIZADOR AUTOMATIZADO PARA INMUNOBIOQUIMICA DE ELECTROQUIMIOLUMINISCENCIA
  UPDATE catalogo_partidas SET precio_unitario=23625.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.39' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.40 - P.A. CAMPIMETRO COMPUTARIZADO
  UPDATE catalogo_partidas SET precio_unitario=3985.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.40' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.41 - P.A. ECÓGRAFO OFTALMOLÓGICO
  UPDATE catalogo_partidas SET precio_unitario=5775.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.41' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.42 - P.A. TORRE DE VIDEO CIRUGIA LAPAROSCOPICA
  UPDATE catalogo_partidas SET precio_unitario=29750.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.42' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.43 - P.A. TORRE DE VIDEO CIRUGIA HISTEROSCOPICA
  UPDATE catalogo_partidas SET precio_unitario=37250.0, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.43' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.44 - P.A. MONITOR DE FUNCIONES VITALES DE 6 PARAMETROS (ATENCIÓN AL RECIÉN NACIDO)
  UPDATE catalogo_partidas SET precio_unitario=2346.78, cantidad_presupuesto=15.0 WHERE codigo='OE.9.9.44' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.45 - P.A. VIDEO COLPOSCOPIO
  UPDATE catalogo_partidas SET precio_unitario=2797.1, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.45' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.46 - P.A. VIDEO GASTROSCOPIO
  UPDATE catalogo_partidas SET precio_unitario=39513.33, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.46' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.47 - P.A. ELECTROBISTURI MONOPOLAR I BIPOLAR DIGITAL CON PINZA HEMOSTATICA DE VASOS
  UPDATE catalogo_partidas SET precio_unitario=6142.5, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.47' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.48 - P.A. MESA DE OPERACIONES HIDRAULICA/ELECTRICA
  UPDATE catalogo_partidas SET precio_unitario=8065.18, cantidad_presupuesto=2.0 WHERE codigo='OE.9.9.48' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.49 - P.A. ECÓGRAFO DOPPLER COLOR 3D
  UPDATE catalogo_partidas SET precio_unitario=17719.54, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.49' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.50 - P.A. EQUIPO DE OXIGENOTERAPIA RODABLE
  UPDATE catalogo_partidas SET precio_unitario=1100.0, cantidad_presupuesto=12.0 WHERE codigo='OE.9.9.50' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.51 - P.A. EQUIPO DE LASER TERAPEUTICO
  UPDATE catalogo_partidas SET precio_unitario=2362.5, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.51' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.52 - P.A. UNIDAD DE TRATAMIENTO DE RESIDUOS HOSPITALARIOS
  UPDATE catalogo_partidas SET precio_unitario=55723.68, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.52' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.53 - P.A. ESTERILIZADOR CON GENERADOR ELECTRICO DE VAPOR (DUAL)DE
100/150 LITROS CON DOBLE PUERTA
  UPDATE catalogo_partidas SET precio_unitario=20724.38, cantidad_presupuesto=0.0 WHERE codigo='OE.9.9.53' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.54 - P.A. EQUIPO COMPACTADOR DE RESIDUOS SOLIDOS
  UPDATE catalogo_partidas SET precio_unitario=8997.5, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.54' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.55 - P.A. CAMARA DE CONSERVACIÓN DE CADAVERES DE 02 CUERPOS
  UPDATE catalogo_partidas SET precio_unitario=2208.42, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.55' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.56 - P.A. LAVADOR DESINFECTOR DE 2 PUERTAS
  UPDATE catalogo_partidas SET precio_unitario=11279.41, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.56' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.57 - P.A. LAVADORA CENTRIFUGA AUTOMATICA DE 2 PUERTAS (BARRERA SANITARIA), INDUSTRIAL 25 KG
  UPDATE catalogo_partidas SET precio_unitario=6300.0, cantidad_presupuesto=0.0 WHERE codigo='OE.9.9.57' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.58 - P.A. AMBULANCIA TIPO I
  UPDATE catalogo_partidas SET precio_unitario=18977.5, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.58' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.59 - P.A. CARRO PARA TRANSPORTE DE PERSONAL, TIPO TODO TERRENO
  UPDATE catalogo_partidas SET precio_unitario=7905.64, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.59' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.60 - P.A. ESTERILIZADOR  CON GENERADOR ELECTRICO DE VAPOR (DUAL) DE 200/250 LITROS CON DOBLE PUERTA
  UPDATE catalogo_partidas SET precio_unitario=20724.38, cantidad_presupuesto=2.0 WHERE codigo='OE.9.9.60' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.61 - P.A. LAVADORA CENTRIFUGA AUTOMATICA DE 2 PUERTAS (BARRERA SANITARIA), INDUSTRIAL 40/50 KG
  UPDATE catalogo_partidas SET precio_unitario=17732.22, cantidad_presupuesto=2.0 WHERE codigo='OE.9.9.61' AND proyecto_id=v_proyecto_id;
  -- OE.9.9.62 - P.A. ANALIZADOR HEMATOLOGICO AUTOMATICO DE 5 DIFERENCIALES
  UPDATE catalogo_partidas SET precio_unitario=5833.72, cantidad_presupuesto=1.0 WHERE codigo='OE.9.9.62' AND proyecto_id=v_proyecto_id;
END $$;
COMMIT;
-- Generadas 4508 sentencias UPDATE