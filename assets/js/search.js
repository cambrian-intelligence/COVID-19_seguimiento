
var documents = [{
    "id": 0,
    "url": "https://cambrian-intelligence.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://cambrian-intelligence.github.io/about/",
    "title": "Sobre esta herramienta",
    "body": "Dashboard creado por Cambrian Intelligence SL. Puedes consultar y descargar el código fuente de este Dashboard en github. Los datos que empleados por este Dashboard están recopilados en la siguiente hoja de cálculo: https://docs. google. com/spreadsheets/d/1FwOXbkWeuS1LHrKxhSfepGtsgQ6iIEQZmWig_JKo8z0/edit#gid=0 "
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
    "title": "Confirmados - gráficos",
    "body": "2020/02/29 -           Total&#182;:              #collapseimport requestsimport pandas as pdfrom io import BytesIOimport numpy as npimport altair as alt# get dataresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1FwOXbkWeuS1LHrKxhSfepGtsgQ6iIEQZmWig_JKo8z0&amp;output=csv&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data), parse_dates=[&#39;Fecha&#39;], dayfirst=True)# Create a selection that chooses the nearest point &amp; selects based on x-valuesource = dfnearest = alt. selection(type=&#39;single&#39;, nearest=True, on=&#39;mouseover&#39;,            fields=[&#39;Total confirmados&#39;], empty=&#39;none&#39;)# The basic lineline = alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  x=&#39;monthdate(Fecha):O&#39;,  y=&#39;Total confirmados:Q&#39;,)# Transparent selectors across the chart. This is what tells us# the x-value of the cursorselectors = alt. Chart(source). mark_point(). encode(  x=&#39;monthdate(Fecha):O&#39;,  opacity=alt. value(0),). add_selection(  nearest)# Draw points on the line, and highlight based on selectionpoints = line. mark_point(). encode(  opacity=alt. condition(nearest, alt. value(1), alt. value(0)))# Draw text labels near the points, and highlight based on selectiontext = line. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(  text=alt. condition(nearest, &#39;Total confirmados:Q&#39;, alt. value(&#39; &#39;)))# Draw a rule at the location of the selectionrules = alt. Chart(source). mark_rule(color=&#39;gray&#39;). encode(  x=&#39;monthdate(Fecha):O&#39;,). transform_filter(  nearest)# Put the five layers into a chart and bind the dataalt. layer(  line, selectors, points, rules, text). properties(  width=800, height=400)       Por comunidad aut&#243;noma&#182;:              #collapseimport requestsimport pandas as pdfrom io import BytesIOimport numpy as npimport altair as alt# data downloadresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1FwOXbkWeuS1LHrKxhSfepGtsgQ6iIEQZmWig_JKo8z0&amp;output=csv&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data), parse_dates=[&#39;Fecha&#39;], dayfirst=True)# plotcols = list(df. columns)cols. remove(&#39;Total confirmados&#39;)cols. remove(&#39;Fecha&#39;)df = df. set_index(&#39;Fecha&#39;)[cols]source = df. reset_index(). melt(&#39;Fecha&#39;, var_name=&#39;category&#39;, value_name=&#39;Confirmados&#39;)# plotselection = alt. selection_multi(fields=[&#39;category&#39;], bind=&#39;legend&#39;)alt. Chart(source). mark_line(interpolate=&#39;basis&#39;). encode(  alt. X(&#39;monthdate(Fecha):O&#39;, axis=alt. Axis()),  alt. Y(&#39;Confirmados:Q&#39;),  alt. Color(&#39;category:N&#39;),  opacity=alt. condition(selection, alt. value(1), alt. value(0. 2))). properties(  width=800, height=400). add_selection(  selection)       "
    }, {
    "id": 5,
    "url": "https://cambrian-intelligence.github.io/2020/02/29/confirmados_datos.html",
    "title": "Confirmados - datos",
    "body": "2020/02/29 -                        #collapseimport requestsimport pandas as pdfrom io import BytesIOresponse = requests. get(&#39;https://docs. google. com/spreadsheet/ccc?key=1FwOXbkWeuS1LHrKxhSfepGtsgQ6iIEQZmWig_JKo8z0&amp;output=csv&#39;)assert response. status_code == 200, &#39;Wrong status code&#39;data = response. contentdf = pd. read_csv(BytesIO(data), index_col=0, parse_dates=[&#39;Fecha&#39;], dayfirst=True)df              Asturias   Aragón   Baleares   Canarias   Cataluña   Castilla y León   Comunidad de Madrid   Comunidad Valenciana   Andalucía   País Vasco   Navarra   Total confirmados       Fecha                                             2020-01-30   0   0   0   0   0   0   0   0   0   0   0   0       2020-01-31   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-01   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-02   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-03   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-04   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-05   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-06   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-07   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-08   0   0   0   1   0   0   0   0   0   0   0   1       2020-02-09   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-10   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-11   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-12   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-13   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-14   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-15   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-16   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-17   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-18   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-19   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-20   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-21   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-22   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-23   0   0   1   1   0   0   0   0   0   0   0   2       2020-02-24   0   0   1   2   0   0   0   0   0   0   0   3       2020-02-25   0   0   1   2   0   0   0   0   0   0   0   3       2020-02-26   0   0   1   2   0   0   0   0   0   0   0   3       2020-02-27   0   0   1   6   3   0   4   2   1   0   0   17       2020-02-28   0   0   1   6   3   2   5   9   7   0   0   33       2020-02-29   1   1   2   7   6   2   10   15   10   3   1   56     "
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