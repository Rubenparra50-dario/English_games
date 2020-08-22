import React, { Component } from 'react';
import {DictionaryHomeTemplate} from '../../template/dictionary/dictionaryHome';
import { List } from '../../components/apis/dictionary/apisCategories';
import { ListRegularVerbs } from '../../components/apis/dictionary/apiRegularVerbs';
import { ListIrregularVerbs } from '../../components/apis/dictionary/apiIrregularVerbs';
import { ListPronouns } from '../../components/apis/dictionary/apiPronounList';
import { ListPrepositionsOfPlace } from '../../components/apis/dictionary/apiPrepositionsOfPlaceList';
import { ListPrepositionsOfTime } from '../../components/apis/dictionary/apiPrepositionsOfTimeList';

const percent_per_element = 40;
const num_items = 5;

export default class DictionaryHome extends Component {

  constructor(props) { 
    super(props);
    this.state = {
        visible: false,
        animating: false,
        alignsecond: false,
        idCategory:1,
        data_categories : [],
        data_response: ListRegularVerbs,
    };

    setTimeout(
      () =>
        this.setState({ align: 'flex-start' }, function() {
          this.setState({
            alignsecond: true,
          });
        }),
      2000
    );
  }

//¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿ asignación de apis ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿

    AsignarCategorias = () => {
        this.setState({ data_categories : List })
    }

//¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿ fin asignación de apis ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿

//--------------------- inicio sección de eventos de botones ----------------------
    handlePressCategory = (id) => {

        if(id===1){
            this.setState({
                idCategory: id,
                data_response: ListRegularVerbs,
            })
        }else if (id===2){
            this.setState({
                idCategory: id,
                data_response: ListIrregularVerbs,
            })
        }else if (id===3){
            this.setState({
                idCategory: id,
                data_response: ListPronouns,
            })
        }else if (id===4){
            this.setState({
                idCategory: id,
                data_response: ListPrepositionsOfPlace,
            })
        }else if (id===5){
            this.setState({
                idCategory: id,
                data_response: ListPrepositionsOfTime,
            })
        }
        //console.log('id_category: '+id)
    }

    _toggleBottomNavigationView = () => {
    this.setState({ visible: !this.state.visible });
    };
//--------------------- fin sección de eventos de botones ------------------------

    componentDidMount (){
        this.AsignarCategorias();
    }

  render () {
    return (
      <DictionaryHomeTemplate
      visible={this.state.visible}
      animating={this.state.animating}
      alignsecond={this.state.alignsecond}
      status={this.state.status}
      percent_per_element={percent_per_element}
      num_items={num_items}
      data_categories={this.state.data_categories}
      data_response={this.state.data_response}
      idCategory={this.state.idCategory}

      handlePressCategory={this.handlePressCategory}
      _toggleBottomNavigationView={this._toggleBottomNavigationView}
      ></DictionaryHomeTemplate>
    )
  }
}
