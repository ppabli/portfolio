import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
	selector: 'app-background',
	templateUrl: './background.component.html',
	styleUrls: ['./background.component.scss']
})

export class BackgroundComponent {

	@ViewChild('background') root: ElementRef;

	renderer: Renderer2;

	constructor(private newRenderer: Renderer2) {

		this.renderer = newRenderer;

	}

	ngAfterViewInit() {

		this.initBubbles();

	}

	initBubbles() {

		let screenWidth: number = window.innerWidth;

		let bubbleCount: number = Math.round(screenWidth / 75);

		for (let bubble = 0; bubble < bubbleCount; bubble++) {

			setTimeout(() => {

				this.generateBubble();

			}, 1000);

		}

	}

	generateBubble() {

		let newBubble = this.renderer.createElement('div');

		this.renderer.addClass(newBubble, 'bubble');

		let maxSize = 200;
		let minSize = 10;
		let size = Math.random() * (maxSize - minSize) + minSize;

		let maxLeft = 90;
		let minLeft = 10;
		let left = Math.random() * (maxLeft - minLeft) + minLeft;

		let maxAnimation = 60;
		let minAnimation = 1;
		let animation = Math.random() * (maxAnimation - minAnimation) + minAnimation;

		this.renderer.setStyle(newBubble, 'left', left + '%')
		this.renderer.setStyle(newBubble, 'width', size + 'px')
		this.renderer.setStyle(newBubble, 'height', size + 'px')
		this.renderer.setStyle(newBubble, 'animation-duration', animation + 's')

		this.renderer.listen(newBubble, 'animationend', (event) => {

			this.renderer.removeChild(this.root.nativeElement, event.target);
			this.generateBubble();

		});

		this.renderer.appendChild(this.root.nativeElement, newBubble);

	}

}
