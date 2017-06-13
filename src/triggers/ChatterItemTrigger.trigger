trigger ChatterItemTrigger on feeditem (after insert) {

	system.debug('chatter item trigger');
	list<EinsteinExample__e> examples = new list<EinsteinExample__e>();

	for (feeditem fi:trigger.new){

		if (fi.ParentId.getSObjectType() == VisionModel__c.SObjectType){
			//posting to a vision model is like asking for a prediction
			Vision.predictChatter(fi.Id);
		} else if (fi.ParentId.getSObjectType() == Label__c.SObjectType){
			//posting to a label means you're providing an example
			Vision.sendExampleEvent(fi.Id);
		}
	}

}