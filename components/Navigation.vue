<template>
	<nav class="fixed left-0 top-0 w-full pt-12 px-12">
		<div class="flex justify-between">
			<div class="left-links">
				<!-- socials -->
				<a class="inline-block mr-5" href="https://www.facebook.com/james.t.patton" target="_blank" rel="noopener noreferrer">
					<svg class="feather"><use xlink:href="~/assets/svg/feather-sprite.svg#facebook"/></svg>
				</a>
				<a class="inline-block mr-5" href="https://www.linkedin.com/in/jamestylerpatton/" target="_blank" rel="noopener noreferrer">
					<svg class="feather"><use xlink:href="~/assets/svg/feather-sprite.svg#linkedin"/></svg>
				</a>
				<a class="inline-block" href="https://github.com/jamestylerpatton" target="_blank" rel="noopener noreferrer">
					<svg class="feather"><use xlink:href="~/assets/svg/feather-sprite.svg#github"/></svg>
				</a>
			</div>

			<div class="right-links">
				<!-- RESUME -->
				<a class="mr-5" href="/patton-resume-20191023.pdf" target="_blank" rel="noopener noreferrer">
					Resume
				</a>
				<!-- EMAIL -->
				<a href="mailto:jamestylerpatton@gmail.com">
					Say Hi!
				</a>
			</div>
		</div>
	</nav>
</template>

<style scoped>
	nav{
		font-weight: 600;
		font-size: 0.8rem;
	}
	svg.feather{
		width: 20px;
		height: 20px;
		stroke: currentColor;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
	}
</style>
