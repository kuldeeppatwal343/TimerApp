import { StyleSheet } from 'react-native';

export const useStylesTimer = () => {
        return StyleSheet.create({
            container: {
                flex: 1,
                alignItems: 'center',
                paddingBottom: 20,
            },
            buttonContainer: {
                flex: 1,
                alignItems: 'flex-end',
                flexDirection: 'row'
            },
            subComponentContainer: {
                flexDirection: 'row',
                alignItems: 'center',
                gap: 16,
            },
            inputContainer: {
                width: 100,
                height: 50,
                borderColor: '#cccccc',
                borderWidth: 1,
                borderRadius: 8,
                paddingHorizontal: 10,
                fontSize: 18,
            },
            sectionTitle: {
                fontSize: 24,
                fontWeight: '600',
            },
            sectionDescription: {
                marginTop: 8,
                fontSize: 18,
                fontWeight: '400',
            },
            highlight: {
                fontWeight: '700',
            },
            button: {
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 8,
                marginVertical: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 3,
                elevation: 5,
                alignItems: 'center',
            },
            primaryButton: {
                backgroundColor: '#4CAF50',
            },
            secondaryButton: {
                backgroundColor: '#FF5722',
            },
            resetButton: {
                backgroundColor: '#FF0000',
            },
            disabledButton: {
                backgroundColor: '#A9A9A9',
            },
            buttonText: {
                color: '#FFFFFF',
                fontSize: 16,
                fontWeight: 'bold',
            },
            numberText: {
                fontSize: 24,
                fontWeight: 'bold',
                color: '#333',
                textShadowColor: 'rgba(0, 0, 0, 0.25)',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 4,
                width: 30,
            },
            addButton: {
                backgroundColor: '#4CAF50', 
                paddingVertical: 12,
                paddingHorizontal: 30,
                borderRadius: 8,
                marginVertical: 10,
                alignItems: 'center',
            },
        });
};
