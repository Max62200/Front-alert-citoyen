import {
	IonContent,
	IonList,
	IonCardTitle,
	IonButton,
	IonPage,
	IonCard,
	IonItem,
	IonLabel,
	IonInput,
	IonTextarea,
	IonCardSubtitle,
	IonCardContent,
} from '@ionic/react';
import './AddAlert.css';

const AddAlert: React.FC = () => {
	return (
		<IonPage>
			<IonContent fullscreen>
				<div className='container'>
					<div className='H2'>
						<h1 className='h2'>Créer une Alerte</h1>
					</div>
					<IonCard>
						<IonList className='col'>
							<IonItem className='ca-col'>
								<IonLabel className='txt'>Type D'Alerte :</IonLabel>
								<IonInput></IonInput>
							</IonItem>
							<IonItem className='ca-col'>
								<IonLabel className='txt'>Date :</IonLabel>
								<IonInput></IonInput>
							</IonItem>
							<IonItem className='ca-col'>
								<IonLabel className='txt'>Horaire :</IonLabel>
								<IonInput></IonInput>
							</IonItem>
							<IonItem className='ca-col'>
								<IonLabel className='txt'>Description :</IonLabel>
								<IonTextarea  className='txt3'></IonTextarea>
							</IonItem>
							<IonButton className='txt2' color='light'>
								Suivant
							</IonButton>
						</IonList>
					</IonCard>
					<a href='/page'>
						<IonButton  color='dark'>
							Retour
						</IonButton>
					</a>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default AddAlert;
