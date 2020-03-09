
var documents = [{
    "id": 0,
    "url": "https://cambrian-intelligence.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://cambrian-intelligence.github.io/about/",
    "title": "Sobre esta herramienta",
    "body": "Dashboard creado por Cambrian Intelligence SL. Puedes consultar y descargar el código fuente de este Dashboard en github. Los datos nacionales empleados por este Dashboard están recopilados en la siguiente hoja de cálculo, los cuales actualizamos en base a la recopilación diaria publicada por el diario El Mundo: https://docs. google. com/spreadsheets/d/1FwOXbkWeuS1LHrKxhSfepGtsgQ6iIEQZmWig_JKo8z0/edit#gid=0 Los datos internacionales empleados por este Dashboard están recopilados en la siguiente hoja de cálculo: https://docs. google. com/spreadsheets/d/1Z7VQ5xlf3BaTx_LBBblsW4hLoGYWnZyog3jqsS9Dbgc/edit#gid=648547189 "
    }, {
    "id": 2,
    "url": "https://cambrian-intelligence.github.io/",
    "title": "Inicio",
    "body": "Dashboard de seguimiento del COVID-19 en España"
    }, {
    "id": 3,
    "url": "https://cambrian-intelligence.github.io/images/copied_from_nb/",
    "title": "",
    "body": "WarningDo not manually save images into this folder. This is used by GitHub Actions to automatically copy images.  Any images you save into this folder could be deleted at build time. "
    }, {
    "id": 4,
    "url": "https://cambrian-intelligence.github.io/2020/02/29/confirmados_graficos.html",
    "title": "Casos confirmados - gráficos",
    "body": "2020/02/29 -           Última actualización 07/03/2020 - 00:22 Los datos serán actualizados cada noche, refresca el navegador si ves gráficas desactualizadas. Total&#182;:              #collapseimport requestsimport pandas as pdfrom io import BytesIOimport numpy as npimport altair as alt# get dataresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1FwOXbkWeuS1LHrKxhSfepGtsgQ6iIEQZmWig_JKo8z0&amp;output=csv&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data), parse_dates=[&#39;Fecha&#39;], dayfirst=True)# Create a selection that chooses the nearest point &amp; selects based on x-valuesource = dfnearest = alt. selection(type=&#39;single&#39;, nearest=True, on=&#39;mouseover&#39;,            fields=[&#39;Total confirmados&#39;], empty=&#39;none&#39;)# The basic lineline = alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  x=&#39;monthdate(Fecha):O&#39;,  y=&#39;Total confirmados:Q&#39;,)# Transparent selectors across the chart. This is what tells us# the x-value of the cursorselectors = alt. Chart(source). mark_point(). encode(  x=&#39;monthdate(Fecha):O&#39;,  opacity=alt. value(0),). add_selection(  nearest)# Draw points on the line, and highlight based on selectionpoints = line. mark_point(). encode(  opacity=alt. condition(nearest, alt. value(1), alt. value(0)))# Draw text labels near the points, and highlight based on selectiontext = line. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(  text=alt. condition(nearest, &#39;Total confirmados:Q&#39;, alt. value(&#39; &#39;)))# Draw a rule at the location of the selectionrules = alt. Chart(source). mark_rule(color=&#39;gray&#39;). encode(  x=&#39;monthdate(Fecha):O&#39;,). transform_filter(  nearest)# Put the five layers into a chart and bind the dataalt. layer(  line, selectors, points, rules, text). properties(  width=800, height=400). configure(  padding=10)       Por comunidad aut&#243;noma&#182;: Haz click en la leyenda para activar una única línea.              #collapseimport requestsimport pandas as pdfrom io import BytesIOimport numpy as npimport altair as alt# data downloadresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1FwOXbkWeuS1LHrKxhSfepGtsgQ6iIEQZmWig_JKo8z0&amp;output=csv&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data), parse_dates=[&#39;Fecha&#39;], dayfirst=True)# plotcols = list(df. columns)cols. remove(&#39;Total confirmados&#39;)cols. remove(&#39;Fecha&#39;)df = df. set_index(&#39;Fecha&#39;)[cols]source = df. reset_index(). melt(&#39;Fecha&#39;, var_name=&#39;category&#39;, value_name=&#39;Confirmados&#39;)selection = alt. selection_multi(fields=[&#39;category&#39;], bind=&#39;legend&#39;)line = alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  alt. X(&#39;monthdate(Fecha):O&#39;, axis=alt. Axis(tickRound=True), title=&#39;Número de días&#39;),  alt. Y(&#39;Confirmados:Q&#39;),  alt. Color(&#39;category:N&#39;),  opacity=alt. condition(selection, alt. value(1), alt. value(0. 2)))nearest = alt. selection(type=&#39;single&#39;, nearest=True, on=&#39;mouseover&#39;,            fields=[&#39;Fecha&#39;], empty=&#39;none&#39;)# Transparent selectors across the chart. This is what tells us# the x-value of the cursorselectors = alt. Chart(source). mark_point(). encode(  x=&#39;monthdate(Fecha):O&#39;,  opacity=alt. value(0),). add_selection(  nearest)# Draw points on the line, and highlight based on selectionpoints = line. mark_point(). encode(  opacity=alt. condition(nearest, alt. value(1), alt. value(0)))# Draw text labels near the points, and highlight based on selectiontext = line. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(  text=alt. condition(nearest, &#39;Confirmados:Q&#39;, alt. value(&#39; &#39;)))line = line. add_selection(  selection)# Draw a rule at the location of the selectionrules = alt. Chart(source). mark_rule(color=&#39;gray&#39;). encode(  x=&#39;monthdate(Fecha):O&#39;,). transform_filter(  nearest)# Put the five layers into a chart and bind the dataalt. layer(  line, selectors, points, rules, text). properties(  width=800, height=400). configure(  padding=10)       Comparaci&#243;n con otros pa&#237;ses (actualizado a 03/02/2020)&#182;: Haz click en la leyenda para activar una única línea. Datos tomados de fuentes externas. Ver sección  Sobre esta herramienta  para más información.              # collapse# get dataresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1Z7VQ5xlf3BaTx_LBBblsW4hLoGYWnZyog3jqsS9Dbgc&amp;output=csv&amp;gid=0&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data))df = df[df. columns[2:]][1:65]. T. reset_index(drop=True)col_names = df. iloc[0]col_names[1] = &#39;Fecha&#39;df. columns = col_namesdf = df. drop(df. index[0])df[&#39;Fecha&#39;] = pd. to_datetime(df[&#39;Fecha&#39;], utc=True)df = df. set_index(&#39;Fecha&#39;)df = df. applymap(lambda a: str(a). replace(&#39;,&#39;,&#39;&#39;))df = df. apply(pd. to_numeric, errors=&#39;coerce&#39;)# plot# color schemedef my_theme():  return {    &#39;config&#39;: {      &#39;range&#39;: {&#39;category&#39;: {&#39;scheme&#39;: &#39;category10&#39;}}    }  }# Register and enable. alt. themes. register(&#39;my_theme&#39;, my_theme)alt. themes. enable(&#39;my_theme&#39;)keep = [&#39;Spain&#39;, &#39;Italy&#39;, &#39;South Korea&#39;, &#39;Iran&#39;, &#39;Japan&#39;, &#39;France&#39;, &#39;Singapore&#39;, &#39;Germany&#39;]df = df[keep]# the last day is dicarded until the day is (almost) overplus_all = 51df = df[0:plus_all]source = df. reset_index(). melt(&#39;Fecha&#39;, var_name=&#39;category&#39;, value_name=&#39;Confirmados&#39;)selection = alt. selection_multi(fields=[&#39;category&#39;], bind=&#39;legend&#39;)line = alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  alt. X(&#39;monthdate(Fecha):O&#39;, axis=alt. Axis(tickRound=True), title=&#39;Número de días&#39;),  alt. Y(&#39;Confirmados:Q&#39;),  alt. Color(&#39;category:N&#39;),  opacity=alt. condition(selection, alt. value(1), alt. value(0. 2)))nearest = alt. selection(type=&#39;single&#39;, nearest=True, on=&#39;mouseover&#39;,            fields=[&#39;Fecha&#39;], empty=&#39;none&#39;)# Transparent selectors across the chart. This is what tells us# the x-value of the cursorselectors = alt. Chart(source). mark_point(). encode(  x=&#39;monthdate(Fecha):O&#39;,  opacity=alt. value(0),). add_selection(  nearest)# Draw points on the line, and highlight based on selectionpoints = line. mark_point(). encode(  opacity=alt. condition(nearest, alt. value(1), alt. value(0)))# Draw text labels near the points, and highlight based on selectiontext = line. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(  text=alt. condition(nearest, &#39;Confirmados:Q&#39;, alt. value(&#39; &#39;)))line = line. add_selection(  selection)# Draw a rule at the location of the selectionrules = alt. Chart(source). mark_rule(color=&#39;gray&#39;). encode(  x=&#39;monthdate(Fecha):O&#39;,). transform_filter(  nearest)# Put the five layers into a chart and bind the dataalt. layer(  line, selectors, points, rules, text). properties(  width=800, height=400). configure(  padding=10)       Comparaci&#243;n con otros pa&#237;ses alineando las curvas temporalmente&#182;: Tomamos como inicio de las curvas aproximadamente el último día que hay 3 casos. Datos tomados de fuentes externas. Ver sección  Sobre esta herramienta  para más información. Haz click en la leyenda para activar una única línea. 20 primeros d&#237;as&#182;:              # collapse# get dataresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1Z7VQ5xlf3BaTx_LBBblsW4hLoGYWnZyog3jqsS9Dbgc&amp;output=csv&amp;gid=0&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data))df = df[df. columns[2:]][1:65]. T. reset_index(drop=True)col_names = df. iloc[0]col_names[1] = &#39;Fecha&#39;df. columns = col_namesdf = df. drop(df. index[0])df[&#39;Fecha&#39;] = pd. to_datetime(df[&#39;Fecha&#39;], utc=True)df = df. set_index(&#39;Fecha&#39;)df = df. applymap(lambda a: str(a). replace(&#39;,&#39;,&#39;&#39;))df = df. apply(pd. to_numeric, errors=&#39;coerce&#39;)keep = [&#39;Spain&#39;, &#39;Italy&#39;, &#39;South Korea&#39;, &#39;Iran&#39;, &#39;Japan&#39;, &#39;France&#39;, &#39;Singapore&#39;, &#39;Germany&#39;]df = df[keep]# align dataaligned_data = {}daily_delta = 3plus_days = 20plus_spain = 6 + daily_deltaplus_iran = 11 + daily_deltaplus_italy = 11 + daily_deltaplus_s_korea = 20aligned_data[&#39;Spain&#39;] = np. array(df[&#39;Spain&#39;][42:42+plus_spain])aligned_data[&#39;Italy&#39;] = np. array(df[&#39;Italy&#39;][37:37+plus_italy])aligned_data[&#39;South Korea&#39;] = np. array(df[&#39;South Korea&#39;][16:16+plus_s_korea])aligned_data[&#39;Iran&#39;] = np. array(df[&#39;Iran&#39;][37:37+plus_iran])aligned_data[&#39;Japan&#39;] = np. array(df[&#39;Japan&#39;][14:14+plus_days])aligned_data[&#39;France&#39;] = np. array(df[&#39;France&#39;][14:14+plus_days])aligned_data[&#39;Singapore&#39;] = np. array(df[&#39;Singapore&#39;][12:12+plus_days])aligned_data[&#39;Germany&#39;] = np. array(df[&#39;Germany&#39;][16:16+plus_days])df_aligned = pd. DataFrame(dict([(k,pd. Series(v)) for k,v in aligned_data. items() ]))df = df_aligneddf              Spain   Italy   South Korea   Iran   Japan   France   Singapore   Germany         0   3. 0   3. 0   4. 0   2. 0   3. 0   3. 0   4. 0   4. 0       1   7. 0   3. 0   6. 0   5. 0   7. 0   4. 0   4. 0   5. 0       2   13. 0   20. 0   11. 0   18. 0   11. 0   5. 0   5. 0   7. 0       3   27. 0   79. 0   12. 0   28. 0   14. 0   6. 0   7. 0   8. 0       4   42. 0   152. 0   15. 0   43. 0   17. 0   6. 0   10. 0   10. 0       5   65. 0   228. 0   15. 0   61. 0   20. 0   6. 0   13. 0   12. 0       6   83. 0   323. 0   16. 0   95. 0   20. 0   6. 0   16. 0   12. 0       7   124. 0   466. 0   23. 0   139. 0   20. 0   6. 0   18. 0   12. 0       8   168. 0   650. 0   23. 0   245. 0   23. 0   6. 0   18. 0   13. 0       9   NaN   888. 0   24. 0   388. 0   25. 0   6. 0   18. 0   14. 0       10   NaN   1108. 0   24. 0   593. 0   25. 0   6. 0   24. 0   14. 0       11   NaN   1689. 0   27. 0   978. 0   25. 0   6. 0   28. 0   14. 0       12   NaN   2036. 0   27. 0   1501. 0   26. 0   11. 0   30. 0   14. 0       13   NaN   2502. 0   28. 0   2336. 0   31. 0   11. 0   33. 0   16. 0       14   NaN   NaN   28. 0   NaN   34. 0   11. 0   40. 0   16. 0       15   NaN   NaN   28. 0   NaN   36. 0   11. 0   43. 0   16. 0       16   NaN   NaN   28. 0   NaN   36. 0   11. 0   45. 0   16. 0       17   NaN   NaN   28. 0   NaN   40. 0   11. 0   47. 0   16. 0       18   NaN   NaN   29. 0   NaN   47. 0   11. 0   50. 0   16. 0       19   NaN   NaN   30. 0   NaN   59. 0   12. 0   58. 0   16. 0                  # collapse# plot# color schemedef my_theme():  return {    &#39;config&#39;: {      &#39;range&#39;: {&#39;category&#39;: {&#39;scheme&#39;: &#39;category10&#39;}}    }  }# Register and enable. alt. themes. register(&#39;my_theme&#39;, my_theme)alt. themes. enable(&#39;my_theme&#39;)source = df. reset_index(). melt(&#39;index&#39;, var_name=&#39;category&#39;, value_name=&#39;Confirmados&#39;)source. index = list(source. index)source. index = source. index. astype(int)selection = alt. selection_multi(fields=[&#39;category&#39;], bind=&#39;legend&#39;)line = alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  alt. X(&#39;index:Q&#39;, axis=alt. Axis(tickRound=True), title=&#39;Número de días&#39;),  alt. Y(&#39;Confirmados:Q&#39;),  alt. Color(&#39;category:N&#39;),  opacity=alt. condition(selection, alt. value(1), alt. value(0. 2)))nearest = alt. selection(type=&#39;single&#39;, nearest=True, on=&#39;mouseover&#39;,            fields=[&#39;index&#39;], empty=&#39;none&#39;)# Transparent selectors across the chart. This is what tells us# the x-value of the cursorselectors = alt. Chart(source). mark_point(). encode(  x=&#39;index:Q&#39;,  opacity=alt. value(0),). add_selection(  nearest)# Draw points on the line, and highlight based on selectionpoints = line. mark_point(). encode(  opacity=alt. condition(nearest, alt. value(1), alt. value(0)))# Draw text labels near the points, and highlight based on selectiontext = line. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(  text=alt. condition(nearest, &#39;Confirmados:Q&#39;, alt. value(&#39; &#39;)))line = line. add_selection(  selection)# Draw a rule at the location of the selectionrules = alt. Chart(source). mark_rule(color=&#39;gray&#39;). encode(  x=&#39;index:Q&#39;,). transform_filter(  nearest)# Put the five layers into a chart and bind the dataalt. layer(  line, selectors, points, rules, text). properties(  width=800, height=400)       Hasta la actualidad&#182;:              # collapse# get dataresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1Z7VQ5xlf3BaTx_LBBblsW4hLoGYWnZyog3jqsS9Dbgc&amp;output=csv&amp;gid=0&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data))df = df[df. columns[2:]][1:65]. T. reset_index(drop=True)col_names = df. iloc[0]col_names[1] = &#39;Fecha&#39;df. columns = col_namesdf = df. drop(df. index[0])df[&#39;Fecha&#39;] = pd. to_datetime(df[&#39;Fecha&#39;], utc=True)df = df. set_index(&#39;Fecha&#39;)df = df. applymap(lambda a: str(a). replace(&#39;,&#39;,&#39;&#39;))df = df. apply(pd. to_numeric, errors=&#39;coerce&#39;)keep = [&#39;Spain&#39;, &#39;Italy&#39;, &#39;South Korea&#39;, &#39;Iran&#39;, &#39;Japan&#39;, &#39;France&#39;, &#39;Singapore&#39;, &#39;Germany&#39;]df = df[keep]# align dataaligned_data = {}daily_delta = 4plus_days = 31 + daily_deltaplus_spain = 5 + daily_deltaplus_iran = 10 + daily_deltaplus_italy = 10 + daily_deltaaligned_data[&#39;Spain&#39;] = np. array(df[&#39;Spain&#39;][42:42+plus_spain])aligned_data[&#39;Italy&#39;] = np. array(df[&#39;Italy&#39;][37:37+plus_italy])aligned_data[&#39;South Korea&#39;] = np. array(df[&#39;South Korea&#39;][16:16+plus_days])aligned_data[&#39;Iran&#39;] = np. array(df[&#39;Iran&#39;][37:37+plus_iran])aligned_data[&#39;Japan&#39;] = np. array(df[&#39;Japan&#39;][14:14+plus_days])aligned_data[&#39;France&#39;] = np. array(df[&#39;France&#39;][14:14+plus_days])aligned_data[&#39;Singapore&#39;] = np. array(df[&#39;Singapore&#39;][12:12+plus_days])aligned_data[&#39;Germany&#39;] = np. array(df[&#39;Germany&#39;][16:16+plus_days])df_aligned = pd. DataFrame(dict([(k,pd. Series(v)) for k,v in aligned_data. items() ]))df = df_aligned# plot# color schemedef my_theme():  return {    &#39;config&#39;: {      &#39;range&#39;: {&#39;category&#39;: {&#39;scheme&#39;: &#39;category10&#39;}}    }  }# Register and enable. alt. themes. register(&#39;my_theme&#39;, my_theme)alt. themes. enable(&#39;my_theme&#39;)source = df. reset_index(). melt(&#39;index&#39;, var_name=&#39;category&#39;, value_name=&#39;Confirmados&#39;)source. index = list(source. index)source. index = source. index. astype(int)selection = alt. selection_multi(fields=[&#39;category&#39;], bind=&#39;legend&#39;)line = alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  alt. X(&#39;index:Q&#39;, axis=alt. Axis(tickRound=True), title=&#39;Número de días&#39;),  alt. Y(&#39;Confirmados:Q&#39;),  alt. Color(&#39;category:N&#39;),  opacity=alt. condition(selection, alt. value(1), alt. value(0. 2)))nearest = alt. selection(type=&#39;single&#39;, nearest=True, on=&#39;mouseover&#39;,            fields=[&#39;index&#39;], empty=&#39;none&#39;)# Transparent selectors across the chart. This is what tells us# the x-value of the cursorselectors = alt. Chart(source). mark_point(). encode(  x=&#39;index:Q&#39;,  opacity=alt. value(0),). add_selection(  nearest)# Draw points on the line, and highlight based on selectionpoints = line. mark_point(). encode(  opacity=alt. condition(nearest, alt. value(1), alt. value(0)))# Draw text labels near the points, and highlight based on selectiontext = line. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(  text=alt. condition(nearest, &#39;Confirmados:Q&#39;, alt. value(&#39; &#39;)))line = line. add_selection(  selection)# Draw a rule at the location of the selectionrules = alt. Chart(source). mark_rule(color=&#39;gray&#39;). encode(  x=&#39;index:Q&#39;,). transform_filter(  nearest)# Put the five layers into a chart and bind the dataalt. layer(  line, selectors, points, rules, text). properties(  width=800, height=400)       Hasta la actualidad e incluyendo los 15 primeros d&#237;as de China&#182;:              # collapse# get dataresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1Z7VQ5xlf3BaTx_LBBblsW4hLoGYWnZyog3jqsS9Dbgc&amp;output=csv&amp;gid=0&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data))df = df[df. columns[2:]][1:65]. T. reset_index(drop=True)col_names = df. iloc[0]col_names[1] = &#39;Fecha&#39;df. columns = col_namesdf = df. drop(df. index[0])df[&#39;Fecha&#39;] = pd. to_datetime(df[&#39;Fecha&#39;], utc=True)df = df. set_index(&#39;Fecha&#39;)df = df. applymap(lambda a: str(a). replace(&#39;,&#39;,&#39;&#39;))df = df. apply(pd. to_numeric, errors=&#39;coerce&#39;)keep = [&#39;Spain&#39;, &#39;Italy&#39;, &#39;South Korea&#39;, &#39;Iran&#39;, &#39;Japan&#39;, &#39;France&#39;, &#39;Singapore&#39;, &#39;China&#39;, &#39;Germany&#39;]df = df[keep]# align dataaligned_data = {}daily_delta = 4plus_days = 31 + daily_deltaplus_spain = 5 + daily_deltaplus_iran = 10 + daily_deltaplus_italy = 10 + daily_deltaplus_china = 15aligned_data[&#39;Spain&#39;] = np. array(df[&#39;Spain&#39;][42:42+plus_spain])aligned_data[&#39;Italy&#39;] = np. array(df[&#39;Italy&#39;][37:37+plus_italy])aligned_data[&#39;South Korea&#39;] = np. array(df[&#39;South Korea&#39;][16:16+plus_days])aligned_data[&#39;Iran&#39;] = np. array(df[&#39;Iran&#39;][37:37+plus_iran])aligned_data[&#39;Japan&#39;] = np. array(df[&#39;Japan&#39;][14:14+plus_days])aligned_data[&#39;France&#39;] = np. array(df[&#39;France&#39;][14:14+plus_days])aligned_data[&#39;Singapore&#39;] = np. array(df[&#39;Singapore&#39;][12:12+plus_days])aligned_data[&#39;Germany&#39;] = np. array(df[&#39;Germany&#39;][16:16+plus_days])aligned_data[&#39;China&#39;] = np. array(df[&#39;China&#39;][0:0+plus_china])df_aligned = pd. DataFrame(dict([(k,pd. Series(v)) for k,v in aligned_data. items() ]))df = df_aligned# plot# color schemedef my_theme():  return {    &#39;config&#39;: {      &#39;range&#39;: {&#39;category&#39;: {&#39;scheme&#39;: &#39;category10&#39;}}    }  }# Register and enable. alt. themes. register(&#39;my_theme&#39;, my_theme)alt. themes. enable(&#39;my_theme&#39;)source = df. reset_index(). melt(&#39;index&#39;, var_name=&#39;category&#39;, value_name=&#39;Confirmados&#39;)source. index = list(source. index)source. index = source. index. astype(int)selection = alt. selection_multi(fields=[&#39;category&#39;], bind=&#39;legend&#39;)line = alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  alt. X(&#39;index:Q&#39;, axis=alt. Axis(tickRound=True), title=&#39;Número de días&#39;),  alt. Y(&#39;Confirmados:Q&#39;),  alt. Color(&#39;category:N&#39;),  opacity=alt. condition(selection, alt. value(1), alt. value(0. 2)))nearest = alt. selection(type=&#39;single&#39;, nearest=True, on=&#39;mouseover&#39;,            fields=[&#39;index&#39;], empty=&#39;none&#39;)# Transparent selectors across the chart. This is what tells us# the x-value of the cursorselectors = alt. Chart(source). mark_point(). encode(  x=&#39;index:Q&#39;,  opacity=alt. value(0),). add_selection(  nearest)# Draw points on the line, and highlight based on selectionpoints = line. mark_point(). encode(  opacity=alt. condition(nearest, alt. value(1), alt. value(0)))# Draw text labels near the points, and highlight based on selectiontext = line. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(  text=alt. condition(nearest, &#39;Confirmados:Q&#39;, alt. value(&#39; &#39;)))line = line. add_selection(  selection)# Draw a rule at the location of the selectionrules = alt. Chart(source). mark_rule(color=&#39;gray&#39;). encode(  x=&#39;index:Q&#39;,). transform_filter(  nearest)# Put the five layers into a chart and bind the dataalt. layer(  line, selectors, points, rules, text). properties(  width=800, height=400)       Hasta la actualidad e incluyendo los 30 primeros d&#237;as de China&#182;:              # collapse# get dataresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1Z7VQ5xlf3BaTx_LBBblsW4hLoGYWnZyog3jqsS9Dbgc&amp;output=csv&amp;gid=0&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data))df = df[df. columns[2:]][1:65]. T. reset_index(drop=True)col_names = df. iloc[0]col_names[1] = &#39;Fecha&#39;df. columns = col_namesdf = df. drop(df. index[0])df[&#39;Fecha&#39;] = pd. to_datetime(df[&#39;Fecha&#39;], utc=True)df = df. set_index(&#39;Fecha&#39;)df = df. applymap(lambda a: str(a). replace(&#39;,&#39;,&#39;&#39;))df = df. apply(pd. to_numeric, errors=&#39;coerce&#39;)keep = [&#39;Spain&#39;, &#39;Italy&#39;, &#39;South Korea&#39;, &#39;Iran&#39;, &#39;Japan&#39;, &#39;France&#39;, &#39;Singapore&#39;, &#39;China&#39;, &#39;Germany&#39;]df = df[keep]# align dataaligned_data = {}daily_delta = 4plus_days = 31 + daily_deltaplus_spain = 5 + daily_deltaplus_iran = 10 + daily_deltaplus_italy = 10 + daily_deltaplus_china = 30aligned_data[&#39;Spain&#39;] = np. array(df[&#39;Spain&#39;][42:42+plus_spain])aligned_data[&#39;Italy&#39;] = np. array(df[&#39;Italy&#39;][37:37+plus_italy])aligned_data[&#39;South Korea&#39;] = np. array(df[&#39;South Korea&#39;][16:16+plus_days])aligned_data[&#39;Iran&#39;] = np. array(df[&#39;Iran&#39;][37:37+plus_iran])aligned_data[&#39;Japan&#39;] = np. array(df[&#39;Japan&#39;][14:14+plus_days])aligned_data[&#39;France&#39;] = np. array(df[&#39;France&#39;][14:14+plus_days])aligned_data[&#39;Singapore&#39;] = np. array(df[&#39;Singapore&#39;][12:12+plus_days])aligned_data[&#39;Germany&#39;] = np. array(df[&#39;Germany&#39;][16:16+plus_days])aligned_data[&#39;China&#39;] = np. array(df[&#39;China&#39;][0:0+plus_china])df_aligned = pd. DataFrame(dict([(k,pd. Series(v)) for k,v in aligned_data. items() ]))df = df_aligned# plot# color schemedef my_theme():  return {    &#39;config&#39;: {      &#39;range&#39;: {&#39;category&#39;: {&#39;scheme&#39;: &#39;category10&#39;}}    }  }# Register and enable. alt. themes. register(&#39;my_theme&#39;, my_theme)alt. themes. enable(&#39;my_theme&#39;)source = df. reset_index(). melt(&#39;index&#39;, var_name=&#39;category&#39;, value_name=&#39;Confirmados&#39;)source. index = list(source. index)source. index = source. index. astype(int)selection = alt. selection_multi(fields=[&#39;category&#39;], bind=&#39;legend&#39;)line = alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  alt. X(&#39;index:Q&#39;, axis=alt. Axis(tickRound=True), title=&#39;Número de días&#39;),  alt. Y(&#39;Confirmados:Q&#39;),  alt. Color(&#39;category:N&#39;),  opacity=alt. condition(selection, alt. value(1), alt. value(0. 2)))nearest = alt. selection(type=&#39;single&#39;, nearest=True, on=&#39;mouseover&#39;,            fields=[&#39;index&#39;], empty=&#39;none&#39;)# Transparent selectors across the chart. This is what tells us# the x-value of the cursorselectors = alt. Chart(source). mark_point(). encode(  x=&#39;index:Q&#39;,  opacity=alt. value(0),). add_selection(  nearest)# Draw points on the line, and highlight based on selectionpoints = line. mark_point(). encode(  opacity=alt. condition(nearest, alt. value(1), alt. value(0)))# Draw text labels near the points, and highlight based on selectiontext = line. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(  text=alt. condition(nearest, &#39;Confirmados:Q&#39;, alt. value(&#39; &#39;)))line = line. add_selection(  selection)# Draw a rule at the location of the selectionrules = alt. Chart(source). mark_rule(color=&#39;gray&#39;). encode(  x=&#39;index:Q&#39;,). transform_filter(  nearest)# Put the five layers into a chart and bind the dataalt. layer(  line, selectors, points, rules, text). properties(  width=800, height=400)       Hasta la actualidad e incluyendo China&#182;:              # collapse# get dataresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1Z7VQ5xlf3BaTx_LBBblsW4hLoGYWnZyog3jqsS9Dbgc&amp;output=csv&amp;gid=0&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data))df = df[df. columns[2:]][1:65]. T. reset_index(drop=True)col_names = df. iloc[0]col_names[1] = &#39;Fecha&#39;df. columns = col_namesdf = df. drop(df. index[0])df[&#39;Fecha&#39;] = pd. to_datetime(df[&#39;Fecha&#39;], utc=True)df = df. set_index(&#39;Fecha&#39;)df = df. applymap(lambda a: str(a). replace(&#39;,&#39;,&#39;&#39;))df = df. apply(pd. to_numeric, errors=&#39;coerce&#39;)keep = [&#39;Spain&#39;, &#39;Italy&#39;, &#39;South Korea&#39;, &#39;Iran&#39;, &#39;Japan&#39;, &#39;France&#39;, &#39;Singapore&#39;, &#39;China&#39;, &#39;Germany&#39;]df = df[keep]# align dataaligned_data = {}daily_delta = 4plus_days = 31 + daily_deltaplus_spain = 5 + daily_deltaplus_iran = 10 + daily_deltaplus_italy = 10 + daily_deltaplus_china = 47 + daily_deltaaligned_data[&#39;Spain&#39;] = np. array(df[&#39;Spain&#39;][42:42+plus_spain])aligned_data[&#39;Italy&#39;] = np. array(df[&#39;Italy&#39;][37:37+plus_italy])aligned_data[&#39;South Korea&#39;] = np. array(df[&#39;South Korea&#39;][16:16+plus_days])aligned_data[&#39;Iran&#39;] = np. array(df[&#39;Iran&#39;][37:37+plus_iran])aligned_data[&#39;Japan&#39;] = np. array(df[&#39;Japan&#39;][14:14+plus_days])aligned_data[&#39;France&#39;] = np. array(df[&#39;France&#39;][14:14+plus_days])aligned_data[&#39;Singapore&#39;] = np. array(df[&#39;Singapore&#39;][12:12+plus_days])aligned_data[&#39;Germany&#39;] = np. array(df[&#39;Germany&#39;][16:16+plus_days])aligned_data[&#39;China&#39;] = np. array(df[&#39;China&#39;][0:0+plus_china])df_aligned = pd. DataFrame(dict([(k,pd. Series(v)) for k,v in aligned_data. items() ]))df = df_aligned# plot# color schemedef my_theme():  return {    &#39;config&#39;: {      &#39;range&#39;: {&#39;category&#39;: {&#39;scheme&#39;: &#39;category10&#39;}}    }  }# Register and enable. alt. themes. register(&#39;my_theme&#39;, my_theme)alt. themes. enable(&#39;my_theme&#39;)source = df. reset_index(). melt(&#39;index&#39;, var_name=&#39;category&#39;, value_name=&#39;Confirmados&#39;)source. index = list(source. index)source. index = source. index. astype(int)selection = alt. selection_multi(fields=[&#39;category&#39;], bind=&#39;legend&#39;)line = alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  alt. X(&#39;index:Q&#39;, axis=alt. Axis(tickRound=True), title=&#39;Número de días&#39;),  alt. Y(&#39;Confirmados:Q&#39;),  alt. Color(&#39;category:N&#39;),  opacity=alt. condition(selection, alt. value(1), alt. value(0. 2)))nearest = alt. selection(type=&#39;single&#39;, nearest=True, on=&#39;mouseover&#39;,            fields=[&#39;index&#39;], empty=&#39;none&#39;)# Transparent selectors across the chart. This is what tells us# the x-value of the cursorselectors = alt. Chart(source). mark_point(). encode(  x=&#39;index:Q&#39;,  opacity=alt. value(0),). add_selection(  nearest)# Draw points on the line, and highlight based on selectionpoints = line. mark_point(). encode(  opacity=alt. condition(nearest, alt. value(1), alt. value(0)))# Draw text labels near the points, and highlight based on selectiontext = line. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(  text=alt. condition(nearest, &#39;Confirmados:Q&#39;, alt. value(&#39; &#39;)))line = line. add_selection(  selection)# Draw a rule at the location of the selectionrules = alt. Chart(source). mark_rule(color=&#39;gray&#39;). encode(  x=&#39;index:Q&#39;,). transform_filter(  nearest)# Put the five layers into a chart and bind the dataalt. layer(  line, selectors, points, rules, text). properties(  width=800, height=400)       "
    }, {
    "id": 5,
    "url": "https://cambrian-intelligence.github.io/2020/02/29/confirmados_datos.html",
    "title": "Casos confirmados - datos españa",
    "body": "2020/02/29 -           Última actualización 09/03/2020 - 00:22              #collapseimport requestsimport pandas as pdfrom io import BytesIOresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1FwOXbkWeuS1LHrKxhSfepGtsgQ6iIEQZmWig_JKo8z0&amp;output=csv&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data), index_col=0, parse_dates=[&#39;Fecha&#39;], dayfirst=True)df              Asturias   Andalucía   Aragón   Baleares   Canarias   Cantabria   Cataluña   Castilla y León   Castilla-La Mancha   Comunidad de Madrid   Comunidad Valenciana   Extremadura   Galicia   La Rioja   Navarra   País Vasco   Total confirmados       Fecha                                                            2020-01-30   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0       2020-01-31   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   1       2020-02-01   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   1       2020-02-02   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   1       2020-02-03   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   1       2020-02-04   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   1       2020-02-05   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   1       2020-02-06   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   1       2020-02-07   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   1       2020-02-08   0   0   0   0   1   0   0   0   0   0   0   0   0   0   0   0   1       2020-02-09   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   2       2020-02-10   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   2       2020-02-11   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   2       2020-02-12   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   2       2020-02-13   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   2       2020-02-14   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   2       2020-02-15   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   2       2020-02-16   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   2       2020-02-17   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   2       2020-02-18   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   2       2020-02-19   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   2       2020-02-20   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   2       2020-02-21   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   2       2020-02-22   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   2       2020-02-23   0   0   0   1   1   0   0   0   0   0   0   0   0   0   0   0   2       2020-02-24   0   0   0   1   2   0   0   0   0   0   0   0   0   0   0   0   3       2020-02-25   0   0   0   1   3   0   1   0   0   1   1   0   0   0   0   0   7       2020-02-26   0   1   0   1   6   0   2   0   0   2   1   0   0   0   0   0   13       2020-02-27   0   6   0   1   7   0   2   0   0   4   8   0   0   0   0   0   28       2020-02-28   0   10   0   1   7   0   3   2   0   5   9   0   0   0   0   3   40       2020-02-29   1   12   0   2   7   1   6   2   1   10   14   0   0   0   1   5   62       2020-03-01   1   12   0   2   7   1   12   3   1   15   15   4   0   0   1   9   83       2020-03-02   1   12   0   2   8   10   15   8   3   29   15   6   0   1   2   10   122       2020-03-03   2   13   0   3   8   10   15   8   7   56   19   6   0   3   2   13   165       2020-03-04   4   13   0   5   8   10   28   12   12   70   22   6   1   3   3   17   214       2020-03-05   5   16   0   6   11   10   24   13   13   90   30   6   3   17   3   28   275       2020-03-06   5   21   6   6   16   10   24   14   15   137   31   6   4   38   3   45   381       2020-03-07   8   27   14   8   18   12   49   21   16   174   37   6   6   47   3   45   491       2020-03-08   9   35   17   8   17   12   78   30   15   202   42   6   5   70   3   102   651     "
    }, {
    "id": 6,
    "url": "https://cambrian-intelligence.github.io/2020/02/29/confirmados_datos-Predicciones.html",
    "title": "Predicciones (en desarrollo)",
    "body": "2020/02/29 -           Ajuste de curva exponencial : El progreso real parece por ahora subexponencial. Real (puntos) y predicci&#243;n (curva) :              #collapseimport requestsimport pandas as pdfrom io import BytesIOimport numpy as npimport altair as altimport datetime# get dataresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1FwOXbkWeuS1LHrKxhSfepGtsgQ6iIEQZmWig_JKo8z0&amp;output=csv&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data), parse_dates=[&#39;Fecha&#39;], dayfirst=True)df = df[31:35][[&#39;Fecha&#39;,&#39;Total confirmados&#39;]]df[&#39;dias&#39;] = np. array(range(len(df)))df[&#39;log(Total confirmados)&#39;] = np. log(df[&#39;Total confirmados&#39;])df = df. reset_index(drop=True)y = np. array(df[&#39;log(Total confirmados)&#39;])x = np. array(df[&#39;dias&#39;])a,b = np. polyfit(x, y, 1, w=np. sqrt(y))preds = []pred_span = 15for i in range(len(x)+pred_span):  log_pred = a*i + b  pred = np. e**log_pred  preds. append(pred)  df[&#39;modelo&#39;] = preds[0:len(x)]for ii in range(pred_span):  i = ii+len(x)  df. loc[i,&#39;Fecha&#39;] = df. loc[i-1,&#39;Fecha&#39;] + datetime. timedelta(days=1)  df. loc[i,&#39;dias&#39;] = df. loc[i-1,&#39;dias&#39;]  df. loc[i,&#39;modelo&#39;] = preds[ii+len(x)]  source = dfnearest = alt. selection(type=&#39;single&#39;, nearest=True, on=&#39;mouseover&#39;,            fields=[&#39;modelo&#39;], empty=&#39;none&#39;)# The basic lineline = alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  x=&#39;monthdate(Fecha):O&#39;,  y=&#39;modelo:Q&#39;,  color=alt. value(&quot;#FF0000&quot;))scatter = alt. Chart(source). mark_circle(size=60). encode(  x=&#39;monthdate(Fecha):O&#39;,  y=&#39;Total confirmados&#39;,  tooltip=[&#39;Total confirmados&#39;]). interactive()# Transparent selectors across the chart. This is what tells us# the x-value of the cursorselectors = alt. Chart(source). mark_point(). encode(  x=&#39;monthdate(Fecha):O&#39;,  opacity=alt. value(0),). add_selection(  nearest)# Draw points on the line, and highlight based on selectionpoints = line. mark_point(). encode(  opacity=alt. condition(nearest, alt. value(1), alt. value(0)))# Draw text labels near the points, and highlight based on selectiontext = line. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(  text=alt. condition(nearest, &#39;modelo:Q&#39;, alt. value(&#39; &#39;)))# Draw a rule at the location of the selectionrules = alt. Chart(source). mark_rule(color=&#39;gray&#39;). encode(  x=&#39;monthdate(Fecha):O&#39;,). transform_filter(  nearest)# Put the five layers into a chart and bind the dataalt. layer(  line, selectors, points, rules, text, scatter). properties(  width=800, height=400). configure(  padding=20)                    # collapsedf[[&#39;Fecha&#39;, &#39;Total confirmados&#39;, &#39;modelo&#39;]]              Fecha   Total confirmados   modelo         0   2020-03-01   83. 0   86. 057938       1   2020-03-02   122. 0   117. 647692       2   2020-03-03   165. 0   160. 833268       3   2020-03-04   214. 0   219. 871208       4   2020-03-05   NaN   300. 580525       5   2020-03-06   NaN   410. 916248       6   2020-03-07   NaN   561. 753503       7   2020-03-08   NaN   767. 959408       8   2020-03-09   NaN   1049. 858432       9   2020-03-10   NaN   1435. 235661       10   2020-03-11   NaN   1962. 075398       11   2020-03-12   NaN   2682. 305055       12   2020-03-13   NaN   3666. 913317       13   2020-03-14   NaN   5012. 947074       14   2020-03-15   NaN   6853. 076742       15   2020-03-16   NaN   9368. 672785       16   2020-03-17   NaN   12807. 682311       17   2020-03-18   NaN   17509. 067713       18   2020-03-19   NaN   23936. 216150     "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}