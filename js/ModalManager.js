class ModalManager {
	constructor() {
		this.modals = {
			gmail: {
				modal: document.getElementById("gmail-modal"), 
				background: document.getElementById("gmail-background"),
				container: document.getElementById("gmail-container"),
				close: document.getElementById("gmail-close")
			},
			images: {
				modal: document.getElementById("images-modal"),
				background: document.getElementById("images-background"),
				container: document.getElementById("images-container"),
				close: document.getElementById("images-close")
			},
			cloud: {
				modal: document.getElementById("cloud-modal"),
				background: document.getElementById("cloud-background"),
				container: document.getElementById("cloud-container"),
				close: document.getElementById("cloud-close")
			},
			notifications: {
				modal: document.getElementById("notifications-modal"),
				background: document.getElementById("notifications-background"),
				container: document.getElementById("notifications-container"),
				close: document.getElementById("notifications-close")
			},
			profile: {
				modal: document.getElementById("profile-modal"),
				background: document.getElementById("profile-background"),
				container: document.getElementById("profile-container"),
				close: document.getElementById("profile-close")
			}
		};

		this.registerModals(
			Object.keys(this.modals).map(key => this.modals[key].container), 
			this.openHandler
		);

		this.registerModals(
			Object.keys(this.modals).map(key => this.modals[key].background), 
			this.closeHandler
		);

		this.registerModals(
			Object.keys(this.modals).map(key => this.modals[key].close), 
			this.closeHandler
		);
	}

	registerModals(modals, handler) {
		console.log(modals);
		modals.map(elem => elem.onclick = handler);
	}

	openHandler(e) {
		let id = e.srcElement.id;
		console.log(id);
		document.getElementById(id.split("-")[0] + "-modal").style.visibility = 'visible';
	}

	closeHandler(e) {
		let id = e.srcElement.id;
		console.log(id);
		document.getElementById(id.split("-")[0] + "-modal").style.visibility = 'hidden';
	}
}

new ModalManager(); 