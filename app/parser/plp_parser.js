/**
 * Created by z002916 on 12/1/16.
 */

function plp_parse(data) {
   value=[];
    data.search_response.items.map((values) => {
        console.log(values);
        return values.Item.map((val,ind) =>{console.log(val);
            return <li key={ind}>{val.title}</li>;});
    });
return ;
}

export default plp_parse;