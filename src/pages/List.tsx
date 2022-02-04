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
	IonTitle,
	IonAvatar,
} from '@ionic/react';
import './List.css';

const List: React.FC = () => {
	return (
		<IonPage>
			<IonContent fullscreen>
				<div className='container'>
					<div className='H2'>
						<h1 className='h2'>Alerte</h1>
					</div>
					<IonList>
						<IonItem>
							<IonAvatar slot='start'>
								<img src='./assets/avatar.png' />
							</IonAvatar>
							<IonLabel>
								<h2>Peter MC Fly</h2>
								<h3>Incendie</h3>
								<p>Incendie sur la voie en cours pompier sur place</p>
								<div className='txt'>
									<IonButton color='primary' href='./ShowAlert'>Voir</IonButton>
								</div>
							</IonLabel>
						</IonItem>
						<IonItem>
							<IonAvatar slot='start'>
								<img src='./assets/avatar.png' />
							</IonAvatar>
							<IonLabel>
								<h2>Peter MC Fly</h2>
								<h3>Incendie</h3>
								<p>Incendie sur la voie en cours pompier sur place</p>
								<div className='txt'>
									<IonButton  href='./ShowAlert' color='primary'>Voir</IonButton>
								</div>
							</IonLabel>
						</IonItem>
						<IonItem>
							<IonAvatar slot='start'>
								<img src='./assets/avatar.png' />
							</IonAvatar>
							<IonLabel>
								<h2>Peter MC Fly</h2>
								<h3>Incendie</h3>
								<p>Incendie sur la voie en cours pompier sur place</p>
								<div className='txt'>
									<IonButton  href='./ShowAlert' color='primary'>Voir</IonButton>
								</div>
							</IonLabel>
						</IonItem>
						<IonItem>
							<IonAvatar slot='start'>
								<img src='./assets/avatar.png' />
							</IonAvatar>
							<IonLabel>
								<h2>Peter MC Fly</h2>
								<h3>Incendie</h3>
								<p>Incendie sur la voie en cours pompier sur place</p>
								<div className='txt'>
									<IonButton  href='./ShowAlert' color='primary'>Voir</IonButton>
								</div>
							</IonLabel>
						</IonItem>
						<IonItem>
							<IonAvatar slot='start'>
								<img src='./assets/avatar.png' />
							</IonAvatar>
							<IonLabel>
								<h2>Peter MC Fly</h2>
								<h3>Incendie</h3>
								<p>Incendie sur la voie en cours pompier sur place</p>
								<div className='txt'>
									<IonButton  href='./ShowAlert' color='primary'>Voir</IonButton>
								</div>
							</IonLabel>
						</IonItem>
					</IonList>
					<div className='mg'>
						<a href='/page'>
							<IonButton size='small' color='dark'>
								Retour
							</IonButton>
						</a>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default List;
