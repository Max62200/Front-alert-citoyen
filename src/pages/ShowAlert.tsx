import {
	IonContent,
	IonList,
	IonCardTitle,
	IonButton,
	IonPage,
	IonCard,
	IonThumbnail,
	IonLabel,
	IonInput,
	IonTextarea,
	IonImg,
	IonAvatar,
} from '@ionic/react';
import './ShowAlert.css';

const ShowAlert: React.FC = () => {
	return (
		<IonPage>
			<IonContent fullscreen>
				<div className='container'>
					<div className='H2'>
						<h1 className='h2'>Alerte</h1>
					</div>
					<div className='BG'>
						<div className='mg'>
							<IonImg className='img-size' src='./assets/avatar.png' />
						</div>
						<div className='mg1'>
							<h2 className='H22'>Peter MC Fly</h2>
							<h3 className='H3'>Incendie</h3>
							<p className='P1'>Incendie sur la voie en cours pompier sur place</p>
							<h3 className='H33'>Adresse</h3>
							<p className='P1'>18 rue des mouettes 62360 Ecault</p>
							<IonImg className='img-size2' src='./assets/accident.jpg' />
							<a href='/local2'>
								<IonButton className='btn2'  color='light'>
									CARTE
								</IonButton>
							</a>
						</div>
					</div>{' '}
					<a href='/list'>
						<IonButton color='dark'>Retour</IonButton>
					</a>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default ShowAlert;
