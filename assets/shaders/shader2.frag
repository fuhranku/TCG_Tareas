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
    color = vec4(texture(image,vTexPos));
}