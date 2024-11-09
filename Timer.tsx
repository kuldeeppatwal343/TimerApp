import React, { useEffect, useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useStylesTimer } from './StylesTimer';

export function ComponentTimer() {
    const [numberOfTimer, setNumberOfTimer] = useState(2);
    const styles = useStylesTimer()
    const disabled = numberOfTimer === 5
    const handlePress = () =>{
        if (numberOfTimer < 5) {
            setNumberOfTimer(numberOfTimer + 1)
        }
    }
    return (
        <View style={styles.container}>
            <View>
                {Array.from({ length: numberOfTimer }, (_, index) => (
                    <SubComponent key={index} />
                ))}
        </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    disabled={disabled}
                    activeOpacity={0.7}
                    style={[styles.addButton, disabled && styles.disabledButton]}
                    onPress={() => handlePress()}
                >
                    <Text>Add more</Text>
                </TouchableOpacity>
            </View>
     </View>
    );
}
function SubComponent() {
    const [number, onChangeNumber] = React.useState(10);
    const [isRunning, setIsRunning] = useState(true);
    const btnTitle = isRunning ? 'Pause' : 'Resume'
    const styles = useStylesTimer()
    const mPauseBtn = isRunning ? styles.secondaryButton : styles.primaryButton;
    const pauseBtn = number === 0 ? styles.disabledButton : mPauseBtn;

    useEffect(() => {
        let interId: string | NodeJS.Timer;
        if (isRunning && number > 0) {
            interId = setInterval(() => {
                onChangeNumber((prevNumber) => {
                    if (prevNumber > 1) {
                        return prevNumber - 1;
                    } else {
                        clearInterval(interId);
                        setIsRunning(false); 
                        Alert.alert('Timer finish')
                        return 0;
                    }
                });
            }, 1000);
        }
        return () => clearInterval(interId); 
    }, [isRunning, number]);
    return (
        <View style={styles.subComponentContainer}>
            <TextInput
                style={styles.inputContainer}
                placeholder='enter timer'
                onChangeText={(n) => {
                    setIsRunning(true)
                    onChangeNumber(+n)
                }}
                value={number?.toString()}
            />
            <Text style={styles.numberText}>{number}</Text>
                <TouchableOpacity
                activeOpacity={0.7}
                disabled={number === 0}
                style={[styles.button, pauseBtn]}
                onPress={() => setIsRunning(!isRunning)}
                >
                <Text>{btnTitle}</Text>
                </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.7}
                disabled={number === 0}
                style={[styles.button, styles.resetButton, number === 0 && styles.disabledButton]}
                onPress={() => onChangeNumber(0)}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </View>
    )
}