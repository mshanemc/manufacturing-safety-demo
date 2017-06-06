trigger TriggerForHardHatModelPredictions on FeedComment (after insert) {

	//EinsteinVision__c EV = EinsteinVision__c.getInstance();
	//list<SafetyViolation__e> violations = new list<SafetyViolation__e>();

	//for (FeedComment FC: trigger.new){
	//	if (fc.ParentId == 'a43B00000004H0bIAE' && FC.CommentType == 'TextComment' && fc.CreatedById == EV.LocalEinsteinUser__c){
	//		SafetyViolation__e sv = new SafetyViolation__e();
	//		if (fc.CommentBody.contains('HasHardHat')){
	//			system.debug('labeled as HasHardHat');
	//			sv.safe__c = true;
	//		} else if (fc.CommentBody.contains('NoHardHat')){
	//			sv.safe__c = false;
	//			system.debug('labeled as NoHardHat');
	//		}
	//		violations.add(sv);
	//	} else {
	//		system.debug('post didnt meet qualifications');
	//	}
	//}

	//EventBus.publish(violations);
}