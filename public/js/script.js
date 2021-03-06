
function graph(data,canvas) {

	var classes = pv.nodes(data);

	var format = pv.Format.number();

	var vis = new pv.Panel()
//	.width(document.body.clientWidth)
//	.height(document.body.clientHeight)
//	.event("mousedown", pv.Behavior.pan())
	.event("mousewheel", pv.Behavior.zoom())
	.canvas(canvas);

 // document.location.href=

	var force = vis.add(pv.Layout.Force)
	      .nodes(followers.nodes)
	      .links(followers.links)
	      .springConstant(0.05)
	      .chargeConstant(-80)
	      .springLength(200);
	
	force.link.add(pv.Line);
    force.node.add(pv.Dot)
      .size(function(d){ return (d.linkDegree + 4) * Math.pow(this.scale, -1.5);})
//      .fillStyle(function(d){ return d.fix ? "brown" : colors(d.group);})
      .strokeStyle(function(){ return this.fillStyle().darker();})
      .lineWidth(1)
      .title(function(d){return d.nodeName;})
      .add(pv.Label).textAlign("center").text(function(n) {return n.nodeName})
      .event("mousedown", pv.Behavior.drag())
      .event("drag", force);	

	vis.render();
}
