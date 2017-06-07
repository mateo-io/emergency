POPUP CON COMENTARIOS
CANCELAR LLAMADA

Data is  Message {
  name: 'notification',
  length: 396,
  processId: 1218,
  channel: 'addedrecord',
  payload: '{"calldate":"2017-06-07 11:16:58","clid":"\\"phonexternal\\" <1001>","identifier":765,"src":"1001","dst":"3116356569","context":"","channel":"SIP/1001-00000024","dstchannel":"SIP/gsmcall-00000025","lastapp":"Dial","lastdata":"SIP/3116356569@gsmcall,40","duration":53,"billsec":53,"disposition":"ANSWERED","amaflags":3,"accountcode":"","uniqueid":"1496852218.54","userfield":""}' }

CALLDATE DEL SERVR
calldate":"2017-06-07 11:16:58"

tiempo despacho - servicio
poner poste manuelmente
caller id asociarlo con NOMBRE .json
comprobar numeros iguales y fusionarlos si ==


>> ponerlos en los filtros

mejorar las consultas mas rangos.
poner comentarios en los filtros



u.....
 | {"id": 0, "open": false, "type": "GRUA", "poste": "003", "origin": "Km 12", "status": "DESPACHADO", "arrived": "2017-05-26T14:45:23.883Z", "comments": ["Esto se guarda en la base de datos"], "duration": 4.169, "callStart": "2017-05-26T20:37:18.968Z", "dispatched": "2017-05-26T13:43:21.269Z"}
  1 | {"id": 1, "open": false, "type": "AMBULANCIA", "poste": "003", "origin": "Km 12", "status": "REABIERTO", "arrived": "2017-05-26T23:28:21.900Z", "comments": ["Esto es un comentario", "Fue reabierto. Hubo incidentes adicionales"], "duration": 141.456, "callStart": "2017-05-26T20:40:50.113Z", "dispatched": "2017-05-26T20:41:15.647Z"}
  2 | {"id": 2, "open": false, "type": "AMBULANCIA", "poste": "003", "origin": "Km 12", "status": "REABIERTO", "arrived": "2017-05-26T05:05:06.783Z", "comments": ["Fue en el mismo dia"], "duration": 118.956, "callStart": "2017-05-26T20:55:04.378Z", "dispatched": "2017-05-27T04:31:05.369Z"}
  3 | {"id": 3, "open": false, "type": "POLICIA", "poste": "003", "origin": "Km 12", "status": "REABIERTO", "arrived": "2017-05-26T13:41:32.764Z", "comments": ["Reabri. Cierro"], "duration": 184.382, "callStart": "2017-05-26T21:15:29.809Z", "dispatched": "2017-05-26T13:37:30.944Z"}
  4 | {"id": 4, "open": false, "type": "AMBULANCIA", "poste": "gsmcall", "origin": "Km 12", "status": "REABIERTO", "arrived": "2017-05-26T12:44:13.410Z", "comments": ["Una ambulancia", "Urgente"], "duration": 10.318, "uniqueid": "1495834863.92", "callStart": "2017-05-26T21:41:04.554Z", "dispatched": "2017-05-26T11:32:09.993Z", "callDuration": 25}
  5 | {"id": 5, "open": false, "type": "GRUA", "poste": "gsmcall", "origin": "Km 12", "status": "DESPACHADO", "arrived": "2017-05-27T01:44:56.998Z", "callerId": "\"3113679814\" <gsmcall>", "comments": ["Cuentame", "Callerid sale bien"], "duration": 7.488, "uniqueid": "1495835379.95", "callStart": "2017-05-26T21:49:51.372Z", "dispatched": "2017-05-27T00:36:53.007Z", "callDuration": 31}
  6 | {"id": 6, "open": false, "type": "POLICIA", "poste": "gsmcall", "origin": "Km 12", "status": "DESPACHADO", "arrived": "2017-05-26T05:03:57.571Z", "callerId": "\"3113679814\" <gsmcall>", "comments": ["Es el mismo dia", "Policia"], "duration": 69.922, "uniqueid": "1495835740.98",

fecha hora - poste - duracion llamada - inicio servicio - fin servicio - reproducir


A

#TCP CONNECITON


tcpdump -l -nS dst port 5060 | sh script.sh >> calls.log

tcpdump -l -nS dst port 5060 >> call.log
tail -f -fn+1 call.log | bash script.sh






#POSTGRES

##CALLS SCHEMA

CREATE TABLE calls(
  id integer NOT NULL,
  data jsonb
);


##List functions


\df

CREATE TABLE cdr(
    id SERIAL NOT NULL PRIMARY KEY,
    duration character varying(128),
    channel character varying(128),
    uniqueid character varying(128),
    disposition character varying(128),
    calldate character varying(128),
    clid character varying(128),
    src character varying(128),
    dst character varying(128)
);


##DROP FUNCTION


DROP FUNCTION notify_realtime();


##ALL FIELDS
create function notify_realtime() returns trigger
    language plpgsql
    as $$
begin
    perform pg_notify('addedrecord', row_to_json(NEW)::text);
    return null;
end;
$$;


##UNIQUEID AND DURATION
create function notify_realtime() returns trigger
    language plpgsql
    as $$
begin
    perform pg_notify('addedrecord',
    NEW.uniqueid, NEW.duration);
    return null;
end;
$$;


##TRIGGER
CREATE TRIGGER updated_realtime_trigger AFTER INSERT ON cdr
FOR EACH ROW EXECUTE PROCEDURE notify_realtime();




INSERT INTO cdr (duration, uniqueid) VALUES (23,'1494962212.27');




#LOGS & RANDOM INFO


20170508-09051494254699-0003.wav
20170508-14051494271963-0003.wav
20170509-09051494340409-0003.wav
20170509-14051494359252-0003.wav
20170509-14051494359296-0003.wav
20170515-16051494885503-0003.wav
20170515-17051494885652-0003.wav
20170515-17051494885817-0003.wav
20170515-17051494885963-0003.wav
20170515-17051494886051-0003.wav
20170515-17051494886131-0003.wav
20170515-17051494886202-0003.wav
20170515-17051494886282-0003.wav
20170515-17051494886361-0003.wav
20170515-17051494886426-0003.wav
20170515-17051494886609-0003.wav
20170515-17051494886673-0003.wav
20170515-17051494886760-0003.wav
20170515-17051494886843-0003.wav
20170516-14051494961629-0003.wav
20170517-11051495038212-0003.wav



duration
channel
uniqueid
disposition
calldate
clid
src
dst



  Columna   |          Tipo          |                           Modificadores                            | Almacenamiento | Estadísticas | Descripción
-------------+------------------------+--------------------------------------------------------------------+----------------+--------------+-------------
 calldate    | character varying(80)  | not null                                                           | extended       |              |
 clid        | character varying(80)  | not null                                                           | extended       |              |
 identifier  | integer                | not null valor por omisión nextval('cdr_identifier_seq'::regclass) | plain          |              |
 src         | character varying(80)  | not null                                                           | extended       |              |
 dst         | character varying(80)  | not null                                                           | extended       |              |
 context     | character varying(80)  | not null                                                           | extended       |              |
 channel     | character varying(80)  | not null                                                           | extended       |              |
 dstchannel  | character varying(80)  | not null                                                           | extended       |              |
 lastapp     | character varying(80)  | not null                                                           | extended       |              |
 lastdata    | character varying(80)  | not null                                                           | extended       |              |
 duration    | bigint                 | not null                                                           | plain          |              |
 billsec     | bigint                 | not null                                                           | plain          |              |
 disposition | character varying(45)  | not null                                                           | extended       |              |
 amaflags    | bigint                 | not null                                                           | plain          |              |
 accountcode | character varying(20)  | not null                                                           | extended       |              |
 uniqueid    | character varying(32)  | not null                                                           | extended       |              |
 userfield   | character varying(255) | not null                                                           | extended       |              |
Índices:
    "pk_cdr" PRIMARY KEY, btree (identifier)




 duration |      channel      |   uniqueid    | disposition |      calldate       |       clid        | src  | dst  
----------+-------------------+---------------+-------------+---------------------+-------------------+------+------
      402 | SIP/0003-00000010 | 1494961629.24 | ANSWERED    | 2017-05-16 14:07:09 | "telefono" <0003> | 0003 | 0002
       29 | SIP/0003-00000012 | 1494962049.27 | ANSWERED    | 2017-05-16 14:14:09 | "telefono" <0003> | 0003 | 0002
       31 | SIP/0003-00000000 | 1495038212.0  | ANSWERED    | 2017-05-17 11:23:32 | "telefono" <0003> | 0003 | 0002
(3 filas)
