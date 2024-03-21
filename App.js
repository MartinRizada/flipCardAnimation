import React, { useState } from 'react';
import {
	View, Text, Image, TouchableOpacity,
	StyleSheet
} from 'react-native';
import FlipCard from 'react-native-flip-card';

const App = () => {
	const [isFlipped, setIsFlipped] = useState(false);

	const toggleFlip = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<View style={styles.container}>
	
			<FlipCard
				style={[styles.card, styles.shadow]}
				friction={6}
				perspective={1000}
				flipHorizontal={true}
				flipVertical={false}
				flip={isFlipped}
				clickable={true}
			>
				{/* Front */}
				<View style={styles.imageContainer}>
					<Image
						source={require('./assets/front.png')}
						style={styles.image}
					/>
				</View>

				{/* Back */}
				<View style={styles.imageContainer}>
					<Image
						source={{
							uri:
								'https://media.geeksforgeeks.org/wp-content/uploads/20230816223732/geeksgforgeeks-logo.jpg'
						}}
						style={styles.image}
					/>
				</View>
			</FlipCard>

		
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 30,
	},
	heading: {
		marginBottom: 30,
		color: "green",
		fontSize: 30,
		fontWeight: "bold",
	},
	card: {
		width: 300,
		height: 200,
		borderRadius: 30,
		backgroundColor: 'grey',

		// To prevent shadow from overflowing 
		overflow: 'hidden',
	},
	shadow: {
		shadowColor: 'red',
		shadowOpacity: 1,
		shadowRadius: 15,
		shadowOffset: { width: 0, height: 0 },
	},
	imageContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: 4,
	},
	button: {
		backgroundColor: 'green',
		padding: "10px 30px 10px 30px",
		borderRadius: 5,
		marginTop: 20,
	},
	buttonText: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		color: "white",
	},
});

export default App;
