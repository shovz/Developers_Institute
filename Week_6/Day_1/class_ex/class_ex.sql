-- SELECT * FROM public.city_info;

-- SELECT temperature FROM public.city_info WHERE city ='Boston'  AND event_datetime='2015-03-01 11:00:00';


-- SELECT * FROM public.city_info  WHERE city ='San Francisco'  AND temperature>=28 AND temperature<=30;

-- SELECT event_datetime,city,sound FROM public.city_info  order by sound DESC LIMIT 1;

-- SELECT event_datetime,city,sound FROM public.city_info  order by sound ASC LIMIT 1;

-- SELECT dust FROM public.city_info  WHERE city ='San Francisco'   AND event_datetime>='2015-03-26 20:00:00';

-- SELECT * FROM public.city_info  WHERE city ='Geneva' AND (humidity <=40 OR humidity >=60);

-- SELECT EXTRACT (DOW FROM event_datetime) as dow FROM public.city_info  ORDER BY light DESC LIMIT 1;

SELECT * FROM public.city_info  WHERE city ILIKE 'S%';