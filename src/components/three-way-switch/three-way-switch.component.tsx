import React from 'react';
import { ThreeWayToggleType } from '../../view/to-do/to-do.view';
import { ClickableLabel, ConcealedRadio } from './switch.utils-components';
import { Switch, SwitchSelection } from './three-way-switch.styles';

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
