
var documents = [{
    "id": 0,
    "url": "https://cambrian-intelligence.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://cambrian-intelligence.github.io/about/",
    "title": "Sobre esta herramienta",
    "body": "Dashboard creado por Cambrian Intelligence SL. Puedes consultar y descargar el código fuente de este Dashboard en github. Los datos nacionales empleados por este Dashboard están recopilados en la siguiente hoja de cálculo: https://docs. google. com/spreadsheets/d/1FwOXbkWeuS1LHrKxhSfepGtsgQ6iIEQZmWig_JKo8z0/edit#gid=0 Los datos internacionales empleados por este Dashboard están recopilados en la siguiente hoja de cálculo: https://docs. google. com/spreadsheets/d/1Z7VQ5xlf3BaTx_LBBblsW4hLoGYWnZyog3jqsS9Dbgc/edit#gid=648547189 "
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
    "body": "2020/02/29 -           Última actualización 29/02/2020 - 23:39 Total&#182;:              #collapseimport requestsimport pandas as pdfrom io import BytesIOimport numpy as npimport altair as alt# get dataresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1FwOXbkWeuS1LHrKxhSfepGtsgQ6iIEQZmWig_JKo8z0&amp;output=csv&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data), parse_dates=[&#39;Fecha&#39;], dayfirst=True)# Create a selection that chooses the nearest point &amp; selects based on x-valuesource = dfnearest = alt. selection(type=&#39;single&#39;, nearest=True, on=&#39;mouseover&#39;,            fields=[&#39;Total confirmados&#39;], empty=&#39;none&#39;)# The basic lineline = alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  x=&#39;monthdate(Fecha):O&#39;,  y=&#39;Total confirmados:Q&#39;,)# Transparent selectors across the chart. This is what tells us# the x-value of the cursorselectors = alt. Chart(source). mark_point(). encode(  x=&#39;monthdate(Fecha):O&#39;,  opacity=alt. value(0),). add_selection(  nearest)# Draw points on the line, and highlight based on selectionpoints = line. mark_point(). encode(  opacity=alt. condition(nearest, alt. value(1), alt. value(0)))# Draw text labels near the points, and highlight based on selectiontext = line. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(  text=alt. condition(nearest, &#39;Total confirmados:Q&#39;, alt. value(&#39; &#39;)))# Draw a rule at the location of the selectionrules = alt. Chart(source). mark_rule(color=&#39;gray&#39;). encode(  x=&#39;monthdate(Fecha):O&#39;,). transform_filter(  nearest)# Put the five layers into a chart and bind the dataalt. layer(  line, selectors, points, rules, text). properties(  width=800, height=400)       Por comunidad aut&#243;noma&#182;: Haz click en la leyenda para activar una única línea.              #collapseimport requestsimport pandas as pdfrom io import BytesIOimport numpy as npimport altair as alt# data downloadresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1FwOXbkWeuS1LHrKxhSfepGtsgQ6iIEQZmWig_JKo8z0&amp;output=csv&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data), parse_dates=[&#39;Fecha&#39;], dayfirst=True)# plotcols = list(df. columns)cols. remove(&#39;Total confirmados&#39;)cols. remove(&#39;Fecha&#39;)df = df. set_index(&#39;Fecha&#39;)[cols]source = df. reset_index(). melt(&#39;Fecha&#39;, var_name=&#39;category&#39;, value_name=&#39;Confirmados&#39;)# plotselection = alt. selection_multi(fields=[&#39;category&#39;], bind=&#39;legend&#39;)alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  alt. X(&#39;monthdate(Fecha):O&#39;, axis=alt. Axis()),  alt. Y(&#39;Confirmados:Q&#39;),  alt. Color(&#39;category:N&#39;),  opacity=alt. condition(selection, alt. value(1), alt. value(0. 2))). properties(  width=800, height=400). add_selection(  selection)       Comparaci&#243;n con otros pa&#237;ses&#182;: Haz click en la leyenda para activar una única línea. Datos tomados de fuentes externas. Ver sección  Sobre esta herramienta  para más información.              # collapse# get dataresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1Z7VQ5xlf3BaTx_LBBblsW4hLoGYWnZyog3jqsS9Dbgc&amp;output=csv&amp;gid=0&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data))df = df[df. columns[2:]][1:65]. T. reset_index(drop=True)col_names = df. iloc[0]col_names[1] = &#39;Fecha&#39;df. columns = col_namesdf = df. drop(df. index[0])df[&#39;Fecha&#39;] = pd. to_datetime(df[&#39;Fecha&#39;], utc=True)df = df. set_index(&#39;Fecha&#39;)df = df. applymap(lambda a: str(a). replace(&#39;,&#39;,&#39;&#39;))df = df. apply(pd. to_numeric, errors=&#39;coerce&#39;)# plotkeep = [&#39;Spain&#39;, &#39;Italy&#39;, &#39;South Korea&#39;, &#39;Iran&#39;, &#39;Japan&#39;, &#39;France&#39;, &#39;Singapore&#39;]df = df[keep]# the last day is dicarded until the day is (almost) overplus_all = 48df = df[0:plus_all]source = df. reset_index(). melt(&#39;Fecha&#39;, var_name=&#39;category&#39;, value_name=&#39;Confirmados&#39;)selection = alt. selection_multi(fields=[&#39;category&#39;], bind=&#39;legend&#39;)alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  alt. X(&#39;monthdate(Fecha):O&#39;, axis=alt. Axis()),  alt. Y(&#39;Confirmados:Q&#39;),  alt. Color(&#39;category:N&#39;),  opacity=alt. condition(selection, alt. value(1), alt. value(0. 2))). properties(  width=800, height=400). add_selection(  selection)       Comparaci&#243;n con otros pa&#237;ses alineando las curvas temporalmente&#182;: Tomamos como inicio de las curvas aproximadamente el último día que hay 3 casos. Datos tomados de fuentes externas. Ver sección  Sobre esta herramienta  para más información. Haz click en la leyenda para activar una única línea. a 5 d&#237;as&#182;:              # collapse# get dataresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1Z7VQ5xlf3BaTx_LBBblsW4hLoGYWnZyog3jqsS9Dbgc&amp;output=csv&amp;gid=0&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data))df = df[df. columns[2:]][1:65]. T. reset_index(drop=True)col_names = df. iloc[0]col_names[1] = &#39;Fecha&#39;df. columns = col_namesdf = df. drop(df. index[0])df[&#39;Fecha&#39;] = pd. to_datetime(df[&#39;Fecha&#39;], utc=True)df = df. set_index(&#39;Fecha&#39;)df = df. applymap(lambda a: str(a). replace(&#39;,&#39;,&#39;&#39;))df = df. apply(pd. to_numeric, errors=&#39;coerce&#39;)keep = [&#39;Spain&#39;, &#39;Italy&#39;, &#39;South Korea&#39;, &#39;Iran&#39;, &#39;Japan&#39;, &#39;France&#39;, &#39;Singapore&#39;]df = df[keep]# align dataaligned_data = {}plus_days = 5aligned_data[&#39;Spain&#39;] = np. array(df[&#39;Spain&#39;][42:42+plus_days])aligned_data[&#39;Italy&#39;] = np. array(df[&#39;Italy&#39;][37:37+plus_days])aligned_data[&#39;South Korea&#39;] = np. array(df[&#39;South Korea&#39;][16:16+plus_days])aligned_data[&#39;Iran&#39;] = np. array(df[&#39;Iran&#39;][37:37+plus_days])aligned_data[&#39;Japan&#39;] = np. array(df[&#39;Japan&#39;][14:14+plus_days])aligned_data[&#39;France&#39;] = np. array(df[&#39;France&#39;][14:14+plus_days])aligned_data[&#39;Singapore&#39;] = np. array(df[&#39;Singapore&#39;][12:12+plus_days])df_aligned = pd. DataFrame(dict([(k,pd. Series(v)) for k,v in aligned_data. items() ]))df = df_aligneddf              Spain   Italy   South Korea   Iran   Japan   France   Singapore         0   3. 0   3. 0   4. 0   2. 0   3. 0   3. 0   4. 0       1   9. 0   3. 0   6. 0   5. 0   7. 0   4. 0   4. 0       2   13. 0   20. 0   11. 0   18. 0   11. 0   5. 0   5. 0       3   25. 0   79. 0   12. 0   28. 0   14. 0   6. 0   7. 0       4   37. 0   152. 0   15. 0   43. 0   17. 0   6. 0   10. 0                  # collapse# plotsource = df. reset_index(). melt(&#39;index&#39;, var_name=&#39;category&#39;, value_name=&#39;Confirmados&#39;)source. index = list(source. index)source. index = source. index. astype(int)selection = alt. selection_multi(fields=[&#39;category&#39;], bind=&#39;legend&#39;)alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  alt. X(&#39;index:Q&#39;, axis=alt. Axis(tickRound=True), title=&#39;Número de días&#39;),  alt. Y(&#39;Confirmados:Q&#39;),  alt. Color(&#39;category:N&#39;),  opacity=alt. condition(selection, alt. value(1), alt. value(0. 2))). properties(  width=800, height=400). add_selection(  selection)       a 10 d&#237;as&#182;:              # collapse# get dataresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1Z7VQ5xlf3BaTx_LBBblsW4hLoGYWnZyog3jqsS9Dbgc&amp;output=csv&amp;gid=0&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data))df = df[df. columns[2:]][1:65]. T. reset_index(drop=True)col_names = df. iloc[0]col_names[1] = &#39;Fecha&#39;df. columns = col_namesdf = df. drop(df. index[0])df[&#39;Fecha&#39;] = pd. to_datetime(df[&#39;Fecha&#39;], utc=True)df = df. set_index(&#39;Fecha&#39;)df = df. applymap(lambda a: str(a). replace(&#39;,&#39;,&#39;&#39;))df = df. apply(pd. to_numeric, errors=&#39;coerce&#39;)keep = [&#39;Spain&#39;, &#39;Italy&#39;, &#39;South Korea&#39;, &#39;Iran&#39;, &#39;Japan&#39;, &#39;France&#39;, &#39;Singapore&#39;]df = df[keep]# align dataaligned_data = {}plus_days = 10plus_spain = 6aligned_data[&#39;Spain&#39;] = np. array(df[&#39;Spain&#39;][42:42+plus_spain])aligned_data[&#39;Italy&#39;] = np. array(df[&#39;Italy&#39;][37:37+plus_days])aligned_data[&#39;South Korea&#39;] = np. array(df[&#39;South Korea&#39;][16:16+plus_days])aligned_data[&#39;Iran&#39;] = np. array(df[&#39;Iran&#39;][37:37+plus_days])aligned_data[&#39;Japan&#39;] = np. array(df[&#39;Japan&#39;][14:14+plus_days])aligned_data[&#39;France&#39;] = np. array(df[&#39;France&#39;][14:14+plus_days])aligned_data[&#39;Singapore&#39;] = np. array(df[&#39;Singapore&#39;][12:12+plus_days])df_aligned = pd. DataFrame(dict([(k,pd. Series(v)) for k,v in aligned_data. items() ]))df = df_aligneddf              Spain   Italy   South Korea   Iran   Japan   France   Singapore         0   3. 0   3. 0   4. 0   2. 0   3. 0   3. 0   4. 0       1   9. 0   3. 0   6. 0   5. 0   7. 0   4. 0   4. 0       2   13. 0   20. 0   11. 0   18. 0   11. 0   5. 0   5. 0       3   25. 0   79. 0   12. 0   28. 0   14. 0   6. 0   7. 0       4   37. 0   152. 0   15. 0   43. 0   17. 0   6. 0   10. 0       5   58. 0   228. 0   15. 0   61. 0   20. 0   6. 0   13. 0       6   NaN   323. 0   16. 0   95. 0   20. 0   6. 0   16. 0       7   NaN   466. 0   23. 0   139. 0   20. 0   6. 0   18. 0       8   NaN   653. 0   23. 0   245. 0   23. 0   6. 0   18. 0       9   NaN   897. 0   24. 0   388. 0   25. 0   6. 0   18. 0                  # collapse# plotsource = df. reset_index(). melt(&#39;index&#39;, var_name=&#39;category&#39;, value_name=&#39;Confirmados&#39;)source. index = list(source. index)source. index = source. index. astype(int)selection = alt. selection_multi(fields=[&#39;category&#39;], bind=&#39;legend&#39;)alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  alt. X(&#39;index:Q&#39;, axis=alt. Axis(tickRound=True), title=&#39;Número de días&#39;),  alt. Y(&#39;Confirmados:Q&#39;),  alt. Color(&#39;category:N&#39;),  opacity=alt. condition(selection, alt. value(1), alt. value(0. 2))). properties(  width=800, height=400). add_selection(  selection)       a 20 d&#237;as&#182;:              # collapse# get dataresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1Z7VQ5xlf3BaTx_LBBblsW4hLoGYWnZyog3jqsS9Dbgc&amp;output=csv&amp;gid=0&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data))df = df[df. columns[2:]][1:65]. T. reset_index(drop=True)col_names = df. iloc[0]col_names[1] = &#39;Fecha&#39;df. columns = col_namesdf = df. drop(df. index[0])df[&#39;Fecha&#39;] = pd. to_datetime(df[&#39;Fecha&#39;], utc=True)df = df. set_index(&#39;Fecha&#39;)df = df. applymap(lambda a: str(a). replace(&#39;,&#39;,&#39;&#39;))df = df. apply(pd. to_numeric, errors=&#39;coerce&#39;)keep = [&#39;Spain&#39;, &#39;Italy&#39;, &#39;South Korea&#39;, &#39;Iran&#39;, &#39;Japan&#39;, &#39;France&#39;, &#39;Singapore&#39;]df = df[keep]# align dataaligned_data = {}plus_days = 20plus_spain = 6plus_iran = 11plus_italy = 11aligned_data[&#39;Spain&#39;] = np. array(df[&#39;Spain&#39;][42:42+plus_spain])aligned_data[&#39;Italy&#39;] = np. array(df[&#39;Italy&#39;][37:37+plus_italy])aligned_data[&#39;South Korea&#39;] = np. array(df[&#39;South Korea&#39;][16:16+plus_days])aligned_data[&#39;Iran&#39;] = np. array(df[&#39;Iran&#39;][37:37+plus_iran])aligned_data[&#39;Japan&#39;] = np. array(df[&#39;Japan&#39;][14:14+plus_days])aligned_data[&#39;France&#39;] = np. array(df[&#39;France&#39;][14:14+plus_days])aligned_data[&#39;Singapore&#39;] = np. array(df[&#39;Singapore&#39;][12:12+plus_days])df_aligned = pd. DataFrame(dict([(k,pd. Series(v)) for k,v in aligned_data. items() ]))df = df_aligned# plotsource = df. reset_index(). melt(&#39;index&#39;, var_name=&#39;category&#39;, value_name=&#39;Confirmados&#39;)source. index = list(source. index)source. index = source. index. astype(int)selection = alt. selection_multi(fields=[&#39;category&#39;], bind=&#39;legend&#39;)alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  alt. X(&#39;index:Q&#39;, axis=alt. Axis(tickRound=True), title=&#39;Número de días&#39;),  alt. Y(&#39;Confirmados:Q&#39;),  alt. Color(&#39;category:N&#39;),  opacity=alt. condition(selection, alt. value(1), alt. value(0. 2))). properties(  width=800, height=400). add_selection(  selection)       a 30 d&#237;as&#182;:              # collapse# get dataresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1Z7VQ5xlf3BaTx_LBBblsW4hLoGYWnZyog3jqsS9Dbgc&amp;output=csv&amp;gid=0&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data))df = df[df. columns[2:]][1:65]. T. reset_index(drop=True)col_names = df. iloc[0]col_names[1] = &#39;Fecha&#39;df. columns = col_namesdf = df. drop(df. index[0])df[&#39;Fecha&#39;] = pd. to_datetime(df[&#39;Fecha&#39;], utc=True)df = df. set_index(&#39;Fecha&#39;)df = df. applymap(lambda a: str(a). replace(&#39;,&#39;,&#39;&#39;))df = df. apply(pd. to_numeric, errors=&#39;coerce&#39;)keep = [&#39;Spain&#39;, &#39;Italy&#39;, &#39;South Korea&#39;, &#39;Iran&#39;, &#39;Japan&#39;, &#39;France&#39;, &#39;Singapore&#39;]df = df[keep]# align dataaligned_data = {}plus_days = 40plus_spain = 6plus_iran = 11plus_italy = 11plus_s_korea = 32aligned_data[&#39;Spain&#39;] = np. array(df[&#39;Spain&#39;][42:42+plus_spain])aligned_data[&#39;Italy&#39;] = np. array(df[&#39;Italy&#39;][37:37+plus_italy])aligned_data[&#39;South Korea&#39;] = np. array(df[&#39;South Korea&#39;][16:16+plus_s_korea])aligned_data[&#39;Iran&#39;] = np. array(df[&#39;Iran&#39;][37:37+plus_iran])aligned_data[&#39;Japan&#39;] = np. array(df[&#39;Japan&#39;][14:14+plus_days])aligned_data[&#39;France&#39;] = np. array(df[&#39;France&#39;][14:14+plus_days])aligned_data[&#39;Singapore&#39;] = np. array(df[&#39;Singapore&#39;][12:12+plus_days])df_aligned = pd. DataFrame(dict([(k,pd. Series(v)) for k,v in aligned_data. items() ]))df = df_aligned# plotsource = df. reset_index(). melt(&#39;index&#39;, var_name=&#39;category&#39;, value_name=&#39;Confirmados&#39;)source. index = list(source. index)source. index = source. index. astype(int)selection = alt. selection_multi(fields=[&#39;category&#39;], bind=&#39;legend&#39;)alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  alt. X(&#39;index:Q&#39;, axis=alt. Axis(tickRound=True), title=&#39;Número de días&#39;),  alt. Y(&#39;Confirmados:Q&#39;),  alt. Color(&#39;category:N&#39;),  opacity=alt. condition(selection, alt. value(1), alt. value(0. 2))). properties(  width=800, height=400). add_selection(  selection)       "
    }, {
    "id": 5,
    "url": "https://cambrian-intelligence.github.io/2020/02/29/confirmados_datos.html",
    "title": "Casos confirmados - datos",
    "body": "2020/02/29 -                        #collapseimport requestsimport pandas as pdfrom io import BytesIOresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1FwOXbkWeuS1LHrKxhSfepGtsgQ6iIEQZmWig_JKo8z0&amp;output=csv&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data), index_col=0, parse_dates=[&#39;Fecha&#39;], dayfirst=True)df              Asturias   Andalucía   Aragón   Baleares   Canarias   Cantabria   Cataluña   Castilla y León   Comunidad de Madrid   Comunidad Valenciana   País Vasco   Navarra   Total confirmados       Fecha                                                2020-01-30   0   0   0   0   0   0   0   0   0   0   0   0   0       2020-01-31   0   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-01   0   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-02   0   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-03   0   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-04   0   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-05   0   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-06   0   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-07   0   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-08   0   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-09   0   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-10   0   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-11   0   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-12   0   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-13   0   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-14   0   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-15   0   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-16   0   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-17   0   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-18   0   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-19   0   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-20   0   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-21   0   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-22   0   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-23   0   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-24   0   0   0   1   2   0   0   0   0   0   0   0   3       2020-02-25   0   0   0   1   2   0   0   0   0   0   0   0   3       2020-02-26   0   0   0   1   2   0   0   0   0   0   0   0   3       2020-02-27   0   1   0   1   6   0   3   0   4   2   0   0   17       2020-02-28   0   7   0   1   6   0   3   2   5   9   0   0   33       2020-02-29   1   10   1   2   7   1   6   2   10   15   3   1   59     "
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