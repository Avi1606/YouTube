import React from 'react';
import Button from "./Button.jsx";

const ButtonList = () => {
    return (
        <div className="flex ">
            <Button name={"All"}/>
            <Button name={"News"}/>
            <Button name={"Movies"}/>
            <Button name={"Live"}/>
            <Button name={"Gaming"}/>
            <Button name={"Song"}/>
            <Button name={"Cricket"}/>
            <Button name={"Cooking"}/>
            <Button name={"History"}/>
            <Button name={"Gadgets"}/>
            <Button name={"Mixes"}/>
            <Button name={"Lessons"}/>
            <Button name={"Valentine"}/>
            <Button name={"Drama"}/>
        </div>
    );
};

export default ButtonList;