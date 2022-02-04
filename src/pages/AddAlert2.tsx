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
import './AddAlert2.css';

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
								<IonLabel className='txt'>Nom :</IonLabel>
								<IonInput></IonInput>
							</IonItem>
							<IonItem className='ca-col'>
								<IonLabel className='txt'>Prenom :</IonLabel>
								<IonInput></IonInput>
							</IonItem>
							<IonItem className='ca-col'>
								<IonLabel className='txt'>Email :</IonLabel>
								<IonInput></IonInput>
							</IonItem>
							<IonItem className='ca-col'>
								<IonLabel className='txt'>Téléphone :</IonLabel>
								<IonInput></IonInput>
							</IonItem>
							<IonItem className='ca-col'>
								<IonLabel className='txt'>Adresse :</IonLabel>
								<IonInput></IonInput>
							</IonItem>
							<IonItem className='ca-col'>
								<IonLabel className='txt'>Ville :</IonLabel>
								<IonInput></IonInput>
							</IonItem>
							<IonItem className='ca-col'>
								<IonLabel className='txt'>CP :</IonLabel>
								<IonInput></IonInput>
							</IonItem>
																		
							<IonButton className='txt2' color='light'>
								Suivant
							</IonButton>
						</IonList>
					</IonCard>
					<a href='/addalert'>
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
