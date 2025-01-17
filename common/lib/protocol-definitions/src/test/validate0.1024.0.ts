/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import * as old from "@fluidframework/protocol-definitions-0.1024.0";
import * as current from "../index";

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ConnectionMode": {"forwardCompat": false}
*/
declare function get_old_ConnectionMode(): old.ConnectionMode;
declare function use_current_ConnectionMode(use: current.ConnectionMode);
use_current_ConnectionMode(get_old_ConnectionMode());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ConnectionMode": {"backCompat": false}
*/
declare function get_current_ConnectionMode(): current.ConnectionMode;
declare function use_old_ConnectionMode(use: old.ConnectionMode);
use_old_ConnectionMode(get_current_ConnectionMode());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "FileMode": {"forwardCompat": false}
*/
declare function get_old_FileMode(): old.FileMode;
declare function use_current_FileMode(use: current.FileMode);
use_current_FileMode(get_old_FileMode());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "FileMode": {"backCompat": false}
*/
declare function get_current_FileMode(): current.FileMode;
declare function use_old_FileMode(use: old.FileMode);
use_old_FileMode(get_current_FileMode());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IActorClient": {"forwardCompat": false}
*/
declare function get_old_IActorClient(): old.IActorClient;
declare function use_current_IActorClient(use: current.IActorClient);
use_current_IActorClient(get_old_IActorClient());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IActorClient": {"backCompat": false}
*/
declare function get_current_IActorClient(): current.IActorClient;
declare function use_old_IActorClient(use: old.IActorClient);
use_old_IActorClient(get_current_IActorClient());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IApprovedProposal": {"forwardCompat": false}
*/
declare function get_old_IApprovedProposal(): old.IApprovedProposal;
declare function use_current_IApprovedProposal(use: current.IApprovedProposal);
use_current_IApprovedProposal(get_old_IApprovedProposal());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IApprovedProposal": {"backCompat": false}
*/
declare function get_current_IApprovedProposal(): current.IApprovedProposal;
declare function use_old_IApprovedProposal(use: old.IApprovedProposal);
use_old_IApprovedProposal(get_current_IApprovedProposal());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IAttachment": {"forwardCompat": false}
*/
declare function get_old_IAttachment(): old.IAttachment;
declare function use_current_IAttachment(use: current.IAttachment);
use_current_IAttachment(get_old_IAttachment());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IAttachment": {"backCompat": false}
*/
declare function get_current_IAttachment(): current.IAttachment;
declare function use_old_IAttachment(use: old.IAttachment);
use_old_IAttachment(get_current_IAttachment());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IBlob": {"forwardCompat": false}
*/
declare function get_old_IBlob(): old.IBlob;
declare function use_current_IBlob(use: current.IBlob);
use_current_IBlob(get_old_IBlob());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IBlob": {"backCompat": false}
*/
declare function get_current_IBlob(): current.IBlob;
declare function use_old_IBlob(use: old.IBlob);
use_old_IBlob(get_current_IBlob());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IBranchOrigin": {"forwardCompat": false}
*/
declare function get_old_IBranchOrigin(): old.IBranchOrigin;
declare function use_current_IBranchOrigin(use: current.IBranchOrigin);
use_current_IBranchOrigin(get_old_IBranchOrigin());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IBranchOrigin": {"backCompat": false}
*/
declare function get_current_IBranchOrigin(): current.IBranchOrigin;
declare function use_old_IBranchOrigin(use: old.IBranchOrigin);
use_old_IBranchOrigin(get_current_IBranchOrigin());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ICapabilities": {"forwardCompat": false}
*/
declare function get_old_ICapabilities(): old.ICapabilities;
declare function use_current_ICapabilities(use: current.ICapabilities);
use_current_ICapabilities(get_old_ICapabilities());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ICapabilities": {"backCompat": false}
*/
declare function get_current_ICapabilities(): current.ICapabilities;
declare function use_old_ICapabilities(use: old.ICapabilities);
use_old_ICapabilities(get_current_ICapabilities());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IClient": {"forwardCompat": false}
*/
declare function get_old_IClient(): old.IClient;
declare function use_current_IClient(use: current.IClient);
use_current_IClient(get_old_IClient());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IClient": {"backCompat": false}
*/
declare function get_current_IClient(): current.IClient;
declare function use_old_IClient(use: old.IClient);
use_old_IClient(get_current_IClient());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IClientConfiguration": {"forwardCompat": false}
*/
declare function get_old_IClientConfiguration(): old.IClientConfiguration;
declare function use_current_IClientConfiguration(use: current.IClientConfiguration);
use_current_IClientConfiguration(get_old_IClientConfiguration());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IClientConfiguration": {"backCompat": false}
*/
declare function get_current_IClientConfiguration(): current.IClientConfiguration;
declare function use_old_IClientConfiguration(use: old.IClientConfiguration);
use_old_IClientConfiguration(get_current_IClientConfiguration());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IClientDetails": {"forwardCompat": false}
*/
declare function get_old_IClientDetails(): old.IClientDetails;
declare function use_current_IClientDetails(use: current.IClientDetails);
use_current_IClientDetails(get_old_IClientDetails());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IClientDetails": {"backCompat": false}
*/
declare function get_current_IClientDetails(): current.IClientDetails;
declare function use_old_IClientDetails(use: old.IClientDetails);
use_old_IClientDetails(get_current_IClientDetails());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IClientJoin": {"forwardCompat": false}
*/
declare function get_old_IClientJoin(): old.IClientJoin;
declare function use_current_IClientJoin(use: current.IClientJoin);
use_current_IClientJoin(get_old_IClientJoin());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IClientJoin": {"backCompat": false}
*/
declare function get_current_IClientJoin(): current.IClientJoin;
declare function use_old_IClientJoin(use: old.IClientJoin);
use_old_IClientJoin(get_current_IClientJoin());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ICommittedProposal": {"forwardCompat": false}
*/
declare function get_old_ICommittedProposal(): old.ICommittedProposal;
declare function use_current_ICommittedProposal(use: current.ICommittedProposal);
use_current_ICommittedProposal(get_old_ICommittedProposal());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ICommittedProposal": {"backCompat": false}
*/
declare function get_current_ICommittedProposal(): current.ICommittedProposal;
declare function use_old_ICommittedProposal(use: old.ICommittedProposal);
use_old_ICommittedProposal(get_current_ICommittedProposal());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IConnect": {"forwardCompat": false}
*/
declare function get_old_IConnect(): old.IConnect;
declare function use_current_IConnect(use: current.IConnect);
use_current_IConnect(get_old_IConnect());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IConnect": {"backCompat": false}
*/
declare function get_current_IConnect(): current.IConnect;
declare function use_old_IConnect(use: old.IConnect);
use_old_IConnect(get_current_IConnect());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IConnected": {"forwardCompat": false}
*/
declare function get_old_IConnected(): old.IConnected;
declare function use_current_IConnected(use: current.IConnected);
use_current_IConnected(get_old_IConnected());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IConnected": {"backCompat": false}
*/
declare function get_current_IConnected(): current.IConnected;
declare function use_old_IConnected(use: old.IConnected);
use_old_IConnected(get_current_IConnected());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ICreateBlobResponse": {"forwardCompat": false}
*/
declare function get_old_ICreateBlobResponse(): old.ICreateBlobResponse;
declare function use_current_ICreateBlobResponse(use: current.ICreateBlobResponse);
use_current_ICreateBlobResponse(get_old_ICreateBlobResponse());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ICreateBlobResponse": {"backCompat": false}
declare function get_current_ICreateBlobResponse(): current.ICreateBlobResponse;
declare function use_old_ICreateBlobResponse(use: old.ICreateBlobResponse);
use_old_ICreateBlobResponse(get_current_ICreateBlobResponse());
*/

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IDocumentAttributes": {"forwardCompat": false}
*/
declare function get_old_IDocumentAttributes(): old.IDocumentAttributes;
declare function use_current_IDocumentAttributes(use: current.IDocumentAttributes);
use_current_IDocumentAttributes(get_old_IDocumentAttributes());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IDocumentAttributes": {"backCompat": false}
*/
declare function get_current_IDocumentAttributes(): current.IDocumentAttributes;
declare function use_old_IDocumentAttributes(use: old.IDocumentAttributes);
use_old_IDocumentAttributes(get_current_IDocumentAttributes());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IDocumentMessage": {"forwardCompat": false}
*/
declare function get_old_IDocumentMessage(): old.IDocumentMessage;
declare function use_current_IDocumentMessage(use: current.IDocumentMessage);
use_current_IDocumentMessage(get_old_IDocumentMessage());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IDocumentMessage": {"backCompat": false}
*/
declare function get_current_IDocumentMessage(): current.IDocumentMessage;
declare function use_old_IDocumentMessage(use: old.IDocumentMessage);
use_old_IDocumentMessage(get_current_IDocumentMessage());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IDocumentSystemMessage": {"forwardCompat": false}
*/
declare function get_old_IDocumentSystemMessage(): old.IDocumentSystemMessage;
declare function use_current_IDocumentSystemMessage(use: current.IDocumentSystemMessage);
use_current_IDocumentSystemMessage(get_old_IDocumentSystemMessage());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IDocumentSystemMessage": {"backCompat": false}
*/
declare function get_current_IDocumentSystemMessage(): current.IDocumentSystemMessage;
declare function use_old_IDocumentSystemMessage(use: old.IDocumentSystemMessage);
use_old_IDocumentSystemMessage(get_current_IDocumentSystemMessage());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IHelpMessage": {"forwardCompat": false}
*/
declare function get_old_IHelpMessage(): old.IHelpMessage;
declare function use_current_IHelpMessage(use: current.IHelpMessage);
use_current_IHelpMessage(get_old_IHelpMessage());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IHelpMessage": {"backCompat": false}
*/
declare function get_current_IHelpMessage(): current.IHelpMessage;
declare function use_old_IHelpMessage(use: old.IHelpMessage);
use_old_IHelpMessage(get_current_IHelpMessage());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "INack": {"forwardCompat": false}
*/
declare function get_old_INack(): old.INack;
declare function use_current_INack(use: current.INack);
use_current_INack(get_old_INack());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "INack": {"backCompat": false}
*/
declare function get_current_INack(): current.INack;
declare function use_old_INack(use: old.INack);
use_old_INack(get_current_INack());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "INackContent": {"forwardCompat": false}
*/
declare function get_old_INackContent(): old.INackContent;
declare function use_current_INackContent(use: current.INackContent);
use_current_INackContent(get_old_INackContent());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "INackContent": {"backCompat": false}
*/
declare function get_current_INackContent(): current.INackContent;
declare function use_old_INackContent(use: old.INackContent);
use_old_INackContent(get_current_INackContent());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IPendingProposal": {"forwardCompat": false}
*/
declare function get_old_IPendingProposal(): old.IPendingProposal;
declare function use_current_IPendingProposal(use: current.IPendingProposal);
use_current_IPendingProposal(get_old_IPendingProposal());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IPendingProposal": {"backCompat": false}
*/
declare function get_current_IPendingProposal(): current.IPendingProposal;
declare function use_old_IPendingProposal(use: old.IPendingProposal);
use_old_IPendingProposal(get_current_IPendingProposal());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IProcessMessageResult": {"forwardCompat": false}
*/
declare function get_old_IProcessMessageResult(): old.IProcessMessageResult;
declare function use_current_IProcessMessageResult(use: current.IProcessMessageResult);
use_current_IProcessMessageResult(get_old_IProcessMessageResult());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IProcessMessageResult": {"backCompat": false}
*/
declare function get_current_IProcessMessageResult(): current.IProcessMessageResult;
declare function use_old_IProcessMessageResult(use: old.IProcessMessageResult);
use_old_IProcessMessageResult(get_current_IProcessMessageResult());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IProposal": {"forwardCompat": false}
*/
declare function get_old_IProposal(): old.IProposal;
declare function use_current_IProposal(use: current.IProposal);
use_current_IProposal(get_old_IProposal());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IProposal": {"backCompat": false}
*/
declare function get_current_IProposal(): current.IProposal;
declare function use_old_IProposal(use: old.IProposal);
use_old_IProposal(get_current_IProposal());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IProtocolState": {"forwardCompat": false}
*/
declare function get_old_IProtocolState(): old.IProtocolState;
declare function use_current_IProtocolState(use: current.IProtocolState);
use_current_IProtocolState(get_old_IProtocolState());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IProtocolState": {"backCompat": false}
*/
declare function get_current_IProtocolState(): current.IProtocolState;
declare function use_old_IProtocolState(use: old.IProtocolState);
use_old_IProtocolState(get_current_IProtocolState());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IQueueMessage": {"forwardCompat": false}
*/
declare function get_old_IQueueMessage(): old.IQueueMessage;
declare function use_current_IQueueMessage(use: current.IQueueMessage);
use_current_IQueueMessage(get_old_IQueueMessage());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IQueueMessage": {"backCompat": false}
*/
declare function get_current_IQueueMessage(): current.IQueueMessage;
declare function use_old_IQueueMessage(use: old.IQueueMessage);
use_old_IQueueMessage(get_current_IQueueMessage());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IQuorum": {"forwardCompat": false}
declare function get_old_IQuorum(): old.IQuorum;
declare function use_current_IQuorum(use: current.IQuorum);
use_current_IQuorum(get_old_IQuorum());
*/

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IQuorum": {"backCompat": false}
*/
declare function get_current_IQuorum(): current.IQuorum;
declare function use_old_IQuorum(use: old.IQuorum);
use_old_IQuorum(get_current_IQuorum());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IQuorumEvents": {"forwardCompat": false}
*/
declare function get_old_IQuorumEvents(): old.IQuorumEvents;
declare function use_current_IQuorumEvents(use: current.IQuorumEvents);
use_current_IQuorumEvents(get_old_IQuorumEvents());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IQuorumEvents": {"backCompat": false}
*/
declare function get_current_IQuorumEvents(): current.IQuorumEvents;
declare function use_old_IQuorumEvents(use: old.IQuorumEvents);
use_old_IQuorumEvents(get_current_IQuorumEvents());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISequencedClient": {"forwardCompat": false}
*/
declare function get_old_ISequencedClient(): old.ISequencedClient;
declare function use_current_ISequencedClient(use: current.ISequencedClient);
use_current_ISequencedClient(get_old_ISequencedClient());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISequencedClient": {"backCompat": false}
*/
declare function get_current_ISequencedClient(): current.ISequencedClient;
declare function use_old_ISequencedClient(use: old.ISequencedClient);
use_old_ISequencedClient(get_current_ISequencedClient());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISequencedDocumentAugmentedMessage": {"forwardCompat": false}
*/
declare function get_old_ISequencedDocumentAugmentedMessage(): old.ISequencedDocumentAugmentedMessage;
declare function use_current_ISequencedDocumentAugmentedMessage(use: current.ISequencedDocumentAugmentedMessage);
use_current_ISequencedDocumentAugmentedMessage(get_old_ISequencedDocumentAugmentedMessage());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISequencedDocumentAugmentedMessage": {"backCompat": false}
*/
declare function get_current_ISequencedDocumentAugmentedMessage(): current.ISequencedDocumentAugmentedMessage;
declare function use_old_ISequencedDocumentAugmentedMessage(use: old.ISequencedDocumentAugmentedMessage);
use_old_ISequencedDocumentAugmentedMessage(get_current_ISequencedDocumentAugmentedMessage());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISequencedDocumentMessage": {"forwardCompat": false}
*/
declare function get_old_ISequencedDocumentMessage(): old.ISequencedDocumentMessage;
declare function use_current_ISequencedDocumentMessage(use: current.ISequencedDocumentMessage);
use_current_ISequencedDocumentMessage(get_old_ISequencedDocumentMessage());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISequencedDocumentMessage": {"backCompat": false}
*/
declare function get_current_ISequencedDocumentMessage(): current.ISequencedDocumentMessage;
declare function use_old_ISequencedDocumentMessage(use: old.ISequencedDocumentMessage);
use_old_ISequencedDocumentMessage(get_current_ISequencedDocumentMessage());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISequencedDocumentSystemMessage": {"forwardCompat": false}
*/
declare function get_old_ISequencedDocumentSystemMessage(): old.ISequencedDocumentSystemMessage;
declare function use_current_ISequencedDocumentSystemMessage(use: current.ISequencedDocumentSystemMessage);
use_current_ISequencedDocumentSystemMessage(get_old_ISequencedDocumentSystemMessage());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISequencedDocumentSystemMessage": {"backCompat": false}
*/
declare function get_current_ISequencedDocumentSystemMessage(): current.ISequencedDocumentSystemMessage;
declare function use_old_ISequencedDocumentSystemMessage(use: old.ISequencedDocumentSystemMessage);
use_old_ISequencedDocumentSystemMessage(get_current_ISequencedDocumentSystemMessage());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISequencedProposal": {"forwardCompat": false}
*/
declare function get_old_ISequencedProposal(): old.ISequencedProposal;
declare function use_current_ISequencedProposal(use: current.ISequencedProposal);
use_current_ISequencedProposal(get_old_ISequencedProposal());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISequencedProposal": {"backCompat": false}
*/
declare function get_current_ISequencedProposal(): current.ISequencedProposal;
declare function use_old_ISequencedProposal(use: old.ISequencedProposal);
use_old_ISequencedProposal(get_current_ISequencedProposal());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IServerError": {"forwardCompat": false}
*/
declare function get_old_IServerError(): old.IServerError;
declare function use_current_IServerError(use: current.IServerError);
use_current_IServerError(get_old_IServerError());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IServerError": {"backCompat": false}
*/
declare function get_current_IServerError(): current.IServerError;
declare function use_old_IServerError(use: old.IServerError);
use_old_IServerError(get_current_IServerError());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISignalClient": {"forwardCompat": false}
*/
declare function get_old_ISignalClient(): old.ISignalClient;
declare function use_current_ISignalClient(use: current.ISignalClient);
use_current_ISignalClient(get_old_ISignalClient());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISignalClient": {"backCompat": false}
*/
declare function get_current_ISignalClient(): current.ISignalClient;
declare function use_old_ISignalClient(use: old.ISignalClient);
use_old_ISignalClient(get_current_ISignalClient());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISignalMessage": {"forwardCompat": false}
*/
declare function get_old_ISignalMessage(): old.ISignalMessage;
declare function use_current_ISignalMessage(use: current.ISignalMessage);
use_current_ISignalMessage(get_old_ISignalMessage());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISignalMessage": {"backCompat": false}
*/
declare function get_current_ISignalMessage(): current.ISignalMessage;
declare function use_old_ISignalMessage(use: old.ISignalMessage);
use_old_ISignalMessage(get_current_ISignalMessage());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISnapshotTree": {"forwardCompat": false}
*/
declare function get_old_ISnapshotTree(): old.ISnapshotTree;
declare function use_current_ISnapshotTree(use: current.ISnapshotTree);
use_current_ISnapshotTree(get_old_ISnapshotTree());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISnapshotTree": {"backCompat": false}
*/
declare function get_current_ISnapshotTree(): current.ISnapshotTree;
declare function use_old_ISnapshotTree(use: old.ISnapshotTree);
use_old_ISnapshotTree(get_current_ISnapshotTree());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISnapshotTreeEx": {"forwardCompat": false}
*/
declare function get_old_ISnapshotTreeEx(): old.ISnapshotTreeEx;
declare function use_current_ISnapshotTreeEx(use: current.ISnapshotTreeEx);
use_current_ISnapshotTreeEx(get_old_ISnapshotTreeEx());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISnapshotTreeEx": {"backCompat": false}
*/
declare function get_current_ISnapshotTreeEx(): current.ISnapshotTreeEx;
declare function use_old_ISnapshotTreeEx(use: old.ISnapshotTreeEx);
use_old_ISnapshotTreeEx(get_current_ISnapshotTreeEx());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryAck": {"forwardCompat": false}
*/
declare function get_old_ISummaryAck(): old.ISummaryAck;
declare function use_current_ISummaryAck(use: current.ISummaryAck);
use_current_ISummaryAck(get_old_ISummaryAck());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryAck": {"backCompat": false}
*/
declare function get_current_ISummaryAck(): current.ISummaryAck;
declare function use_old_ISummaryAck(use: old.ISummaryAck);
use_old_ISummaryAck(get_current_ISummaryAck());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryAttachment": {"forwardCompat": false}
declare function get_old_ISummaryAttachment(): old.ISummaryAttachment;
declare function use_current_ISummaryAttachment(use: current.ISummaryAttachment);
use_current_ISummaryAttachment(get_old_ISummaryAttachment());
*/

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryAttachment": {"backCompat": false}
declare function get_current_ISummaryAttachment(): current.ISummaryAttachment;
declare function use_old_ISummaryAttachment(use: old.ISummaryAttachment);
use_old_ISummaryAttachment(get_current_ISummaryAttachment());
*/

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryAuthor": {"forwardCompat": false}
*/
declare function get_old_ISummaryAuthor(): old.ISummaryAuthor;
declare function use_current_ISummaryAuthor(use: current.ISummaryAuthor);
use_current_ISummaryAuthor(get_old_ISummaryAuthor());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryAuthor": {"backCompat": false}
*/
declare function get_current_ISummaryAuthor(): current.ISummaryAuthor;
declare function use_old_ISummaryAuthor(use: old.ISummaryAuthor);
use_old_ISummaryAuthor(get_current_ISummaryAuthor());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryBlob": {"forwardCompat": false}
declare function get_old_ISummaryBlob(): old.ISummaryBlob;
declare function use_current_ISummaryBlob(use: current.ISummaryBlob);
use_current_ISummaryBlob(get_old_ISummaryBlob());
*/

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryBlob": {"backCompat": false}
declare function get_current_ISummaryBlob(): current.ISummaryBlob;
declare function use_old_ISummaryBlob(use: old.ISummaryBlob);
use_old_ISummaryBlob(get_current_ISummaryBlob());
*/

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryCommitter": {"forwardCompat": false}
*/
declare function get_old_ISummaryCommitter(): old.ISummaryCommitter;
declare function use_current_ISummaryCommitter(use: current.ISummaryCommitter);
use_current_ISummaryCommitter(get_old_ISummaryCommitter());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryCommitter": {"backCompat": false}
*/
declare function get_current_ISummaryCommitter(): current.ISummaryCommitter;
declare function use_old_ISummaryCommitter(use: old.ISummaryCommitter);
use_old_ISummaryCommitter(get_current_ISummaryCommitter());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryConfiguration": {"forwardCompat": false}
*/
declare function get_old_ISummaryConfiguration(): old.ISummaryConfiguration;
declare function use_current_ISummaryConfiguration(use: current.ISummaryConfiguration);
use_current_ISummaryConfiguration(get_old_ISummaryConfiguration());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryConfiguration": {"backCompat": false}
*/
declare function get_current_ISummaryConfiguration(): current.ISummaryConfiguration;
declare function use_old_ISummaryConfiguration(use: old.ISummaryConfiguration);
use_old_ISummaryConfiguration(get_current_ISummaryConfiguration());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryContent": {"forwardCompat": false}
*/
declare function get_old_ISummaryContent(): old.ISummaryContent;
declare function use_current_ISummaryContent(use: current.ISummaryContent);
use_current_ISummaryContent(get_old_ISummaryContent());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryContent": {"backCompat": false}
*/
declare function get_current_ISummaryContent(): current.ISummaryContent;
declare function use_old_ISummaryContent(use: old.ISummaryContent);
use_old_ISummaryContent(get_current_ISummaryContent());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryHandle": {"forwardCompat": false}
declare function get_old_ISummaryHandle(): old.ISummaryHandle;
declare function use_current_ISummaryHandle(use: current.ISummaryHandle);
use_current_ISummaryHandle(get_old_ISummaryHandle());
*/

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryHandle": {"backCompat": false}
declare function get_current_ISummaryHandle(): current.ISummaryHandle;
declare function use_old_ISummaryHandle(use: old.ISummaryHandle);
use_old_ISummaryHandle(get_current_ISummaryHandle());
*/

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryNack": {"forwardCompat": false}
*/
declare function get_old_ISummaryNack(): old.ISummaryNack;
declare function use_current_ISummaryNack(use: current.ISummaryNack);
use_current_ISummaryNack(get_old_ISummaryNack());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryNack": {"backCompat": false}
*/
declare function get_current_ISummaryNack(): current.ISummaryNack;
declare function use_old_ISummaryNack(use: old.ISummaryNack);
use_old_ISummaryNack(get_current_ISummaryNack());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryProposal": {"forwardCompat": false}
*/
declare function get_old_ISummaryProposal(): old.ISummaryProposal;
declare function use_current_ISummaryProposal(use: current.ISummaryProposal);
use_current_ISummaryProposal(get_old_ISummaryProposal());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryProposal": {"backCompat": false}
*/
declare function get_current_ISummaryProposal(): current.ISummaryProposal;
declare function use_old_ISummaryProposal(use: old.ISummaryProposal);
use_old_ISummaryProposal(get_current_ISummaryProposal());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryTokenClaims": {"forwardCompat": false}
*/
declare function get_old_ISummaryTokenClaims(): old.ISummaryTokenClaims;
declare function use_current_ISummaryTokenClaims(use: current.ISummaryTokenClaims);
use_current_ISummaryTokenClaims(get_old_ISummaryTokenClaims());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryTokenClaims": {"backCompat": false}
*/
declare function get_current_ISummaryTokenClaims(): current.ISummaryTokenClaims;
declare function use_old_ISummaryTokenClaims(use: old.ISummaryTokenClaims);
use_old_ISummaryTokenClaims(get_current_ISummaryTokenClaims());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryTree": {"forwardCompat": false}
declare function get_old_ISummaryTree(): old.ISummaryTree;
declare function use_current_ISummaryTree(use: current.ISummaryTree);
use_current_ISummaryTree(get_old_ISummaryTree());
*/

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ISummaryTree": {"backCompat": false}
declare function get_current_ISummaryTree(): current.ISummaryTree;
declare function use_old_ISummaryTree(use: old.ISummaryTree);
use_old_ISummaryTree(get_current_ISummaryTree());
*/

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ITokenClaims": {"forwardCompat": false}
*/
declare function get_old_ITokenClaims(): old.ITokenClaims;
declare function use_current_ITokenClaims(use: current.ITokenClaims);
use_current_ITokenClaims(get_old_ITokenClaims());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ITokenClaims": {"backCompat": false}
*/
declare function get_current_ITokenClaims(): current.ITokenClaims;
declare function use_old_ITokenClaims(use: old.ITokenClaims);
use_old_ITokenClaims(get_current_ITokenClaims());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ITokenProvider": {"forwardCompat": false}
*/
declare function get_old_ITokenProvider(): old.ITokenProvider;
declare function use_current_ITokenProvider(use: current.ITokenProvider);
use_current_ITokenProvider(get_old_ITokenProvider());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ITokenProvider": {"backCompat": false}
*/
declare function get_current_ITokenProvider(): current.ITokenProvider;
declare function use_old_ITokenProvider(use: old.ITokenProvider);
use_old_ITokenProvider(get_current_ITokenProvider());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ITokenService": {"forwardCompat": false}
*/
declare function get_old_ITokenService(): old.ITokenService;
declare function use_current_ITokenService(use: current.ITokenService);
use_current_ITokenService(get_old_ITokenService());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ITokenService": {"backCompat": false}
*/
declare function get_current_ITokenService(): current.ITokenService;
declare function use_old_ITokenService(use: old.ITokenService);
use_old_ITokenService(get_current_ITokenService());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ITrace": {"forwardCompat": false}
*/
declare function get_old_ITrace(): old.ITrace;
declare function use_current_ITrace(use: current.ITrace);
use_current_ITrace(get_old_ITrace());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ITrace": {"backCompat": false}
*/
declare function get_current_ITrace(): current.ITrace;
declare function use_old_ITrace(use: old.ITrace);
use_old_ITrace(get_current_ITrace());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ITree": {"forwardCompat": false}
*/
declare function get_old_ITree(): old.ITree;
declare function use_current_ITree(use: current.ITree);
use_current_ITree(get_old_ITree());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ITree": {"backCompat": false}
*/
declare function get_current_ITree(): current.ITree;
declare function use_old_ITree(use: old.ITree);
use_old_ITree(get_current_ITree());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ITreeEntry": {"forwardCompat": false}
*/
declare function get_old_ITreeEntry(): old.ITreeEntry;
declare function use_current_ITreeEntry(use: current.ITreeEntry);
use_current_ITreeEntry(get_old_ITreeEntry());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ITreeEntry": {"backCompat": false}
*/
declare function get_current_ITreeEntry(): current.ITreeEntry;
declare function use_old_ITreeEntry(use: old.ITreeEntry);
use_old_ITreeEntry(get_current_ITreeEntry());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IUploadedSummaryDetails": {"forwardCompat": false}
*/
declare function get_old_IUploadedSummaryDetails(): old.IUploadedSummaryDetails;
declare function use_current_IUploadedSummaryDetails(use: current.IUploadedSummaryDetails);
use_current_IUploadedSummaryDetails(get_old_IUploadedSummaryDetails());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IUploadedSummaryDetails": {"backCompat": false}
*/
declare function get_current_IUploadedSummaryDetails(): current.IUploadedSummaryDetails;
declare function use_old_IUploadedSummaryDetails(use: old.IUploadedSummaryDetails);
use_old_IUploadedSummaryDetails(get_current_IUploadedSummaryDetails());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IUser": {"forwardCompat": false}
*/
declare function get_old_IUser(): old.IUser;
declare function use_current_IUser(use: current.IUser);
use_current_IUser(get_old_IUser());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IUser": {"backCompat": false}
*/
declare function get_current_IUser(): current.IUser;
declare function use_old_IUser(use: old.IUser);
use_old_IUser(get_current_IUser());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "IVersion": {"forwardCompat": false}
*/
declare function get_old_IVersion(): old.IVersion;
declare function use_current_IVersion(use: current.IVersion);
use_current_IVersion(get_old_IVersion());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "IVersion": {"backCompat": false}
*/
declare function get_current_IVersion(): current.IVersion;
declare function use_old_IVersion(use: old.IVersion);
use_old_IVersion(get_current_IVersion());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "MessageType": {"forwardCompat": false}
*/
declare function get_old_MessageType(): old.MessageType;
declare function use_current_MessageType(use: current.MessageType);
use_current_MessageType(get_old_MessageType());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "MessageType": {"backCompat": false}
*/
declare function get_current_MessageType(): current.MessageType;
declare function use_old_MessageType(use: old.MessageType);
use_old_MessageType(get_current_MessageType());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "NackErrorType": {"forwardCompat": false}
*/
declare function get_old_NackErrorType(): old.NackErrorType;
declare function use_current_NackErrorType(use: current.NackErrorType);
use_current_NackErrorType(get_old_NackErrorType());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "NackErrorType": {"backCompat": false}
*/
declare function get_current_NackErrorType(): current.NackErrorType;
declare function use_old_NackErrorType(use: old.NackErrorType);
use_old_NackErrorType(get_current_NackErrorType());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "ScopeType": {"forwardCompat": false}
*/
declare function get_old_ScopeType(): old.ScopeType;
declare function use_current_ScopeType(use: current.ScopeType);
use_current_ScopeType(get_old_ScopeType());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "ScopeType": {"backCompat": false}
*/
declare function get_current_ScopeType(): current.ScopeType;
declare function use_old_ScopeType(use: old.ScopeType);
use_old_ScopeType(get_current_ScopeType());

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "SummaryObject": {"forwardCompat": false}
declare function get_old_SummaryObject(): old.SummaryObject;
declare function use_current_SummaryObject(use: current.SummaryObject);
use_current_SummaryObject(get_old_SummaryObject());
*/

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "SummaryObject": {"backCompat": false}
declare function get_current_SummaryObject(): current.SummaryObject;
declare function use_old_SummaryObject(use: old.SummaryObject);
use_old_SummaryObject(get_current_SummaryObject());
*/

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "SummaryTree": {"forwardCompat": false}
declare function get_old_SummaryTree(): old.SummaryTree;
declare function use_current_SummaryTree(use: current.SummaryTree);
use_current_SummaryTree(get_old_SummaryTree());
*/

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "SummaryTree": {"backCompat": false}
declare function get_current_SummaryTree(): current.SummaryTree;
declare function use_old_SummaryTree(use: old.SummaryTree);
use_old_SummaryTree(get_current_SummaryTree());
*/

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "SummaryType": {"forwardCompat": false}
declare function get_old_SummaryType(): old.SummaryType;
declare function use_current_SummaryType(use: current.SummaryType);
use_current_SummaryType(get_old_SummaryType());
*/

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "SummaryType": {"backCompat": false}
declare function get_current_SummaryType(): current.SummaryType;
declare function use_old_SummaryType(use: old.SummaryType);
use_old_SummaryType(get_current_SummaryType());
*/

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "SummaryTypeNoHandle": {"forwardCompat": false}
declare function get_old_SummaryTypeNoHandle(): old.SummaryTypeNoHandle;
declare function use_current_SummaryTypeNoHandle(use: current.SummaryTypeNoHandle);
use_current_SummaryTypeNoHandle(get_old_SummaryTypeNoHandle());
*/

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "SummaryTypeNoHandle": {"backCompat": false}
declare function get_current_SummaryTypeNoHandle(): current.SummaryTypeNoHandle;
declare function use_old_SummaryTypeNoHandle(use: old.SummaryTypeNoHandle);
use_old_SummaryTypeNoHandle(get_current_SummaryTypeNoHandle());
*/

/*
* validate forward compat by using old type in place of current type
* to disable, add in package.json under typeValidation.broken:
* "TreeEntry": {"forwardCompat": false}
*/
declare function get_old_TreeEntry(): old.TreeEntry;
declare function use_current_TreeEntry(use: current.TreeEntry);
use_current_TreeEntry(get_old_TreeEntry());

/*
* validate back compat by using current type in place of old type
* to disable, add in package.json under typeValidation.broken:
* "TreeEntry": {"backCompat": false}
*/
declare function get_current_TreeEntry(): current.TreeEntry;
declare function use_old_TreeEntry(use: old.TreeEntry);
use_old_TreeEntry(get_current_TreeEntry());
