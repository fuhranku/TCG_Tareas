#version 330 core
// Vertex color (interpolated/fragment)
in vec3 vColor;
// Vertex texture position (interpolated/fragment)
in vec2 vTexPos;
// texture
uniform sampler2D image;

// Fragment Color
out vec4 color;

void main(){
	vec3 texColor = texture(image,vTexPos).xyz;
	vec3 negColor = vec3(1.0f-texColor.r,1.0f-texColor.g,1.0f-texColor.b);
	float grayScale = dot(texColor, vec3(0.2989,0.5870,0.1140));
   // color = vec4(vec3(grayScale),1.0f);
	color = vec4(negColor,1.0f);
}