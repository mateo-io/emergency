import React from 'react';
import FilterLink from 'containers/FilterLink';
import { defaultRanges, DateRange } from 'react-date-range';
import PopoverWrapper from './PopoverWrapper';
import PaperBox from 'components/PaperBox';
import FilterDropDown from './FilterDropDown';

export default class FilterBar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      'rangePicker' : {},
      'linked' : {},
      'datePicker' : null,
      'firstDayOfWeek' : null,
      'predefined' : {},
    }
  }

  handleChange(which, payload) {
    console.log("Date state changed");
    console.log("STATE: ", this.state)
    console.log("WHICH: ", which)
    if(payload.startDate.toString()===payload.endDate.toString()) {
      console.log("Same day");
      this.props.callActions.setBothDates(payload.startDate.subtract(1, 'days').toDate(), payload.endDate.toDate())

    } else {
      this.props.callActions.setBothDates(payload.startDate.toDate(), payload.endDate.toDate())
    }
    this.setState({
      [which] : payload
    });
  }

  render(){
    const { rangePicker, linked, datePicker, firstDayOfWeek, predefined} = this.state;
    const format = 'dddd, D MMMM YYYY';
    const style = {
    margin: '20px 10px',
    padding: '20px 10px 20px 10px',
  }
    return(
      <div>

      <PaperBox blank small style={ style } >
        <FilterLink filter='MOSTRAR_TODOS'>TODOS</FilterLink>
        <FilterLink filter='MOSTRAR_AMBULANCIA'>AMBULANCIA</FilterLink>
        <FilterLink filter='MOSTRAR_GRUA'>GRUA</FilterLink>
        <FilterLink filter='MOSTRAR_POLICIA'>POLICIA</FilterLink>
        <FilterLink filter='MOSTRAR_OTRO'>OTRO</FilterLink>



        <PopoverWrapper
        startDate={this.state.predefined.startDate && this.state.predefined.startDate.format('DD/MM/YY') || ''}
        endDate={this.state.predefined.endDate && this.state.predefined.endDate.format('DD/MM/YY') || 'HOY'}>
          <div>
          <input
          type='text'
          readOnly
          value={ predefined['startDate'] && predefined['startDate'].format(format).toString() }
          />
          <input
          type='text'
          readOnly
          value={ predefined['endDate'] && predefined['endDate'].format(format).toString() }
          />
          </div>
          <DateRange
          lang='es'
          linkedCalendars={ true }
          ranges={ defaultRanges }
          onInit={ this.handleChange.bind(this, 'predefined') }
          onChange={ this.handleChange.bind(this, 'predefined') }
          theme={{
            Calendar : { width: 200 },
            PredefinedRanges : { marginLeft: 10, marginTop: 10 }
          }}
          />
        </PopoverWrapper>

      </PaperBox>
      <PaperBox blank small>

        <span>Duracion servicio</span>
        <FilterDropDown
        setDurationAll={this.props.searchActions.setDurationAll}
        setDurationFilter1={this.props.searchActions.setDurationFilter1}
        filter1Text={`Menor a 5 minutos`}
        setDurationFilter2={this.props.searchActions.setDurationFilter2}
        filter2Text={`5-20 Minutos`}
        setDurationFilter3={this.props.searchActions.setDurationFilter3}
        filter3Text={`20-60 Minutos`}
        setDurationFilter4={this.props.searchActions.setDurationFilter4}
        filter4Text={`Mas de 60 Minutos`}
        />

        <span>Duracion llamada</span>
        <FilterDropDown
        setDurationAll={this.props.searchActions.setCallDurationAll}
        setDurationFilter1={this.props.searchActions.setCallDurationFilter1}
        filter1Text={`Menor a 30s`}
        setDurationFilter2={this.props.searchActions.setCallDurationFilter2}
        filter2Text={`Menor a 1min`}
        setDurationFilter3={this.props.searchActions.setCallDurationFilter3}
        filter3Text={`1-3 minutos`}
        setDurationFilter4={this.props.searchActions.setCallDurationFilter4}
        filter4Text={`Mayor a 3 minutos`}
        />

        </PaperBox>
        </div>

    )
  }

}
