import './ExploreContainer.css';
import { IonButton, IonRouterOutlet, IonImg } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
	return (
		<div className='container'>
			<div className='H1'>
				<h1 className='h1'>ALERTE CITOYEN</h1>
			</div>

			<div className='D-alerte'>
				<IonImg className='alerte' src='./assets/alerte.png' />
			</div>

			<a href='/page'>
				<IonButton color='dark'>ENTER</IonButton>
			</a>
		</div>
	);
};

export default ExploreContainer;
