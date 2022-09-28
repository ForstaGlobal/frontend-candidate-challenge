import React from 'react';
import { ThreeWayToggleType } from '../../view/to-do/to-do.view';
import { Switch, SwitchLabel, SwitchRadio, SwitchSelection } from './three-way-switch.styles';

const titleCase = (str: string) =>
    str.split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join(' ');

type ClickableLabelType = {
    title: ThreeWayToggleType;
    onChange: (title: ThreeWayToggleType) => void;
    id: number
}

const ClickableLabel = ({ title, onChange, id }: ClickableLabelType) =>
    <SwitchLabel onClick={() => onChange(title)} className={"" + id}>
        {titleCase(title)}
    </SwitchLabel>;

type ConcealedRadioType = {
    value: ThreeWayToggleType;
    selected: ThreeWayToggleType;
}

const ConcealedRadio = ({ value, selected }: ConcealedRadioType) =>
    <SwitchRadio type="radio" name="switch" checked={selected === value} readOnly />;

type ThreeWaySwitchType = {
    values: ThreeWayToggleType[];
    selected: ThreeWayToggleType;
    onToggleChange: (val: ThreeWayToggleType) => void
}

export const ThreeWaySwitch: React.FC<ThreeWaySwitchType> = ({ values, selected, onToggleChange }) => {

    const handleChange = (val: ThreeWayToggleType) => {
        onToggleChange(val);
    };

    const selectionStyle = () => {
        return {
            left: `${values.indexOf(selected) / 3 * 100}%`,
        };
    };
    return (
        <Switch>
            {values.map((val, index) => {
                return (
                    <span key={val}>
                        <ConcealedRadio value={val} selected={selected} />
                        <ClickableLabel title={val} onChange={handleChange} id={index} />
                    </span>
                );
            })}
            <SwitchSelection style={selectionStyle()} />
        </Switch>
    );

}
