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



